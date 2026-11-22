const subjects = [
  {number:'01', name:'Math', tag:'This subject helps teams plan movement and resources.', intro:'Math helps a team predict what a rocket will do before it ever leaves the ground.', icon:'∑', color:'#fff0e7', mission:['Scientists use math to calculate a rocket’s path around Earth.','They use measurements to work out fuel, speed, distance, and timing.','They compare the results so that the plan is as safe as possible.'], daily:['You use math when you plan how to spend your money.','You measure quantities when you follow a recipe.','You estimate time and distance when you plan a journey.'], activity:'Calculate a rocket’s total height', prompt:'A rocket climbs 18 km each minute for 9 minutes, then coasts another 12 km. How high is it?', type:'math'},
  {number:'02', name:'Science', tag:'This subject helps teams explain what happens during a launch.', intro:'Science lets a team test ideas and understand the forces and environments that shape a mission.', icon:'↗', color:'#e9f7f5', mission:['Scientists study gravity, air, heat, and motion before a spacecraft launches.','They test materials and equipment in conditions that are similar to space.','They use evidence to decide whether an idea works and what should change.'], daily:['You use science when you notice patterns in nature.','You can test what happens when different materials float or sink.','You observe the Moon and record how its shape changes.'], activity:'Identify the important launch forces', prompt:'During the first minute of launch through Earth’s atmosphere, choose every force with a major effect, then press Check forces.', type:'science'},
  {number:'03', name:'Reading & Writing', tag:'This subject helps teams understand evidence and communicate clearly.', intro:'Space missions need people who can understand information and explain it clearly to everyone on the team.', icon:'Aa', color:'#f5eaf3', mission:['Scientists read research so they can learn from other experts.','They write reports that allow the whole team to understand the evidence.','They revise complicated ideas until the information is accurate and clear.'], daily:['You read carefully when you follow instructions.','You explain an idea when you tell a friend how something works.','You write questions when you want to investigate something new.'], activity:'Analyze a mission report', prompt:'Read the report below, and then choose the conclusion that is best supported by its evidence.', report:'During a three-day test, the rover crossed a sandy slope at three different speeds. Its wide wheels left shallow tracks, even when the rover carried a full set of instruments. A second test with narrower wheels left deeper tracks and used more power to keep moving. Engineers recorded the wheel depth, battery use, and distance traveled after each test. They are deciding which wheel design should be used for a longer journey across loose soil.', type:'reading'},
  {number:'04', name:'Art & Design', tag:'This subject helps teams communicate ideas and information visually.', intro:'Art helps people imagine, explain, and design things that have never existed before.', icon:'', color:'#fff7d5', mission:['Designers create tools that are useful as well as easy to understand.','They use color, shape, and light to help people notice important information.','They make drawings and models so a team can discuss a new idea.'], daily:['You choose colors when you show a feeling or organize information.','You sketch when you want to improve an object such as a backpack or bicycle.','You make posters and diagrams when you want to teach another person.'], activity:'Study color and light', prompt:'A space sensor needs the visible color with the most energy. Which color should it detect?', type:'art'},
  {number:'05', name:'Engineering & Technology', tag:'This subject helps teams turn ideas into working machines.', intro:'Engineering turns a question into a machine that can solve a real problem.', icon:'⚙', color:'#eaf0fa', mission:['Engineers build rockets, robots, habitats, and spacesuits.','They choose materials that can survive heat, pressure, vibration, and cold.','They test each design and use the results to improve it.'], daily:['You practice engineering when you build with blocks or recycled materials.','You use design thinking when you repair something instead of replacing it.','You study technology when you ask how an everyday tool works.'], activity:'Assemble a rocket', prompt:'Build the rocket from top to bottom. Think about which part must protect the front and which part must push it forward.', type:'engineering'},
  {number:'06', name:'History & Teamwork', tag:'This subject helps teams learn from earlier missions and work together.', intro:'History keeps useful lessons alive, and teamwork helps people combine those lessons with new ideas.', icon:'→', color:'#f6e9ec', mission:['Teams study earlier missions so they can learn from successes and mistakes.','People share jobs and communicate so that everyone can contribute.','A team becomes more efficient when its members listen and solve problems together.'], daily:['You practice teamwork when you take turns during a group task.','You learn from history when you ask how a tradition or invention began.','You improve your next attempt when you look back at what happened before.'], activity:'Arrange the space timeline', prompt:'Arrange the six events on the timeline from earliest to latest. Use the dates and the historical sequence as evidence.', type:'history'}
];

const photos = {
  math: 'https://commons.wikimedia.org/wiki/Special:FilePath/Nancy%20Grace%20Roman%20Space%20Telescope%20Launch%20%28NHQ202608300029%29.jpg',
  science: 'https://commons.wikimedia.org/wiki/Special:FilePath/ISS075-E-92517%20-%20View%20of%20Earth.jpg',
  reading: 'https://commons.wikimedia.org/wiki/Special:FilePath/NASAComputerRoom7090.NARA.jpg',
  art: 'https://commons.wikimedia.org/wiki/Special:FilePath/Hubble%20sees%20galaxies%20galore.jpg',
  engineering: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mars%20rover.jpg',
  history: 'https://commons.wikimedia.org/wiki/Special:FilePath/Apollo%2011%20first%20photo%20on%20Moon%20after%20landing%20%2848334532882%29.jpg'
};

