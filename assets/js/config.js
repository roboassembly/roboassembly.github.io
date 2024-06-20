const project_name = `Workshop on Learning Robotic Assembly of Industrial and Everyday Objects`
const proj_small_caps = `<span class="small-caps">A World Built by Robots</span>: `
const conference_details = ['CoRL 2024', 'https://www.corl.org/', 'Munich, Germany', 'assets/images/corl_logo.png']
const workshop_date = `November 9, 2024`

const talk_speaker_details = {
  'yna': ['Yashraj Narang', './assets/images/talks/yash.jpeg', 'Sr. Research Scientist', 'NVIDIA', 'https://scholar.google.com/citations?user=M3NuG7AAAAAJ&hl=en', '', ''],
  'mba': ['Maria Bauza', './assets/images/talks/maria.jpeg', 'Sr. Research Scientist', 'Google DeepMind', 'https://web.mit.edu/bauza/www/', '', ''],
  'hli': ['Hui Li', './assets/images/talks/hui.jpeg', 'Sr. Principal Research Scientist', 'Autodesk', 'https://www.research.autodesk.com/people/hui-li/', '', ''],
  'ddc': ['Dotan Di Castro', './assets/images/talks/dotan.jpeg', 'Research Manager', 'Bosch', 'https://scholar.google.co.il/citations?user=zhQaFaMAAAAJ&hl=en', '', ''],
  'jli': ['Joseph J. Lim', './assets/images/talks/joseph.png', 'Associate Professor', 'KAIST', 'https://clvrai.com/web_lim/', '', ''],
  'wma': ['Wojciech Matusik', './assets/images/talks/wojciech.jpeg', 'Professor', 'MIT', 'https://cdfg.mit.edu/wojciech', '', ''],
  'kdo': ['Kathrin Dörfler', './assets/images/talks/kathrin.jpeg', 'Assistant Professor', 'TU Munich', 'https://www.arc.ed.tum.de/df/team/kathrin-doerfler/', '', ''],
  'dro': ['Diego Romeres', './assets/images/talks/diego.jpeg', 'Sr. Principal Research Scientist', 'MERL', 'https://www.merl.com/people/romeres', '', ''],
  'cli': ['Changliu Liu', './assets/images/talks/changliu.jpeg', 'Assistant Professor', 'CMU', 'https://www.ri.cmu.edu/ri-faculty/changliu-liu/', '', ''],
  'jlu': ['Jianlan Luo', './assets/images/talks/jianlan.jpeg', 'Postdoc Scholar', 'UC Berkeley', 'https://people.eecs.berkeley.edu/~jianlanluo/', '', ''],
}

const organizers_details = [
  ['Yunsheng Tian', 'assets/images/organizers/yunsheng.jpeg', 'PhD Candidate', 'MIT', 'https://yunshengtian.com'],
  ['Yijiang Huang', 'assets/images/organizers/yijiang.jpeg', 'Postdoc Fellow', 'ETH Zurich', 'https://yijiangh.github.io/'],
  ['Xiang Zhang', 'assets/images/organizers/xiang.jpeg', 'PhD Candidate', 'UC Berkeley', 'https://xiang-zhang-98.github.io/'],
  ['Hui Li', 'assets/images/organizers/hui.jpeg', 'Sr. Principal Research Scientist', 'Autodesk', 'https://www.research.autodesk.com/people/hui-li/'],
  ['Wojciech Matusik', 'assets/images/organizers/wojciech.jpeg', 'Professor', 'MIT', 'https://cdfg.mit.edu/wojciech'],
  ['Sachin Chitta', 'assets/images/organizers/sachin.jpeg', 'Director of Robotics Research', 'Autodesk', 'https://www.sachinchitta.com/'],
]

const accepted_presentations = [
]

const org_affiliation_logos = [
]

// event-alias, time slot, event name, person alias from talk_speaker_details, ppt mode
// last two are for inv-talk event-alias entries
const schedule = [
  ['intro', '09:00 - 09:10', 'Introduction'],
  ['inv-talk', '09:10 - 09:40', 'Invited Talk', 'yna', 'in-person'],
  ['inv-talk', '09:40 - 10:10', 'Invited Talk', 'mba', 'in-person'],
  ['inv-talk', '10:10 - 10:40', 'Invited Talk', 'hli', 'in-person'],
  ['coffee-break', '10:40 - 11:00', 'Poster Session & Coffee Break'],
  ['inv-talk', '11:00 - 11:30', 'Invited Talk', 'ddc', 'in-person'],
  ['inv-talk', '11:30 - 12:00', 'Invited Talk', 'jli', 'in-person'],
  ['lunch-break', '12:00 - 13:30', 'Lunch Break'],
  ['inv-talk', '13:30 - 14:00', 'Invited Talk', 'wma', 'in-person'],
  ['inv-talk', '13:30 - 14:00', 'Invited Talk', 'kdo', 'in-person'],
  ['spot-ppt', '14:30 - 15:00', 'Lightning & Spotlight Presentations'],
  ['coffee-break', '15:00 - 15:30', 'Poster Session & Coffee Break'],
  ['inv-talk', '15:30 - 16:00', 'Invited Talk', 'dro', 'in-person'],
  ['inv-talk', '16:00 - 16:30', 'Invited Talk', 'cli', 'in-person'],
  ['inv-talk', '16:30 - 17:00', 'Invited Talk', 'jlu', 'in-person'],
  ['award', '17:00 - 17:20', 'Award & Closing Remarks'],
]
