import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Terminal, Users } from "lucide-react";

export function HeroSection() {
    return (
        <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center text-center space-y-8">
                    <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm">
                        <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                        v1.0.0 Now Available
                    </div>

                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                        Secure P2P Messaging for Local Networks
                    </h1>

                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Chat, share files, and collaborate securely without internet access.
                        Lost-Link creates an encrypted mesh network right on your LAN.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 min-w-[200px]">
                        <Button size="lg" className="h-12 px-8 text-base" asChild>
                            <Link href="/download">
                                <Download className="mr-2 h-5 w-5" /> Download Now
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="h-12 px-8 text-base" asChild>
                            <Link href="/docs">
                                Read Documentation <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>

                    {/* Dashboard Preview Mockup */}
                    <div className="relative mt-12 w-full max-w-5xl mx-auto">
                        <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-green-500/20 to-green-900/20 blur opacity-30"></div>
                        <div className="relative rounded-xl border border-zinc-800 bg-background/95 backdrop-blur shadow-2xl overflow-hidden text-left">
                            {/* Fake Window Bar */}
                            <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-3 bg-black/50">
                                <div className="flex space-x-2">
                                    <div className="h-3 w-3 rounded-full bg-red-500/50"></div>
                                    <div className="h-3 w-3 rounded-full bg-yellow-500/50"></div>
                                    <div className="h-3 w-3 rounded-full bg-green-500/50"></div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="px-2 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] text-zinc-400 font-mono flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                        ENCRYPTED SESSION
                                    </div>
                                </div>
                                <div className="w-16"></div> {/* Spacer for balance */}
                            </div>

                            {/* Mock UI Content - Matches Screenshot 3 */}
                            <div className="p-8 md:p-16 flex flex-col items-center justify-center space-y-10 min-h-[400px] bg-black">

                                {/* Logo Center */}
                                <div className="flex flex-col items-center space-y-6">
                                    <div className="h-20 w-20 rounded-full bg-zinc-900/50 border border-zinc-800 flex items-center justify-center">
                                        <Terminal className="h-10 w-10 text-white" />
                                    </div>
                                    <div className="text-center">
                                        <div className="text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-1">AUTHENTICATED AS</div>
                                        <div className="text-xl font-bold text-white mb-2">user_name</div>
                                        <h2 className="text-5xl font-extrabold tracking-tighter text-white">
                                            Lost<span className="text-white">Link</span>
                                        </h2>
                                    </div>
                                </div>

                                {/* 3 Cards */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
                                    {/* Card 1 */}
                                    <div className="group flex flex-col items-start p-6 rounded-xl border border-zinc-800 bg-zinc-950/50 hover:bg-zinc-900 transition-all cursor-pointer">
                                        <div className="h-12 w-12 rounded-lg bg-zinc-900 flex items-center justify-center mb-4 group-hover:text-white text-zinc-400">
                                            <Users className="h-6 w-6" />
                                        </div>
                                        <h3 className="font-bold text-lg text-white mb-2">Start Host Lobby</h3>
                                        <p className="text-sm text-zinc-500 mb-4">Create a private lobby and control who joins</p>
                                        <div className="space-y-2 mt-auto">
                                            <div className="flex items-center text-xs text-zinc-500"><div className="w-3 h-3 rounded-full border border-green-500 flex items-center justify-center mr-2"><div className="w-1 h-1 bg-green-500 rounded-full"></div></div> Approve/deny join requests</div>
                                            <div className="flex items-center text-xs text-zinc-500"><div className="w-3 h-3 rounded-full border border-green-500 flex items-center justify-center mr-2"><div className="w-1 h-1 bg-green-500 rounded-full"></div></div> Kick users and lock lobby</div>
                                        </div>
                                    </div>

                                    {/* Card 2 */}
                                    <div className="group flex flex-col items-start p-6 rounded-xl border border-zinc-800 bg-zinc-950/50 hover:bg-zinc-900 transition-all cursor-pointer">
                                        <div className="h-12 w-12 rounded-lg bg-zinc-900 flex items-center justify-center mb-4 group-hover:text-white text-zinc-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0" /><path d="M1.42 9a16 16 0 0 1 21.16 0" /><path d="M8.53 16.11a6 6 0 0 1 6.95 0" /><line x1="12" y1="20" x2="12.01" y2="20" /></svg>
                                        </div>
                                        <h3 className="font-bold text-lg text-white mb-2">Join Host Lobby</h3>
                                        <p className="text-sm text-zinc-500 mb-4">Discover and join existing host lobbies</p>
                                        <div className="space-y-2 mt-auto">
                                            <div className="flex items-center text-xs text-zinc-500"><div className="w-3 h-3 rounded-full border border-green-500 flex items-center justify-center mr-2"><div className="w-1 h-1 bg-green-500 rounded-full"></div></div> Auto-discover LAN hosts</div>
                                            <div className="flex items-center text-xs text-zinc-500"><div className="w-3 h-3 rounded-full border border-green-500 flex items-center justify-center mr-2"><div className="w-1 h-1 bg-green-500 rounded-full"></div></div> Secure request to join</div>
                                        </div>
                                    </div>

                                    {/* Card 3 */}
                                    <div className="group flex flex-col items-start p-6 rounded-xl border border-zinc-800 bg-zinc-950/50 hover:bg-zinc-900 transition-all cursor-pointer">
                                        <div className="h-12 w-12 rounded-lg bg-zinc-900 flex items-center justify-center mb-4 group-hover:text-white text-zinc-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 1 3 3v2.24a3 3 0 0 1-.75 2" /><path d="M18.63 7.82A3 3 0 0 1 22 10v2.24a3 3 0 0 1-.36 1.45" /><path d="M6 8a3 3 0 0 1 3-3" /><path d="M2.37 7.82A3 3 0 0 1 2 5V2.76A3 3 0 0 1 4.24.53" /><path d="M4 14a3 3 0 0 1 3 3v2.24a3 3 0 0 1-.75 2" /><path d="M22 14a3 3 0 0 1-2.65 2.87" /><path d="M12 22a3 3 0 0 1-3-3v-2.24a3 3 0 0 1 .75-2" /></svg>
                                        </div>
                                        <h3 className="font-bold text-lg text-white mb-2">Open P2P LAN Chat</h3>
                                        <p className="text-sm text-zinc-500 mb-4">Join an open peer-to-peer group chat</p>
                                        <div className="space-y-2 mt-auto">
                                            <div className="flex items-center text-xs text-zinc-500"><div className="w-3 h-3 rounded-full border border-green-500 flex items-center justify-center mr-2"><div className="w-1 h-1 bg-green-500 rounded-full"></div></div> Direct peer communication</div>
                                            <div className="flex items-center text-xs text-zinc-500"><div className="w-3 h-3 rounded-full border border-green-500 flex items-center justify-center mr-2"><div className="w-1 h-1 bg-green-500 rounded-full"></div></div> Auto peer discovery</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
