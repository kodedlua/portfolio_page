<script>
  let copied = false;
  const textToCopy = 'koded070';

  function copyDiscord(event) {
    event.preventDefault();
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        copied = true;
        setTimeout(() => copied = false, 800);
      })
      .catch(err => console.error('err trying to copy discord username! username=koded070:', err));
  }
</script>
<main>
    <div class="min-h-screen bg-black flex flex-col">
            <header class="pt-8 pl-8">
                <div class="logo-container">
                    <h1 class="text-2xl font-light text-white">
                        Jakub
                    </h1>
                    <h1 class="text-2xl font-light text-white">
                        Wojtczak
                    </h1>
                </div>
            </header>
            <div class="flex-1"></div>
            <div class="pb-16 pr-16 flex justify-end items-end">
                <div class="w-full max-w-3xl text-right">
                    <h2 class="text-6xl md:text-7xl lg:text-8xl font-extralight mb-8 leading-tight text-right">
                        <span class="text-white">Witaj</span>
                    </h2>
                    
                    <p class="text-gray-300 text-xl md:text-2xl lg:text-3xl mb-12 leading-relaxed text-right max-w-4xl ml-auto break-keep">
                        Jestem tegorocznym absolwentem liceum ogólnokształcącego, a moją największą pasją od wielu lat są nowe technologie oraz świat komputerów. <br> 
                        Programowaniem zainteresowałem się już&nbsp;w&nbsp;wieku&nbsp;10&nbsp;lat i od tego czasu konsekwentnie&nbsp;rozwijam swoje umiejętności w ramach samodzielnej, autodidaktycznej nauki. <br>
                        Szczególnie bliskie są mi języki Java i Python. <br>
                        Cechuje mnie szybkie przyswajanie wiedzy, swobodne poruszanie się w środowisku komputerowym oraz umiejętność logicznego myślenia i skutecznego rozwiązywania problemów. <br> 
                        Programowanie to dla mnie nie tylko nauka, ale przede wszystkim pasja, która motywuje mnie do ciągłego rozwoju i poszukiwania nowych wyzwań.
                    </p>
                    
                    <div class="space-y-6 text-right">
                        <p class="text-gray-400 text-lg md:text-xl lg:text-2xl">
                            Chcesz się zkontakować?<br>
                            Wyślij mi e-mail na <a href="mailto:kubawojt90@gmail.com" class="text-blue-500 hover:underline"><span class="text-blue-400 hover:text-blue-300 transition-colors">kubawojt90@gmail.com</span></a><br>
                            albo wiadomość na <a href="" on:click={copyDiscord} title="koded070" class="text-blue-500 hover:underline"><span class="text-blue-400 hover:text-blue-300 transition-colors">{copied ? 'Skopiowano' : 'Discordzie'}</span></a>.
                        </p>
                        <p class="text-gray-400 text-lg md:text-xl lg:text-2xl">
                            Chcesz zobaczyć moje projekty? <br>
                            Odwiedź mojego <a href="https://github.koded.pl" class="text-blue-500 hover:underline"><span class="text-blue-400 hover:text-blue-300 transition-colors">Githuba</span></a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </main>