const bonusQuestions = {
  math: [
    {q:'A satellite travels 24 km each minute for 5 minutes. How far does it travel?', options:['29 km','96 km','120 km'], answer:'120 km'},
    {q:'A tank holds 180 L. A launch uses 35 L and orbit uses 48 L. How much is left?', options:['87 L','97 L','103 L'], answer:'97 L'},
    {q:'A team wants to plot where a rocket will be at different moments. Which set of measurements would help most?', options:['The rocket’s color, launch logo, and window size','Speed, direction, and time after launch','The launch date, mission name, and crew size'], answer:'Speed, direction, and time after launch'}
  ],
  science: [
    {q:'Which force pulls a rocket toward Earth?', options:['Thrust','Gravity','Heat'], answer:'Gravity'},
    {q:'What does thrust do during launch?', options:['Pulls the rocket down','Makes the rocket invisible','Pushes the rocket forward'], answer:'Pushes the rocket forward'},
    {q:'Why do scientists test a rocket before launch?', options:['To measure how it behaves','To choose its name','To make it look shiny'], answer:'To measure how it behaves'}
  ],
  reading: [
    {q:'Which detail best supports the conclusion that wide wheels help on loose soil?', options:['The rover carried a full set of instruments.','The wide wheels left shallow tracks while narrower wheels left deeper tracks.','The test lasted three days.'], answer:'The wide wheels left shallow tracks while narrower wheels left deeper tracks.'},
    {q:'Why did engineers record wheel depth, battery use, and distance traveled?', options:['To choose the color of the rover’s wheels','To prove that every test had identical results','To compare wheel designs using evidence from the tests'], answer:'To compare wheel designs using evidence from the tests'},
    {q:'Which conclusion is best supported by the complete report?', options:['The rover’s battery use did not change between wheel designs.','The best wheel design depends only on how fast the rover travels.','Wider wheels may be better for a longer journey across loose soil because they left shallower tracks and used less power.'], answer:'Wider wheels may be better for a longer journey across loose soil because they left shallower tracks and used less power.'}
  ],
  art: [
    {q:'Which visible color has the shortest wavelength?', options:['Red','Green','Violet'], answer:'Violet'},
    {q:'Which visible color has the lowest energy?', options:['Red','Blue','Violet'], answer:'Red'},
    {q:'Which design choice makes a warning easier to notice?', options:['Strong contrast','All gray colors','Tiny lettering'], answer:'Strong contrast'}
  ],
  engineering: [
    {q:'What should engineers do after building a first version?', options:['Change the shape without testing it again','Test it and learn from the results','Choose the most colorful version'], answer:'Test it and learn from the results'},
    {q:'Which material is a better starting choice for a heat shield?', options:['A material that is light but melts easily','A material that absorbs heat and softens quickly','A ceramic tile designed for high heat'], answer:'A ceramic tile designed for high heat'},
    {q:'If a rover wheel sinks in soft soil, what change could help?', options:['Make the wheel wider to spread its weight','Add a thin smooth tire to reduce contact area','Make the wheel narrower to lower its mass'], answer:'Make the wheel wider to spread its weight'}
  ],
  history: [
    {q:'Why would a team compare a 1969 mission with a 2021 mission?', options:['To measure the exact distance between their launch sites','To study how tools, goals, and methods changed over time','To show that newer missions repeat every earlier step'], answer:'To study how tools, goals, and methods changed over time'},
    {q:'Which source would give the strongest first-hand evidence about what happened during a mission?', options:['A textbook summarizing the mission decades later','A student model that shows the spacecraft’s shape','A mission log written during the flight'], answer:'A mission log written during the flight'},
    {q:'What can a well-organized timeline help researchers notice?', options:['The order of events and the gaps between them','Whether a later mission caused an earlier event','The exact schedule of every future mission'], answer:'The order of events and the gaps between them'}
  ]
};

const rewardDetails = {
  math: {points:10, badge:'Orbit Calculator'},
  science: {points:15, badge:'Force Investigator'},
  reading: {points:20, badge:'Mission Reporter'},
  art: {points:25, badge:'Light Designer'},
  engineering: {points:30, badge:'Rocket Builder'},
  history: {points:35, badge:'Mission Historian'}
};
const progressKey = 'spaceForEveryoneProgress';
let completedTypes = loadProgress();

function loadProgress(){
  try{
    const saved = JSON.parse(localStorage.getItem(progressKey) || '[]');
    return Array.isArray(saved) ? saved.filter(type => subjects.some(subject => subject.type === type)) : [];
  }catch(error){
    return [];
  }
}
function saveProgress(){
  try{ localStorage.setItem(progressKey, JSON.stringify(completedTypes)); }catch(error){}
}
function totalPoints(){
  return completedTypes.reduce((sum,type) => sum + (rewardDetails[type]?.points || 0), 0);
}
function updateProgressUI(){
  const chip = document.querySelector('#progressChip');
  if(chip) chip.textContent = `${completedTypes.length} of ${subjects.length} subjects completed`;
  document.querySelectorAll('.subject-card').forEach(card => {
    const subject = subjects[Number(card.dataset.index)];
    const completed = completedTypes.includes(subject.type);
    card.classList.toggle('completed', completed);
    card.setAttribute('aria-label', `${completed ? 'Completed: ' : ''}Open ${subject.name} lesson`);
    const status = card.querySelector('.completion-status');
    if(status) status.textContent = completed ? 'Completed' : 'Explore this subject';
  });
}

