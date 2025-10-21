<script>
    import { onMount } from "svelte";
    import { currentLoc } from "./stores";
    import { localization } from "./localization";
    import 'flag-icons/css/flag-icons.min.css';

    function detectLocalization() {
        const path = window.location.pathname;
        const locFromPath = path.split("/")[1];
        return locFromPath === "pl" || locFromPath === "en" ? locFromPath : "pl";
    }

    /**
   * @param {string} newLocal
   */
    function changeLocalization(newLocal) {
        currentLoc.set(newLocal);
        window.history.pushState({}, "", `/${newLocal}/`);
    }

    /**
   * @param {string} __t
   */
    function t(__t) {
        const str = __t.split('.').reduce((/** @type {any} */ o, /** @type {string | number} */ k) => (o || {})[k], localization[local]);
        if (!str) {
            console.log(`Failed to get translation for ${local}:${__t}`)
            return `<p class="!text-red-500">[${local}:${__t}]</p>`
        }
        return str.replace(/@([^@]+)@/g, (/** @type {any} */ _, /** @type {any} */ htmlPart) => htmlPart);
    }

    function toggleLanguageButton() {
        changeLocalization(local === 'pl' ? 'en' : 'pl')
    }

    let local;
    currentLoc.subscribe(value => {
        local = value;
    });

    onMount(() => {
        const initialLoc = detectLocalization();

        if (!window.location.pathname.startsWith(`/${initialLoc}`)) {
            window.history.pushState({}, "", `/${initialLoc}/`);
        }
        currentLoc.set(initialLoc);
        console.log(initialLoc);
    })

    let copiedDiscord = false;

    /**
   * @param {{ preventDefault: () => void; }} event
   */
    function copyDiscord(event) {
        event.preventDefault();
        navigator.clipboard.writeText("koded070")
        .then(() => {
            copiedDiscord = true;
            setTimeout(() => copiedDiscord = false, 800);
        })
        .catch(err => console.error('err trying to copy discord username! username=koded070', err));
    }
</script>

