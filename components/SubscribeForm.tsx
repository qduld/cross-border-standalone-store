"use client"

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Mail, CheckCircle, XCircle, Loader2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface SubscribeFormProps {
  className?: string;
  placeholder?: string;
  buttonText?: string;
}

export default function SubscribeForm({
  className = "",
  placeholder,
  buttonText
}: SubscribeFormProps) {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setMessage(data.message || '订阅成功！');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || '订阅失败，请稍后重试');
      }
    } catch (error) {
      setStatus('error');
      setMessage('网络错误，请稍后重试');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder || t("输入您的邮箱", "Enter your email")}
            className="flex-1 px-6 py-4 rounded-full border-2 border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-500 transition-all duration-200 text-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
            required
          />
          <Button
            type="submit"
            variant="gradient"
            size="lg"
            className="rounded-full px-8 whitespace-nowrap"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                {t("提交中...", "Submitting...")}
              </>
            ) : (
              <>
                <Mail className="mr-2 w-5 h-5" />
                {buttonText || t("订阅", "Subscribe")} →
              </>
            )}
          </Button>
        </div>

        {/* Status Messages */}
        {status === 'success' && (
          <div className="flex items-center gap-2 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-4 py-2 rounded-lg">
            <CheckCircle className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm">{message}</span>
          </div>
        )}

        {status === 'error' && (
          <div className="flex items-center gap-2 text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 px-4 py-2 rounded-lg">
            <XCircle className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm">{message}</span>
          </div>
        )}
      </div>
    </form>
  );
}