const illustrations = {
  math: `<svg viewBox="0 0 420 300" role="img" aria-label="A rocket following a curved path around Earth"><circle cx="92" cy="230" r="58" fill="#9ed8e5" stroke="#172331" stroke-width="4"/><path d="M36 231c37-54 88-89 169-104 64-12 112 3 156 35" fill="none" stroke="#ff6f61" stroke-width="5" stroke-dasharray="12 10"/><g transform="translate(254 67) rotate(25)"><path d="M0 37c36-39 66-44 97-46-4 31-14 59-54 78z" fill="#ff6f61" stroke="#172331" stroke-width="4"/><circle cx="58" cy="27" r="10" fill="#9ed8e5" stroke="#172331" stroke-width="3"/><path d="M19 67l-22 25 29-11M77 47l26 8-19 16" fill="#f8b9bc" stroke="#172331" stroke-width="4"/><path d="M11 68l-20 36 36-29" fill="#ffe875" stroke="#172331" stroke-width="4"/></g><text x="45" y="283" font-size="18" fill="#172331" font-family="Arial">The curved line shows the rocket’s path.</text></svg>`,
  science: `<svg viewBox="0 0 420 300" role="img" aria-label="A rocket launch with arrows showing thrust, gravity, and air drag"><rect x="40" y="220" width="340" height="25" rx="12" fill="#9ed8e5" stroke="#172331" stroke-width="4"/><g transform="translate(180 76)"><path d="M30 0c43 26 51 81 0 112-51-31-43-86 0-112z" fill="#ff6f61" stroke="#172331" stroke-width="4"/><circle cx="30" cy="44" r="13" fill="#9ed8e5" stroke="#172331" stroke-width="4"/><path d="M5 75l-30 29 39-11M55 75l30 29-39-11" fill="#f8b9bc" stroke="#172331" stroke-width="4"/><path d="M30 115v44" stroke="#ffe875" stroke-width="13" stroke-linecap="round"/></g><path d="M104 181V86" stroke="#35a77d" stroke-width="6"/><path d="M104 81l-10 18h20z" fill="#35a77d"/><text x="54" y="72" font-size="17" fill="#172331" font-family="Arial">thrust</text><path d="M315 73v91" stroke="#e87575" stroke-width="6"/><path d="M315 169l-10-18h20z" fill="#e87575"/><text x="288" y="58" font-size="17" fill="#172331" font-family="Arial">drag</text><path d="M244 263v-45" stroke="#456a9c" stroke-width="6"/><path d="M244 267l-10-18h20z" fill="#456a9c"/><text x="216" y="289" font-size="17" fill="#172331" font-family="Arial">gravity</text></svg>`,
  reading: `<svg viewBox="0 0 420 300" role="img" aria-label="An astronaut reading a report beside a rover"><circle cx="106" cy="65" r="31" fill="#f8b9bc" stroke="#172331" stroke-width="4"/><path d="M75 105c12-32 50-32 63 0v91H75z" fill="#fffdf8" stroke="#172331" stroke-width="4"/><circle cx="106" cy="65" r="17" fill="#9ed8e5" stroke="#172331" stroke-width="3"/><path d="M137 122l38-20" stroke="#172331" stroke-width="8" stroke-linecap="round"/><rect x="164" y="91" width="90" height="69" rx="4" fill="#fffdf8" stroke="#172331" stroke-width="4" transform="rotate(-8 164 91)"/><path d="M178 111h52M176 126h44M174 141h55" stroke="#ff6f61" stroke-width="5"/><path d="M263 169h98l-18-44h-61z" fill="#ffe875" stroke="#172331" stroke-width="4"/><circle cx="286" cy="178" r="17" fill="#172331"/><circle cx="338" cy="178" r="17" fill="#172331"/><path d="M297 125l15-28 21 28" fill="none" stroke="#172331" stroke-width="4"/><text x="55" y="244" font-size="19" fill="#172331" font-family="Arial">Clear reports help teams understand evidence.</text></svg>`,
  art: `<svg viewBox="0 0 420 300" role="img" aria-label="A child designing a colorful space habitat with light beams"><circle cx="88" cy="78" r="29" fill="#f8b9bc" stroke="#172331" stroke-width="4"/><path d="M60 119c12-31 44-31 57 0v71H60z" fill="#9ed8e5" stroke="#172331" stroke-width="4"/><path d="M115 131l42-26" stroke="#172331" stroke-width="8" stroke-linecap="round"/><rect x="143" y="80" width="105" height="75" rx="5" fill="#fffdf8" stroke="#172331" stroke-width="4" transform="rotate(-8 143 80)"/><circle cx="170" cy="112" r="12" fill="#ff6f61"/><circle cx="202" cy="107" r="12" fill="#ffe875"/><circle cx="229" cy="130" r="12" fill="#9ed8e5"/><path d="M285 63l-28 150h101z" fill="#fff9dc" stroke="#172331" stroke-width="4"/><path d="M272 165h72M278 133h59M284 101h45" stroke="#ff6f61" stroke-width="10"/><path d="M360 85l34-28M360 113h48M360 141l34 28" stroke="#8c69d8" stroke-width="8" stroke-linecap="round"/><text x="63" y="246" font-size="19" fill="#172331" font-family="Arial">Color can help people understand an idea.</text></svg>`,
  engineering: `<svg viewBox="0 0 420 300" role="img" aria-label="A rover being assembled with tools and parts"><path d="M51 220h320" stroke="#172331" stroke-width="6"/><rect x="102" y="126" width="182" height="70" rx="12" fill="#ffe875" stroke="#172331" stroke-width="4"/><circle cx="140" cy="204" r="25" fill="#172331"/><circle cx="248" cy="204" r="25" fill="#172331"/><circle cx="140" cy="204" r="9" fill="#fffdf8"/><circle cx="248" cy="204" r="9" fill="#fffdf8"/><path d="M193 126V62M193 62l50 27" fill="none" stroke="#172331" stroke-width="6"/><circle cx="193" cy="50" r="13" fill="#9ed8e5" stroke="#172331" stroke-width="4"/><path d="M79 97l28 28M79 125l28-28" stroke="#ff6f61" stroke-width="8" stroke-linecap="round"/><path d="M322 83l35 35M357 83l-35 35" stroke="#35a77d" stroke-width="8" stroke-linecap="round"/><text x="81" y="266" font-size="19" fill="#172331" font-family="Arial">Engineers improve designs through testing.</text></svg>`,
  history: `<svg viewBox="0 0 420 300" role="img" aria-label="A timeline showing space milestones from the first satellite to a modern telescope"><path d="M55 151h310" stroke="#172331" stroke-width="6"/><circle cx="80" cy="151" r="16" fill="#ff6f61" stroke="#172331" stroke-width="4"/><circle cx="210" cy="151" r="16" fill="#ffe875" stroke="#172331" stroke-width="4"/><circle cx="340" cy="151" r="16" fill="#9ed8e5" stroke="#172331" stroke-width="4"/><path d="M80 135V93M210 167v46M340 135V93" stroke="#172331" stroke-width="4"/><path d="M59 93h42M189 213h42M319 93h42" stroke="#172331" stroke-width="4"/><path d="M66 72l28-20 15 28-31 12zM191 232h38v-16h-38zM322 72l18-26 18 26-18 26z" fill="#f8b9bc" stroke="#172331" stroke-width="4"/><text x="57" y="260" font-size="18" fill="#172331" font-family="Arial">Earlier missions help teams plan later missions.</text></svg>`
};

