"use strict";

/* ==========================================================================
   CONFIGURABLE ACCESS CODES AND BACKEND ENDPOINTS
   ========================================================================== */
const ACCESS_CONFIG = {
  STUDENT_ACCESS_CODE: "access4321",
  ADMIN_ACCESS_CODE: "P@55w0rd",
  TEACHER_ACCESS_CODE: "GAS@2026",
  GOOGLE_APPS_SCRIPT_URL: "https://script.google.com/macros/s/AKfycbw7kD5_2SpTWj6aCAeGev9tEunM24rCXUGB1bP5A4dG4RwzzcT01sW9MW1y-DZvDSZqeQ/exec",
  GOOGLE_SHEET_URL: "https://docs.google.com/spreadsheets/d/1aQK3qzdWuO4WOjiFrD1IsudVBtoAFIeOpb584ZXnVZs/edit?usp=sharing"
};

const questionBank = [
 {q:"What is a business model?",o:["A list of employees only","A plan for creating, delivering, and capturing value while earning profit","A logo and business name only","A list of competitors only"],a:1,e:"A business model explains how a business creates, delivers, and captures value while aiming to earn a profit."},
 {q:"Which item is a key element of a business model in the information sheet?",o:["School calendar","Value proposition","Class attendance","Uniform policy"],a:1,e:"The information sheet identifies value proposition as one of the key elements."},
 {q:"What does a value proposition describe?",o:["Why the product or service is attractive to customers","Only the owner's personal goals","The business's daily attendance","Only the number of employees"],a:0,e:"A value proposition explains what is offered and why customers may want it."},
 {q:"What is the target market?",o:["All businesses in a city","The business's suppliers only","The specific group of customers the business intends to serve","The company's equipment"],a:2,e:"The target market is the specific customer group the business intends to serve."},
 {q:"Which is an example of a revenue stream mentioned in the lesson?",o:["Advertising","Equipment breakdown","Late attendance","Office decoration"],a:0,e:"Advertising is listed as one possible way to earn revenue."},
 {q:"What does cost structure refer to?",o:["The major expenses required to operate","The business logo's color","The number of customers only","The owner's favorite product"],a:0,e:"Cost structure means the major expenses required to run operations."},
 {q:"Which business model buys finished goods and sells them to customers?",o:["Brokerage","Retailer","Manufacturer only","Affiliate"],a:1,e:"Retailers often buy finished goods from manufacturers or distributors and sell them to customers."},
 {q:"Which model produces finished goods from raw materials?",o:["Freemium","Marketplace","Manufacturer","Subscription"],a:2,e:"Manufacturers source raw materials and use labor, machinery, and equipment to produce goods."},
 {q:"A car wash charging customers for cleaning a vehicle is an example of which model in the source?",o:["Fee-for-Service","Franchise","Freemium","Affiliate"],a:0,e:"A car wash is given as an example of fee-for-service."},
 {q:"Which model typically charges recurring payments for ongoing access or delivery?",o:["Bundling","Subscription","Brokerage","Retailer"],a:1,e:"Subscription models require ongoing payments, often over a fixed period."},
 {q:"What does a freemium model generally offer?",o:["Everything must always be paid upfront","A free basic version and paid premium features","Only physical products","Only brokerage services"],a:1,e:"Freemium starts with a basic, limited-scope free offering and promotes paid upgrades."},
 {q:"Which pair is given as examples of marketplaces in the information sheet?",o:["Ford and Apple","Spotify and LinkedIn","Shopee and Lazada","Domino's and HP"],a:2,e:"The source lists Shopee and Lazada as marketplace examples."},
 {q:"How may an affiliate earn compensation?",o:["By promoting a product for a fixed payment or sales-based compensation","By refusing to promote goods","Only by manufacturing raw materials","Only by charging utility bills"],a:0,e:"Affiliate compensation may be a fixed payment, a percentage of sales, or both."},
 {q:"What is the purpose of the razor-blade model described in the source?",o:["Sell a primary product cheaply to encourage purchases of a disposable companion product","Give away every product forever","Connect buyers and sellers","Charge only by the hour"],a:0,e:"The model sells a durable product below cost or cheaply to generate sales of consumables."},
 {q:"Which is the correct basic profit formula?",o:["Profit = Costs − Revenue","Profit = Revenue + Costs","Profit = Revenue − Total Costs","Profit = Revenue × Costs"],a:2,e:"Profit is calculated by subtracting total costs from revenue."},
 {q:"Which model connects buyers and sellers without directly selling the good itself?",o:["Brokerage","Manufacturer","Retailer","Freemium"],a:0,e:"Brokerage businesses connect buyers and sellers and may earn a percentage of a completed deal."},
 {q:"Which step comes first in the source's business-model creation process?",o:["Test your model","Find key partners","Identify your audience","Set monetization solutions"],a:2,e:"The first step is to identify the audience and target market."},
 {q:"Why should a business define the problem it wants to solve?",o:["To avoid knowing its customers","To identify a need that can create demand for its offering","To guarantee there will be no costs","To avoid testing its idea"],a:1,e:"A business needs to understand the customer problem or need that creates demand."},
 {q:"Which is an example of a key partner for a wedding planner in the source?",o:["Venues or caterers","Only competing planners","Unrelated customers","No one; partners are never needed"],a:0,e:"The source mentions venues, caterers, florists, and tailors as potential partners."},
 {q:"What is one way to test a business model?",o:["Ignore all feedback","Use surveys or a soft launch","Never speak to customers","Avoid considering price"],a:1,e:"The source recommends test surveys, soft launches, and direct market feedback."},
 {q:"Which statement about business models is supported by the lesson?",o:["Every business must use exactly one model forever","Business models cannot change","Businesses may combine models and revise them as markets change","Only online companies need business models"],a:2,e:"The source says models vary, can overlap, and should be reviewed as conditions change."},
 {q:"What is bundling?",o:["Selling several products together, sometimes at a discount","Charging only based on usage","Connecting buyers and sellers","Giving a free basic digital product"],a:0,e:"Bundling combines products in one offer and may use discounts to encourage purchases."},
 {q:"What does pay-as-you-go charging depend on?",o:["The owner's age","How much of a product or service is used","The color of a product","The number of partners only"],a:1,e:"The amount charged depends on how much of the product or service is consumed."},
 {q:"What is a franchise model used for?",o:["Allowing a business to expand using an established brand and system","Only selling used goods","Making all products free","Removing the need for operations"],a:0,e:"Franchising allows operators to use an established business plan and brand at another location."},
 {q:"What is the reverse razor-blade model described in the source?",o:["Low-cost primary product and expensive disposable components","High-margin primary product upfront with low- or no-cost companion products","Only selling bundles","Only connecting buyers and sellers"],a:1,e:"The reverse model focuses on selling a high-margin primary product upfront, with low- or free companion products."},
 {q:"Why might a business update its business model?",o:["To respond to changing trends, challenges, and market demand","To stop serving customers","To remove all revenue sources","To avoid competitors forever"],a:0,e:"The source recommends periodic revision as business environments and demand change."},
 {q:"Which item may be included in a new enterprise's business model?",o:["Startup costs and financing sources","Only a slogan","Only the owner's hobbies","A list of unrelated school subjects"],a:0,e:"The source says a model may include projected startup costs and financing sources."},
 {q:"Which model earns money by hosting a platform where transactions take place?",o:["Marketplace","Manufacturer","Fee-for-Service","Razor Blade"],a:0,e:"Marketplaces receive compensation for hosting a platform that facilitates transactions."},
 {q:"A company charges a fixed fee plus an amount based on monthly consumption. Which model best matches the source?",o:["Freemium","Pay-as-You-Go","Franchise","Bundling"],a:1,e:"The pay-as-you-go model may combine a fixed service fee with a usage-based charge."},
 {q:"Which action best fits “document your needs”?",o:["List operational hurdles and requirements before launching","Choose a logo and stop planning","Ignore product-specific challenges","Set a price without considering costs"],a:0,e:"Documenting needs means considering resources, product-specific challenges, and operational difficulties."}
];

