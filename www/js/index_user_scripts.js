var historyStack = [];
var lsKirjat;
var lsTehtavat;
var lsOmatKirjat;
var omatKirjat = [];
var callingTask;
var currentPage = "";
var tempKirja;
var tempId;
var showingKlassikot = true;
var showingRunot = false;
var showingElamakerrat = false;
var showingSarjakuvat = false;
var showingLifehappens = false;
var showingJannitys = false;
var showingFantasia = false;
var showingScifi = false;
var showingTieto = false;
var showingKirjaJaElokuva = false;
var showingRomantiikka = false;
var firstTime = true;

/*jshint browser:true */
/*global $ */(function()
{
 "use strict";

 /*
   hook up event handlers
 */

 function register_event_handlers()
 {
	 	currentPage = "aloitussivu";

        /* Footer "Kirjalista" button */
    $(document).on("touchend", "#kirjalistaButton", function(evt)
    {
        /* your code goes here */
        historyStack.push(currentPage);
        openKirjalista();
        return false;
    });

     function openKirjalista(){
        currentPage = "kirjalista";
        document.getElementById("headerText").innerHTML = "Kirjalista";
			 	document.getElementById("backButton").classList.remove('hidden');
        document.getElementById("kirjalista").classList.remove('hidden');
        document.getElementById("aloitussivu").classList.add('hidden');
        document.getElementById("tehtavalista").classList.add('hidden');
        document.getElementById("omat_kirjat").classList.add('hidden');
        document.getElementById("etsi_kirjoja").classList.add('hidden');
        document.getElementById("kirja_info").classList.add('hidden');
        document.getElementById("valitse_kirja").classList.add('hidden');
			 	document.getElementById("kirjalistaButton").classList.add('footerButtonBackgroundSelected');
				document.getElementById("kirjalistaButton").classList.remove('footerButtonBackground');
				document.getElementById("kirjalistaButton").classList.remove('whiteText');
				document.getElementById("tehtavalistaButton").classList.add('footerButtonBackground');
				document.getElementById("tehtavalistaButton").classList.add('whiteText');
				document.getElementById("omatKirjatButton").classList.add('footerButtonBackground');
				document.getElementById("omatKirjatButton").classList.add('whiteText');
				document.getElementById("etsiKirjojaButton").classList.add('footerButtonBackground');
				document.getElementById("etsiKirjojaButton").classList.add('whiteText');
		 		document.getElementById("tehtavalistaButton").classList.remove('footerButtonBackgroundSelected');
		 		document.getElementById("omatKirjatButton").classList.remove('footerButtonBackgroundSelected');
		 		document.getElementById("etsiKirjojaButton").classList.remove('footerButtonBackgroundSelected');

			 	if (firstTime){
					document.getElementById("klassikot").style.display = "inline";
					var klassikotHtml = kirjaTemplate({kirjat: klassikot});
          $("#klassikotContent").html(klassikotHtml);
					firstTime = false;
				}
        return false;
     }

        /* Footer "Tehtävälista" button */
    $(document).on("touchend", "#tehtavalistaButton", function(evt)
    {
        /* your code goes here */
        historyStack.push(currentPage);
        openTehtavalista();
        return false;
    });

	 $(document).on("touchend", "#klassikotButton", function(evt)
    {
		 if (showingKlassikot){
			 document.getElementById("klassikotButton").classList.remove('ryhmaButtonPressed');
			 document.getElementById("klassikot").style.display = "none";
			 showingKlassikot = false;
		 }else{
			 document.getElementById("runotJaNovellit").style.display = "none";
			 document.getElementById("runotButton").classList.remove('ryhmaButtonPressed');
			 document.getElementById("elamakerrat").style.display = "none";
			 document.getElementById("elamakerratButton").classList.remove('ryhmaButtonPressed');
			 document.getElementById("sarjakuvat").style.display = "none";
			 document.getElementById("sarjakuvatButton").classList.remove('ryhmaButtonPressed');
			 document.getElementById("lifehappens").style.display = "none";
			 document.getElementById("lifeButton").classList.remove('ryhmaButtonPressed');
			 document.getElementById("jannitysJaKauhu").style.display = "none";
			 document.getElementById("jannitysButton").classList.remove('ryhmaButtonPressed');
			 document.getElementById("fantasiakirjallisuus").style.display = "none";
			 document.getElementById("fantasiaButton").classList.remove('ryhmaButtonPressed');
			 document.getElementById("scifikirjallisuus").style.display = "none";
			 document.getElementById("scifiButton").classList.remove('ryhmaButtonPressed');
			 document.getElementById("romantiikkaJaHistoriallisetTarinat").style.display = "none";
			 document.getElementById("romantiikkaButton").classList.remove('ryhmaButtonPressed');
			 document.getElementById("kirjaJaElokuva").style.display = "none";
			 document.getElementById("kirjaJaElokuvaButton").classList.remove('ryhmaButtonPressed');
			 document.getElementById("tietokirjat").style.display = "none";
			 document.getElementById("tietoButton").classList.remove('ryhmaButtonPressed');
			 document.getElementById("klassikotButton").classList.add('ryhmaButtonPressed');
			 document.getElementById("klassikot").style.display = "inline";
			 var klassikotHtml = kirjaTemplate({kirjat: klassikot});
     	 $("#klassikotContent").html(klassikotHtml);
				showingKlassikot = true;
				showingRunot = false;
				showingElamakerrat = false;
				showingSarjakuvat = false;
				showingLifehappens = false;
				showingJannitys = false;
				showingFantasia = false;
				showingScifi = false;
				showingTieto = false;
				showingKirjaJaElokuva = false;
				showingRomantiikka = false;
		 }
    });

	  $(document).on("touchend", "#runotButton", function(evt)
    {
			if (showingRunot){
			 	document.getElementById("runotButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("runotJaNovellit").style.display = "none";
				showingRunot = false;
		 	}else{
				document.getElementById("klassikot").style.display = "none";
				document.getElementById("klassikotButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("elamakerrat").style.display = "none";
				document.getElementById("elamakerratButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("sarjakuvat").style.display = "none";
				document.getElementById("sarjakuvatButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("lifehappens").style.display = "none";
				document.getElementById("lifeButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("jannitysJaKauhu").style.display = "none";
				document.getElementById("jannitysButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("fantasiakirjallisuus").style.display = "none";
				document.getElementById("fantasiaButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("scifikirjallisuus").style.display = "none";
				document.getElementById("scifiButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("romantiikkaJaHistoriallisetTarinat").style.display = "none";
				document.getElementById("romantiikkaButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("kirjaJaElokuva").style.display = "none";
				document.getElementById("kirjaJaElokuvaButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("tietokirjat").style.display = "none";
				document.getElementById("tietoButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("runotButton").classList.add('ryhmaButtonPressed');
				document.getElementById("runotJaNovellit").style.display = "inline";
				var runotJaNovellitHtml = kirjaTemplate({kirjat: runotJaNovellit});
      	$("#runotJaNovellitContent").html(runotJaNovellitHtml);
				showingKlassikot = false;
				showingRunot = true;
				showingElamakerrat = false;
				showingSarjakuvat = false;
				showingLifehappens = false;
				showingJannitys = false;
				showingFantasia = false;
				showingScifi = false;
				showingTieto = false;
				showingKirjaJaElokuva = false;
				showingRomantiikka = false;
			}
    });

	 	$(document).on("touchend", "#elamakerratButton", function(evt)
    {
			if (showingElamakerrat){
			 	document.getElementById("elamakerratButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("elamakerrat").style.display = "none";
				showingElamakerrat = false;
		 	}else{
				document.getElementById("klassikot").style.display = "none";
				document.getElementById("klassikotButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("runotJaNovellit").style.display = "none";
				document.getElementById("runotButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("sarjakuvat").style.display = "none";
				document.getElementById("sarjakuvatButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("lifehappens").style.display = "none";
				document.getElementById("lifeButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("jannitysJaKauhu").style.display = "none";
				document.getElementById("jannitysButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("fantasiakirjallisuus").style.display = "none";
				document.getElementById("fantasiaButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("scifikirjallisuus").style.display = "none";
				document.getElementById("scifiButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("romantiikkaJaHistoriallisetTarinat").style.display = "none";
				document.getElementById("romantiikkaButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("kirjaJaElokuva").style.display = "none";
				document.getElementById("kirjaJaElokuvaButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("tietokirjat").style.display = "none";
				document.getElementById("tietoButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("elamakerratButton").classList.add('ryhmaButtonPressed');
				document.getElementById("elamakerrat").style.display = "inline";
				var elamakerratHtml = kirjaTemplate({kirjat: elamakerrat});
        $("#elamakerratContent").html(elamakerratHtml);
				showingKlassikot = false;
				showingRunot = false;
				showingElamakerrat = true;
				showingSarjakuvat = false;
				showingLifehappens = false;
				showingJannitys = false;
				showingFantasia = false;
				showingScifi = false;
				showingTieto = false;
				showingKirjaJaElokuva = false;
				showingRomantiikka = false;
			}
    });

	 	$(document).on("touchend", "#sarjakuvatButton", function(evt)
    {
			if (showingSarjakuvat){
			 	document.getElementById("sarjakuvatButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("sarjakuvat").style.display = "none";
				showingSarjakuvat = false;
		 	}else{
				document.getElementById("klassikot").style.display = "none";
				document.getElementById("klassikotButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("runotJaNovellit").style.display = "none";
				document.getElementById("runotButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("elamakerrat").style.display = "none";
				document.getElementById("elamakerratButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("lifehappens").style.display = "none";
				document.getElementById("lifeButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("jannitysJaKauhu").style.display = "none";
				document.getElementById("jannitysButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("fantasiakirjallisuus").style.display = "none";
				document.getElementById("fantasiaButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("scifikirjallisuus").style.display = "none";
				document.getElementById("scifiButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("romantiikkaJaHistoriallisetTarinat").style.display = "none";
				document.getElementById("romantiikkaButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("kirjaJaElokuva").style.display = "none";
				document.getElementById("kirjaJaElokuvaButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("tietokirjat").style.display = "none";
				document.getElementById("tietoButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("sarjakuvatButton").classList.add('ryhmaButtonPressed');
				document.getElementById("sarjakuvat").style.display = "inline";
				var sarjakuvatHtml = kirjaTemplate({kirjat: sarjakuvat});
        $("#sarjakuvatContent").html(sarjakuvatHtml);
				showingKlassikot = false;
				showingRunot = false;
				showingElamakerrat = false;
				showingSarjakuvat = true;
				showingLifehappens = false;
				showingJannitys = false;
				showingFantasia = false;
				showingScifi = false;
				showingTieto = false;
				showingKirjaJaElokuva = false;
				showingRomantiikka = false;
			}
    });

	 	$(document).on("touchend", "#lifeButton", function(evt)
    {
			if (showingLifehappens){
			 	document.getElementById("lifeButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("lifehappens").style.display = "none";
				showingLifehappens = false;
		 	}else{
				document.getElementById("klassikot").style.display = "none";
				document.getElementById("klassikotButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("runotJaNovellit").style.display = "none";
				document.getElementById("runotButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("elamakerrat").style.display = "none";
				document.getElementById("elamakerratButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("sarjakuvat").style.display = "none";
				document.getElementById("sarjakuvatButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("jannitysJaKauhu").style.display = "none";
				document.getElementById("jannitysButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("fantasiakirjallisuus").style.display = "none";
				document.getElementById("fantasiaButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("scifikirjallisuus").style.display = "none";
				document.getElementById("scifiButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("romantiikkaJaHistoriallisetTarinat").style.display = "none";
				document.getElementById("romantiikkaButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("kirjaJaElokuva").style.display = "none";
				document.getElementById("kirjaJaElokuvaButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("tietokirjat").style.display = "none";
				document.getElementById("tietoButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("lifeButton").classList.add('ryhmaButtonPressed');
				document.getElementById("lifehappens").style.display = "inline";
			 	var lifehappensHtml = kirjaTemplate({kirjat: lifehappens});
        $("#lifehappensContent").html(lifehappensHtml);
				showingKlassikot = false;
				showingRunot = false;
				showingElamakerrat = false;
				showingSarjakuvat = false;
				showingLifehappens = true;
				showingJannitys = false;
				showingFantasia = false;
				showingScifi = false;
				showingTieto = false;
				showingKirjaJaElokuva = false;
				showingRomantiikka = false;
			}
    });

	 	$(document).on("touchend", "#jannitysButton", function(evt)
    {
			if (showingJannitys){
			 	document.getElementById("jannitysButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("jannitysJaKauhu").style.display = "none";
				showingJannitys = false;
		 	}else{
				document.getElementById("klassikot").style.display = "none";
				document.getElementById("klassikotButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("runotJaNovellit").style.display = "none";
				document.getElementById("runotButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("elamakerrat").style.display = "none";
				document.getElementById("elamakerratButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("sarjakuvat").style.display = "none";
				document.getElementById("sarjakuvatButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("lifehappens").style.display = "none";
				document.getElementById("lifeButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("fantasiakirjallisuus").style.display = "none";
				document.getElementById("fantasiaButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("scifikirjallisuus").style.display = "none";
				document.getElementById("scifiButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("romantiikkaJaHistoriallisetTarinat").style.display = "none";
				document.getElementById("romantiikkaButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("kirjaJaElokuva").style.display = "none";
				document.getElementById("kirjaJaElokuvaButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("tietokirjat").style.display = "none";
				document.getElementById("tietoButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("jannitysButton").classList.add('ryhmaButtonPressed');
				document.getElementById("jannitysJaKauhu").style.display = "inline";
			 	var jannitysJaKauhuHtml = kirjaTemplate({kirjat: jannitysJaKauhu});
        $("#jannitysJaKauhuContent").html(jannitysJaKauhuHtml);
				showingKlassikot = false;
				showingRunot = false;
				showingElamakerrat = false;
				showingSarjakuvat = false;
				showingLifehappens = false;
				showingJannitys = true;
				showingFantasia = false;
				showingScifi = false;
				showingTieto = false;
				showingKirjaJaElokuva = false;
				showingRomantiikka = false;
			}
    });

	 	$(document).on("touchend", "#fantasiaButton", function(evt)
    {
			if (showingFantasia){
			 	document.getElementById("fantasiaButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("fantasiakirjallisuus").style.display = "none";
				showingFantasia = false;
		 	}else{
				document.getElementById("klassikot").style.display = "none";
				document.getElementById("klassikotButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("runotJaNovellit").style.display = "none";
				document.getElementById("runotButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("elamakerrat").style.display = "none";
				document.getElementById("elamakerratButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("sarjakuvat").style.display = "none";
				document.getElementById("sarjakuvatButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("lifehappens").style.display = "none";
				document.getElementById("lifeButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("jannitysJaKauhu").style.display = "none";
				document.getElementById("jannitysButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("scifikirjallisuus").style.display = "none";
				document.getElementById("scifiButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("romantiikkaJaHistoriallisetTarinat").style.display = "none";
				document.getElementById("romantiikkaButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("kirjaJaElokuva").style.display = "none";
				document.getElementById("kirjaJaElokuvaButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("tietokirjat").style.display = "none";
				document.getElementById("tietoButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("fantasiaButton").classList.add('ryhmaButtonPressed');
				document.getElementById("fantasiakirjallisuus").style.display = "inline";
				var fantasiakirjallisuusHtml = kirjaTemplate({kirjat: fantasiakirjallisuus});
        $("#fantasiakirjallisuusContent").html(fantasiakirjallisuusHtml);
				showingKlassikot = false;
				showingRunot = false;
				showingElamakerrat = false;
				showingSarjakuvat = false;
				showingLifehappens = false;
				showingJannitys = false;
				showingFantasia = true;
				showingScifi = false;
				showingTieto = false;
				showingKirjaJaElokuva = false;
				showingRomantiikka = false;
			}
    });

	 	$(document).on("touchend", "#scifiButton", function(evt)
    {
			if (showingScifi){
			 	document.getElementById("scifiButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("scifikirjallisuus").style.display = "none";
				showingScifi = false;
		 	}else{
				document.getElementById("klassikot").style.display = "none";
				document.getElementById("klassikotButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("runotJaNovellit").style.display = "none";
				document.getElementById("runotButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("elamakerrat").style.display = "none";
				document.getElementById("elamakerratButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("sarjakuvat").style.display = "none";
				document.getElementById("sarjakuvatButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("lifehappens").style.display = "none";
				document.getElementById("lifeButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("jannitysJaKauhu").style.display = "none";
				document.getElementById("jannitysButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("fantasiakirjallisuus").style.display = "none";
				document.getElementById("fantasiaButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("romantiikkaJaHistoriallisetTarinat").style.display = "none";
				document.getElementById("romantiikkaButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("kirjaJaElokuva").style.display = "none";
				document.getElementById("kirjaJaElokuvaButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("tietokirjat").style.display = "none";
				document.getElementById("tietoButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("scifiButton").classList.add('ryhmaButtonPressed');
				document.getElementById("scifikirjallisuus").style.display = "inline";
			 	var scifikirjallisuusHtml = kirjaTemplate({kirjat: scifikirjallisuus});
        $("#scifikirjallisuusContent").html(scifikirjallisuusHtml);
				showingKlassikot = false;
				showingRunot = false;
				showingElamakerrat = false;
				showingSarjakuvat = false;
				showingLifehappens = false;
				showingJannitys = false;
				showingFantasia = false;
				showingScifi = true;
				showingTieto = false;
				showingKirjaJaElokuva = false;
				showingRomantiikka = false;
			}
    });


	 	$(document).on("touchend", "#tietoButton", function(evt)
    {
			if (showingTieto){
			 	document.getElementById("tietoButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("tietokirjat").style.display = "none";
				showingTieto = false;
		 	}else{
				document.getElementById("klassikot").style.display = "none";
				document.getElementById("klassikotButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("runotJaNovellit").style.display = "none";
				document.getElementById("runotButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("elamakerrat").style.display = "none";
				document.getElementById("elamakerratButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("sarjakuvat").style.display = "none";
				document.getElementById("sarjakuvatButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("lifehappens").style.display = "none";
				document.getElementById("lifeButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("jannitysJaKauhu").style.display = "none";
				document.getElementById("jannitysButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("fantasiakirjallisuus").style.display = "none";
				document.getElementById("fantasiaButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("romantiikkaJaHistoriallisetTarinat").style.display = "none";
				document.getElementById("romantiikkaButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("kirjaJaElokuva").style.display = "none";
				document.getElementById("kirjaJaElokuvaButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("scifikirjallisuus").style.display = "none";
				document.getElementById("scifiButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("tietoButton").classList.add('ryhmaButtonPressed');
				document.getElementById("tietokirjat").style.display = "inline";
			 	var tietokirjatHtml = kirjaTemplate({kirjat: tietokirjat});
        $("#tietokirjatContent").html(tietokirjatHtml);
				showingKlassikot = false;
				showingRunot = false;
				showingElamakerrat = false;
				showingSarjakuvat = false;
				showingLifehappens = false;
				showingJannitys = false;
				showingFantasia = false;
				showingScifi = false;
				showingTieto = true;
				showingKirjaJaElokuva = false;
				showingRomantiikka = false;
			}
    });

	 	$(document).on("touchend", "#kirjaJaElokuvaButton", function(evt)
    {
			if (showingKirjaJaElokuva){
			 	document.getElementById("kirjaJaElokuvaButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("kirjaJaElokuva").style.display = "none";
				showingKirjaJaElokuva = false;
		 	}else{
				document.getElementById("klassikot").style.display = "none";
				document.getElementById("klassikotButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("runotJaNovellit").style.display = "none";
				document.getElementById("runotButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("elamakerrat").style.display = "none";
				document.getElementById("elamakerratButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("sarjakuvat").style.display = "none";
				document.getElementById("sarjakuvatButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("lifehappens").style.display = "none";
				document.getElementById("lifeButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("jannitysJaKauhu").style.display = "none";
				document.getElementById("jannitysButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("fantasiakirjallisuus").style.display = "none";
				document.getElementById("fantasiaButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("romantiikkaJaHistoriallisetTarinat").style.display = "none";
				document.getElementById("romantiikkaButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("tietokirjat").style.display = "none";
				document.getElementById("tietoButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("scifikirjallisuus").style.display = "none";
				document.getElementById("scifiButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("kirjaJaElokuvaButton").classList.add('ryhmaButtonPressed');
				document.getElementById("kirjaJaElokuva").style.display = "inline";
			 	var kirjaJaElokuvaHtml = kirjaTemplate({kirjat: kirjaJaElokuva});
        $("#kirjaJaElokuvaContent").html(kirjaJaElokuvaHtml);
				showingKlassikot = false;
				showingRunot = false;
				showingElamakerrat = false;
				showingSarjakuvat = false;
				showingLifehappens = false;
				showingJannitys = false;
				showingFantasia = false;
				showingScifi = false;
				showingTieto = false;
				showingKirjaJaElokuva = true;
				showingRomantiikka = false;
			}
    });

	 	$(document).on("touchend", "#romantiikkaButton", function(evt)
    {
			if (showingRomantiikka){
			 	document.getElementById("romantiikkaButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("romantiikkaJaHistoriallisetTarinat").style.display = "none";
				showingRomantiikka = false;
		 	}else{
				document.getElementById("klassikot").style.display = "none";
				document.getElementById("klassikotButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("runotJaNovellit").style.display = "none";
				document.getElementById("runotButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("elamakerrat").style.display = "none";
				document.getElementById("elamakerratButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("sarjakuvat").style.display = "none";
				document.getElementById("sarjakuvatButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("lifehappens").style.display = "none";
				document.getElementById("lifeButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("jannitysJaKauhu").style.display = "none";
				document.getElementById("jannitysButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("fantasiakirjallisuus").style.display = "none";
				document.getElementById("fantasiaButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("kirjaJaElokuva").style.display = "none";
				document.getElementById("kirjaJaElokuvaButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("tietokirjat").style.display = "none";
				document.getElementById("tietoButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("scifikirjallisuus").style.display = "none";
				document.getElementById("scifiButton").classList.remove('ryhmaButtonPressed');
				document.getElementById("romantiikkaButton").classList.add('ryhmaButtonPressed');
				document.getElementById("romantiikkaJaHistoriallisetTarinat").style.display = "inline";
				var romantiikkaJaHistoriallisetTarinatHtml = kirjaTemplate({kirjat: romantiikkaJaHistoriallisetTarinat});
        $("#romantiikkaJaHistoriallisetTarinatContent").html(romantiikkaJaHistoriallisetTarinatHtml);
				showingKlassikot = false;
				showingRunot = false;
				showingElamakerrat = false;
				showingSarjakuvat = false;
				showingLifehappens = false;
				showingJannitys = false;
				showingFantasia = false;
				showingScifi = false;
				showingTieto = false;
				showingKirjaJaElokuva = false;
				showingRomantiikka = true;
			}
    });
	 
	 
	 		// if chooseTaskListContent selection changes, redraw checkbox ticks and other information to correspond with the new list
	 	 $(document).on('change', '#chooseTaskListContent', function(evt) {
			 var selectedTaskList = this.options[this.selectedIndex].value;
			 	checkIfTehtavatInLS();
			 	var trueBoolean = "true";
			 	for (var i=0; i < lsTehtavat.length; i++) {
				 if (lsTehtavat[i].onTehty === trueBoolean) {
					 		var bookName = returnBookName(lsTehtavat[i].tehtyKirjasta);
							document.getElementById(lsTehtavat[i].tid).checked = true;
							document.getElementById("tehtypaiva" + lsTehtavat[i].tid).innerHTML = lsTehtavat[i].tehtyPaiva;
							document.getElementById("tehtykirja" + lsTehtavat[i].tid).innerHTML = bookName;
							document.getElementById("brClass" + lsTehtavat[i].tid).innerHTML = "<br>";
      		}else{
						document.getElementById(lsTehtavat[i].tid).checked = false;
						document.getElementById("tehtypaiva" + lsTehtavat[i].tid).innerHTML = "";
						document.getElementById("tehtykirja" + lsTehtavat[i].tid).innerHTML = "";
						document.getElementById("brClass" + lsTehtavat[i].tid).innerHTML = "";
					}
				}
			 	setTaskList();
	 		});

     function openTehtavalista(){
        currentPage = "tehtavalista";
        document.getElementById("headerText").innerHTML = "Tehtävät";
			 	document.getElementById("backButton").classList.remove('hidden');
        document.getElementById("tehtavalista").classList.remove('hidden');
        document.getElementById("aloitussivu").classList.add('hidden');
        document.getElementById("kirjalista").classList.add('hidden');
        document.getElementById("omat_kirjat").classList.add('hidden');
        document.getElementById("etsi_kirjoja").classList.add('hidden');
        document.getElementById("kirja_info").classList.add('hidden');
        document.getElementById("valitse_kirja").classList.add('hidden');
		 		document.getElementById("tehtavalistaButton").classList.add('footerButtonBackgroundSelected');
				document.getElementById("tehtavalistaButton").classList.remove('footerButtonBackground');
				document.getElementById("tehtavalistaButton").classList.remove('whiteText');
				document.getElementById("kirjalistaButton").classList.add('footerButtonBackground');
				document.getElementById("kirjalistaButton").classList.add('whiteText');
				document.getElementById("omatKirjatButton").classList.add('footerButtonBackground');
				document.getElementById("omatKirjatButton").classList.add('whiteText');
				document.getElementById("etsiKirjojaButton").classList.add('footerButtonBackground');
				document.getElementById("etsiKirjojaButton").classList.add('whiteText');
			 	document.getElementById("footer").classList.remove('hidden');
		 		document.getElementById("kirjalistaButton").classList.remove('footerButtonBackgroundSelected');
		 		document.getElementById("omatKirjatButton").classList.remove('footerButtonBackgroundSelected');
		 		document.getElementById("etsiKirjojaButton").classList.remove('footerButtonBackgroundSelected');
			 	var chooseTaskListContentHtml = chooseTaskListTemplate({tehtavalistat: tehtavalistat});
			 	$("#chooseTaskListContent").html(chooseTaskListContentHtml);
			 
			 	var tehtavatHtml = tehtavatTemplate({tehtavat: tehtavat});
        $("#tehtavalistaSisalto").html(tehtavatHtml);
			 
			 	//sets the tasklist value from localstorage as placeholder in dropdown
			 	var taskListContentValue = getTaskList();
			 	if (taskListContentValue  == '"1"'){
					document.getElementById('chooseTaskListContent').value = "1";
				}else if (taskListContentValue  == '"2"'){
					document.getElementById('chooseTaskListContent').value = "2";
				}else if (taskListContentValue== '"3"'){
					document.getElementById('chooseTaskListContent').value = "3";
				}

			 	// sets the checkmarks
			 	var stl = document.getElementById("chooseTaskListContent");
				var selectedTaskList = stl.options[stl.selectedIndex].value;
			 	checkIfTehtavatInLS();
			 	var trueBoolean = "true";
			 	for (var i=0; i < lsTehtavat.length; i++) {
				 if (lsTehtavat[i].onTehty === trueBoolean) {
					 		var bookName = returnBookName(lsTehtavat[i].tehtyKirjasta);
							document.getElementById(lsTehtavat[i].tid).checked = true;
							document.getElementById("tehtypaiva" + lsTehtavat[i].tid).innerHTML = lsTehtavat[i].tehtyPaiva;
							document.getElementById("tehtykirja" + lsTehtavat[i].tid).innerHTML = bookName;
							document.getElementById("brClass" + lsTehtavat[i].tid).innerHTML = "<br>";
      		}
				}

         return false;
     }

        /* Footer "Omat kirjat" button */
    $(document).on("touchend", "#omatKirjatButton", function(evt)
    {
        historyStack.push(currentPage);
        openOmatKirjat();
        return false;

    });

     function openOmatKirjat(){
        currentPage = "omat_kirjat";
        document.getElementById("headerText").innerHTML = "Omat kirjat";
			 	document.getElementById("backButton").classList.remove('hidden');
        document.getElementById("omat_kirjat").classList.remove('hidden');
        document.getElementById("aloitussivu").classList.add('hidden');
        document.getElementById("tehtavalista").classList.add('hidden');
        document.getElementById("kirjalista").classList.add('hidden');
        document.getElementById("etsi_kirjoja").classList.add('hidden');
        document.getElementById("kirja_info").classList.add('hidden');
        document.getElementById("valitse_kirja").classList.add('hidden');
        document.getElementById("omatKirjatButton").classList.remove('footerButtonBackground');
		 		document.getElementById("omatKirjatButton").classList.add('footerButtonBackgroundSelected');
				document.getElementById("omatKirjatButton").classList.remove('whiteText');
				document.getElementById("kirjalistaButton").classList.add('footerButtonBackground');
				document.getElementById("kirjalistaButton").classList.add('whiteText');
				document.getElementById("tehtavalistaButton").classList.add('footerButtonBackground');
				document.getElementById("tehtavalistaButton").classList.add('whiteText');
				document.getElementById("etsiKirjojaButton").classList.add('footerButtonBackground');
				document.getElementById("etsiKirjojaButton").classList.add('whiteText');
		 		document.getElementById("tehtavalistaButton").classList.remove('footerButtonBackgroundSelected');
		 		document.getElementById("kirjalistaButton").classList.remove('footerButtonBackgroundSelected');
		 		document.getElementById("etsiKirjojaButton").classList.remove('footerButtonBackgroundSelected');

        var myOwnBooks = searchOwnBooks();

        var omatRomantiikkaJaHistoriallisetTarinat = myOwnBooks.filter(function(kirja) { return kirja.ryhma == "Romantiikka ja historialliset tarinat"; });
        var omatKlassikot = myOwnBooks.filter(function(kirja) { return kirja.ryhma == "Klassikot"; });
			 	var omatScifikirjallisuus = myOwnBooks.filter(function(kirja) { return kirja.ryhma == "Scifikirjallisuus"; });
        var omatFantasiakirjallisuus = myOwnBooks.filter(function(kirja) { return kirja.ryhma == "Fantasiakirjallisuus"; });
			 	var omatRunotJaNovellit = myOwnBooks.filter(function(kirja) { return kirja.ryhma == "Runot ja novellit"; });
        var omatJannitysJaKauhu = myOwnBooks.filter(function(kirja) { return kirja.ryhma == "Jännitys ja kauhu"; });
			 	var omatElamakerrat = myOwnBooks.filter(function(kirja) { return kirja.ryhma == "Elämäkerrat"; });
        var omatSarjakuvat = myOwnBooks.filter(function(kirja) { return kirja.ryhma == "Sarjakuvat"; });
			 	var omatLifehappens = myOwnBooks.filter(function(kirja) { return kirja.ryhma == "lifehappens"; });
        var omatKirjaJaElokuva = myOwnBooks.filter(function(kirja) { return kirja.ryhma == "Kirja ja elokuva"; });
			 	var omatTietokirjat = myOwnBooks.filter(function(kirja) { return kirja.ryhma == "Tietokirjat"; });

        var omatRomantiikkaJaHistoriallisetTarinatHtml = omatKirjatTemplate({omatKirjat: omatRomantiikkaJaHistoriallisetTarinat});
        $("#omatRomantiikkaJaHistoriallisetTarinatContent").html(omatRomantiikkaJaHistoriallisetTarinatHtml);
        var omatKlassikotHtml = omatKirjatTemplate({omatKirjat: omatKlassikot});
        $("#omatKlassikotContent").html(omatKlassikotHtml);
			 	var omatScifikirjallisuusHtml = omatKirjatTemplate({omatKirjat: omatScifikirjallisuus});
        $("#omatScifikirjallisuusContent").html(omatScifikirjallisuusHtml);
        var omatFantasiakirjallisuusHtml = omatKirjatTemplate({omatKirjat: omatFantasiakirjallisuus});
        $("#omatFantasiakirjallisuusContent").html(omatFantasiakirjallisuusHtml);
			 	var omatRunotJaNovellitHtml = omatKirjatTemplate({omatKirjat: omatRunotJaNovellit});
        $("#omatRunotJaNovellitContent").html(omatRunotJaNovellitHtml);
        var omatJannitysJaKauhuHtml = omatKirjatTemplate({omatKirjat: omatJannitysJaKauhu});
        $("#omatJannitysJaKauhuContent").html(omatJannitysJaKauhuHtml);
			 	var omatElamakerratHtml = omatKirjatTemplate({omatKirjat: omatElamakerrat});
        $("#omatElamakerratContent").html(omatElamakerratHtml);
        var omatSarjakuvatHtml = omatKirjatTemplate({omatKirjat: omatSarjakuvat});
        $("#omatSarjakuvatContent").html(omatSarjakuvatHtml);
			 	var omatLifehappensHtml = omatKirjatTemplate({omatKirjat: omatLifehappens});
        $("#omatLifehappensContent").html(omatLifehappensHtml);
        var omatKirjaJaElokuvaHtml = omatKirjatTemplate({omatKirjat: omatKirjaJaElokuva});
        $("#omatKirjaJaElokuvaContent").html(omatKirjaJaElokuvaHtml);
			 	var omatTietokirjatHtml = omatKirjatTemplate({omatKirjat: omatTietokirjat});
        $("#omatTietokirjatContent").html(omatTietokirjatHtml);

				return false;
     }

        /* Footer "Etsi kirjoja" button*/
    $(document).on("touchend", "#etsiKirjojaButton", function(evt)
    {
        historyStack.push(currentPage);
        openEtsiKirjoja();
        return false;
    });

     function openEtsiKirjoja(){
        currentPage = "etsi_kirjoja";
        document.getElementById("headerText").innerHTML = "Etsi kirjoja";
			 	document.getElementById("backButton").classList.remove('hidden');
        document.getElementById("etsi_kirjoja").classList.remove('hidden');
        document.getElementById("aloitussivu").classList.add('hidden');
        document.getElementById("kirjalista").classList.add('hidden');
        document.getElementById("tehtavalista").classList.add('hidden');
        document.getElementById("omat_kirjat").classList.add('hidden');
        document.getElementById("kirja_info").classList.add('hidden');
        document.getElementById("valitse_kirja").classList.add('hidden');
		 		document.getElementById("etsiKirjojaButton").classList.add('footerButtonBackgroundSelected');
				document.getElementById("etsiKirjojaButton").classList.remove('footerButtonBackground');
				document.getElementById("etsiKirjojaButton").classList.remove('whiteText');
				document.getElementById("kirjalistaButton").classList.add('footerButtonBackground');
				document.getElementById("kirjalistaButton").classList.add('whiteText');
				document.getElementById("tehtavalistaButton").classList.add('footerButtonBackground');
				document.getElementById("tehtavalistaButton").classList.add('whiteText');
				document.getElementById("omatKirjatButton").classList.add('footerButtonBackground');
				document.getElementById("omatKirjatButton").classList.add('whiteText');
		 		document.getElementById("tehtavalistaButton").classList.remove('footerButtonBackgroundSelected');
		 		document.getElementById("kirjalistaButton").classList.remove('footerButtonBackgroundSelected');
		 		document.getElementById("omatKirjatButton").classList.remove('footerButtonBackgroundSelected');
        return false;

     }

    /*"Etsi kirjoja" page search button functionality.*/
    $(document).on("touchend", "#searchButton", function(evt)
    {
        var searchTerm = document.getElementById("searchField").value;

        var options = {
        shouldSort: true,
        threshold: 0.2,
        distance: 20000,
        maxPatternLength: 32,
        minMatchCharLength: 2,
        keys: [
          "nimi",
          "kirjoittaja",
          "ryhma",
          "kuvaus",
          "synopsis"
        ]
      };
      var fuse = new Fuse(kirjat, options);
      var result = fuse.search(searchTerm);

      var hakuTuloksettHtml = hakuTemplate({hakutulokset: result});
      $("#searchResultsTable").html(hakuTuloksettHtml);
			return false;
    });

        /* Back button */
    $(document).on("click", "#backButton", function(evt)
    {
        /* your code goes here */
            var i = historyStack.pop();
            switch (i){
                case ("kirjalista"):
                    openKirjalista();
                    break;
                case ("tehtavalista"):
                    openTehtavalista();
                    break;
                case ("omat_kirjat"):
                    openOmatKirjat();
                    break;
                case ("etsi_kirjoja"):
                    openEtsiKirjoja();
                    break;
								case ("kirjainfo"):
										document.getElementById("tehtavalistaButton").classList.add('footerButtonBackground');
										document.getElementById("tehtavalistaButton").classList.add('whiteText');
										document.getElementById("tehtavalistaButton").classList.remove('footerButtonBackgroundSelected');
										avaaKirjaInfo(tempKirja, tempId);
										break;
								case ("aloitussivu"):
										document.getElementById("headerText").innerHTML = "Diplomilukija";
										document.getElementById("backButton").classList.add('hidden');
        						document.getElementById("kirjalista").classList.add('hidden');
        						document.getElementById("aloitussivu").classList.remove('hidden');
        						document.getElementById("tehtavalista").classList.add('hidden');
        						document.getElementById("omat_kirjat").classList.add('hidden');
        						document.getElementById("etsi_kirjoja").classList.add('hidden');
        						document.getElementById("kirja_info").classList.add('hidden');
										document.getElementById("kirjalistaButton").classList.add('footerButtonBackground');
										document.getElementById("kirjalistaButton").classList.add('whiteText');
										document.getElementById("tehtavalistaButton").classList.add('footerButtonBackground');
										document.getElementById("tehtavalistaButton").classList.add('whiteText');
										document.getElementById("omatKirjatButton").classList.add('footerButtonBackground');
										document.getElementById("omatKirjatButton").classList.add('whiteText');
										document.getElementById("etsiKirjojaButton").classList.add('footerButtonBackground');
										document.getElementById("etsiKirjojaButton").classList.add('whiteText');
										document.getElementById("tehtavalistaButton").classList.remove('footerButtonBackgroundSelected');
										document.getElementById("omatKirjatButton").classList.remove('footerButtonBackgroundSelected');
										document.getElementById("etsiKirjojaButton").classList.remove('footerButtonBackgroundSelected');
										document.getElementById("kirjalistaButton").classList.remove('footerButtonBackgroundSelected');
										currentPage = "aloitussivu";
										break;
            }
         return false;
    });

    $(document).on("touchend", "#menuButton", function(evt)
    {
       $('#menuPopUp').modal('show');
    });
  } //end of register event handlers

 		document.addEventListener("app.Ready", register_event_handlers, false);
})();



	// Opens either tehtäväPopUp or tehtäväPoisPopUp
	function openPopUps(incomingTehtavaNumber) {
			callingTask = incomingTehtavaNumber;

			if (document.getElementById(incomingTehtavaNumber).checked === true){
				historyStack.push(currentPage);
			  document.getElementById("headerText").innerHTML = "Valitse kirja";
        document.getElementById("valitse_kirja").classList.remove('hidden');
        document.getElementById("tehtavalista").classList.add('hidden');
				document.getElementById("footer").classList.add('hidden');
				currentPage="popUp";

        var myOwnBooks = searchOwnBooks();

        var valitseOmatRomantiikkaJaHistoriallisetTarinat = myOwnBooks.filter(function(kirja) { return kirja.ryhma == "Romantiikka ja historialliset tarinat"; });
        var valitseOmatKlassikot = myOwnBooks.filter(function(kirja) { return kirja.ryhma == "Klassikot"; });
			 	var valitseOmatScifikirjallisuus = myOwnBooks.filter(function(kirja) { return kirja.ryhma == "Scifikirjallisuus"; });
        var valitseOmatFantasiakirjallisuus = myOwnBooks.filter(function(kirja) { return kirja.ryhma == "Fantasiakirjallisuus"; });
			 	var valitseOmatRunotJaNovellit = myOwnBooks.filter(function(kirja) { return kirja.ryhma == "Runot ja novellit"; });
        var valitseOmatJannitysJaKauhu = myOwnBooks.filter(function(kirja) { return kirja.ryhma == "Jännitys ja kauhu"; });
			 	var valitseOmatElamakerrat = myOwnBooks.filter(function(kirja) { return kirja.ryhma == "Elämäkerrat"; });
        var valitseOmatSarjakuvat = myOwnBooks.filter(function(kirja) { return kirja.ryhma == "Sarjakuvat"; });
			 	var valitseOmatLifehappens = myOwnBooks.filter(function(kirja) { return kirja.ryhma == "lifehappens"; });
        var valitseOmatKirjaJaElokuva = myOwnBooks.filter(function(kirja) { return kirja.ryhma == "Kirja ja elokuva"; });
			 	var valitseOmatTietokirjat = myOwnBooks.filter(function(kirja) { return kirja.ryhma == "Tietokirjat"; });

        var valitseKirjaHtml = valitseKirjaTemplate({myOwnBooks: myOwnBooks});
        $("#valitse_kirja_content").html(valitseKirjaHtml);

        checkIfTehtavatInLS();
				return false;
			}else{
					document.getElementById(incomingTehtavaNumber).checked = true;
					$('#tehtäväPoisPopUp').modal('show');
			}
	}
	
	// users presses hyväksy in #tehtäväPoisPopUp
	function removeTaskInformation(){
				var tehtavaHyvaksyNumber = callingTask;
				document.getElementById("tehtykirja" + tehtavaHyvaksyNumber).innerHTML = "";
				document.getElementById("tehtypaiva" + tehtavaHyvaksyNumber).innerHTML = "";
				document.getElementById("brClass" + tehtavaHyvaksyNumber).innerHTML = "";
				document.getElementById(tehtavaHyvaksyNumber).checked = false;
		
				checkIfTehtavatInLS();
		
    		var empty = "";
				var taskObject = searchTask(callingTask);
				var stl = document.getElementById("chooseTaskListContent");
				var selectedTaskList = stl.options[stl.selectedIndex].value;
				selectedTaskList = String(selectedTaskList);
    		taskObject.onTehty = "false";
				taskObject.tehtyPaiva = empty;
    		taskObject.tehtyKirjasta = empty;
				localStorage.setItem("tehtavat" + selectedTaskList, JSON.stringify(lsTehtavat));
				return false;
	}

	  /*Changes task onTehty, tehtyPaiva and tehtyKirjasta values according to provided parameters*/
  function addTaskInformation(bookId) {
		
    checkIfTehtavatInLS();
		
    var bookName = returnBookName(bookId);
    var doneDate = getDate();
    var empty = "";
		var taskObject = searchTask(callingTask);
		var stl = document.getElementById("chooseTaskListContent");
		var selectedTaskList = stl.options[stl.selectedIndex].value;
		selectedTaskList = String(selectedTaskList);
    taskObject.onTehty = "true";
    taskObject.tehtyPaiva = doneDate;
    taskObject.tehtyKirjasta = bookId;
		localStorage.setItem("tehtavat" + selectedTaskList, JSON.stringify(lsTehtavat));

    currentPage = "tehtavalista";
    document.getElementById("headerText").innerHTML = "Tehtävät";
    document.getElementById("tehtavalista").classList.remove('hidden');
    document.getElementById("valitse_kirja").classList.add('hidden');
    document.getElementById("footer").classList.remove('hidden');

		document.getElementById("tehtypaiva" + callingTask).innerHTML = doneDate;
		document.getElementById("tehtykirja" + callingTask).innerHTML = bookName;
		document.getElementById("brClass" + callingTask).innerHTML = "<br>"; // adds a line break between date and bookname
		return;
  }
	


  function onBookSelect(id) {
    if (id === null) {
      return;
    }

    var result1 = romantiikkaJaHistoriallisetTarinat.filter(function(kirja) { return kirja && kirja.kid == id; });
    var result2 = klassikot.filter(function(kirja) { return kirja && kirja.kid == id; });
		var result3 = scifikirjallisuus.filter(function(kirja) { return kirja && kirja.kid == id; });
    var result4 = fantasiakirjallisuus.filter(function(kirja) { return kirja && kirja.kid == id; });
		var result5 = kirjaJaElokuva.filter(function(kirja) { return kirja && kirja.kid == id; });
		var result6 = jannitysJaKauhu.filter(function(kirja) { return kirja && kirja.kid == id; });
		var result7 = runotJaNovellit.filter(function(kirja) { return kirja && kirja.kid == id; });
		var result8 = elamakerrat.filter(function(kirja) { return kirja && kirja.kid == id; });
		var result9 = sarjakuvat.filter(function(kirja) { return kirja && kirja.kid == id; });
		var result10 = lifehappens.filter(function(kirja) { return kirja && kirja.kid == id; });
		var result11 = tietokirjat.filter(function(kirja) { return kirja && kirja.kid == id; });

    var result = result1[0] || result2[0] || result3[0] || result4[0] || result5[0] || result6[0] || result7[0] || result8[0] || result9[0] || result10[0] || result11[0];

    if (result) {
      avaaKirjaInfo(result, id);
    }
  }

  function avaaKirjaInfo(kirja, id) {
		historyStack.push(currentPage);
		currentPage = "kirjainfo";
    document.getElementById("headerText").innerHTML = "Kirjan tiedot";
    document.getElementById("kirja_info").classList.remove('hidden');
    document.getElementById("kirjalista").classList.add('hidden');
    document.getElementById("omat_kirjat").classList.add('hidden');
    document.getElementById("etsi_kirjoja").classList.add('hidden');
		document.getElementById("tehtavalista").classList.add('hidden');
		tempKirja = kirja;
		tempId = id;

    var kirjaInfoHtml = kirjaInfoTemplate({kirja: kirja});
    $("#kirja_info_content").html(kirjaInfoHtml);

		var bookCurrentStatus = searchOwnBook(id);
		if (bookCurrentStatus !== null) {
			document.getElementById("tahtiIcon").setAttribute('class', 'fa fa-star fa-2x');
			document.getElementById("lisaaOmiinKirjoihinTeksti").innerHTML = "Poista omista kirjoista";
		} else {
			document.getElementById("tahtiIcon").setAttribute('class', 'fa fa-star-o fa-2x');
			document.getElementById("lisaaOmiinKirjoihinTeksti").innerHTML = "Lisää omiin kirjoihin";
		}
    return false;
  }

	function searchOwnBooks() {
    	checkIfOwnBooksInLS();
    	var myOwnBooks = [];
			for (var i=0; i < lsOmatKirjat.length; i++) {
        var id = lsOmatKirjat[i] - 1;
				myOwnBooks.push(kirjat[id]);
    	}
			return myOwnBooks;
  }

/*Checks if "omatKirjat" array is saved to user localStorage.
  If not, "omatKirjat" array is saved to user localStorage and
    parsed "omatKirjat" array is returned.
  If "omatKirjat" array is found from user localStorage
    parsed "omatKirjat" array is returned.*/
  function checkIfOwnBooksInLS () {
    if (localStorage.getItem("omatKirjat") === null) {
      localStorage.setItem("omatKirjat", JSON.stringify(omatKirjat));
      lsOmatKirjat = JSON.parse(localStorage.getItem("omatKirjat"));
      return lsOmatKirjat;
    } else {
      lsOmatKirjat = JSON.parse(localStorage.getItem("omatKirjat"));
      return lsOmatKirjat;
    }
  }

/*If book id is found from "omatKirjat" array it will be removed from array.
  If book id is not found from "omatKirjat" array it will be added to array.*/
  function toggleBooksOwnBookStatus (bookId) {
		$("button.starButton").find('i').toggleClass('fa-star-o fa-star');
    checkIfOwnBooksInLS();
    var bookCurrentStatus = searchOwnBook(bookId);
    if (bookCurrentStatus !== null) {
      removeBookFromOwnBooks (bookId);
			document.getElementById("lisaaOmiinKirjoihinTeksti").innerHTML = "Lisää omiin kirjoihin";
    } else {
      saveBookToOwnBooks (bookId);
			document.getElementById("lisaaOmiinKirjoihinTeksti").innerHTML = "Poista omista kirjoista";
    }
  }

/*Adds book id to "omatKirjat" array.*/
  function saveBookToOwnBooks (bookId) {
    checkIfOwnBooksInLS();
    lsOmatKirjat.push(bookId);
    localStorage.setItem("omatKirjat", JSON.stringify(lsOmatKirjat));
  }

/*Removes book id from "omatKirjat" array.*/
  function removeBookFromOwnBooks (bookId) {
    checkIfOwnBooksInLS();
    var index = lsOmatKirjat.indexOf(bookId );
    if (index > -1) {
      lsOmatKirjat.splice(index, 1);
    }
    localStorage.setItem("omatKirjat", JSON.stringify(lsOmatKirjat));
  }

/*Searches book with specific id from "omatKirjatkirjat" array.
  If found book object is returned.*/
  function searchOwnBook (bookId) {
    checkIfOwnBooksInLS();
    for (var i=0; i < lsOmatKirjat.length; i++) {
      if (lsOmatKirjat[i] === bookId) {
        return lsOmatKirjat[i];
      }
    }
    return null;
  }

/*Returns books name that correspons to provided book id parameter*/
  function returnBookName(bookId) {
    checkIfOwnBooksInLS();
    var kidToSearch = String(bookId);
    for (var i=0; i < kirjat.length; i++) {
      if (kirjat[i].kid === kidToSearch) {
        return kirjat[i].nimi;
      }
    }
  }
/**/

  /*Opens Outi page in browser window with provided search term*/
  function avaaOuti(nimi) {
    window.open("http://koha.outikirjastot.fi/cgi-bin/koha/opac-search.pl?q=" + nimi + "&branch_group_limit=&x=0&y=0", "_parent");
  }

	function avaaDiplomiInfo() {
    window.open("http://www.ouka.fi/oulu/kirjastoreitti/ylakoulun-kirjallisuusdiplomi", "_parent");
  }

  /*Checks if tehtavat array is saved to users localStorage.
  If not tehtavat array is saved to localStorage.
  Returns parsed tehtavat array from localStorage*/
  function checkIfTehtavatInLS () {
	var stl = document.getElementById("chooseTaskListContent");
	var selectedTaskList = stl.options[stl.selectedIndex].value;
	selectedTaskList = String(selectedTaskList);
		
    if (localStorage.getItem("tehtavat" + selectedTaskList) === null) {
			//sets the initial list to localstorage if it doesn't exist yet
      localStorage.setItem("tehtavat" + selectedTaskList, JSON.stringify(tehtavat));
      lsTehtavat = JSON.parse(localStorage.getItem("tehtavat" + selectedTaskList));
      return lsTehtavat;
    } else {
			// gets the tehtavat from localstorage
      lsTehtavat = JSON.parse(localStorage.getItem("tehtavat" + selectedTaskList));
      return lsTehtavat;
    }
  }

  /*Searches spesific task with tid.
    If task is found from tehtavat array, specific task object is returned*/
  function searchTask(tid) {
    checkIfTehtavatInLS();
    var tidToSearch = String(tid);
    for (var i = 0; i < lsTehtavat.length; i++) {
      if (lsTehtavat[i].tid === tidToSearch) {
        return lsTehtavat[i];
      }
    }
  }

  /*Gets current date and returns it in dd/mm/yyyy format*/
  function getDate()  {
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth()+1;
    var year = today.getFullYear();

    if (day<10) {
      day = '0' + day;
    }

    if (month<10) {
      month = '0' + month;
    }

    today = day + '.' + month + '.' + year;
    return today;
  }

  /*Function for setting task list to localStorage*/
  function setTaskList() {
    var stl = document.getElementById("chooseTaskListContent");
    var selectedTaskList = stl.options[stl.selectedIndex].value;
    localStorage.setItem("selectedTaskList", JSON.stringify(selectedTaskList));
  }

	/*Function for getting the task list from localStorage*/
	function getTaskList() {
		var selectedTaskList;
		if(localStorage.getItem("selectedTaskList") === null){
			var temp = "1";
			return temp;
		}else{
    	selectedTaskList = localStorage.getItem("selectedTaskList");
			return selectedTaskList;
		}
  }
