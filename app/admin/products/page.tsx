"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Eye,
  ArrowLeft,
  Package 
} from "lucide-react"
import Link from "next/link"

export default function AdminProducts() {
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const loggedIn = localStorage.getItem("adminLoggedIn")
    if (!loggedIn) {
      router.push("/admin/login")
    } else {
      setIsLoggedIn(true)
    }
  }, [router])

  if (!isLoggedIn) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  const products = [
    { id: "1", title: "Seashell Hairpin", price: "$28.00", stock: 15, status: "Active", category: "Seashell" },
    { id: "2", title: "Seashell Necklace", price: "$42.00", stock: 12, status: "Active", category: "Seashell" },
    { id: "3", title: "Pipa Hair Clip", price: "$35.00", stock: 20, status: "Active", category: "Chinese Style" },
    { id: "4", title: "Butterfly Hairpin", price: "$38.00", stock: 15, status: "Active", category: "Chinese Style" },
    { id: "5", title: "Panda Doll", price: "$42.00", stock: 8, status: "Active", category: "Handknit" },
    { id: "6", title: "Straw Bag", price: "$48.00", stock: 10, status: "Active", category: "Handknit" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/admin/dashboard">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
              <h1 className="text-xl font-bold text-gray-900">Products</h1>
            </div>
            <Link href="/admin/products/new">
              <Button style={{ backgroundColor: '#C8161D', color: 'white' }}>
                <Plus className="h-4 w-4 mr-2" />
                Add Product
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <Input 
                    placeholder="Search products..." 
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline">All</Button>
                <Button variant="outline">Seashell</Button>
                <Button variant="outline">Chinese Style</Button>
                <Button variant="outline">Handknit</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Products Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Products</CardTitle>
            <CardDescription>
              Manage your product inventory
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Product</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Price</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Stock</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Category</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Status</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                            <Package className="h-6 w-6 text-gray-400" />
                          </div>
                          <div>
                            <div className="font-medium">{product.title}</div>
                            <div className="text-sm text-gray-500">ID: {product.id}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4 font-medium">{product.price}</td>
                      <td className="py-3 px-4">{product.stock}</td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-1 bg-gray-100 rounded text-xs">
                          {product.category}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                          {product.status}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}