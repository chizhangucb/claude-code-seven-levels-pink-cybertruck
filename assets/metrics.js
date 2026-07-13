/* Per-level cost & time metrics, mined from the raw session transcripts.
   Cost = API-equivalent at list price: Fable 5 $10/$50 per MTok in/out,
   Opus 4.8 $5/$25; cache reads 0.1x input, cache writes 2x (1-hour TTL,
   as recorded in every session's usage blocks; pricing re-verified via the
   claude-api skill at analysis time, 2026-07-13). Time is machine time only:
   the sum of prompt-to-last-response intervals per headless invocation,
   excluding orchestrator verification time between the initial prompt and
   any scripted follow-up. Transcript-mined costs matched the CLI-reported
   total_cost_usd for every session to within a cent. */
window.SEVEN_LEVELS_METRICS = {
  1: { fable: { prompts: 1, calls: 2,  cost: 1.12, mins: 1.6,  time: "1m 38s"  },
       opus:  { prompts: 1, calls: 2,  cost: 0.57, mins: 1.7,  time: "1m 40s"  } },
  2: { fable: { prompts: 1, calls: 3,  cost: 1.67, mins: 2.2,  time: "2m 11s"  },
       opus:  { prompts: 1, calls: 44, cost: 2.68, mins: 8.8,  time: "8m 49s"  } },
  3: { fable: { prompts: 1, calls: 27, cost: 6.77, mins: 7.5,  time: "7m 33s"  },
       opus:  { prompts: 1, calls: 51, cost: 5.69, mins: 10.3, time: "10m 16s" } },
  4: { fable: { prompts: 2, calls: 31, cost: 7.82, mins: 5.9,  time: "5m 56s"  },
       opus:  { prompts: 2, calls: 53, cost: 4.42, mins: 8.2,  time: "8m 11s"  } },
  5: { fable: { prompts: 1, calls: 22, cost: 3.43, mins: 3.4,  time: "3m 24s"  },
       opus:  { prompts: 1, calls: 32, cost: 2.23, mins: 3.2,  time: "3m 10s"  } },
  6: { fable: { prompts: 1, calls: 31, cost: 7.20, mins: 9.4,  time: "9m 22s"  },
       opus:  { prompts: 1, calls: 56, cost: 4.09, mins: 7.9,  time: "7m 56s"  } },
  7: { fable: { prompts: 2, calls: 47, cost: 9.40, mins: 13.3, time: "13m 18s" },
       opus:  { prompts: 2, calls: 51, cost: 4.94, mins: 10.2, time: "10m 14s" } },
};

window.SEVEN_LEVELS_METRIC_NOTES = {
  4: "Both models needed the scripted rescope follow-up (the component's full-viewport wrapper).",
  7: "Both models delivered an extraction kit first; the scripted follow-up promoted it to the page. Clean numbers this round — no overwrite incident.",
};

(function () {
  function strip(level) {
    var m = window.SEVEN_LEVELS_METRICS[level];
    if (!m) return "";
    function row(name, d) {
      return '<div class="metric-row"><span class="metric-model">' + name + "</span>" +
        '<span class="metric"><b>$' + d.cost.toFixed(2) + "</b> API-equiv. cost</span>" +
        '<span class="metric"><b>' + d.time + "</b> machine time</span>" +
        '<span class="metric"><b>' + d.prompts + "</b> prompt" + (d.prompts > 1 ? "s" : "") + "</span>" +
        '<span class="metric"><b>' + d.calls + "</b> API calls</span></div>";
    }
    var note = window.SEVEN_LEVELS_METRIC_NOTES[level];
    return '<div class="metrics-strip">' + row("Fable 5", m.fable) + row("Opus 4.8", m.opus) +
      '<p class="metric-foot">Cost at API list price with prompt caching (1-hour TTL), mined from the session transcripts. Time is machine time only (AI thinking + tool use); orchestrator verification time between prompts is excluded.' +
      (note ? " " + note : "") + "</p></div>";
  }
  window.renderLevelMetrics = strip;
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-metrics-level]").forEach(function (el) {
      el.innerHTML = strip(parseInt(el.getAttribute("data-metrics-level"), 10));
    });
  });
})();
