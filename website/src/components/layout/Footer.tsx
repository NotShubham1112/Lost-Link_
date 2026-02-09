import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t py-6 md:py-0">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row max-w-screen-2xl px-4 md:px-6">
                <div className="flex flex-col items-center gap-4 md:flex-row md:gap-2">
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                        Built by{" "}
                        <a
                            href="https://github.com/NotShubham1112"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium underline underline-offset-4"
                        >
                            Shubham
                        </a>
                        . The source code is available on{" "}
                        <a
                            href="https://github.com/NotShubham1112/Lost-Link"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium underline underline-offset-4"
                        >
                            GitHub
                        </a>
                        .
                    </p>
                </div>
                <p className="text-center text-sm text-muted-foreground md:text-right">
                    &copy; {new Date().getFullYear()} Lost-Link. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