const quizContainer = document.getElementById("quizContainer");
const quizLength = document.getElementById("quizLength");
const startQuiz = document.getElementById("startQuiz");
const submitTools = document.getElementById("submitTools");
const scoreBox = document.getElementById("scoreBox");
const progressBar = document.getElementById("progressBar");
let activeQuestions = [];
let submitted = false;

function shuffleArray(items){
  const arr = items.slice();
  for(let i=arr.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [arr[i],arr[j]]=[arr[j],arr[i]];
  }
  return arr;
}

/* ==========================================================================
   STUDENT ASSESSMENT UNLOCK LOGIC
   ========================================================================== */
document.getElementById("unlockAssessmentBtn").addEventListener("click", () => {
  const code = document.getElementById("studentAccessCodeInput").value.trim();
  if(code === ACCESS_CONFIG.STUDENT_ACCESS_CODE) {
    document.getElementById("studentGateCard").style.display = "none";
    document.getElementById("assessmentBody").style.display = "block";
  } else {
    document.getElementById("studentGateError").style.display = "block";
  }
});

function startAssessment(){
  const count = Number(quizLength.value);
  activeQuestions = shuffleArray(questionBank).slice(0,count).map(item => {
    const answerText = item.o[item.a];
    const shuffledOptions = shuffleArray(item.o);
    return {...item,o:shuffledOptions,a:shuffledOptions.indexOf(answerText)};
  });
  submitted = false;
  scoreBox.style.display = "none";
  scoreBox.innerHTML = "";
  quizContainer.innerHTML = "";
  progressBar.style.width = "0%";
  activeQuestions.forEach((item,index)=>{
    const fieldset = document.createElement("fieldset");
    fieldset.className = "question";
    fieldset.id = "question-"+index;
    const legend = document.createElement("legend");
    legend.textContent = `${index+1}. ${item.q}`;
    fieldset.appendChild(legend);
    const options = document.createElement("div");
    options.className = "options";
    item.o.forEach((optionText,optionIndex)=>{
      const label = document.createElement("label");
      label.className = "option";
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "q"+index;
      radio.value = String(optionIndex);
      radio.addEventListener("change",updateProgress);
      const span = document.createElement("span");
      span.textContent = optionText;
      label.append(radio,span);
      options.appendChild(label);
    });
    fieldset.appendChild(options);
    const feedback = document.createElement("div");
    feedback.className = "feedback";
    feedback.id = "feedback-"+index;
    fieldset.appendChild(feedback);
    quizContainer.appendChild(fieldset);
  });
  submitTools.style.display = "flex";
  document.getElementById("quizInstructions").textContent =
    `${count}-item assessment. Choose one answer for every question, then submit. Questions and answer choices are randomized each time you start or reset.`;
  document.getElementById("assessment").scrollIntoView({behavior:"smooth",block:"start"});
  updateProgress();
}

