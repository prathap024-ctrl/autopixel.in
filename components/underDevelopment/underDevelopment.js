import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

export default function UnderDevelopmentPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center px-4">
            <div className="max-w-2xl mx-auto text-center space-y-8">
               
                {/* Logo */}
                <div className='flex items-center justify-center'>
               <Image width={256} height={256} src="/main-logo.png" alt="Logo" />

                </div>

                {/* Main Message */}
                <div className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                        Under Development
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        We&apos;re working hard to bring you something amazing. Our site will be launching soon!
                    </p>
                </div>

                {/* Contact Card */}
                <Card>
                    <CardContent className="p-6">
                        <p className="text-muted-foreground mb-4">
                            Have questions? Get in touch with us:
                        </p>
                        <Button
                            asChild
                            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        >
                            <a href="mailto:hello@autopixel.com">
                                ✉️ autopixel.in@gmail.com
                            </a>
                        </Button>
                    </CardContent>
                </Card>

                {/* Footer */}
                <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Autopixel. All rights reserved.
                </p>
            </div>
        </div>
    );
}