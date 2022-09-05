	
	/***********************************************
	* Bookmark site script- � Dynamic Drive DHTML code library (www.dynamicdrive.com)
	* This notice MUST stay intact for legal use
	* Visit Dynamic Drive at http://www.dynamicdrive.com/ for full source code
	***********************************************/
	
    window.sessionStorage.setItem("Secure.IsUserLoggedIn2?", "No");
    window.sessionStorage.setItem("Secure.AuthenticationToken2", "DU837HHFYTEYUE9S1934");
    window.localStorage.setItem("Secure.CurrentStateofHTML5Storage2","Completely Insecure");


	/* Modified heavily by Jeremy Druin */
	function bookmarkSite(){
	
		try{
			var lURL = document.location;
			var lTitle = "Mutillidae";
				
			if (window.sidebar){ 
				// firefox
				window.sidebar.addPanel(lTitle, lURL, "");
			}else if(window.opera && window.print){ 
				// opera
				var elem = document.createElement('a');
				elem.setAttribute('href',lURL);
				elem.setAttribute('title',lTitle);
				elem.setAttribute('rel','sidebar');
				elem.click();
			}else if(document.all){
				// ie
				window.external.AddFavorite(lURL, lTitle);
			}// end if
		}catch(e){
			alert('Could not add bookmark for ' + lTitle + ' at URL ' + lURL + '.\n\nError: ' + e.message);
		}// end try
		
	}// end function bookmarkSite
