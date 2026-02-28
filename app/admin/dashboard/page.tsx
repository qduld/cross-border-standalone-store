"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  ShoppingBag, 
  DollarSign, 
  Package, 
  Users, 
  ArrowUpRight, 
  ArrowDownRight,
  LogOut 
} from "lucide-react"
import Link from "next/link"

export default function AdminDashboard() {
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    // Check if logged in
    const loggedIn = localStorage.getItem("adminLoggedIn")
    if (!loggedIn) {
      router.push("/admin/login")
    } else {
      setIsLoggedIn(true)
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn")
    router.push("/admin/login")
  }

  if (!isLoggedIn) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Admin Header */}
      <header className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <span className="text-xl font-bold" style={{ color: '#C8161D' }}>
                Craft Shop Admin
              </span>
            </div>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-300">
                Total Revenue
              </CardTitle>
              <DollarSign className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$12,450</div>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                +15.2% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-300">
                Total Orders
              </CardTitle>
              <ShoppingBag className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">156</div>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                +8.1% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-300">
                Total Products
              </CardTitle>
              <Package className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">16</div>
              <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                3 active, 0 out of stock
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-300">
                Customers
              </CardTitle>
              <Users className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">89</div>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                +12 new today
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common admin tasks
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/admin/products">
                <Button variant="outline" className="w-full h-24 flex flex-col items-center justify-center space-y-2">
                  <Package className="h-6 w-6" />
                  <span>Products</span>
                </Button>
              </Link>
              <Link href="/admin/orders">
                <Button variant="outline" className="w-full h-24 flex flex-col items-center justify-center space-y-2">
                  <ShoppingBag className="h-6 w-6" />
                  <span>Orders</span>
                </Button>
              </Link>
              <Link href="/admin/customers">
                <Button variant="outline" className="w-full h-24 flex flex-col items-center justify-center space-y-2">
                  <Users className="h-6 w-6" />
                  <span>Customers</span>
                </Button>
              </Link>
              <Link href="/admin/settings">
                <Button variant="outline" className="w-full h-24 flex flex-col items-center justify-center space-y-2">
                  <DollarSign className="h-6 w-6" />
                  <span>Settings</span>
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Recent Orders */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>
              Latest customer orders
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-300">Order ID</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-300">Customer</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-300">Total</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-300">Status</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-300">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { id: "ORD-001", customer: "John Doe", total: "$85.00", status: "Completed", date: "2026-02-26" },
                    { id: "ORD-002", customer: "Jane Smith", total: "$42.00", status: "Processing", date: "2026-02-26" },
                    { id: "ORD-003", customer: "Bob Johnson", total: "$156.00", status: "Pending", date: "2026-02-25" },
                    { id: "ORD-004", customer: "Alice Brown", total: "$28.00", status: "Shipped", date: "2026-02-25" },
                    { id: "ORD-005", customer: "Charlie Wilson", total: "$95.00", status: "Completed", date: "2026-02-24" },
                  ].map((order) => (
                    <tr key={order.id} className="border-b hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="py-3 px-4 text-sm font-medium">{order.id}</td>
                      <td className="py-3 px-4 text-sm">{order.customer}</td>
                      <td className="py-3 px-4 text-sm font-medium">{order.total}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          order.status === 'Completed' ? 'bg-green-100 text-green-700' :
                          order.status === 'Processing' ? 'bg-blue-100 text-blue-700' :
                          order.status === 'Shipped' ? 'bg-purple-100 text-purple-700' :
                          'bg-yellow-100 text-yellow-700'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-300">{order.date}</td>
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