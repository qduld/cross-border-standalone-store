"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { 
  ArrowLeft,
  ShoppingBag,
  Search,
  Eye,
  Package,
  CheckCircle,
  XCircle,
  Clock,
  Truck
} from "lucide-react"
import Link from "next/link"

export default function AdminOrders() {
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

  const orders = [
    { 
      id: "ORD-001", 
      customer: "John Doe", 
      email: "john@example.com",
      total: "$85.00", 
      items: 3,
      status: "Completed", 
      date: "2026-02-26",
      payment: "Stripe"
    },
    { 
      id: "ORD-002", 
      customer: "Jane Smith", 
      email: "jane@example.com",
      total: "$42.00", 
      items: 1,
      status: "Processing", 
      date: "2026-02-26",
      payment: "Stripe"
    },
    { 
      id: "ORD-003", 
      customer: "Bob Johnson", 
      email: "bob@example.com",
      total: "$156.00", 
      items: 4,
      status: "Pending", 
      date: "2026-02-25",
      payment: "PayPal"
    },
    { 
      id: "ORD-004", 
      customer: "Alice Brown", 
      email: "alice@example.com",
      total: "$28.00", 
      items: 1,
      status: "Shipped", 
      date: "2026-02-25",
      payment: "Stripe"
    },
    { 
      id: "ORD-005", 
      customer: "Charlie Wilson", 
      email: "charlie@example.com",
      total: "$95.00", 
      items: 2,
      status: "Cancelled", 
      date: "2026-02-24",
      payment: "Stripe"
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed': return <CheckCircle className="h-4 w-4 text-green-600" />
      case 'Processing': return <Clock className="h-4 w-4 text-blue-600" />
      case 'Shipped': return <Truck className="h-4 w-4 text-purple-600" />
      case 'Cancelled': return <XCircle className="h-4 w-4 text-red-600" />
      default: return <Package className="h-4 w-4 text-gray-600 dark:text-gray-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-400'
      case 'Processing': return 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-400'
      case 'Shipped': return 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-400'
      case 'Cancelled': return 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-400'
      default: return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-400'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Admin Header */}
      <header className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/admin/dashboard">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">Orders</h1>
            </div>
            <Button variant="outline">
              <ShoppingBag className="h-4 w-4 mr-2" />
              Export Orders
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Status Filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          <Button variant="default">All Orders</Button>
          <Button variant="outline">Pending (1)</Button>
          <Button variant="outline">Processing (1)</Button>
          <Button variant="outline">Shipped (1)</Button>
          <Button variant="outline">Completed (1)</Button>
          <Button variant="outline">Cancelled (1)</Button>
        </div>

        {/* Search */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              <Input 
                placeholder="Search orders by ID, customer name, or email..."
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Orders Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Orders</CardTitle>
            <CardDescription>
              Manage customer orders
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-300">Order ID</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-300">Customer</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-300">Items</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-300">Total</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-300">Payment</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-300">Status</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-300">Date</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-300">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id} className="border-b hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="py-3 px-4 font-medium">{order.id}</td>
                      <td className="py-3 px-4">
                        <div>
                          <div className="font-medium">{order.customer}</div>
                          <div className="text-sm text-gray-500">{order.email}</div>
                        </div>
                      </td>
                      <td className="py-3 px-4">{order.items}</td>
                      <td className="py-3 px-4 font-medium">{order.total}</td>
                      <td className="py-3 px-4">
                        <span className="text-sm text-gray-600 dark:text-gray-300">{order.payment}</span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center space-x-2">
                          {getStatusIcon(order.status)}
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                            {order.status}
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-300">{order.date}</td>
                      <td className="py-3 px-4">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
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