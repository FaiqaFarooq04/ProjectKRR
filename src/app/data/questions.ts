import { Question } from '../types/game';

export const QUESTIONS: Question[] = [
/* ===================== C (Conceptual) ===================== */
{
  id: 'C-01',
  type: 'Conceptual',
  difficulty: 'Easy',
  question: 'Which of these is NOT a mammal?',
  choices: ['Whale', 'Dolphin', 'Bat', 'Penguin'],
  answer: 'Penguin',
  explanation: 'Penguin is a bird, not a mammal. Mammals give birth to live young and produce milk, while birds lay eggs.',
  rule: 'category identification'
},
{
  id: 'C-02',
  type: 'Conceptual',
  difficulty: 'Medium',
  question: 'Which does not belong?',
  choices: ['Circle', 'Square', 'Triangle', 'Cube'],
  answer: 'Cube',
  explanation: 'Cube is 3D while others are 2D shapes.',
  rule: 'Outlier detection'
},
{
  id: 'C-03',
  type: 'Conceptual',
  difficulty: 'Easy',
  question: 'All roses are flowers. Is every flower a rose?',
  choices: ['Yes', 'No', 'Sometimes', 'Only red flowers'],
  answer: 'No',
  explanation: 'Roses are a subset of flowers, not vice versa.',
  rule: 'Set inclusion'
},
{
  id: 'C-04',
  type: 'Conceptual',
  difficulty: 'Easy',
  question: 'You hear: Dog, Bone, Kennel. Where does a dog live?',
  choices: ['Bone', 'Kennel', 'Tree', 'River'],
  answer: 'Kennel',
  explanation: 'Dogs commonly live in kennels.',
  rule: 'Contextual knowledge'
},
{
  id: 'C-05',
  type: 'Conceptual',
  difficulty: 'Medium',
  question: 'A shark, dolphin, and barracuda are all...',
  choices: ['Fish', 'Mammals', 'Ocean dwellers', 'Reptiles'],
  answer: 'Ocean dwellers',
  explanation: 'They all live in the ocean.',
  rule: 'Common property'
},
{
  id: 'C-06',
  type: 'Conceptual',
  difficulty: 'Medium',
  question: 'If a creature has a shell and moves slowly, what is it likely to be?',
  choices: ['Dog', 'Turtle', 'Eagle', 'Fish'],
  answer: 'Turtle',
  explanation: 'Turtles have shells and move slowly.',
  rule: 'Feature-based reasoning'
},
{
  id: 'C-07',
  type: 'Conceptual',
  difficulty: 'Easy',
  question: 'A bicycle has two wheels. Does a unicycle have more or less?',
  choices: ['More', 'Less', 'Same', 'Cannot tell'],
  answer: 'Less',
  explanation: 'A unicycle has one wheel.',
  rule: 'Quantity comparison'
},
{
  id: 'C-08',
  type: 'Conceptual',
  difficulty: 'Easy',
  question: 'Which fruit is NOT red when ripe?',
  choices: ['Strawberry', 'Apple', 'Banana', 'Cherry'],
  answer: 'Banana',
  explanation: 'Ripe bananas are yellow.',
  rule: 'Property exclusion'
},
{
  id: 'C-09',
  type: 'Conceptual',
  difficulty: 'Hard',
  question: 'If an animal is cold-blooded, which climate must it avoid?',
  choices: ['Tropical', 'Temperate', 'Arctic', 'Desert'],
  answer: 'Arctic',
  explanation: 'Cold-blooded animals cannot survive extreme cold.',
  rule: 'Constraint inference'
},
{
  id: 'C-10',
  type: 'Conceptual',
  difficulty: 'Medium',
  question: 'A river is natural. Is a canal natural or man-made?',
  choices: ['Natural', 'Man-made', 'Both', 'Neither'],
  answer: 'Man-made',
  explanation: 'Canals are built by humans.',
  rule: 'Artificial vs natural'
},

/* ===================== T (Transitive / Logical) ===================== */
{
  id: 'T-01',
  type: 'Logical',
  difficulty: 'Easy',
  question: 'Ali is older than Sara. Sara is older than Umar. Who is the youngest?',
  choices: ['Ali', 'Sara', 'Umar', 'Cannot tell'],
  answer: 'Umar',
  explanation: 'Age order: Ali > Sara > Umar.',
  rule: 'Transitivity'
},
{
  id: 'T-02',
  type: 'Logical',
  difficulty: 'Easy',
  question: 'If every teacher is a reader and Ali is a teacher, is Ali a reader?',
  choices: ['Yes', 'No', 'Sometimes', 'Unknown'],
  answer: 'Yes',
  explanation: 'Teachers are readers → Ali is reader.',
  rule: 'Syllogism'
},
{
  id: 'T-03',
  type: 'Logical',
  difficulty: 'Easy',
  question: 'Tom is 5 feet tall. Mike is 5 feet tall. Who is taller?',
  choices: ['Tom', 'Mike', 'Neither', 'Both'],
  answer: 'Neither',
  explanation: 'They are equal in height, Same height means no one is taller.',
  rule: 'Equality check'
},
{
  id: 'T-04',
  type: 'Logical',
  difficulty: 'Medium',
  question: 'The cat is not on the mat. The mat is clean. Is the cat clean?',
  choices: ['Yes', 'No', 'Cannot tell', 'Always'],
  answer: 'Cannot tell',
  explanation: 'No relation between mat and cat cleanliness.',
  rule: 'Irrelevant premise'
},
{
  id: 'T-05',
  type: 'Logical',
  difficulty: 'Hard',
  question: 'If it rains, the ground is wet. The ground is not wet. What can you conclude?',
  choices: ['It rained', 'It did not rain', 'It snowed', 'Nothing'],
  answer: 'It did not rain',
  explanation: 'If rain causes the ground to be wet and the ground is not wet, then it must not have rained.',
  rule: 'Logical negation'
},
{
  id: 'T-06',
  type: 'Logical',
  difficulty: 'Medium',
  question: 'Box A < Box B = Box C. Which is heaviest?',
  choices: ['Box A', 'Box B', 'Box C', 'Box B & C'],
  answer: 'Box B & C',
  explanation: 'Box B and C are equal and heaviest.',
  rule: 'Transitivity with equality'
},
{
  id: 'T-07',
  type: 'Logical',
  difficulty: 'Hard',
  question: 'All singers are artists. Some artists are writers. Are some singers writers?',
  choices: ['Yes', 'No', 'Cannot tell', 'All'],
  answer: 'No',
  explanation: 'No certain overlap.',
  rule: 'Set overlap uncertainty'
},
{
  id: 'T-08',
  type: 'Logical',
  difficulty: 'Medium',
  question: 'If you are late, you will miss the bus. You missed the bus. Were you late?',
  choices: ['Yes', 'No', 'Cannot tell', 'Maybe'],
  answer: 'Yes',
  explanation: 'Missing the bus implies being late.',
  rule: 'Implied causality'
},
{
  id: 'T-09',
  type: 'Logical',
  difficulty: 'Easy',
  question: 'The blue car is behind red. Green is behind blue. Which is first?',
  choices: ['Red', 'Blue', 'Green', 'Cannot tell'],
  answer: 'Red',
  explanation: 'Since the blue car is behind the red car and the green car is behind the blue car, the red car is first.',
  rule: 'Spatial transitivity'
},
{
  id: 'T-10',
  type: 'Logical',
  difficulty: 'Hard',
  question: 'If a number divisible by 4 is even. 17 is not even. Divisible by 4?',
  choices: ['Yes', 'No', 'Maybe', 'Cannot tell'],
  answer: 'No',
  explanation: 'Non-even numbers aren’t divisible by 4.',
  rule: 'Modus tollens'
},

/* ===================== S (Spatial / Sequential) ===================== */
{
  id: 'S-01',
  type: 'Spatial',
  difficulty: 'Easy',
  question: 'If you face north and turn right, which direction?',
  choices: ['North', 'South', 'East', 'West'],
  answer: 'East',
  explanation: 'Right from north is east.',
  rule: 'Positional change'
},
{
  id: 'S-02',
  type: 'Spatial',
  difficulty: 'Easy',
  question: 'Yesterday was Friday. Tomorrow is?',
  choices: ['Saturday', 'Sunday', 'Monday', 'Thursday'],
  answer: 'Sunday',
  explanation: 'Friday → Saturday → Sunday.',
  rule: 'Temporal sequencing'
},
{
  id: 'S-03',
  type: 'Spatial',
  difficulty: 'Easy',
  question: 'Bus carries 40 students. How many buses for 160 students?',
  choices: ['2', '3', '4', '5'],
  answer: '4',
  explanation: '160 ÷ 40 = 4.',
  rule: 'Arithmetic'
},
{
  id: 'S-04',
  type: 'Spatial',
  difficulty: 'Medium',
  question: 'Library 3 blocks north, market 2 blocks south. Distance apart?',
  choices: ['1 block', '3 blocks', '5 blocks', '6 blocks'],
  answer: '5 blocks',
  explanation: '3 + 2 = 5.',
  rule: 'Absolute distance'
},
{
  id: 'S-05',
  type: 'Spatial',
  difficulty: 'Medium',
  question: 'You walk 10 steps forward, 5 back, 3 forward. How far from start?',
  choices: ['6', '7', '8', '9'],
  answer: '8',
  explanation: '10 − 5 + 3 = 8.',
  rule: 'Net displacement'
},
{
  id: 'S-06',
  type: 'Spatial',
  difficulty: 'Medium',
  question: 'If 3 PM is in 4 hours, what time is now?',
  choices: ['11 AM', '12 PM', '10 AM', '9 AM'],
  answer: '11 AM',
  explanation: '3 PM − 4 hours = 11 AM.',
  rule: 'Temporal subtraction'
},
{
  id: 'S-07',
  type: 'Spatial',
  difficulty: 'Medium',
  question: 'You see shadow in front. Light source is?',
  choices: ['In front', 'Behind you', 'Above', 'Below'],
  answer: 'Behind you',
  explanation: 'Shadow opposite light.',
  rule: 'Spatial relation'
},
{
  id: 'S-08',
  type: 'Spatial',
  difficulty: 'Medium',
  question: 'First day is Tuesday. What day is 8th?',
  choices: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
  answer: 'Tuesday',
  explanation: 'Days repeat every 7 days, so the 8th day is the same as the 1st day: Tuesday.',
  rule: 'Temporal modulo'
},
{
  id: 'S-09',
  type: 'Spatial',
  difficulty: 'Easy',
  question: 'Clock says 9:30. Minute hand points?',
  choices: ['3 (East)', '6 (South)', '9 (West)', '12 (North)'],
  answer: '6 (South)',
  explanation: 'At 9:30, the minute hand points to the 6 on the clock',
  rule: 'Clock reading'
},
{
  id: 'S-10',
  type: 'Spatial',
  difficulty: 'Hard',
  question: 'Turn 90° left from East. Facing?',
  choices: ['North', 'South', 'East', 'West'],
  answer: 'North',
  explanation: 'Left turn = counter-clockwise.',
  rule: 'Rotational logic'

},

/* ===================== P (Procedural / Planning) ===================== */
{
  id: 'P-01',
  type: 'Procedural',
  difficulty: 'Easy',
  question: 'Bake cake: need flour AND eggs. Have flour only. Can bake?',
  choices: ['Yes', 'No', 'Maybe', 'Half cake'],
  answer: 'No',
  explanation: 'king a cake requires both flour and eggs. Missing eggs means the cake cannot be baked.',
  rule: 'Constraint check'
},
{
  id: 'P-02',
  type: 'Procedural',
  difficulty: 'Easy',
  question: 'Blue = cold, Red = hot. Which shows hot?',
  choices: ['Red', 'Blue', 'Green', 'Yellow'],
  answer: 'Red',
  explanation: 'Code mapping.',
  rule: 'Symbol mapping'
},
{
  id: 'P-03',
  type: 'Procedural',
  difficulty: 'Medium',
  question: 'Put on socks then shoes. Did shoes first. Can put socks?',
  choices: ['Yes', 'No', 'One sock', 'Maybe'],
  answer: 'No',
  explanation: 'Order matters- Shoes block socks, so socks cannot be worn after shoes',
  rule: 'Sequential dependency'
},
{
  id: 'P-04',
  type: 'Procedural',
  difficulty: 'Hard',
  question: 'Bag: 10 red, 5 blue marbles. Minimum to be certain to get blue?',
  choices: ['10', '11', '12', '15'],
  answer: '11',
  explanation: 'In the worst case, you may pick all 10 red marbles first, so pulling 11 guarantees a blue one',
  rule: 'Worst-case planning'
},
{
  id: 'P-05',
  type: 'Procedural',
  difficulty: 'Medium',
  question: 'Bucket 5L. Need to move 22L. How many fills?',
  choices: ['4', '5', '6', '7'],
  answer: '5',
  explanation: 'Each bucket holds 5 liters. To move 22 liters, you must fill the bucket 5 times.',
  rule: 'Ceiling division'
},
{
  id: 'P-06',
  type: 'Procedural',
  difficulty: 'Easy',
  question: 'Score >50 → point. Score =49. Get point?',
  choices: ['Yes', 'No', 'Maybe', 'Half'],
  answer: 'No',
  explanation: 'A score must be greater than 50 to earn a point. A score of 49 does not qualify',
  rule: 'Boundary check'
},
{
  id: 'P-07',
  type: 'Procedural',
  difficulty: 'Medium',
  question: '3 tsp salt = 1 tbsp. Need 3 tsp. How many tbsp?',
  choices: ['1', '2', '0.5', '3'],
  answer: '1',
  explanation: '1 tablespoon = 3 teaspoon.',
  rule: 'Unit conversion'
},
{
  id: 'P-08',
  type: 'Procedural',
  difficulty: 'Easy',
  question: 'Light green OR yellow → go. Light yellow. Can go?',
  choices: ['Yes', 'No', 'Maybe', 'Only red'],
  answer: 'Yes',
  explanation: 'OR condition means any one true, Yellow allows go.',
  rule: 'OR condition'
},
{
  id: 'P-09',
  type: 'Procedural',
  difficulty: 'Medium',
  question: '3rd floor requires 1st and 2nd. On 3rd. Passed 1st?',
  choices: ['Yes', 'No', 'Cannot tell', 'Maybe'],
  answer: 'Yes',
  explanation: 'Reaching the 3rd floor requires passing through the 1st floor, so yes, you passed it.',
  rule: 'Sequence inference'
},
{
  id: 'P-10',
  type: 'Procedural',
  difficulty: 'Hard',
  question: '4-digit code 1,2,3,4 each once. Number of codes?',
  choices: ['12', '24', '36', '48'],
  answer: '24',
  explanation: 'Arranging four unique digits gives 4 factorial, which equals 24 possible codes.',
  rule: 'Permutation count'
},

/* ===================== L (Linguistic / Abstract) ===================== */
{
  id: 'L-01',
  type: 'Linguistic',
  difficulty: 'Medium',
  question: 'What has many keys but cannot open a lock?',
  choices: ['Piano', 'Map', 'Door', 'Car'],
  answer: 'Piano',
  explanation: 'Keys have multiple meanings.',
  rule: 'Polysemy'
},
{
  id: 'L-02',
  type: 'Linguistic',
  difficulty: 'Medium',
  question: 'What is always coming, but never arrives?',
  choices: ['Yesterday', 'Today', 'Tomorrow', 'Next week'],
  answer: 'Tomorrow',
  explanation: 'Tomorrow is always in the future and never arrives.',
  rule: 'Abstract reasoning'
},
{
  id: 'L-03',
  type: 'Linguistic',
  difficulty: 'Medium',
  question: 'What has an eye but cannot see?',
  choices: ['Needle', 'Storm', 'Human', 'Camera'],
  answer: 'Needle',
  explanation: 'Eye of needle.',
  rule: 'Feature polysemy'
},
{
  id: 'L-04',
  type: 'Linguistic',
  difficulty: 'Hard',
  question: 'What begins and ends with "E" but has only one letter?',
  choices: ['Envelope', 'Eye', 'Edge', 'Elephant'],
  answer: 'Envelope',
  explanation: 'What falls but never breaks, and breaks but never falls?',
  rule: 'Linguistic trick'
},
{
  id: 'L-05',
  type: 'Linguistic',
  difficulty: 'Hard',
  question: 'I am an odd number. Take one letter, I become even. Which?',
  choices: ['Seven', 'Five', 'Three', 'Nine'],
  answer: 'Seven',
  explanation: 'Letter removal changes meaning, SEVEN → EVEN',
  rule: 'Linguistic transformation'
},
{
  id: 'L-06',
  type: 'Linguistic',
  difficulty: 'Easy',
  question: 'What goes up but never comes down?',
  choices: ['Your age', 'Balloon', 'Sun', 'Moon'],
  answer: 'Your age',
  explanation: 'Age only increases.',
  rule: 'Monotonic property'
},
{
  id: 'L-07',
  type: 'Linguistic',
  difficulty: 'Medium',
  question: 'What is full of holes but still holds water?',
  choices: ['Sponge', 'Cup', 'Pipe', 'Cloth'],
  answer: 'Sponge',
  explanation: 'Sponge retains water despite holes.',
  rule: 'Property conflict'
},
{
  id: 'L-08',
  type: 'Linguistic',
  difficulty: 'Medium',
  question: 'Bought by pound, measured by foot?',
  choices: ['Carpet', 'Rope', 'Water', 'Sand'],
  answer: 'Carpet',
  explanation: 'Carpet is sold by weight but measured by length.',
  rule: 'Unit mismatch'
},
{
  id: 'L-09',
  type: 'Linguistic',
  difficulty: 'Hard',
  question: 'If you have me, you want to share me. If shared, you don’t have me. What?',
  choices: ['A secret', 'A toy', 'A coin', 'A book'],
  answer: 'A secret',
  explanation: 'Sharing a secret removes possession.',
  rule: 'Abstract state'
},
{
  id: 'L-10',
  type: 'Linguistic',
  difficulty: 'Hard',
  question: 'What falls but never breaks, and breaks but never falls?',
  choices: ['Night/Day', 'Rain/Cloud', 'Leaf/Branch', 'Promise/Word'],
  answer: 'Night/Day',
  explanation: 'Night falls, Day breaks.',
  rule: 'Conceptual opposites'
},

/* ===================== F (Formal / Math) ===================== */
{
  id: 'F-01',
  type: 'Formal',
  difficulty: 'Easy',
  question: 'Next number: 2, 4, 8, 16, ?',
  choices: ['18', '24', '32', '34'],
  answer: '32',
  explanation: '×2 each step.',
  rule: 'Geometric sequence'
},
{
  id: 'F-02',
  type: 'Formal',
  difficulty: 'Medium',
  question: 'All bloops are razzies, some razzies are lints. Are all bloops lints?',
  choices: ['Yes', 'No', 'Cannot tell', 'Some'],
  answer: 'Cannot tell',
  explanation: 'Partial overlap, Some razzies are lints, but that does not guarantee that all bloops are lints',
  rule: 'Syllogism with overlap'
},
{
  id: 'F-03',
  type: 'Formal',
  difficulty: 'Medium',
  question: 'I speak without a mouth and hear without ears. What am I?',
  choices: ['Echo', 'Wind', 'Shadow', 'Sound'],
  answer: 'Echo',
  explanation: 'An echo repeats sound without a mouth or ears',
  rule: 'Riddle'
},
{
  id: 'F-04',
  type: 'Formal',
  difficulty: 'Easy',
  question: 'Which tool measures temperature?',
  choices: ['Ruler', 'Thermometer', 'Scale', 'Clock'],
  answer: 'Thermometer',
  explanation: 'Measures temperature.',
  rule: 'Object identification'
},
{
  id: 'F-05',
  type: 'Formal',
  difficulty: 'Medium',
  question: '2 colors of socks in drawer. Guarantee a matching pair, how many?',
  choices: ['2', '3', '4', '5'],
  answer: '3',
  explanation: 'With two sock colors, pulling 3 socks guarantees a matching pair',
  rule: 'Pigeonhole principle'
},
{
  id: 'F-06',
  type: 'Formal',
  difficulty: 'Medium',
  question: 'Odd one out: 2,3,5,7,9?',
  choices: ['2','3','7','9'],
  answer: '9',
  explanation: '9 is not prime.',
  rule: 'Prime detection'
},
{
  id: 'F-07',
  type: 'Formal',
  difficulty: 'Medium',
  question: 'Ali is John’s brother. John is Mary’s father. Ali is?',
  choices: ['Father', 'Uncle', 'Brother', 'Cousin'],
  answer: 'Uncle',
  explanation: 'Ali is the brother of Mary’s father, making him her uncle',
  rule: 'Family deduction'
},
{
  id: 'F-08',
  type: 'Formal',
  difficulty: 'Easy',
  question: '1 kg feathers vs 1 kg iron. Heavier?',
  choices: ['Feathers', 'Iron', 'Same', 'Cannot tell'],
  answer: 'Same',
  explanation: 'Both weigh 1 kg, so they are equal',
  rule: 'Mass equality'
},
{
  id: 'F-09',
  type: 'Formal',
  difficulty: 'Medium',
  question: 'Fair coin flipped 3 times HHH. Probability next heads?',
  choices: ['1/2', '1/4', '1/8', '1'],
  answer: '1/2',
  explanation: 'Coin flips are independent, so the probability remains ½.',
  rule: 'Probability'
},
{
  id: 'F-10',
  type: 'Formal',
  difficulty: 'Easy',
  question: 'Unscramble "LPANE" to make a vehicle.',
  choices: ['Plane', 'Panel', 'Panelo', 'Palen'],
  answer: 'Plane',
  explanation: 'Rearranging “LPANE” gives the word “PLANE”',
  rule: 'Word puzzle'
} 
];
