
class Menubar extends Menuhdr {
    constructor() {
        try {
            super();
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    
    addElem(elm) {
        try {
            var menu_elm = new Button(elm);
            menu_elm.addOption({
                'font-size'   : '20px'  ,
                'font-weight' : '100'   ,
                'min-width'   : '250px' ,
                'height'      : '50px'  ,
                'sel-color'   : 'white'
            });
            var menuhdr = this;
            var menu = this.menu;
            menu_elm.setClickEvt(function(btn) {
                var idx = menuhdr.getMenuIdx(btn.getId());
                menu.notifySelect(idx);
            });
            this.conts.push(menu_elm);
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    
    init(tgt) {
        try {
            var own = this;
            super.init(tgt);
            tetraring.loader.html(
                './html/parts/menuhdr.html',
                this.getId()
            );
            tetraring.loader.css(
                './css/parts/menubar.css'
            );
            $('#' + this.getId()).css('margin-left', '15px');
            $('#' + this.getId()).css('margin-top', '15px');
            $('#' + this.getId() + ' .menu-bar').click(function(){
                own.menuVisible(true);
            });
            $('#' + this.getId() + ' .menu-bar').css('float', 'left');
            
            $('#' + this.getId() + ' .menu-hdr').css('height'  , $(window).height() + 'px');
            $('#' + this.getId() + ' .menu-hdr').css('position', 'fixed');
            $('#' + this.getId() + ' .menu-hdr').css('z-index' , '100');
            
            for (var key in this.option) {
                if ('height' == this.option[key][0]) {
                    $('#' + this.getId() + ' .menu-hdr').css(
                        'top',
                        $(window).height() - this.option[key][1] + 'px'
                    );
                    $('#' + this.getId() + ' .menu-hdr').css(this.option[key][0], this.option[key][1] + 'px');
                } else {
                    $('#' + this.getId() + ' .menu-hdr').css(this.option[key][0], this.option[key][1]);
                }
            }
            $('#' + this.getId() + ' .menu-close').click(function(){
                own.menuVisible(false);
            });
            
            /* set elements */
            var pad = new Contents('');
            pad.init(this.getId() + ' .menu-hdr');
            $('#' + pad.getId()).css('width', '250px');
            $('#' + pad.getId()).css('height', '70px');
            pad.setVisible(true);
            
            for (var idx in this.conts) {
                this.conts[idx].init(this.getId() + ' .menu-hdr');
            }
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    
    setVisible(flg) {
        try {
            super.setVisible(flg);
            for (var idx in this.conts) {
                this.conts[idx].setVisible(flg);
            }
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    
    menuVisible(flg) {
        try {
            if (true === flg) {
                /* open */
                $('#' + this.getId() + ' .menu-hdr').fadeIn();
                $('#' + this.getId() + ' .menu-hdr').velocity({ left : 0 } , 250 );
            } else {
                /* close */
                $('#' + this.getId() + ' .menu-hdr').velocity({ left : -250 } , 250 );
            }
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
}
/* end of file */