function updateProgress(){
  if(submitted)return;
  const answered = activeQuestions.reduce((sum,_,index)=>{
    return sum + (document.querySelector(`input[name="q${index}"]:checked`)?1:0);
  },0);
  progressBar.style.width = (activeQuestions.length ? answered/activeQuestions.length*100 : 0)+"%";
  document.getElementById("quizInstructions").textContent =
    `${answered} of ${activeQuestions.length} questions answered.`;
}

function submitAssessment(){
  if(!activeQuestions.length || submitted)return;

  const fullName = document.getElementById("stdFullName").value.trim();
  const gradeLevel = document.getElementById("stdGradeLevel").value.trim();
  const section = document.getElementById("stdSection").value.trim();

  if(!fullName || !gradeLevel || !section) {
    alert("Please fill in your Full Name, Grade Level, and Section before submitting.");
    return;
  }

  const unanswered = activeQuestions.reduce((sum,_,index)=>{
    return sum + (document.querySelector(`input[name="q${index}"]:checked`)?0:1);
  },0);
  if(unanswered>0 && !confirm(`You have ${unanswered} unanswered question(s). Submit anyway?`))return;

  let score=0;
  activeQuestions.forEach((item,index)=>{
    const chosen = document.querySelector(`input[name="q${index}"]:checked`);
    const fieldset = document.getElementById("question-"+index);
    const feedback = document.getElementById("feedback-"+index);
    const labels = fieldset.querySelectorAll(".option");
    labels.forEach((label,optionIndex)=>{
      label.classList.remove("correct","incorrect");
      if(optionIndex===item.a)label.classList.add("correct");
      if(chosen && optionIndex===Number(chosen.value) && optionIndex!==item.a)label.classList.add("incorrect");
    });
    if(chosen && Number(chosen.value)===item.a){
      score++;
      feedback.textContent = "Correct. "+item.e;
      feedback.style.color = "var(--green)";
    }else{
      feedback.textContent = "Correct answer: "+item.o[item.a]+". "+item.e;
      feedback.style.color = "var(--red)";
    }
    fieldset.querySelectorAll("input").forEach(input=>input.disabled=true);
  });
  submitted=true;
  const percent=Math.round(score/activeQuestions.length*100);
  let message = percent>=90 ? "Excellent work! You show a strong understanding of business models." :
                percent>=75 ? "Good job! Review the explanations for any missed questions." :
                percent>=50 ? "Keep practicing. Revisit the topic discussion and try again." :
                "Review the lesson carefully, then reset the assessment to practice again.";
  scoreBox.innerHTML = `<h3>Assessment Result</h3><p><strong>Student: ${fullName} (${gradeLevel} - ${section})</strong></p><p><strong>Score: ${score} / ${activeQuestions.length} (${percent}%)</strong></p><p>${message}</p><p>Correct answers are highlighted in green. Incorrect selected answers are highlighted in red.</p>`;
  scoreBox.style.display="block";
  submitTools.style.display="flex";
  document.getElementById("submitQuiz").disabled=true;
  progressBar.style.width="100%";
  scoreBox.scrollIntoView({behavior:"smooth",block:"center"});

  // Send result payload to Google Apps Script Backend Server
  sendScoreToBackend({
    fullName: fullName,
    gradeLevel: gradeLevel,
    section: section,
    score: score,
    totalQuestions: activeQuestions.length,
    percentage: percent
  });
}

