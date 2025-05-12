export default function CodeEditor() {
  return (
    <div className="relative rounded-2xl bg-[#0A101F]/80 ring-1 ring-white/10 backdrop-blur text-white">
      <div className="absolute -top-px left-20 right-11 h-px bg-gradient-to-r from-sky-300/0 via-sky-300/70 to-sky-300/0"></div>
      <div className="absolute -bottom-px left-11 right-20 h-px bg-gradient-to-r from-blue-400/0 via-blue-400 to-blue-400/0"></div>
      <div className="pl-4 pt-4">
        <svg
          aria-hidden="true"
          viewBox="0 0 42 10"
          fill="none"
          className="h-2.5 w-auto stroke-slate-500/30"
        >
          <circle cx="5" cy="5" r="4.5"></circle>
          <circle cx="21" cy="5" r="4.5"></circle>
          <circle cx="37" cy="5" r="4.5"></circle>
        </svg>
        <div className="mt-4 flex space-x-2 text-xs">
          <div className="flex h-6 rounded-full bg-gradient-to-r from-sky-400/30 via-sky-400 to-sky-400/30 p-px font-medium text-sky-300">
            <div className="flex items-center rounded-full px-2.5 bg-slate-800">
              config.js
            </div>
          </div>
          <div className="flex h-6 rounded-full text-slate-500">
            <div className="flex items-center rounded-full px-2.5">
              package.json
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-start px-1 text-sm">
          <div
            aria-hidden="true"
            className="select-none border-r border-slate-300/5 pr-4 font-mono text-slate-600"
          >
            01
            <br />
            02
            <br />
            03
            <br />
            04
            <br />
            05
            <br />
            06
            <br />
            07
            <br />
            08
            <br />
            09
            <br />
            10
            <br />
          </div>
          <pre className="prism-code language-javascript flex overflow-x-auto pb-6">
            <code className="px-4">
              <div className="token-line">
                <span className="token keyword module">export</span>
                <span className="token plain"> </span>
                <span className="token keyword module">default</span>
                <span className="token plain"> </span>
                <span className="token punctuation">{"{"}</span>
                <span className="token plain"></span>
              </div>
              <div className="token-line">
                <span className="token plain"> </span>
                <span className="token literal-property property">stack</span>
                <span className="token operator">:</span>
                <span className="token plain"> </span>
                <span className="token punctuation">[</span>
                <span className="token string">{'"React"'}</span>
                <span className="token punctuation">,</span>
                <span className="token string">{'"Node.js"'}</span>
                <span className="token punctuation">,</span>
                <span className="token string">{'"PHP"'}</span>
                <span className="token punctuation">,</span>
                <span className="token string">{'"C#"'}</span>
                <span className="token punctuation">]</span>
                <span className="token punctuation">,</span>
              </div>
              <div className="token-line">
                <span className="token plain"> </span>
                <span className="token literal-property property">
                  experiments
                </span>
                <span className="token operator">:</span>
                <span className="token plain"> </span>
                <span className="token punctuation">{"{"}</span>
                <span className="token plain"></span>
              </div>
              <div className="token-line">
                <span className="token plain"> </span>
                <span className="token plain"> </span>
                <span className="token literal-property property">
                  AI_integration
                </span>
                <span className="token operator">:</span>
                <span className="token plain"> </span>
                <span className="token boolean">true</span>
                <span className="token punctuation">,</span>
              </div>
              <div className="token-line">
                <span className="token plain"> </span>
                <span className="token plain"> </span>
                <span className="token literal-property property">
                  WebGL_effects
                </span>
                <span className="token operator">:</span>
                <span className="token plain"> </span>
                <span className="token boolean">false</span>
                <span className="token punctuation">,</span>
              </div>
              <div className="token-line">
                <span className="token plain"> </span>
                <span className="token plain"> </span>
                <span className="token literal-property property">
                  performanceMode
                </span>
                <span className="token operator">:</span>
                <span className="token plain"> </span>
                <span className="token string">{'"high"'}</span>
                <span className="token punctuation">,</span>
              </div>
              <div className="token-line">
                <span className="token plain"> </span>
                <span className="token punctuation">{"}"}</span>
                <span className="token punctuation">,</span>
              </div>
              <div className="token-line">
                <span className="token punctuation">{"}"}</span>
              </div>
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}
