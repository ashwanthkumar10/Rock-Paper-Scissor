<script>

function rock()

{

  let resultmsg;

  let compMove=Math.random()

  if(compMove>=0 && compMove<=1/3)

   compMove='rock'

  else if(compMove>1/3 && compMove<=2/3)

   compMove='paper'

  else

   compMove='scissor'

    // the function itself choses the default rock, if the random function which return random nums == the either of these moves then it checks individually lile compMove==rock scissorand paper

    if('rock'===compMove)

    {

      resultmsg="The Match ties"

    }

    else if('paper'=== compMove)

    {

      resultmsg='rock beats paper'

    }

    else{

      resultmsg= 'rock beats scissor'

    }

  document.getElementById('result').textContent=resultmsg;

}

function paper()

{

  let resultmsg;

  let compMove=Math.random()

  if(compMove>=0 && compMove<=1/3)

   compMove='rock'

  else if(compMove>1/3 && compMove<=2/3)

   compMove='paper'

  else

   compMove='scissor'

    if('rock'===compMove)

    {

      resultmsg="The Paper beats rock" // compMove choses paper

    }

    else if( 'paper'=== compMove)

    {

      resultmsg='The match ties'//compMovechose paper

    }

    else{

      resultmsg= 'Paper lose'

    }

  document.getElementById('result').textContent=resultmsg;

}

function scissor()

{

  let resultmsg;

  let compMove=Math.random()

  if(compMove>=0 && compMove<=1/3)

   compMove='rock'

  else if(compMove>1/3 && compMove<=2/3)

   compMove='paper'

  else

   compMove='scissor'

    if('rock'===compMove)

    {

      resultmsg="The Scissor loses to rock" // compMove choses paper

    }

    else if( 'paper'=== compMove)

    {

      resultmsg='The scissor cuts paper'//compMovechose paper

    }

    else{

      resultmsg= 'The match ties'

    }

  document.getElementById('result').textContent=resultmsg;

}

</script>