
//base matrics config
const baseMatrices = [
    {
        key: 'AV',
        name: 'Attack Vector',
        options: [
            {
                name: 'N',
                l: 'Network',
                d: "<b>Worst:</b> The vulnerable component is bound to the network stack and the set of possible attackers extends beyond the other options listed below, up to and including the entire Internet. Such a vulnerability is often termed “remotely exploitable” and can be thought of as an attack being exploitable at the protocol level one or more network hops away (e.g., across one or more routers)."
            },
            {
                name: 'A',
                l: 'Adjacent',
                d: "<b>Worse:</b> The vulnerable component is bound to the network stack, but the attack is limited at the protocol level to a logically adjacent topology. This can mean an attack must be launched from the same shared physical (e.g., Bluetooth or IEEE 802.11) or logical (e.g., local IP subnet) network, or from within a secure or otherwise limited administrative domain (e.g., MPLS, secure VPN to an administrative network zone). One example of an Adjacent attack would be an ARP (IPv4) or neighbor discovery (IPv6) flood leading to a denial of service on the local LAN segment."
            },
            {
                name: 'L',
                l: 'Local',
                d: "<b>Bad:</b> The vulnerable component is not bound to the network stack and the attacker’s path is via read/write/execute capabilities. Either: <ul><li>the attacker exploits the vulnerability by accessing the target system locally (e.g., keyboard, console), or remotely (e.g., SSH);</li><li>or the attacker relies on User Interaction by another person to perform actions required to exploit the vulnerability (e.g., using social engineering techniques to trick a legitimate user into opening a malicious document).</li></ul>"
            },
            {
                name: 'P',
                l: 'Physical',
                d: "<b>Bad:</b> The attack requires the attacker to physically touch or manipulate the vulnerable component. Physical interaction may be brief (e.g., evil maid attack) or persistent. An example of such an attack is a cold boot attack in which an attacker gains access to disk encryption keys after physically accessing the target system. Other examples include peripheral attacks via FireWire/USB Direct Memory Access (DMA)."
            }],
    },
    {
        key: 'AC',
        name: 'Attack Complexity',
        options: [
            {
                name: 'L',
                l: 'Low',
                d: "<b>Worst:</b> Specialized access conditions or extenuating circumstances do not exist. An attacker can expect repeatable success when attacking the vulnerable component.",
            },
            {
                name: 'H',
                l: 'High',
                d: "<b>Bad:</b> A successful attack depends on conditions beyond the attacker's control. That is, a successful attack cannot be accomplished at will, but requires the attacker to invest in some measurable amount of effort in preparation or execution against the vulnerable component before a successful attack can be expected."
            }
        ]
    },
    {
        key: 'PR',
        name: 'Privileges Required',
        options: [{
            name: 'N',
            l: 'None',
            d: "<b>Worst:</b> The attacker is unauthorized prior to attack, and therefore does not require any access to settings or files of the the vulnerable system to carry out an attack."
        }, {
            name: 'L',
            l: 'Low',
            d: "<b>Worse</b> The attacker requires privileges that provide basic user capabilities that could normally affect only settings and files owned by a user. Alternatively, an attacker with Low privileges has the ability to access only non-sensitive resources."
        }, {
            name: 'H',
            l: 'High',
            d: "<b>Bad:</b> The attacker requires privileges that provide significant (e.g., administrative) control over the vulnerable component allowing access to component-wide settings and files."
        }]
    },
    {
        key: 'UI',
        name: 'User Interaction',
        options: [
            {
                name: 'N',
                l: 'None',
                d: "<b>Worst:</b> The vulnerable system can be exploited without interaction from any user."
            },
            {
                name: 'R',
                l: 'Required',
                d: "<b>Bad:</b> Successful exploitation of this vulnerability requires a user to take some action before the vulnerability can be exploited. For example, a successful exploit may only be possible during the installation of an application by a system administrator."
            },
        ]
    },
    {
        key: 'S',
        name: 'Scope',
        options: [
            {
                name: 'C',
                l: 'Changed',
                d: "<b>Worst:</b> An exploited vulnerability can affect resources beyond the security scope managed by the security authority of the vulnerable component. In this case, the vulnerable component and the impacted component are different and managed by different security authorities."
            },
            {
                name: 'U',
                l: 'Unchanged',
                d: "<b>Bad:</b> An exploited vulnerability can only affect resources managed by the same security authority. In this case, the vulnerable component and the impacted component are either the same, or both are managed by the same security authority."
            }]
    },
    {
        key: 'C',
        name: 'Confidentiality',
        options: [{
            name: 'H',
            l: 'High',
            d: "<b>Worst:</b> There is a total loss of confidentiality, resulting in all resources within the impacted component being divulged to the attacker. Alternatively, access to only some restricted information is obtained, but the disclosed information presents a direct, serious impact. For example, an attacker steals the administrator's password, or private encryption keys of a web server."
        }, {
            name: 'L',
            l: 'Low',
            d: "<b>Bad:</b> There is some loss of confidentiality. Access to some restricted information is obtained, but the attacker does not have control over what information is obtained, or the amount or kind of loss is limited. The information disclosure does not cause a direct, serious loss to the impacted component."
        }, {
            name: 'N',
            l: 'None',
            d: "<b>Good:</b> There is no loss of confidentiality within the impacted component."
        }


        ]
    },
    {
        key: 'I',
        name: 'Integrity',
        options: [{
            name: 'H',
            l: 'High',
            d: "<b>Worst:</b> There is a total loss of integrity, or a complete loss of protection. For example, the attacker is able to modify any/all files protected by the impacted component. Alternatively, only some files can be modified, but malicious modification would present a direct, serious consequence to the impacted component."
        }, {
            name: 'L',
            l: 'Low',
            d: "<b>Bad:</b> Modification of data is possible, but the attacker does not have control over the consequence of a modification, or the amount of modification is limited. The data modification does not have a direct, serious impact on the impacted component."
        }, {
            name: 'N',
            l: 'None',
            d: "<b>Good:</b> There is no loss of integrity within the impacted component."
        }]
    },
    {
        key: 'A',
        name: 'Availability',
        options: [{
            name: 'H',
            l: 'High',
            d: "<b>Worst:</b> There is a total loss of availability, resulting in the attacker being able to fully deny access to resources in the impacted component; this loss is either sustained (while the attacker continues to deliver the attack) or persistent (the condition persists even after the attack has completed). Alternatively, the attacker has the ability to deny some availability, but the loss of availability presents a direct, serious consequence to the impacted component (e.g., the attacker cannot disrupt existing connections, but can prevent new connections; the attacker can repeatedly exploit a vulnerability that, in each instance of a successful attack, leaks a only small amount of memory, but after repeated exploitation causes a service to become completely unavailable)."
        }, {
            name: 'L',
            l: 'Low',
            d: "<b>Bad:</b> Performance is reduced or there are interruptions in resource availability. Even if repeated exploitation of the vulnerability is possible, the attacker does not have the ability to completely deny service to legitimate users. The resources in the impacted component are either partially available all of the time, or fully available only some of the time, but overall there is no direct, serious consequence to the impacted component."
        }, {
            name: 'N',
            l: 'None',
            d: "<b>Good:</b> There is no impact to availability within the impacted component."
        }

        ]
    }
];

