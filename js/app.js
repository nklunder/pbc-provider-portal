/* jshint esnext: true */

(function() {
  'use strict';

  var reviewToolForm = document.getElementById('prospective-review-form');

  reviewToolForm.addEventListener('submit', function (e) {
    var userInput = e.target.prospectiveSearchInput.value;

    e.preventDefault();

    renderResults(searchServices(userInput));

    this.reset();
  });

  function searchServices(userInput) {
    var containsDigit = /\d/g,
        searchValue   = new RegExp(`${userInput}`, 'gi'),
        category      = containsDigit.test(userInput) ? "claimCode" : "desc";

    return services.filter(function (service) {
      return searchValue.test(service[category]);
    });
  }

  function renderResults(arr) {
    var resultsList = document.getElementById('prospective-search-results');
    resultsList.innerHTML = arr;
  }
  
}());


var services = [
  {
    "claimCode": "0004M",
    "desc": "Scoliosis, DNA analysis of 53 single nucleotide polymorphisms (SNPs), using saliva, prognostic algorithm reported as a risk score",
    "requirement": "Pre-Service Review Recommended",
    "reason": "Investigative",
    "request": "History and physical, family history, clinical documentation supporting testing"
  },
  {
    "claimCode": "0006M",
    "desc": "Oncology (hepatic), mRNA expression levels of 161 genes, utilizing fresh hepatocellular carcinoma tumor tissue, with alpha-fetoprotein level, algorithm reported as a risk classifier",
    "requirement": "Pre-Service Review Recommended",
    "reason": "Investigative",
    "request": "History and physical, family history, clinical documentation supporting testing"
  },
  {
    "claimCode": "0007M",
    "desc": "Oncology (gastrointestinal neuroendocrine tumors), real-time PCR expression analysis of 51 genes, utilizing whole peripheral blood, algorithm reported as a nomogram of tumor disease index",
    "requirement": "Pre-Service Review Recommended",
    "reason": "Investigative",
    "request": "History and physical, family history, clinical documentation supporting testing"
  },
  {
    "claimCode": "0008M",
    "desc": "Oncology (breast), mRNA analysis of 58 genes using hybrid capture, on formalin-fixed paraffin-embedded (FFPE) tissue, prognostic algorithm reported as a risk score",
    "requirement": "Pre-Service Review Recommended",
    "reason": "Investigative",
    "request": "History and physical, family history, clinical documentation supporting testing"
  },
  {
    "claimCode": "0010M",
    "desc": "Oncology (High-Grade Prostate Cancer), biochemical assay of four proteins (Total PSA, Free PSA, Intact PSA and human kallikrein 2 [hK2]) plus patient age, digital rectal examination status, and no history of positive prostate biopsy, utilizing plasma, prognostic algorithm reported as a probability score",
    "requirement": "Pre-Service Review Recommended",
    "reason": "Investigative",
    "request": "History and physical, family history, clinical documentation supporting testing"
  },
  {
    "claimCode": "0019T",
    "desc": "Extracorporeal shock wave therapy involving musculoskeletal system",
    "requirement": "Pre-Service Review Recommended",
    "reason": "Investigative",
    "request": "History and physical, family history, clinical documentation supporting testing"
  },
  {
    "claimCode": "0051T",
    "desc": "Implantation of a total replacement heart system (artificial heart) with recipient cardiectomy",
    "requirement": "Pre-Service Review Recommended",
    "reason": "Medical Necessity",
    "request": "Pre Operative Evaluation, History and Physical, and Operative report"
  },
  {
    "claimCode": "0052T",
    "desc": "Replacement or repair of thoracic unit of a total replacement heart system (artificial heart)",
    "requirement": "Pre-Service Review Recommended",
    "reason": "Medical Necessity",
    "request": "Pre Operative Evaluation, History and Physical, and Operative report"
  },
  {
    "claimCode": "0053T",
    "desc": "Replacement or repair of implantable component or components of total replacement heart system (artificial heart), excluding thoracic unit",
    "requirement": "Pre-Service Review Recommended",
    "reason": "Medical Necessity",
    "request": "Pre Operative Evaluation, History and Physical, and Operative report"
  },
  {
    "claimCode": "0071T",
    "desc": "Focused ultrasound ablation of uterine leiomyomata, including MR guidance; total leiomyomata, volume less than 200 cc of tissue",
    "requirement": "Pre-Service Review Recommended",
    "reason": "Investigative",
    "request": "History and physical, procedure report"
  },
  {
    "claimCode": "0072T",
    "desc": "Focused ultrasound ablation of uterine leiomyomata, including MR guidance; total leiomyomata volume greater or equal to 200 cc of tissue",
    "requirement": "Pre-Service Review Recommended",
    "reason": "Investigative",
    "request": "History and physical, procedure report"
  },
  {
    "claimCode": "0073T",
    "desc": "Compensator-based beam modulation treatment delivery of inverse planned treatment using three or more high resolution (milled or cast) compensator convergent beam modulated fields, per treatment session",
    "requirement": "Prior Authorization Required",
    "reason": "Medical Necessity",
    "request": "Submit History and Physical, documentation of medical necessity."
  }
];