<main>
    <header class="fixed flex top-5 items-center z-[9999] rounded-full w-5xl border-2 h-14 bg-basic border-[#333333] left-1/2 -translate-x-1/2 text-xl">
        <a href="https://koded.pl">
            <div class="flex items-center gap-2 px-5 py-1 cursor-pointer">
                <svg width="30" height="30" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="mb-0.5 align-middle">
                    <defs>
                        <mask id="m">
                            <circle cx="50" cy="50" r="45" fill="white" />
                            <text x="50%" y="55%" text-anchor="middle" dominant-baseline="middle" font-size="40" font-family="Arial" font-weight="bold" fill="black">K</text>
                        </mask>
                    </defs>
                    <circle cx="50" cy="50" r="45" fill="white" mask="url(#m)" />
                </svg>
                <p class="m-0 p-0 relative font-medium align-middle leading-none">Koded</p>
            </div>
        </a>
        <div class="flex space-x-6 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <a href="#about" class="cursor-pointer text-[#adadad] rounded-full px-3 py-1 hover:text-[#EEEEEE] hover:bg-[#1e1d1d] leading-none">
                <p>{@html t("general.about")}</p>
            </a>
            <a href="#experience" class="cursor-pointer text-[#adadad] rounded-full px-3 py-1 hover:text-[#EEEEEE] hover:bg-[#1e1d1d] leading-none">
                <p>{@html t("general.experience")}</p>
            </a>
            <a href="#projects" class="cursor-pointer text-[#adadad] rounded-full px-3 py-1 hover:text-[#EEEEEE] hover:bg-[#1e1d1d] leading-none">
                <p>{@html t("general.projects")}</p>
            </a>
        </div>
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div on:click="{toggleLanguageButton}" aria-label="Change language" class="absolute right-1/6 cursor-pointer hover:text-2xl duration-300 ease-in-out text-center">
            {#if local === 'en'}
            <span class="fi fi-pl"></span>
            {:else if local === 'pl'}
            <span class="fi fi-us"></span>
            {/if}
        </div>
        <a href="#contact">
            <div class="absolute right-2.5 max-w-38 top-1/2 -translate-y-1/2 rounded-[2vw] bg-[#1E90FF] px-5 py-2 w-auto flex items-center cursor-pointer hover:inset-shadow-sm hover:text-[#EEEEEE]">
                <p class="m-0 leading-none">{@html t("header.contactButton")}</p>
            </div>
        </a>
    </header>
    <div class="top-0 min-h-screen flex flex-col relative mb-25">
        <div class="absolute top-20 -left-40 w-[500px] h-[350px] main-blob floating-blob rounded-full"></div>
        <div class="absolute top-1/3 -right-40 w-[450px] h-[300px] blob-2 floating-blob rounded-full"></div>
        <div class="absolute bottom-30 -left-32 w-[400px] h-[280px] blob-3 floating-blob rounded-full"></div>
        <div class="absolute top-1/2 -right-48 w-[380px] h-[250px] blob-4 floating-blob rounded-full"></div>
        <div
            class="absolute top-0 left-0 w-full h-screen pointer-events-none z-0"
            style="background-image: linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px); background-size: 50px 50px;"
            ></div>
        <div class="center mx-auto w-auto h-150 mt-20 text-center leading-normal">
            <div class="mt-75 mb-0 mx-auto w-max px-8 py-2 rounded-full bg-basic border-[#333333] border-2 bg-opacity-100 text-xl text-white z-10 relative flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <p class="m-0 p-0">
                    {@html t("intro.title")}
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </div>
            <h1 class="text-8xl mt-0 pt-0 font-medium bg-gradient-to-b from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight">{@html t("intro.subtitle")}</h1>
        </div>
    </div>
    <div id="about" class="min-h-25"><!--brings user higher then the element itself :)--></div>
    <div class="center mx-auto w-auto h-380 text-center leading-normal overflow-hidden">
        <div class="mb-0 pt-0 mx-auto w-max px-8 py-2 text-xl text-white z-10 relative flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <p class="m-0">
                {@html t("general.about")}
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
        </div>
        <h1 class="text-8xl mt-0 pt-0 font-medium bg-gradient-to-b from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight">{@html t("about.subtitle")}</h1>
        <p class="text-4xl text-[#adadad]">{@html t("about.description")}</p>
        <div class="mt-25 w-full flex justify-center">
            <div class="flex items-start max-w-7xl px-6 w-full mx-auto space-x-12">
                <!-- svelte-ignore a11y_img_redundant_alt -->
                <img src="/assets/avatar.png" alt="Creator photo" class="w-[240px] h-[210px] object-cover rounded shadow" />
                <p class="flex-grow text-left leading-relaxed text-2xl text-[#adadad]">
                    {@html t("about.bio")}
                </p>
                <div class="max-w-lg">
                    <p class="text-4xl mb-6 font-medium text-white">{@html t("general.languages")}</p>
                    <ul class="space-y-2">
                        <li class="flex justify-between items-end">
                            <span class="text-xl ml-5 text-[#adadad]">Java</span>
                            <div class="flex ml-10 mb-2 space-x-1 items-end">
                                <div class="w-1 h-2 rounded" style="background-color: #b3d9ff;"></div>
                                <div class="w-1 h-3 rounded" style="background-color: #66b2ff;"></div>
                                <div class="w-1 h-4 rounded" style="background-color: #3399ff;"></div>
                                <div class="w-1 h-5 rounded" style="background-color: #1e90ff;"></div>
                            </div>
                        </li>
                        <li class="flex justify-between items-end">
                            <span class="text-xl ml-5 text-[#adadad]">Python</span>
                            <div class="flex ml-10 mb-2 space-x-1 items-end">
                                <div class="w-1 h-2 rounded" style="background-color: #b3d9ff;"></div>
                                <div class="w-1 h-3 rounded" style="background-color: #66b2ff;"></div>
                                <div class="w-1 h-4 rounded" style="background-color: #3399ff;"></div>
                                <div class="w-1 h-5 rounded" style="background-color: #333333;"></div>
                            </div>
                        </li>
                        <li class="flex justify-between items-end">
                            <span class="text-xl ml-5 text-[#adadad]">Lua</span>
                            <div class="flex ml-10 mb-2 space-x-1 items-end">
                                <div class="w-1 h-2 rounded" style="background-color: #b3d9ff;"></div>
                                <div class="w-1 h-3 rounded" style="background-color: #66b2ff;"></div>
                                <div class="w-1 h-4 rounded" style="background-color: #3399ff;"></div>
                                <div class="w-1 h-5 rounded" style="background-color: #333333;"></div>
                            </div>
                        </li>
                        <li class="flex justify-between items-end">
                            <span class="text-xl ml-5 text-[#adadad]">JavaScript</span>
                            <div class="flex ml-10 mb-2 space-x-1 items-end">
                                <div class="w-1 h-2 rounded" style="background-color: #b3d9ff;"></div>
                                <div class="w-1 h-3 rounded" style="background-color: #66b2ff;"></div>
                                <div class="w-1 h-4 rounded" style="background-color: #333333;"></div>
                                <div class="w-1 h-5 rounded" style="background-color: #333333;"></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div id="experience"><!--brings user higher then the element itself :)--></div>
        <div class="grid justify-center gap-6 mx-auto p-6 bg-basic rounded-2xl shadow-lg mt-20 grid-cols-3 max-w-7xl">
            <div class="flex flex-col bg-[#111] border-[#333333] border rounded-2xl p-6 max-w-100">
                <p class="text-2xl font-semibold text-left text-white">{@html t("about.experience_1.title")}</p>
                <p class="text-m text-left text-[#adadad]">{@html t("about.experience_1.time")}</p>
                <p class="text-[#adadad] text-left mt-5">{@html t("about.experience_1.description")}</p>
                <div class="flex justify-left gap-2 mt-auto">
                    <div class="inline-block bg-[#1E90FF] text-white text-sm font-medium px-4 py-1 rounded-full mt-4">
                        <p>JavaScript</p>
                    </div>
                    <div class="inline-block bg-[#1E90FF] text-white text-sm font-medium px-4 py-1 rounded-full mt-4">
                        <p>TypeScript</p>
                    </div>
                    <div class="inline-block bg-[#333333] text-white text-sm font-medium px-4 py-1 rounded-full mt-4">
                        <p>Svelte</p>
                    </div>
                    <div class="inline-block bg-[#333333] text-white text-sm font-medium px-4 py-1 rounded-full mt-4">
                        <p>NodeJS</p>
                    </div>
                </div>
                <div class="flex justify-left gap-2">
                    <div class="inline-block bg-[#333333] text-white text-sm font-medium px-4 py-1 rounded-full mt-4">
                        <p>Vite</p>
                    </div>
                </div>
            </div>
            <div class="flex flex-col bg-[#111] border-[#333333] border rounded-2xl p-6 min-w-100">
                <p class="text-2xl font-semibold text-left text-white">{@html t("about.experience_2.title")}</p>
                <p class="text-m text-left text-[#adadad]">{@html t("about.experience_2.time")}</p>
                <p class="text-[#adadad] text-left mt-5">{@html t("about.experience_2.description")}</p>
                <div class="flex justify-left gap-2 mt-auto">
                    <div class="inline-block bg-[#1E90FF] text-white text-sm font-medium px-4 py-1 rounded-full mt-4">
                        <p>Java (2025)</p>
                    </div>
                    <div class="inline-block bg-[#1E90FF] text-white text-sm font-medium px-4 py-1 rounded-full mt-4">
                        <p>PHP</p>
                    </div>
                    <div class="inline-block bg-[#1E90FF] text-white text-sm font-medium px-4 py-1 rounded-full mt-4">
                        <p>Python</p>
                    </div>
                    <div class="inline-block bg-[#333333] text-white text-sm font-medium px-4 py-1 rounded-full mt-4">
                        <p>Spring Boot</p>
                    </div>
                </div>
                <div class="flex justify-left gap-2">
                    <div class="inline-block bg-[#333333] text-white text-sm font-medium px-4 py-1 rounded-full mt-4">
                        <p>Flask</p>
                    </div>
                </div>
            </div>
            <div class="flex flex-col bg-[#111] border-[#333333] border rounded-2xl p-6 max-w-100">
                <p class="text-2xl font-semibold text-left text-white">{@html t("about.experience_3.title")}</p>
                <p class="text-m text-left text-[#adadad]">{@html t("about.experience_3.time")}</p>
                <p class="text-[#adadad] text-left mt-5">{@html t("about.experience_3.description")}</p>
                <div class="flex justify-left gap-2 mt-auto">
                    <div class="inline-block bg-[#1E90FF] text-white text-sm font-medium px-4 py-1 rounded-full mt-4">
                        <p>Java</p>
                    </div>
                    <div class="inline-block bg-[#333333] text-white text-sm font-medium px-4 py-1 rounded-full mt-4">
                        <p>BungeeCord</p>
                    </div>
                    <div class="inline-block bg-[#333333] text-white text-sm font-medium px-4 py-1 rounded-full mt-4">
                        <p>Paper</p>
                    </div>
                    <div class="inline-block bg-[#333333] text-white text-sm font-medium px-4 py-1 rounded-full mt-4">
                        <p>MySQL</p>
                    </div>
                </div>
                <div class="flex justify-left gap-2">
                    <div class="inline-block bg-[#333333] text-white text-sm font-medium px-4 py-1 rounded-full mt-4">
                        <p>Maven</p>
                    </div>
                    <div class="inline-block bg-[#333333] text-white text-sm font-medium px-4 py-1 rounded-full mt-4">
                        <p>Linux</p>
                    </div>
                </div>
            </div>
            <div class="flex flex-col bg-[#111] border-[#333333] border rounded-2xl p-6 max-w-100">
                <p class="text-2xl font-semibold text-left text-white">{@html t("about.experience_4.title")}</p>
                <p class="text-m text-left text-[#adadad]">{@html t("about.experience_4.time")}</p>
                <p class="text-[#adadad] text-left mt-5">{@html t("about.experience_4.description")}</p>
                <div class="flex justify-left gap-2 mt-auto">
                    <div class="inline-block bg-[#1E90FF] text-white text-sm font-medium px-4 py-1 rounded-full mt-4">
                        <p>Lua</p>
                    </div>
                    <div class="inline-block bg-[#1E90FF] text-white text-sm font-medium px-4 py-1 rounded-full mt-4">
                        <p>SQL</p>
                    </div>
                    <div class="inline-block bg-[#333333] text-white text-sm font-medium px-4 py-1 rounded-full mt-4">
                        <p>Linux</p>
                    </div>
                    <div class="inline-block bg-[#333333] text-white text-sm font-medium px-4 py-1 rounded-full mt-4">
                        <p>MySQL</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="projects" class="mb-25"><!--brings user higher then the element itself :)--></div>
    <div class="center mx-auto w-full max-w-6xl h-auto text-center leading-normal overflow-hidden">
        <div class="mb-0 mt-0 pt-0 mx-auto w-max px-8 py-2 text-xl text-white z-10 relative flex items-center gap-3 justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <p class="m-0">{@html t("projects.title")}</p>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
        </div>
        <h1 class="text-8xl mt-0 pt-0 font-medium bg-gradient-to-b from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight">{@html t("projects.subtitle")}</h1>
        <p class="text-4xl text-[#adadad] mb-12">{@html t("projects.description")}</p>
        <div class="grid justify-center mx-auto p-6 bg-basic rounded-2xl shadow-lg grid-cols-2 min-w-10xl">
            <div class="flex flex-col bg-[#111] border-[#333333] border rounded-2xl p-6 max-w-125">
                <div class="flex items-center justify-between">
                    <p class="text-2xl font-semibold text-left text-white">
                        {@html t("projects.project_1.title")}
                    </p>
                    <div class="flex justify-center space-x-6 text-[#adadad] text-2xl self-center">
                        <a href="https://github.com/kodedlua/portfolio_page/" aria-label="GitHub" class="hover:text-[#EEEEEE] transition-colors duration-200">
                            <i class="fa-brands fa-github"></i>
                        </a>
                        <a href="https://koded.pl" aria-label="External Link" class="hover:text-[#EEEEEE] transition-colors duration-200">
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </a>
                    </div>
                </div>
                <p class="text-[#adadad] text-left mt-5">{@html t("projects.project_1.description")}</p>
                <div class="flex justify-left gap-2 mt-auto">
                    <div class="inline-block bg-[#1E90FF] text-white text-sm font-medium px-4 py-1 rounded-full mt-4">
                        <p>JavaScript</p>
                    </div>
                    <div class="inline-block bg-[#1E90FF] text-white text-sm font-medium px-4 py-1 rounded-full mt-4">
                        <p>TypeScript</p>
                    </div>
                    <div class="inline-block bg-[#333333] text-white text-sm font-medium px-4 py-1 rounded-full mt-4">
                        <p>Svelte</p>
                    </div>
                    <div class="inline-block bg-[#333333] text-white text-sm font-medium px-4 py-1 rounded-full mt-4">
                        <p>Vite</p>
                    </div>
                </div>
                <div class="flex justify-left gap-2">
                    <div class="inline-block bg-[#333333] text-white text-sm font-medium px-4 py-1 rounded-full mt-4">
                        <p>TailwindCSS</p>
                    </div>
                </div>
            </div>
            <div class="flex flex-col bg-[#111] border-[#333333] border rounded-2xl p-6 max-w-125">
                <div class="flex items-center justify-between">
                    <p class="text-2xl font-semibold text-left text-white">
                        {@html t("projects.project_2.title")}
                    </p>
                    <div class="flex justify-center space-x-6 text-[#adadad] text-2xl self-center">
                        <a href="https://github.com/kodedlua/fintrix_backend" aria-label="GitHub" class="hover:text-[#EEEEEE] transition-colors duration-200">
                            <i class="fa-brands fa-github"></i>
                        </a>
                    </div>
                </div>
                <p class="text-[#adadad] text-left mt-5">{@html t("projects.project_2.description")}</p>
                <div class="flex justify-left gap-2 mt-auto">
                    <div class="inline-block bg-[#1E90FF] text-white text-sm font-medium px-4 py-1 rounded-full mt-4">
                        <p>Java</p>
                    </div>
                    <div class="inline-block bg-[#333333] text-white text-sm font-medium px-4 py-1 rounded-full mt-4">
                        <p>Spring Boot</p>
                    </div>
                    <div class="inline-block bg-[#333333] text-white text-sm font-medium px-4 py-1 rounded-full mt-4">
                        <p>Maven</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="center mx-auto w-full max-w-6xl h-auto text-center leading-normal overflow-hidden mt-80 pb-10" id="contact">
        <div class="mb-0 mt-0 pt-0 mx-auto w-max px-8 py-2 text-xl text-white z-10 relative flex items-center gap-3 justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <p class="m-0">{@html t("general.contact")}</p>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
        </div>
        <h1 class="text-8xl mt-0 pt-0 font-medium bg-gradient-to-b from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight">{@html t("contact.subtitle")}</h1>
        <p class="text-4xl text-[#adadad] mb-12">{@html t("contact.description")}</p>
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div class="flex justify-center gap-6 max-w-4xl mx-auto p-6 bg-basic rounded-2xl shadow-lg">
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <div class="relative">
                <div class="flex flex-col items-center bg-[#111] border-[#333333] border rounded-2xl p-6 w-48 text-center cursor-pointer hover:bg-[#222] transition-colors duration-300" on:click="{copyDiscord}">
                    <div class="bg-[#1e1d1d] rounded-full p-4 mb-4">
                        <i class="fa-brands fa-discord text-white text-2xl"></i>
                    </div>
                </div>
                {#if copiedDiscord}
                <div class="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-[9999]">
                    <div class="relative bg-[#1E90FF] text-white text-sm px-3 py-1 rounded shadow-lg">
                        {@html t("contact.discordCopySuccess")}
                        <div class="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#1E90FF] rotate-45"></div>
                    </div>
                </div>
                {/if}
            </div>
            <!-- svelte-ignore a11y_consider_explicit_label -->
            <a href="mailto:kubawojt90@gmail.com">
                <div class="flex flex-col items-center bg-[#111] border-[#333333] border rounded-2xl p-6 w-60 text-center cursor-pointer hover:bg-[#222] transition-colors duration-300">
                    <div class="bg-[#1e1d1d] rounded-full p-4 mb-4">
                        <i class="fa-solid fa-envelope text-white text-2xl"></i>
                    </div>
                </div>
            </a>
            <!-- svelte-ignore a11y_consider_explicit_label -->
            <a href="https://github.com/kodedlua">
                <div class="flex flex-col items-center bg-[#111] border-[#333333] border rounded-2xl p-6 w-48 text-center cursor-pointer hover:bg-[#222] transition-colors duration-300">
                    <div class="bg-[#1e1d1d] rounded-full p-4 mb-4">
                        <i class="fa-brands fa-github text-white text-2xl"></i>
                    </div>
                </div>
            </a>
        </div>
    </div>
    <div class="mt-100"></div>
</main>