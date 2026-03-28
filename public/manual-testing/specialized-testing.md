# Mobile, Security & Performance Testing

In this module, we'll explore more specialized testing types that are critical for modern software.

## Mobile Application Testing
Testing on mobile devices presents unique challenges.
- **Android vs iOS:** Understanding the differences in UI/UX, hardware, and OS behavior.
- **Real Devices vs Emulators/Simulators:**
    - **Emulator/Simulator:** Good for early development and basic UI testing.
    - **Real Device:** Essential for testing performance, battery consumption, and hardware interactions (e.g., camera, GPS).
- **Mobile-Specific Testing:**
    - **Interruptions:** Handling incoming calls, messages, and notifications.
    - **Network Connectivity:** Testing on 3G, 4G, 5G, and Wi-Fi, and handling network switching.
    - **Gestures:** Testing taps, swipes, pinches, and rotations.
    - **Battery & Performance:** Monitoring battery drain and memory usage.

## Performance Testing (Concepts)
Understanding how the application behaves under different load conditions.
- **Load Testing:** Testing the system's performance under expected load.
- **Stress Testing:** Testing the system's stability beyond its normal operating capacity.
- **Scalability Testing:** Testing the system's ability to handle increasing load.
- **Endurance Testing:** Testing the system's performance over a long period.
- **Spike Testing:** Testing the system's response to sudden increases in load.

## Security Testing (Basics)
Identifying vulnerabilities and ensuring data protection.
- **Authentication & Authorization:** Verifying that only authorized users can access data.
- **Data Encryption:** Ensuring that sensitive data is encrypted at rest and in transit.
- **Input Validation:** Preventing attacks like SQL Injection and Cross-Site Scripting (XSS).
- **Vulnerability Scanning:** Using tools to identify known security issues.

## Accessibility Testing
Ensuring the application is usable by people with disabilities.
- **Screen Readers:** Testing how the application is read by screen readers.
- **Keyboard Navigation:** Ensuring all features are accessible via keyboard.
- **Color Contrast:** Verifying that text is readable against the background.
- **WCAG Guidelines:** Following the Web Content Accessibility Guidelines.

## Practical Tip
When testing on mobile, always verify that the application handles **network interruptions** and **low battery** gracefully. These are common real-world scenarios that can cause bugs.
