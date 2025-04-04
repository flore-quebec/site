
        //const familleSelect = document.getElementById("famille");
        //const genreSelect = document.getElementById("genre");
        //const sectionSelect = document.getElementById("section");
        //const speciesSelect = document.getElementById("species");
        //const nomSelect = document.getElementById("nom");

        const modal = document.getElementById('myModal');
        const modalHeader = document.getElementById('modalHeader');
        const modalText = document.getElementById('modalText');
        const modalImages = document.getElementById('modalImages');
        const gallery = document.getElementById("myGallery");
        const radio = document.getElementsByName("order");
        //const thumbnailGallery = document.getElementById('thumbnailGallery');

        let currentImageIndex = 0;

        //const thumbnails = ["image1.jpg", "image2.jpg", "image3.jpg"];

        var thumbnails;
        var which;
        var last_category;
        var last_value;
        var currenturl;
        //var map2;

        function openModal(headerText, bodyText, imageArray) {
            // Clear previous images
            
            imageGallery.style.display = 'none';
            document.getElementById("selected").style.display = 'none';
            document.getElementById("filters").style.display = 'none';
            document.getElementById("modal-content").style.display = 'block';

            
            modalImages.innerHTML = '';
            modalText.innerHTML = '';
            
            //modal.style.display = 'none';//'block';
            modalHeader.innerHTML = headerText.replace(" "," ");
            

            //var url = "https://raw.githubusercontent.com/frousseu/mosquitos/main/README.md";
            //fetch(url)
            //  .then(r=>r.blob()).then(b=>b.text()).then(m=>{document.getElementById("txt").innerHTML=marked.parse(m)});
            //var url = "https://raw.githubusercontent.com/frousseu/mosquitos/main/" + headerText.replace(" ","_");
            //var url = "https://raw.githubusercontent.com/frousseu/floreqc/main/Esp%C3%A8ces/Poaceae/Cinna/Cinna_arundinacea.md"
            var url3 = "https://raw.githubusercontent.com/flore-quebec/species/main/Esp%C3%A8ces/"+data[which].famille+"/"+data[which].genre+"/"+data[which].espèce.replace(" ","_")+".md";

            //fetch(url3)
            //  .then(r => r.blob())
            //  .then(b => b.text())
            //  .then(m => {modalText.innerHTML=marked.parse(m)});
              
            //modalText.style.fontFamily = 'Special Elite';
            //modalText.style.fontColor = '#555';
            //modalText.style.fontSize = '2.75vh';
            //modalText.style.textShadow = '1px 1px #eee';
            //modalText.innerHTML = marked.parse(md); 

            

            var url2 = "https://raw.githubusercontent.com/flore-quebec/species/main/Esp%C3%A8ces/"+data[which].famille+"/"+data[which].genre+"/"+data[which].espèce.replace(" ","_")+".md";

            //fetch(url)
            //  .then(r => r.blob())
            //  .then(b => b.text())
            //  .then(m => {modalText.innerHTML=marked.parse(m)});
              
            var md2 = `<p style="font-size: 1.5vh; text-align: right;">FL&#11206</p> <h3>Flore Laurentienne</h3>
            1. <b>Dactylis glomerata</b> L. — Dactyle pelotonné. — (_Orchard-grass_). — Plante cespiteuse
à souche fibreuse; chaume (long. 40-150 cm.); feuilles (larg. 2-6 mm.); panicule (long. 8-20
cm.) à branches solitaires, un peu scabres. Floraison estivale. Champs et lieux ombragés,
particulièrement dans les vergers. Général dans les lieux habités du Québec. Naturalisé de
l'Eurasie, où il est souvent cultivé. (Fig. 295). n = 14

Graminée de haute stature qui s'élève au-dessus des autres plantes et les écarte par sa vigueur. Les chaumes,
presque toujours un peu inclinés, sont terminés par une panicule unilatérale dont les pédicelles inférieurs sont écartés,
et les supérieurs resserrés, ce qui lui donne une apparence unique.`;
            //modalText.style.fontFamily = 'Special Elite';
            //modalText.style.fontColor = '#555';
            //modalText.style.fontSize = '2.75vh';
            //modalText.style.textShadow = '1px 1px #eee';
            //modalText.innerHTML = marked.parse(md);

            var fl = false;
            var url;
            var md;

            function changeText(flo) {
              if(flo) {
                url = "https://raw.githubusercontent.com/flore-quebec/species/main/Esp%C3%A8ces/"+data[which].famille+"/"+data[which].genre+"/"+data[which].espèce.replace(" ","_")+".md";
                
                fetch(url)
                  //.then(r => r.blob()) # useful if what is read is not necessarily text?
                  .then(b => b.text())
                  .then(m => {
                    let mm = taxa_links(m, headerText);
                    modalText.innerHTML=marked.parse(mm);
                  });
                const ct = document.getElementById("textchange");
                ct.style.fontFamily = 'Special Elite';
                ct.innerHTML = '<span style="color: #999;">&#11207</span> <span style="color: black;">&#11208</span>';
                //modalText.appendChild(ct);
                modalText.style.fontFamily = 'League Spartan';
                modalText.style.fontColor = '#444';
                modalText.style.fontSize = '3vh';
                modalText.style.textShadow = '0px 0px #eee';
                
                fl = false;  
              } else {
                md = `<h2 class="fl">Flore laurentienne (1ère édition)</h2>
                1. <b>Dactylis glomerata</b> L. — Dactyle pelotonné. — (Orchard-grass). — Plante cespiteuse
    à souche fibreuse; chaume (long. 40-150 cm.); feuilles (larg. 2-6 mm.); panicule (long. 8-20
    cm.) à branches solitaires, un peu scabres. Floraison estivale. Champs et lieux ombragés,
    particulièrement dans les vergers. Général dans les lieux habités du Québec. Naturalisé de
    l'Eurasie, où il est souvent cultivé. (Fig. 295). n = 14 <br><br>Graminée de haute stature qui s'élève au-dessus des autres plantes et les écarte par sa vigueur. Les chaumes,
    presque toujours un peu inclinés, sont terminés par une panicule unilatérale dont les pédicelles inférieurs sont écartés,
    et les supérieurs resserrés, ce qui lui donne une apparence unique.`;
                const ct = document.getElementById("textchange");
                ct.style.fontFamily = 'League Spartan';
                ct.innerHTML = '<span style="color: black;">&#11207</span> <span style="color: #999;">&#11208</span>';
                modalText.style.fontFamily = 'Special Elite';
                modalText.style.fontColor = '#555';
                modalText.style.fontSize = '2.75vh';
                modalText.style.textShadow = '0px 0px #eee';
                modalText.innerHTML = marked.parse(md);
                //modalText.appendChild(ct);
                fl = true;
                console.log("***** false *******", fl);
              };
            }
            
            changeText(true);
            
            const tooc = document.getElementById("textchange");
            tooc.addEventListener('click', () => {
              changeText(fl);
            });
            
            //changeText(true);


            // Add images to modal
            // var isna; 
            imageArray.forEach(function (imageUrl, index) {
                const image = document.createElement('img');
                //const image = document.getElementById('modalImages');
                image.classList.add('modal-image');
                if(imageUrl === 'NA') {
                  image.src = 'https://cdn.hebergix.com/fr/floreqc/blank.jpg';
                } else {
                  image.src = imageUrl;//.replace("medium","medium");
                };
                //image.onerror="this.style.display='none'";
                //image.onerror="this.src='https://www.inaturalist.org/photos/355007378?size=small'";
                //isna = imageUrl;
                if(imageUrl != 'NA') {
                  image.onclick = function() {openGallery(imageUrl, index);};
                  //https://stackoverflow.com/questions/52723799/browser-goes-forward-two-steps-with-history-pushstate
                  //image.addEventListener('click', function(event) {
                  //  event.preventDefault();
                  //});
                };
                
                modalImages.appendChild(image);
                //<img class="thumbnail-image" src=${imageUrl} alt="Image 1" onclick="openGallery(${imageUrl}, 0)">
            });

            //console.log(data[which].section);
            var section;
            if(data[which].section === '') {
              section = '';
            } else {
              section = '&nbsp>&nbsp'+'<a class=taxonomylink href='+window.location.pathname+'?section='+data[which].section+'>'+data[which].section+'</a>';
            };
            
            const taxonomy = document.getElementById('taxonomy');
            
            //taxonomy.innerHTML=data[which].class+'&nbsp>&nbsp'+data[which].ordre+'&nbsp>&nbsp'+'<a class=taxonomylink href='+window.location.pathname+'?famille='+data[which].famille+'>'+data[which].famille+'</a>'+'&nbsp>&nbsp'+'<a class=taxonomylink href='+window.location.pathname+'?genre='+data[which].genre+'>'+data[which].genre+'</a>'+section;
            
            const levels = ["class", "ordre", "famille", "sous-famille", "tribu", "sous-tribu", "genre", "sous-genre", "section"];
            const levelnames = ["Classe", "Ordre", "Famille", "Sous-famille", "Tribu", "Sous-tribu", "Genre", "Sous-genre", "Section"];
            const taxons = levels.map(level => data[which][level]);
            console.log("taxons", taxons);
            let tax = levels.map((level, index) => ({
              level,
              name: levelnames[index],
              value: taxons[index],
            }));
            tax = tax.filter(item => item.value !== '');
            console.log("tax", tax);
            
            set_taxonomy(tax);
            
            const right = document.getElementById('links');


            //links.innerHTML='<a target="_blank" href='+data[which].vascan+'><img class="fna" src="https://cdn.hebergix.com/fr/floreqc/vascanlogo.jpg"></a><a target="_blank" href='+data[which].herbierqc+'><img class="fna" src="https://cdn.hebergix.com/fr/floreqc/herbier.png"></a><a target="_blank" href='+data[which].inat+'><img class="fna" src="https://static.inaturalist.org/sites/1-favicon.png?1573071870"></a><a target="_blank" href='+data[which].gbif+'><img class="fna" src="https://images.ctfassets.net/uo17ejk9rkwj/5NcJCYj87sT16tJJlmEuWZ/85058d511b3906fbbb199be27b2d1367/GBIF-2015-mark.svg"></a><a target="_blank" href='+data[which].fna+'><img class="fna" src="https://cdn.hebergix.com/fr/floreqc/fna.jpg"></a><a target="_blank" href='+data[which].powo+'><img class="fna" src="https://powo.science.kew.org/img/powo-favicon.ico"></a>';
            
            const spbq = 'https://biodiversite-quebec.ca/fr/atlas?mapCenter=55%2C-72&scale=Nombre+d%27observations&region_type=hex&group=Toutes+les+esp%C3%A8ces&taxon=' + data[which].espèce.replace(" ","+") + '&minyear=1950&maxyear=2024&mapZoom=5&activeTab=2&selected_region_type=hex';
            const spgb = 'https://gobotany.nativeplanttrust.org/species/' + data[which].espèce.replace(" ","/") + '/';
            const spmwf =  'https://www.minnesotawildflowers.info/search?kw=' + data[which].espèce.replace(" ","+") ;
            const spmichigan =  'https://www.michiganflora.net/browse';
            
            links.innerHTML=makeLink(data[which].inat,"inat")+makeLink(data[which].vascan,"vascan")+makeLink(data[which].herbierqc,"herbierqc")+makeLink(spbq,"bq")+makeLink(spgb,"gobotany")+makeLink(spmwf,"minnesota")+makeLink(spmichigan,"michigan")+makeLink(data[which].gbif,"gbif")+makeLink(data[which].fna,"fna")+makeLink(data[which].powo,"powo");
            const author = document.getElementById('modalAuthor');
            const scien_alternatif = document.getElementById('scien_alternatif');
            const verna_fr = document.getElementById('verna_fr');
            const verna_alternatif_fr = document.getElementById('verna_alternatif_fr');
            const verna_en = document.getElementById('verna_en');
            const statut = document.getElementById('statut');
            const protection = document.getElementById('protection');
            const edit = document.getElementById('edit');
            const contrib = document.getElementById('contributor');

            author.innerHTML = italicizeBeforeSecondSpace(data[which].botanic);
            //scien_alternatif.innerHTML = data[which].alternatif;
            verna_fr.innerHTML = data[which].vernaculaire;
            //verna_alternatif_fr.innerHTML = data[which].vernacularFRalt;
            verna_en.innerHTML = data[which].vernacularEN;
            let statuttext = data[which].status;
            statuttext = statuttext[0].toLowerCase() + statuttext.slice(1);
            statut.innerHTML = 'Espèce ' + statuttext.replace('introduit','introduite');
            protection.innerHTML = makeProtection();
            let initiated = data[which].initiated;
            let edited = data[which].edited;
            if(data[which].contribution === "NA"){ // just fill the column with "" in data
                contrib.innerHTML = ''; 
            } else {
                //contrib.innerHTML = data[which].contribution+"&nbsp;";
                initiated = '<a style="all: unset; cursor: pointer;" href="?page=Contribuer#' + encodeURIComponent(initiated.replaceAll(" ", "")) + '">' + initiated + '</a>';
                //initiated = '<a style="all: unset; cursor: pointer;" href="?page=Contribuer"' + 'Marc-AurèleVallée' + '">' + initiated + '</a>';                
                initiated = 'Initié par ' + initiated;
                if(edited[0] !== ''){
                  
                edited = edited.map(editor => {
    return '<a style="all: unset; cursor: pointer;" href="?page=Contribuer#' + encodeURIComponent(editor.replaceAll(" ", "")) + '">' + editor + '</a>';
});  
                  
                  if(edited.length > 1){
                    edited = edited.slice(0, -1).join(', ') + ' et ' + edited[edited.length - 1];
                  }
                  contrib.innerHTML = '<span style="display: inline;">' + initiated + '&nbsp;et modifié par ' + edited + '. Mis à jour le ' + data[which].date.slice(0,10) + '.</span>';
                } else {
                  contrib.innerHTML = '<span style="display: inline;">' + initiated + '. Mis à jour le ' + data[which].date.slice(0,10) + '.</span>';
                }
                //contrib.innerHTML = initiated + '&nbsp;et modifié par ' + edited + '. ';
            };
            const edit_link = "https://github.com/flore-quebec/species/tree/main/Esp%C3%A8ces/"+data[which].famille+"/"+data[which].genre+"/"+data[which].espèce.replace(" ","_")+".md";
            edit.innerHTML = '<a class=\"edit\" href=\"' + edit_link + '\" target=\"_blank\">&nbsp;Éditez sur GitHub<img class="minioctocat" src="https://cdn.hebergix.com/fr/floreqc/github-mark.png"></a>';

            const map = document.getElementById('map');
            const pheno = document.getElementById('pheno');
            map.src = "https://cdn.hebergix.com/fr/floreqc/"+headerText.replace(" ","_")+"_map.png";
            pheno.src = "https://cdn.hebergix.com/fr/floreqc/"+headerText.replace(" ","_")+"_pheno.png";

        }


        function closeModal(back) {
            reset_map();
            if(back){
              history.back();
              console.log("**** back closeModal****", window.location.href);
            } else {
              document.getElementById("modal-content").style.display = 'none';
              imageGallery.style.display = 'flex';
              document.getElementById("selected").style.display = 'flex';
              document.getElementById("filters").style.display = 'flex';
            };
        }

        // Function to close the gallery
        function closeGallery(forward) {
            const gallery = document.getElementById("myGallery");
            gallery.style.display = "none";
            //if(forward){
            //  history.back();
            //};
        }
        
        
        function resetKey(){
            const key = document.getElementById("taxon_key");
            const text = document.getElementById("taxon_text");
            key.innerHTML = "";
            text.innerHTML = "";
        }
        
        
        function disableKey(){
            const key = document.getElementById("taxon_key");
            const text = document.getElementById("taxon_text");
            text.style.display = "none";
            key.style.display = "none";
            resetKey();
            var tax = document.getElementById("selected");
            tax.removeEventListener('click', taxonClick);
        }
        

        window.onclick = function (event) {
        //    if (event.target === modal) {
        //        closeModal(true);
        //    };
            const gallery = document.getElementById("gallery-content");
            if (event.target === gallery) {
                closeGallery();
            };
        };


        function updateGallery(group, taxon, frompopstate = false) {
            
            console.log("*** Entering updateGallery ***");
          
            document.getElementById("hexagon-gallery").style.display = 'none';

            document.getElementById("modal-content").style.display = 'none';
            //document.getElementById("selected").style.display = 'flex';
            document.getElementById("imageGallery").style.display = 'flex';
            //document.getElementById("filters").style.display = 'flex';
            
            const groups = ["famille", "genre", "section", "sous-famille", "tribu", "sous-tribu", "sous-genre", "sous-section", "série"];
            
            resetKey();
            //const text = document.getElementById("taxon_text");
            const key = document.getElementById("taxon_key");
            const isHidden = window.getComputedStyle(key).display === "none";
            if(groups.includes(group)){
              if (!isHidden) {
                extractAndDisplay(taxon);
              };
            }
            

            const order = document.getElementsByName('order');

            //let selected;
            let selected;
            var filteredImages;
            let indexsp;
            let indexn;

            //if (group === "famille") {
            //  document.getElementById("selected").style.display = 'flex';
            //  document.getElementById("filters").style.display = 'flex';
            //  filteredImages = data.filter(image => (
            //    (taxon === image[group])
            //  ));
            //} else if (group === "genre") {
            //  document.getElementById("selected").style.display = 'flex';
            //  document.getElementById("filters").style.display = 'flex';
            //  filteredImages = data.filter(image => (
            //    (taxon === image.genre)
            //  ));
            //} else if (group === "section") {
            //  document.getElementById("selected").style.display = 'flex';
            //  document.getElementById("filters").style.display = 'flex';
            //  filteredImages = data.filter(image => (
            //    (taxon === image.section)
            //  ));
            
            
            if (groups.includes(group)) {
              document.getElementById("selected").style.display = 'flex';
              document.getElementById("filters").style.display = 'flex';
              filteredImages = data.filter(image => (
                (taxon === image[group].replaceAll("_"," "))
              ));  
            } else if (group === "species") {
              document.getElementById("selected").style.display = 'none';
              filteredImages = data.filter(image => (
                (taxon === image.espèce)
              ));
            } else if (group === "nom") {
              document.getElementById("selected").style.display = 'none';
              document.getElementById("filters").style.display = 'flex';
              indexsp = nom_values.findIndex(p => p == taxon);
              indexn = common_names[indexsp][taxon.replaceAll(" ","_").replaceAll("-","_").replaceAll("'","_")];
              filteredImages = indexn.map(index => data[index]);
              if(filteredImages.length == 1){
                if(filteredImages[0].vernaculaire == taxon){
                  //addModal(filteredImages[0].espèce, true);
                  console.log("**** frompopstate ****", frompopstate);
                  //addModal(filteredImages[0].vernaculaire, !frompopstate, 'nom');
                  addModal(filteredImages[0].vernaculaire, false, 'nom');
                  last_category = group; //
                  last_value = taxon; //
                  //tomselect.addItem(taxon, true);
                  //tomselect.setValue(taxon, true);
                  return;
                };
              };
              
              
              
            } else if (group === "derniers") {
              document.getElementById("selected").style.display = 'none';
              document.getElementById("filters").style.display = 'flex';
              //selected = speciesSelect.value;
              //last_value = genreSelect.value;
              filteredImages = find_latest(taxon);
            } else if (group === "initié") {
              document.getElementById("selected").style.display = 'none';
              document.getElementById("filters").style.display = 'flex';
              //selected = speciesSelect.value;
              //last_value = genreSelect.value;
              filteredImages = data.filter(image => (
                (taxon === image["initiated"])
              ));
            } else if (group === 'modifié') {
              document.getElementById("selected").style.display = 'none';
              document.getElementById("filters").style.display = 'flex';
              filteredImages = data.filter(image => (
                (image["edited"].includes(taxon))
              ));
            } else if (group === "statut") {
              document.getElementById("selected").style.display = 'none';
              document.getElementById("filters").style.display = 'flex';
              filteredImages = data.filter(image => (
                ('' != image["LOIEMV"])
              ));
            } else if (group === 'type') {
              document.getElementById("selected").style.display = 'none';
              document.getElementById("filters").style.display = 'flex';
              filteredImages = data.filter(image => (
                (image[group].includes(taxon))
              ));              
            } else {
              filteredImages = data.filter(image => (
                (taxon === image.espèce)
              ));
            };

            console.log("*** Pass the return ***");
            last_category = group;
            last_value = taxon;
            //tomselect.addItem(taxon, true);
            //tomselect.clear(true);
            //tomselect.setValue(taxon, true);
            if(groups.includes(group)){
            //if(group === "famille" || group === "genre" || group === "section") {
              var tax = document.getElementById("selected");
              const haskey = taxa.filter(tax => ((taxon === tax.taxa.replaceAll("_"," "))))[0].key !== "";
              let sym;
              if(haskey){
                sym = "\u25BC";
                tax.addEventListener('click', taxonClick);
              } else {
                sym = "\u0020";
                tax.removeEventListener('click', taxonClick);
              };
            
              document.getElementById("taxon_name").innerHTML = `${taxon} ${sym}`;
              console.log("sub", taxon);
              const sub = data.filter(image => ((taxon === image[group].replaceAll("_", " "))));
              if(group === "famille" || group === "sous-famille" || group === "tribu" || group === "sous-tribu"){
                const nbspecies = new Set(sub.map(item => item.espèce)).size;
                const nbgenus = new Set(sub.map(item => item.genre)).size;
                let stats;
                if(window.innerWidth > 600){
                  stats = "Nb de genres: " + nbgenus + "&nbsp;&nbsp;/&nbsp;&nbsp;Nb d'espèces: " + nbspecies;
                } else {
                  stats = "Nb de genres: " + nbgenus + "<br>Nb d'espèces: " + nbspecies;
                }
                document.getElementById("taxon_stats").innerHTML = stats;
              } else {
                const nbspecies = new Set(sub.map(item => item.espèce)).size;
                document.getElementById("taxon_stats").innerHTML = "Nb d'espèces: " + nbspecies;
              }
            } else {
              document.getElementById("taxon_name").innerHTML = "";
            }


            if( order[2].checked ){
               filteredImages = filteredImages.sort((a, b) => Number(b.nobs) - Number(a.nobs));
            } else if (order[1].checked) {
               filteredImages = filteredImages.sort((a, b) => Number(a.taxonomic_order) - Number(b.taxonomic_order));
            };



            // Clear the current gallery
            imageGallery.innerHTML = '';

            // Add filtered images to the gallery
            filteredImages.forEach(image => {
                const imageElement = document.createElement('div');
                imageElement.className = 'image-container';
                imageElement.id = image.alt;
                map = data.filter(index => (
                  (image.alt === index.species)
                ));
                var spnames;
                if(group === "nom"){
                  spname = image.vernaculaire;
                } else {
                  spname = image.alt;
                };
                
                if(image.src === "NA"){
                  image.src = 'https://cdn.hebergix.com/fr/floreqc/blank.jpg';
                };
                
                //const src = if(image.src === "NA"){"Pas de photo"}else{image.src};

                imageElement.innerHTML = `
                      <img class="image" loading="lazy" src=${image.src} alt=${image.alt}>
                      <div class="image-title">
                        ${spname}<br>
                        <span class="image-credit">${image.credit[0].replace(', some rights reserved','').replace(', no rights reserved','')}</span>
                      </div>
                      <div class="image-map">
                        <img class="image-map-mini" loading="lazy" src="https://cdn.hebergix.com/fr/floreqc/${image.alt.replace(" ","_")}_minimap.png"></img>
                      </div>
                `;
                imageGallery.appendChild(imageElement);
            });

            const imageContainers = document.querySelectorAll('.image-container');
            //


            imageContainers.forEach((container, index) => {
                container.addEventListener('click', () => {
                    //const title = container.querySelector('.image-title').textContent;
                    addModal(container.id, true);
                });
            });

        }
        
        function addModal(species, push, type = 'espèce') {
            console.log("*** Entering addModal ***", species)
            //const title = species;
            const text = '';
            let index;
            if(type == 'espèce'){
              index = data.findIndex(p => p.espèce == species); // tests
            } else {
              index = data.findIndex(p => p.vernaculaire == species); // tests
            };
            const images = data[index].images;
            thumbnails = images.filter(z => z != 'NA');
            which = index;
            updateFocusURL(species, type, text, images, push);
            //openModal(title, text, images);
        }


        // Function to open the gallery with a specific image
        function openGallery(imageSrc, index) {
            currenturl = window.location.href;
            const gallery = document.getElementById("myGallery");
            const galleryImage = document.getElementById("galleryImage");
            const captionText = document.getElementById("caption");
            const linkText = document.getElementById("link");
            //const linkText = document.getElementById(\"link\");

            galleryImage.src = imageSrc;
            gallery.style.display = "block";
            //galleryImage.src = imageSrc;
            galleryImage.src = imageSrc.replace("medium","original");
            currentImageIndex = index;
            captionText.innerHTML = data[which].credit[index].replaceAll(', some rights reserved',', certains droits réservés').replaceAll(', no rights reserved',', aucun droit réservé');
            link = data[which].link[index];
            linkText.innerHTML = '<a class=\"link\" href=\"' + link + '\" target=\"_blank\">' + link + '</a>' ;
        }


        // Function to switch between images in the gallery
        function changeImage(offset) {
            currentImageIndex = (currentImageIndex + offset + thumbnails.length) % thumbnails.length;
            const galleryImage = document.getElementById("galleryImage");
            const captionText = document.getElementById("caption");
            const linkText = document.getElementById("link");
            galleryImage.src = thumbnails[currentImageIndex];
            galleryImage.src = thumbnails[currentImageIndex].replace("medium","original");
            captionText.innerHTML = data[which].credit[currentImageIndex].replaceAll(', some rights reserved',', certains droits réservés').replaceAll(', no rights reserved',', aucun droit réservé');
            //linkText.innerHTML = data[which].link[currentImageIndex];
            link = data[which].link[currentImageIndex];
            linkText.innerHTML = '<a class=\"link\" href=\"'+link+'\" target=\"_blank\">'+link+'</a>' ;
        }
        
        //familleSelect.addEventListener("change", () => updateGroupURL("famille", familleSelect.value));
        //genreSelect.addEventListener("change", () => updateGroupURL("genre", genreSelect.value));
        //sectionSelect.addEventListener("change", () => updateGroupURL("section", sectionSelect.value));
        //speciesSelect.addEventListener("change", () => updateGroupURL("species", speciesSelect.value));
        //nomSelect.addEventListener("change", () => updateGroupURL("nom", nomSelect.value));


        //var filter1 = document.getElementById('filterList1');
        //family_values.forEach(function(item){
        //   var option1 = document.createElement('option');
        //   option1.value = item;
        //   filter1.appendChild(option1);
        //});

        //var filter2 = document.getElementById('filterList2');
        //genus_values.forEach(function(item){
        //   var option2 = document.createElement('option');
        //   option2.value = item;
        //   filter2.appendChild(option2);
        //});
        
        //var filter5 = document.getElementById('filterList5');
        //section_values.forEach(function(item){
        //   var option5 = document.createElement('option');
        //   option5.value = item;
        //   filter5.appendChild(option5);
        //});

        //var filter3 = document.getElementById('filterList3');
        //species_values.forEach(function(item){
        //   var option3 = document.createElement('option');
        //   option3.value = item;
        //   filter3.appendChild(option3);
        //});

        //var filter4 = document.getElementById('filterList4');
        //nom_values.forEach(function(item){
        //   var option4 = document.createElement('option');
        //   option4.value = item;
        //   filter4.appendChild(option4);
        //});


        function changeOrder() {
            if(last_category !== "species") {
              updateGallery(last_category, last_value);
            };
        }


        function linkExists(link) {
          if(link === "" || link === "NA") {
            link;
          } else {
            "";
          };
        }


        function makeLink(link,name) {
          if(link===""){
            return "";
          };
          switch(name){
            case "vascan":
              return '<a target="_blank" href='+link+'><img class="fna" src="https://cdn.hebergix.com/fr/floreqc/vascanlogo.jpg"></a>';
            case "herbierqc":
              return '<a target="_blank" href='+link+'><img class="fna" src="https://cdn.hebergix.com/fr/floreqc/herbier.png"></a>';
            case "inat":
              return '<a target="_blank" href='+link+'><img class="fna" src="https://static.inaturalist.org/sites/1-favicon.png?1573071870"></a>';
            case "bq":
              return '<a target="_blank" href='+link+'><img class="fna" src="https://cdn.hebergix.com/fr/floreqc/bq.png"></a>';
            case "gobotany":
              return '<a target="_blank" href='+link+'><img class="fna" src="https://gobotany.nativeplanttrust.org/static/images/branding/gb-favicon-32x32.png"></a>'; 
            case "minnesota":
              return '<a target="_blank" href='+link+'><img class="fna" src="https://www.minnesotawildflowers.info/includes/images/favicon.png"></a>'; 
            case "michigan":
              return '<a target="_blank" href='+link+'><img class="fna" src="https://www.michiganflora.net/static/img/um_favicon.ico"></a>';              
            case "gbif":
              return '<a target="_blank" href='+link+'><img class="fna" src="https://images.ctfassets.net/uo17ejk9rkwj/5NcJCYj87sT16tJJlmEuWZ/85058d511b3906fbbb199be27b2d1367/GBIF-2015-mark.svg"></a>';
            case "fna":
              return '<a target="_blank" href='+link+'><img class="fna" src="https://cdn.hebergix.com/fr/floreqc/fna.jpg"></a>';
            case "powo":
              return '<a target="_blank" href='+link+'><img class="fna" src="https://powo.science.kew.org/img/powo-favicon.ico"></a>';
          };
        }


        function makeProtection() {
          var pro = data[which].LOIEMV + ", " + data[which].SARASTATUS + ", " + data[which].COSEWIC + ", " + data[which].GRANK+", " + data[which].NRANK + ", " + data[which].SRANK;
          pro = pro.replaceAll("NA, ","-").replace("NA","-");
          if(pro === ", , , , , "){
            return '';
          } else {
            return pro;
          }
        }


        function italicizeBeforeSecondSpace(inputString) {
          // Find the index of the second space
          const secondSpaceIndex = inputString.indexOf(' ', inputString.indexOf(' ') + 1);

          // Check if the second space exists
          if (secondSpaceIndex !== -1) {
            // Extract the substring before the second space and italicize it
            const italicizedPart = `<i>${inputString.substring(0, secondSpaceIndex)}</i>`;

            // Concatenate the italicized part with the rest of the string
            //const resultString = italicizedPart + inputString.substring(secondSpaceIndex);
            const resultString = inputString.substring(secondSpaceIndex);

            return resultString;
          }

          // Return the original string if there is no second space
          return inputString;
        }


        // https://stackoverflow.com/questions/2264072/detect-a-finger-swipe-through-javascript-on-the-iphone-and-android
        let touchstartX = 0
        let touchendX = 0
        let touchstartY = 0
        let touchendY = 0

        function checkDirection() {
          if(isClicked === false){ // swipe pics only if not zoomed in
            const diffX = Math.abs(touchendX - touchstartX);
            const diffY = Math.abs(touchendY - touchstartY);
            if( diffX > diffY && diffX > 10){
              if (touchendX < touchstartX) changeImage(1)//alert('swiped left!')
              if (touchendX > touchstartX) changeImage(-1)//alert('swiped right!')
            }  
          }
        }

        document.addEventListener('touchstart', e => {
          touchstartX = e.changedTouches[0].screenX
          touchstartY = e.changedTouches[0].screenY
        })

        document.addEventListener('touchend', e => {
          touchendX = e.changedTouches[0].screenX
          touchendY = e.changedTouches[0].screenY
          checkDirection()
        })
        
          
        const image = document.getElementById('galleryImage');
        //const zoom = document.getElementById('zoom'); // testing

        let isClicked = false;
      
        image.addEventListener('click', function(event) {
          if (!isClicked) {
            image.classList.add('zoomed');
            //zoom.classList.add('zoomeddiv');
            isClicked = true;
            image.style.cursor = 'zoom-out';
            let x = event.offsetX;
            let y = event.offsetY;
            image.style.transformOrigin = `${x}px ${y}px`; /* Adjust transform origin based on mouse position */
          } else {
            image.classList.remove('zoomed');
            //zoom.classList.remove('zoomeddiv');
            isClicked = false;
            image.style.cursor = 'zoom-in';
          }
        });
      
        image.addEventListener('mousemove', function(event) {
          if (isClicked) {
            let x = event.offsetX;
            let y = event.offsetY;
            image.style.transformOrigin = `${x}px ${y}px`; /* Adjust transform origin based on mouse position */
          }
        });
        
        function zoom_reset() {
           const image = document.getElementById("galleryImage");
           //image.classList.remove('zoomed');
           image.classList.remove('zoomed');
           isClicked = false;
           image.style.cursor = 'zoom-in';
        } 
        
        image.addEventListener('mouseout', function(event) {
           zoom_reset();
        });
        

        // add the PMTiles plugin to the maplibregl global.
        const protocol = new pmtiles.Protocol();
        maplibregl.addProtocol('pmtiles', (request) => {
            return new Promise((resolve, reject) => {
                const callback = (err, data) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve({data});
                    }
                };
                protocol.tile(request, callback);
            });
        });

      //let geo = fetch('https://cdn.hebergix.com/fr/floreqc/Ixobrychus_exilis.geojson')
      //           .then(r => r.json())
      //           .then(r => console.log("**********", r));
                 
      //const fetchPromise = fetch('https://cdn.hebergix.com/fr/floreqc/Ixobrychus_exilis.geojson');
      //    fetchPromise
      //      .then((response) => response.json())
      //      .then((data) => {
      //        console.log(data);
      //      });

      // we first fetch the header so we can get the center lon, lat of the map.
      
      //const test = fetch('https://flore-quebec.nyc3.cdn.digitaloceanspaces.com/Aquila_chrysaetos.pmtiles');
      //console.log("***** test ******", test);
    
      
      function species_occs(sp) {
  
          //const PMTILES_URL = 'https://object-arbutus.cloud.computecanada.ca/bq-io/acer/niches_climatiques/obs/' + sp + '.pmtiles';
          
          //https://flore.quebec.nyc3.cdn.digitaloceanspaces.com/Ixobrychus_exilis.pmtiles
          
          
          const PMTILES_URL = 'https://flore-quebec.nyc3.cdn.digitaloceanspaces.com/' + sp + '.pmtiles';
          //const PMTILES_URL = 'https://nyc3.digitaloceanspaces.com/flore.quebec/Aquila_chrysaetos.pmtiles';
          //const PMTILES_URL = 'https://flore.quebec.nyc3.cdn.digitaloceanspaces.com/Aquila_chrysaetos.pmtiles';
          const p = new pmtiles.PMTiles(PMTILES_URL);
          //console.log(p.getHeader());
  
          // this is so we share one instance across the JS code and the map renderer
          protocol.add(p);
          //console.log(p.getMetadata().then(result => {console.log(result.tilestats.layers[0].attributes)}));
          
           //console.log("*******", p.source.data);
            
            
          p.getHeader().then(h => {
              var map2 = new maplibregl.Map({
                  container: 'map2',
                  zoom: h.maxZoom -4,
                  //center: [h.centerLon, h.centerLat],
                  center: [-70, 53],
                  zoom: 2.75,
                  style: {
                      version:8,
                      sources: {
                          'example_source': {
                              type: 'vector',
                              url: `pmtiles://${PMTILES_URL}`,
                              attribution: '© <a target="_blank" href="https://openstreetmap.org">OpenStreetMap</a> contributors © <a target="_blank" href="https://openmaptiles.org/">OpenMapTiles</a>'
                          },
                          'raster-tiles': {
                          'type': 'raster',
                          'tiles': [
                              // NOTE: Layers from Stadia Maps do not require an API key for localhost development or most production
                              // web deployments. See https://docs.stadiamaps.com/authentication/ for details.
                              //'https://tiles.stadiamaps.com/tiles/stamen_toner_lite/{z}/{x}/{y}.jpg'
                              //'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
                              //'http://c.tile.opentopomap.org/{z}/{x}/{y}.png'
                              'https://tile.gbif.org/3857/omt/{z}/{x}/{y}@1x.png?style=gbif-geyser'
                              //'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
                          ],
                          'tileSize': 256,
                          'attribution':
                              'GBIF Geyser par <a target="_blank" href="http://stamen.com">GBIF.org</a> | <a target="_blank" href="http://stamen.com">GBIF.org</a>  <a target="_blank" href="https://doi.org/10.15468/dl.3txsdx">https://doi.org/10.15468/dl.3txsdx</a>'
                      }
                      },
                      layers: [
                          {
                              'id': 'simple-tiles',
                              'type': 'raster',
                              'source': 'raster-tiles',
                              'minzoom': 0,
                              'maxzoom': 22
                          },
                          {
                              'id': 'observations',
                              'source': 'example_source',
                              'source-layer': sp,
                              'type': 'circle',
                              'paint': {
                                  'circle-color': [
                                      "case",
                                      ["==", ["get", "recordedBy"], "François Rousseu"], "forestgreen",
                                      ["==", ["get", "dataset_name"], "eButterfly"], "forestgreen",
                                      ["==", ["get", "dataset_name"], "iNaturalist Research-grade Observations"], "forestgreen", 
                                      "forestgreen",
                                    ],
                                  'circle-radius': 3,
                                  'circle-opacity': 0.80,
                                  'circle-stroke-color': 'black',
                                  'circle-stroke-opacity': 0.85,
                                  'circle-stroke-width': 0.25,
                              }
                          }
                      ]
                  }
              });
              
              map2.addControl(new maplibregl.FullscreenControl());
              
              //console.log(map2.querySourceFeatures().entries("recordedBy"));
              
              map2.on('load', () => {
                
                //console.log("*** query ***", map2.queryRenderedFeatures()[0].properties);
              
                map2.setPaintProperty('observations', 'circle-radius', [
                  'interpolate', ['exponential', 1.45], ['zoom'],
                  3,4,
                  13,12
                ]);
                

                
                const myBounds = map2.getSource("example_source").bounds;
                //map2.setMaxBounds(myBounds);
                map2.fitBounds(myBounds, {maxZoom: 8, maxDuration: 0.01, padding: {top: 25, bottom:100, left: 50, right: 50}});
                
                const geyser = {
                          name: 'GBIF Geyser',
                          tiles: ['https://tile.gbif.org/3857/omt/{z}/{x}/{y}@1x.png?style=gbif-geyser'],
                          attribution:
                              'GBIF Geyser par <a target="_blank" href="http://stamen.com">GBIF.org</a> | <a target="_blank" href="http://stamen.com">GBIF.org</a>  <a target="_blank" href="https://doi.org/10.15468/dl.3txsdx">https://doi.org/10.15468/dl.3txsdx</a>'
                }
                const osmCycle = {
                    name: "OSM Cycle",
                    tiles: ['https://a.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png'],
                }
                const esriTerrain = {
                    name: "Esri Terrain",
                    tiles: ['https://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}'],
                    maxzoom: 13,
                    attribution: 'Tiles &copy; Esri &mdash; Source: USGS, Esri, TANA, DeLorme, and NPS',
                }
                const baseLayers = {
                    geyser,
                    osmCycle,
                    esriTerrain,
                }
                const basemapControl = new BasemapControl({ basemaps: baseLayers, initialBasemap: "geyser"  });
                //map2.addControl(basemapControl, 'top-left');
                });
              
              
                map2.on('click', 'observations', (e) => {
                   //const coordinates = e.features[0].geometry.coordinates..slice();
                   //const description = e.features[0].properties.description;
                    const prop = e.features[0].properties;
                    //console.log(Object.keys(prop));
                    const popuphtml = popup_text(prop);
                    const latlon = [prop['longitude'], prop['latitude']];
                    //console.log(latlon);
                   
                    let popup = new maplibregl.Popup()
                      .setHTML(popuphtml)
                      .setLngLat(latlon)
                      .setMaxWidth("250px")
                      .addTo(map2);
                      
                    let popupElem = popup.getElement();
                    popupElem.style.fontSize = "clamp(12px, 1.3vh, 22px)";  
                    popupElem.style.fontFamily = "League Spartan";
                    popupElem.style.overflowWrap = "break-word";
                   
                });
              
              
                // Change the cursor to a pointer when the mouse is over the places layer.
                map2.on('mouseenter', 'observations', () => {
                    map2.getCanvas().style.cursor = 'pointer';
                });
        
                // Change it back to a pointer when it leaves.
                map2.on('mouseleave', 'observations', () => {
                    map2.getCanvas().style.cursor = '';
                });
              
          });
          

      }
        
      //const map = document.getElementById('map');
      map.addEventListener('click', function(event) {  
        //console.log(getURLparams().has("nom"));
        
        var urlParams = new URLSearchParams(window.location.search);
        let getsp;
        if(urlParams.has("nom")){
          const nom = urlParams.get("nom");
          const spe = data.filter(sp => (
            (nom === sp.vernaculaire)
          ))[0].espèce;
          getsp = spe.replace(" ","_");
        } else {
          getsp = getURLparams().espèce[0].replace(" ","_");
        };

        species_occs(getsp);
        const staticmap = document.getElementById('map');
        staticmap.style.display = 'none';
        map2.style.display = 'block';
        //staticmap.style.visibility = 'hidden';
        //map2.style.visibility = 'visible';
      });
        
        
      //map2.on('fullscreenstart', function(event) {    
      //  const myBounds = map2.getSource("example_source").bounds;
      //          //map2.setMaxBounds(myBounds);
      //  map2.fitBounds(myBounds, {padding: {top: 25, bottom:50, left: 50, right: 50}});
      //});
      // Search params  
      //const queryString = window.location.search;
      //const urlParams = new URLSearchParams(queryString);
      
      //const product = urlParams.get('product')
      
      //function addUrlParameter(name, value) {
      //   var searchParams = new URLSearchParams(window.location.search)
      //   searchParams.set(name, value)
      //   window.location.search = searchParams.toString()
      //   //updateGallery("genre");
      //}
      
      // Function to update URL with selected option
      function updateGroupURL(param, value) {
          //var newURL = window.location.href.split('?')[0]; // Get the current URL without parameters
          
          //familleSelect.value = '';
          //genreSelect.value = '';
          //sectionSelect.value = '';
          //speciesSelect.value = '';
          //nomSelect.value = '';
          //var chosen = document.getElementById(param);
          //chosen.value = value;
          
          var newURL = window.location.pathname; // Get the current URL without parameters
          newURL += '?' + param + '=' + value; // Add the new parameter with the selected option value
          newURL = newURL.replaceAll(' ','+');
          //if (!history.state || history.state.page!=newURL){
          //if (history.state.page!=newURL){
          var states = {};
          //if(param !== 'espèce'){
            states['group'] = param;
            states['taxon'] = value;
          //};
          //states[param] = value;
          history.pushState(states, '', newURL); // Update the URL without reloading the page
          document.title = value;
          updateGallery(param, value);
            //history.pushState({ "page": newURL }, '', newURL); //https://stackoverflow.com/questions/30429172/html5-history-api-cannot-go-backwards-more-than-once
          //};
          //https://stackoverflow.com/questions/58039669/how-to-listen-for-changes-to-window-location-search-in-2019
          //history.forward();
          //history.back();
          //window.location.reload();
          //window.location.href = newURL;
          //var popStateEvent = new PopStateEvent('popstate', { param: value });
          //dispatchEvent(popStateEvent);
          //var urlParams = new URLSearchParams(window.location.search);
          
      }
      
      function updateFocusURL(value, type, text, images, push) {
          var newURL = window.location.pathname; // Get the current URL without parameters
          //var states = history.state;
          var states = {};
          var spe;
          //states['group'] = param;
          //states['taxon'] = value;
          if(type == 'espèce'){
            states['espèce'] = value;
            newURL += '?' + 'espèce=' + value;//state2querystring(states); // Add the new parameter with the selected option value
            newURL = newURL.replaceAll(' ','+'); 
            spe = value;
          } else {
            states['nom'] = value;
            newURL += '?' + 'nom=' + value;//state2querystring(states); // Add the new parameter with the selected option value
            newURL = newURL.replaceAll(' ','+');        
            spe = data.filter(sp => ((value === sp.vernaculaire)))[0].espèce;
          };

          if(push){
            //if(replace){
            //  history.replaceState(states, '', newURL); // replace the URL without reloading the page
            //} else {
            //  history.pushState(states, '', newURL); // Update the URL without reloading the page
            //};
            history.pushState(states, '', newURL); // Update the URL without reloading the page
            //if(replace){
            //  history.replaceState(states, '', newURL); // replace the URL without reloading the page
            //};
          };
          //console.log("**** push updateFocusURL ****",newURL);
          document.title = value;
          openModal(spe, text, images);
      }
      
      
      function updatePageURL(param, value) {
          var newURL = window.location.pathname; // Get the current URL without parameters
          newURL += '?' + param + '=' + value; // Add the new parameter with the selected option value
          newURL = newURL.replaceAll(' ','+');
          var states = {};
          states['group'] = param;
          states['taxon'] = value;
          history.pushState(states, '', newURL); // Update the URL without reloading the page
          document.title = value;
      }
      
      function updatePage(page) {
        let pages = ["Home", "Explorer", "Contribuer", "Apropos"];
        //const otherpages = ["Explorer", "Contribuer", "Apropos"];
        //if(page == 'Home' && reload){
        //  
        //} else {
        //  
        //}
        //home.style.display = 'none';
        //explorer.style.display = 'none';
        //contribuer.style.display = 'contents';
        //apropos.style.display = 'none';
        
        //const ids = ['id1', 'id2', 'id3']; // List of IDs
        const ids = pages.filter(item => item !== page);
        //console.log("pages to open", page);
        //console.log("pages to close", ids);
        ids.forEach(id => {
          const element = document.getElementById(id);
          if (element) {
              element.style.display = 'none';
          };
        });
        if(page != 'Homeeee'){
          document.getElementById(page).style.display = 'contents';
        };
        
      }
      
      
      
        
        function getURLparams() {
            var urlParams = new URLSearchParams(window.location.search);
            var params = {};

            // Loop through all parameter keys
            for (const key of urlParams.keys()) {
                // Use getAll() method to retrieve all values associated with the key
                params[key] = urlParams.getAll(key);
            }
            return params;
        }

        // Listen for the popstate event to detect URL changes
        //window.navigation.addEventListener('navigate', function(event) {
        //});
        
        //window.addEventListener('beforeunload', function(event) {
        //    if (map2) {
        //      map2.removeLayer("observations"); // Remove the map
        //      //map2 = null; // Clear reference to map instance
        //    }
        //});
        
        function reset_map(){
            const staticmap = document.getElementById('map');
            map2.innerHTML='';
            staticmap.style.display = 'block';
            map2.style.display = 'none';
        }
        
        
        window.addEventListener('popstate', function(event) {
            console.log("Popstate fired:", event.state);
            //reset_map();
            //const querystring = window.location.search.substring(1);
            //if(querystring == ''){
            //  document.getElementById("hexagon-gallery").style.display = 'flex';
            //} else {
            //  document.getElementById("hexagon-gallery").style.display = 'none';
            //};
            
            const querystring = window.location.search.substring(1);
            if(querystring !== ''){
              document.getElementById("hexagon-gallery").style.display = 'none';
            };
            //  document.getElementById("hexagon-gallery").style.display = 'none';
            //};
            
            
            const pars = new URLSearchParams(window.location.search);
            const params = getURLparams();


            if (!pars.toString()) {
              window.location.reload();
              console.log("***** reload ******");
            } else if ('page' in params){
              console.log("param value", params["page"][0]);
              updatePage(params["page"][0]);
              document.title = params["page"][0];
            //} else if (document.getElementById("myGallery").style.display == 'block') {
            } else if ('espèce' in params){
              console.log("popstate espèce in params");
              closeGallery(true);
              //console.log("espèce");
              //console.log("events", event.state.group, event.state.taxon)
              //tomselect.addItem(params['espèce'].toString(), true);
              //tomselect.setValue(params['espèce'].toString(), true);
              addModal(params['espèce'].toString(), false);
              updatePage("Home");
                //urlParams = new URLSearchParams(window.location.search);
                //const espèce = currenturl.split('?')[1];  
                //var states = {};
                //states["espèce"] = espèce; 
                //updateGallery(event.state.group, event.state.taxon);
                //history.replaceState(states, '', currenturl);
            //} else if (modal.style.display == 'block') {
            //} else if (imageGallery.style.display == 'none') {
            //  console.log("imageGallery");
            } else {
                console.log("popstate else");
                closeModal(false);
                closeGallery(true);
                last_value = params[Object.keys(params)[0]][0];
                updateGallery(Object.keys(params)[0], params[Object.keys(params)[0]][0], true);                
                updatePage("Home");
            };
        });
        
        
        
        //window.addEventListener('load', function() {
        //  console.log('First function');
        //  load_contributions();
        //});
        
        
        
        
        window.addEventListener('load', function() {
          console.log('*** load event!!! ****');
          //document.getElementById("hexagon-gallery").style.display = 'none';
        //window.onload = function() {
        //window.onload = (event) => {
          //load_contributions();
          //const domain = window.location.href.split('?')[0];  
          //var urlParams = window.location.search;
          const querystring = window.location.search.substring(1);
          console.log("querystring", querystring);
          //history.pushState({ "page": window.location.href }, '', window.location.href); 
          
          if(querystring == ''){
            set_hex();
            get_stats();
          };
          
          if (querystring != '') {
            var urlParams = new URLSearchParams(window.location.search);
            if(urlParams.has("espèce")){
              addModal(urlParams.get("espèce"), true);
              document.title = urlParams.get("espèce");
            } else if(urlParams.has("derniers")) {
              const params = getURLparams();
              const group = Object.keys(params)[0];
              const taxon = params[group][0];
              last_value = taxon;
              updateGallery(group, taxon);
              document.title = 'Ajouts récents';
            } else if(urlParams.has("page")) {
              load_contributions();
              const params = getURLparams();
              const group = Object.keys(params)[0];
              const taxon = params[group][0];
              last_value = taxon;
              updatePage(taxon);
              document.title = group;  
            } else {
              //window.location = domain;
              //history.pushState({ "page": window.location.href }, '', window.location.href); 
              const params = getURLparams();
              const group = Object.keys(params)[0];
              const taxon = params[group][0];
              last_value = taxon;
              updateGallery(group, taxon);
              document.title = taxon;
            };

          }
          return true;
        //    const params = getURLparams();
        //    const firstKey = Object.keys(params)[0];
        //    const firstValue = params[firstKey];
        //    updateGallery(firstKey, firstValue);
        });
        
        function state2querystring(state) {
            let queryString = '';
            let exclude = ["group", "taxon"];
            for (const key in state) {
                if(!(key.includes("group") || key.includes("taxon"))){;
                    if (state.hasOwnProperty(key)) {
                        if (queryString.length > 0) {
                            queryString += '&';
                        }
                        queryString += `${encodeURIComponent(key)}=${encodeURIComponent(state[key])}`;
                    }
                };
            }
            return queryString;
        }
        
        function find_latest(n) {
          let array = data.filter(cont => (('NA' != cont.initiated)));; // only keep what was initiated
          let key = "date";
          array.sort((a, b) => {
              if (a[key] < b[key]) {
                  return 1; // Return 1 to indicate that 'a' comes after 'b'
              }
              if (a[key] > b[key]) {
                  return -1; // Return -1 to indicate that 'a' comes before 'b'
              }
              return 0; // Return 0 if the values are equal
          });
          return array.slice(0, n);
        }
        
        function popup_text(e) {
            
            const dataset = '<center><b>' + e['datasetName'].replace(" - ","<br>") + '</b></center><hr>';
            const link = '<hr><a target="_blank" href=' + e['link'] + '>' + e['link'] + '</a><br>';
          
            //const dataset = '<center><b>Herbier Louis-Marie (QFA)<br>Collection de plantes vasculaires</b></center><hr>'+ Object.entries(e);
            console.log(Object.entries(e));
            const pop = Object.entries(e)
                          .slice(3, 8)
                          .map(([key, value]) => '<b>' + key + '</b>   ' + value)
                          .join('<br>');
                      
            return dataset + pop + link;          
        }
        
        
  var tax = document.getElementById("selected");
  const taxonClick = () => {
    open_taxon();
  };
  //tax.addEventListener('click', taxonClick);
 
  function open_taxon() {
    const stats = document.getElementById("taxon_stats");
    const text = document.getElementById("taxon_text");
    const key = document.getElementById("taxon_key");
    const isHidden = window.getComputedStyle(text).display === "none";
    let header = document.getElementById("taxon_name");
    let symbol = header.textContent;
    if (isHidden) {
      header.textContent = symbol.replace("\u25BC", "\u25B2");
    } else {
      header.textContent = symbol.replace("\u25B2", "\u25BC");
      window.scrollTo({top: 0, behavior: 'auto'});
    }
    
    const params = getURLparams();
    const group = Object.keys(params)[0];
    const taxon = params[group][0];
    console.log("taxon param", taxon);
    extractAndDisplay(taxon);
    //stats.style.display = isHidden ? "flex" : "none";
    text.style.display = isHidden ? "flex" : "none";
    key.style.display = isHidden ? "flex" : "none";
  }
        

  const tomselect = new TomSelect('#select-junk',{
  	maxItems: 1,
  	maxOptions: null,
  	preload: true,
  	valueField: 'taxa',
  	labelField: 'taxa',
  	searchField: 'taxa',
  	sortField: [{field:'$order'},{field:'$score'}], //'taxa',
  	options: taxa,
  	optgroups: [
  		{value: 'famille', label: 'Famille'},
  		{value: 'sous-famille', label: 'Sous-famille'},
  		{value: 'tribu', label: 'Tribu'},
  		{value: 'sous-tribu', label: 'Sous-tribu'},
  		{value: 'genre', label: 'Genre'},
  		{value: 'sous-genre', label: 'Sous-genre'},
  		{value: 'section', label: 'Section'},
  		{value: 'série', label: 'Série'},
  		{value: 'espèce', label: 'Espèce'},
  		{value: 'nom', label: 'Nom commun'}
  	],
  	optgroupField: 'level',
  	create: false,
  	loadThrottle: 0,
  	refreshThrottle: 0,
  	closeAfterSelect: true, // Closes the dropdown after a selection
    createOnBlur: true,
    onItemAdd: function(){
      this.blur();
      eventHandler('onItemAdd');
    },
    onFocus: function(){
      this.clear();
    }
  });
  