//severityRatings config
const severityRatings = [
    {
        name: "None",
        bottom: 0.0,
        top: 0.0
    },
    {
        name: "Low",
        bottom: 0.1,
        top: 3.9
    },
    {
        name: "Medium",
        bottom: 4.0,
        top: 6.9
    },
    {
        name: "High",
        bottom: 7.0,
        top: 8.9
    },
    {
        name: "Critical",
        bottom: 9.0,
        top: 10.0
    }
];

// Define associative arrays mapping each metric value to the constant used in the CVSS scoring formula.
const weight = {
    AV: {
        N: 0.85,
        A: 0.62,
        L: 0.55,
        P: 0.2
    },
    AC: {
        H: 0.44,
        L: 0.77
    },
    PR: {
        U: {
            N: 0.85,
            L: 0.62,
            H: 0.27
        },
        // These values are used if Scope is Unchanged
        C: {
            N: 0.85,
            L: 0.68,
            H: 0.5
        }
    },
    // These values are used if Scope is Changed
    UI: {
        N: 0.85,
        R: 0.62
    },
    S: {
        U: 6.42,
        C: 7.52
    },
    C: {
        N: 0,
        L: 0.22,
        H: 0.56
    },
    I: {
        N: 0,
        L: 0.22,
        H: 0.56
    },
    A: {
        N: 0,
        L: 0.22,
        H: 0.56
    }// C, I and A have the same weights
};

const exploitabilityCoefficient = 8.22;

const scopeCoefficient = 1.08;

export{baseMatrices,severityRatings,weight,exploitabilityCoefficient,scopeCoefficient};