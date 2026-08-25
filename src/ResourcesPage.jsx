import { useState } from 'react';

// ============================================================================
// Highland Steel — Investor Resources
// Public, unlisted landing page. No login. Files live in a dedicated,
// fully isolated public Supabase bucket (growth-circle-public) — entirely
// separate from the internal admin document library.
// ============================================================================

const SUPABASE_URL = 'https://hfekutmvgyjyvcngjvtg.supabase.co';
const BUCKET = 'growth-circle-public';

function publicUrl(path) {
  return `${SUPABASE_URL}/storage/v1/object/public/${BUCKET}/${encodeURIComponent(path)}`;
}

const WFH_RESOURCES = [
  {
    title: 'Highland Steel Pitch Deck',
    description: 'An overview of the BoxHouse program, unit models, and the tax-advantaged structure behind the investment.',
    href: publicUrl('HS_Pitch_Deck.pdf'),
    icon: '📊',
  },
  {
    title: 'Tax Opinion Letter',
    description: 'Legal opinion from Fabian VanCott addressing bonus depreciation eligibility and trust material participation.',
    href: publicUrl('BoxHouse_Highland Steel Opinion Letter.pdf'),
    icon: '⚖️',
  },
  {
    title: 'Significant Services Memo',
    description: 'Supplemental memorandum addressing significant services considerations for the ReadyPod structure.',
    href: publicUrl('Second_Supplemental_Memo_PwC_ReadyPod_Significant_Services.docx'),
    icon: '📄',
  },
  {
    title: 'Unit Appraisal',
    description: 'Certified income-approach appraisal of a Duplex unit, prepared by Tiny Home Appraisers.',
    href: publicUrl('TinyHomesAppraisal.pdf'),
    icon: '🏠',
  },
  {
    title: "Sample Buyer's Packet",
    description: 'An example of the full documentation package a buyer receives upon purchase.',
    href: 'https://drive.google.com/file/d/1MrdnBKIl7eo4Bj0W81EYlx1OsqXPgqES/view?usp=sharing',
    icon: '📁',
    external: true,
  },
  {
    title: 'Highland Steel FAQ',
    description: 'Answers to the most common investor questions about the program structure, tax mechanics, and material participation.',
    href: 'https://docs.google.com/document/d/1roqhkr-TaWSu1XonEG8orH3SziL2i7tnPlnpdCpWXeE/preview',
    icon: '❓',
    external: true,
  },
  {
    title: 'CPA Letter — Workforce Housing',
    description: 'Summary memo covering the tax strategy, bonus depreciation mechanics, and key considerations for CPAs and investors.',
    href: 'https://drive.google.com/file/d/1bBDRFg7uDJ6s9ywiWkj4Og-jhlVR7QhA/view?usp=sharing',
    icon: '📝',
    external: true,
  },
  {
    title: 'Material Participation',
    description: 'Legal analysis supporting material participation for grantor trust structures, including key case law from Carter and Aragona.',
    href: publicUrl('Material_Participation.pdf'),
    icon: '⚖️',
  },
];

const HM_RESOURCES = [
  {
    title: "Sample Buyer's Packet",
    description: 'An example of the full documentation package a Heavy Machinery buyer receives upon purchase.',
    href: publicUrl('Heavy_Equipment_Sample_Buyers_Packet.pdf'),
    icon: '📁',
  },
  {
    title: 'Limited Loss Guaranty',
    description: 'Terms of the limited loss guaranty provided under the Heavy Machinery program.',
    href: publicUrl('Heavy_Equipment_Limited_Loss_Guaranty.pdf'),
    icon: '🛡️',
  },
  {
    title: 'Tax Opinion Letter',
    description: 'Legal opinion addressing the tax treatment of the Heavy Machinery investment structure.',
    href: publicUrl('Heavy_Equipment_Opinion_Letter.pdf'),
    icon: '⚖️',
  },
  {
    title: 'Tax White Paper',
    description: 'Detailed analysis of accelerated depreciation strategies and excess business loss framework for heavy machinery investments under the OBBBA.',
    href: publicUrl('Heavy_Machinery_White_Paper.pdf'),
    icon: '📄',
  },
];

