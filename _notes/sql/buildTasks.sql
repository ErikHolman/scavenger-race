insert into "Tasks" (task_id, task_name, parent_leg, task_details,task_type)
values
	(default, 'Proper Joe', 1, '{"instruction": "<p>If you’ve done this before you know how it goes. Get your driver a <b>PROPER</b> cup of <b>JOE</b></p><p>Head to 1st Street and park near PROPER JOE (1st and B). Head inside and buy your driver the drink of their choice. Once they have their drink and you are outside of the coffee shop, they’ll give you your next clue.</p>"}', 3),
	(default, 'Centennial Trail Man', 1, '{"question": "<p>Have your driver take you to <b>CADY PARK</b> (located on the river, accessed from 1st & Maple).</p><p>Park in the lot and follow the <b>BLUE</b> signs to the <b>CENTENNIAL TRAIL</b> trailhead.</p>", "instruction": "<p>Send a pic of <b>YOUR TEAM WITH THE MAN IN THE RED PANTS</b> to your group’s text message conversation to get your next clue.</p>", "icon": "📱"}', 3),
	(default, 'Snohomish River Trail', 1, '{"question": "<p>Follow the signs back to the <b>SNOHOMISH RIVER TRAIL</b>. Follow the trail until you’re standing on the trail below the Gazebo.</p>", "instruction": "<p>Send a pic of <b>YOUR TEAM WITH THE GAZEBO BEHIND YOU</b> to your group’s text message conversation to get your next clue.</p>","icon": "📱"}', 4),
	(default, 'Detour', 1, '{"question": "<p>Along this trail you might have noticed plaques/signs that provide information on how Snohomish was founded. Use the information <b>ALONG THE RIVER TRAIL</b> to find the answers and get your next clue!</p>", "instruction": "<p>Pick either <b>ENGLISH & MATH</b> or <b>HISTORY</b> and complete the task. You may switch tasks at any time.</p>","routeA": {"name": "English & Math", "question":"<p>Unscramble this word for a hint to find the right sign:</p><p><b>NKIP AMSLNO</b></p><p>Add together the three years the Snohomish River froze over for several weeks.</p>", "instruction":"<p>Text the <b>ANSWER</b> to your group’s text message conversation to get your next clue.</p>", "icon": "📱"},"routeB": {"name": "History", "question":"<p>In 1859 a cottage was delivered by steamship on the river. It was Snohomish’s first Post Office, Court House, and City Hall.</p>", "instruction":"<p>Text the <b>NAME OF THE COTTAGE</b> to your group’s text message conversation to get your next clue.</p>", "icon": "📱"}}', 1),
	(default, 'Find Phil', 1, '{"instruction": "<p>Get back in your car and have your driver take you back to the Holman houses. Park in the teardrop. Once your driver has parked, race for the mat and check-in!</p>"}', 4)