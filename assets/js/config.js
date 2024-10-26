const project_name = `Workshop on Learning Robotic Assembly of Industrial and Everyday Objects`
const proj_small_caps = `<span class="small-caps">A World Built by Robots</span>: `
const conference_details = ['CoRL 2024', 'https://www.corl.org/', 'Munich, Germany', 'assets/images/corl_logo.png']
const workshop_date = `November 9, 2024`

const talk_speaker_details = {
  'mba': ['Maria Bauza', './assets/images/talks/maria.jpeg', 'Sr. Research Scientist', 'Google DeepMind', 'https://web.mit.edu/bauza/www/', '', ''],
  'yna': ['Yashraj Narang', './assets/images/talks/yash.jpeg', 'Sr. Research Scientist', 'NVIDIA', 'https://scholar.google.com/citations?user=M3NuG7AAAAAJ&hl=en', '', ''],
  'hli': ['Hui Li', './assets/images/talks/hui.jpeg', 'Sr. Principal Research Scientist', 'Autodesk', 'https://www.research.autodesk.com/people/hui-li/', '', ''],
  'jli': ['Joseph J. Lim', './assets/images/talks/joseph.png', 'Associate Professor', 'KAIST', 'https://clvrai.com/web_lim/', '', ''],
  'kdo': ['Kathrin Dörfler', './assets/images/talks/kathrin.jpeg', 'Assistant Professor', 'TU Munich', 'https://www.arc.ed.tum.de/df/team/kathrin-doerfler/', 
    'Unbuilding ─ Material Reclamation Enabled by Spatial AI for Mobile Robots', 
    '"Unbuilding" explores the potential of material reclamation using Spatial AI for mobile robots in construction deconstruction processes. By leveraging advanced sensing and localisation technologies, mobile robots can autonomously identify, retrieve, and catalogue reusable materials from existing structures. This approach aims to bring forward sustainable construction practices by reducing waste and enabling circular material cycles.'],
  'jpe': ['Jan Peters', './assets/images/talks/jan.jpeg', 'Professor', 'TU Darmstadt', 'https://www.ias.informatik.tu-darmstadt.de/Member/JanPeters', '', ''],
  'tbd': ['TBD', '', '', '', '', '', ''],
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
  ['intro', '13:40 - 13:50', 'Introduction'],
  ['inv-talk', '13:50 - 14:15', 'Invited Talk', 'jli', 'in-person'],
  ['inv-talk', '14:15 - 14:40', 'Invited Talk', 'mba', 'in-person'],
  ['inv-talk', '14:40 - 15:05', 'Invited Talk', 'yna', 'in-person'],
  ['spot', '15:05 - 15:15', 'Spotlight Presentations'],
  ['poster & coffee break', '15:15 - 16:00', 'Poster Session and Coffee Break'],
  ['inv-talk', '16:00 - 16:25', 'Invited Talk', 'jpe', 'in-person'],
  ['inv-talk', '16:25 - 16:50', 'Invited Talk', 'kdo', 'in-person'],
  ['inv-talk', '16:50 - 17:15', 'Invited Talk', 'hli', 'in-person'],
  ['disc', '17:15 - 17:45', 'Panel Discussions'],
  ['award', '17:45 - 18:00', 'Award & Closing Remarks'],
]
