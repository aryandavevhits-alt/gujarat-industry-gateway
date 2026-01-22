import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

type FontSize = 'small' | 'normal' | 'large';
type Language = 'en' | 'gu';

interface AccessibilityContextType {
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
  highContrast: boolean;
  toggleHighContrast: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Utility Bar
    skipToContent: 'Skip to Main Content',
    screenReaderMode: 'Screen Reader',
    highContrast: 'High Contrast',
    normalView: 'Normal View',
    
    // Header
    govTitle: 'Government of Gujarat',
    deptTitle: 'Industries Commissionerate',
    searchPlaceholder: 'Search...',
    advancedSearch: 'Advanced Search',
    
    // Navigation
    home: 'Home',
    aboutUs: 'About Us',
    industrialEcosystem: 'Industrial Ecosystem',
    policiesSchemes: 'Policies & Schemes',
    kyd: 'Know Your Department',
    services: 'Services',
    mediaGallery: 'Media Gallery',
    contactUs: 'Contact Us',
    
    // Sectors
    msmeCluster: 'MSME & Cluster Development',
    industrialParks: 'Industrial Parks & SEZ',
    textileApparel: 'Textile & Apparel Sector',
    logisticsInfra: 'Logistics & Infrastructure',
    rdTesting: 'R&D & Testing Facilities',
    investmentOpportunities: 'Investment Opportunities',
    
    // Dashboard
    departmentSnapshot: 'Department Snapshot',
    registeredUnits: 'Registered Industrial Units',
    activeClusters: 'Active Industrial Clusters',
    policyRepository: 'Policy & Scheme Repository',
    industrialInfra: 'Industrial Infrastructure',
    latestInitiatives: 'Latest Government Initiatives',
    connectedSystems: 'Connected Systems',
    autoUpdated: 'Auto-updated Statistics',
    dataDashboard: 'Data Dashboard',
    
    // Policy Hub
    policySchemeHub: 'Policy, Scheme & Notification Hub',
    actsRules: 'Acts & Rules',
    policies: 'Policies',
    schemesIncentives: 'Schemes & Incentives',
    grCirculars: 'GRs & Circulars',
    notifications: 'Notifications',
    formsGuidelines: 'Forms & Guidelines',
    filterByYear: 'Filter by Year',
    filterBySector: 'Filter by Sector',
    download: 'Download',
    view: 'View',
    
    // KYD
    kydKnowledgeCenter: 'Know Your Department (KYD) Knowledge Center',
    deptOverview: 'Department Overview',
    visionMission: 'Vision, Mission & Functions',
    orgStructure: 'Organizational Structure',
    dutiesProcedures: 'Duties & Procedures',
    proactiveDisclosures: 'Proactive Disclosures (RTI)',
    achievements: 'Achievements',
    videoModule: 'Video Module',
    transcript: 'Transcript Available',
    captions: 'Captions Available',
    orientationResource: 'Orientation Resource',
    
    // Engagement
    engagementZone: 'Engagement & Facilitation Zone',
    grievanceQuery: 'Grievance & Query Submission',
    feedbackSystem: 'Feedback System',
    citizenCharter: 'Citizen Charter',
    faqRepository: 'FAQ Repository',
    submitGrievance: 'Submit Grievance',
    trackStatus: 'Track Status',
    
    // Media
    mediaOutreach: 'Media, Events & Outreach',
    pressReleases: 'Press Releases',
    govEvents: 'Government Events',
    photoGallery: 'Photo Gallery',
    videoGallery: 'Video Gallery',
    departmentEvent: 'Department Event',
    pressCommunication: 'Press Communication',
    publicAwareness: 'Public Awareness Program',
    
    // Footer
    copyrightPolicy: 'Copyright Policy',
    privacyPolicy: 'Privacy Policy',
    termsConditions: 'Terms & Conditions',
    hyperlinkPolicy: 'Hyperlink Policy',
    accessibilityStatement: 'Accessibility Statement',
    disclaimer: 'Disclaimer',
    lastUpdated: 'Last Updated',
    contentOwnedBy: 'Content owned and maintained by Industries Commissionerate, Government of Gujarat',
    visitorCount: 'Visitor Count',
    