function sendScoreToBackend(payload) {
  fetch(ACCESS_CONFIG.GOOGLE_APPS_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  }).then(() => {
    document.getElementById("successModal").style.display = "flex";
  }).catch((err) => {
    console.error("Transmission error:", err);
    document.getElementById("successModal").style.display = "flex";
  });
}

function clearAnswers(){
  if(!activeQuestions.length)return;
  if(!confirm("Clear your answers and restart this assessment with newly randomized questions?"))return;
  startAssessment();
}

startQuiz.addEventListener("click",startAssessment);
document.getElementById("submitQuiz").addEventListener("click",submitAssessment);
document.getElementById("clearAnswers").addEventListener("click",clearAnswers);
quizLength.addEventListener("change",()=>{
  document.getElementById("quizInstructions").textContent =
    `Selected: ${quizLength.value} items. Press “Start / Reset Assessment” to load the assessment.`;
});

/* ==========================================================================
   MODAL DIALOG CONTROLS & TEACHER/ADMIN ACCESS HANDLERS
   ========================================================================== */
// Teacher Access Modal
document.getElementById("openTeacherModalBtn").addEventListener("click", () => {
  document.getElementById("teacherModal").style.display = "flex";
  document.getElementById("sheetTargetLink").href = ACCESS_CONFIG.GOOGLE_SHEET_URL;
});
document.getElementById("closeTeacherModal").addEventListener("click", () => {
  document.getElementById("teacherModal").style.display = "none";
});
document.getElementById("verifyTeacherBtn").addEventListener("click", () => {
  const pass = document.getElementById("teacherPassInput").value;
  if(pass === ACCESS_CONFIG.TEACHER_ACCESS_CODE) {
    document.getElementById("teacherGate").style.display = "none";
    document.getElementById("teacherContent").style.display = "block";
    document.getElementById("teacherPassError").style.display = "none";
  } else {
    document.getElementById("teacherPassError").style.display = "block";
  }
});

