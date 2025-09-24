function calc() { 
    
    var All = 0;

    var stars = document.getElementsByClassName('form-control');
    
    var Allnum = 0;
    for(let i = 0; i < stars.length; i++){
        Allnum += Number(stars[i].value);
    }

    var t_shirts = document.getElementsByName('t-shirts');
    for(let i = 0; i < t_shirts.length; i++){
        var a = Number(t_shirts[i].value);
        All += 4000*a;
    }

    var band = document.getElementsByName('band');
    for(let i = 0; i < band.length; i++){
        var a = Number(band[i].value);
        All += 1000*a;
    }

    var p_strap = document.getElementsByName('p_strap');
    for(let i = 0; i < p_strap.length; i++){
        var a = Number(p_strap[i].value);
        All += 1300*a;
    }

    var sr = document.getElementsByName('sr');
    for(let i = 0; i < sr.length; i++){
        var a = Number(sr[i].value);
        All += 1000*a;
    }

    var scs = document.getElementsByName('scs');
    for(let i = 0; i < scs.length; i++){
        var a = Number(scs[i].value);
        All += 1500*a;
    }

    var mp = document.getElementsByName('mp');
    for(let i = 0; i < mp.length; i++){
        var a = Number(mp[i].value);
        All += 1500*a;
    }

    var mp = document.getElementsByName('mp');
    for(let i = 0; i < mp.length; i++){
        var a = Number(mp[i].value);
        All += 1500*a;
    }

    var olb = document.getElementsByName('olb');
    for(let i = 0; i < olb.length; i++){
        var a = Number(olb[i].value);
        All += 2500*a;
    }

    var poncho = document.getElementsByName('poncho');
    for(let i = 0; i < poncho.length; i++){
        var a = Number(poncho[i].value);
        All += 10000*a;
    }

    var sh = document.getElementsByName('sh');
    for(let i = 0; i < sh.length; i++){
        var a = Number(sh[i].value);
        All += 4000*a;
    }

    var f_s = document.getElementsByName('f_s');
    for(let i = 0; i < f_s.length; i++){
        var a = Number(f_s[i].value);
        All += 2000*a;
    }

    var b_s = document.getElementsByName('b_s');
    for(let i = 0; i < b_s.length; i++){
        var a = Number(b_s[i].value);
        All += 1500*a;
    }

    var b_t = document.getElementsByName('b_t');
    for(let i = 0; i < b_t.length; i++){
        var a = Number(b_t[i].value);
        All += 2500*a;
    }

    var ctb = document.getElementsByName('ctb');
    for(let i = 0; i < ctb.length; i++){
        var a = Number(ctb[i].value);
        All += 5900*a;
    }

    var ccfp = document.getElementsByName('ccfp');
    for(let i = 0; i < ccfp.length; i++){
        var a = Number(ccfp[i].value);
        All += 2900*a;
    }

    var ccfmp = document.getElementsByName('ccfmp');
    for(let i = 0; i < ccfmp.length; i++){
        var a = Number(ccfmp[i].value);
        All += 2000*a;
    }

    var cfmp = document.getElementsByName('cfmp');
    for(let i = 0; i < cfmp.length; i++){
        var a = Number(cfmp[i].value);
        All += 2600*a;
    }

    var ccp = document.getElementsByName('ccp');
    for(let i = 0; i < ccp.length; i++){
        var a = Number(ccp[i].value);
        All += 2000*a;
    }

    var cph = document.getElementsByName('cph');
    for(let i = 0; i < cph.length; i++){
        var a = Number(cph[i].value);
        All += 2500*a;
    }

    var css = document.getElementsByName('css');
    for(let i = 0; i < css.length; i++){
        var a = Number(css[i].value);
        All += 2000*a;
    }

    var skaf = document.getElementsByName('skaf');
    for(let i = 0; i < skaf.length; i++){
        var a = Number(skaf[i].value);
        All += 2800*a;
    }

    var r_sheet = document.getElementsByName('r_sheet');
    for(let i = 0; i < r_sheet.length; i++){
        var a = Number(r_sheet[i].value);
        All += 1800*a;
    }

    var karin = document.getElementsByName('karin');
    for(let i = 0; i < karin.length; i++){
        var a = Number(karin[i].value);
        All += 1500*a;
    }

    var rwk = document.getElementsByName('rwk');
    for(let i = 0; i < rwk.length; i++){
        var a = Number(rwk[i].value);
        All += 600*a;
    }

    var rac = document.getElementsByName('rac');
    for(let i = 0; i < rac.length; i++){
        var a = Number(rac[i].value);
        All += 700*a;
    }

    var b_b = document.getElementsByName('b_b');
    for(let i = 0; i < b_b.length; i++){
        var a = Number(b_b[i].value);
        All += 2000*a;
    }
    
    var b_ac = document.getElementsByName('b_ac');
    for(let i = 0; i < b_ac.length; i++){
        var a = Number(b_ac[i].value);
        All += 3800*a;
    }
    
    var b_hps = document.getElementsByName('b_hps');
    for(let i = 0; i < b_hps.length; i++){
        var a = Number(b_hps[i].value);
        All += 3500*a;
    }
    
    var b_br = document.getElementsByName('b_br');
    for(let i = 0; i < b_br.length; i++){
        var a = Number(b_br[i].value);
        All += 3000*a;
    }
    
    var l_t_t = document.getElementsByName('l_t_t');
    for(let i = 0; i < l_t_t.length; i++){
        var a = Number(l_t_t[i].value);
        All += 8000*a;
    }
    
    var l_t_b = document.getElementsByName('l_t_b');
    for(let i = 0; i < l_t_b.length; i++){
        var a = Number(l_t_b[i].value);
        All += 7500*a;
    }

    var l_rpc = document.getElementsByName('l_rpc');
    for(let i = 0; i < l_rpc.length; i++){
        var a = Number(l_rpc[i].value);
        All += 900*a;
    }

    var l_rac = document.getElementsByName('l_rac');
    for(let i = 0; i < l_rac.length; i++){
        var a = Number(l_rac[i].value);
        All += 1100*a;
    }

    var l_ps = document.getElementsByName('l_ps');
    for(let i = 0; i < l_ps.length; i++){
        var a = Number(l_ps[i].value);
        All += 1500*a;
    }

    var l_sc = document.getElementsByName('l_sc');
    for(let i = 0; i < l_sc.length; i++){
        var a = Number(l_sc[i].value);
        All += 1500*a;
    }

    var l_cb = document.getElementsByName('l_cb');
    for(let i = 0; i < l_cb.length; i++){
        var a = Number(l_cb[i].value);
        All += 2600*a;
    }

    var bm_p = document.getElementsByName('bm_p');
    for(let i = 0; i < bm_p.length; i++){
        var a = Number(bm_p[i].value);
        All += 2000*a;
    }

    var b_nz = document.getElementsByName('b_nz');
    for(let i = 0; i < b_nz.length; i++){
        var a = Number(b_nz[i].value);
        All += 1800*a;
    }

    var b_bc = document.getElementsByName('b_bc');
    for(let i = 0; i < b_bc.length; i++){
        var a = Number(b_bc[i].value);
        All += 3500*a;
    }
    
    var b_tw = document.getElementsByName('b_tw');
    for(let i = 0; i < b_tw.length; i++){
        var a = Number(b_tw[i].value);
        All += 2500*a;
    }
    document.getElementById("result-erea").innerHTML = "<h3 class='text-white'>合計" + Allnum + "点</h3>" + "<h3 class='text-white'>" + All + "円</h3>";
    document.getElementById("result").innerHTML = "<h3 class='dxtn'>合計" + Allnum + "点</h3>" + "<h3 class='dxtn'>" + All + "円</h3>";
}

