import { Terminal, Wifi, MessageSquare, Shield, Settings, Users, Lock, Radio, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DashboardPreviewPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-20">
                <div className="container mx-auto max-w-screen-2xl px-4 md:px-6">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm mb-6">
                            <Zap className="mr-2 h-4 w-4" />
                            Live Dashboard Preview
                        </div>
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">
                            Experience Lost-Link
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                            See how Lost-Link's sleek, dark-mode interface makes secure P2P messaging intuitive and beautiful.
                            Designed for professionals who demand both security and aesthetics.
                        </p>
                    </div>

                    {/* Feature Highlights */}
                    <div className="grid gap-6 md:grid-cols-3 mb-12 max-w-4xl mx-auto">
                        <div className="rounded-lg border bg-card p-4 text-center">
                            <Lock className="h-8 w-8 text-primary mx-auto mb-2" />
                            <h3 className="font-semibold mb-1">End-to-End Encrypted</h3>
                            <p className="text-xs text-muted-foreground">Military-grade AES-256 encryption</p>
                        </div>
                        <div className="rounded-lg border bg-card p-4 text-center">
                            <Wifi className="h-8 w-8 text-primary mx-auto mb-2" />
                            <h3 className="font-semibold mb-1">100% Offline</h3>
                            <p className="text-xs text-muted-foreground">No internet connection required</p>
                        </div>
                        <div className="rounded-lg border bg-card p-4 text-center">
                            <Radio className="h-8 w-8 text-primary mx-auto mb-2" />
                            <h3 className="font-semibold mb-1">P2P Architecture</h3>
                            <p className="text-xs text-muted-foreground">Direct peer-to-peer connections</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto max-w-screen-2xl px-4 md:px-6 pb-24">

                <div className="grid gap-16 max-w-6xl mx-auto">
                    {/* Screen 1: Dashboard Home */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold border-l-4 border-primary pl-4">Main Dashboard</h2>
                        <p className="text-muted-foreground">Your central hub for creating lobbies, joining chats, and managing connections. Features a pure black aesthetic with vibrant green accents for maximum focus.</p>

                        <div className="rounded-xl border border-zinc-800 bg-black overflow-hidden shadow-2xl md:aspect-video aspect-auto min-h-[600px] relative flex flex-col font-sans">
                            {/* Fake Title Bar */}
                            <div className="h-10 border-b border-zinc-800 flex items-center justify-between px-4 bg-zinc-950 shrink-0">
                                <div className="flex items-center gap-4 w-1/3">
                                    <div className="flex space-x-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center w-1/3">
                                    <div className="hidden md:flex px-2 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] text-zinc-500 font-mono items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.5)]"></span>
                                        ENCRYPTED CORE: ACTIVE
                                    </div>
                                </div>
                                <div className="flex justify-end gap-4 text-zinc-600 w-1/3">
                                    <div className="w-4 h-4"></div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 flex flex-col relative bg-black overflow-y-auto md:overflow-hidden">
                                {/* Top Bar inside content */}
                                <div className="h-16 border-b border-zinc-900 flex items-center justify-between px-4 md:px-8 shrink-0">
                                    <div className="text-zinc-500 text-xs font-mono tracking-widest hidden md:block">LOCAL NODES</div>
                                    <div className="flex items-center gap-4 mx-auto md:mx-0">
                                        <div className="w-8 h-8 rounded bg-zinc-900 flex items-center justify-center text-zinc-500 border border-zinc-800">
                                            <Radio className="w-4 h-4" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-white font-bold italic text-sm">NETWORK LOBBY</span>
                                            <span className="text-[10px] text-green-500 flex items-center gap-1"><Lock className="w-2 h-2" /> PENDING SECURE HANDSHAKE</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-zinc-500 hidden md:flex">
                                        <div className="w-8 h-8 flex items-center justify-center hover:text-white cursor-pointer">+</div>
                                        <div className="w-8 h-8 flex items-center justify-center hover:text-white cursor-pointer">⋮</div>
                                    </div>
                                </div>

                                <div className="flex-1 flex items-center justify-center p-8 relative">
                                    {/* Background Glow */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-3xl pointer-events-none"></div>

                                    <div className="z-10 text-center space-y-12 w-full">
                                        {/* Logo Area */}
                                        <div className="flex flex-col items-center space-y-4">
                                            <div className="w-16 h-16 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                                                <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
                                                    <div className="w-[14px] h-[2px] bg-white"></div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] mb-2">AUTHENTICATED AS</div>
                                                <h3 className="text-4xl font-black text-white tracking-tighter">user_name</h3>
                                                <h1 className="text-6xl font-black text-white tracking-tighter mt-2">LostLink</h1>
                                            </div>
                                        </div>

                                        {/* Cards Container */}
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl mx-auto">
                                            {/* Card 1 */}
                                            <div className="bg-zinc-950/50 border border-zinc-800/50 p-6 rounded-2xl text-left hover:border-zinc-700 hover:bg-zinc-900/50 transition-all cursor-pointer group h-full flex flex-col">
                                                <div className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center mb-4 text-zinc-400 group-hover:text-white">
                                                    <Users className="w-5 h-5" />
                                                </div>
                                                <h4 className="text-white font-bold text-lg mb-1">Start Host Lobby</h4>
                                                <p className="text-zinc-500 text-xs leading-relaxed mb-4 flex-1">Create a private lobby and control who joins</p>
                                                <div className="space-y-1.5 pt-4 border-t border-zinc-900/50">
                                                    <div className="flex items-center text-[10px] text-zinc-500"><span className="w-1 h-1 rounded-full bg-green-500 mr-2"></span> Approve/deny join requests</div>
                                                    <div className="flex items-center text-[10px] text-zinc-500"><span className="w-1 h-1 rounded-full bg-green-500 mr-2"></span> Kick users and lock lobby</div>
                                                </div>
                                            </div>
                                            {/* Card 2 */}
                                            <div className="bg-zinc-950/50 border border-zinc-800/50 p-6 rounded-2xl text-left hover:border-zinc-700 hover:bg-zinc-900/50 transition-all cursor-pointer group h-full flex flex-col">
                                                <div className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center mb-4 text-zinc-400 group-hover:text-white">
                                                    <Wifi className="w-5 h-5" />
                                                </div>
                                                <h4 className="text-white font-bold text-lg mb-1">Join Host Lobby</h4>
                                                <p className="text-zinc-500 text-xs leading-relaxed mb-4 flex-1">Discover and join existing host lobbies</p>
                                                <div className="space-y-1.5 pt-4 border-t border-zinc-900/50">
                                                    <div className="flex items-center text-[10px] text-zinc-500"><span className="w-1 h-1 rounded-full bg-green-500 mr-2"></span> Auto-discover LAN hosts</div>
                                                    <div className="flex items-center text-[10px] text-zinc-500"><span className="w-1 h-1 rounded-full bg-green-500 mr-2"></span> Secure request to join</div>
                                                </div>
                                            </div>
                                            {/* Card 3 */}
                                            <div className="bg-zinc-950/50 border border-zinc-800/50 p-6 rounded-2xl text-left hover:border-zinc-700 hover:bg-zinc-900/50 transition-all cursor-pointer group h-full flex flex-col">
                                                <div className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center mb-4 text-zinc-400 group-hover:text-white">
                                                    <MessageSquare className="w-5 h-5" />
                                                </div>
                                                <h4 className="text-white font-bold text-lg mb-1">Open P2P LAN Chat</h4>
                                                <p className="text-zinc-500 text-xs leading-relaxed mb-4 flex-1">Join an open peer-to-peer group chat</p>
                                                <div className="space-y-1.5 pt-4 border-t border-zinc-900/50">
                                                    <div className="flex items-center text-[10px] text-zinc-500"><span className="w-1 h-1 rounded-full bg-green-500 mr-2"></span> Direct peer communication</div>
                                                    <div className="flex items-center text-[10px] text-zinc-500"><span className="w-1 h-1 rounded-full bg-green-500 mr-2"></span> Auto peer discovery</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Bottom Bar */}
                                    <div className="absolute bottom-0 w-full p-4 flex justify-between items-center text-[10px] text-zinc-600 font-mono uppercase tracking-widest border-t border-zinc-900/50">
                                        <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div> Live Discovery</div>
                                        <div className="hidden md:block">Warning: Isolated Node. Scan Ongoing.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Screen 2: Chat Interface */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold border-l-4 border-primary pl-4">Encrypted Chat Interface</h2>
                        <p className="text-muted-foreground">Real-time messaging with end-to-end encryption. Every message is secured with AES-256-GCM encryption, ensuring your conversations remain private even on shared networks.</p>

                        <div className="rounded-xl border border-zinc-800 bg-black overflow-hidden shadow-2xl md:aspect-video aspect-auto min-h-[600px] relative flex font-sans">
                            {/* Sidebar */}
                            <div className="w-64 border-r border-zinc-900 bg-black p-4 hidden md:flex flex-col shrink-0">
                                <div className="font-black text-xs text-zinc-600 tracking-[0.2em] mb-6">LOCAL NODES</div>
                                <div className="space-y-2 flex-1">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="flex items-center gap-3 p-3 rounded-lg hover:bg-zinc-900 cursor-pointer transition-colors group">
                                            <div className="w-2 h-2 rounded-full bg-zinc-800 group-hover:bg-green-500 transition-colors shadow-none group-hover:shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
                                            <div className="text-xs font-mono text-zinc-400 group-hover:text-white">Peer_User_{i}</div>
                                        </div>
                                    ))}
                                </div>
                                {/* User Profile Bottom */}
                                <div className="pt-4 border-t border-zinc-900 flex items-center gap-3">
                                    <div className="w-8 h-8 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                                        <Users className="w-4 h-4 text-zinc-500" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs font-bold text-zinc-300">My Profile</span>
                                        <span className="text-[9px] text-zinc-600 font-mono">ID: 8X92...99A</span>
                                    </div>
                                </div>
                            </div>

                            {/* Main Chat */}
                            <div className="flex-1 flex flex-col bg-black overflow-hidden">
                                <div className="h-14 border-b border-zinc-900 flex items-center justify-between px-6 bg-black shrink-0">
                                    <div className="flex items-center gap-3">
                                        <div className="px-2 py-1 bg-green-500/10 border border-green-500/20 rounded text-[10px] text-green-500 font-mono flex items-center gap-1.5">
                                            <Shield className="w-3 h-3" />
                                            ENCRYPTED SESSION
                                        </div>
                                    </div>
                                    <div className="text-zinc-500 hover:text-white cursor-pointer"><Settings className="w-4 h-4" /></div>
                                </div>

                                <div className="flex-1 p-6 space-y-6 overflow-y-auto bg-black relative">
                                    {/* Placeholder for empty state or messages */}
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                                        <div className="text-[100px] font-black text-zinc-900 select-none">LOSTLINK</div>
                                    </div>

                                    <div className="flex justify-start">
                                        <div className="max-w-[85%] md:max-w-[70%]">
                                            <div className="bg-zinc-900 text-zinc-300 px-4 py-3 rounded-2xl rounded-tl-sm text-sm border border-zinc-800">
                                                <p>Handshake verified. Session key established via ECDH P-256.</p>
                                            </div>
                                            <span className="text-[10px] text-zinc-700 ml-1 mt-1 block">System • 10:42 AM</span>
                                        </div>
                                    </div>

                                    <div className="flex justify-end">
                                        <div className="max-w-[85%] md:max-w-[70%] text-right">
                                            <div className="bg-green-500 text-black px-4 py-3 rounded-2xl rounded-tr-sm text-sm font-medium shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                                                <p>Confirmed. Ready to transfer files securely?</p>
                                            </div>
                                            <span className="text-[10px] text-zinc-700 mr-1 mt-1 block">You • 10:43 AM</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-black shrink-0">
                                    <div className="bg-zinc-950 rounded-xl border border-zinc-800 flex items-center px-4 py-3 focus-within:border-zinc-700 transition-colors">
                                        <input type="text" placeholder="Type a message..." className="bg-transparent border-none outline-none text-sm text-white placeholder:text-zinc-600 flex-1 min-w-0" />
                                        <div className="flex items-center gap-2 text-zinc-600 shrink-0">
                                            <div className="hover:text-zinc-400 cursor-pointer"><Lock className="w-4 h-4" /></div>
                                        </div>
                                    </div>
                                    <div className="text-center mt-2 text-[9px] text-zinc-800 hidden md:block">RSA-2048 IDENTITY KEYS GENERATED IN-MEMORY</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto max-w-screen-2xl px-4 md:px-6">
                    <div className="rounded-2xl border bg-gradient-to-br from-background to-muted/30 p-12 text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold tracking-tighter mb-4">
                            Ready to Try It Yourself?
                        </h2>
                        <p className="text-muted-foreground text-lg mb-8">
                            Download Lost-Link and start communicating securely on your local network in minutes.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" asChild>
                                <Link href="/download">
                                    Download Now
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <Link href="/docs">Read Documentation</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
