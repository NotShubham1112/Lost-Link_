import { Shield, WifiOff, Users, Zap, Lock, Globe } from "lucide-react";

const features = [
    {
        icon: WifiOff,
        title: "No Internet Required",
        description: "Works entirely on your local network (LAN). Communicate even when the internet is down.",
    },
    {
        icon: Shield,
        title: "End-to-End Encrypted",
        description: "Your messages are encrypted with AES-256-GCM. Verify identities with P-256 keys.",
    },
    {
        icon: Users,
        title: "P2P Discovery",
        description: "Automatically discover peers on your network without manual configuration.",
    },
    {
        icon: Zap,
        title: "Blazing Fast",
        description: "Direct peer-to-peer connections ensure low latency and high-speed file transfers.",
    },
    {
        icon: Lock,
        title: "Privacy First",
        description: "No central servers, no data farming, no tracking. You own your data.",
    },
    {
        icon: Globe, // Or another icon representing open source
        title: "Open Source",
        description: "Audit the code yourself. Built with transparency and security in mind.",
    },
];

export function FeaturesSection() {
    return (
        <section id="features" className="py-20 md:py-28 bg-muted/30">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Why Choose Lost-Link?</h2>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl">
                        Built for security, privacy, and resilience.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-start p-6 rounded-xl border bg-background/50 hover:bg-background/80 transition-all shadow-sm">
                            <div className="p-3 rounded-lg bg-primary/10 text-primary mb-4">
                                <feature.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