const activityVisuals = {
  math: `<svg viewBox="0 0 260 130" role="img" aria-label="A rocket climbing and then coasting toward a question mark"><path d="M34 93c38-54 95-65 181-53" fill="none" stroke="#ff6f61" stroke-width="4" stroke-dasharray="8 7"/><path d="M190 34c29 10 39 28 40 50-22-3-39-13-49-37z" fill="#ff6f61" stroke="#172331" stroke-width="3"/><circle cx="210" cy="51" r="6" fill="#9ed8e5" stroke="#172331" stroke-width="2"/><circle cx="42" cy="94" r="22" fill="#9ed8e5" stroke="#172331" stroke-width="3"/><text x="15" y="23" font-size="16" fill="#172331" font-family="Arial">climb + coast</text><text x="96" y="119" font-size="20" fill="#172331" font-family="Arial">total = ?</text></svg>`,
  science: `<svg viewBox="0 0 260 150" role="img" aria-label="A rocket with clearly labeled arrows for thrust upward, gravity downward, and air drag to the left"><path d="M130 38c21 18 24 49 0 66-24-17-21-48 0-66z" fill="#ff6f61" stroke="#172331" stroke-width="3"/><circle cx="130" cy="60" r="7" fill="#9ed8e5" stroke="#172331" stroke-width="2"/><path d="M130 125V108" stroke="#35a77d" stroke-width="7"/><path d="M130 103l-9 14h18z" fill="#35a77d"/><text x="143" y="123" font-size="13" font-weight="700" fill="#172331" font-family="Arial">THRUST ↑</text><path d="M130 30V12" stroke="#456a9c" stroke-width="7"/><path d="M130 35l-9-14h18z" fill="#456a9c"/><text x="143" y="18" font-size="13" font-weight="700" fill="#172331" font-family="Arial">GRAVITY ↓</text><path d="M89 78H34" stroke="#e87575" stroke-width="7"/><path d="M39 69L25 78l14 9z" fill="#e87575"/><text x="7" y="106" font-size="13" font-weight="700" fill="#172331" font-family="Arial">AIR DRAG ←</text></svg>`,
  reading: '',
  art: `<svg viewBox="0 0 260 130" role="img" aria-label="A prism splitting light into a rainbow"><path d="M72 101l48-78 48 78z" fill="#fffdf8" stroke="#172331" stroke-width="3"/><path d="M4 62h57" stroke="#ffe875" stroke-width="10"/><path d="M168 36l77-25M168 57l84 0M168 78l77 25" stroke-width="8" stroke-linecap="round"/><path d="M168 36l77-25" stroke="#ff6f61"/><path d="M168 57h84" stroke="#35a77d"/><path d="M168 78l77 25" stroke="#8c69d8"/><text x="15" y="21" font-size="14" fill="#172331" font-family="Arial">energy grows this way →</text></svg>`,
  engineering: `<img class="activity-photo" src="https://commons.wikimedia.org/wiki/Special:FilePath/CRS-20%20launch.jpg" alt="A real photograph of a rocket launching">`,
  history: `<svg viewBox="0 0 260 130" role="img" aria-label="An example showing an earlier event placed before a later event"><path d="M27 68h206" stroke="#172331" stroke-width="4"/><circle cx="74" cy="68" r="12" fill="#ffe875" stroke="#172331" stroke-width="3"/><circle cx="186" cy="68" r="12" fill="#9ed8e5" stroke="#172331" stroke-width="3"/><path d="M91 68h76" stroke="#ff6f61" stroke-width="5"/><path d="M161 58l15 10-15 10" fill="none" stroke="#ff6f61" stroke-width="5"/><text x="42" y="38" font-size="14" fill="#172331" font-family="Arial">earlier</text><text x="157" y="105" font-size="14" fill="#172331" font-family="Arial">later</text><text x="40" y="124" font-size="13" fill="#172331" font-family="Arial">Example: earlier → later</text></svg>`
};