var eventHandler = function(name) {
  const taxon = tomselect.getValue();
  const level = tomselect.options[taxon].level;
	document.getElementById("hexagon-gallery").style.display = 'none';
	document.getElementById("Home").style.display = 'contents';
	document.getElementById("Explorer").style.display = 'none';
	document.getElementById("Contribuer").style.display = 'none';
	document.getElementById("Apropos").style.display = 'none';
	reset_map();
	if(level != 'espèce'){
	  updateGroupURL(level, taxon);
	} else {
	  addModal(taxon, true);
	};
};
        
        
        
  //const explorer = document.getElementById("explorer");
  //explorer.addEventListener('click', () => {
  //  const explorer = document.getElementById("home").style.display = 'none';
  //});   
  
  const home_tab = document.getElementById("home_tab");
  //const home = document.getElementById("home");
  const explorer_tab = document.getElementById("explorer_tab");
  //const explorer = document.getElementById("explorer");
  const contribuer_tab = document.getElementById("contribuer_tab");
  //const contribuer = document.getElementById("contribuer");
  const apropos_tab = document.getElementById("apropos_tab");
  //const apropos = document.getElementById("apropos");
  
  
  
  home_tab.addEventListener('click', () => {
    //home.style.display = 'none';
    //explorer.style.display = 'none';
    //contribuer.style.display = 'none';
    //apropos.style.display = 'none';
    updatePageURL("page", "Home");
    updatePage("Home");
  });   
  
  explorer_tab.addEventListener('click', () => {
    //home.style.display = 'none';
    //explorer.style.display = 'contents';
    //contribuer.style.display = 'none';
    //apropos.style.display = 'none';
    updatePageURL("page", "Explorer");
    updatePage("Explorer");
  });  
  
  contribuer_tab.addEventListener('click', () => {
    //home.style.display = 'none';
    //explorer.style.display = 'none';
    //contribuer.style.display = 'contents';
    //apropos.style.display = 'none';
    updatePageURL("page", "Contribuer");
    updatePage("Contribuer");
    
    load_contributions();
    
  }); 
  
  apropos_tab.addEventListener('click', () => {
    //home.style.display = 'none';
    //explorer.style.display = 'none';
    //contribuer.style.display = 'none';
    //apropos.style.display = 'contents';
    updatePageURL("page", "Apropos");
    updatePage("Apropos");
  }); 
  
  //explorer_tab.addEventListener('click', () => {
  //  const home = document.getElementById("home");
  //  const explorer = document.getElementById("explorer");
  //  if(home.style.display == 'none'){
  //    home.style.display = 'contents';
  //    explorer.style.display = 'none';
  //  } else {
  //    home.style.display = 'none';
  //    explorer.style.display = 'contents';
  //  }
  //    
  //}); 
  
  
  function load_contributions() {
    const profileContainer = document.getElementById("profile-container");
    profileContainer.innerHTML = '';

    const profilePromises = contributions.map(cont => {
        const profile = document.createElement('div');
        profile.className = 'profile';
        profile.id = cont.name.replaceAll(" ", "");

        const stats = document.createElement('div');
        stats.className = 'stats';
        stats.innerHTML = `
            Nb d'espèces initiées: ${cont.nbspinitiated}<br>
            Nb d'espèces modifiées: ${cont.nbspmodified}<br>
            Nb de changements: ${cont.nbchanges}<br>
            Nb de <i>commits</i>: ${cont.nbcommits}<br><br>
            <a class="acontrib" href="https://florequebec.ca?initié=${cont.name.replaceAll(' ', '+')}">Contributions</a><br>
        `;

        const bio = document.createElement('div');
        bio.className = 'bio';

        const pic = document.createElement('div');
        pic.className = 'pic';

        const url = `https://raw.githubusercontent.com/flore-quebec/species/main/Contributeurs/${encodeURIComponent(cont.name.replace(" ", "_"))}.md`;

        // Fetch Markdown content and process it
        return fetch(url)
            .then(response => response.text())
            .then(data => {
                // Convert Markdown to HTML
                bio.innerHTML = marked.parse(data);

                // Extract comments for images
                const comments = data.match(/<!--(.*?)-->/gs);
                if (comments) {
                    comments.forEach(comment => {
                        const avatar = comment.replace(/<!--|-->/g, '').trim();
                        pic.innerHTML = `<img class="picimg" src="${avatar}" alt="Logo">`;
                    });
                }
            })
            .catch(error => console.error('Error fetching the Markdown file:', error))
            .then(() => {
                // Append stats, bio, and pic to the profile
                profile.appendChild(stats);
                profile.appendChild(bio);
                profile.appendChild(pic);

                return profile; // Return the complete profile element
            });
    });

    // Use Promise.all to ensure all profiles are created and appended in order
    Promise.all(profilePromises).then(profiles => {
        profiles.forEach(profile => profileContainer.appendChild(profile));

        // Handle hash scrolling after all profiles are loaded
        const hash = window.location.hash;
        if (hash) {
            const decodedHash = decodeURIComponent(hash);
            const element = document.querySelector(decodedHash);
            if (element) {
                element.scrollIntoView({ behavior: 'auto', block: 'start' });
            }
        }
    });
  }


  
  function taxa_links(m, tax){

    function transformName(name) {
      const spaceIndex = name.indexOf(' ');
      if (spaceIndex === -1) return name; // No space, return as is
      return name[0] + '.' + name.slice(spaceIndex); // Transform the name
    }
    
    const taxapoint = taxa.map(item => ({
      ...item, // Spread the existing properties
      taxap: transformName(item.taxa) // Add the transformed taxa
    }));
    const current = [tax, transformName(tax)];
    const matches = m.match(/_(.*?)_/g);
    if (matches) {
        let namelist = [...new Set(matches.map(match => match.slice(1, -1)))];
        namelist = namelist.filter(item => !current.includes(item));
        namelist = namelist.filter(item => /[A-Z]/.test(item)); // remove non capital letters strings (ssp, var)
        let taxalist = [];
        const seen = new Set();
        for (const item of namelist) { // keep first occ when there are duplicates e.g. C. arundinacea and Cinna arundinacea
          const equivalenceKey = item.split(' ').slice(1).join(' '); // Get the substring after the first space
          if (item.includes('.')) {
            if (!seen.has(equivalenceKey)) {
              seen.add(equivalenceKey);
              taxalist.push(item); // Keep the first occurrence
            }
          } else {
            seen.add(equivalenceKey);
            taxalist.push(item);
          }
        }
        const taxalistfull = taxalist.map(item => // match with full name otherwise confusion possible e.g. C. latifolia
           item.replace(tax.slice(0, 1) + '.', tax.split(' ')[0])
        );
        let mm = m;
        const ints = taxalist.map((_, index) => index);
        ints.forEach(name => {
            const match = taxapoint.find(item => item.taxa === taxalistfull[name] || item.taxap === taxalistfull[name]);
            if(match){
              mm = mm.replace("_" + taxalist[name] + "_", '<a href="https://florequebec.ca?' + match.level + '=' + match.taxa.replace(" ", "+") + '"><i>' + taxalist[name] + '</i></a>');
            }
        });
        return(mm);
    } else {
        return(m);
    };
  }
  
  
  
  
  function set_taxonomy(tax){
        const container = document.getElementById("gridContainer");
        container.innerHTML = '';
        const linkit = ["famille", "sous-famille", "tribu", "sous-tribu", "genre", "sous-genre", "section", "sous-section", "série"];
        tax.forEach((item, index) => {
            const link = document.createElement("a");
            link.href = window.location.pathname + "?" + item.level + "=" + item.value.replaceAll("_", "+"); // Set the URL
            const div = document.createElement("div");
            div.classList.add("item");
            const divd = document.createElement("div");
            divd.classList.add("description");
            const nsp = data.filter(image => ((item.value === image[item.level]))).length;
            divd.innerHTML = item.name + ' (' + nsp + ')';
            div.appendChild(divd);
            const divv = document.createElement("div");
            divv.classList.add("value");
            //if(item.name.includes([]))
            divv.innerHTML = item.value.replace(/^([^_]*_[^_]*_)/, '');
            div.appendChild(divv);
            if(linkit.includes(item.level)){
              div.classList.add("clickable");
              divv.classList.add("linkunderline");
              link.appendChild(div);
              container.appendChild(link);
            } else {
              container.appendChild(div);
            }
            if (index < tax.length - 1) {
                const separator = document.createElement("div");
                separator.classList.add("separator");
                separator.textContent = ">";
                container.appendChild(separator);
            }
        });
  }
  
  function get_stats(){
    const nbfamily = new Set(data.map(item => item.famille)).size;
    const nbgenus = new Set(data.map(item => item.genre)).size;
    const nbspecies = new Set(data.map(item => item.espèce)).size;
    const nbaccounts = new Set(data.map(item => item.date)).size - 1;
    const nbkeys = taxa.filter(item => item.key !== "").length;
    const nbcontributors = new Set(data.map(item => item.initiated)).size - 1;
    const nbphotos = new Set(data.flatMap(item => item.images)).size;
    const nbphotographers = new Set(data.flatMap(item => item.credit)).size;
    const nblinks = new Set(data.flatMap(item => item.link)).size;
    //const statslabel = [nbfamily, nbgenus, nbspecies, nbaccounts, nbkeys, nbcontributors, nbphotos, nbphotographers, nblinks];
    const cols = [];
    const statsn = {'Familles': [nbfamily, "#35E369"], 'Genres': [nbgenus, "#35E369"], 'Espèces': [nbspecies, "#35E369"], 'Comptes-rendus': [nbaccounts, "seagreen"], 'Clés': [nbkeys, "seagreen"], 'Contributeurs': [nbcontributors, "seagreen"], 'Photos': [nbphotos, "yellowgreen"], 'Photographes': [nbphotographers, "yellowgreen"], 'Observations iNat': [nblinks, "yellowgreen"]};
    const stats = document.getElementById("sitestats");
    Object.entries(statsn).forEach(([key, value]) => {
      const div = document.createElement("div");
      div.classList.add("statselement");
      div.style.border = '0px solid ' + value[1];
      div.style.color = value[1];
      div.style.boxShadow = '1px 1px 3px rgba(0, 0, 0, 0.2)';
      div.innerHTML = key + ': ' + value[0];
      stats.appendChild(div);
    });
  }
  //get_stats();

  
  //load_contributions();
/*  
  // Function to log the state and URL
function logStateAndUrl() {
  console.log("State:", history.state, "URL:", window.location.href);
}

// Wrap history.pushState and history.replaceState to intercept calls
(function () {
  const originalPushState = history.pushState;
  const originalReplaceState = history.replaceState;

  // Overwrite pushState
  history.pushState = function (state, title, url) {
    originalPushState.apply(this, arguments);
    logStateAndUrl(); // Log after pushState
  };

  // Overwrite replaceState
  history.replaceState = function (state, title, url) {
    originalReplaceState.apply(this, arguments);
    logStateAndUrl(); // Log after replaceState
  };

  // Add popstate listener
  window.addEventListener("popstate", logStateAndUrl);
})();
*/
            