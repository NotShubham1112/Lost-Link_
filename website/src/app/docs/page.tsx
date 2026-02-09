import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, Terminal, Download, Users, Lock, Wifi, FolderUp, Radio, Shield, AlertCircle, CheckCircle2, HelpCircle } from "lucide-react";

export default function DocsPage() {
    return (
        <div className="min-h-screen">
            <div className="container mx-auto max-w-screen-2xl px-4 md:px-6 py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar Navigation */}
                    <aside className="w-full lg:w-64 flex-shrink-0">
                        <div className="lg:sticky lg:top-24 space-y-8">
                            <div>
                                <h4 className="font-bold mb-4 text-primary">Documentation</h4>
                                <nav className="space-y-1">
                                    <a href="#quick-start" className="block px-3 py-2 text-sm font-medium hover:text-primary hover:bg-muted rounded-md transition-colors">Quick Start</a>
                                    <a href="#architecture" className="block px-3 py-2 text-sm font-medium hover:text-primary hover:bg-muted rounded-md transition-colors">Architecture</a>
                                    <a href="#user-guide" className="block px-3 py-2 text-sm font-medium hover:text-primary hover:bg-muted rounded-md transition-colors">User Guide</a>
                                    <a href="#security" className="block px-3 py-2 text-sm font-medium hover:text-primary hover:bg-muted rounded-md transition-colors">Security</a>
                                    <a href="#troubleshooting" className="block px-3 py-2 text-sm font-medium hover:text-primary hover:bg-muted rounded-md transition-colors">Troubleshooting</a>
                                    <a href="#faq" className="block px-3 py-2 text-sm font-medium hover:text-primary hover:bg-muted rounded-md transition-colors">FAQ</a>
                                </nav>
                            </div>
                            <div className="rounded-lg border bg-muted/30 p-4">
                                <p className="text-sm font-medium mb-2">Need help?</p>
                                <p className="text-xs text-muted-foreground mb-3">Check out our GitHub for issues and discussions.</p>
                                <Button size="sm" variant="outline" className="w-full" asChild>
                                    <Link href="https://github.com/NotShubham1112/Lost-Link" target="_blank">
                                        View on GitHub
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="flex-1 min-w-0">
                        {/* Hero */}
                        <div className="mb-12">
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">
                                Lost-Link Documentation
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-3xl">
                                Complete guide to installing, configuring, and using Lost-Link for secure P2P messaging on your local network.
                            </p>
                        </div>

                        {/* Quick Start */}
                        <section id="quick-start" className="mb-16 scroll-mt-24">
                            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                <Terminal className="h-8 w-8 text-primary" />
                                Quick Start
                            </h2>

                            <div className="space-y-6">
                                <div className="rounded-lg border bg-card p-6">
                                    <h3 className="text-xl font-bold mb-4">Installation</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="font-semibold mb-2 flex items-center gap-2">
                                                <Download className="h-4 w-4" />
                                                Windows
                                            </h4>
                                            <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground ml-6">
                                                <li>Download the latest <code className="bg-muted px-1.5 py-0.5 rounded text-xs">Lost-Link-Setup.exe</code> from the <Link href="/download" className="text-primary hover:underline">Download page</Link></li>
                                                <li>Run the installer and follow the setup wizard</li>
                                                <li>Allow firewall access when prompted (required for LAN discovery)</li>
                                                <li>Launch Lost-Link from your Start Menu or Desktop</li>
                                            </ol>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-2 flex items-center gap-2">
                                                <Download className="h-4 w-4" />
                                                macOS
                                            </h4>
                                            <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground ml-6">
                                                <li>Download <code className="bg-muted px-1.5 py-0.5 rounded text-xs">Lost-Link.dmg</code></li>
                                                <li>Open the DMG and drag Lost-Link to Applications</li>
                                                <li>Allow network access in System Preferences → Security & Privacy</li>
                                                <li>Launch from Applications folder</li>
                                            </ol>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-2 flex items-center gap-2">
                                                <Download className="h-4 w-4" />
                                                Linux
                                            </h4>
                                            <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground ml-6">
                                                <li>Download <code className="bg-muted px-1.5 py-0.5 rounded text-xs">Lost-Link.AppImage</code> or <code className="bg-muted px-1.5 py-0.5 rounded text-xs">.deb</code> package</li>
                                                <li>Make executable: <code className="bg-muted px-1.5 py-0.5 rounded text-xs">chmod +x Lost-Link.AppImage</code></li>
                                                <li>Run the application</li>
                                                <li>Configure firewall to allow UDP traffic on port 12345</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-lg border bg-card p-6">
                                    <h3 className="text-xl font-bold mb-4">First Time Setup</h3>
                                    <ol className="space-y-3">
                                        <li className="flex gap-3">
                                            <span className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">1</span>
                                            <div>
                                                <p className="font-medium">Create Your Identity</p>
                                                <p className="text-sm text-muted-foreground">Choose a username that will be visible to other peers on your network.</p>
                                            </div>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">2</span>
                                            <div>
                                                <p className="font-medium">Connect to Your Network</p>
                                                <p className="text-sm text-muted-foreground">Ensure you're connected to the same local network as your peers.</p>
                                            </div>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">3</span>
                                            <div>
                                                <p className="font-medium">Start Chatting</p>
                                                <p className="text-sm text-muted-foreground">Create a lobby or join an existing one to begin secure messaging.</p>
                                            </div>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </section>

                        {/* Architecture */}
                        <section id="architecture" className="mb-16 scroll-mt-24">
                            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                <Radio className="h-8 w-8 text-primary" />
                                Architecture
                            </h2>

                            <div className="space-y-6">
                                <div className="prose prose-invert max-w-none">
                                    <p className="text-muted-foreground">
                                        Lost-Link uses a peer-to-peer mesh network architecture, eliminating the need for central servers
                                        and ensuring your communications remain entirely within your local network.
                                    </p>
                                </div>

                                <div className="grid gap-6 md:grid-cols-2">
                                    <div className="rounded-lg border bg-card p-6">
                                        <h3 className="font-bold mb-3">Peer Discovery</h3>
                                        <p className="text-sm text-muted-foreground mb-4">
                                            Uses mDNS (Multicast DNS) to automatically discover other Lost-Link instances on the same subnet.
                                        </p>
                                        <ul className="space-y-2 text-sm">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                                                <span>Automatic peer discovery via Bonjour/Avahi</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                                                <span>No manual IP configuration required</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                                                <span>Real-time peer presence updates</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="rounded-lg border bg-card p-6">
                                        <h3 className="font-bold mb-3">WebRTC Connections</h3>
                                        <p className="text-sm text-muted-foreground mb-4">
                                            Direct peer-to-peer connections using WebRTC data channels for low-latency communication.
                                        </p>
                                        <ul className="space-y-2 text-sm">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                                                <span>NAT traversal with STUN/TURN fallback</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                                                <span>Multiplexed data channels</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                                                <span>Automatic reconnection handling</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* User Guide */}
                        <section id="user-guide" className="mb-16 scroll-mt-24">
                            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                <Users className="h-8 w-8 text-primary" />
                                User Guide
                            </h2>

                            <div className="space-y-8">
                                <div className="rounded-lg border bg-card p-6">
                                    <h3 className="text-xl font-bold mb-4">Creating a Host Lobby</h3>
                                    <ol className="space-y-3 text-sm">
                                        <li className="flex gap-3">
                                            <span className="text-primary font-mono">01</span>
                                            <span>Click <strong>"Start Host Lobby"</strong> on the main dashboard</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-primary font-mono">02</span>
                                            <span>Set a lobby name and optional password for extra security</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-primary font-mono">03</span>
                                            <span>Configure join settings (open, approval required, or invite-only)</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-primary font-mono">04</span>
                                            <span>Your lobby will appear to other users on the network</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-primary font-mono">05</span>
                                            <span>Approve or deny join requests as they arrive</span>
                                        </li>
                                    </ol>
                                </div>

                                <div className="rounded-lg border bg-card p-6">
                                    <h3 className="text-xl font-bold mb-4">Joining a Lobby</h3>
                                    <ol className="space-y-3 text-sm">
                                        <li className="flex gap-3">
                                            <span className="text-primary font-mono">01</span>
                                            <span>Click <strong>"Join Host Lobby"</strong> to see available lobbies</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-primary font-mono">02</span>
                                            <span>Browse the list of discovered lobbies on your network</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-primary font-mono">03</span>
                                            <span>Select a lobby and click "Request to Join"</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-primary font-mono">04</span>
                                            <span>Wait for the host to approve your request (if required)</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-primary font-mono">05</span>
                                            <span>Once approved, start chatting and sharing files</span>
                                        </li>
                                    </ol>
                                </div>

                                <div className="rounded-lg border bg-card p-6">
                                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                        <FolderUp className="h-5 w-5 text-primary" />
                                        File Sharing
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Share files securely up to 2GB with end-to-end encryption.
                                    </p>
                                    <ol className="space-y-2 text-sm">
                                        <li>• Click the file attachment icon in the chat input</li>
                                        <li>• Select your file (max 2GB per file)</li>
                                        <li>• File is encrypted and chunked for transfer</li>
                                        <li>• Recipients see a progress bar during download</li>
                                        <li>• Files are automatically decrypted upon receipt</li>
                                    </ol>
                                </div>
                            </div>
                        </section>

                        {/* Security */}
                        <section id="security" className="mb-16 scroll-mt-24">
                            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                <Lock className="h-8 w-8 text-primary" />
                                Security
                            </h2>

                            <div className="space-y-6">
                                <div className="rounded-lg border border-primary/20 bg-primary/5 p-6">
                                    <h3 className="font-bold mb-3 flex items-center gap-2">
                                        <Shield className="h-5 w-5 text-primary" />
                                        Encryption Standards
                                    </h3>
                                    <div className="grid gap-4 md:grid-cols-2">
                                        <div>
                                            <h4 className="font-semibold text-sm mb-2">Message Encryption</h4>
                                            <p className="text-sm text-muted-foreground">AES-256-GCM with authenticated encryption ensures message integrity and confidentiality.</p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-sm mb-2">Key Exchange</h4>
                                            <p className="text-sm text-muted-foreground">ECDH P-256 for secure session key establishment between peers.</p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-sm mb-2">Identity Verification</h4>
                                            <p className="text-sm text-muted-foreground">RSA-2048 keys generated locally for peer authentication.</p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-sm mb-2">Perfect Forward Secrecy</h4>
                                            <p className="text-sm text-muted-foreground">Ephemeral session keys ensure past messages remain secure.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-lg border bg-card p-6">
                                    <h3 className="font-bold mb-4">Threat Model</h3>
                                    <div className="space-y-4 text-sm">
                                        <div>
                                            <h4 className="font-semibold text-primary mb-2">✓ Protected Against</h4>
                                            <ul className="space-y-1 text-muted-foreground">
                                                <li>• Passive network eavesdropping</li>
                                                <li>• Man-in-the-middle attacks</li>
                                                <li>• Message tampering</li>
                                                <li>• Replay attacks</li>
                                                <li>• Unauthorized lobby access</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-destructive mb-2">⚠ Out of Scope</h4>
                                            <ul className="space-y-1 text-muted-foreground">
                                                <li>• Compromised endpoint devices</li>
                                                <li>• Physical access to running instance</li>
                                                <li>• Malicious peer impersonation (verify identities manually)</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Troubleshooting */}
                        <section id="troubleshooting" className="mb-16 scroll-mt-24">
                            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                <AlertCircle className="h-8 w-8 text-primary" />
                                Troubleshooting
                            </h2>

                            <div className="space-y-4">
                                <div className="rounded-lg border bg-card p-6">
                                    <h3 className="font-bold mb-2">Can't see other peers</h3>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li>• Ensure all devices are on the same subnet/WiFi network</li>
                                        <li>• Check firewall settings - UDP port 12345 must be allowed</li>
                                        <li>• Some corporate networks block mDNS - contact your IT admin</li>
                                        <li>• Restart the application to re-trigger discovery broadcast</li>
                                        <li>• Verify your router supports multicast traffic</li>
                                    </ul>
                                </div>

                                <div className="rounded-lg border bg-card p-6">
                                    <h3 className="font-bold mb-2">Connection keeps dropping</h3>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li>• Check your network stability and signal strength</li>
                                        <li>• Reduce distance from WiFi access point if possible</li>
                                        <li>• Disable VPN or proxy that might interfere with local traffic</li>
                                        <li>• Update to the latest version of Lost-Link</li>
                                    </ul>
                                </div>

                                <div className="rounded-lg border bg-card p-6">
                                    <h3 className="font-bold mb-2">File transfer fails</h3>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li>• Ensure sufficient disk space on receiving device</li>
                                        <li>• Check file size doesn't exceed 2GB limit</li>
                                        <li>• Verify stable connection during transfer</li>
                                        <li>• Try smaller files first to test connection</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* FAQ */}
                        <section id="faq" className="mb-16 scroll-mt-24">
                            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                <HelpCircle className="h-8 w-8 text-primary" />
                                Frequently Asked Questions
                            </h2>

                            <div className="space-y-4">
                                <div className="rounded-lg border bg-card p-6">
                                    <h3 className="font-bold mb-2">Do I need internet access?</h3>
                                    <p className="text-sm text-muted-foreground">
                                        No! Lost-Link works completely offline. You only need a local network (LAN) connection.
                                        This makes it perfect for air-gapped environments, basements, or areas without internet.
                                    </p>
                                </div>

                                <div className="rounded-lg border bg-card p-6">
                                    <h3 className="font-bold mb-2">Is my data stored anywhere?</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Messages and files are only stored locally on your device. There are no cloud servers,
                                        databases, or external storage. When you close Lost-Link, message history is cleared
                                        (unless you enable local persistence in settings).
                                    </p>
                                </div>

                                <div className="rounded-lg border bg-card p-6">
                                    <h3 className="font-bold mb-2">Can someone intercept my messages?</h3>
                                    <p className="text-sm text-muted-foreground">
                                        All messages are encrypted end-to-end with AES-256. Even if someone captures network traffic,
                                        they cannot decrypt your messages without the session keys, which are never transmitted.
                                    </p>
                                </div>

                                <div className="rounded-lg border bg-card p-6">
                                    <h3 className="font-bold mb-2">How many people can join a lobby?</h3>
                                    <p className="text-sm text-muted-foreground">
                                        There's no hard limit, but performance depends on your network bandwidth and device capabilities.
                                        We recommend 100 or fewer users for optimal performance.
                                    </p>
                                </div>

                                <div className="rounded-lg border bg-card p-6">
                                    <h3 className="font-bold mb-2">Is Lost-Link open source?</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Yes! Lost-Link is fully open source and available on{" "}
                                        <Link href="https://github.com/NotShubham1112/Lost-Link" className="text-primary hover:underline" target="_blank">
                                            GitHub
                                        </Link>
                                        . You can review the code, contribute improvements, or fork it for your own use.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* CTA */}
                        <div className="rounded-2xl border bg-gradient-to-br from-background to-muted/30 p-8 text-center">
                            <h3 className="text-2xl font-bold mb-2">Still have questions?</h3>
                            <p className="text-muted-foreground mb-6">
                                Check out our GitHub repository or open an issue.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button asChild>
                                    <Link href="https://github.com/NotShubham1112/Lost-Link/issues" target="_blank">
                                        Report an Issue
                                    </Link>
                                </Button>
                                <Button variant="outline" asChild>
                                    <Link href="/download">Download Lost-Link</Link>
                                </Button>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
