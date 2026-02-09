import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-14 max-w-screen-2xl items-center px-4 md:px-6">
                <Link href="/" className="flex items-center space-x-2 font-bold text-xl">
                    <span className="text-primary tracking-tighter">Lost-Link</span>
                </Link>
                <nav className="ml-6 hidden md:flex items-center space-x-6 text-sm font-medium">
                    <Link href="/features" className="transition-colors hover:text-foreground/80 text-foreground/60">Features</Link>
                    <Link href="/docs" className="transition-colors hover:text-foreground/80 text-foreground/60">Docs</Link>
                    <Link href="/dashboard-preview" className="transition-colors hover:text-foreground/80 text-foreground/60">Preview</Link>
                </nav>
                <div className="flex flex-1 items-center justify-end space-x-2 md:space-x-4">
                    <Button variant="ghost" size="sm" asChild>
                        <Link href="https://github.com/NotShubham1112/Lost-Link" target="_blank" rel="noreferrer">
                            GitHub
                        </Link>
                    </Button>
                    <Button size="sm" asChild>
                        <Link href="/download">Download</Link>
                    </Button>
                </div>
            </div>
        </header>
    );
}
