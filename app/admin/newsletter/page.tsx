"use client"

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import { Mail, Send, Users, CheckCircle, XCircle, Loader2 } from "lucide-react";

export default function NewsletterPage() {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [testEmail, setTestEmail] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [subscriberCount, setSubscriberCount] = useState(0);
  const [showTest, setShowTest] = useState(false);

  // 加载订阅者数量
  useEffect(() => {
    fetchSubscribers();
  }, []);

  const fetchSubscribers = async () => {
    try {
      const res = await fetch('/api/subscribe');
      const data = await res.json();
      if (data.success) {
        setSubscriberCount(data.subscribers.filter((s: any) => s.active).length);
      }
    } catch (error) {
      console.error('获取订阅者失败:', error);
    }
  };

  const handleSend = async (isTest: boolean = false) => {
    setIsSending(true);
    setStatus('idle');

    try {
      const body: any = { subject, message };
      if (isTest && testEmail) {
        body.testEmail = testEmail;
      }

      const res = await fetch('/api/admin/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setStatusMessage(data.message);
        if (!isTest) {
          setSubject('');
          setMessage('');
        }
      } else {
        setStatus('error');
        setStatusMessage(data.error || '发送失败');
      }
    } catch (error) {
      setStatus('error');
      setStatusMessage('网络错误，请稍后重试');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-red-50/30 to-white dark:bg-gray-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:text-white">
      <Navbar />

      {/* Header */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 py-16 border-b border-red-100 dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-700 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-red-700 to-orange-500 bg-clip-text text-transparent dark:text-white dark:bg-none">
            📧 群发邮件管理
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            向所有订阅者发送新品通知、特别优惠等内容
          </p>
          <div className="flex items-center gap-4 mt-6">
            <div className="flex items-center gap-2 bg-white dark:bg-gray-700 px-6 py-3 rounded-full shadow-lg">
              <Users className="w-5 h-5 text-red-600" />
              <span className="font-bold text-gray-900 dark:text-white">
                {subscriberCount} 位订阅者
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-xl border border-red-100 dark:border-gray-600">
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-red-700 to-orange-500 bg-clip-text text-transparent dark:text-white dark:bg-none">
            撰写邮件
          </h2>

          {/* Status Messages */}
          {status === 'success' && (
            <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
              <p className="text-green-800 dark:text-green-300">{statusMessage}</p>
            </div>
          )}

          {status === 'error' && (
            <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl flex items-center gap-3">
              <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0" />
              <p className="text-red-800 dark:text-red-300">{statusMessage}</p>
            </div>
          )}

          {/* Form */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                邮件主题
              </label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="例如：新品上架 - 春季系列"
                className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all dark:bg-gray-800 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                邮件内容（支持 HTML）
              </label>
              <textarea
                rows={12}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="输入邮件内容，例如：
&#60;p&#62;亲爱的订阅者，&#60;/p&#62;
&#60;p&#62;我们很高兴地宣布春季系列新品已经上架！&#60;/p&#62;
&#60;p&#62;这次我们带来了多款精美的手工饰品，包括贝壳发夹、中国风发夹和手工编织玩偶。&#60;/p&#62;
&#60;p&#62;特别优惠：全场满 $100 减 $20！&#60;/p&#62;"
                className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all resize-none font-mono text-sm dark:bg-gray-800 dark:text-white"
              />
            </div>

            {/* Test Email Toggle */}
            <div className="border-t border-gray-200 dark:border-gray-600 pt-6">
              <button
                type="button"
                onClick={() => setShowTest(!showTest)}
                className="text-sm text-red-600 dark:text-red-400 hover:underline"
              >
                {showTest ? '▼' : '▶'} 先发送测试邮件
              </button>

              {showTest && (
                <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    测试邮箱地址
                  </label>
                  <input
                    type="email"
                    value={testEmail}
                    onChange={(e) => setTestEmail(e.target.value)}
                    placeholder="test@example.com"
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all dark:bg-gray-700 dark:text-white"
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-4"
                    onClick={() => handleSend(true)}
                    disabled={isSending || !testEmail}
                  >
                    <Mail className="mr-2 w-4 h-4" />
                    发送测试邮件
                  </Button>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <Button
                variant="gradient"
                size="lg"
                className="flex-1"
                onClick={() => handleSend(false)}
                disabled={isSending || !subject || !message}
              >
                {isSending ? (
                  <>
                    <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                    发送中...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 w-5 h-5" />
                    群发邮件
                  </>
                )}
              </Button>
            </div>

            {/* Warning */}
            <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl">
              <p className="text-sm text-yellow-800 dark:text-yellow-300">
                ⚠️ <strong>注意：</strong>群发邮件将发送给所有 {subscriberCount} 位订阅者。建议先发送测试邮件检查内容。
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}