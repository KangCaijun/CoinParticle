var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var MainView = (function (_super) {
    __extends(MainView, _super);
    function MainView() {
        var _this = _super.call(this) || this;
        _this.addOnClick(_this.onClick, _this);
        _this.initParticles();
        _this.imgwin.visible = false;
        return _this;
    }
    MainView.prototype.initParticles = function () {
        this.effect1Particle = new custom.ParticleSystem();
        var param1 = {
            "atlas_data": "conAni_mc",
            "atlas_texture": "conAni_tex",
            "max_count": 150,
            "emission_rate": 30,
            "emission_duration": 2000,
            "startoffset": {
                "initX": 0,
                "initY": -100,
                "offsetX": 700,
                "offsetY": 0
            },
            "lifetime": {
                "min": 1500,
                "max": 2000
            },
            "gravity": {
                "x": 0,
                "y": 0.0045
            },
            "direction": {
                "min": -35,
                "max": 35
            },
            "rotation": {
                "min": 0,
                "max": 360,
                "speed": 0.12
            },
            "scale": {
                "min": 1,
                "max": 1.2,
                "adjust": 1
            },
            "speed": {
                "min": 0,
                "max": 0,
                "drag": 0.000002
            }
        };
        this.effect1Particle.init(param1);
        this.effect1Particle.x = 640;
        this.effect1Particle.y = -100;
        this.addChild(this.effect1Particle);
        this.effect2Particle = new custom.ParticleSystem();
        var param2 = {
            "atlas_data": "conAni_mc",
            "atlas_texture": "conAni_tex",
            "max_count": 150,
            "emission_rate": 30,
            "emission_duration": 1000,
            "startoffset": {
                "offsetX": 50,
                "offsetY": 0
            },
            "lifetime": {
                "min": 2000,
                "max": 3000
            },
            "gravity": {
                "x": 0,
                "y": 0.002
            },
            "direction": {
                "min": -35,
                "max": 35
            },
            "rotation": {
                "min": 0,
                "max": 360,
                "speed": 0.12
            },
            "scale": {
                "min": 0.8,
                "max": 1.0,
                "adjust": 1.004
            },
            "speed": {
                "min": 1.2,
                "max": 1.4,
                "drag": 0.000002
            }
        };
        this.effect2Particle.init(param2);
        this.effect2Particle.x = 640;
        this.effect2Particle.y = 380;
        var index = this.getChildIndex(this.imgwin);
        this.addChildAt(this.effect2Particle, index - 1);
    };
    MainView.prototype.onClick = function (e) {
        switch (e.currentTarget) {
            case this.btn_effect1:
                this.effect1Particle.start();
                this.playWin();
                break;
            case this.btn_effect2:
                this.effect2Particle.start();
                this.playWin();
                break;
        }
    };
    MainView.prototype.playWin = function () {
        this.cleaWin();
        this.imgwin.visible = true;
        this.winIn.play(0);
        var self = this;
        egret.Tween.get(this.imgwin)
            .wait(1500)
            .call(function () {
            self.winout.play(0);
            self.winout.addEventListener('complete', self.onWinOutComplete, self);
        });
    };
    MainView.prototype.onWinOutComplete = function (e) {
        this.cleaWin();
    };
    MainView.prototype.cleaWin = function () {
        this.imgwin.visible = false;
        egret.Tween.removeTweens(this.imgwin);
    };
    return MainView;
}(skins.MainViewPanel));
__reflect(MainView.prototype, "MainView");
//# sourceMappingURL=MainView.js.map