// Admin Settings Modal & Apps Script Setup Guide
document.getElementById("openAdminModalBtn").addEventListener("click", () => {
  document.getElementById("adminModal").style.display = "flex";
});
document.getElementById("closeAdminModal").addEventListener("click", () => {
  document.getElementById("adminModal").style.display = "none";
});
document.getElementById("verifyAdminBtn").addEventListener("click", () => {
  const pass = document.getElementById("adminPassInput").value;
  if(pass === ACCESS_CONFIG.ADMIN_ACCESS_CODE) {
    document.getElementById("adminGate").style.display = "none";
    document.getElementById("adminGuideContent").style.display = "block";
    document.getElementById("adminPassError").style.display = "none";
  } else {
    document.getElementById("adminPassError").style.display = "block";
  }
});

// Submission Success Modal Close
document.getElementById("closeSuccessModalBtn").addEventListener("click", () => {
  document.getElementById("successModal").style.display = "none";
});

/* ==========================================================================
   GCASH DONATION — INDEPENDENT CONFIGURATION AND CLIENT LOGIC
   ========================================================================== */
const DONATION_CONFIG = Object.freeze({
  GCASH_NUMBER: "0968-7042-059",
  GOOGLE_APPS_SCRIPT_URL: "PASTE_YOUR_DONATION_WEB_APP_URL_HERE"
});
const DONATION_BACKEND_SOURCE = "/** GCash donation records — separate spreadsheet-bound Apps Script.\n * Deploy as a Web App; configure the separate donation spreadsheet only.\n * Public endpoints require rate limiting/monitoring if exposed broadly.\n */\nconst DONATION_SHEET_NAME = 'Donations';\nconst DONATION_HEADERS = ['Timestamp','Donor Name','Donation Amount','Currency','Payment Status','Reference Number','Notes','Request ID'];\nfunction donationSheet_() {\n  const book = SpreadsheetApp.getActiveSpreadsheet();\n  if (!book) throw new Error('Spreadsheet unavailable');\n  const sheet = book.getSheetByName(DONATION_SHEET_NAME);\n  if (!sheet) throw new Error('Donations worksheet missing');\n  return sheet;\n}\nfunction donationReply_(obj) {\n  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);\n}\nfunction donationClean_(raw) {\n  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) throw new Error('Invalid record');\n  const keys = Object.keys(raw);\n  if (keys.length !== 3 || !['name','amount','requestId'].every(k => keys.includes(k))) throw new Error('Unexpected fields');\n  if (typeof raw.name !== 'string') throw new Error('Invalid name');\n  const name = raw.name.trim();\n  if (!name || name.length > 100 || /[\\u0000-\\u001f\\u007f]/.test(name)) throw new Error('Invalid name');\n  if (typeof raw.amount !== 'string' || !/^(?:\\d+)(?:\\.\\d{1,2})?$/.test(raw.amount) || raw.amount.length > 15) throw new Error('Invalid amount');\n  const amount = Number(raw.amount);\n  if (!Number.isFinite(amount) || amount <= 0 || amount > 999999999999) throw new Error('Invalid amount');\n  if (typeof raw.requestId !== 'string' || !/^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/i.test(raw.requestId)) throw new Error('Invalid request ID');\n  return {name,amount,requestId:raw.requestId};\n}\nfunction donationFind_(sheet,id) {\n  const end = sheet.getLastRow();\n  if (end < 2) return false;\n  return !!sheet.getRange(2,8,end-1,1).createTextFinder(id).matchEntireCell(true).findNext();\n}\nfunction doPost(e) {\n  const lock = LockService.getScriptLock();\n  try {\n    if (!e || !e.parameter || typeof e.parameter.payload !== 'string') throw new Error('Invalid payload');\n    const data = donationClean_(JSON.parse(e.parameter.payload));\n    lock.waitLock(15000);\n    const sheet = donationSheet_();\n    if (!donationFind_(sheet,data.requestId)) {\n      // Leading spreadsheet formula characters must not be interpreted as formulas.\n      const safeName = /^[=+\\-@]/.test(data.name) ? \"'\"+data.name : data.name;\n      sheet.appendRow([new Date(),safeName,data.amount,'PHP','Unverified','','',data.requestId]);\n      SpreadsheetApp.flush();\n    }\n    return donationReply_({ok:true,requestId:data.requestId,recordSaved:true,paymentStatus:'Unverified'});\n  } catch(err) {\n    return donationReply_({ok:false,error:'Donation record could not be saved. Check the setup and submitted fields.'});\n  } finally {try {lock.releaseLock();} catch(ignore) {}}\n}\n// JSONP read-only receipt verification is used because ContentService responses\n// to cross-origin POSTs are not reliably readable from a static HTML website.\n// Never return donor name, amount, or private spreadsheet contents here.\nfunction doGet(e) {\n  const params = e && e.parameter || {};\n  const callback = params.callback || '';\n  if (!/^donationReceiptCallback_[a-zA-Z0-9_]{1,90}$/.test(callback)) {\n    return donationReply_({ok:false,error:'Invalid callback'});\n  }\n  let response = {ok:false,recordSaved:false};\n  try {\n    const id = params.requestId || '';\n    if (/^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/i.test(id)) {\n      response = {ok:true,recordSaved:donationFind_(donationSheet_(),id),requestId:id,paymentStatus:'Unverified'};\n    }\n  } catch(err) {response={ok:false,recordSaved:false};}\n  return ContentService.createTextOutput(callback+'('+JSON.stringify(response)+');')\n    .setMimeType(ContentService.MimeType.JAVASCRIPT);\n}\n// Run once in Apps Script editor to create/check headers on the separate sheet.\nfunction setupDonationSheet() {\n  const sheet = donationSheet_();\n  sheet.getRange(1,1,1,DONATION_HEADERS.length).setValues([DONATION_HEADERS]);\n  sheet.getRange('C:C').setNumberFormat('0.00');\n  sheet.setFrozenRows(1);\n}\n";
const donationModal = document.getElementById("donationModal");
const donationForm = document.getElementById("donationForm");
const donationSubmitButton = document.getElementById("submitDonationRecordBtn");
let donationPending = false;
let donationRequestId = null;
let donationRequestSignature = null;
let donationPreviousFocus = null;
let donationReceiptSequence = 0;
document.getElementById("donationBackendCode").textContent = DONATION_BACKEND_SOURCE;
function displayDonationStatus(kind,message) {
  const el = document.getElementById("donationStatusMessage");
  el.dataset.kind = kind;
  el.textContent = message;
}
function openDonationModal() {
  donationPreviousFocus = document.activeElement;
  donationModal.style.display = "flex";
  donationModal.setAttribute("aria-hidden","false");
  // Inert prevents background keyboard and pointer interaction where supported.
  for (const child of document.body.children) {
    if (child !== donationModal && child.tagName !== 'SCRIPT') child.inert = true;
  }
  document.getElementById("closeDonationModalBtn").focus();
}
function closeDonationModal() {
  if (donationPending) {displayDonationStatus("warning","Please wait for this submission to finish before closing.");return;}
  donationModal.style.display = "none";
  donationModal.setAttribute("aria-hidden","true");
  for (const child of document.body.children) child.inert = false;
  if (donationPreviousFocus && donationPreviousFocus.focus) donationPreviousFocus.focus();
}
function donationTrapFocus(event) {
  if (donationModal.style.display !== "flex") return;
  if (event.key === "Escape") {event.preventDefault();closeDonationModal();return;}
  if (event.key !== "Tab") return;
  const focusables = [...donationModal.querySelectorAll('button:not(:disabled),input:not(:disabled),a[href],select:not(:disabled),textarea:not(:disabled)')];
  if (!focusables.length) return;
  const first=focusables[0],last=focusables[focusables.length-1];
  if(event.shiftKey && document.activeElement===first){event.preventDefault();last.focus();}
  else if(!event.shiftKey && document.activeElement===last){event.preventDefault();first.focus();}
}
async function copyGcashNumber() {
  const message = document.getElementById("donationCopyMessage");
  try {
    if (!navigator.clipboard || !navigator.clipboard.writeText) throw new Error("Clipboard unavailable");
    await navigator.clipboard.writeText(DONATION_CONFIG.GCASH_NUMBER);
    message.textContent="GCash number copied successfully.";
  } catch(error) {
    message.textContent="Unable to copy automatically. Please select and manually copy the GCash number shown above.";
  }
}
function validateDonationForm() {
  const name = document.getElementById("donorNameInput").value.trim();
  const rawAmount = document.getElementById("donationAmountInput").value.trim();
  const nameError = document.getElementById("donorNameError");
  const amountError = document.getElementById("donationAmountError");
  nameError.textContent="";amountError.textContent="";
  let valid=true;
  if (!name || name.length>100 || /[\u0000-\u001f\u007f]/.test(name)) {nameError.textContent="Enter a valid name (1–100 characters).";valid=false;}
  const amountNumber=Number(rawAmount);
  if (!/^\d+(?:\.\d{1,2})?$/.test(rawAmount) || rawAmount.length>15 || !Number.isFinite(amountNumber) || amountNumber<=0 || amountNumber>999999999999) {
    amountError.textContent="Enter a positive PHP amount with up to two decimal places.";valid=false;
  }
  return valid ? {name,amount:amountNumber.toFixed(2)} : null;
}
function donationEndpoint() {
  const url=DONATION_CONFIG.GOOGLE_APPS_SCRIPT_URL;
  if (!/^https:\/\/script\.google\.com\/macros\/s\/[\w-]+\/exec$/.test(url)) throw new Error("Configure your deployed donation Apps Script /exec URL in DONATION_CONFIG first.");
  return url;
}
// JSONP receipt check: only a matching server-side row confirms successful saving.
function donationCheckReceipt(endpoint,id,timeoutMs=6500) {
  return new Promise(resolve => {
    const callback='donationReceiptCallback_'+(++donationReceiptSequence)+'_'+Math.random().toString(36).slice(2);
    let settled=false;
    const script=document.createElement('script');
    const finish=value=>{if(settled)return;settled=true;clearTimeout(timer);delete window[callback];script.remove();resolve(value);};
    window[callback]=data=>finish(data && data.ok && data.requestId===id && data.recordSaved===true ? true : data && data.ok ? false : null);
    script.onerror=()=>finish(null);
    const timer=setTimeout(()=>finish(null),timeoutMs);
    script.src=endpoint+'?callback='+encodeURIComponent(callback)+'&requestId='+encodeURIComponent(id)+'&_='+Date.now();
    document.head.appendChild(script);
  });
}
// Form POST avoids pretending a no-cors fetch response is a verified success.
// The read-only receipt check below confirms the actual row by request ID.
function donationPostInIframe(endpoint,record) {
  const iframe=document.createElement('iframe');
  iframe.name='donation_post_'+Date.now()+'_'+Math.random().toString(36).slice(2);
  iframe.title='Donation record submission transport';
  iframe.style.display='none';
  const form=document.createElement('form');
  form.method='POST';form.action=endpoint;form.target=iframe.name;form.style.display='none';
  const field=document.createElement('input');field.name='payload';field.value=JSON.stringify(record);form.appendChild(field);
  document.body.append(iframe,form);
  form.submit();
  return ()=>{form.remove();setTimeout(()=>iframe.remove(),1000);};
}
async function sendDonationToBackend(record) {
  const endpoint=donationEndpoint();
  const cleanup=donationPostInIframe(endpoint,record);
  try {
    // Allow Apps Script time to write, then poll receipt. A network failure may
    // produce unknown status; the same ID is retained for safe retry.
    for(let i=0;i<8;i++) {
      await new Promise(resolve=>setTimeout(resolve,i===0?1200:1700));
      const saved=await donationCheckReceipt(endpoint,record.requestId,3500);
      if(saved===true) return 'saved';
    }
    return 'unknown';
  } finally {cleanup();}
}
async function submitDonationRecord(event) {
  event.preventDefault();
  if(donationPending)return;
  const values=validateDonationForm();
  if(!values){displayDonationStatus('error','Please correct the highlighted fields.');return;}
  const signature=JSON.stringify(values);
  if(donationRequestSignature!==signature){donationRequestId=null;donationRequestSignature=signature;}
  if(!donationRequestId) {
    if(!crypto || !crypto.randomUUID){displayDonationStatus('error','Your browser must support secure random request IDs. Please use a current browser over HTTPS.');return;}
    donationRequestId=crypto.randomUUID();
  }
  donationPending=true;donationSubmitButton.disabled=true;
  donationSubmitButton.textContent='Submitting…';
  displayDonationStatus('pending','Submitting your declaration and checking whether the record was saved…');
  try {
    const result=await sendDonationToBackend({...values,requestId:donationRequestId});
    if(result==='saved') {
      displayDonationStatus('success','Your donation declaration was saved to the records. Payment status: Unverified. This does not confirm that a GCash transfer was received.');
      donationForm.reset();donationRequestId=null;donationRequestSignature=null;
    } else displayDonationStatus('warning','Record status unknown: the server did not provide a verifiable receipt in time. Check the Donations worksheet by Request ID ('+donationRequestId+') or retry using this form. Do not assume payment was verified.');
  } catch(error) {
    displayDonationStatus('error',error.message || 'Unable to submit. Your entries have been preserved; please retry.');
  } finally {donationPending=false;donationSubmitButton.disabled=false;donationSubmitButton.textContent='Submit Donation Record';}
}
document.getElementById('openDonationModalBtn').addEventListener('click',openDonationModal);
document.getElementById('closeDonationModalBtn').addEventListener('click',closeDonationModal);
document.addEventListener('keydown',donationTrapFocus);
document.getElementById('copyGcashNumberBtn').addEventListener('click',copyGcashNumber);
donationForm.addEventListener('submit',submitDonationRecord);
document.getElementById('copyDonationBackendBtn').addEventListener('click',async()=>{
  const el=document.getElementById('donationBackendCopyStatus');
  try {await navigator.clipboard.writeText(DONATION_BACKEND_SOURCE);el.textContent='Apps Script source copied.';}
  catch(err){el.textContent='Clipboard unavailable. Select the code above and copy it manually.';}
});

/* ============================================================================
   V1.5 APPEARANCE THEME CONTROLLER
   Only the data-theme attribute changes; all lesson and assessment logic stays.
   ============================================================================ */
(function initializeAppearanceTheme(){
  const themeSelect=document.getElementById('themeSelect');
  const supportedThemes=['light','dark','pastel'];
  let savedTheme='light';
  try {savedTheme=window.localStorage.getItem('entrepreneurshipAppearanceTheme') || 'light';}
  catch(error) { /* Storage may be unavailable in private browsing; light is safe. */ }
  if(!supportedThemes.includes(savedTheme)) savedTheme='light';
  document.documentElement.setAttribute('data-theme',savedTheme);
  themeSelect.value=savedTheme;
  themeSelect.addEventListener('change',function(){
    const selected=supportedThemes.includes(themeSelect.value)?themeSelect.value:'light';
    document.documentElement.setAttribute('data-theme',selected);
    try {window.localStorage.setItem('entrepreneurshipAppearanceTheme',selected);}
    catch(error) { /* Theme still works for this session without storage. */ }
  });
})();