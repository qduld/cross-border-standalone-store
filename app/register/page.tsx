"use client"

import { useState } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { useLanguage } from "@/context/LanguageContext"

export default function RegisterPage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Validation
    if (!formData.name || !formData.email || !formData.password) {
      alert(t("请填写所有必填字段", "Please fill in all required fields"))
      setIsLoading(false)
      return
    }

    if (formData.password.length < 6) {
      alert(t("密码至少需要6位", "Password must be at least 6 characters"))
      setIsLoading(false)
      return
    }

    if (formData.password !== formData.confirmPassword) {
      alert(t("两次输入的密码不一致", "Passwords do not match"))
      setIsLoading(false)
      return
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Save user
    localStorage.setItem("user", JSON.stringify({
      email: formData.email,
      name: formData.name,
      isLoggedIn: true
    }))

    // Redirect to account page
    window.location.href = "/account"
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-red-50/30 to-white dark:bg-gray-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:text-white">
      <Navbar />

      <div className="max-w-md mx-auto px-4 py-20">
        <Card className="border border-red-100 dark:border-gray-600 dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-red-700 to-orange-500 bg-clip-text text-transparent dark:text-white dark:bg-none">
              {t("创建账户", "Create Account")}
            </CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400">
              {t("注册以享受更好的购物体验", "Sign up for a better shopping experience")}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">{t("姓名", "Name")}</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder={t("张三", "John Doe")}
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">{t("邮箱", "Email")}</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t("your@email.com", "your@email.com")}
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">{t("密码", "Password")}</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder={t("••••••••", "••••••••")}
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {t("至少6个字符", "At least 6 characters")}
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">{t("确认密码", "Confirm Password")}</Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder={t("••••••••", "••••••••")}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>

              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  required
                  className="mt-1 rounded dark:bg-gray-700"
                />
                <label className="text-sm text-gray-600 dark:text-gray-400 cursor-pointer">
                  {t("我同意", "I agree to the ")}
                  <Link href="/terms" className="text-red-600 hover:underline mx-1">
                    {t("服务条款", "Terms of Service")}
                  </Link>
                  {t("和", " and ")}
                  <Link href="/privacy" className="text-red-600 hover:underline mx-1">
                    {t("隐私政策", "Privacy Policy")}
                  </Link>
                </label>
              </div>

              <Button type="submit" variant="gradient" className="w-full" disabled={isLoading}>
                {isLoading ? t("注册中...", "Creating account...") : t("注册", "Sign Up")}
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t dark:border-gray-600" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                    {t("或者", "Or continue with")}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button type="button" variant="outline" className="w-full dark:border-gray-600 dark:text-white">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  Google
                </Button>
                <Button type="button" variant="outline" className="w-full dark:border-gray-600 dark:text-white">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </Button>
              </div>

              <div className="text-center text-sm">
                <span className="text-gray-600 dark:text-gray-400">
                  {t("已有账户？", "Already have an account?")}{" "}
                  <Link href="/login" className="text-red-600 hover:underline font-medium">
                    {t("登录", "Sign In")}
                  </Link>
                </span>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  )
}