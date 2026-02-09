import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Monitor, Apple, Smartphone } from "lucide-react";

export default function DownloadPage() {
    return (
        <div className="container mx-auto max-w-screen-2xl px-4 md:px-6 py-24 md:py-32">
            <div className="flex flex-col items-center text-center space-y-8 mb-16">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Download Lost-Link</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                    Get the latest version for your operating system. Secure, offline messaging is just a click away.
                </p>
                <div className="inline-flex items-center rounded-full border bg-muted px-4 py-2 text-sm">
                    <span className="font-semibold mr-2">Latest Version:</span>
                    <span className="text-primary font-mono">v0.1.1</span>
                    <span className="mx-2 text-muted-foreground">•</span>
                    <span className="text-muted-foreground">72.9 MB</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {/* Windows */}
                <div className="flex flex-col items-center p-8 rounded-xl border bg-card text-card-foreground shadow-sm">
                    <div className="mb-4 p-4 rounded-full bg-primary/10">
                        <Monitor className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Windows</h3>
                    <p className="text-sm text-muted-foreground mb-6">Windows 10/11 (x64)</p>
                    <Button className="w-full" asChild>
                        <a href="/lost-link-0.1.1-setup.exe" download="lost-link-0.1.1-setup.exe">
                            Download .exe
                        </a>
                    </Button>
                </div>

                {/* macOS */}
                <div className="flex flex-col items-center p-8 rounded-xl border bg-card text-card-foreground shadow-sm opacity-60 relative overflow-hidden">
                    <div className="absolute top-3 right-3 bg-yellow-500/20 text-yellow-500 text-xs px-2 py-1 rounded-full font-mono">Coming Soon</div>
                    <div className="mb-4 p-4 rounded-full bg-primary/10">
                        <Apple className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">macOS</h3>
                    <p className="text-sm text-muted-foreground mb-6">Apple Silicon & Intel</p>
                    <Button className="w-full" disabled>
                        Not Available Yet
                    </Button>
                </div>

                {/* Linux */}
                <div className="flex flex-col items-center p-8 rounded-xl border bg-card text-card-foreground shadow-sm opacity-60 relative">
                    <div className="absolute top-3 right-3 bg-yellow-500/20 text-yellow-500 text-xs px-2 py-1 rounded-full font-mono">Coming Soon</div>
                    <div className="mb-4 p-4 rounded-full bg-primary/10">
                        <Smartphone className="h-8 w-8 text-primary" /> {/* Using Smartphone/Terminal icon generic */}
                    </div>
                    <h3 className="text-xl font-bold mb-2">Linux</h3>
                    <p className="text-sm text-muted-foreground mb-6">Debian/Ubuntu/AppImage</p>
                    <Button className="w-full" disabled>
                        Not Available Yet
                    </Button>
                </div>
            </div>

            <div className="mt-20 text-center">
                <h2 className="text-2xl font-bold mb-4">Source Code</h2>
                <p className="text-muted-foreground mb-8">
                    Prefer to build from source? Check out our GitHub repository.
                </p>
                <Button variant="outline" size="lg" asChild>
                    <Link href="https://github.com/NotShubham1112/Lost-Link" target="_blank">
                        <Github className="mr-2 h-5 w-5" />
                        View on GitHub
                    </Link>
                </Button>
            </div>
        </div>
    );
}
