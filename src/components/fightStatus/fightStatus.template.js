export default `
<div class="game__status">
  <div class="player__field hero__field">
    <div class="player__frame hero__frame"></div>
    <div class="player__info">
      <div class="player__hp">
        <div class="player__hp-under">
          <span class="player__hp_value hero__hp_value">100hp</span>
          <div class="player__hp_bar hero__hp_bar"></div>   
        </div> 
      </div>
      <p class="player__name hero__name">Hero</p>
    </div>
  </div>
  <p class="game__level">Level 1</p>
  <div class="player__field monster__field"> 
    <div class="player__info">
      <div class="player__hp">
        <div class="player__hp-under">
          <span class="player__hp_value monster__hp_value">100hp</span>
          <div class="player__hp_bar monster__hp_bar"></div>
        </div>
      </div>  
      <p class="player__name monster__name">Monster</p>
    </div>  
    <div class="player__frame monster__frame"></div> 
  </div>
</div>
`;
