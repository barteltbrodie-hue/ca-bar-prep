const questions = [

    // ===== CIVIL PROCEDURE =====
    {
        subject: "civil-procedure",
        subjectLabel: "Civil Procedure",
        question: "Paula, a California citizen, sues Dan, a Nevada citizen, in federal court for injuries from a car accident. She seeks $80,000 in damages. Does the federal court have diversity jurisdiction?",
        options: [
            "Yes, because the parties are from different states and the amount exceeds $75,000",
            "No, because car accidents must be heard in state court",
            "No, because the amount does not exceed $75,000",
            "Yes, but only if Dan consents to federal jurisdiction"
        ],
        correct: 0,
        explanation: "Federal diversity jurisdiction requires complete diversity of citizenship between all plaintiffs and defendants, AND an amount in controversy exceeding $75,000 (not just equal to it). Here, Paula (CA) vs Dan (NV) satisfies diversity, and $80,000 exceeds the $75,000 threshold."
    },
    {
        subject: "civil-procedure",
        subjectLabel: "Civil Procedure",
        question: "A defendant is served with a complaint on March 1. She does not respond. On what date does her default become possible?",
        options: [
            "March 8 — after 7 days",
            "March 22 — after 21 days",
            "April 1 — after 31 days",
            "March 29 — after 28 days"
        ],
        correct: 1,
        explanation: "Under the Federal Rules of Civil Procedure, a defendant must serve an answer within 21 days after being served with the summons and complaint. If served March 1, the answer is due March 22. Failure to respond by then allows the plaintiff to seek entry of default."
    },
    {
        subject: "civil-procedure",
        subjectLabel: "Civil Procedure",
        question: "Which of the following is NOT a basis for federal subject matter jurisdiction?",
        options: [
            "The case arises under federal law",
            "The parties are citizens of different states and amount exceeds $75,000",
            "The defendant prefers federal court",
            "The United States is a party to the case"
        ],
        correct: 2,
        explanation: "Federal subject matter jurisdiction cannot be created simply because one party prefers it. The three main bases are: (1) federal question jurisdiction, (2) diversity jurisdiction, and (3) cases where the U.S. government is a party. A party's preference is irrelevant."
    },

    // ===== CONTRACTS =====
    {
        subject: "contracts",
        subjectLabel: "Contracts",
        question: "Bob offers to sell his car to Ann for $5,000, and says the offer is open for 10 days. On day 4, Bob calls Ann and says he is revoking the offer. Ann says she accepts anyway. Is there a contract?",
        options: [
            "Yes, because Bob promised to keep the offer open for 10 days",
            "No, because Bob validly revoked before Ann accepted",
            "Yes, because Ann accepted within the original 10-day window",
            "No, because verbal offers cannot be revoked"
        ],
        correct: 1,
        explanation: "Under common law, an offeror can revoke an offer any time before acceptance, even if the offeror promised to keep it open — UNLESS there is an option contract (supported by consideration) or a firm offer under the UCC. Here, Bob made no option contract, so his revocation on day 4 was valid. Ann's later acceptance had nothing to accept."
    },
    {
        subject: "contracts",
        subjectLabel: "Contracts",
        question: "Which of the following is the best example of valid consideration in a contract?",
        options: [
            "A promise to do something you are already legally required to do",
            "A gift with no conditions attached",
            "A promise to pay $500 in exchange for a promise to paint your house",
            "A past favor someone did for you last year"
        ],
        correct: 2,
        explanation: "Valid consideration requires a bargained-for exchange of something of legal value. A mutual exchange of promises (bilateral contract) qualifies. Past consideration, pre-existing duties, and unconditional gifts are classic examples of INVALID consideration."
    },
    {
        subject: "contracts",
        subjectLabel: "Contracts",
        question: "Under the UCC, a merchant's written offer to buy or sell goods that states it will remain open is called:",
        options: [
            "An option contract",
            "A firm offer",
            "An irrevocable bid",
            "A standing offer"
        ],
        correct: 1,
        explanation: "Under UCC Article 2, a 'firm offer' is a written offer by a merchant to buy or sell goods, which gives assurance that it will be held open. Unlike common law, no consideration is needed to keep it irrevocable — but it cannot exceed 3 months."
    },

    // ===== TORTS =====
    {
        subject: "torts",
        subjectLabel: "Torts",
        question: "To prove negligence, a plaintiff must establish four elements. Which of the following is the correct list?",
        options: [
            "Intent, act, causation, damages",
            "Duty, breach, causation, damages",
            "Duty, intent, harm, proximate cause",
            "Breach, knowledge, damages, intent"
        ],
        correct: 1,
        explanation: "The four elements of negligence are: (1) Duty — defendant owed plaintiff a duty of care; (2) Breach — defendant fell below the standard of care; (3) Causation — actual and proximate cause; (4) Damages — plaintiff suffered actual harm. Intent is NOT an element of negligence."
    },
    {
        subject: "torts",
        subjectLabel: "Torts",
        question: "A store owner knows that the floor near the entrance gets wet when it rains and has caused slips before, but puts up no warning sign. A customer slips and is injured. What is the store owner most likely liable for?",
        options: [
            "Intentional infliction of emotional distress",
            "Negligence",
            "Strict liability",
            "Trespass to land"
        ],
        correct: 1,
        explanation: "The store owner had a duty to business invitees, knew of the dangerous condition (breach of duty), and the wet floor caused the customer's injury (causation and damages). This is a classic negligence scenario. There was no intent to harm, so intentional torts do not apply."
    },
    {
        subject: "torts",
        subjectLabel: "Torts",
        question: "Which of the following is an example of an intentional tort?",
        options: [
            "A driver runs a red light and hits a pedestrian",
            "A surgeon accidentally nicks an artery during a routine operation",
            "A person deliberately pushes someone into a swimming pool",
            "A manufacturer fails to warn about a product defect"
        ],
        correct: 2,
        explanation: "Intentional torts require that the defendant acted with intent to cause the harmful contact or apprehension. Deliberately pushing someone is battery — an intentional tort. The other options involve negligence (failure to meet a standard of care) or products liability, not intentional conduct."
    },

    // ===== CRIMINAL LAW =====
    {
        subject: "criminal",
        subjectLabel: "Criminal Law & Procedure",
        question: "Which of the following best describes the mens rea required for common law murder?",
        options: [
            "Negligence",
            "Strict liability",
            "Malice aforethought",
            "Recklessness only"
        ],
        correct: 2,
        explanation: "Common law murder requires 'malice aforethought,' which includes: (1) intent to kill, (2) intent to cause serious bodily harm, (3) depraved heart recklessness, or (4) felony murder. It is NOT strict liability and requires more than simple negligence."
    },
    {
        subject: "criminal",
        subjectLabel: "Criminal Law & Procedure",
        question: "Police arrest Dan without a warrant at his home. Under the Fourth Amendment, this arrest is:",
        options: [
            "Always valid if officers have probable cause",
            "Generally invalid without an arrest warrant absent exigent circumstances",
            "Valid because probable cause alone is always sufficient for home arrests",
            "Valid only if Dan consents to the arrest"
        ],
        correct: 1,
        explanation: "Under Payton v. New York, police generally need an arrest warrant to arrest someone in their own home, absent exigent circumstances (like hot pursuit or imminent danger). Probable cause alone is insufficient for a warrantless home arrest."
    },
    {
        subject: "criminal",
        subjectLabel: "Criminal Law & Procedure",
        question: "Miranda warnings are required before police questioning when:",
        options: [
            "Any time police speak to a suspect",
            "When a suspect is in custody and subject to interrogation",
            "Only when the suspect is formally charged with a crime",
            "Whenever police believe someone may be guilty"
        ],
        correct: 1,
        explanation: "Miranda v. Arizona requires warnings when there is (1) custodial (2) interrogation. Both elements must be present. General on-the-street questioning, routine traffic stops, and booking questions are generally exempt from Miranda requirements."
    },

    // ===== EVIDENCE =====
    {
        subject: "evidence",
        subjectLabel: "Evidence",
        question: "Which of the following is the best definition of hearsay?",
        options: [
            "Any statement made outside of court",
            "An out-of-court statement offered to prove the truth of the matter asserted",
            "A statement made by someone who is not a party to the case",
            "Any secondhand information presented at trial"
        ],
        correct: 1,
        explanation: "Under FRE 801, hearsay is an out-of-court statement offered to prove the truth of the matter asserted. Key elements: (1) a statement, (2) made out of court, (3) offered for its truth. If a statement is offered for a different purpose (e.g., to show effect on listener), it is NOT hearsay."
    },
    {
        subject: "evidence",
        subjectLabel: "Evidence",
        question: "A witness testifies that she heard the defendant say 'I'm going to kill him' the day before the victim was found dead. This statement is:",
        options: [
            "Hearsay and inadmissible",
            "Not hearsay because it shows the defendant's state of mind",
            "Hearsay but admissible as a party admission",
            "Inadmissible character evidence"
        ],
        correct: 2,
        explanation: "Statements made by a party opponent (the defendant) are excluded from the definition of hearsay under FRE 801(d)(2) and are admissible as party admissions. This is one of the most tested evidence rules on the bar exam."
    },
    {
        subject: "evidence",
        subjectLabel: "Evidence",
        question: "The best evidence rule requires:",
        options: [
            "The most credible witness must testify first",
            "The original document must be produced to prove its contents",
            "All evidence must be corroborated by a second source",
            "Expert testimony is required for scientific evidence"
        ],
        correct: 1,
        explanation: "The best evidence rule (FRE 1002) requires that to prove the contents of a writing, recording, or photograph, the original must be produced if available. Duplicates are generally admissible unless authenticity is genuinely disputed."
    },

    // ===== CONSTITUTIONAL LAW =====
    {
        subject: "constitutional",
        subjectLabel: "Constitutional Law",
        question: "Under what standard does the Supreme Court review laws that discriminate based on race?",
        options: [
            "Rational basis review",
            "Intermediate scrutiny",
            "Strict scrutiny",
            "Undue burden test"
        ],
        correct: 2,
        explanation: "Racial classifications are subject to strict scrutiny — the government must show the law is necessary to achieve a compelling government interest and is narrowly tailored. This is the highest standard of review and laws rarely survive it."
    },
    {
        subject: "constitutional",
        subjectLabel: "Constitutional Law",
        question: "The First Amendment's Establishment Clause prohibits:",
        options: [
            "All religious speech by government employees",
            "The government from officially establishing a religion",
            "Prayer of any kind in public places",
            "Religious organizations from receiving any government benefits"
        ],
        correct: 1,
        explanation: "The Establishment Clause prohibits the government from making any law 'respecting an establishment of religion.' This means the government cannot officially endorse, fund, or establish a state religion. It does not prohibit all religious expression or contact between government and religion."
    },
    {
        subject: "constitutional",
        subjectLabel: "Constitutional Law",
        question: "Which clause of the Constitution requires states to honor the laws, records, and court decisions of other states?",
        options: [
            "The Supremacy Clause",
            "The Commerce Clause",
            "The Full Faith and Credit Clause",
            "The Privileges and Immunities Clause"
        ],
        correct: 2,
        explanation: "Article IV's Full Faith and Credit Clause requires each state to recognize and honor the public acts, records, and judicial proceedings of every other state. This is why a valid judgment from one state must be honored in another state."
    },

    // ===== REAL PROPERTY =====
    {
        subject: "real-property",
        subjectLabel: "Real Property",
        question: "To acquire title by adverse possession in most jurisdictions, a claimant must show possession that is:",
        options: [
            "Open, notorious, hostile, exclusive, and continuous for the statutory period",
            "Consensual, open, and continuous for 10 years",
            "Hostile, secret, and uninterrupted for 5 years",
            "Open, with color of title, and payment of taxes only"
        ],
        correct: 0,
        explanation: "Adverse possession requires: (1) Actual entry and possession, (2) Open and notorious, (3) Hostile/adverse (without owner's permission), (4) Exclusive, and (5) Continuous for the statutory period. The claimant must show ALL elements. California's statutory period is 5 years with color of title and tax payment."
    },
    {
        subject: "real-property",
        subjectLabel: "Real Property",
        question: "A joint tenancy differs from a tenancy in common primarily because:",
        options: [
            "Joint tenants cannot sell their interest without consent",
            "Joint tenancy includes the right of survivorship",
            "Tenancy in common requires equal shares",
            "Joint tenancy can only exist between married couples"
        ],
        correct: 1,
        explanation: "The key feature of joint tenancy is the right of survivorship — when one joint tenant dies, their interest automatically passes to the surviving joint tenants, NOT through the deceased's estate. Tenancy in common has no survivorship right; each co-tenant's share passes through their estate."
    },
    {
        subject: "real-property",
        subjectLabel: "Real Property",
        question: "A fee simple absolute is best described as:",
        options: [
            "An ownership interest that ends when the owner dies",
            "The most complete form of property ownership with no conditions or limitations",
            "Ownership shared equally between two or more parties",
            "A temporary ownership interest lasting a fixed number of years"
        ],
        correct: 1,
        explanation: "Fee simple absolute is the greatest estate in land — it is of potentially infinite duration, freely transferable, and has no conditions. The owner can sell it, give it away, or pass it through their estate with no restrictions imposed by the grant."
    },

    // ===== BUSINESS ASSOCIATIONS =====
    {
        subject: "business",
        subjectLabel: "Business Associations",
        question: "Under corporate law, the business judgment rule protects directors who:",
        options: [
            "Always make profitable decisions for the company",
            "Make informed, good faith business decisions in the best interest of the corporation",
            "Follow shareholder instructions in all decisions",
            "Avoid any conflicts of interest in every transaction"
        ],
        correct: 1,
        explanation: "The business judgment rule presumes that directors acted on an informed basis, in good faith, and in the honest belief that the action was in the best interest of the corporation. Courts will not second-guess such decisions. It does NOT protect decisions made in bad faith or with self-dealing."
    },
    {
        subject: "business",
        subjectLabel: "Business Associations",
        question: "In a general partnership, each partner is liable for the debts of the partnership:",
        options: [
            "Only up to the amount of their capital contribution",
            "Jointly and severally for all partnership debts",
            "Only for debts they personally approved",
            "Up to 50% of total partnership debts"
        ],
        correct: 1,
        explanation: "In a general partnership, all partners have unlimited personal liability for partnership debts and obligations — they are jointly and severally liable. This means a creditor can sue any one partner for the full amount of the debt, regardless of that partner's ownership percentage."
    },
    {
        subject: "business",
        subjectLabel: "Business Associations",
        question: "A principal is liable for the torts of an agent committed within the scope of employment under the doctrine of:",
        options: [
            "Respondeat superior",
            "Piercing the corporate veil",
            "Apparent authority",
            "Ratification"
        ],
        correct: 0,
        explanation: "Respondeat superior ('let the master answer') holds an employer/principal vicariously liable for torts committed by an employee/agent acting within the scope of employment. This is one of the most fundamental agency law principles tested on the bar exam."
    },

    // ===== WILLS, TRUSTS & SUCCESSION =====
    {
        subject: "wills",
        subjectLabel: "Wills, Trusts & Succession",
        question: "Under California law, a valid will generally requires:",
        options: [
            "Notarization and three witnesses",
            "The testator to be at least 21 and have two witnesses",
            "The testator to be at least 18, of sound mind, and signed by two witnesses",
            "Only the testator's signature — no witnesses needed"
        ],
        correct: 2,
        explanation: "In California, a formal will requires: (1) the testator must be at least 18 years old, (2) of sound mind (testamentary capacity), (3) the will must be in writing, (4) signed by the testator, and (5) witnessed by at least two people present at the same time. Notarization is NOT required for a standard will."
    },
    {
        subject: "wills",
        subjectLabel: "Wills, Trusts & Succession",
        question: "A holographic will is one that is:",
        options: [
            "Witnessed by a notary public",
            "Entirely handwritten and signed by the testator, with no witnesses required",
            "Typed and signed in front of two witnesses",
            "Recorded on video by the testator"
        ],
        correct: 1,
        explanation: "A holographic will is entirely handwritten and signed by the testator. California recognizes holographic wills even without witnesses, as long as the material provisions and signature are in the testator's own handwriting. This is a California-specific rule heavily tested on the bar exam."
    },
    {
        subject: "wills",
        subjectLabel: "Wills, Trusts & Succession",
        question: "If a person dies intestate (without a will) in California, their estate passes:",
        options: [
            "Entirely to the state of California",
            "To the nearest living relative according to California's intestate succession laws",
            "Equally among all friends and family",
            "To the person's employer if no family exists"
        ],
        correct: 1,
        explanation: "Intestate succession means the state's law determines who inherits. California's intestate succession scheme generally passes property first to a spouse/domestic partner, then to children, then to parents, then to siblings, and so on down the line of heirs. The state only takes (escheats) if no heirs exist."
    },

    // ===== PROFESSIONAL RESPONSIBILITY =====
    {
        subject: "professional",
        subjectLabel: "Professional Responsibility",
        question: "Under the California Rules of Professional Conduct, an attorney must generally keep client information confidential:",
        options: [
            "Only during the representation",
            "Unless the client gives informed consent to disclosure",
            "Except when required by a court order only",
            "Only if the client specifically requests confidentiality"
        ],
        correct: 1,
        explanation: "The duty of confidentiality under California Rule 1.6 is broad — it covers all information relating to the representation, regardless of source, and continues even after representation ends. An attorney may disclose only with the client's informed consent, or under specific narrow exceptions (e.g., to prevent reasonably certain death or substantial bodily harm)."
    },
    {
        subject: "professional",
        subjectLabel: "Professional Responsibility",
        question: "An attorney has a conflict of interest when representing two clients. The conflict is generally waivable if:",
        options: [
            "Both clients are paying equal fees",
            "The attorney reasonably believes they can competently represent both, and both give informed written consent",
            "The attorney has represented both clients before",
            "The conflict only involves a minor procedural matter"
        ],
        correct: 1,
        explanation: "Under California Rule 1.7, a conflict of interest is waivable if: (1) the attorney reasonably believes they can provide competent and diligent representation to each client, (2) representation is not prohibited by law, (3) the clients are not asserting claims against each other in the same matter, and (4) each client gives informed written consent."
    },
    {
        subject: "professional",
        subjectLabel: "Professional Responsibility",
        question: "An attorney who discovers their client plans to commit perjury should:",
        options: [
            "Immediately disclose the plan to the court",
            "Withdraw from representation without explanation",
            "Allow the client to testify falsely to protect confidentiality",
            "First try to persuade the client not to testify falsely, and consider withdrawal if unsuccessful"
        ],
        correct: 3,
        explanation: "Under California Rule 3.3 and the duty of candor to the tribunal, an attorney must not knowingly offer false evidence. The attorney should first counsel the client against perjury. If unsuccessful, the attorney must consider withdrawal. If withdrawal is not possible, the attorney cannot present the false testimony and may need to inform the court."
    },

    // ===== COMMUNITY PROPERTY =====
    {
        subject: "community",
        subjectLabel: "Community Property",
        question: "Under California community property law, property acquired during marriage using community funds is generally:",
        options: [
            "The separate property of whoever earned the money",
            "Community property owned equally by both spouses",
            "The property of the spouse who made the purchase",
            "Held in trust for the couple's children"
        ],
        correct: 1,
        explanation: "California is a community property state. Property acquired during marriage using community funds (money earned during marriage) is community property — owned equally (50/50) by both spouses. Each spouse has an equal, undivided interest regardless of who earned the money or whose name is on the title."
    },
    {
        subject: "community",
        subjectLabel: "Community Property",
        question: "A spouse receives an inheritance during the marriage. Under California law, this inheritance is:",
        options: [
            "Community property because it was received during marriage",
            "Separate property of the receiving spouse",
            "Community property if over $10,000",
            "Separate property only if kept in a separate bank account"
        ],
        correct: 1,
        explanation: "Under California Family Code, separate property includes property acquired before marriage, gifts, and inheritances — even if received during the marriage. The inheritance belongs solely to the receiving spouse as separate property, as long as it is not commingled with community funds."
    },
    {
        subject: "community",
        subjectLabel: "Community Property",
        question: "The presumption in California is that property acquired during marriage is:",
        options: [
            "Separate property unless proven otherwise",
            "Community property unless proven otherwise",
            "Joint tenancy property",
            "Held in trust for both spouses equally"
        ],
        correct: 1,
        explanation: "California law creates a strong presumption that all property acquired during marriage is community property. To overcome this presumption, the party claiming separate property must trace the property to a separate property source with clear and convincing evidence."
    },

    // ===== REMEDIES =====
    {
        subject: "remedies",
        subjectLabel: "Remedies",
        question: "A court will grant specific performance of a contract when:",
        options: [
            "The plaintiff asks for it and has a valid contract",
            "Money damages would be inadequate to compensate the plaintiff",
            "The defendant has breached the contract intentionally",
            "The contract involves more than $10,000"
        ],
        correct: 1,
        explanation: "Specific performance is an equitable remedy that orders the breaching party to perform their contractual obligations. Courts grant it only when money damages are inadequate — typically for unique goods, real property, or rare items. It is not available merely because the plaintiff requests it."
    },
    {
        subject: "remedies",
        subjectLabel: "Remedies",
        question: "Punitive damages are generally available in tort cases when:",
        options: [
            "The plaintiff suffered severe physical injuries",
            "The defendant acted with malice, oppression, or fraud",
            "The defendant is a large corporation",
            "The plaintiff requests them and the damages exceed $50,000"
        ],
        correct: 1,
        explanation: "Under California Civil Code § 3294, punitive damages require clear and convincing evidence that the defendant acted with malice (intent to injure), oppression (despicable conduct with conscious disregard), or fraud. They are not available simply because injuries are severe or because the defendant is wealthy."
    },
    {
        subject: "remedies",
        subjectLabel: "Remedies",
        question: "Restitution as a remedy is designed to:",
        options: [
            "Punish the defendant for wrongful conduct",
            "Put the plaintiff in the position they would have been in had the contract been performed",
            "Prevent the defendant from being unjustly enriched at the plaintiff's expense",
            "Compensate the plaintiff for future lost earnings"
        ],
        correct: 2,
        explanation: "Restitution is an equitable remedy aimed at preventing unjust enrichment — it requires the defendant to return any benefit they wrongfully obtained from the plaintiff. It focuses on the defendant's gain, not the plaintiff's loss. This distinguishes it from compensatory damages, which focus on the plaintiff's loss."
    }

];