function capture() {
    var stars = document.getElementsByClassName('form-control');
    for(let i = 0; i < stars.length; i++){
        if(Number(stars[i].value) == 0){
            document.getElementsByClassName('liner')[i].style.display = "none";
        }
    }
    var pieces = document.getElementsByClassName('piece');
    for(let i = 0; i < pieces.length; i++){
        let children = pieces[i].children;
        let none_count = 0;
        for(let j = 0; j < children.length; j++){
            if(children[j].style.display != "none"){
                none_count++;
            }
        }
        if(none_count == 1){
            pieces[i].style.display = "none";
        }
    }
    html2canvas(document.querySelector("#capture")).then(canvas => {
        //document.body.appendChild(canvas)
        document.getElementById("sshot").style.display = "none";
        document.getElementById("imgmk").style.display = "none";
        var imgData = canvas.toDataURL();
        document.getElementById("sshot").style.display = "block";
        document.getElementById("imgmk").style.display = "block";
        document.getElementById("sshot").href = imgData;
        document.getElementById("imgmk").innerHTML = "画像を再作成";
        for(let i = 0; i < pieces.length; i++){
            pieces[i].style.display = "block";
        }
        for(let i = 0; i < stars.length; i++){
            document.getElementsByClassName('liner')[i].style.display = "block";
        }
    });
}

function plus(i) {
    var num_texts = document.getElementsByClassName('num_hold');
    var num_input = document.getElementsByClassName('form-control');
    // alert(num_input[i].value);
    var num = Number(num_input[i].value);
    num_texts[i].innerHTML = num + 1;
    num_input[i].value = num + 1;
    calc();
}

function minus(i) {
    var num_texts = document.getElementsByClassName('num_hold');
    var num_input = document.getElementsByClassName('form-control');
    // alert(num_input[i].value);
    var num = Number(num_input[i].value);
    if (num == 0) {
        return;
    }
    num_texts[i].innerHTML = num - 1;
    num_input[i].value = num - 1;
    calc();
}