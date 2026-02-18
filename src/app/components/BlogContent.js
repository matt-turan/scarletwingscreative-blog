// BlogContent.js

import { Copy, Check } from "lucide-react";

export default function BlogContent({
  activePost,
  copiedIndex,
  onCopy,
  contentData,
}) {
  const postData = contentData[activePost];

  if (!postData) {
    return <div className="text-slate-600">Content not found</div>;
  }

  return (
    <div className="prose prose-slate max-w-none">
      <h1 className="text-xl font-bold text-slate-900 mb-8">
        {postData.title}
      </h1>

      <div className="space-y-6">
        {postData.items.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg border border-slate-200 overflow-hidden"
          >
            <div className="px-4 py-3 bg-slate-50 border-b border-slate-200">
              <h3 className="text-sm font-semibold text-slate-700">
                {idx + 1}. {item.title}
              </h3>
            </div>

            {item.command && (
              <div className="relative group">
                <pre className="p-4 bg-slate-900 text-slate-100 overflow-x-auto">
                  <code className="text-sm font-mono">{item.command}</code>
                </pre>
                <button
                  onClick={() => onCopy(item.command, `${idx}-single`)}
                  className="absolute top-2 right-2 p-2 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity"
                  title="Copy to clipboard"
                >
                  {copiedIndex === `${idx}-single` ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            )}

            {/* {item.options} */}
            {/* {item.options && (
              <div>
                {item.options.map((option, index) => {
                  return (
                    <div key={index} className="relative group">
                      <pre className="p-4 bg-slate-900 text-slate-100 overflow-x-auto">
                        <code className="text-sm font-mono">{option}</code>
                      </pre>
                    </div>
                  );
                })}
              </div>
            )} */}

            {item.commands && (
              <div className="space-y-0">
                {item.commands.map((cmd, cmdIdx) => (
                  <div
                    key={cmdIdx}
                    className="relative group border-t border-slate-200 first:border-t-0"
                  >
                    <pre className="p-4 bg-slate-900 text-slate-100 overflow-x-auto">
                      <code className="text-sm font-mono">{cmd}</code>
                    </pre>
                    <button
                      onClick={() => onCopy(cmd, `${idx}-${cmdIdx}`)}
                      className="absolute top-2 right-2 p-2 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity"
                      title="Copy to clipboard"
                    >
                      {copiedIndex === `${idx}-${cmdIdx}` ? (
                        <Check className="w-4 h-4 text-green-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
