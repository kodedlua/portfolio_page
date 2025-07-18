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
    <div class="relative min-h-screen flex flex-col overflow-hidden">
        <div class="absolute top-20 -left-40 w-[500px] h-[350px] main-blob floating-blob rounded-full"></div>
        <div class="absolute top-1/3 -right-40 w-[450px] h-[300px] blob-2 floating-blob rounded-full"></div>
        <div class="absolute bottom-30 -left-32 w-[400px] h-[280px] blob-3 floating-blob rounded-full"></div>
        <div class="absolute top-1/2 -right-48 w-[380px] h-[250px] blob-4 floating-blob rounded-full"></div>
        <div class="absolute top-0 left-0 w-full h-screen pointer-events-none z-0" style="background-image: linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px); background-size: 50px 50px;"></div>
        <header class="relative flex items-center border-1 rounded-full w-5xl h-14 bg-basic border-[#333333] mx-auto mt-5 text-xl leading-normal">
            <a href="#"><div class="flex items-center gap-2 px-5 py-1 cursor-pointer">
                <svg width="30" height="30" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="mb-0.5 align-middle"><defs><mask id="m"><circle cx="50" cy="50" r="45" fill="white" /><text x="50%" y="55%" text-anchor="middle" dominant-baseline="middle" font-size="40" font-family="Arial" font-weight="bold" fill="black">K</text></mask></defs><circle cx="50" cy="50" r="45" fill="white" mask="url(#m)" /></svg>
                <p class="m-0 p-0 relative font-medium align-middle leading-none">Koded</p>
            </div></a>
            <div class="flex space-x-6 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <a href="#about" class="cursor-pointer text-[#adadad] rounded-full px-3 py-1 hover:text-[#EEEEEE] hover:bg-[#1e1d1d] leading-none"><p>O mnie</p></a>
                <a href="#" class="cursor-pointer text-[#adadad] rounded-full px-3 py-1 hover:text-[#EEEEEE] hover:bg-[#1e1d1d] leading-none"><p>Projekty</p></a>
                <a href="#" class="cursor-pointer text-[#adadad] rounded-full px-3 py-1 hover:text-[#EEEEEE] hover:bg-[#1e1d1d] leading-none"><p>Blog</p></a>
            </div>
            <a href="#contact">
                <div class="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-[2vw] bg-[#1E90FF] px-5 py-2 w-auto flex items-center cursor-pointer hover:inset-shadow-sm hover:text-[#EEEEEE]">
                    <p class="m-0 leading-none">Zkontaktuj się</p>
                </div>
            </a>
        </header>
        <div class="center mx-auto w-auto h-150 mt-20 text-center leading-normal">
            <div class="mt-75 mb-0 mx-auto w-max px-8 py-2 rounded-full bg-basic border-[#333333] border bg-opacity-100 text-xl text-white z-10 relative flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" /></svg>
                <p class="m-0">Jakub Wojtczak</p>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" /></svg>
            </div>
            <h1 class="text-8xl mt-0 pt-0 font-medium bg-gradient-to-b from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight">Buduję przyszłość,<br> nie wymówki.</h1>
        </div>
    </div>
    <div class="center mx-auto w-auto h-350 text-center leading-normal overflow-hidden mt-25" id="about">
        <div class="mt-100 mb-0 mt-0 pt-0 mx-auto w-max px-8 py-2 text-xl text-white z-10 relative flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" /></svg>
            <p class="m-0">O mnie</p>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" /></svg>
        </div>
        <h1 class="text-8xl mt-0 pt-0 font-medium bg-gradient-to-b from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight">Kreatywność, logika i technika</h1>
        <p class="text-4xl text-[#adadad]">Lepiej poznaj mnie, moją historie i moje umiejętności</p>
        <div class="mt-25 w-full flex justify-center">
            <div class="flex items-start max-w-7xl px-6 w-full mx-auto space-x-12">
                <img src="https://placehold.co/240x210" class="w-[240px] h-[210px] object-cover rounded shadow">
                <p class="flex-grow text-left leading-relaxed text-2xl text-[#adadad]">
                    Jestem tegorocznym absolwentem liceum ogólnokształcącego, a moją największą pasją od wielu lat są nowe technologie oraz świat komputerów.  
                    Programowaniem zainteresowałem się już w wieku 10 lat i od tego czasu konsekwentnie rozwijam swoje umiejętności w ramach samodzielnej, autodidaktycznej nauki.  
                    Szczególnie bliskie są mi języki Java i Python.  
                    Cechuje mnie szybkie przyswajanie wiedzy, swobodne poruszanie się w środowisku komputerowym oraz umiejętność logicznego myślenia i skutecznego rozwiązywania problemów.  
                    Programowanie to dla mnie nie tylko nauka, ale przede wszystkim pasja, która motywuje mnie do ciągłego rozwoju i poszukiwania nowych wyzwań.
                </p>
                <div class="max-w-lg">
                    <p class="text-4xl mb-6 font-medium text-white">Języki</p>
                    <ul class="space-y-2">
                    <li class="flex justify-between items-end">
                        <span class="text-xl ml-5 text-[#adadad]">Java</span>
                        <div class="flex ml-10 mb-2 space-x-1 items-end">
                        <div class="w-1 h-2 rounded" style="background-color: #B3D9FF;"></div>
                        <div class="w-1 h-3 rounded" style="background-color: #66B2FF;"></div>
                        <div class="w-1 h-4 rounded" style="background-color: #3399FF;"></div>
                        <div class="w-1 h-5 rounded" style="background-color: #1E90FF;"></div>
                        </div>
                    </li>
                    <li class="flex justify-between items-end">
                        <span class="text-xl ml-5 text-[#adadad]">Python</span>
                        <div class="flex ml-10 mb-2 space-x-1 items-end">
                        <div class="w-1 h-2 rounded" style="background-color: #B3D9FF;"></div>
                        <div class="w-1 h-3 rounded" style="background-color: #66B2FF;"></div>
                        <div class="w-1 h-4 rounded" style="background-color: #3399FF;"></div>
                        <div class="w-1 h-5 rounded" style="background-color: #333333;"></div>
                        </div>
                    </li>
                    <li class="flex justify-between items-end">
                        <span class="text-xl ml-5 text-[#adadad]">Lua</span>
                        <div class="flex ml-10 mb-2 space-x-1 items-end">
                        <div class="w-1 h-2 rounded" style="background-color: #B3D9FF;"></div>
                        <div class="w-1 h-3 rounded" style="background-color: #66B2FF;"></div>
                        <div class="w-1 h-4 rounded" style="background-color: #3399FF;"></div>
                        <div class="w-1 h-5 rounded" style="background-color: #333333;"></div>
                        </div>
                    </li>
                    <li class="flex justify-between items-end">
                        <span class="text-xl ml-5 text-[#adadad]">JavaScript</span>
                        <div class="flex ml-10 mb-2 space-x-1 items-end">
                        <div class="w-1 h-2 rounded" style="background-color: #B3D9FF;"></div>
                        <div class="w-1 h-3 rounded" style="background-color: #66B2FF;"></div>
                        <div class="w-1 h-4 rounded" style="background-color: #333333;"></div>
                        <div class="w-1 h-5 rounded" style="background-color: #333333;"></div>
                        </div>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</main>