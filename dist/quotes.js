const DAY = 86_400_000;
const OFFSET = 7 * 60 * 60 * 1000;

export const quotes = [
  { text: 'A journey of a thousand li starts with a single step.', author: 'Laozi', source: 'https://en.wikiquote.org/wiki/Laozi — Tao Te Ching, Ch. 64, line 12' },
  { text: 'The only way to do great work is to love what you do.', author: 'Steve Jobs', source: 'https://en.wikiquote.org/wiki/Steve_Jobs — Stanford University commencement address, 12 June 2005' },
  { text: 'The more that you read, the more things you will know.', author: 'Dr. Seuss', source: 'https://en.wikiquote.org/wiki/Dr._Seuss — I Can Read With My Eyes Shut! (1978)' },
  { text: 'Well done is better than well said.', author: 'Benjamin Franklin', source: 'https://en.wikiquote.org/wiki/Benjamin_Franklin — Poor Richard\'s Almanack (1737)' },
  { text: 'The mind is not a vessel that needs filling, but wood that needs igniting.', author: 'Plutarch', source: 'https://en.wikiquote.org/wiki/Plutarch — On Listening to Lectures (Tr. Waterfield), Moralia' },
  { text: 'Action is the foundational key to all success.', author: 'Anthony Robbins', source: 'https://en.wikiquote.org/wiki/Anthony_Robbins — As quoted in Stack the Logs! (2003) by Frank F. Lunn, p. 45' },
  { text: 'For knowledge itself is power.', author: 'Francis Bacon', source: 'https://en.wikiquote.org/wiki/Francis_Bacon — Meditationes Sacrae (1597), "De Hæresibus" [Of Heresies]' },
  { text: 'It is never too late to be what you might have been.', author: 'George Eliot', source: 'https://en.wikiquote.org/wiki/George_Eliot — Middlemarch (1871–72)' },
  { text: 'The only limit to our realization of tomorrow will be our doubts of today. Let us move forward with strong and active faith.', author: 'Franklin D. Roosevelt', source: 'https://en.wikiquote.org/wiki/Future — The Public Papers and Addresses of Franklin D. Roosevelt, 1944–45 (1950), p. 616; undelivered draft for Jefferson Day, 13 April 1945' },
  { text: 'All men by nature desire to know.', author: 'Aristotle', source: 'https://en.wikiquote.org/wiki/Aristotle — Metaphysics, Book I, 980a.21' },
  { text: 'For the things we have to learn before we can do, we learn by doing.', author: 'Aristotle', source: 'https://en.wikiquote.org/wiki/Aristotle — Nicomachean Ethics, Book II, 1103a.33' },
  { text: 'The truly good and wise man will bear all kinds of fortune in a seemly way, and will always act in the noblest manner that the circumstances allow.', author: 'Aristotle', source: 'https://en.wikiquote.org/wiki/Aristotle — Nicomachean Ethics, Book I, 1101a' },
  { text: 'Give thyself time to learn something new and good, and cease to be whirled around.', author: 'Marcus Aurelius', source: 'https://en.wikiquote.org/wiki/Marcus_Aurelius — Meditations, Book II, 7' },
  { text: 'The universe is change; our life is what our thoughts make it.', author: 'Marcus Aurelius', source: 'https://en.wikiquote.org/wiki/Marcus_Aurelius — Meditations, Book IV, 3' },
  { text: 'You could leave life right now. Let that determine what you do and say and think.', author: 'Marcus Aurelius', source: 'https://en.wikiquote.org/wiki/Marcus_Aurelius — Meditations, Book II, 11' },
  { text: 'It is difficulties that show what men are.', author: 'Epictetus', source: 'https://en.wikiquote.org/wiki/Epictetus — Discourses, Book I, ch. 24, §1' },
  { text: 'It is impossible for anyone to begin to learn that which he thinks he already knows.', author: 'Epictetus', source: 'https://en.wikiquote.org/wiki/Epictetus — Discourses, Book II, ch. 17, §1' },
  { text: 'First say to yourself what you would be; and then do what you have to do.', author: 'Epictetus', source: 'https://en.wikiquote.org/wiki/Epictetus — Discourses, Book III, ch. 23, §1' },
  { text: 'It is best to bear what cannot be changed.', author: 'Seneca', source: 'https://en.wikiquote.org/wiki/Seneca_the_Younger — Moral Letters to Lucilius, Letter 107.9' },
  { text: 'As for me, all I know is that I know nothing', author: 'Socrates', source: 'https://en.wikiquote.org/wiki/Socrates — Plato, Republic, 354b' },
  { text: 'Isn\'t it a pleasure to study and practice what you have learned?', author: 'Confucius', source: 'https://en.wikiquote.org/wiki/Confucius — The Analects, Chapter I' },
  { text: 'You can\'t use up creativity. The more you use, the more you have.', author: 'Maya Angelou', source: 'https://en.wikiquote.org/wiki/Maya_Angelou — Conversations with Maya Angelou (1989), quoted 1982' },
  { text: 'Develop enough courage so that you can stand up for yourself and then stand up for somebody else.', author: 'Maya Angelou', source: 'https://en.wikiquote.org/wiki/Maya_Angelou — Rainbow in the Cloud: The Wisdom and Spirit of Maya Angelou (2014), p. 68' },
  { text: 'You may not control all the events that happen to you, but you can decide not to be reduced by them.', author: 'Maya Angelou', source: 'https://en.wikiquote.org/wiki/Maya_Angelou — Letter to My Daughter (2009), pp. xi-xii' },
  { text: 'Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.', author: 'Albert Einstein', source: 'https://en.wikiquote.org/wiki/Albert_Einstein — "What Life Means to Einstein", interview by George Sylvester Viereck, The Saturday Evening Post, 26 October 1929' },
  { text: 'Life is like riding a bicycle. To keep your balance you must keep moving.', author: 'Albert Einstein', source: 'https://en.wikiquote.org/wiki/Albert_Einstein — Letter to his son Eduard, 5 February 1930, as quoted in Walter Isaacson, Einstein: His Life and Universe (2007), p. 367' },
  { text: 'Failure is only the opportunity more intelligently to begin again.', author: 'Henry Ford', source: 'https://en.wikiquote.org/wiki/Henry_Ford — My Life and Work (1922), pp. 19-20' },
  { text: 'An idealist is a person who helps other people to be prosperous.', author: 'Henry Ford', source: 'https://en.wikiquote.org/wiki/Henry_Ford — Remarks from the witness stand, Mount Clemens, Michigan, July 1919, as quoted in Thesaurus of Epigrams (1948), p. 162' },
  { text: 'One can never consent to creep when one feels an impulse to soar.', author: 'Helen Keller', source: 'https://en.wikiquote.org/wiki/Helen_Keller — Address to the American Association to Promote the Teaching of Speech to the Deaf, Mt. Airy, Philadelphia, 8 July 1896' },
  { text: 'Do not think of to-day\'s failures, but of the success that may come to-morrow.', author: 'Helen Keller', source: 'https://en.wikiquote.org/wiki/Helen_Keller — Address to the American Association to Promote the Teaching of Speech to the Deaf, 8 July 1896' },
  { text: 'I had now the key to all language, and I was eager to learn to use it.', author: 'Helen Keller', source: 'https://en.wikiquote.org/wiki/Helen_Keller — The Story of My Life (1903), Ch. 6' },
  { text: 'One never notices what has been done; one can only see what remains to be done.', author: 'Marie Curie', source: 'https://en.wikiquote.org/wiki/Marie_Curie — Letter to her brother (1894)' },
  { text: 'Be less curious about people and more curious about ideas.', author: 'Marie Curie', source: 'https://en.wikiquote.org/wiki/Marie_Curie — Response to a reporter in Brittany, as quoted in Living Adventures in Science (1972)' },
  { text: 'Life is not easy for any of us. But what of that? We must have perseverance and above all confidence in ourselves.', author: 'Marie Curie', source: 'https://en.wikiquote.org/wiki/Marie_Curie — As quoted in Madame Curie: A Biography (1937) by Eve Curie Labouisse, Part 2, p. 116' },
  { text: 'The ancestor of every action is a thought.', author: 'Ralph Waldo Emerson', source: 'https://en.wikiquote.org/wiki/Ralph_Waldo_Emerson — "Spiritual Laws", Essays: First Series (1841)' },
  { text: 'The reward of a thing well done, is to have done it.', author: 'Ralph Waldo Emerson', source: 'https://en.wikiquote.org/wiki/Ralph_Waldo_Emerson — "Nominalist and Realist", Essays: Second Series (1844)' },
  { text: 'It is not enough to be industrious; so are the ants. What are you industrious about?', author: 'Henry David Thoreau', source: 'https://en.wikiquote.org/wiki/Henry_David_Thoreau — Letter to Harrison Blake, 16 November 1857' },
  { text: 'If one advances confidently in the direction of his dreams, and endeavors to live the life which he has imagined', author: 'Henry David Thoreau', source: 'https://en.wikiquote.org/wiki/Henry_David_Thoreau — Walden (1854)' },
  { text: 'If you have built castles in the air, your work need not be lost; that is where they should be. Now put the foundations under them.', author: 'Henry David Thoreau', source: 'https://en.wikiquote.org/wiki/Henry_David_Thoreau — Walden (1854)' },
  { text: 'Life was meant to be lived, and curiosity must be kept alive. One must never, for whatever reason, turn his back on life.', author: 'Eleanor Roosevelt', source: 'https://en.wikiquote.org/wiki/Eleanor_Roosevelt — Preface (December 1960) to The Autobiography of Eleanor Roosevelt (1961), p. xix' },
  { text: 'Do what you feel in your heart to be right — for you\'ll be criticized anyway.', author: 'Eleanor Roosevelt', source: 'https://en.wikiquote.org/wiki/Eleanor_Roosevelt — As quoted in How to Stop Worrying and Start Living (1948) by Dale Carnegie' },
  { text: 'One\'s philosophy is not best expressed in words; it is expressed in the choices one makes.', author: 'Eleanor Roosevelt', source: 'https://en.wikiquote.org/wiki/Eleanor_Roosevelt — This Is My Story (1937)' },
  { text: 'Instruction does much, but encouragement everything.', author: 'Johann Wolfgang von Goethe', source: 'https://en.wikiquote.org/wiki/Johann_Wolfgang_von_Goethe — Letter to A. F. Oeser, 9 November 1768' },
  { text: 'One ought, every day at least, to hear a little song, read a good poem, see a fine picture, and, if it were possible, to speak a few reasonable words.', author: 'Johann Wolfgang von Goethe', source: 'https://en.wikiquote.org/wiki/Johann_Wolfgang_von_Goethe — Wilhelm Meister\'s Apprenticeship, Bk. V, Ch. 1' },
  { text: 'Reflect upon your present blessings — of which every man has many — not on your past misfortunes, of which all men have some.', author: 'Charles Dickens', source: 'https://en.wikiquote.org/wiki/Charles_Dickens — Sketches by Boz, Characters, Ch. 2: A Christmas Dinner (1836–1837)' },
  { text: 'I will live in the Past, the Present, and the Future. The Spirits of all Three shall strive within me. I will not shut out the lessons that they teach.', author: 'Charles Dickens', source: 'https://en.wikiquote.org/wiki/Charles_Dickens — A Christmas Carol (1843)' },
  { text: 'There is a stubbornness about me that never can bear to be frightened at the will of others. My courage always rises at every attempt to intimidate me.', author: 'Jane Austen', source: 'https://en.wikiquote.org/wiki/Jane_Austen — Pride and Prejudice (1813)' },
  { text: 'Know your own happiness. You want nothing but patience; or give it a more fascinating name: call it hope.', author: 'Jane Austen', source: 'https://en.wikiquote.org/wiki/Sense_and_Sensibility — Sense and Sensibility (1811), Ch. 19' },
  { text: 'We turn not older with years, but newer every day.', author: 'Emily Dickinson', source: 'https://en.wikiquote.org/wiki/Emily_Dickinson — Letter to Louise Norcross (late 1872)' },
  { text: 'Success is counted sweetest By those who ne\'er succeed.', author: 'Emily Dickinson', source: 'https://en.wikiquote.org/wiki/Emily_Dickinson — The Complete Poems of Emily Dickinson, ed. Thomas H. Johnson (1960)' },
  { text: '"Hope" is the thing with feathers – That perches in the soul – And sings the tune without the words – And never stops – at all –', author: 'Emily Dickinson', source: 'https://en.wikiquote.org/wiki/Emily_Dickinson — The Complete Poems of Emily Dickinson, ed. Thomas H. Johnson (1960)' },
  { text: 'We are all in the gutter, but some of us are looking at the stars.', author: 'Oscar Wilde', source: 'https://en.wikiquote.org/wiki/Oscar_Wilde — Lady Windermere\'s Fan (1892)' },
  { text: 'Experience is the name everyone gives to their mistakes.', author: 'Oscar Wilde', source: 'https://en.wikiquote.org/wiki/Oscar_Wilde — Lady Windermere\'s Fan (1892), Act 3' },
  { text: 'You see things as they are and ask, "Why?" I dream things as they never were and ask, "Why not?"', author: 'George Bernard Shaw', source: 'https://en.wikiquote.org/wiki/George_Bernard_Shaw — Back to Methuselah (1921)' },
  { text: 'All great truths begin as blasphemies.', author: 'George Bernard Shaw', source: 'https://en.wikiquote.org/wiki/George_Bernard_Shaw — Annajanska (1919)' },
  { text: 'As long as I have a want, I have a reason for living. Satisfaction is death.', author: 'George Bernard Shaw', source: 'https://en.wikiquote.org/wiki/George_Bernard_Shaw — Overruled (1912)' },
  { text: 'The struggle itself toward the heights is enough to fill a man\'s heart. One must imagine Sisyphus happy.', author: 'Albert Camus', source: 'https://en.wikiquote.org/wiki/Albert_Camus — The Myth of Sisyphus (1942)' },
  { text: 'The preceding merely defines a way of thinking. But the point is to live.', author: 'Albert Camus', source: 'https://en.wikiquote.org/wiki/Albert_Camus — An Absurd Reasoning (1942)' },
  { text: 'Everything considered, a determined soul will always manage.', author: 'Albert Camus', source: 'https://en.wikiquote.org/wiki/Albert_Camus — An Absurd Reasoning (1942)' },
  { text: 'Your task is not to foresee the future, but to enable it.', author: 'Antoine de Saint-Exupéry', source: 'https://en.wikiquote.org/wiki/Antoine_de_Saint-Exup%C3%A9ry — Citadelle / The Wisdom of the Sands (1948)' },
  { text: 'It seems that perfection is attained, not when there is nothing more to add, but when there is nothing more to take away.', author: 'Antoine de Saint-Exupéry', source: 'https://en.wikiquote.org/wiki/Antoine_de_Saint-Exup%C3%A9ry — Terre des Hommes / Wind, Sand and Stars (1939), Ch. III: The Tool' },
  { text: 'Each man must look to himself to teach him the meaning of life. It is not something discovered; it is something molded.', author: 'Antoine de Saint-Exupéry', source: 'https://en.wikiquote.org/wiki/Antoine_de_Saint-Exup%C3%A9ry — Terre des Hommes / Wind, Sand and Stars (1939), Ch. II: The Men' },
  { text: 'Progress lies not in enhancing what is, but in advancing toward what will be.', author: 'Kahlil Gibran', source: 'https://en.wikiquote.org/wiki/Kahlil_Gibran — A Handful of Sand on the Shore, as quoted in Alterquest (2006), p. 127' },
  { text: 'To understand the heart and mind of a person, look not at what he has already achieved, but what he aspires to.', author: 'Kahlil Gibran', source: 'https://en.wikiquote.org/wiki/Kahlil_Gibran — as quoted in Become a Conscious Creator (2007), p. 44' },
  { text: 'I would be the least among men with dreams and the desire to fulfill them, rather than the greatest with no dreams and no desires.', author: 'Kahlil Gibran', source: 'https://en.wikiquote.org/wiki/Kahlil_Gibran — Sand and Foam (1926)' },
  { text: 'Sell your cleverness and buy bewilderment. Cleverness is mere opinion, bewilderment intuition.', author: 'Rumi', source: 'https://en.wikiquote.org/wiki/Rumi — Masnavi, Book IV, Story II, tr. E. H. Whinfield (1898)' },
  { text: 'Come, seek, for search is the foundation of fortune: every success depends upon focusing the heart.', author: 'Rumi', source: 'https://en.wikiquote.org/wiki/Rumi — Masnavi III, 2302–5, tr. Kabir Helminski (1996)' },
  { text: 'If you are wholly perplexed and in straits, have patience, for patience is the key to joy.', author: 'Rumi', source: 'https://en.wikiquote.org/wiki/Rumi — Masnavi I, 2908, tr. Kabir Helminski (1990)' },
  { text: 'Don\'t get set into one form, adapt it and build your own, and let it grow, be like water.', author: 'Bruce Lee', source: 'https://en.wikiquote.org/wiki/Bruce_Lee — Bruce Lee: A Warrior\'s Journey (2000); lines written for Longstreet' },
  { text: 'There are no limits. There are plateaus, but you must not stay there, you must go beyond them.', author: 'Bruce Lee', source: 'https://en.wikiquote.org/wiki/Bruce_Lee — as quoted in The Art of Expressing the Human Body (1998), p. 23' },
  { text: 'The man who views the world at 50 the same as he did at 20 has wasted 30 years of his life.', author: 'Muhammad Ali', source: 'https://en.wikiquote.org/wiki/Muhammad_Ali — Wikiquote Sourced section (no further citation shown on page)' },
  { text: 'I can accept failure. Everyone fails at something. But I can\'t accept not trying.', author: 'Michael Jordan', source: 'https://en.wikiquote.org/wiki/Michael_Jordan — I Can\'t Accept Not Trying: Michael Jordan on the Pursuit of Excellence (1994), p. 129' },
  { text: 'Limits, like fears, are often just an illusion', author: 'Michael Jordan', source: 'https://en.wikiquote.org/wiki/Michael_Jordan — Hall of Fame induction address (2009)' },
  { text: 'I set another goal … a reasonable, manageable goal that I could realistically achieve if I worked hard enough. I approached everything step by step.', author: 'Michael Jordan', source: 'https://en.wikiquote.org/wiki/Michael_Jordan — How to be like Mike (2005)' },
  { text: 'To subdue the enemy without fighting is the acme of skill.', author: 'Sun Tzu', source: 'https://en.wikiquote.org/wiki/Sun_Tzu — The Art of War, Ch. III, tr. Lionel Giles' },
  { text: 'What is essential in war is victory, not prolonged operations.', author: 'Sun Tzu', source: 'https://en.wikiquote.org/wiki/Sun_Tzu — The Art of War, Ch. I, tr. Lionel Giles' },
  { text: 'If you want others to be happy, practice compassion. If you want to be happy, practice compassion.', author: 'Dalai Lama', source: 'https://en.wikiquote.org/wiki/Tenzin_Gyatso,_14th_Dalai_Lama — Compassion and the Individual' },
  { text: 'How wonderful it is that nobody need wait a single moment before beginning to improve the world.', author: 'Anne Frank', source: 'https://en.wikiquote.org/wiki/Anne_Frank — The Diary of Anne Frank (1942–1944)' },
  { text: 'I have often been downcast, but never in despair', author: 'Anne Frank', source: 'https://en.wikiquote.org/wiki/Anne_Frank — The Diary of Anne Frank (1942–1944)' },
  { text: 'Love truth, but pardon error.', author: 'Voltaire', source: 'https://en.wikiquote.org/wiki/Voltaire — "Deuxième discours: de la liberté," Sept Discours en Vers sur l\'Homme (1738)' },
  { text: 'What does not kill me, makes me stronger.', author: 'Friedrich Nietzsche', source: 'https://en.wikiquote.org/wiki/Friedrich_Nietzsche — "Maxims and Arrows," §8' },
  { text: 'There is only one thing that makes a dream impossible to achieve: the fear of failure.', author: 'Paulo Coelho', source: 'https://en.wikiquote.org/wiki/Paulo_Coelho — The Alchemist (1988), p. 141' },
  { text: 'You free. Nothing and nobody is obliged to save you but you.', author: 'Toni Morrison', source: 'https://en.wikiquote.org/wiki/Toni_Morrison — Home (2012), p. 126' },
  { text: 'The answer to bad speech is more speech.', author: 'Chimamanda Ngozi Adichie', source: 'https://en.wikiquote.org/wiki/Chimamanda_Ngozi_Adichie — The Reith Lectures (2022)' },
  { text: 'One child, one teacher, one book and one pen can change the world.', author: 'Malala Yousafzai', source: 'https://en.wikiquote.org/wiki/Malala_Yousafzai — Speech to the UN General Assembly, 12 July 2013' },
  { text: 'That is the true genius of America—a faith in simple dreams, an insistence on small miracles.', author: 'Barack Obama', source: 'https://en.wikiquote.org/wiki/Barack_Obama — Speech at the Democratic National Convention, 27 July 2004' },
  { text: 'If my future were determined just by my performance on a standardized test, I wouldn\'t be here. I guarantee you that.', author: 'Michelle Obama', source: 'https://en.wikiquote.org/wiki/Michelle_Obama — Campaign rally, Madison, Wisconsin, 18 February 2008' },
  { text: 'What other people label or might try to call failure, I have learned is just God\'s way of pointing you in a new direction.', author: 'Oprah Winfrey', source: 'https://en.wikiquote.org/wiki/Oprah_Winfrey — Commencement speech at Howard University, 12 May 2007' },
  { text: 'We do not need magic to transform our world. We carry all the power we need inside ourselves already. We have the power to imagine better.', author: 'J. K. Rowling', source: 'https://en.wikiquote.org/wiki/J._K._Rowling — Harvard University Commencement Address, 5 June 2008' },
  { text: 'Remember, Hope is a good thing, maybe the best of things, and no good thing ever dies.', author: 'Stephen King', source: 'https://en.wikiquote.org/wiki/Stephen_King — Different Seasons (1982), "Rita Hayworth and Shawshank Redemption"' },
  { text: 'Even castles in the sky can do with a fresh coat of paint.', author: 'Haruki Murakami', source: 'https://en.wikiquote.org/wiki/Haruki_Murakami — South of the Border, West of the Sun (1992)' },
  { text: 'Life is a luminous halo, a semi-transparent envelope surrounding us from the beginning of consciousness to the end.', author: 'Virginia Woolf', source: 'https://en.wikiquote.org/wiki/Virginia_Woolf — The Common Reader (1925), "Modern Fiction"' },
  { text: 'The good life is one inspired by love and guided by knowledge.', author: 'Bertrand Russell', source: 'https://en.wikiquote.org/wiki/Bertrand_Russell — What I Believe (1925)' },
  { text: 'The great thing, then, in all education, is to make our nervous system our ally instead of our enemy.', author: 'William James', source: 'https://en.wikiquote.org/wiki/William_James — The Principles of Psychology (1890), Ch. 4' },
  { text: 'Every great advance in science has issued from a new audacity of imagination.', author: 'John Dewey', source: 'https://en.wikiquote.org/wiki/John_Dewey — The Quest for Certainty (1929), Ch. XI' },
  { text: 'The best instruction is that which uses the least words sufficient for the task.', author: 'Maria Montessori', source: 'https://en.wikiquote.org/wiki/Maria_Montessori — The Discovery of the Child (1948), Ch. 7' },
  { text: 'The key is not to prioritize what\'s on your schedule, but to schedule your priorities.', author: 'Stephen Covey', source: 'https://en.wikiquote.org/wiki/Stephen_Covey — The Seven Habits of Highly Effective People (1989), p. 161' },
  { text: 'Vulnerability is not weakness; it\'s our greatest measure of courage.', author: 'Brené Brown', source: 'https://en.wikiquote.org/wiki/Bren%C3%A9_Brown — Atlas of the Heart (2021)' },
  { text: 'Lay hold of today’s task, and you will not need to depend so much upon tomorrow’s. While we are postponing, life speeds by.', author: 'Seneca', source: 'https://en.wikiquote.org/wiki/Seneca_the_Younger — Epistulae Morales ad Lucilium (Moral Letters to Lucilius), Letter I: On Saving Time' },
  { text: 'Men learn while they teach.', author: 'Seneca', source: 'https://en.wikiquote.org/wiki/Seneca_the_Younger — Epistulae Morales ad Lucilium (Moral Letters to Lucilius), Letter VII: On Crowds' },
  { text: 'Wonder is the feeling of a philosopher, and philosophy begins in wonder.', author: 'Socrates', source: 'https://en.wikiquote.org/wiki/Socrates — Plato, Theaetetus, 155d' },
  { text: 'To study and not think is a waste. To think and not study is dangerous.', author: 'Confucius', source: 'https://en.wikiquote.org/wiki/Confucius — The Analects, Book II, Ch. XV' },
  { text: 'Reason well from the beginning and then there will never be any need to look back with confusion and doubt.', author: 'Dalai Lama', source: 'https://en.wikiquote.org/wiki/Tenzin_Gyatso,_14th_Dalai_Lama — The Path to Enlightenment (1994)' },
];

// Seeded PRNG (mulberry32): same seed -> same sequence, so the quote is
// stable all day and identical for every visitor.
function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// One fixed shuffled order (seeded once, not per cycle): the order feels
// random, but no quote repeats in any 103 consecutive days.
const order = (() => {
  const rand = mulberry32(20261226);
  const arr = quotes.map((_, i) => i);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
})();

export function getQuote(now) {
  const day = Math.floor((now + OFFSET) / DAY);
  return quotes[order[((day % quotes.length) + quotes.length) % quotes.length]];
}
