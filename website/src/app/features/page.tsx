import { Shield, Wifi, Lock, Users, FolderUp, Radio, Zap, Server, Eye } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FeaturesPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-20 md:py-32">
                <div className="container mx-auto max-w-screen-2xl px-4 md:px-6">
                    <div className="mx-auto max-w-3xl text-center">
                        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm mb-6">
                            <Zap className="mr-2 h-4 w-4" />
                            Production-Ready Features
                        </div>
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-6">
                            Secure Communication
                            <br />
                            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Without Compromise</span>
                        </h1>
                        <p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl mb-8">
                            Lost-Link delivers enterprise-grade security with zero internet dependency.
                            Perfect for offline environments, sensitive communications, and local network collaboration.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" asChild>
                                <Link href="/download">Download Now</Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <Link href="/docs">Read Documentation</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Features Grid */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto max-w-screen-2xl px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                            Core Features
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Everything you need for secure, offline communication on your local network.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {/* Feature 1 */}
                        <div className="group relative overflow-hidden rounded-xl border bg-background p-8 hover:border-primary/50 transition-all">
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <Lock className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">End-to-End Encryption</h3>
                            <p className="text-muted-foreground mb-4">
                                Military-grade AES-256 encryption ensures your messages stay private. ECDH P-256 key exchange
                                provides perfect forward secrecy.
                            </p>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-0.5">✓</span>
                                    <span>AES-256-GCM encryption</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-0.5">✓</span>
                                    <span>RSA-2048 identity keys</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-0.5">✓</span>
                                    <span>Perfect forward secrecy</span>
                                </li>
                            </ul>
                        </div>

                        {/* Feature 2 */}
                        <div className="group relative overflow-hidden rounded-xl border bg-background p-8 hover:border-primary/50 transition-all">
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <Wifi className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Zero Internet Required</h3>
                            <p className="text-muted-foreground mb-4">
                                Works completely offline on your local network. No cloud services, no external servers,
                                no data leaving your LAN.
                            </p>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-0.5">✓</span>
                                    <span>LAN-only communication</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-0.5">✓</span>
                                    <span>No cloud dependency</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-0.5">✓</span>
                                    <span>Air-gapped network support</span>
                                </li>
                            </ul>
                        </div>

                        {/* Feature 3 */}
                        <div className="group relative overflow-hidden rounded-xl border bg-background p-8 hover:border-primary/50 transition-all">
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <Radio className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">P2P Architecture</h3>
                            <p className="text-muted-foreground mb-4">
                                Direct peer-to-peer connections with automatic discovery. No central server bottleneck
                                or single point of failure.
                            </p>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-0.5">✓</span>
                                    <span>Auto peer discovery (mDNS)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-0.5">✓</span>
                                    <span>WebRTC data channels</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-0.5">✓</span>
                                    <span>Mesh network topology</span>
                                </li>
                            </ul>
                        </div>

                        {/* Feature 4 */}
                        <div className="group relative overflow-hidden rounded-xl border bg-background p-8 hover:border-primary/50 transition-all">
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <FolderUp className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Secure File Sharing</h3>
                            <p className="text-muted-foreground mb-4">
                                Transfer files up to 2GB with the same encryption as messages. Chunked transfers with
                                progress tracking and resume capability.
                            </p>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-0.5">✓</span>
                                    <span>Files up to 2GB</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-0.5">✓</span>
                                    <span>Chunked encrypted transfers</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-0.5">✓</span>
                                    <span>Progress tracking & resume</span>
                                </li>
                            </ul>
                        </div>

                        {/* Feature 5 */}
                        <div className="group relative overflow-hidden rounded-xl border bg-background p-8 hover:border-primary/50 transition-all">
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <Users className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Group Chat Rooms</h3>
                            <p className="text-muted-foreground mb-4">
                                Create encrypted group chats with unlimited participants. Real-time messaging with
                                presence indicators and typing notifications.
                            </p>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-0.5">✓</span>
                                    <span>Unlimited participants</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-0.5">✓</span>
                                    <span>Real-time presence</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-0.5">✓</span>
                                    <span>Typing indicators</span>
                                </li>
                            </ul>
                        </div>

                        {/* Feature 6 */}
                        <div className="group relative overflow-hidden rounded-xl border bg-background p-8 hover:border-primary/50 transition-all">
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <Shield className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Host Controls</h3>
                            <p className="text-muted-foreground mb-4">
                                Full lobby management for hosts. Approve or deny join requests, kick users, lock lobbies,
                                and maintain complete control.
                            </p>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-0.5">✓</span>
                                    <span>Join request approval</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-0.5">✓</span>
                                    <span>Kick/ban capabilities</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-0.5">✓</span>
                                    <span>Lobby lock/unlock</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Details */}
            <section className="py-20">
                <div className="container mx-auto max-w-screen-2xl px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                            Technical Specifications
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Built with modern technologies and industry-standard security protocols.
                        </p>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-2">
                        <div className="rounded-xl border bg-background p-8">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <Server className="h-6 w-6 text-primary" />
                                Architecture
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold mb-2">Electron Framework</h4>
                                    <p className="text-sm text-muted-foreground">Cross-platform desktop application built with Electron, supporting Windows, macOS, and Linux.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">WebRTC Data Channels</h4>
                                    <p className="text-sm text-muted-foreground">Real-time peer-to-peer communication using WebRTC for low-latency messaging and file transfers.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">mDNS Discovery</h4>
                                    <p className="text-sm text-muted-foreground">Automatic peer discovery on local networks using Multicast DNS (Bonjour/Avahi).</p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-xl border bg-background p-8">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <Eye className="h-6 w-6 text-primary" />
                                Security
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold mb-2">Encryption Standards</h4>
                                    <p className="text-sm text-muted-foreground">AES-256-GCM for message encryption, ECDH P-256 for key exchange, RSA-2048 for identity verification.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">Perfect Forward Secrecy</h4>
                                    <p className="text-sm text-muted-foreground">Session keys are ephemeral and never stored, ensuring past communications remain secure.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">No Data Collection</h4>
                                    <p className="text-sm text-muted-foreground">Zero telemetry, analytics, or data collection. Your communications stay on your network.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto max-w-screen-2xl px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                            Perfect For
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Lost-Link excels in environments where security and offline capabilities are critical.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <div className="rounded-lg border bg-background p-6">
                            <h3 className="font-bold text-lg mb-2">Corporate Networks</h3>
                            <p className="text-sm text-muted-foreground">Secure internal communications without exposing sensitive data to external networks or cloud services.</p>
                        </div>
                        <div className="rounded-lg border bg-background p-6">
                            <h3 className="font-bold text-lg mb-2">Research Facilities</h3>
                            <p className="text-sm text-muted-foreground">Collaborate on sensitive research data in air-gapped environments with complete security.</p>
                        </div>
                        <div className="rounded-lg border bg-background p-6">
                            <h3 className="font-bold text-lg mb-2">Healthcare</h3>
                            <p className="text-sm text-muted-foreground">HIPAA-compliant communication within hospital networks without internet exposure.</p>
                        </div>
                        <div className="rounded-lg border bg-background p-6">
                            <h3 className="font-bold text-lg mb-2">Government & Defense</h3>
                            <p className="text-sm text-muted-foreground">Classified communications in secure facilities with no external network access.</p>
                        </div>
                        <div className="rounded-lg border bg-background p-6">
                            <h3 className="font-bold text-lg mb-2">Event Coordination</h3>
                            <p className="text-sm text-muted-foreground">Coordinate teams at conferences, festivals, or events without relying on cellular or WiFi.</p>
                        </div>
                        <div className="rounded-lg border bg-background p-6">
                            <h3 className="font-bold text-lg mb-2">Development Teams</h3>
                            <p className="text-sm text-muted-foreground">Share code and collaborate in isolated development environments.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20">
                <div className="container mx-auto max-w-screen-2xl px-4 md:px-6">
                    <div className="rounded-2xl border bg-gradient-to-br from-background to-muted/30 p-12 text-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                            Ready to Get Started?
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
                            Download Lost-Link and experience secure, offline communication on your local network.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" asChild>
                                <Link href="/download">Download for Free</Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <Link href="/dashboard-preview">View Screenshots</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
