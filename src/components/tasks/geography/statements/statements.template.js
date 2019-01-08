export default `
<section class="task__modal geography__statements">
    <h2 class="geography__explanation"></h2>
	<div class="statements__container">
		<span class="statements__sentence"></span>
		<div class="statements__answers">
			<p>
				<input type="radio" id="geography__statements_true" name="statements-group">
				<label for="geography__statements_true" class="statements__item">True</label>
			</p>
			<p>
				<input type="radio" id="geography__statements_false" name="statements-group">
				<label for="geography__statements_false" class="statements__item">False</label>
			</p>
		</div>
	</div>
	<button id='task_answer' class="answer__btn">Answer</button>
</section>
`;