const DEVIN_BRADY_VIDEO_ID = 'gfvXk0stny8';

export default function ResourcesPage() {
  const [copied, setCopied] = useState(false);
  const [strategy, setStrategy] = useState('wfh'); // 'wfh' | 'hm'

  function copyPageLink() {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const resources = strategy === 'wfh' ? WFH_RESOURCES : HM_RESOURCES;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-gradient-to-r from-blue-700 to-blue-800 text-white">
        <div className="max-w-5xl mx-auto px-6 py-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md">
              <span className="text-blue-700 text-xl font-bold">HS</span>
            </div>
            <span className="font-bold text-2xl">Highland Steel</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Investor Resources</h1>
          <p className="text-blue-100 text-lg max-w-2xl mb-6">
            Everything you need to review the investment structure — pitch materials, tax documentation, and an interactive calculator.
          </p>

          <div className="inline-flex bg-white/10 rounded-xl p-1.5 backdrop-blur-sm">
            <button
              onClick={() => setStrategy('wfh')}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                strategy === 'wfh' ? 'bg-white text-blue-700' : 'text-blue-100 hover:text-white'
              }`}
            >
              Workforce Housing
            </button>
            <button
              onClick={() => setStrategy('hm')}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                strategy === 'hm' ? 'bg-white text-blue-700' : 'text-blue-100 hover:text-white'
              }`}
            >
              Heavy Machinery
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">

        {strategy === 'wfh' && (
          <>
            <a
              href="https://taxcalculatorhs.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-6 bg-white rounded-2xl shadow-lg border-2 border-blue-200 p-8 hover:border-blue-400 hover:shadow-xl transition-all group"
            >
              <div className="flex items-start gap-5">
                <div className="text-4xl">🧮</div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    Tax Savings Calculator
                  </h2>
                  <p className="text-slate-500 mt-1">
                    Run your own numbers — enter your income and filing details to see your estimated tax savings under the program.
                  </p>
                  <span className="inline-block mt-3 text-sm font-semibold text-blue-600">
                    Open Calculator →
                  </span>
                </div>
              </div>
            </a>

            <div className="mb-6 bg-white rounded-2xl shadow-lg border-2 border-slate-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-200">
                <h2 className="text-lg font-bold text-slate-900">In-Depth Program Explainer</h2>
                <p className="text-sm text-slate-500 mt-1">Devin Brady, CPA, walks through how the program works.</p>
              </div>
              <div className="p-6">
                <div
                  className="w-full rounded-xl overflow-hidden border border-slate-200"
                  style={{ position: 'relative', paddingBottom: '56.25%' }}
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${DEVIN_BRADY_VIDEO_ID}`}
                    className="absolute inset-0 w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    title="Devin Brady Program Explainer"
                  />
                </div>
              </div>
            </div>
          </>
        )}

        <div className="grid sm:grid-cols-2 gap-5">
          {resources.map((r) => (
            <a
              key={r.title}
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl shadow-md border-2 border-slate-200 p-6 hover:border-blue-300 hover:shadow-lg transition-all group flex flex-col"
            >
              <div className="text-3xl mb-3">{r.icon}</div>
              <h3 className="font-bold text-slate-900 group-hover:text-blue-700 transition-colors mb-1">
                {r.title}
              </h3>
              <p className="text-sm text-slate-500 flex-1">{r.description}</p>
              <span className="inline-block mt-4 text-sm font-semibold text-blue-600">
                {r.external ? 'View in Drive →' : 'Download →'}
              </span>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={copyPageLink}
            className="px-5 py-2.5 bg-white border-2 border-slate-300 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
          >
            {copied ? '✓ Link Copied' : 'Copy Link to This Page'}
          </button>
        </div>
      </main>

      <footer className="text-center py-8 text-sm text-slate-400">
        Highland Steel LLC
      </footer>
    </div>
  );
}