    // Common
    viewAll: 'View All',
    learnMore: 'Learn More',
    explore: 'Explore',
    readMore: 'Read More',
  },
  gu: {
    // Utility Bar
    skipToContent: 'મુખ્ય સામગ્રી પર જાઓ',
    screenReaderMode: 'સ્ક્રીન રીડર',
    highContrast: 'ઉચ્ચ કોન્ટ્રાસ્ટ',
    normalView: 'સામાન્ય દૃશ્ય',
    
    // Header
    govTitle: 'ગુજરાત સરકાર',
    deptTitle: 'ઉદ્યોગ કમિશનરેટ',
    searchPlaceholder: 'શોધો...',
    advancedSearch: 'અદ્યતન શોધ',
    
    // Navigation
    home: 'હોમ',
    aboutUs: 'અમારા વિશે',
    industrialEcosystem: 'ઔદ્યોગિક ઇકોસિસ્ટમ',
    policiesSchemes: 'નીતિઓ અને યોજનાઓ',
    kyd: 'તમારા વિભાગને જાણો',
    services: 'સેવાઓ',
    mediaGallery: 'મીડિયા ગેલેરી',
    contactUs: 'સંપર્ક કરો',
    
    // Sectors
    msmeCluster: 'MSME અને ક્લસ્ટર વિકાસ',
    industrialParks: 'ઔદ્યોગિક પાર્ક અને SEZ',
    textileApparel: 'ટેક્સટાઇલ અને એપેરલ સેક્ટર',
    logisticsInfra: 'લોજિસ્ટિક્સ અને માળખાકીય સુવિધાઓ',
    rdTesting: 'R&D અને ટેસ્ટિંગ સુવિધાઓ',
    investmentOpportunities: 'રોકાણની તકો',
    
    // Dashboard
    departmentSnapshot: 'વિભાગ સ્નેપશોટ',
    registeredUnits: 'નોંધાયેલ ઔદ્યોગિક એકમો',
    activeClusters: 'સક્રિય ઔદ્યોગિક ક્લસ્ટર્સ',
    policyRepository: 'નીતિ અને યોજના ભંડાર',
    industrialInfra: 'ઔદ્યોગિક માળખાકીય સુવિધાઓ',
    latestInitiatives: 'નવીનતમ સરકારી પહેલો',
    connectedSystems: 'જોડાયેલ સિસ્ટમ્સ',
    autoUpdated: 'ઓટો-અપડેટેડ આંકડા',
    dataDashboard: 'ડેટા ડેશબોર્ડ',
    
    // Policy Hub
    policySchemeHub: 'નીતિ, યોજના અને સૂચના હબ',
    actsRules: 'કાયદાઓ અને નિયમો',
    policies: 'નીતિઓ',
    schemesIncentives: 'યોજનાઓ અને પ્રોત્સાહનો',
    grCirculars: 'GR અને પરિપત્રો',
    notifications: 'સૂચનાઓ',
    formsGuidelines: 'ફોર્મ્સ અને માર્ગદર્શિકા',
    filterByYear: 'વર્ષ દ્વારા ફિલ્ટર',
    filterBySector: 'સેક્ટર દ્વારા ફિલ્ટર',
    download: 'ડાઉનલોડ',
    view: 'જુઓ',
    
    // KYD
    kydKnowledgeCenter: 'તમારા વિભાગને જાણો (KYD) જ્ઞાન કેન્દ્ર',
    deptOverview: 'વિભાગની ઝાંખી',
    visionMission: 'દ્રષ્ટિ, મિશન અને કાર્યો',
    orgStructure: 'સંગઠનાત્મક માળખું',
    dutiesProcedures: 'ફરજો અને પ્રક્રિયાઓ',
    proactiveDisclosures: 'પ્રોએક્ટિવ ડિસ્ક્લોઝર (RTI)',
    achievements: 'સિદ્ધિઓ',
    videoModule: 'વિડિયો મોડ્યુલ',
    transcript: 'ટ્રાન્સક્રિપ્ટ ઉપલબ્ધ',
    captions: 'કેપ્શન ઉપલબ્ધ',
    orientationResource: 'ઓરિએન્ટેશન સંસાધન',
    
    // Engagement
    engagementZone: 'જોડાણ અને સુવિધા ઝોન',
    grievanceQuery: 'ફરિયાદ અને પ્રશ્ન સબમિશન',
    feedbackSystem: 'પ્રતિસાદ સિસ્ટમ',
    citizenCharter: 'નાગરિક ચાર્ટર',
    faqRepository: 'FAQ ભંડાર',
    submitGrievance: 'ફરિયાદ સબમિટ કરો',
    trackStatus: 'સ્થિતિ ટ્રેક કરો',
    
    // Media
    mediaOutreach: 'મીડિયા, ઇવેન્ટ્સ અને આઉટરીચ',
    pressReleases: 'પ્રેસ રિલીઝ',
    govEvents: 'સરકારી કાર્યક્રમો',
    photoGallery: 'ફોટો ગેલેરી',
    videoGallery: 'વિડિયો ગેલેરી',
    departmentEvent: 'વિભાગીય કાર્યક્રમ',
    pressCommunication: 'પ્રેસ સંદેશાવ્યવહાર',
    publicAwareness: 'જાહેર જાગૃતિ કાર્યક્રમ',
    
    // Footer
    copyrightPolicy: 'કોપીરાઇટ નીતિ',
    privacyPolicy: 'ગોપનીયતા નીતિ',
    termsConditions: 'નિયમો અને શરતો',
    hyperlinkPolicy: 'હાયપરલિંક નીતિ',
    accessibilityStatement: 'એક્સેસિબિલિટી સ્ટેટમેન્ટ',
    disclaimer: 'અસ્વીકરણ',
    lastUpdated: 'છેલ્લે અપડેટ થયું',
    contentOwnedBy: 'સામગ્રી ઉદ્યોગ કમિશનરેટ, ગુજરાત સરકાર દ્વારા માલિકી અને જાળવણી',
    visitorCount: 'મુલાકાતી ગણતરી',
    
    // Common
    viewAll: 'બધા જુઓ',
    learnMore: 'વધુ જાણો',
    explore: 'અન્વેષણ કરો',
    readMore: 'વધુ વાંચો',
  },
};

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [fontSize, setFontSize] = useState<FontSize>('normal');
  const [highContrast, setHighContrast] = useState(false);
  const [language, setLanguage] = useState<Language>('en');

  const toggleHighContrast = useCallback(() => {
    setHighContrast(prev => !prev);
  }, []);

  const t = useCallback((key: string): string => {
    return translations[language][key] || key;
  }, [language]);

  return (
    <AccessibilityContext.Provider
      value={{
        fontSize,
        setFontSize,
        highContrast,
        toggleHighContrast,
        language,
        setLanguage,
        t,
      }}
    >
      <div className={`font-size-${fontSize} ${highContrast ? 'high-contrast' : ''}`}>
        {children}
      </div>
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
}
