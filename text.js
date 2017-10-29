//const Words = "123 456 1 12".split(" ");
//const Words = "123 456 1 12".split(" ");
/*const Words = "The sun did not shine.
It was too wet to play.
So we sat in the house
All that cold, cold, wet day.
I sat there with Sally.
We sat there, we two.
And I said, “How I wish
We had something to do!”".toLowerCase().replace(/[^a-z,\.]/g," ").replace(/\s+/g," ").split(" ");
*/
const Words = `
Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation. Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people's hats off—then, I account it high time to get to sea as soon as I can. This is my substitute for pistol and ball. With a philosophical flourish Cato throws himself upon his sword; I quietly take to the ship. There is nothing surprising in this. If they but knew it, almost all men in their degree, some time or other, cherish very nearly the same feelings towards the ocean with me.
There now is your insular city of the Manhattoes, belted round by wharves as Indian isles by coral reefs—commerce surrounds it with her surf. Right and left, the streets take you waterward. Its extreme downtown is the battery, where that noble mole is washed by waves, and cooled by breezes, which a few hours previous were out of sight of land. Look at the crowds of water-gazers there.
Circumambulate the city of a dreamy Sabbath afternoon. Go from Corlears Hook to Coenties Slip, and from thence, by Whitehall, northward. What do you see?—Posted like silent sentinels all around the town, stand thousands upon thousands of mortal men fixed in ocean reveries. Some leaning against the spiles; some seated upon the pier-heads; some looking over the bulwarks of ships from China; some high aloft in the rigging, as if striving to get a still better seaward peep. But these are all landsmen; of week days pent up in lath and plaster—tied to counters, nailed to benches, clinched to desks. How then is this? Are the green fields gone? What do they here?
But look! here come more crowds, pacing straight for the water, and seemingly bound for a dive. Strange! Nothing will content them but the extremest limit of the land; loitering under the shady lee of yonder warehouses will not suffice. No. They must get just as nigh the water as they possibly can without falling in. And there they stand—miles of them—leagues. Inlanders all, they come from lanes and alleys, streets avenues—north, east, south, and west. Yet here they all unite. Tell me, does the magnetic virtue of the needles of the compasses of all those ships attract them thither?
Once more. Say you are in the country; in some high land of lakes. Take almost any path you please, and ten to one it carries you down in a dale, and leaves you there by a pool in the stream. There is magic in it. Let the most absent-minded of men be plunged in his deepest reveries—stand that man on his legs, set his feet a-going, and he will infallibly lead you to water, if water there be in all that region. Should you ever be athirst in the great American desert, try this experiment, if your caravan happen to be supplied with a metaphysical professor. Yes, as every one knows, meditation and water are wedded for ever.
But here is an artist. He desires to paint you the dreamiest, shadiest, quietest, most enchanting bit of romantic landscape in all the valley of the Saco. What is the chief element he employs? There stand his trees, each with a hollow trunk, as if a hermit and a crucifix were within; and here sleeps his meadow, and there sleep his cattle; and up from yonder cottage goes a sleepy smoke. Deep into distant woodlands winds a mazy way, reaching to overlapping spurs of mountains bathed in their hill-side blue. But though the picture lies thus tranced, and though this pine-tree shakes down its sighs like leaves upon this shepherd's head, yet all were vain, unless the shepherd's eye were fixed upon the magic stream before him. Go visit the Prairies in June, when for scores on scores of miles you wade knee-deep among Tiger-lilies—what is the one charm wanting?—Water—there is not a drop of water there! Were Niagara but a cataract of sand, would you travel your thousand miles to see it? Why did the poor poet of Tennessee, upon suddenly receiving two handfuls of silver, deliberate whether to buy him a coat, which he sadly needed, or invest his money in a pedestrian trip to Rockaway Beach? Why is almost every robust healthy boy with a robust healthy soul in him, at some time or other crazy to go to sea? Why upon your first voyage as a passenger, did you yourself feel such a mystical vibration, when first told that you and your ship were now out of sight of land? Why did the old Persians hold the sea holy? Why did the Greeks give it a separate deity, and own brother of Jove? Surely all this is not without meaning. And still deeper the meaning of that story of Narcissus, who because he could not grasp the tormenting, mild image he saw in the fountain, plunged into it and was drowned. But that same image, we ourselves see in all rivers and oceans. It is the image of the ungraspable phantom of life; and this is the key to it all.
---
Now, when I say that I am in the habit of going to sea whenever I begin to grow hazy about the eyes, and begin to be over conscious of my lungs, I do not mean to have it inferred that I ever go to sea as a passenger. For to go as a passenger you must needs have a purse, and a purse is but a rag unless you have something in it. Besides, passengers get sea-sick—grow quarrelsome—don't sleep of nights—do not enjoy themselves much, as a general thing;—no, I never go as a passenger; nor, though I am something of a salt, do I ever go to sea as a Commodore, or a Captain, or a Cook. I abandon the glory and distinction of such offices to those who like them. For my part, I abominate all honorable respectable toils, trials, and tribulations of every kind whatsoever. It is quite as much as I can do to take care of myself, without taking care of ships, barques, brigs, schooners, and what not. And as for going as cook,—though I confess there is considerable glory in that, a cook being a sort of officer on ship-board—yet, somehow, I never fancied broiling fowls;—though once broiled, judiciously buttered, and judgmatically salted and peppered, there is no one who will speak more respectfully, not to say reverentially, of a broiled fowl than I will. It is out of the idolatrous dotings of the old Egyptians upon broiled ibis and roasted river horse, that you see the mummies of those creatures in their huge bakehouses the pyramids.
No, when I go to sea, I go as a simple sailor, right before the mast, plumb down into the fore-castle, aloft there to the royal mast-head. True, they rather order me about some, and make me jump from spar to spar, like a grasshopper in a May meadow. And at first, this sort of thing is unpleasant enough. It touches one's sense of honor, particularly if you come of an old established family in the land, the Van Rensselaers, or Randolphs, or Hardicanutes. And more than all, if just previous to putting your hand into the tar-pot, you have been lording it as a country schoolmaster, making the tallest boys stand in awe of you. The transition is a keen one, I assure you, from a schoolmaster to a sailor, and requires a strong decoction of Seneca and the Stoics to enable you to grin and bear it. But even this wears off in time.
What of it, if some old hunks of a sea-captain orders me to get a broom and sweep down the decks? What does that indignity amount to, weighed, I mean, in the scales of the New Testament? Do you think the archangel Gabriel thinks anything the less of me, because I promptly and respectfully obey that old hunks in that particular instance? Who ain't a slave? Tell me that. Well, then, however the old sea-captains may order me about—however they may thump and punch me about, I have the satisfaction of knowing that it is all right; that everybody else is one way or other served in much the same way—either in a physical or metaphysical point of view, that is; and so the universal thump is passed round, and all hands should rub each other's shoulder-blades, and be content.
Again, I always go to sea as a sailor, because they make a point of paying me for my trouble, whereas they never pay passengers a single penny that I ever heard of. On the contrary, passengers themselves must pay. And there is all the difference in the world between paying and being paid. The act of paying is perhaps the most uncomfortable infliction that the two orchard thieves entailed upon us. But being paid,—what will compare with it? The urbane activity with which a man receives money is really marvellous, considering that we so earnestly believe money to be the root of all earthly ills, and that on no account can a monied man enter heaven. Ah! how cheerfully we consign ourselves to perdition!
Finally, I always go to sea as a sailor, because of the wholesome exercise and pure air of the fore-castle deck. For as in this world, head winds are far more prevalent than winds from astern (that is, if you never violate the Pythagorean maxim), so for the most part the Commodore on the quarter-deck gets his atmosphere at second hand from the sailors on the forecastle. He thinks he breathes it first; but not so. In much the same way do the commonalty lead their leaders in many other things, at the same time that the leaders little suspect it. But wherefore it was that after having repeatedly smelt the sea as a merchant sailor, I should now take it into my head to go on a whaling voyage; this the invisible police officer of the Fates, who has the constant surveillance of me, and secretly dogs me, and influences me in some unaccountable way—he can better answer than any one else. And, doubtless, my going on this whaling voyage, formed part of the grand programme of Providence that was drawn up a long time ago. It came in as a sort of brief interlude and solo between more extensive performances. I take it that this part of the bill must have run something like this:
"Grand Contested Election for the Presidency of the United States.
"WHALING VOYAGE BY ONE ISHMAEL."
"BLOODY BATTLE IN AFFGHANISTAN."
Though I cannot tell why it was exactly that those stage managers, the Fates, put me down for this shabby part of a whaling voyage, when others were set down for magnificent parts in high tragedies, and short and easy parts in genteel comedies, and jolly parts in farces—though I cannot tell why this was exactly; yet, now that I recall all the circumstances, I think I can see a little into the springs and motives which being cunningly presented to me under various disguises, induced me to set about performing the part I did, besides cajoling me into the delusion that it was a choice resulting from my own unbiased freewill and discriminating judgments.
Chief among these motives was the overwhelming idea of the great whale himself. Such a portentous and mysterious monster roused all my curiosity. Then the wild and distant seas where he rolled his island bulk; the undeliverable, nameless perils of the whale; these, with all the attending marvels of a thousand Patagonian sights and sounds, helped to sway me to my wish. With other men, perhaps, such things would not have been inducements; but as for me, I am tormented with an everlasting itch for things remote. I love to sail forbidden seas, and land on barbarous coasts. Not ignoring what is good, I am quick to perceive a horror, and could still be social with it—would they let me—since it is but well to be on friendly terms with all the inmates of the place one lodges in.
By reason of these things, then, the whaling voyage was welcome; the great flood-gates of the wonder-world swung open, and in the wild conceits that swayed me to my purpose, two and two there floated into my inmost soul, endless processions of the whale, and, mid most of them all, one grand hooded phantom, like a snow hill in the air.
------
Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, "and what is the use of a book,’ thought Alice "without pictures or conversation?’
So she was considering in her own mind (as well as she could, for the hot day made her feel very sleepy and stupid), whether the pleasure of making a daisy-chain would be worth the trouble of getting up and picking the daisies, when suddenly a White Rabbit with pink eyes ran close by her.
There was nothing so VERY remarkable in that; nor did Alice think it so VERY much out of the way to hear the Rabbit say to itself, "Oh dear! Oh dear! I shall be late!’ (when she thought it over afterwards, it occurred to her that she ought to have wondered at this, but at the time it all seemed quite natural); but when the Rabbit actually TOOK A WATCH OUT OF ITS WAISTCOAT- POCKET, and looked at it, and then hurried on, Alice started to her feet, for it flashed across her mind that she had never before seen a rabbit with either a waistcoat-pocket, or a watch to take out of it, and burning with curiosity, she ran across the field after it, and fortunately was just in time to see it pop down a large rabbit-hole under the hedge.
In another moment down went Alice after it, never once considering how in the world she was to get out again.
The rabbit-hole went straight on like a tunnel for some way, and then dipped suddenly down, so suddenly that Alice had not a moment to think about stopping herself before she found herself falling down a very deep well.
Either the well was very deep, or she fell very slowly, for she had plenty of time as she went down to look about her and to wonder what was going to happen next. First, she tried to look down and make out what she was coming to, but it was too dark to see anything; then she looked at the sides of the well, and noticed that they were filled with cupboards and book-shelves; here and there she saw maps and pictures hung upon pegs. She took down a jar from one of the shelves as she passed; it was labelled "ORANGE MARMALADE’, but to her great disappointment it was empty: she did not like to drop the jar for fear of killing somebody, so managed to put it into one of the cupboards as she fell past it.
"Well!’ thought Alice to herself, "after such a fall as this, I shall think nothing of tumbling down stairs! How brave they’ll all think me at home! Why, I wouldn’t say anything about it, even if I fell off the top of the house!’ (Which was very likely true.)
Down, down, down. Would the fall NEVER come to an end! "I wonder how many miles I’ve fallen by this time?’ she said aloud. "I must be getting somewhere near the centre of the earth. Let me see: that would be four thousand miles down, I think‘ (for, you see, Alice had learnt several things of this sort in her lessons in the schoolroom, and though this was not a VERY good opportunity for showing off her knowledge, as there was no one to listen to her, still it was good practice to say it over) "yes, that’s about the right distancebut then I wonder what Latitude or Longitude I’ve got to?’ (Alice had no idea what Latitude was, or Longitude either, but thought they were nice grand words to say.)
Presently she began again. "I wonder if I shall fall right THROUGH the earth! How funny it’ll seem to come out among the people that walk with their heads downward! The Antipathies, I think‘ (she was rather glad there WAS no one listening, this time, as it didn’t sound at all the right word) "but I shall have to ask them what the name of the country is, you know. Please, Ma’am, is this New Zealand or Australia?’ (and she tried to curtsey as she spokefancy CURTSEYING as you’re falling through the air! Do you think you could manage it?) "And what an ignorant little girl she’ll think me for asking! No, it’ll never do to ask: perhaps I shall see it written up somewhere.’
Down, down, down. There was nothing else to do, so Alice soon began talking again. "Dinah’ll miss me very much to-night, I should think!’ (Dinah was the cat.) "I hope they’ll remember her saucer of milk at tea-time. Dinah my dear! I wish you were down here with me! There are no mice in the air, I’m afraid, but you might catch a bat, and that’s very like a mouse, you know. But do cats eat bats, I wonder?’ And here Alice began to get rather sleepy, and went on saying to herself, in a dreamy sort of way, "Do cats eat bats? Do cats eat bats?’ and sometimes, "Do bats eat cats?’ for, you see, as she couldn’t answer either question, it didn’t much matter which way she put it. She felt that she was dozing off, and had just begun to dream that she was walking hand in hand with Dinah, and saying to her very earnestly, "Now, Dinah, tell me the truth: did you ever eat a bat?’ when suddenly, thump! thump! down she came upon a heap of sticks and dry leaves, and the fall was over.
Alice was not a bit hurt, and she jumped up on to her feet in a moment: she looked up, but it was all dark overhead; before her was another long passage, and the White Rabbit was still in sight, hurrying down it. There was not a moment to be lost: away went Alice like the wind, and was just in time to hear it say, as it turned a corner, "Oh my ears and whiskers, how late it’s getting!’ She was close behind it when she turned the corner, but the Rabbit was no longer to be seen: she found herself in a long, low hall, which was lit up by a row of lamps hanging from the roof.
There were doors all round the hall, but they were all locked; and when Alice had been all the way down one side and up the other, trying every door, she walked sadly down the middle, wondering how she was ever to get out again.
Suddenly she came upon a little three-legged table, all made of solid glass; there was nothing on it except a tiny golden key, and Alice’s first thought was that it might belong to one of the doors of the hall; but, alas! either the locks were too large, or the key was too small, but at any rate it would not open any of them. However, on the second time round, she came upon a low curtain she had not noticed before, and behind it was a little door about fifteen inches high: she tried the little golden key in the lock, and to her great delight it fitted!
Alice opened the door and found that it led into a small passage, not much larger than a rat-hole: she knelt down and looked along the passage into the loveliest garden you ever saw. How she longed to get out of that dark hall, and wander about among those beds of bright flowers and those cool fountains, but she could not even get her head though the doorway; "and even if my head would go through,’ thought poor Alice, "it would be of very little use without my shoulders. Oh, how I wish I could shut up like a telescope! I think I could, if I only know how to begin.’ For, you see, so many out-of-the-way things had happened lately, that Alice had begun to think that very few things indeed were really impossible.
There seemed to be no use in waiting by the little door, so she went back to the table, half hoping she might find another key on it, or at any rate a book of rules for shutting people up like telescopes: this time she found a little bottle on it, ("which certainly was not here before,’ said Alice,) and round the neck of the bottle was a paper label, with the words "DRINK ME’ beautifully printed on it in large letters.
It was all very well to say "Drink me,’ but the wise little Alice was not going to do THAT in a hurry. "No, I’ll look first,’ she said, "and see whether it’s marked “poison” or not’; for she had read several nice little histories about children who had got burnt, and eaten up by wild beasts and other unpleasant things, all because they WOULD not remember the simple rules their friends had taught them: such as, that a red-hot poker will burn you if you hold it too long; and that if you cut your finger VERY deeply with a knife, it usually bleeds; and she had never forgotten that, if you drink much from a bottle marked "poison,’ it is almost certain to disagree with you, sooner or later.
However, this bottle was NOT marked "poison,’ so Alice ventured to taste it, and finding it very nice, (it had, in fact, a sort of mixed flavour of cherry-tart, custard, pine-apple, roast turkey, toffee, and hot buttered toast,) she very soon finished it off.
"What a curious feeling!’ said Alice; "I must be shutting up like a telescope.’
And so it was indeed: she was now only ten inches high, and her face brightened up at the thought that she was now the right size for going though the little door into that lovely garden. First, however, she waited for a few minutes to see if she was going to shrink any further: she felt a little nervous about this; "for it might end, you know,’ said Alice to herself, "in my going out altogether, like a candle. I wonder what I should be like then?’ And she tried to fancy what the flame of a candle is like after the candle is blown out, for she could not remember ever having seen such a thing.
After a while, finding that nothing more happened, she decided on going into the garden at once; but, alas for poor Alice! when she got to the door, she found he had forgotten the little golden key, and when she went back to the table for it, she found she could not possibly reach it: she could see it quite plainly through the glass, and she tried her best to climb up one of the legs of the table, but it was too slippery; and when she had tired herself out with trying, the poor little thing sat down and cried.
"Come, there’s no use in crying like that!’ said Alice to herself, rather sharply; "I advise you to leave off this minute!’ She generally gave herself very good advice, (though she very seldom followed it), and sometimes she scolded herself so severely as to bring tears into her eyes; and once she remembered trying to box her own ears for having cheated herself in a game of croquet she was playing against herself, for this curious child was very fond of pretending to be two people. "But it’s no use now,’ thought poor Alice, "to pretend to be two people! Why, there’s hardly enough of me left to make ONE respectable person!’
Soon her eye fell on a little glass box that was lying under the table: she opened it, and found in it a very small cake, on which the words "EAT ME’ were beautifully marked in currants. "Well, I’ll eat it,’ said Alice, "and if it makes me grow larger, I can reach the key; and if it makes me grow smaller, I can creep under the door; so either way I’ll get into the garden, and I don’t care which happens!’
She ate a little bit, and said anxiously to herself, "Which way? Which way?’, holding her hand on the top of her head to feel which way it was growing, and she was quite surprised to find that she remained the same size: to be sure, this generally happens when one eats cake, but Alice had got so much into the way of expecting nothing but out-of-the-way things to happen, that it seemed quite dull and stupid for life to go on in the common way.
So she set to work, and very soon finished off the cake.
---
You might be one of those people that perform
very well when it comes to sports. If you are
and you are in high school, you might have the
idea that your ability at a given sport could
end up putting you in line for a sports
scholarship that will either entirely pay for
college, or at least partially pay for your
higher education. However, there is more to
getting a scholarship than just being good at
sports. One thing you have to understand is that
with sports scholarships there are a few ways to
get them. For some, especially in the more high
profile sports like football and basketball, you
have a good chance at being recruited. Not all
scholarships that are sports related come from
athletes being recruited. In many cases, if you
are looking for a sports scholarship, for
whatever sport you happen to play, you might
just have to ask. With so many high school
athletes, it is conceivable that your talents at
a given sport are head and shoulders above most
people; but there is still the possibility you
will be overlooked. There are too many athletes
and only a small number of coaches and recruits,
comparatively speaking. Sometimes you will have
to contact a coach yourself, offer them up your
statistics, not only on the field of play but
your grades as well. However, if you have the
skills and you have the talent, and of course
you'll need the grades as well, you will
eventually find a sports scholarship that fits
your needs. The fact is that there are plenty of
sports scholarship to go around. Some might be
full scholarships, others might be partial
scholarships, and it is wise to not get too far
ahead of yourself and look for full scholarships
as the only option. While they do exist, they
are not easy to get and when it comes to paying
for college these days, any help paying for it
is welcome, or at least it should be.
The sport of mountain biking is one of the best
active sports you can do for a number of fitness
reasons and depending on what style of mountain
biking you partake in, it can also be a great
deal of fun and will keep you fit at the same
time. People are usually unaware of how many
muscles you use when riding a mountain bike, and
how quickly you can burn calories as it can be
an extremely good work out for the body. If you
plan on riding cross country along different
styles of trails, riding a bike can be quite a
task. If you're riding over long distances up
and down hills it can be very exhausting on the
legs and the lower back. So if you are just
starting to ride bikes for the first time,
please don't just jump on the bike and go for a
20 mile ride as it may do you more harm than
good. One thing that is recommended is to do
short rides to start with, only a couple of
miles which will take no time at all on a bike,
to get your fitness training up to par before
starting a longer bike ride. All of the major
athletes in the sport will tell you that
training is important and you should take part
in mountain bike fitness training whenever the
opportunity arises. One of the major benefits of
riding a mountain bike on a regular basis is
that in order to ride your bike you use some of
largest muscles in the body which in turn will
burn off fat quickly. This will of course help
you to lose weight and the more you ride your
bike the more weight you will lose. When you
ride your bike on flat ground at a slower speed
you are still burning a great amount of calories
due to the fact that you will be able to
continue that pedaling motion for a longer
period of time. This is also perfect for people
who don't have the stamina for a highly
intensive ride at different speeds and climbs.
Sedimentary rocks are formed at the surface of
the Earth, either in water or on land. They are
layered accumulations of sediments, fragments of
rocks, minerals, or animal or plant material. If
a layer of sediment is buried beneath overlying
rock, the layer becomes compacted and may form a
layer of sedimentary rock. The sediment becomes
cemented together by minerals and chemicals or
is held together by electrical attraction. Sand
and gravel deposits on beaches or in river bars
look like the sandstone and conglomerate they
may become. Compacted and dried mud flats harden
into shale. Mud and shells settling on sea
floors can cement into limestone. Sedimentary
rocks are important sources of natural resources
like coal, fossil fuels, drinking water or ores.
Fire is a chemical reaction between fuel and
oxygen. Heat is necessary to ignite the
reaction. Once a fire has been started, it
creates enough heat as a byproduct to keep
igniting new fuels. In nature, fuels can be
preheated by the sun. This can make them more
likely to ignite, either by human error, like a
dropped cigarette or unattended campfire, or by
lightning. Fuels themselves are abundant,
especially in forests that have not burned in
recent years. Oxygen is readily available in the
air we breathe. It has about 21% oxygen in it.
The positive effects of fire include stimulating
growth and maintaining various ecological
systems. The negative effects include water
contamination, soil erosion, atmospheric
pollution and hazard to human and animal life.
An earthquake is the result of a sudden release
of energy in the Earth's crust producing seismic
waves. Earthquakes occur most often along
geological faults. They are measured using
observations from seismometers. Magnitude 3 or
lower earthquakes are mostly undetectable and
magnitude 7 or greater can cause serious damage
over large areas, depending on their depth. The
shallower an earthquake, the more damage to
structures it causes. At the Earth's surface,
earthquakes manifest themselves by shaking and
sometimes displacement of the ground. When the
epicenter of a large earthquake is located
offshore, the seabed may be displaced
sufficiently to cause a tsunami. Earthquakes can
also trigger landslides, and volcanic activity.
Tiny poison dart frogs may only be one inch
long, but they pack a powerful punch, of poison.
Weighing less than an ounce, these frogs are
considered one of Earth's most toxic species.
For example, the golden poison dart frog has
enough poison to kill 20,000 mice. With a range
of bright colors, yellows, oranges, reds,
greens, blues, they aren't just big show offs,
either. Those colorful designs tell potential
predators, "I'm toxic; don't eat me". Scientists
think that poison dart frogs get their toxicity
from some of the insects they eat. The insects
feed on plants that have toxins, which then pass
to the frogs when they eat the insects. Poison
dart frogs raised in captivity aren't toxic
because the insects they are fed haven't eaten
poisonous plants. How do poison dart frogs
capture their prey? With a long, sticky tongue
that darts out and zaps the unsuspecting bug!
The frogs eat many kinds of small insects,
including fruit flies, ants, and tiny beetles,
which are the ones scientists think may be
responsible for the frogs' toxicity. Poison dart
frogs live in the rain forests of central and
south America and breed during the rainy season.
To attract a female, the male frog calls from a
leaf, making buzzing or trilling sounds. After
he's attracted a mate and she lays her eggs, the
male sticks around to make sure the eggs stay
moist until they hatch. Once the little ones
hatch, as tiny tadpoles, they wiggle on to the
male's back. He carries them to a pool of water,
where the tadpoles wiggle off and complete their
metamorphosis into fully formed frogs.
In 1912, Titanic is the largest man made moving
object in the world. She is as long as four city
blocks and wider than a four lane highway. Some
people say she is unsinkable. No expense has
been spared to build her. She is grand in every
way. Many wealthy and important people are
onboard for this trip. Tonight, the water is
calm. It looks as smooth as glass. Yet there may
be danger. Suddenly, something is seen ahead. It
looks dark against the starry sky. It's big and
it's close. Iceberg right ahead! Titanic moves
nearer and nearer to the iceberg. Slowly, the
ship begins to swing away. It looks like the
ship might miss the iceberg. Then comes a
grinding sound. Under the water, the iceberg is
much wider than it looks. Titanic scrapes
against it. The iceberg has slashed holes in the
side of one of the furnace rooms. As water
gushes through the holes, it nearly sweeps the
crewmen off their feet. Within minutes, the
cold, swirling seawater is up to their waists.
Seawater is also gushing through holes torn into
other sections of the ship. Titanic's hull has
16 sections. Doors can seal off each section if
they are damaged. The officer on the bridge
orders all the doors closed. He hopes this will
prevent disaster. He doesn't know that it's
already too late. The doors slow, but cannot
stop, the water. That's because the walls don't
reach the ceiling. As seawater fills each
section, the water spills over the wall into the
next section. The first five sections soon fill
with water.
As the number of overweight children in the
United States continues to climb, fitness is a
consideration that weighs heavily on the minds
of parents, caregivers and teachers. The risk of
health issues accompanying obesity among
children provokes many fears that unless parents
and children make significant changes in the
lifestyles inhabited by our kids, diabetes,
heart disease, and other weight related
conditions have the potential to run rampant
among American youth. Although encouraging a
healthy lifestyle, among children, that includes
physical activity and fitness is vital to
addressing issues associated with health
problems and obesity, the addition of kid's
fitness can also promote a lifelong love.
Fitness not only encourages physical activity,
keeping weight and accompanying conditions at
bay, it also helps protect children from
injuries that can occur when they are not
accustomed to physical activity, movement and
sports. Most injuries that plague children
completing physical activities occur as a result
of a lifestyle that lacks movement and activity
that can provide balance, coordination and
muscle memory necessary for a fit lifestyle.
Despite statistics praising physical activity
among children as a weight management tool and
method of decreasing injuries during activities
and sports, fitness among children boasts a
plethora of positive results and side effects.
Strong bones and joints, stress relief, self
confidence improvement and better academic
concentration are just some of the other
benefits touted by a child's active lifestyle.
Understanding what types of activities and
scheduling conflicts are preventing a child from
obtaining a sufficient amount of physical
activity and fitness can be a good way for
parents to begin to understand how and where
transformations can be made regarding kids'
health. Tracking the amount of activity a child
partakes can be as simple as gaining an
awareness of their school schedules and whether
they include physical education classes, recess
and other ways children participate in fitness
centered activities. Children who participate in
a variety of physically demanding activities at
school, such as extracurricular athletics or PE
classes may not need as much prompting and extra
fitness added to their day as a child who spends
more time still and sedentary. One of the best
ways parents, caregivers and teachers can prompt
children to compete in fitness activities and
grasp a healthy lifestyle is by striving toward
adopting a similar lifestyle that promotes and
values physical activity. Children with even one
obese parent have a 50 percent chance of being
obese themselves. Children with two obese
parents have an 80 percent chance of following
in their footsteps. Children who observe healthy
lifestyles in their parents and role models have
a better chance of adopting similar habits,
highlighting the vital role parents play in
influencing the fitness levels and physical
activity of children.
Hike through one of Iceland's many ancient lava
fields. You might notice something strange. The
ground in front of you is steaming. Plumes of
white steam rise from the ground. Iceland is
covered with steam vents and hot springs. The
steam comes from naturally heated rocks and hot
water below Earth's surface. The most famous of
Iceland's bubbling hot springs is Blue lagoon.
It is not far from the country's capital city.
You can visit the lagoon and soak in its
soothing, milky blue waters. Minerals and white
mud in the water make your skin as soft as a
newborn baby's skin. Icelanders tap into the
natural hot water for more than soaking. They
harness steam from hot water to spin turbines
and create electricity. People use the
electricity to heat homes and even greenhouses.
Learning to play the guitar can be an extremely
rewarding experience, but it is made even more
so if you find the right teacher who is also a
guide that will help you achieve your musical
goals with the right resources. The best
teachers always prepare and have a plan: it's
said in teaching that for every hour of teaching
you need to prepare twice as much. You should be
able to tell whether you're dealing with a
professional just with your first meeting. They
will determine where you are, where you are
trying to go and then propose a method for
getting you there. If you can tell that your
prospective teacher hasn't prepared for the
lesson and looks like they are making up stuff
on the spot, they probably are. Get away as fast
as you can.
Water covers 70 percent of Earth's surface, yet
most of it is unusable, which is why many people
around the world struggle to get enough of it.
Nearly 97 percent is salty or otherwise
undrinkable. Another two percent is locked up in
glaciers and ice caps. That leaves only one
percent. People, plants, and animals depend on
that one percent of fresh water. Each drop of
water is always on the move. The water we drink
is a liquid. It can also be a solid or a vapor.
No matter what state of matter it's in, all
water is connected. It constantly moves through
an endless cycle above, on, and through Earth.
The amount of water on our planet never changes.
There is the same amount now as there was when
Earth formed.
Valuable ores lay hidden beneath Death Valley.
These treasures included gold and silver. When
miners gave up on the gold fields in other parts
of California, many came to the desert. Most
mining settlements followed a predictable
pattern. First came the prospectors. They
searched for gold deposits. When they made a
strike, they staked a claim. Then they either
worked the claim themselves or sold it. Miners
came to Death Valley for more than gold. Some
came to mine a kind of salt. People used the
salt to make a substance called borax. It was
used to make glass, ceramics, and cleaning
products.
`.toLowerCase().replace(/[^a-z']/g, " ").replace(/\s+/g, " ").split(" ");