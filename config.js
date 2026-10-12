(function () {
  var T = [["Anxious mood","Worries, anticipation of the worst, fearful anticipation, irritability."],["Tension","Feelings of tension, fatigability, startle response, moved to tears easily, trembling, feelings of restlessness, inability to relax."],["Fears","Of dark, of strangers, of being left alone, of animals, of traffic, of crowds."],["Insomnia","Difficulty in falling asleep, broken sleep, unsatisfying sleep and fatigue on waking, dreams, nightmares, night terrors."],["Intellectual","Difficulty in concentration, poor memory."],["Depressed mood","Loss of interest, lack of pleasure in hobbies, depression, early waking, diurnal swing."],["Somatic (muscular)","Pains and aches, twitching, stiffness, myoclonic jerks, grinding of teeth, unsteady voice, increased muscular tone."],["Somatic (sensory)","Tinnitus, blurring of vision, hot and cold flushes, feelings of weakness, pricking sensation."],["Cardiovascular symptoms","Tachycardia, palpitations, pain in chest, throbbing of vessels, fainting feelings, missing beat."],["Respiratory symptoms","Pressure or constriction in chest, choking feelings, sighing, dyspnea."],["Gastrointestinal symptoms","Difficulty in swallowing, wind abdominal pain, burning sensations, abdominal fullness, nausea, vomiting, borborygmi, looseness of bowels, loss of weight, constipation."],["Genitourinary symptoms","Frequency of micturition, urgency of micturition, amenorrhea, menorrhagia, development of frigidity, premature ejaculation, loss of libido, impotence."],["Autonomic symptoms","Dry mouth, flushing, pallor, tendency to sweat, giddiness, tension headache, raising of hair."],["Behavior at interview","Fidgeting, restlessness or pacing, tremor of hands, furrowed brow, strained face, sighing or rapid respiration, facial pallor, swallowing, etc."]];
  var O = ["Not present","Mild","Moderate","Severe","Very severe"].map(function (l, i) { return { v: i, l: l }; });
  window.CFG = {
    slug: "hama", short: "HAM-A", sub: "Hamilton Anxiety Rating Scale, clinician-rated", clinician: true,
    intro: "Below is a list of phrases that describe certain feeling that people have. Rate the patients by finding the answer which best describes the extent to which he/she has these conditions. Select one of the five responses for each of the fourteen questions. 0 = Not present, 1 = Mild, 2 = Moderate, 3 = Severe, 4 = Very severe.",
    sections: [{ id: "s1", title: "Items (0 to 4)", items: T.map(function (t, i) { return { id: "q" + (i + 1), num: (i + 1) + ".", text: t[0], ex: t[1], opts: O }; }) },
      { id: "n", title: "Clinician notes", type: "text", items: [{ id: "notes", text: "Notes" }] }],
    scoringHint: '<p class="hint">Each item is scored on a scale of 0 (not present) to 4 (severe), with a total score range of 0-56, where &lt;17 indicates mild severity, 18-24 mild to moderate severity and 25-30 moderate to severe. Reference: Hamilton M. Br J Med Psychol 1959;32:50-55.</p>',
    footer: "HAM-A · Hamilton 1959 · public domain · clinician-rated",
    score: function (A, H) {
      var t = H.sum(A, H.ids("q", 1, 14)), b;
      if (t === null) b = "Incomplete, not scored";
      else if (t < 17) b = "Mild severity (<17)";
      else if (t === 17) b = "17: not assigned a band in the source (<17 mild, 18-24 mild to moderate)";
      else if (t <= 24) b = "Mild to moderate severity (18-24)";
      else if (t <= 30) b = "Moderate to severe (25-30)";
      else b = "Above 30: the source gives no band above 25-30 moderate to severe";
      return { incomplete: t === null, rows: [["Total (0-56)", t === null ? "Incomplete, not scored" : t], ["Severity", b]] };
    }
  };
})();
