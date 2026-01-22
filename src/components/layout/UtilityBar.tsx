import { useAccessibility } from '@/contexts/AccessibilityContext';
import { Eye, Type, Monitor } from 'lucide-react';

export function UtilityBar() {
  const { fontSize, setFontSize, highContrast, toggleHighContrast, language, setLanguage, t } = useAccessibility();

  return (
    <>
      {/* Skip to Main Content Link */}
      <a 
        href="#main-content" 
        className="skip-link"
        aria-label={t('skipToContent')}
      >
        {t('skipToContent')}
      </a>

      <div className="utility-bar" role="navigation" aria-label="Accessibility controls">
        <div className="container flex items-center justify-between">
          {/* Left side - Accessibility Info */}
          <div className="flex items-center gap-4">
            <button
              className="flex items-center gap-1 hover:underline focus:underline"
              aria-label={t('screenReaderMode')}
            >
              <Eye className="h-3 w-3" />
              <span className="hidden sm:inline">{t('screenReaderMode')}</span>
            </button>
          </div>

          {/* Right side - Controls */}
          <div className="flex items-center gap-4">
            {/* Font Size Controls */}
            <div className="flex items-center gap-1" role="group" aria-label="Font size controls">
              <Type className="h-3 w-3 mr-1" />
              <button
                onClick={() => setFontSize('small')}
                className={`px-1.5 py-0.5 text-xs rounded transition-colors ${
                  fontSize === 'small' ? 'bg-primary-foreground/20' : 'hover:bg-primary-foreground/10'
                }`}
                aria-pressed={fontSize === 'small'}
                aria-label="Small font size"
              >
                A-
              </button>
              <button
                onClick={() => setFontSize('normal')}
                className={`px-1.5 py-0.5 text-sm rounded transition-colors ${
                  fontSize === 'normal' ? 'bg-primary-foreground/20' : 'hover:bg-primary-foreground/10'
                }`}
                aria-pressed={fontSize === 'normal'}
                aria-label="Normal font size"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`px-1.5 py-0.5 text-base rounded transition-colors ${
                  fontSize === 'large' ? 'bg-primary-foreground/20' : 'hover:bg-primary-foreground/10'
                }`}
                aria-pressed={fontSize === 'large'}
                aria-label="Large font size"
              >
                A+
              </button>
            </div>

            {/* Divider */}
            <span className="h-4 w-px bg-primary-foreground/30" aria-hidden="true" />

            {/* High Contrast Toggle */}
            <button
              onClick={toggleHighContrast}
              className="flex items-center gap-1 hover:underline focus:underline"
              aria-pressed={highContrast}
            >
              <Monitor className="h-3 w-3" />
              <span className="hidden sm:inline">
                {highContrast ? t('normalView') : t('highContrast')}
              </span>
            </button>

            {/* Divider */}
            <span className="h-4 w-px bg-primary-foreground/30" aria-hidden="true" />

            {/* Language Switch */}
            <div className="flex items-center gap-1" role="group" aria-label="Language selection">
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-0.5 rounded text-xs transition-colors ${
                  language === 'en' ? 'bg-primary-foreground/20 font-medium' : 'hover:bg-primary-foreground/10'
                }`}
                aria-pressed={language === 'en'}
                lang="en"
              >
                English
              </button>
              <span className="text-primary-foreground/50">|</span>
              <button
                onClick={() => setLanguage('gu')}
                className={`px-2 py-0.5 rounded text-xs transition-colors ${
                  language === 'gu' ? 'bg-primary-foreground/20 font-medium' : 'hover:bg-primary-foreground/10'
                }`}
                aria-pressed={language === 'gu'}
                lang="gu"
              >
                ગુજરાતી
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
