

var sImagesOn = "/media/images/icons/iconImagesOn.gif";
var sImagesOff = "/media/images/icons/iconImagesOff.gif";

var sNotesOn = "/media/images/icons/iconNotesOn.gif";
var sNotesOff = "/media/images/icons/iconNotesOff.gif";



var Page = {
        curPage: 1,
        paginated: true,
        showImages: true,
        showNotes: false,
        highlightRevisions: false,
        pages: new Array,
        notes: new Array
};

Page.init = function () {
        this.divColumn1 = document.getElementById("divColumn1");
        this.divColumn2 = document.getElementById("divColumn2");
        this.divContent = document.getElementById("divContent");
        this.divPageIndex1 = document.getElementById("divPageIndex1");
        this.divPageIndex2 = document.getElementById("divPageIndex2");
        this.divNotes = document.getElementById("divNotes");
        this.ulBreadcrumbs = document.getElementById("ulBreadcrumbs");
        this.images = this.divContent.getElementsByTagName("img");
        this.imgImages = document.getElementById("imgImages");
        this.imgNotes = document.getElementById("imgNotes");
        this.imgPrint = document.getElementById("imgPrint");
        this.imgEmail = document.getElementById("imgEmail");
        
        this.imgImages.onclick = function () {
                Page.toggleImages();
        };
        
        if (this.imgNotes) {
                this.imgNotes.onclick = function () {
                        Page.toggleNotes();
                };
        }
        
        this.imgPrint.onclick = function () {
                Page.print();
        };
        
        this.imgEmail.onclick = function () {
                Page.email();
        };
        
        var objDiv;
        var i = 0;
        objDiv = document.getElementById("divPage" + i++);
        
        while(objDiv) {
                this.pages[this.pages.length] = objDiv;              
                objDiv = document.getElementById("divPage" + i++);                    
        }
        
        for (var j=0; j < this.images.length; j++) {
                if (this.images[j].className == "note-icon") {
                        this.notes[this.notes.length] = this.images[j];
                }
        }
};

Page.reflow = function () {

};

Page.toggleImages = function () {
        
        var sImage, sAlt, sDisplay;
        this.showImages = !this.showImages;
        
        if (this.showImages) {
                sImage = sImagesOn;
                sAlt = "Images On";
                sDisplay = "";
        } else {
                sImage = sImagesOff;
                sAlt = "Images Off";
                sDisplay = "none";
        }
        
        for (var i=0; i < this.images.length; i++) {
                if (this.images[i].className != "note-icon") {
                        this.images[i].style.display = sDisplay;
                }                
        }
        
        this.imgImages.src = sImage;
        this.imgImages.alt = sAlt;        
};

Page.showPage = function (intPage) {
        
        for (var i=0; i < this.pages.length; i++){
                if (intPage != i) {
                        this.pages[i].style.display = "none";
                } else {
                        this.pages[i].style.display = "block";
                }
        }
        
        this.reflow();
        this.divPageIndex1.innerHTML = "Page " + (intPage+1);
        this.divPageIndex2.innerHTML = "Page " + (intPage+1);
        return false;
};

Page.togglePagination = function () {
        this.pagination = !this.pagination;
        
        if (this.pagination) {
                this.showPage(0);
                this.divPageIndex1.style.display = "none";
                this.divPageIndex2.style.display = "none";
        } else {
                for (var i=0; i < this.pages.length; i++) {
                        this.pages[i].style.display = "";
                }
                this.divPageIndex1.style.display = "";
                this.divPageIndex2.style.display = "";
        }
};

Page.toggleRevisionHighlights = function () {
        this.highlightRevisions = !this.highlightRevisions;
        
        if (this.highlightRevisions) {
                document.styleSheets[1].disabled = false;
        } else {
                document.styleSheets[1].disabled = true;
        }
};

Page.print = function () {
        window.print();
};

Page.email = function () {
        window.location = "mailto:&subject=NCZOnline.net%20article&body=" + escape("Check out this link:\n" + document.location.href);
};

Page.toggleNotes = function () {
        
        var sImage, sAlt, sDisplay;
        this.showNotes = !this.showNotes;
        
        
        if (this.showNotes) {
                sImage = sNotesOn;
                sAlt = "Notes On";
                sDisplay = "inline";
        } else {
                sImage = sNotesOff;
                sAlt = "Notes Off";
                sDisplay = "none";
        }
        

        for (var i=0; i < this.notes.length; i++) {
                this.notes[i].style.display = sDisplay;
        }
        
        this.divNotes.style.display = sDisplay == "inline" ? "block" : "none";
        
        this.imgNotes.src = sImage;
        this.imgNotes.alt = sAlt;        
};

window.onload = function () {
        Page.init();
        Page.reflow();
};



