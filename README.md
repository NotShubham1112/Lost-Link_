# Lost-Link

<div align="center">

![Lost-Link Logo](https://via.placeholder.com/150) <!-- Replace with actual logo if available -->

**Offline LAN Chat Application**
<br>
*Secure. Decentralized. Zero-Configuration.*

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com/yourusername/lost-link)
[![Version](https://img.shields.io/badge/version-0.1.1-blue.svg)](package.json)

</div>

## 📖 Overview

**Lost-Link** is a modern, Electron-based desktop application designed for secure, offline communication within a Local Area Network (LAN). It uses Peer-to-Peer (P2P) discovery mechanisms to find other users on the same network without requiring a central server or internet connection.

Built with **Electron**, **React**, and **TypeScript**, it prioritizes privacy with end-to-end encryption for all messages.

---

## ✨ Features

- **📡 Zero-Config Discovery**: Automatically finds peers on the local network using UDP broadcasting.
- **🔒 End-to-End Encryption**: Secure messaging using ECDH key exchange and AES-GCM encryption.
- **📶 Offline First**: Works entirely without internet access. Perfect for offices, campuses, or events.
- **⚡ Modern UI**: sleek, responsive interface built with React and Tailwind CSS.
- **📂 Cross-Platform**: Runs on Windows, macOS, and Linux (via Electron).

---

## 🛠️ System Architecture

The following diagram illustrates how Lost-Link discovers peers and establishes secure connections:

```mermaid
graph TD
    subgraph "User A (Alice)"
        A_UI[React Frontend]
        A_Main[Electron Main Process]
        A_UDP[UDP Socket]
    end

    subgraph "User B (Bob)"
        B_UI[React Frontend]
        B_Main[Electron Main Process]
        B_UDP[UDP Socket]
    end

    A_UI <-->|IPC| A_Main
    B_UI <-->|IPC| B_Main

    A_Main -- Broadcast Presence --> A_UDP
    A_UDP -.->|Multicast/Broadcast| B_UDP
    B_UDP -- Discovered Peer --> B_Main
    B_Main -- Update UI --> B_UI

    A_Main <==>|Encrypted Direct Connection (TCP)| B_Main
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (v8 or higher)

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/lost-link.git
    cd lost-link
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

### Development

To start the application in development mode with hot-reloading:

```bash
npm run dev
```

### Build

To create a production build for your OS:

```bash
npm run build
```
The output will be in the `dist` or `out` directory.

---

## 👨‍💻 Created by Shubham Kambli

<div align="center">

### **Founder of COSMIC • AI Engineer • Open-Source Builder**

*19-year-old Founder of COSMIC, AI engineer, and open-source builder creating production-ready tools at the intersection of artificial intelligence and software engineering.*

[![Website](https://img.shields.io/badge/Website-COSMIC-blue?style=for-the-badge&logo=google-chrome)](https://your-website.com)
[![Email](https://img.shields.io/badge/Email-Contact_Me-red?style=for-the-badge&logo=gmail)](mailto:your-email@example.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/your-profile)
[![Twitter](https://img.shields.io/badge/Twitter-@Not__Shubham__111-1DA1F2?style=for-the-badge&logo=twitter)](https://twitter.com/Not_Shubham_111)

[📖 View Full Portfolio](https://your-portfolio-link.com) • [🏠 Wiki Home](https://github.com/yourusername/lost-link/wiki)

</div>

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