const grid = document.querySelector('#subjectGrid');
const modal = document.querySelector('#lessonModal');
let current;
grid.innerHTML = subjects.map((s,i) => `<article class="subject-card" data-index="${i}" tabindex="0" role="button" aria-label="Open ${s.name} lesson"><div class="card-top"><span class="card-arrow">↗</span><span class="completion-status">Explore this subject</span></div><div class="card-copy"><h3>${s.name}</h3><p>${s.intro}</p></div><div class="card-visual photo-${s.type}"><img src="${photos[s.type]}" alt="${s.name} space photograph" loading="lazy"></div></article>`).join('');
updateProgressUI();

grid.addEventListener('click', e => { const card = e.target.closest('.subject-card'); if(card) openLesson(Number(card.dataset.index)); });
grid.addEventListener('keydown', e => { if((e.key === 'Enter' || e.key === ' ') && e.target.closest('.subject-card')) { e.preventDefault(); openLesson(Number(e.target.closest('.subject-card').dataset.index)); }});
document.querySelector('#closeModal').onclick = closeLesson;
modal.addEventListener('click', e => { if(e.target === modal) closeLesson(); });
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeLesson(); });

function openLesson(index){
  current = subjects[index];
  document.querySelector('#lessonTitle').textContent = current.name;
  document.querySelector('#lessonIntro').textContent = current.intro;
  document.querySelector('#missionBullets').innerHTML = current.mission.map(x=>`<li>${x}</li>`).join('');
  document.querySelector('#dailyBullets').innerHTML = current.daily.map(x=>`<li>${x}</li>`).join('');
  document.querySelector('#activityTitle').textContent = current.activity;
  const promptElement = document.querySelector('#activityPrompt');
  promptElement.classList.toggle('math-prompt',current.type==='math');
  if(current.type==='reading') promptElement.innerHTML = `<span class="reading-instruction">${current.prompt}</span><blockquote class="reading-report">${current.report}</blockquote><span class="reading-instruction">Use details from the report when you choose your answer.</span>`;
  else promptElement.textContent = current.prompt;
  document.querySelector('#lessonVisual').style.background = current.color;
  document.querySelector('#lessonVisual').innerHTML = `<div class="lesson-photo"><img src="${photos[current.type]}" alt="${current.name} space photograph"></div><div class="visual-label">${current.name}</div>`;
  renderActivity(current.type);
  renderCompletionPanel();
  modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden'; document.querySelector('#closeModal').focus();
}
function closeLesson(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow='';}
function completeCurrentSubject(){
  const wasCompleted = completedTypes.includes(current.type);
  if(!wasCompleted){
    completedTypes = [...completedTypes, current.type];
    saveProgress();
    updateProgressUI();
  }
  renderCompletionPanel();
}
function renderCompletionPanel(){
  const panel = document.querySelector('#completionPanel');
  if(!panel || !current) return;
  const completed = completedTypes.includes(current.type);
  panel.hidden = !completed;
  if(!completed) return;
  const reward = rewardDetails[current.type];
  const nextIndex = subjects.findIndex(subject => !completedTypes.includes(subject.type));
  if(nextIndex === -1){
    panel.innerHTML = `<div class="final-reward"><p class="completion-kicker">You completed the full mission.</p><h3>All six subjects are complete.</h3><p>You earned ${totalPoints()} mission points and unlocked the Space Explorer certificate. You used different kinds of thinking to understand how people explore space.</p><div class="reward-seal" aria-label="Space Explorer certificate">Space Explorer<br><span>All six subjects</span></div><p class="completion-next">You can revisit any subject and practice its activity again.</p></div>`;
    return;
  }
  const next = subjects[nextIndex];
  panel.innerHTML = `<div class="subject-reward"><div class="reward-badge" aria-label="${reward.badge} badge">${reward.badge}<span>+${reward.points} points</span></div><div class="reward-copy"><p class="completion-kicker">You completed ${current.name}.</p><h3>Your mission points have been added.</h3><p>You have ${totalPoints()} points and have completed ${completedTypes.length} of ${subjects.length} subjects. You could explore ${next.name} next to keep building your space mission skills.</p><button type="button" class="next-subject-button" data-next-index="${nextIndex}">Explore ${next.name} next ↗</button></div></div>`;
  panel.querySelector('[data-next-index]').onclick = () => openLesson(nextIndex);
}
function renderActivity(type){
  const mount=document.querySelector('#activityMount');
  const picture = `<div class="activity-visual">${activityVisuals[type]}</div>`;
  if(type==='math') mount.innerHTML=`${picture}<div class="activity-controls"><label for="mathAnswer">YOUR ANSWER (km)</label><input id="mathAnswer" type="number" placeholder="Type your answer"><button id="checkMath">Check answer ↗</button><div class="activity-result" id="activityResult"></div></div>`;
  if(type==='science') mount.innerHTML=`${picture}<div class="activity-controls"><div class="force-options"><button data-force="thrust">Engine thrust</button><button data-force="magnetism">Earth’s magnetic pull</button><button data-force="gravity">Earth’s gravity</button><button data-force="solarwind">Solar-wind pressure</button><button data-force="drag">Air resistance</button><button data-force="rotation">Earth’s rotation</button></div><button id="checkForces">Check forces ↗</button><div class="activity-result" id="activityResult">Select every major force, then check your set.</div></div>`;
  if(type==='reading') mount.innerHTML=`<div class="activity-controls reading-controls"><select id="readingAnswer"><option value="">Choose the best conclusion…</option><option value="1">The rover’s speed is the only factor that affects how deeply it sinks.</option><option value="2">The wide wheels help spread the rover’s weight over loose soil and reduce sinking.</option><option value="3">The narrower wheels use less power because they touch less ground.</option></select><button id="checkReading">Check idea ↗</button><div class="activity-result" id="activityResult"></div></div>`;
  if(type==='art') mount.innerHTML=`${picture}<div class="activity-controls"><div class="light-table" aria-label="Visible light color table"><div class="light-table-head"><span>Color</span><span>Wavelength (nm)</span><span>Energy (eV)</span></div><div class="light-row red"><b>Red</b><span>620–750</span><span>1.65–2.00</span></div><div class="light-row orange"><b>Orange</b><span>590–620</span><span>2.00–2.10</span></div><div class="light-row yellow"><b>Yellow</b><span>570–590</span><span>2.10–2.18</span></div><div class="light-row green"><b>Green</b><span>495–570</span><span>2.18–2.51</span></div><div class="light-row blue"><b>Blue</b><span>450–495</span><span>2.51–2.76</span></div><div class="light-row violet"><b>Violet</b><span>380–450</span><span>2.76–3.26</span></div></div><p class="table-note">Wavelength is the distance between light waves. Energy is the amount of energy each light photon carries.</p><div class="force-options"><button data-art="red" aria-pressed="false">Red</button><button data-art="violet" aria-pressed="false">Violet</button><button data-art="green" aria-pressed="false">Green</button></div><button id="checkArt">Check color ↗</button><div class="activity-result" id="activityResult">Pick a color, then check your idea.</div></div>`;
  if(type==='engineering') mount.innerHTML=`${picture}<div class="activity-controls engineering-controls"><p class="drag-instructions">Drag all three parts into the rocket. Use the part’s job as a clue, then check your completed assembly.</p><div class="rocket-builder"><div class="drop-slot" data-slot="1">The bottom position</div><div class="drop-slot" data-slot="2">The middle position</div><div class="drop-slot" data-slot="3">The top position</div></div><div class="assemble"><span draggable="true" data-piece="3">Nose cone</span><span draggable="true" data-piece="2">Fuel tank</span><span draggable="true" data-piece="1">Engine</span></div><div class="activity-actions"><button id="checkAssembly">Check assembly ↗</button><button id="resetAssembly" class="try-again" type="button">Try again ↺</button></div><div class="activity-result" id="activityResult">Fill all three positions, then check your assembly.</div></div>`;
  if(type==='history') mount.innerHTML=`${picture}<div class="activity-controls history-controls"><p class="timeline-instructions">Drag all six events into the timeline. Use the dates as clues, then check your completed timeline.</p><div class="history-slots"><div class="history-slot" data-history-slot="0">First event</div><div class="history-slot" data-history-slot="1">Second event</div><div class="history-slot" data-history-slot="2">Third event</div><div class="history-slot" data-history-slot="3">Fourth event</div><div class="history-slot" data-history-slot="4">Fifth event</div><div class="history-slot" data-history-slot="5">Sixth event</div></div><div class="history-events"><span draggable="true" class="timeline-event" data-history-year="1990">The Hubble Space Telescope began its mission in 1990.</span><span draggable="true" class="timeline-event" data-history-year="1957">The first satellite launched in 1957.</span><span draggable="true" class="timeline-event" data-history-year="2021">The Webb telescope began its mission in 2021.</span><span draggable="true" class="timeline-event" data-history-year="1969">The first people landed on the Moon in 1969.</span><span draggable="true" class="timeline-event" data-history-year="1981">The first Space Shuttle launched in 1981.</span><span draggable="true" class="timeline-event" data-history-year="1961">The first human traveled into space in 1961.</span></div><div class="activity-actions"><button id="checkTimeline">Check timeline ↗</button><button id="resetTimeline" class="try-again" type="button">Try again ↺</button></div><div class="activity-result" id="activityResult">Fill all six positions, then check your timeline.</div></div>`;
  mount.insertAdjacentHTML('beforeend', renderBonusQuestions(type));
  wireActivity(type);
}
function renderBonusQuestions(type){
  const questions=bonusQuestions[type];
  return `<section class="bonus-questions"><div class="bonus-heading"><p class="eyebrow">Additional questions</p><h4>Here are three more questions to consider.</h4><p>Choose an answer for each question. When you are ready, check all three answers together.</p></div>${questions.map((item,index)=>`<article class="bonus-question" data-answer="${item.answer}"><h5>${index+1}. ${item.q}</h5><div class="bonus-options">${item.options.map(option=>`<button type="button" data-bonus-answer="${option}">${option}</button>`).join('')}</div></article>`).join('')}<button type="button" class="check-bonus" id="checkBonus">Check my answers ↗</button><div class="bonus-result" id="bonusResult"></div></section>`;
}
function wireActivity(type){
  const result=()=>document.querySelector('#activityResult');
  if(type==='math') document.querySelector('#checkMath').onclick=()=>{const correct=Number(document.querySelector('#mathAnswer').value)===174;result().textContent=correct?'Your calculation is correct because you combined the climbing distance and the coasting distance.':'Try the calculation again by finding the climbing distance first and then adding the coasting distance.';if(correct) completeCurrentSubject()};
  if(type==='reading') document.querySelector('#checkReading').onclick=()=>{const correct=document.querySelector('#readingAnswer').value==='2';result().textContent=correct?'Yes! The shape of the wheels solves a movement problem.':'Look again: which answer tells us what the wide wheels do?';if(correct) completeCurrentSubject()};
  if(type==='science'){document.querySelectorAll('[data-force]').forEach(b=>b.onclick=()=>b.classList.toggle('selected'));document.querySelector('#checkForces').onclick=()=>{const picked=[...document.querySelectorAll('[data-force].selected')].map(b=>b.dataset.force).sort().join(',');const correct=picked==='drag,gravity,thrust';result().textContent=correct?'You identified the three major forces correctly.':'Please try again by considering the force from the engine, the pull toward Earth, and the resistance from the air.';if(correct) completeCurrentSubject()}}
  if(type==='art'){document.querySelectorAll('[data-art]').forEach(b=>b.onclick=()=>{document.querySelectorAll('[data-art]').forEach(x=>{x.classList.remove('selected');x.setAttribute('aria-pressed','false')});b.classList.add('selected');b.setAttribute('aria-pressed','true');result().textContent=`You chose ${b.textContent}. Use the table, then check your idea.`});document.querySelector('#checkArt').onclick=()=>{const selected=document.querySelector('[data-art].selected');const correct=selected?.dataset.art==='violet';result().textContent=!selected?'Choose a color first.':correct?'Correct! Violet carries the most energy in visible light.':'Not quite. Think about which end of the rainbow has the shortest wavelength.';if(correct) completeCurrentSubject()}}
  if(type==='engineering'){
    let touchPiece=null;
    const pieces=document.querySelectorAll('[data-piece]');
    const slots=document.querySelectorAll('[data-slot]');
    const clearSlot=slot=>{const oldPiece=slot.dataset.piece;if(oldPiece){const original=[...pieces].find(item=>item.dataset.piece===oldPiece);if(original){original.classList.remove('placed','dragging');original.style.opacity='';original.style.textDecoration='';original.setAttribute('aria-label',original.textContent)}}slot.textContent=['The bottom position','The middle position','The top position'][Number(slot.dataset.slot)-1];slot.classList.remove('filled','correct','wrong');delete slot.dataset.piece};
    const placePiece=(piece,slot)=>{if(!piece)return;const currentSlot=[...slots].find(item=>item.dataset.piece===piece.dataset.piece);if(currentSlot&&currentSlot!==slot)clearSlot(currentSlot);if(slot.classList.contains('filled'))clearSlot(slot);slot.textContent=piece.textContent;slot.dataset.piece=piece.dataset.piece;slot.classList.add('filled');piece.classList.add('placed');result().textContent=document.querySelectorAll('.drop-slot.filled').length===3?'Your assembly is complete. Check it when you are ready.':'Keep placing parts until every position is filled.'};
    pieces.forEach(piece=>{
      piece.addEventListener('dragstart',e=>{e.dataTransfer.setData('text/plain',piece.dataset.piece);piece.classList.add('dragging')});
      piece.addEventListener('dragend',()=>piece.classList.remove('dragging'));
      piece.addEventListener('touchstart',()=>{touchPiece=piece},{passive:true});
      piece.addEventListener('click',()=>result().textContent='Drag this part into one of the rocket positions.');
    });
    slots.forEach(slot=>{
      slot.addEventListener('dragover',e=>{e.preventDefault();slot.classList.add('over')});
      slot.addEventListener('dragleave',()=>slot.classList.remove('over'));
      slot.addEventListener('drop',e=>{e.preventDefault();slot.classList.remove('over');const piece=Array.from(pieces).find(p=>p.dataset.piece===e.dataTransfer.getData('text/plain'));placePiece(piece,slot)});
      slot.addEventListener('touchend',()=>{placePiece(touchPiece,slot);touchPiece=null});
    });
    document.querySelector('#checkAssembly').onclick=()=>{const expected=['1','2','3'];if(document.querySelectorAll('.drop-slot.filled').length<expected.length){result().textContent='Fill all three positions before checking the assembly.';return}const wrong=[];slots.forEach((slot,index)=>{const correct=slot.dataset.piece===expected[index];slot.classList.toggle('correct',correct);slot.classList.toggle('wrong',!correct);if(!correct)wrong.push(index+1)});const correct=wrong.length===0;result().textContent=correct?'All three parts are in the correct positions.':`Positions ${wrong.join(', ')} need another look.`;if(correct) completeCurrentSubject()};
    document.querySelector('#resetAssembly').onclick=()=>{slots.forEach(clearSlot);pieces.forEach(piece=>piece.classList.remove('placed','dragging'));result().textContent='Fill all three positions, then check your assembly.'};
  }
  if(type==='history'){
    const order=['1957','1961','1969','1981','1990','2021'];
    const events=document.querySelectorAll('[data-history-year]');
    const slots=document.querySelectorAll('[data-history-slot]');
    const clearSlot=slot=>{const oldYear=slot.dataset.historyYear;if(oldYear){const oldEvent=[...events].find(item=>item.dataset.historyYear===oldYear);if(oldEvent){oldEvent.classList.remove('placed','dragging');oldEvent.style.opacity='';oldEvent.style.textDecoration='';oldEvent.setAttribute('aria-label',oldEvent.textContent)}}slot.textContent=['First event','Second event','Third event','Fourth event','Fifth event','Sixth event'][Number(slot.dataset.historySlot)];slot.classList.remove('filled','correct','wrong');delete slot.dataset.historyYear};
    const placeEvent=(event,slot)=>{if(!event)return;const currentSlot=[...slots].find(item=>item.dataset.historyYear===event.dataset.historyYear);if(currentSlot&&currentSlot!==slot)clearSlot(currentSlot);if(slot.classList.contains('filled'))clearSlot(slot);slot.textContent=event.textContent;slot.dataset.historyYear=event.dataset.historyYear;slot.classList.add('filled');event.classList.add('placed');result().textContent=document.querySelectorAll('.history-slot.filled').length===order.length?'Your timeline is complete. Check it when you are ready.':'Keep placing events until every position is filled.'};
    let touchEvent=null;
    events.forEach(event=>{event.addEventListener('dragstart',e=>{e.dataTransfer.setData('text/plain',event.dataset.historyYear);event.classList.add('dragging')});event.addEventListener('dragend',()=>event.classList.remove('dragging'));event.addEventListener('touchstart',()=>{touchEvent=event},{passive:true})});
    slots.forEach(slot=>{slot.addEventListener('dragover',e=>{e.preventDefault();slot.classList.add('over')});slot.addEventListener('dragleave',()=>slot.classList.remove('over'));slot.addEventListener('drop',e=>{e.preventDefault();slot.classList.remove('over');const event=Array.from(events).find(item=>item.dataset.historyYear===e.dataTransfer.getData('text/plain'));placeEvent(event,slot)});slot.addEventListener('touchend',()=>{placeEvent(touchEvent,slot);touchEvent=null})});
    document.querySelector('#checkTimeline').onclick=()=>{if(document.querySelectorAll('.history-slot.filled').length<order.length){result().textContent='Fill all six positions before checking the timeline.';return}const wrong=[];slots.forEach((slot,index)=>{const correct=slot.dataset.historyYear===order[index];slot.classList.toggle('correct',correct);slot.classList.toggle('wrong',!correct);if(!correct)wrong.push(index+1)});const correct=wrong.length===0;result().textContent=correct?'All six positions are correct.':`Positions ${wrong.join(', ')} need another look.`;if(correct) completeCurrentSubject()};
    document.querySelector('#resetTimeline').onclick=()=>{slots.forEach(clearSlot);events.forEach(event=>event.classList.remove('placed','dragging'));result().textContent='Fill all six positions, then check your timeline.'};
  }
  document.querySelectorAll('.bonus-question').forEach(question=>question.querySelectorAll('[data-bonus-answer]').forEach(option=>option.onclick=()=>{question.querySelectorAll('[data-bonus-answer]').forEach(button=>button.classList.remove('chosen'));option.classList.add('chosen')}));
  document.querySelector('#checkBonus').onclick=()=>{const questions=[...document.querySelectorAll('.bonus-question')];const correct=questions.filter(question=>question.querySelector('.chosen')?.dataset.bonusAnswer===question.dataset.answer).length;document.querySelector('#bonusResult').textContent=correct===questions.length?'You answered all three questions correctly.':`You answered ${correct} of ${questions.length} correctly. Please reread the clues and try the remaining questions.`};
}
