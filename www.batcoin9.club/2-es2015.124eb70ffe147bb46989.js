(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    "4PnQ": function (l, n, t) {
      "use strict";
      t.d(n, "a", function () {
        return u;
      }),
        t("kyFz");
      var e = t("01EG");
      class u extends e.a {
        constructor(l, n) {
          super(l, n), (this.service = l), (this.object = n);
        }
        ngOnInit() {
          setTimeout(() => {
            this.getAnnouncement();
          }, 150);
        }
        getAnnouncement() {
          if (
            this.object.getPlayerNotification ||
            !this.object.loginState.getIsLogin()
          )
            return void (this.announcementList =
              this.object.getPlayerNotification);
          let l = "dsgn=" + this.object.themeChange.uxDesign;
          (this.loading = !0),
            this.service
              .get(
                this.object.getURLInstance().getAnnouncements,
                l,
                this.headers()
              )
              .subscribe(
                (l) => {
                  (this.announcementList = l.data),
                    (this.object.getPlayerNotification = this.announcementList),
                    (this.loading = !1);
                },
                (l) => {
                  (this.loading = !1), this.setError(l);
                }
              );
        }
      }
    },
    "79Rg": function (l, n, t) {
      "use strict";
      var e = t("8Y7J"),
        u = t("SVse");
      t("4PnQ"),
        t("GVaW"),
        t("alQF"),
        t.d(n, "a", function () {
          return i;
        }),
        t.d(n, "b", function () {
          return o;
        });
      var i = e.ob({
        encapsulation: 0,
        styles: [
          [
            '.announcebar[_ngcontent-%COMP%]{border-top:2px solid #000;padding:6px 3px 3px;background-color:var(--main-color)}.child.svg-red[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:var(--navText)}.scrollvertical[_ngcontent-%COMP%]{display:flex}.child[_ngcontent-%COMP%]:first-child{width:50px;text-align:center}.child[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:0 5px;font-size:15px;color:#fff}.child[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .playnow[_ngcontent-%COMP%]{padding:0 10px;font-family:Oswald,sans-serif;color:#42b7c7;font-size:12px}@-webkit-keyframes marquee{0%{margin-left:100%;transform:translateX(0)}100%{margin-left:0;transform:translateX(-100%)}}@keyframes marquee{0%{margin-left:100%;transform:translateX(0)}100%{margin-left:0;transform:translateX(-100%)}}.section[_ngcontent-%COMP%]{overflow:hidden;width:100%}.section[_ngcontent-%COMP%]   .marquee[_ngcontent-%COMP%]{-webkit-animation:40s linear infinite marquee;animation:40s linear infinite marquee;display:flex;white-space:nowrap}.section[_ngcontent-%COMP%]   .marquee[_ngcontent-%COMP%]:hover{-webkit-animation-play-state:paused;animation-play-state:paused}.child[_ngcontent-%COMP%]   .text-styling[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .scrollvertical[_ngcontent-%COMP%]   .child[_ngcontent-%COMP%]   ul.marquee.text-styling[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:#fff!important}ul.text-styling[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:100%}.text-styling[_ngcontent-%COMP%]   .announceStyle[_ngcontent-%COMP%]::after{position:absolute;right:-7.5px;width:10px;height:100%;content:"|"}.text-styling[_ngcontent-%COMP%]   span.announceStyle[_ngcontent-%COMP%]{position:relative;margin-right:16px;padding-right:16px}.text-styling[_ngcontent-%COMP%]   .announceStyle[_ngcontent-%COMP%]:last-child{padding-right:0;margin-right:0}.text-styling[_ngcontent-%COMP%]   .announceStyle[_ngcontent-%COMP%]:last-child::after{display:none}',
          ],
        ],
        data: {},
      });
      function a(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              3,
              "span",
              [["class", "announceStyle"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              0,
              "img",
              [
                ["alt", ""],
                ["class", "iconstr"],
                ["src", "assets/images/starssion.svg"],
                ["srcset", ""],
                ["style", "margin-right: 10px;"],
                ["width", "20"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              2,
              0,
              null,
              null,
              1,
              "span",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(3, null, ["", " "])),
          ],
          null,
          function (l, n) {
            l(
              n,
              3,
              0,
              null == n.context.$implicit
                ? null
                : n.context.$implicit.acnnouncemnt
            );
          }
        );
      }
      function c(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              21,
              "div",
              [["class", "container-fluid announcebar"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              20,
              "div",
              [["class", "scrollvertical"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              2,
              0,
              null,
              null,
              13,
              "div",
              [["class", "child svg-red"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              3,
              0,
              null,
              null,
              12,
              ":svg:svg",
              [
                ["fill", "none"],
                ["height", "22"],
                ["viewBox", "0 0 28 22"],
                ["width", "28"],
                ["xmlns", "http://www.w3.org/2000/svg"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              4,
              0,
              null,
              null,
              0,
              ":svg:path",
              [
                ["d", "M18.0302 0V21.46L7.4502 14.82V6.56L18.0302 0Z"],
                ["fill", "#F1C51E"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              5,
              0,
              null,
              null,
              0,
              ":svg:path",
              [
                [
                  "d",
                  "M1.71 7.28V14.18H1.07C0.787944 14.18 0.517289 14.0687 0.31691 13.8701C0.116531 13.6716 0.00263605 13.402 0 13.12V8.35C0 8.06622 0.112733 7.79406 0.313396 7.59339C0.51406 7.39273 0.78622 7.28 1.07 7.28H1.71Z",
                ],
                ["fill", "#F1C51E"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              6,
              0,
              null,
              null,
              0,
              ":svg:path",
              [
                ["d", "M6.83031 5.54999H2.32031V15.92H6.83031V5.54999Z"],
                ["fill", "#F1C51E"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              7,
              0,
              null,
              null,
              0,
              ":svg:path",
              [
                [
                  "d",
                  "M26.72 11.6H22.54C22.3411 11.6 22.1504 11.521 22.0097 11.3803C21.8691 11.2397 21.79 11.0489 21.79 10.85C21.79 10.6511 21.8691 10.4603 22.0097 10.3197C22.1504 10.179 22.3411 10.1 22.54 10.1H26.72C26.919 10.1 27.1097 10.179 27.2504 10.3197C27.391 10.4603 27.47 10.6511 27.47 10.85C27.47 11.0489 27.391 11.2397 27.2504 11.3803C27.1097 11.521 26.919 11.6 26.72 11.6V11.6Z",
                ],
                ["fill", "#F1C51E"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              8,
              0,
              null,
              null,
              0,
              ":svg:path",
              [
                [
                  "d",
                  "M21.3701 7.72C21.2568 7.72157 21.1448 7.69715 21.0425 7.6486C20.9402 7.60006 20.8504 7.52869 20.7801 7.44C20.713 7.36415 20.6619 7.27549 20.63 7.17938C20.5981 7.08327 20.586 6.98169 20.5944 6.88077C20.6028 6.77985 20.6316 6.68168 20.6789 6.59218C20.7263 6.50267 20.7913 6.42369 20.8701 6.36L24.1601 3.72C24.3159 3.59565 24.5143 3.5375 24.7126 3.55808C24.9108 3.57865 25.0931 3.67631 25.2201 3.83C25.2823 3.90724 25.3286 3.99608 25.3563 4.09136C25.384 4.18664 25.3925 4.28646 25.3814 4.38505C25.3702 4.48364 25.3396 4.57904 25.2913 4.66572C25.243 4.75239 25.178 4.82862 25.1001 4.89L21.8701 7.54C21.7314 7.65983 21.5533 7.72397 21.3701 7.72V7.72Z",
                ],
                ["fill", "#F1C51E"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              9,
              0,
              null,
              null,
              0,
              ":svg:path",
              [
                [
                  "d",
                  "M24.6299 18.61C24.4584 18.6087 24.2925 18.5487 24.1599 18.44L20.8699 15.81C20.7896 15.7463 20.7233 15.6667 20.675 15.5763C20.6267 15.486 20.5974 15.3866 20.589 15.2845C20.5805 15.1824 20.5931 15.0796 20.626 14.9825C20.6588 14.8854 20.7112 14.7961 20.7799 14.72C20.8452 14.6417 20.9256 14.5773 21.0163 14.5307C21.107 14.4841 21.2062 14.4563 21.3079 14.4488C21.4096 14.4414 21.5118 14.4544 21.6083 14.4873C21.7049 14.5201 21.7938 14.5721 21.8699 14.64L25.1299 17.27C25.2075 17.3305 25.2723 17.4058 25.3205 17.4917C25.3687 17.5775 25.3992 17.672 25.4104 17.7698C25.4216 17.8676 25.4131 17.9666 25.3856 18.0611C25.358 18.1556 25.3119 18.2436 25.2499 18.32C25.177 18.4141 25.0827 18.4894 24.9749 18.5399C24.8671 18.5903 24.7488 18.6143 24.6299 18.61V18.61Z",
                ],
                ["fill", "#F1C51E"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              10,
              0,
              null,
              null,
              0,
              ":svg:path",
              [
                ["d", "M18.0302 0V21.46L7.4502 14.82V6.56L18.0302 0Z"],
                ["fill", "#F1C51E"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              11,
              0,
              null,
              null,
              0,
              ":svg:path",
              [
                [
                  "d",
                  "M1.71 7.28V14.18H1.07C0.787944 14.18 0.517289 14.0687 0.31691 13.8701C0.116531 13.6716 0.00263605 13.402 0 13.12V8.35C0 8.06622 0.112733 7.79406 0.313396 7.59339C0.51406 7.39273 0.78622 7.28 1.07 7.28H1.71Z",
                ],
                ["fill", "#F1C51E"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              12,
              0,
              null,
              null,
              0,
              ":svg:path",
              [
                ["d", "M6.83031 5.54999H2.32031V15.92H6.83031V5.54999Z"],
                ["fill", "#F1C51E"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              13,
              0,
              null,
              null,
              0,
              ":svg:path",
              [
                [
                  "d",
                  "M26.72 11.6H22.54C22.3411 11.6 22.1504 11.521 22.0097 11.3803C21.8691 11.2397 21.79 11.0489 21.79 10.85C21.79 10.6511 21.8691 10.4603 22.0097 10.3197C22.1504 10.179 22.3411 10.1 22.54 10.1H26.72C26.919 10.1 27.1097 10.179 27.2504 10.3197C27.391 10.4603 27.47 10.6511 27.47 10.85C27.47 11.0489 27.391 11.2397 27.2504 11.3803C27.1097 11.521 26.919 11.6 26.72 11.6V11.6Z",
                ],
                ["fill", "#F1C51E"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              14,
              0,
              null,
              null,
              0,
              ":svg:path",
              [
                [
                  "d",
                  "M21.3701 7.72C21.2568 7.72157 21.1448 7.69715 21.0425 7.6486C20.9402 7.60006 20.8504 7.52869 20.7801 7.44C20.713 7.36415 20.6619 7.27549 20.63 7.17938C20.5981 7.08327 20.586 6.98169 20.5944 6.88077C20.6028 6.77985 20.6316 6.68168 20.6789 6.59218C20.7263 6.50267 20.7913 6.42369 20.8701 6.36L24.1601 3.72C24.3159 3.59565 24.5143 3.5375 24.7126 3.55808C24.9108 3.57865 25.0931 3.67631 25.2201 3.83C25.2823 3.90724 25.3286 3.99608 25.3563 4.09136C25.384 4.18664 25.3925 4.28646 25.3814 4.38505C25.3702 4.48364 25.3396 4.57904 25.2913 4.66572C25.243 4.75239 25.178 4.82862 25.1001 4.89L21.8701 7.54C21.7314 7.65983 21.5533 7.72397 21.3701 7.72V7.72Z",
                ],
                ["fill", "#F1C51E"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              15,
              0,
              null,
              null,
              0,
              ":svg:path",
              [
                [
                  "d",
                  "M24.6299 18.61C24.4584 18.6087 24.2925 18.5487 24.1599 18.44L20.8699 15.81C20.7896 15.7463 20.7233 15.6667 20.675 15.5763C20.6267 15.486 20.5974 15.3866 20.589 15.2845C20.5805 15.1824 20.5931 15.0796 20.626 14.9825C20.6588 14.8854 20.7112 14.7961 20.7799 14.72C20.8452 14.6417 20.9256 14.5773 21.0163 14.5307C21.107 14.4841 21.2062 14.4563 21.3079 14.4488C21.4096 14.4414 21.5118 14.4544 21.6083 14.4873C21.7049 14.5201 21.7938 14.5721 21.8699 14.64L25.1299 17.27C25.2075 17.3305 25.2723 17.4058 25.3205 17.4917C25.3687 17.5775 25.3992 17.672 25.4104 17.7698C25.4216 17.8676 25.4131 17.9666 25.3856 18.0611C25.358 18.1556 25.3119 18.2436 25.2499 18.32C25.177 18.4141 25.0827 18.4894 24.9749 18.5399C24.8671 18.5903 24.7488 18.6143 24.6299 18.61V18.61Z",
                ],
                ["fill", "#F1C51E"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              16,
              0,
              null,
              null,
              5,
              "div",
              [["class", "child section"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              17,
              0,
              null,
              null,
              4,
              "ul",
              [["class", "text-styling"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(18, 0, null, null, 3, "li", [], null, null, null, null, null)),
            (l()(),
            e.qb(
              19,
              0,
              null,
              null,
              2,
              "marquee",
              [
                ["behavior", "scroll"],
                ["scrollamount", "4"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, a)),
            e.pb(
              21,
              278528,
              null,
              0,
              u.m,
              [e.N, e.J, e.q],
              {
                ngForOf: [0, "ngForOf"],
              },
              null
            ),
          ],
          function (l, n) {
            l(n, 21, 0, n.component.announcementList);
          },
          null
        );
      }
      function o(l) {
        return e.Mb(
          0,
          [
            (l()(), e.fb(16777216, null, null, 1, null, c)),
            e.pb(
              1,
              16384,
              null,
              0,
              u.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
          ],
          function (l, n) {
            var t = n.component;
            l(
              n,
              1,
              0,
              (null == t.announcementList ? null : t.announcementList.length) >
                0 &&
                t.object.getLoginInstance().getIsLogin() &&
                !t.object.isAdminLogin()
            );
          },
          null
        );
      }
    },
    Al8K: function (l, n, t) {
      "use strict";
      t.d(n, "a", function () {
        return u;
      });
      var e = t("8Y7J");
      t("kyFz");
      class u {
        constructor(l) {
          (this.object = l),
            (this.menu = {}),
            (this.childMenu = {}),
            (this.transferMenuListClick = new e.m());
        }
        ngOnInit() {}
        handleMenuListClick(l) {
          this.transferMenuListClick.emit(l);
        }
      }
    },
    "B+Bb": function (l, n, t) {
      "use strict";
      var e = t("8Y7J"),
        u = t("TSSN"),
        i = t("SVse"),
        a = t("s7LF"),
        c = t("bjj0"),
        o = t("wbXM"),
        s = t("q9Gx"),
        r = t("QZd1"),
        p = t("MK8/");
      t("kyFz");
      class b {
        constructor(l, n, t, u) {
          (this.router = l),
            (this.service = n),
            (this.object = t),
            (this.broadCast = u),
            (this.transferMenuClick = new e.m()),
            (this.transferUpdateData = new e.m()),
            (this.sideMenu = []),
            (this.childMenudata = !1),
            (this.tournamentMenudata = !1);
        }
        ngOnInit() {
          this.getEventList(),
            this.object.isAdminLogin() &&
              ((this.childMenudata = !0), (this.tournamentMenudata = !0));
        }
        getEventList() {
          this.broadCast
            .on(this.object.getConstants().BROADCASTKEY.EVENTID)
            .subscribe((l) => {
              setTimeout(() => {
                this.eventId = l.eventId;
              }, 100);
            });
        }
        attachMenuBus() {}
        handleMenuClick(l, n, t) {
          (l.parentMenu = n || l.data),
            this.transferMenuClick.emit(l),
            this.broadCast.broadcast(
              this.object.getConstants().BROADCASTKEY.INVOKE_CHILDMENU,
              {
                childMenu: l,
                action: t,
              }
            ),
            this.broadCast.broadcast(
              this.object.getConstants().BROADCASTKEY.CHILDMENU,
              {
                childMenu: l,
                action: t,
              }
            );
        }
        handleManualMarketMenuClick(l, n, t) {
          (l.parentMenu = n || l.data),
            this.transferMenuClick.emit(l),
            this.broadCast.broadcast(
              this.object.getConstants().BROADCASTKEY.SPECIALCHILDMENU,
              {
                childMenu: l,
                action: t,
              }
            ),
            this.broadCast.broadcast(
              this.object.getConstants().BROADCASTKEY.MANUALCHILDMENU,
              {
                childMenu: l,
                action: t,
              }
            );
        }
        handleRedirectMenu(l, n) {
          if ((this.getEventList(), !this.object.isAdminLogin())) {
            if (
              ((this.object.commonTabs = l.data.name),
              l.data.type > this.object.getConstants().MKT_TABS.nDepthData)
            ) {
              let n =
                this.object.getUI_URL().user.sport +
                this.object.getUI_URL().user.eventDetail +
                "/" +
                l.children[0].data.marketId +
                "/" +
                l.children[0].data.eventId;
              return void this.object.getRouterInstance().navigate([n]);
            }
            if (
              l.data.type == this.object.getConstants().MKT_TABS.parentDepth
            ) {
              let l = this.object.getUI_URL().user.sport;
              this.object.getRouterInstance().navigate([l]);
            }
            this.handleMenuClick(l, n, null);
            let t = this.object.getUI_URL().user.sport;
            this.object.getRouterInstance().navigate([t]);
          }
          1 == l.data.type &&
            0 == l.data.betfairId &&
            this.object.loginState.getIsLogin();
        }
        handleRedirectMenuForEvent(l) {
          l.data &&
            !this.object.isAdminLogin() &&
            (1 == Number(l.data.type)
              ? (this.tournamentMenudata = !0)
              : 2 == Number(l.data.type) && (this.childMenudata = !0)),
            this.object.isAdminLogin() &&
              ((this.childMenudata = !0),
              (this.tournamentMenudata = !0),
              l.data.name == this.object.getConstants().EVENTTYPE.CRICKET
                ? this.object
                    .getUtilInstance()
                    .storeState(this.object.getConstants().STORAGE.eventType, 4)
                : l.data.name == this.object.getConstants().EVENTTYPE.SOCCER
                ? this.object
                    .getUtilInstance()
                    .storeState(this.object.getConstants().STORAGE.eventType, 1)
                : l.data.name == this.object.getConstants().EVENTTYPE.TENNIS
                ? this.object
                    .getUtilInstance()
                    .storeState(this.object.getConstants().STORAGE.eventType, 2)
                : l.data.name ==
                  this.object.getConstants().EVENTTYPE.SPECIALMARKET
                ? this.object
                    .getUtilInstance()
                    .storeState(
                      this.object.getConstants().STORAGE.eventType,
                      1002
                    )
                : l.data.name == this.object.getConstants().EVENTTYPE.KABADDI &&
                  this.object
                    .getUtilInstance()
                    .storeState(
                      this.object.getConstants().STORAGE.eventType,
                      1004
                    )),
            3 != Number(l.type) ||
              this.object.isAdminLogin() ||
              (this.object
                .getRouterInstance()
                .navigate([
                  "/sport/" +
                    this.object.getUI_URL().user.eventDetail +
                    "/" +
                    l.eventId,
                ]),
              (this.object.shwoScoreCard = !1),
              (this.object.showLiveTvButton = !1)),
            l.data &&
              !this.object.isAdminLogin() &&
              1 == Number(l.data.type) &&
              this.object.getWebGameTypeClick({
                Web_market_click: l.data.name,
              });
        }
      }
      var d = t("iInd"),
        g = t("GVaW"),
        m = t("alQF"),
        h = t("cWJh"),
        f = e.ob({
          encapsulation: 0,
          styles: [
            [
              ".games[_ngcontent-%COMP%]{width:100%}.games[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{padding:0!important;margin:0!important;position:relative}.games[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{display:flex;align-items:center;padding:15px 15px 15px 6px;font-weight:600;font-size:16px;line-height:15px;position:relative;text-transform:uppercase}.games[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover{background:linear-gradient(90deg,var(--maindark) 0,var(--maindark) 100%);opacity:1}.games[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{top:14px}.cricket-matches[_ngcontent-%COMP%]   .games[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{position:relative}.cricket-matches[_ngcontent-%COMP%]   .games[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{display:flex;align-items:center;padding:11px 70px 11px 26px;font-size:12px;line-height:14px;position:relative}.cricket-matches[_ngcontent-%COMP%]   .games[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover{background:linear-gradient(89.76deg,#151841 .04%,rgba(28,32,74,0) 98.81%);opacity:1}.cricket-matches[_ngcontent-%COMP%]   .games[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a.active[_ngcontent-%COMP%]{background:linear-gradient(89.76deg,#151841 .04%,rgba(28,32,74,0) 98.81%)}.cricket-matches[_ngcontent-%COMP%]   .games[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{top:10px}.cricket-matches[_ngcontent-%COMP%]   .games[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex!important;align-items:center;padding-left:45px;font-size:12px;line-height:14px;position:relative}.cricket-matches[_ngcontent-%COMP%]   .games[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{background:linear-gradient(90deg,rgba(229,148,63,.22) 0,rgba(38,28,45,.03) 100%)}.cricket-matches[_ngcontent-%COMP%]   .games[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{top:10px}.cricket-matches[_ngcontent-%COMP%]   .games[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]   .add_edit[_ngcontent-%COMP%]{right:7px}.add_edit[_ngcontent-%COMP%]{position:absolute;top:calc(50% - 13px);right:3px}.add_edit[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:0}.rightarrowicon[_ngcontent-%COMP%]{width:16px;margin-right:16px;float:left;margin-left:3px}.accrow[_ngcontent-%COMP%]{fill:none;stroke:var(--maindark)}.games[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover   .accrow[_ngcontent-%COMP%]:hover{stroke:#000!important}.rightarrowicon1[_ngcontent-%COMP%]{width:8px;float:left;margin-right:7px}.accordion-border[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   .rightarrowicon1[_ngcontent-%COMP%]   .accrow[_ngcontent-%COMP%]{fill:none;stroke:#000}",
            ],
          ],
          data: {},
        });
      function x(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              2,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              1,
              "app-svg",
              [],
              null,
              null,
              null,
              c.b,
              c.a
            )),
            e.pb(
              2,
              114688,
              null,
              0,
              o.a,
              [],
              {
                type: [0, "type"],
              },
              null
            ),
          ],
          function (l, n) {
            l(
              n,
              2,
              0,
              null == n.parent.parent.context.$implicit
                ? null
                : null == n.parent.parent.context.$implicit.data
                ? null
                : n.parent.parent.context.$implicit.data.name
            );
          },
          null
        );
      }
      function C(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              2,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              1,
              "app-svg",
              [["class", "iconmenu"]],
              null,
              null,
              null,
              c.b,
              c.a
            )),
            e.pb(
              2,
              114688,
              null,
              0,
              o.a,
              [],
              {
                type: [0, "type"],
              },
              null
            ),
          ],
          function (l, n) {
            l(
              n,
              2,
              0,
              (null == n.parent.parent.parent.context.$implicit
                ? null
                : null == n.parent.parent.parent.context.$implicit.data
                ? null
                : n.parent.parent.parent.context.$implicit.data.name) + "-D2"
            );
          },
          null
        );
      }
      function k(l) {
        return e.Mb(
          0,
          [
            (l()(), e.fb(16777216, null, null, 1, null, C)),
            e.pb(
              1,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(0, null, null, 0)),
          ],
          function (l, n) {
            l(n, 1, 0, "D2" == n.component.object.themeChange.uxDesign);
          },
          null
        );
      }
      function v(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              1,
              "button",
              [["type", "button"]],
              null,
              [[null, "click"]],
              function (l, n, t) {
                var e = !0,
                  u = l.component;
                return (
                  "click" === n &&
                    (e =
                      !1 !==
                        u.handleMenuClick(
                          l.parent.parent.parent.context.$implicit,
                          null == u.menulist ? null : u.menulist.data,
                          u.object.getConstants().ACTIONS.EDIT
                        ) && e),
                  e
                );
              },
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              0,
              "img",
              [["src", "assets/images/edit-icon.svg"]],
              null,
              null,
              null,
              null,
              null
            )),
          ],
          null,
          null
        );
      }
      function M(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              1,
              "button",
              [["type", "button"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              0,
              "img",
              [["src", "assets/images/add-icon.svg"]],
              null,
              [[null, "click"]],
              function (l, n, t) {
                var e = !0,
                  u = l.component;
                return (
                  "click" === n &&
                    (e =
                      !1 !==
                        u.handleMenuClick(
                          l.parent.parent.parent.context.$implicit,
                          null == u.menulist ? null : u.menulist.data,
                          u.object.getConstants().ACTIONS.ADD
                        ) && e),
                  e
                );
              },
              null,
              null
            )),
          ],
          null,
          null
        );
      }
      function y(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              4,
              "div",
              [["class", "add_edit"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, v)),
            e.pb(
              2,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, M)),
            e.pb(
              4,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
          ],
          function (l, n) {
            var t = n.component;
            l(
              n,
              2,
              0,
              (null == n.parent.parent.context.$implicit
                ? null
                : null == n.parent.parent.context.$implicit.data
                ? null
                : n.parent.parent.context.$implicit.data.type) > 1 &&
                t.object.isAdminLogin()
            ),
              l(n, 4, 0, t.object.isAdminLogin());
          },
          null
        );
      }
      function $(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              1,
              "button",
              [["type", "button"]],
              null,
              [[null, "click"]],
              function (l, n, t) {
                var e = !0,
                  u = l.component;
                return (
                  "click" === n &&
                    (e =
                      !1 !==
                        u.handleManualMarketMenuClick(
                          l.parent.parent.parent.context.$implicit,
                          null == u.menulist ? null : u.menulist.data,
                          u.object.getConstants().ACTIONS.EDIT
                        ) && e),
                  e
                );
              },
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              0,
              "img",
              [["src", "assets/images/edit-icon.svg"]],
              null,
              null,
              null,
              null,
              null
            )),
          ],
          null,
          null
        );
      }
      function O(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              1,
              "button",
              [["type", "button"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              0,
              "img",
              [["src", "assets/images/add-icon.svg"]],
              null,
              [[null, "click"]],
              function (l, n, t) {
                var e = !0,
                  u = l.component;
                return (
                  "click" === n &&
                    (e =
                      !1 !==
                        u.handleManualMarketMenuClick(
                          l.parent.parent.parent.context.$implicit,
                          null == u.menulist ? null : u.menulist.data,
                          u.object.getConstants().ACTIONS.ADD
                        ) && e),
                  e
                );
              },
              null,
              null
            )),
          ],
          null,
          null
        );
      }
      function I(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              4,
              "div",
              [["class", "add_edit"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, $)),
            e.pb(
              2,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, O)),
            e.pb(
              4,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
          ],
          function (l, n) {
            var t = n.component;
            l(
              n,
              2,
              0,
              (null == n.parent.parent.context.$implicit
                ? null
                : n.parent.parent.context.$implicit.data.type) > 1 &&
                t.object.isAdminLogin()
            ),
              l(n, 4, 0, t.object.isAdminLogin());
          },
          null
        );
      }
      function S(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              3,
              ":svg:svg",
              [
                ["class", "rightarrowicon1"],
                ["viewBox", "0 0 9.16 17.09"],
                ["xmlns", "http://www.w3.org/2000/svg"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              2,
              ":svg:g",
              [
                ["data-name", "Layer 2"],
                ["id", "Layer_2"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              2,
              0,
              null,
              null,
              1,
              ":svg:g",
              [
                ["data-name", "Layer 1"],
                ["id", "Layer_1-2"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              3,
              0,
              null,
              null,
              0,
              ":svg:polyline",
              [
                ["class", "accrow"],
                ["points", "1.42 15.68 7.74 8.67 1.42 1.42"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
          ],
          null,
          null
        );
      }
      function _(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(0, 0, null, null, 2, "i", [], null, null, null, null, null)),
            (l()(), e.fb(16777216, null, null, 1, null, S)),
            e.pb(
              2,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
          ],
          function (l, n) {
            l(
              n,
              2,
              0,
              (null == n.parent.parent.context.$implicit
                ? null
                : null == n.parent.parent.context.$implicit.data
                ? null
                : n.parent.parent.context.$implicit.data.type) <=
                n.component.object.getConstants().MKT_TABS.nDepthData
            );
          },
          null
        );
      }
      function q(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              3,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              2,
              "app-img",
              [],
              null,
              null,
              null,
              s.b,
              s.a
            )),
            e.Hb(512, null, r.a, r.a, []),
            e.pb(
              3,
              114688,
              null,
              0,
              p.a,
              [r.a],
              {
                imgClass: [0, "imgClass"],
                img: [1, "img"],
              },
              null
            ),
          ],
          function (l, n) {
            l(
              n,
              3,
              0,
              null != n.parent.parent.context.$implicit &&
                null != n.parent.parent.context.$implicit.data &&
                n.parent.parent.context.$implicit.data.name
                ? "imageClass"
                : "play-img",
              "Cricket" ==
                (null == n.parent.parent.context.$implicit
                  ? null
                  : null == n.parent.parent.context.$implicit.data
                  ? null
                  : n.parent.parent.context.$implicit.data.name)
                ? "assets/images/cricket.svg"
                : "Soccer" ==
                  (null == n.parent.parent.context.$implicit
                    ? null
                    : null == n.parent.parent.context.$implicit.data
                    ? null
                    : n.parent.parent.context.$implicit.data.name)
                ? "assets/images/soccer.svg"
                : "Special Market" ==
                  (null == n.parent.parent.context.$implicit
                    ? null
                    : null == n.parent.parent.context.$implicit.data
                    ? null
                    : n.parent.parent.context.$implicit.data.name)
                ? "assets/images/specialMarket.png"
                : "Tennis" ==
                  (null == n.parent.parent.context.$implicit
                    ? null
                    : null == n.parent.parent.context.$implicit.data
                    ? null
                    : n.parent.parent.context.$implicit.data.name)
                ? "assets/images/tennis.svg"
                : 2 ==
                  (null == n.parent.parent.context.$implicit
                    ? null
                    : null == n.parent.parent.context.$implicit.data
                    ? null
                    : n.parent.parent.context.$implicit.data.type)
                ? "assets/images/trophy.svg"
                : "assets/images/oval-icon.png"
            );
          },
          null
        );
      }
      function P(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              3,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              2,
              "app-img",
              [],
              null,
              null,
              null,
              s.b,
              s.a
            )),
            e.Hb(512, null, r.a, r.a, []),
            e.pb(
              3,
              114688,
              null,
              0,
              p.a,
              [r.a],
              {
                imgClass: [0, "imgClass"],
                img: [1, "img"],
              },
              null
            ),
          ],
          function (l, n) {
            l(
              n,
              3,
              0,
              "1" ==
                (null == n.parent.parent.parent.context.$implicit
                  ? null
                  : null == n.parent.parent.parent.context.$implicit.data
                  ? null
                  : n.parent.parent.parent.context.$implicit.data.type)
                ? "imgheadcla1"
                : "2" ==
                  (null == n.parent.parent.parent.context.$implicit
                    ? null
                    : null == n.parent.parent.parent.context.$implicit.data
                    ? null
                    : n.parent.parent.parent.context.$implicit.data.type)
                ? "imgheadcla2"
                : "play-img",
              "Cricket" ==
                (null == n.parent.parent.parent.context.$implicit
                  ? null
                  : null == n.parent.parent.parent.context.$implicit.data
                  ? null
                  : n.parent.parent.parent.context.$implicit.data.name)
                ? "assets/images/cricket_menu.png"
                : "Soccer" ==
                  (null == n.parent.parent.parent.context.$implicit
                    ? null
                    : null == n.parent.parent.parent.context.$implicit.data
                    ? null
                    : n.parent.parent.parent.context.$implicit.data.name)
                ? "assets/images/soccer_menu.png"
                : "Special Market" ==
                  (null == n.parent.parent.parent.context.$implicit
                    ? null
                    : null == n.parent.parent.parent.context.$implicit.data
                    ? null
                    : n.parent.parent.parent.context.$implicit.data.name)
                ? "assets/images/specialMarket.png"
                : "Tennis" ==
                  (null == n.parent.parent.parent.context.$implicit
                    ? null
                    : null == n.parent.parent.parent.context.$implicit.data
                    ? null
                    : n.parent.parent.parent.context.$implicit.data.name)
                ? "assets/images/tennis_menu.png"
                : 2 ==
                  (null == n.parent.parent.parent.context.$implicit
                    ? null
                    : null == n.parent.parent.parent.context.$implicit.data
                    ? null
                    : n.parent.parent.parent.context.$implicit.data.type)
                ? "assets/images/trophy.svg"
                : "assets/images/oval-icon.png"
            );
          },
          null
        );
      }
      function L(l) {
        return e.Mb(
          0,
          [
            (l()(), e.fb(16777216, null, null, 1, null, P)),
            e.pb(
              1,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(0, null, null, 0)),
          ],
          function (l, n) {
            l(n, 1, 0, "D2" == n.component.object.themeChange.uxDesign);
          },
          null
        );
      }
      function E(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              1,
              "button",
              [["type", "button"]],
              null,
              [[null, "click"]],
              function (l, n, t) {
                var e = !0,
                  u = l.component;
                return (
                  "click" === n &&
                    (e =
                      !1 !==
                        u.handleMenuClick(
                          l.parent.parent.parent.context.$implicit,
                          null ==
                            l.parent.parent.parent.parent.parent.parent.context
                              .$implicit
                            ? null
                            : l.parent.parent.parent.parent.parent.parent
                                .context.$implicit.data,
                          u.object.getConstants().ACTIONS.EDIT
                        ) && e),
                  e
                );
              },
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              0,
              "img",
              [["src", "assets/images/edit-icon.svg"]],
              null,
              null,
              null,
              null,
              null
            )),
          ],
          null,
          null
        );
      }
      function T(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              1,
              "button",
              [["type", "button"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              0,
              "img",
              [["src", "assets/images/add-icon.svg"]],
              null,
              [[null, "click"]],
              function (l, n, t) {
                var e = !0,
                  u = l.component;
                return (
                  "click" === n &&
                    (e =
                      !1 !==
                        u.handleMenuClick(
                          l.parent.parent.parent.context.$implicit,
                          null ==
                            l.parent.parent.parent.parent.parent.parent.context
                              .$implicit
                            ? null
                            : l.parent.parent.parent.parent.parent.parent
                                .context.$implicit.data,
                          u.object.getConstants().ACTIONS.ADD
                        ) && e),
                  e
                );
              },
              null,
              null
            )),
          ],
          null,
          null
        );
      }
      function w(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              4,
              "div",
              [["class", "add_edit"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, E)),
            e.pb(
              2,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, T)),
            e.pb(
              4,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
          ],
          function (l, n) {
            var t = n.component;
            l(
              n,
              2,
              0,
              (null == n.parent.parent.context.$implicit
                ? null
                : null == n.parent.parent.context.$implicit.data
                ? null
                : n.parent.parent.context.$implicit.data.type) > 1 &&
                t.object.isAdminLogin()
            ),
              l(n, 4, 0, t.object.isAdminLogin());
          },
          null
        );
      }
      function N(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              1,
              "button",
              [["type", "button"]],
              null,
              [[null, "click"]],
              function (l, n, t) {
                var e = !0,
                  u = l.component;
                return (
                  "click" === n &&
                    (e =
                      !1 !==
                        u.handleManualMarketMenuClick(
                          l.parent.parent.parent.context.$implicit,
                          null ==
                            l.parent.parent.parent.parent.parent.parent.context
                              .$implicit
                            ? null
                            : l.parent.parent.parent.parent.parent.parent
                                .context.$implicit.data,
                          u.object.getConstants().ACTIONS.EDIT
                        ) && e),
                  e
                );
              },
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              0,
              "img",
              [["src", "assets/images/edit-icon.svg"]],
              null,
              null,
              null,
              null,
              null
            )),
          ],
          null,
          null
        );
      }
      function j(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              1,
              "button",
              [["type", "button"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              0,
              "img",
              [["src", "assets/images/add-icon.svg"]],
              null,
              [[null, "click"]],
              function (l, n, t) {
                var e = !0,
                  u = l.component;
                return (
                  "click" === n &&
                    (e =
                      !1 !==
                        u.handleManualMarketMenuClick(
                          l.parent.parent.parent.context.$implicit,
                          null ==
                            l.parent.parent.parent.parent.parent.parent.context
                              .$implicit
                            ? null
                            : l.parent.parent.parent.parent.parent.parent
                                .context.$implicit.data,
                          u.object.getConstants().ACTIONS.ADD
                        ) && e),
                  e
                );
              },
              null,
              null
            )),
          ],
          null,
          null
        );
      }
      function A(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              4,
              "div",
              [["class", "add_edit"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, N)),
            e.pb(
              2,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, j)),
            e.pb(
              4,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
          ],
          function (l, n) {
            var t = n.component;
            l(
              n,
              2,
              0,
              (null == n.parent.parent.context.$implicit
                ? null
                : n.parent.parent.context.$implicit.data.type) > 1 &&
                t.object.isAdminLogin()
            ),
              l(n, 4, 0, t.object.isAdminLogin());
          },
          null
        );
      }
      function B(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              3,
              ":svg:svg",
              [
                ["class", "rightarrowicon1"],
                ["viewBox", "0 0 9.16 17.09"],
                ["xmlns", "http://www.w3.org/2000/svg"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              2,
              ":svg:g",
              [
                ["data-name", "Layer 2"],
                ["id", "Layer_2"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              2,
              0,
              null,
              null,
              1,
              ":svg:g",
              [
                ["data-name", "Layer 1"],
                ["id", "Layer_1-2"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              3,
              0,
              null,
              null,
              0,
              ":svg:polyline",
              [
                ["class", "accrow"],
                ["points", "1.42 15.68 7.74 8.67 1.42 1.42"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
          ],
          null,
          null
        );
      }
      function D(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(0, 0, null, null, 2, "i", [], null, null, null, null, null)),
            (l()(), e.fb(16777216, null, null, 1, null, B)),
            e.pb(
              2,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
          ],
          function (l, n) {
            l(
              n,
              2,
              0,
              (null == n.parent.parent.context.$implicit
                ? null
                : null == n.parent.parent.context.$implicit.data
                ? null
                : n.parent.parent.context.$implicit.data.type) <=
                n.component.object.getConstants().MKT_TABS.nDepthData
            );
          },
          null
        );
      }
      function K(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              3,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              2,
              "app-img",
              [],
              null,
              null,
              null,
              s.b,
              s.a
            )),
            e.Hb(512, null, r.a, r.a, []),
            e.pb(
              3,
              114688,
              null,
              0,
              p.a,
              [r.a],
              {
                imgClass: [0, "imgClass"],
                img: [1, "img"],
              },
              null
            ),
          ],
          function (l, n) {
            l(
              n,
              3,
              0,
              null != n.parent.parent.context.$implicit &&
                null != n.parent.parent.context.$implicit.data &&
                n.parent.parent.context.$implicit.data.name
                ? "imageClass"
                : "play-img",
              "Cricket" ==
                (null == n.parent.parent.context.$implicit
                  ? null
                  : null == n.parent.parent.context.$implicit.data
                  ? null
                  : n.parent.parent.context.$implicit.data.name)
                ? "assets/images/cricket.svg"
                : "Soccer" ==
                  (null == n.parent.parent.context.$implicit
                    ? null
                    : null == n.parent.parent.context.$implicit.data
                    ? null
                    : n.parent.parent.context.$implicit.data.name)
                ? "assets/images/soccer.svg"
                : "Special Market" ==
                  (null == n.parent.parent.context.$implicit
                    ? null
                    : null == n.parent.parent.context.$implicit.data
                    ? null
                    : n.parent.parent.context.$implicit.data.name)
                ? "assets/images/specialMarket.png"
                : "Tennis" ==
                  (null == n.parent.parent.context.$implicit
                    ? null
                    : null == n.parent.parent.context.$implicit.data
                    ? null
                    : n.parent.parent.context.$implicit.data.name)
                ? "assets/images/tennis.svg"
                : 2 ==
                  (null == n.parent.parent.context.$implicit
                    ? null
                    : null == n.parent.parent.context.$implicit.data
                    ? null
                    : n.parent.parent.context.$implicit.data.type)
                ? "assets/images/trophy.svg"
                : "assets/images/oval-icon.png"
            );
          },
          null
        );
      }
      function F(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              3,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              2,
              "app-img",
              [],
              null,
              null,
              null,
              s.b,
              s.a
            )),
            e.Hb(512, null, r.a, r.a, []),
            e.pb(
              3,
              114688,
              null,
              0,
              p.a,
              [r.a],
              {
                imgClass: [0, "imgClass"],
                img: [1, "img"],
              },
              null
            ),
          ],
          function (l, n) {
            l(
              n,
              3,
              0,
              "1" ==
                (null == n.parent.parent.parent.context.$implicit
                  ? null
                  : null == n.parent.parent.parent.context.$implicit.data
                  ? null
                  : n.parent.parent.parent.context.$implicit.data.type)
                ? "imgheadcla1"
                : "2" ==
                  (null == n.parent.parent.parent.context.$implicit
                    ? null
                    : null == n.parent.parent.parent.context.$implicit.data
                    ? null
                    : n.parent.parent.parent.context.$implicit.data.type)
                ? "imgheadcla2"
                : "play-img",
              "Cricket" ==
                (null == n.parent.parent.parent.context.$implicit
                  ? null
                  : null == n.parent.parent.parent.context.$implicit.data
                  ? null
                  : n.parent.parent.parent.context.$implicit.data.name)
                ? "assets/images/cricket_menu.png"
                : "Soccer" ==
                  (null == n.parent.parent.parent.context.$implicit
                    ? null
                    : null == n.parent.parent.parent.context.$implicit.data
                    ? null
                    : n.parent.parent.parent.context.$implicit.data.name)
                ? "assets/images/soccer_menu.png"
                : "Special Market" ==
                  (null == n.parent.parent.parent.context.$implicit
                    ? null
                    : null == n.parent.parent.parent.context.$implicit.data
                    ? null
                    : n.parent.parent.parent.context.$implicit.data.name)
                ? "assets/images/specialMarket.png"
                : "Tennis" ==
                  (null == n.parent.parent.parent.context.$implicit
                    ? null
                    : null == n.parent.parent.parent.context.$implicit.data
                    ? null
                    : n.parent.parent.parent.context.$implicit.data.name)
                ? "assets/images/tennis_menu.png"
                : 2 ==
                  (null == n.parent.parent.parent.context.$implicit
                    ? null
                    : null == n.parent.parent.parent.context.$implicit.data
                    ? null
                    : n.parent.parent.parent.context.$implicit.data.type)
                ? "assets/images/trophy.svg"
                : "assets/images/oval-icon.png"
            );
          },
          null
        );
      }
      function R(l) {
        return e.Mb(
          0,
          [
            (l()(), e.fb(16777216, null, null, 1, null, F)),
            e.pb(
              1,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(0, null, null, 0)),
          ],
          function (l, n) {
            l(n, 1, 0, "D2" == n.component.object.themeChange.uxDesign);
          },
          null
        );
      }
      function U(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              1,
              "button",
              [["type", "button"]],
              null,
              [[null, "click"]],
              function (l, n, t) {
                var e = !0,
                  u = l.component;
                return (
                  "click" === n &&
                    (e =
                      !1 !==
                        u.handleMenuClick(
                          l.parent.parent.parent.context.$implicit,
                          null ==
                            l.parent.parent.parent.parent.parent.parent.context
                              .$implicit
                            ? null
                            : l.parent.parent.parent.parent.parent.parent
                                .context.$implicit.data,
                          u.object.getConstants().ACTIONS.EDIT
                        ) && e),
                  e
                );
              },
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              0,
              "img",
              [["src", "assets/images/edit-icon.svg"]],
              null,
              null,
              null,
              null,
              null
            )),
          ],
          null,
          null
        );
      }
      function J(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              1,
              "button",
              [["type", "button"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              0,
              "img",
              [["src", "assets/images/add-icon.svg"]],
              null,
              [[null, "click"]],
              function (l, n, t) {
                var e = !0,
                  u = l.component;
                return (
                  "click" === n &&
                    (e =
                      !1 !==
                        u.handleMenuClick(
                          l.parent.parent.parent.context.$implicit,
                          null ==
                            l.parent.parent.parent.parent.parent.parent.context
                              .$implicit
                            ? null
                            : l.parent.parent.parent.parent.parent.parent
                                .context.$implicit.data,
                          u.object.getConstants().ACTIONS.ADD
                        ) && e),
                  e
                );
              },
              null,
              null
            )),
          ],
          null,
          null
        );
      }
      function G(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              4,
              "div",
              [["class", "add_edit"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, U)),
            e.pb(
              2,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, J)),
            e.pb(
              4,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
          ],
          function (l, n) {
            var t = n.component;
            l(
              n,
              2,
              0,
              (null == n.parent.parent.context.$implicit
                ? null
                : null == n.parent.parent.context.$implicit.data
                ? null
                : n.parent.parent.context.$implicit.data.type) > 1 &&
                t.object.isAdminLogin()
            ),
              l(n, 4, 0, t.object.isAdminLogin());
          },
          null
        );
      }
      function H(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              1,
              "button",
              [["type", "button"]],
              null,
              [[null, "click"]],
              function (l, n, t) {
                var e = !0,
                  u = l.component;
                return (
                  "click" === n &&
                    (e =
                      !1 !==
                        u.handleManualMarketMenuClick(
                          l.parent.parent.parent.context.$implicit,
                          null ==
                            l.parent.parent.parent.parent.parent.parent.context
                              .$implicit
                            ? null
                            : l.parent.parent.parent.parent.parent.parent
                                .context.$implicit.data,
                          u.object.getConstants().ACTIONS.EDIT
                        ) && e),
                  e
                );
              },
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              0,
              "img",
              [["src", "assets/images/edit-icon.svg"]],
              null,
              null,
              null,
              null,
              null
            )),
          ],
          null,
          null
        );
      }
      function V(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              1,
              "button",
              [["type", "button"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              0,
              "img",
              [["src", "assets/images/add-icon.svg"]],
              null,
              [[null, "click"]],
              function (l, n, t) {
                var e = !0,
                  u = l.component;
                return (
                  "click" === n &&
                    (e =
                      !1 !==
                        u.handleManualMarketMenuClick(
                          l.parent.parent.parent.context.$implicit,
                          null ==
                            l.parent.parent.parent.parent.parent.parent.context
                              .$implicit
                            ? null
                            : l.parent.parent.parent.parent.parent.parent
                                .context.$implicit.data,
                          u.object.getConstants().ACTIONS.ADD
                        ) && e),
                  e
                );
              },
              null,
              null
            )),
          ],
          null,
          null
        );
      }
      function W(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              4,
              "div",
              [["class", "add_edit"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, H)),
            e.pb(
              2,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, V)),
            e.pb(
              4,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
          ],
          function (l, n) {
            var t = n.component;
            l(
              n,
              2,
              0,
              (null == n.parent.parent.context.$implicit
                ? null
                : n.parent.parent.context.$implicit.data.type) > 1 &&
                t.object.isAdminLogin()
            ),
              l(n, 4, 0, t.object.isAdminLogin());
          },
          null
        );
      }
      function Y(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              3,
              ":svg:svg",
              [
                ["class", "rightarrowicon1"],
                ["viewBox", "0 0 9.16 17.09"],
                ["xmlns", "http://www.w3.org/2000/svg"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              2,
              ":svg:g",
              [
                ["data-name", "Layer 2"],
                ["id", "Layer_2"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              2,
              0,
              null,
              null,
              1,
              ":svg:g",
              [
                ["data-name", "Layer 1"],
                ["id", "Layer_1-2"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              3,
              0,
              null,
              null,
              0,
              ":svg:polyline",
              [
                ["class", "accrow"],
                ["points", "1.42 15.68 7.74 8.67 1.42 1.42"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
          ],
          null,
          null
        );
      }
      function z(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(0, 0, null, null, 2, "i", [], null, null, null, null, null)),
            (l()(), e.fb(16777216, null, null, 1, null, Y)),
            e.pb(
              2,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
          ],
          function (l, n) {
            l(
              n,
              2,
              0,
              (null == n.parent.parent.context.$implicit
                ? null
                : null == n.parent.parent.context.$implicit.data
                ? null
                : n.parent.parent.context.$implicit.data.type) <=
                n.component.object.getConstants().MKT_TABS.nDepthData
            );
          },
          null
        );
      }
      function Z(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              19,
              "li",
              [["class", "accordion-border"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              13,
              "a",
              [
                ["aria-expanded", "true"],
                ["class", "base-c collapsed ripple"],
                ["data-toggle", "collapse"],
                ["style", "color:#fff"],
              ],
              [[8, "href", 4]],
              [[null, "click"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "click" === n &&
                    (e =
                      !1 !==
                        l.component.handleRedirectMenuForEvent(
                          l.parent.context.$implicit
                        ) && e),
                  e
                );
              },
              null,
              null
            )),
            e.Hb(512, null, i.A, i.B, [e.q, e.r, e.k, e.B]),
            e.pb(
              3,
              278528,
              null,
              0,
              i.l,
              [i.A],
              {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"],
              },
              null
            ),
            (l()(),
            e.qb(
              4,
              0,
              null,
              null,
              3,
              "span",
              [["class", "icon-sub-category"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, K)),
            e.pb(
              6,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
                ngIfElse: [1, "ngIfElse"],
              },
              null
            ),
            (l()(), e.fb(0, [["secondCond", 2]], null, 0, null, R)),
            (l()(),
            e.qb(
              8,
              0,
              null,
              null,
              2,
              "span",
              [
                [
                  "style",
                  "overflow-wrap: break-word;\n                                                        word-wrap: break-word;\n                                                        white-space: normal !important;",
                ],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              9,
              0,
              null,
              null,
              1,
              "span",
              [["data-toggle", "tooltip"]],
              [[8, "title", 0]],
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(10, null, ["", " ", ""])),
            (l()(), e.fb(16777216, null, null, 1, null, G)),
            e.pb(
              12,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, W)),
            e.pb(
              14,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, z)),
            e.pb(
              16,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(),
            e.qb(
              17,
              0,
              null,
              null,
              2,
              "ul",
              [["class", "collapse cricket-matches"]],
              [[8, "id", 0]],
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(18, 0, null, null, 1, "li", [], null, null, null, null, null)),
            (l()(),
            e.qb(
              19,
              0,
              null,
              null,
              0,
              "a",
              [
                ["aria-expanded", "true"],
                ["class", "base-c collapsed"],
                ["data-toggle", "collapse"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
          ],
          function (l, n) {
            var t = n.component;
            l(
              n,
              3,
              0,
              "base-c collapsed ripple",
              t.eventId &&
                (null == n.parent.context.$implicit
                  ? null
                  : n.parent.context.$implicit.eventId) == t.eventId
                ? "active"
                : ""
            ),
              l(n, 6, 0, "D1" == t.object.themeChange.uxDesign, e.Cb(n, 7)),
              l(n, 12, 0, t.object.isMarketRoute),
              l(n, 14, 0, t.object.isManualMarektRoute),
              l(n, 16, 0, !t.object.isAdminLogin());
          },
          function (l, n) {
            l(
              n,
              1,
              0,
              e.ub(
                1,
                "#",
                (null == n.parent.context.$implicit
                  ? null
                  : null == n.parent.context.$implicit.data
                  ? null
                  : n.parent.context.$implicit.data.betfairId) ||
                  (null == n.parent.context.$implicit
                    ? null
                    : n.parent.context.$implicit.eventId),
                ""
              )
            ),
              l(
                n,
                9,
                0,
                e.ub(
                  1,
                  "",
                  null == n.parent.context.$implicit
                    ? null
                    : null == n.parent.context.$implicit.data
                    ? null
                    : n.parent.context.$implicit.data.name,
                  ""
                )
              ),
              l(
                n,
                10,
                0,
                (null == n.parent.context.$implicit
                  ? null
                  : null == n.parent.context.$implicit.data
                  ? null
                  : n.parent.context.$implicit.data.name) ||
                  (null == n.parent.context.$implicit
                    ? null
                    : n.parent.context.$implicit.eventName),
                1 ==
                  (null == n.parent.context.$implicit
                    ? null
                    : null == n.parent.context.$implicit.data
                    ? null
                    : n.parent.context.$implicit.data.type)
                  ? "(" + n.parent.context.$implicit.children.length + ")"
                  : ""
              ),
              l(
                n,
                17,
                0,
                (null == n.parent.context.$implicit
                  ? null
                  : null == n.parent.context.$implicit.data
                  ? null
                  : n.parent.context.$implicit.data.betfairId) ||
                  (null == n.parent.context.$implicit
                    ? null
                    : n.parent.context.$implicit.eventId)
              );
          }
        );
      }
      function X(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              2,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, Z)),
            e.pb(
              2,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(0, null, null, 0)),
          ],
          function (l, n) {
            l(
              n,
              2,
              0,
              (null == n.context.$implicit
                ? null
                : null == n.context.$implicit.data
                ? null
                : n.context.$implicit.data.type) ||
                (null == n.context.$implicit ? null : n.context.$implicit.type)
            );
          },
          null
        );
      }
      function Q(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              2,
              "ul",
              [["class", "games"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, X)),
            e.pb(
              2,
              278528,
              null,
              0,
              i.m,
              [e.N, e.J, e.q],
              {
                ngForOf: [0, "ngForOf"],
              },
              null
            ),
          ],
          function (l, n) {
            l(
              n,
              2,
              0,
              null == n.parent.parent.context.$implicit
                ? null
                : n.parent.parent.context.$implicit.children
            );
          },
          null
        );
      }
      function ll(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              21,
              "li",
              [["class", "accordion-border"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              15,
              "a",
              [
                ["aria-expanded", "true"],
                ["class", "base-c collapsed ripple"],
                ["data-toggle", "collapse"],
                ["style", "color:#fff"],
              ],
              [[8, "href", 4]],
              [[null, "click"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "click" === n &&
                    (e =
                      !1 !==
                        l.component.handleRedirectMenuForEvent(
                          l.parent.context.$implicit
                        ) && e),
                  e
                );
              },
              null,
              null
            )),
            e.Hb(512, null, i.A, i.B, [e.q, e.r, e.k, e.B]),
            e.pb(
              3,
              278528,
              null,
              0,
              i.l,
              [i.A],
              {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"],
              },
              null
            ),
            (l()(),
            e.qb(
              4,
              0,
              null,
              null,
              3,
              "span",
              [["class", "icon-sub-category"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, q)),
            e.pb(
              6,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
                ngIfElse: [1, "ngIfElse"],
              },
              null
            ),
            (l()(), e.fb(0, [["secondCond", 2]], null, 0, null, L)),
            (l()(),
            e.qb(
              8,
              0,
              null,
              null,
              2,
              "span",
              [
                [
                  "style",
                  "overflow-wrap: break-word;\n                                    word-wrap: break-word;\n                                    white-space: normal !important;",
                ],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              9,
              0,
              null,
              null,
              1,
              "span",
              [["data-toggle", "tooltip"]],
              [[8, "title", 0]],
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(10, null, ["", " ", ""])),
            (l()(), e.fb(16777216, null, null, 1, null, w)),
            e.pb(
              12,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, A)),
            e.pb(
              14,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, D)),
            e.pb(
              16,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(),
            e.qb(
              17,
              0,
              null,
              null,
              4,
              "ul",
              [["class", "collapse cricket-matches"]],
              [[8, "id", 0]],
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(18, 0, null, null, 3, "li", [], null, null, null, null, null)),
            (l()(),
            e.qb(
              19,
              0,
              null,
              null,
              0,
              "a",
              [
                ["aria-expanded", "true"],
                ["class", "base-c collapsed"],
                ["data-toggle", "collapse"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, Q)),
            e.pb(
              21,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
          ],
          function (l, n) {
            var t = n.component;
            l(
              n,
              3,
              0,
              "base-c collapsed ripple",
              t.eventId &&
                (null == n.parent.context.$implicit
                  ? null
                  : n.parent.context.$implicit.eventId) == t.eventId
                ? "active"
                : ""
            ),
              l(n, 6, 0, "D1" == t.object.themeChange.uxDesign, e.Cb(n, 7)),
              l(n, 12, 0, t.object.isMarketRoute),
              l(n, 14, 0, t.object.isManualMarektRoute),
              l(n, 16, 0, !t.object.isAdminLogin()),
              l(n, 21, 0, t.childMenudata);
          },
          function (l, n) {
            l(
              n,
              1,
              0,
              e.ub(
                1,
                "#",
                (null == n.parent.context.$implicit
                  ? null
                  : null == n.parent.context.$implicit.data
                  ? null
                  : n.parent.context.$implicit.data.betfairId) ||
                  (null == n.parent.context.$implicit
                    ? null
                    : n.parent.context.$implicit.eventId),
                ""
              )
            ),
              l(
                n,
                9,
                0,
                e.ub(
                  1,
                  "",
                  null == n.parent.context.$implicit
                    ? null
                    : null == n.parent.context.$implicit.data
                    ? null
                    : n.parent.context.$implicit.data.name,
                  ""
                )
              ),
              l(
                n,
                10,
                0,
                (null == n.parent.context.$implicit
                  ? null
                  : null == n.parent.context.$implicit.data
                  ? null
                  : n.parent.context.$implicit.data.name) ||
                  (null == n.parent.context.$implicit
                    ? null
                    : n.parent.context.$implicit.eventName),
                1 ==
                  (null == n.parent.context.$implicit
                    ? null
                    : null == n.parent.context.$implicit.data
                    ? null
                    : n.parent.context.$implicit.data.type)
                  ? "(" + n.parent.context.$implicit.children.length + ")"
                  : ""
              ),
              l(
                n,
                17,
                0,
                (null == n.parent.context.$implicit
                  ? null
                  : null == n.parent.context.$implicit.data
                  ? null
                  : n.parent.context.$implicit.data.betfairId) ||
                  (null == n.parent.context.$implicit
                    ? null
                    : n.parent.context.$implicit.eventId)
              );
          }
        );
      }
      function nl(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              2,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, ll)),
            e.pb(
              2,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(0, null, null, 0)),
          ],
          function (l, n) {
            l(
              n,
              2,
              0,
              (null == n.context.$implicit
                ? null
                : null == n.context.$implicit.data
                ? null
                : n.context.$implicit.data.type) ||
                (null == n.context.$implicit ? null : n.context.$implicit.type)
            );
          },
          null
        );
      }
      function tl(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              2,
              "ul",
              [["class", "games"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, nl)),
            e.pb(
              2,
              278528,
              null,
              0,
              i.m,
              [e.N, e.J, e.q],
              {
                ngForOf: [0, "ngForOf"],
              },
              null
            ),
          ],
          function (l, n) {
            l(
              n,
              2,
              0,
              null == n.parent.parent.context.$implicit
                ? null
                : n.parent.parent.context.$implicit.children
            );
          },
          null
        );
      }
      function el(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              22,
              "li",
              [["class", "accordion-border"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              16,
              "a",
              [
                ["aria-expanded", "true"],
                ["class", "base-c collapsed ripple"],
                ["data-toggle", "collapse"],
                ["style", "color:#fff"],
              ],
              [[8, "href", 4]],
              [[null, "click"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "click" === n &&
                    (e =
                      !1 !==
                        l.component.handleRedirectMenuForEvent(
                          l.parent.context.$implicit
                        ) && e),
                  e
                );
              },
              null,
              null
            )),
            e.Hb(512, null, i.A, i.B, [e.q, e.r, e.k, e.B]),
            e.pb(
              3,
              278528,
              null,
              0,
              i.l,
              [i.A],
              {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"],
              },
              null
            ),
            (l()(),
            e.qb(
              4,
              0,
              null,
              null,
              3,
              "span",
              [["class", "icon-sub-category"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, x)),
            e.pb(
              6,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
                ngIfElse: [1, "ngIfElse"],
              },
              null
            ),
            (l()(), e.fb(0, [["secondCond", 2]], null, 0, null, k)),
            (l()(),
            e.qb(
              8,
              0,
              null,
              null,
              3,
              "span",
              [
                [
                  "style",
                  "overflow-wrap: break-word;\n                word-wrap: break-word;\n                white-space: normal !important;",
                ],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              9,
              0,
              null,
              null,
              2,
              "span",
              [["data-toggle", "tooltip"]],
              [[8, "title", 0]],
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(10, null, ["", " ", ""])),
            e.Eb(131072, u.j, [u.k, e.h]),
            (l()(), e.fb(16777216, null, null, 1, null, y)),
            e.pb(
              13,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, I)),
            e.pb(
              15,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, _)),
            e.pb(
              17,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(),
            e.qb(
              18,
              0,
              null,
              null,
              4,
              "ul",
              [["class", "collapse cricket-matches"]],
              [[8, "id", 0]],
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(19, 0, null, null, 3, "li", [], null, null, null, null, null)),
            (l()(),
            e.qb(
              20,
              0,
              null,
              null,
              0,
              "a",
              [
                ["aria-expanded", "true"],
                ["class", "base-c collapsed"],
                ["data-toggle", "collapse"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, tl)),
            e.pb(
              22,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
          ],
          function (l, n) {
            var t = n.component;
            l(
              n,
              3,
              0,
              "base-c collapsed ripple",
              t.eventId &&
                (null == n.parent.context.$implicit
                  ? null
                  : n.parent.context.$implicit.eventId) == t.eventId
                ? "active"
                : ""
            ),
              l(n, 6, 0, "D1" == t.object.themeChange.uxDesign, e.Cb(n, 7)),
              l(n, 13, 0, t.object.isMarketRoute),
              l(n, 15, 0, t.object.isManualMarektRoute),
              l(n, 17, 0, !t.object.isAdminLogin()),
              l(n, 22, 0, t.tournamentMenudata);
          },
          function (l, n) {
            l(
              n,
              1,
              0,
              e.ub(
                1,
                "#",
                (null == n.parent.context.$implicit
                  ? null
                  : null == n.parent.context.$implicit.data
                  ? null
                  : n.parent.context.$implicit.data.betfairId) ||
                  (null == n.parent.context.$implicit
                    ? null
                    : n.parent.context.$implicit.eventId),
                ""
              )
            ),
              l(
                n,
                9,
                0,
                e.ub(
                  1,
                  "",
                  null == n.parent.context.$implicit
                    ? null
                    : null == n.parent.context.$implicit.data
                    ? null
                    : n.parent.context.$implicit.data.name,
                  ""
                )
              ),
              l(
                n,
                10,
                0,
                e.Lb(
                  n,
                  10,
                  0,
                  e
                    .Cb(n, 11)
                    .transform(
                      (null == n.parent.context.$implicit
                        ? null
                        : null == n.parent.context.$implicit.data
                        ? null
                        : n.parent.context.$implicit.data.name) ||
                        (null == n.parent.context.$implicit
                          ? null
                          : n.parent.context.$implicit.eventName)
                    )
                ),
                1 ==
                  (null == n.parent.context.$implicit
                    ? null
                    : null == n.parent.context.$implicit.data
                    ? null
                    : n.parent.context.$implicit.data.type)
                  ? "(" + n.parent.context.$implicit.children.length + ")"
                  : ""
              ),
              l(
                n,
                18,
                0,
                (null == n.parent.context.$implicit
                  ? null
                  : null == n.parent.context.$implicit.data
                  ? null
                  : n.parent.context.$implicit.data.betfairId) ||
                  (null == n.parent.context.$implicit
                    ? null
                    : n.parent.context.$implicit.eventId)
              );
          }
        );
      }
      function ul(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              2,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, el)),
            e.pb(
              2,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(0, null, null, 0)),
          ],
          function (l, n) {
            l(
              n,
              2,
              0,
              (null == n.context.$implicit
                ? null
                : null == n.context.$implicit.data
                ? null
                : n.context.$implicit.data.type) ||
                (null == n.context.$implicit ? null : n.context.$implicit.type)
            );
          },
          null
        );
      }
      function il(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              2,
              "ul",
              [["class", "games"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, ul)),
            e.pb(
              2,
              278528,
              null,
              0,
              i.m,
              [e.N, e.J, e.q],
              {
                ngForOf: [0, "ngForOf"],
              },
              null
            ),
          ],
          function (l, n) {
            var t = n.component;
            l(n, 2, 0, null == t.menulist ? null : t.menulist.children);
          },
          null
        );
      }
      class al {
        constructor() {
          (this.menu = {}), (this.transferMenuListClick = new e.m());
        }
        ngOnInit() {}
        handleMenuClick(l) {
          this.transferMenuListClick.emit(l);
        }
      }
      var cl = e.ob({
        encapsulation: 0,
        styles: [[".games[_ngcontent-%COMP%]{width:100%}"]],
        data: {},
      });
      function ol(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              1,
              "app-list",
              [],
              null,
              [[null, "transferMenuClick"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "transferMenuClick" === n &&
                    (e = !1 !== l.component.handleMenuClick(t) && e),
                  e
                );
              },
              il,
              f
            )),
            e.pb(
              1,
              114688,
              null,
              0,
              b,
              [d.p, g.a, m.a, h.a],
              {
                menulist: [0, "menulist"],
              },
              {
                transferMenuClick: "transferMenuClick",
              }
            ),
          ],
          function (l, n) {
            l(n, 1, 0, n.component.menu);
          },
          null
        );
      }
      var sl = t("NGzU"),
        rl = t("owU6"),
        pl = t("ThFC"),
        bl = t("05GW"),
        dl = t("sQWB");
      t("CVV/");
      class gl {
        constructor(l, n, t, u, i, a) {
          (this.searchFilter = l),
            (this.object = n),
            (this.braodCast = t),
            (this.el = u),
            (this.router = i),
            (this._elementRef = a),
            (this.menu = {}),
            (this.childMenu = {}),
            (this.transferMenuListClick = new e.m()),
            (this.childMenuLocal = []);
        }
        ngOnInit() {
          this.checkMarketPage = this.object.getRouterInstance().url.split("/");
        }
        handleEventSearchList(l) {
          (this.childMenuLocal = []),
            (l.target.value = l.target.value.trimStart());
          let n = l.target.value;
          (this.searchValue = n),
            "" != n &&
              ((n = n.toUpperCase()),
              this.childMenu.forEach((l) => {
                l.data.name.toUpperCase().includes(n) &&
                  this.childMenuLocal.push(l);
              }));
        }
        closeSearchbox() {
          (this.childMenuLocal = []), (this.searchValue = "");
        }
        onClick(l) {
          0 == this._elementRef.nativeElement.contains(l) &&
            this.closeSearchbox();
        }
        onWindowScroll(l) {
          this.closeSearchbox();
        }
        handleMenuClick(l) {
          this.transferMenuListClick.emit(l);
        }
        handleEventSearch(l) {
          this.childMenuLocal = [];
          let n = this.childMenu.find((n) => n.data.id == l.data.id);
          (this.searchValue = ""),
            this.nameField.nativeElement.blur(),
            n &&
              (this.object.isAdminLogin()
                ? this.braodCast.broadcast(
                    this.object.getConstants().BROADCASTKEY.SEARCHDATA,
                    {
                      search: n,
                    }
                  )
                : this.object
                    .getRouterInstance()
                    .navigate([
                      "/sport/" + this.object.getUI_URL().user.eventDetail,
                      n.data.marketId,
                      n.data.eventId,
                    ]));
        }
        goToPinned() {
          this.object
            .getRouterInstance()
            .navigateByUrl(this.object.getUI_URL().user.pinned);
        }
        goToInPlay() {
          this.object
            .getRouterInstance()
            .navigateByUrl(this.object.getUI_URL().user.inPlay);
        }
        splMarket(l) {
          (this.object.eventStatus = !1),
            this.object.getDOMInstance().showModal(l);
        }
        searchEvent() {
          this.object.SpclMarket = !1;
        }
        gotoEventCat(l, n) {
          switch ((window.localStorage.setItem("path", l), l)) {
            case this.object.getConstants().PNL.SPORTS:
              this.router.navigate(["/sport"]),
                window.localStorage.removeItem("path"),
                this.braodCast.broadcast(
                  this.object.getConstants().BETLIST.UPDATEINPLAYBETLIST,
                  !0
                );
              break;
            case this.object.getConstants().PNL.INDIAN_CASINO:
              this.router.navigate(["/casino"]),
                (this.object.activeWebLink = l),
                window.localStorage.removeItem("path");
              break;
            case this.object.getConstants().PNL.LIVECASINO:
              this.router.navigate(["/casino-games/live-casino"]),
                (this.object.activeWebLink = l);
              break;
            case this.object.getConstants().PNL.SLOTGAME:
              this.router.navigate(["/casino-games/slot-games"]),
                (this.object.activeWebLink = l);
              break;
            case this.object.getConstants().PNL.VIRTUALSPORT:
              this.router.navigate(["/casino-games/virtual-sports"]),
                (this.object.activeWebLink = l);
              break;
            case this.object.getConstants().PNL.SPECIALMARKET:
              this.router.navigate(["/special-market"]),
                (this.object.activeWebLink = l),
                window.localStorage.removeItem("path");
              break;
            case this.object.getConstants().PNL.FANTASY:
              this.router.navigate(["/fantasy-games"]),
                (this.object.activeWebLink = l);
              break;
            case this.object.getConstants().PNL.BINGO:
              this.splMarket("specialMarket");
              break;
            case this.object.getConstants().PNL.SLG_SPORTSBOOK:
              this.object.getLoginInstance().getIsLogin()
                ? this.object.getDOMInstance().showModal("coinsliderSportBook")
                : (this.router.navigate(["/casino-games/sportsbook"]),
                  (this.object.activeWebLink = l));
          }
          n.menuIcon = n.menuIcon.split("_")[0];
        }
        mouseEnter(l) {
          l.menuIcon = l.menuIcon + "_2";
        }
        mouseLeave(l) {
          l.menuIcon = l.menuIcon.split("_")[0];
        }
        transfercoinToSportsGames(l, n) {
          this.object.getDOMInstance().hideModal("coinsliderSportBook"),
            this.object
              .getUtilInstance()
              .storeState(this.object.getConstants().STORAGE.COIN, l),
            this.gotoSportBook();
        }
        gotoSportBook() {
          window.open("/casino-games/sportsbook", "_self");
        }
        hidemodalSportBook() {
          this.object.getDOMInstance().hideModal("coinsliderSportBook");
        }
      }
      var ml = e.ob({
        encapsulation: 0,
        styles: [
          [
            ".svgicon[_ngcontent-%COMP%]{width:18px;margin-right:0;margin-left:-10px}.cls-1[_ngcontent-%COMP%]{stroke:#000;stroke-miterlimit:1}.cls-1[_ngcontent-%COMP%], .cls-2[_ngcontent-%COMP%]{fill:var(--casino-color)}.accrow[_ngcontent-%COMP%]{fill:none;stroke:var(--casino-color)}.accordian-menu[_ngcontent-%COMP%]   .pinned.active[_ngcontent-%COMP%]{background:linear-gradient(90deg,var(--maindark) 0,var(--maindark) 100%);opacity:1}.rightarrowicon[_ngcontent-%COMP%]{width:7px;margin-left:10px;float:right}.pinned.active[_ngcontent-%COMP%]   .accrow[_ngcontent-%COMP%], .pinned[_ngcontent-%COMP%]:hover   .accrow[_ngcontent-%COMP%]{stroke:#000}.accordian-menu[_ngcontent-%COMP%]   .pinned[_ngcontent-%COMP%]:hover{background:linear-gradient(90deg,var(--maindark) 0,var(--maindark) 100%)!important}.boderbot[_ngcontent-%COMP%]{width:100px;margin-bottom:15px;border-bottom:3px solid!important}.sidebarTextHeading[_ngcontent-%COMP%]{height:49px;display:flex;align-items:center;padding:0 7px 0 10px}.sidebarTextHeading[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.sidebarTextHeading[_ngcontent-%COMP%]   .mobileee[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:22px}ul.search-result[_ngcontent-%COMP%]{padding:0;margin:-65px 0 0;overflow-y:auto;overflow-x:hidden;background:#fff;position:fixed;left:264px;z-index:99;box-shadow:0 0 10px rgba(0,0,0,.2);border-radius:4px;max-height:50vh}ul.search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:#000;padding:7px 10px 6px;font-size:12px;text-transform:uppercase;white-space:normal;cursor:pointer}.triangle-lefts[_ngcontent-%COMP%]{position:absolute;width:0;height:0;border-top:8px solid transparent;border-right:16px solid #fff;border-bottom:8px solid transparent;left:94%;top:36px}",
          ],
        ],
        data: {},
      });
      function hl(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              16,
              "div",
              [
                [
                  "class",
                  "in-play accordion-border cursr mobileee sidebarTextHeading",
                ],
              ],
              null,
              [[null, "click"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "click" === n && (e = !1 !== l.component.goToPinned() && e), e
                );
              },
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              15,
              "h3",
              [
                ["class", "base-c "],
                ["style", "width: 100%;"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              2,
              0,
              null,
              null,
              14,
              "a",
              [["class", "base-c"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              3,
              0,
              null,
              null,
              9,
              "span",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              4,
              0,
              null,
              null,
              6,
              ":svg:svg",
              [
                ["class", "svgicon"],
                [
                  "style",
                  "margin-left: 0px;    margin-right: 9px;     margin: 0;",
                ],
                ["viewBox", "0 0 16.47 16.47"],
                ["xmlns", "http://www.w3.org/2000/svg"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              5,
              0,
              null,
              null,
              1,
              ":svg:defs",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              6,
              0,
              null,
              null,
              0,
              ":svg:style",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              7,
              0,
              null,
              null,
              3,
              ":svg:g",
              [
                ["data-name", "Layer 2"],
                ["id", "Layer_2"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              8,
              0,
              null,
              null,
              2,
              ":svg:g",
              [
                ["data-name", "Layer 1"],
                ["id", "Layer_1-2"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              9,
              0,
              null,
              null,
              0,
              ":svg:polygon",
              [
                ["points", "6.21 11.73 0 16.47 4.74 10.27 6.21 11.73"],
                ["style", "fill: var(--casino-color);"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              10,
              0,
              null,
              null,
              0,
              ":svg:path",
              [
                [
                  "d",
                  "M16.41,5.37,14.7,7.08a.19.19,0,0,1-.28,0l-.49-.49L11.68,8.84a5.73,5.73,0,0,1-1.49,5.52l-.1.11c-.13.12-.11.12-.24,0L5.2,9.81,2,6.61c-.13-.12-.12-.1,0-.24l.09-.09A5.71,5.71,0,0,1,7.63,4.8L9.88,2.54,9.4,2.06a.21.21,0,0,1,0-.29L11.11.06a.19.19,0,0,1,.28,0l5,5A.19.19,0,0,1,16.41,5.37Z",
                ],
                ["style", "fill: var(--casino-color);"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(11, null, [" ", " "])),
            e.Eb(131072, u.j, [u.k, e.h]),
            (l()(),
            e.qb(
              13,
              0,
              null,
              null,
              3,
              ":svg:svg",
              [
                ["class", "rightarrowicon"],
                ["style", "margin-right: 20px !important;"],
                ["viewBox", "0 0 9.16 17.09"],
                ["xmlns", "http://www.w3.org/2000/svg"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              14,
              0,
              null,
              null,
              2,
              ":svg:g",
              [
                ["data-name", "Layer 2"],
                ["id", "Layer_2"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              15,
              0,
              null,
              null,
              1,
              ":svg:g",
              [
                ["data-name", "Layer 1"],
                ["id", "Layer_1-2"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              16,
              0,
              null,
              null,
              0,
              ":svg:polyline",
              [
                ["class", "accrow"],
                ["points", "1.42 15.68 7.74 8.67 1.42 1.42"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
          ],
          null,
          function (l, n) {
            l(n, 11, 0, e.Lb(n, 11, 0, e.Cb(n, 12).transform("Pinned Items")));
          }
        );
      }
      function fl(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              1,
              "li",
              [],
              null,
              [[null, "click"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "click" === n &&
                    (e =
                      !1 !==
                        l.component.handleEventSearch(l.context.$implicit) &&
                      e),
                  e
                );
              },
              null,
              null
            )),
            (l()(), e.Kb(1, null, ["", ""])),
          ],
          null,
          function (l, n) {
            l(n, 1, 0, n.context.$implicit.data.name);
          }
        );
      }
      function xl(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(0, 0, null, null, 4, "div", [], null, null, null, null, null)),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              0,
              "div",
              [["class", "triangle-lefts"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              2,
              0,
              null,
              null,
              2,
              "ul",
              [
                ["class", "search-result"],
                ["onclick", "event.preventDefault()"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, fl)),
            e.pb(
              4,
              278528,
              null,
              0,
              i.m,
              [e.N, e.J, e.q],
              {
                ngForOf: [0, "ngForOf"],
              },
              null
            ),
          ],
          function (l, n) {
            l(n, 4, 0, n.component.childMenuLocal);
          },
          null
        );
      }
      function Cl(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              10,
              "div",
              [["class", "search"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              [
                [1, 0],
                ["search", 1],
              ],
              null,
              5,
              "input",
              [
                ["class", "accordion-search input-search-bg"],
                ["list", "searchChildNames"],
                ["placeholder", "Search by event name...."],
                ["type", "text"],
              ],
              [
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null],
              ],
              [
                [null, "keyup"],
                [null, "ngModelChange"],
                [null, "input"],
                [null, "blur"],
                [null, "compositionstart"],
                [null, "compositionend"],
              ],
              function (l, n, t) {
                var u = !0,
                  i = l.component;
                return (
                  "input" === n &&
                    (u = !1 !== e.Cb(l, 2)._handleInput(t.target.value) && u),
                  "blur" === n && (u = !1 !== e.Cb(l, 2).onTouched() && u),
                  "compositionstart" === n &&
                    (u = !1 !== e.Cb(l, 2)._compositionStart() && u),
                  "compositionend" === n &&
                    (u =
                      !1 !== e.Cb(l, 2)._compositionEnd(t.target.value) && u),
                  "keyup" === n && (u = !1 !== i.handleEventSearchList(t) && u),
                  "ngModelChange" === n &&
                    (u = !1 !== (i.searchValue = t) && u),
                  u
                );
              },
              null,
              null
            )),
            e.pb(2, 16384, null, 0, a.d, [e.B, e.k, [2, a.a]], null, null),
            e.Hb(
              1024,
              null,
              a.m,
              function (l) {
                return [l];
              },
              [a.d]
            ),
            e.pb(
              4,
              671744,
              null,
              0,
              a.r,
              [
                [8, null],
                [8, null],
                [8, null],
                [6, a.m],
              ],
              {
                model: [0, "model"],
              },
              {
                update: "ngModelChange",
              }
            ),
            e.Hb(2048, null, a.n, null, [a.r]),
            e.pb(6, 16384, null, 0, a.o, [[4, a.n]], null, null),
            (l()(),
            e.qb(
              7,
              0,
              null,
              null,
              1,
              "span",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              8,
              0,
              null,
              null,
              0,
              "img",
              [["src", "assets/images/arrow-side.svg"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, xl)),
            e.pb(
              10,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
          ],
          function (l, n) {
            var t = n.component;
            l(n, 4, 0, t.searchValue), l(n, 10, 0, t.searchValue);
          },
          function (l, n) {
            l(
              n,
              1,
              0,
              e.Cb(n, 6).ngClassUntouched,
              e.Cb(n, 6).ngClassTouched,
              e.Cb(n, 6).ngClassPristine,
              e.Cb(n, 6).ngClassDirty,
              e.Cb(n, 6).ngClassValid,
              e.Cb(n, 6).ngClassInvalid,
              e.Cb(n, 6).ngClassPending
            );
          }
        );
      }
      function kl(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              4,
              "div",
              [
                ["class", "in-play accordion-border boderbot"],
                [
                  "style",
                  "border-bottom: solid 3px var(--maindark) !important;",
                ],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              3,
              "h3",
              [
                ["class", "base-c margin-3"],
                ["style", "cursor:default;"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              2,
              0,
              null,
              null,
              2,
              "a",
              [
                ["class", "base-c"],
                ["style", "cursor:default; "],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(3, null, [" ", " "])),
            e.Eb(131072, u.j, [u.k, e.h]),
          ],
          null,
          function (l, n) {
            l(n, 3, 0, e.Lb(n, 3, 0, e.Cb(n, 4).transform("MENU")));
          }
        );
      }
      function vl(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              15,
              "div",
              [["class", "pinned accordion-border bottom cursr"]],
              null,
              [
                [null, "mouseenter"],
                [null, "mouseleave"],
                [null, "click"],
              ],
              function (l, n, t) {
                var e = !0,
                  u = l.component;
                return (
                  "mouseenter" === n &&
                    (e = !1 !== u.mouseEnter(l.parent.context.$implicit) && e),
                  "mouseleave" === n &&
                    (e = !1 !== u.mouseLeave(l.parent.context.$implicit) && e),
                  "click" === n &&
                    (e =
                      !1 !==
                        u.gotoEventCat(
                          null == l.parent.context.$implicit
                            ? null
                            : l.parent.context.$implicit.gameType,
                          l.parent.context.$implicit
                        ) && e),
                  e
                );
              },
              null,
              null
            )),
            e.Hb(512, null, i.A, i.B, [e.q, e.r, e.k, e.B]),
            e.pb(
              2,
              278528,
              null,
              0,
              i.l,
              [i.A],
              {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"],
              },
              null
            ),
            (l()(),
            e.qb(
              3,
              0,
              null,
              null,
              12,
              "h3",
              [["class", "base-c margin-3 "]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              4,
              0,
              null,
              null,
              11,
              "a",
              [
                ["class", "base-c"],
                ["href", "Javascript:void(0);"],
                [
                  "style",
                  "display: flex; justify-content: space-between;     align-items: center;",
                ],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              5,
              0,
              null,
              null,
              4,
              "span",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              6,
              0,
              null,
              null,
              1,
              "app-svg",
              [],
              null,
              null,
              null,
              c.b,
              c.a
            )),
            e.pb(
              7,
              114688,
              null,
              0,
              o.a,
              [],
              {
                type: [0, "type"],
              },
              null
            ),
            (l()(), e.Kb(8, null, [" ", ""])),
            e.Eb(131072, u.j, [u.k, e.h]),
            (l()(),
            e.qb(
              10,
              0,
              null,
              null,
              5,
              ":svg:svg",
              [
                ["class", "rightarrowicon"],
                ["viewBox", "0 0 9.16 17.09"],
                ["xmlns", "http://www.w3.org/2000/svg"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              11,
              0,
              null,
              null,
              1,
              ":svg:defs",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              12,
              0,
              null,
              null,
              0,
              ":svg:style",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              13,
              0,
              null,
              null,
              2,
              ":svg:g",
              [
                ["data-name", "Layer 2"],
                ["id", "Layer_2"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              14,
              0,
              null,
              null,
              1,
              ":svg:g",
              [
                ["data-name", "Layer 1"],
                ["id", "Layer_1-2"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              15,
              0,
              null,
              null,
              0,
              ":svg:polyline",
              [
                ["class", "accrow"],
                ["points", "1.42 15.68 7.74 8.67 1.42 1.42"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
          ],
          function (l, n) {
            var t = n.component;
            l(
              n,
              2,
              0,
              "pinned accordion-border bottom cursr",
              (("Sport" == t.object.mobileRoute ||
                "Match" == t.object.mobileRoute) &&
                "IN-PLAY" == n.parent.context.$implicit.name) ||
                ("SPECIAL MARKET" == t.object.mobileRoute &&
                  "SPECIAL MARKET" == n.parent.context.$implicit.name)
                ? "active"
                : ""
            ),
              l(n, 7, 0, n.parent.context.$implicit.menuIcon);
          },
          function (l, n) {
            l(
              n,
              8,
              0,
              e.Lb(
                n,
                8,
                0,
                e
                  .Cb(n, 9)
                  .transform(
                    null == n.parent.context.$implicit
                      ? null
                      : n.parent.context.$implicit.name
                  )
              )
            );
          }
        );
      }
      function Ml(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              2,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, vl)),
            e.pb(
              2,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(0, null, null, 0)),
          ],
          function (l, n) {
            l(n, 2, 0, !n.component.object.isAdminLogin());
          },
          null
        );
      }
      function yl(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              7,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              3,
              "div",
              [["class", "market-head "]],
              null,
              [[null, "click"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "click" === n &&
                    (e = !1 !== l.component.closeSearchbox() && e),
                  e
                );
              },
              null,
              null
            )),
            (l()(),
            e.qb(
              2,
              0,
              null,
              null,
              2,
              "h3",
              [
                ["class", "base-c"],
                [
                  "style",
                  "cursor:default;  border-bottom: solid 3px var(--maindark) !important;",
                ],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(3, null, [" ", ""])),
            e.Eb(131072, u.j, [u.k, e.h]),
            (l()(),
            e.qb(
              5,
              0,
              null,
              null,
              2,
              "div",
              [["class", "game-option"]],
              null,
              [[null, "click"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "click" === n &&
                    (e = !1 !== l.component.closeSearchbox() && e),
                  e
                );
              },
              null,
              null
            )),
            (l()(),
            e.qb(
              6,
              0,
              null,
              null,
              1,
              "app-menu-list",
              [],
              null,
              [[null, "transferMenuListClick"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "transferMenuListClick" === n &&
                    (e = !1 !== l.component.handleMenuClick(t) && e),
                  e
                );
              },
              ol,
              cl
            )),
            e.pb(
              7,
              114688,
              null,
              0,
              al,
              [],
              {
                menu: [0, "menu"],
              },
              {
                transferMenuListClick: "transferMenuListClick",
              }
            ),
          ],
          function (l, n) {
            l(n, 7, 0, n.component.menu);
          },
          function (l, n) {
            l(n, 3, 0, e.Lb(n, 3, 0, e.Cb(n, 4).transform("MATCHES")));
          }
        );
      }
      function $l(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              2,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, yl)),
            e.pb(
              2,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(0, null, null, 0)),
          ],
          function (l, n) {
            l(n, 2, 0, "special-market" != n.component.checkMarketPage[3]);
          },
          null
        );
      }
      function Ol(l) {
        return e.Mb(
          0,
          [
            e.Ib(671088640, 1, {
              nameField: 0,
            }),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              13,
              "div",
              [["class", "scroll-bar-wrap"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              2,
              0,
              null,
              null,
              12,
              "div",
              [["class", "scroll-box accordian-menu accordian-menu-bg"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, hl)),
            e.pb(
              4,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, Cl)),
            e.pb(
              6,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(),
            e.qb(
              7,
              0,
              null,
              null,
              5,
              "div",
              [["class", "mainheadingg"]],
              null,
              [[null, "click"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "click" === n &&
                    (e = !1 !== l.component.closeSearchbox() && e),
                  e
                );
              },
              null,
              null
            )),
            (l()(),
            e.qb(
              8,
              0,
              null,
              null,
              4,
              "div",
              [["class", "menubarss"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, kl)),
            e.pb(
              10,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, Ml)),
            e.pb(
              12,
              278528,
              null,
              0,
              i.m,
              [e.N, e.J, e.q],
              {
                ngForOf: [0, "ngForOf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, $l)),
            e.pb(
              14,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(),
            e.qb(
              15,
              0,
              null,
              null,
              1,
              "app-coming-soon",
              [],
              null,
              null,
              null,
              sl.b,
              sl.a
            )),
            e.pb(16, 114688, null, 0, rl.a, [m.a], null, null),
            (l()(),
            e.qb(
              17,
              0,
              null,
              null,
              1,
              "app-low-bal-currency-info-sportbook",
              [],
              null,
              [
                [null, "hideModelEvent"],
                [null, "transfertoJiliCoin"],
              ],
              function (l, n, t) {
                var e = !0,
                  u = l.component;
                return (
                  "hideModelEvent" === n &&
                    (e = !1 !== u.hidemodalSportBook() && e),
                  "transfertoJiliCoin" === n &&
                    (e = !1 !== u.transfercoinToSportsGames(t, "web") && e),
                  e
                );
              },
              pl.b,
              pl.a
            )),
            e.pb(
              18,
              114688,
              null,
              0,
              bl.a,
              [m.a],
              {
                gameName: [0, "gameName"],
              },
              {
                hideModelEvent: "hideModelEvent",
                transfertoJiliCoin: "transfertoJiliCoin",
              }
            ),
          ],
          function (l, n) {
            var t = n.component;
            l(n, 4, 0, !t.object.isAdminLogin()),
              l(
                n,
                6,
                0,
                t.object.isAdminLogin() && "market" == t.checkMarketPage[2]
              ),
              l(n, 10, 0, !t.object.isAdminLogin()),
              l(n, 12, 0, t.object.themeUXChange.sidemenu),
              l(n, 14, 0, "special-market" != t.checkMarketPage[1]),
              l(n, 16, 0),
              l(n, 18, 0, "Sports Book");
          },
          null
        );
      }
      var Il = t("iwoa");
      class Sl {
        constructor(l, n, t, u, i) {
          (this.searchFilter = l),
            (this.object = n),
            (this.braodCast = t),
            (this.el = u),
            (this.router = i),
            (this.menu = {}),
            (this.childMenu = {}),
            (this.transferMenuListClick = new e.m());
        }
        ngOnInit() {
          this.checkMarketPage = this.object.getRouterInstance().url.split("/");
        }
        handleMenuClick(l) {
          this.transferMenuListClick.emit(l);
        }
        handleEventSearch(l) {}
        goToPinned() {
          this.object
            .getRouterInstance()
            .navigateByUrl(this.object.getUI_URL().user.pinned);
        }
        goToInPlay() {
          this.object
            .getRouterInstance()
            .navigateByUrl(this.object.getUI_URL().user.inPlay);
        }
        splMarket(l) {
          this.object.getDOMInstance().showModal(l);
        }
        searchEvent() {
          this.object.SpclMarket = !1;
        }
        gotoEventCat(l) {
          switch ((window.localStorage.setItem("path", l), l)) {
            case this.object.getConstants().PNL.SPORTS:
              this.router.navigate(["/sport"]),
                window.localStorage.removeItem("path");
              break;
            case this.object.getConstants().PNL.INDIAN_CASINO:
              this.router.navigate(["/casino"]),
                (this.object.activeWebLink = l),
                window.localStorage.removeItem("path");
              break;
            case this.object.getConstants().PNL.LIVECASINO:
              this.router.navigate(["/casino-games/live-casino"]),
                (this.object.activeWebLink = l);
              break;
            case this.object.getConstants().PNL.VIRTUALSPORT:
              this.router.navigate(["/casino-games/virtual-sports"]),
                (this.object.activeWebLink = l);
              break;
            case this.object.getConstants().PNL.SLOTGAME:
              this.router.navigate(["/casino-games/slot-games"]),
                (this.object.activeWebLink = l);
              break;
            case this.object.getConstants().PNL.SPECIALMARKET:
              this.router.navigate(["/special-market"]),
                (this.object.activeWebLink = l),
                window.localStorage.removeItem("path");
              break;
            case this.object.getConstants().PNL.BINGO:
              this.router.navigate(["/casino-games/bingo"]),
                (this.object.activeWebLink = l);
              break;
            case this.object.getConstants().PNL.FANTASY:
              this.router.navigate(["/fantasy-games"]),
                (this.object._mobileToggelMenu = !1);
              break;
            case this.object.getConstants().PNL.LIVECASINOSEO:
              this.router.navigate([
                "/casino-games/live-casino/evolutionGames",
              ]),
                (this.object.activeWebLink = l);
              break;
            case this.object.getConstants().PNL.SLG_SPORTSBOOK:
              this.object.getLoginInstance().getIsLogin()
                ? this.object.getDOMInstance().showModal("coinsliderSportBook")
                : (this.router.navigate(["/casino-games/sportsbook"]),
                  (this.object.activeWebLink = l));
          }
        }
        transfercoinToSportsGames(l, n) {
          this.object.getDOMInstance().hideModal("coinsliderSportBook"),
            this.object
              .getUtilInstance()
              .storeState(this.object.getConstants().STORAGE.COIN, l),
            this.gotoSportBook();
        }
        gotoSportBook() {
          window.open("/casino-games/sportsbook", "_self");
        }
        hidemodalSportBook() {
          this.object.getDOMInstance().hideModal("coinsliderSportBook");
        }
      }
      var _l = e.ob({
        encapsulation: 0,
        styles: [Il.a],
        data: {},
      });
      function ql(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              3,
              "option",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            e.pb(1, 147456, null, 0, a.s, [e.k, e.B, [8, null]], null, null),
            e.pb(2, 147456, null, 0, a.E, [e.k, e.B, [8, null]], null, null),
            (l()(), e.Kb(3, null, [" ", " "])),
          ],
          null,
          function (l, n) {
            l(n, 3, 0, n.context.$implicit.data.name);
          }
        );
      }
      function Pl(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              11,
              "div",
              [["class", "search"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              [
                [1, 0],
                ["search", 1],
              ],
              null,
              5,
              "input",
              [
                ["class", "accordion-search input-search-bg"],
                ["list", "searchChildNames"],
                ["placeholder", "Search by event name...."],
                ["type", "text"],
              ],
              [
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null],
              ],
              [
                [null, "change"],
                [null, "ngModelChange"],
                [null, "input"],
                [null, "blur"],
                [null, "compositionstart"],
                [null, "compositionend"],
              ],
              function (l, n, t) {
                var u = !0,
                  i = l.component;
                return (
                  "input" === n &&
                    (u = !1 !== e.Cb(l, 2)._handleInput(t.target.value) && u),
                  "blur" === n && (u = !1 !== e.Cb(l, 2).onTouched() && u),
                  "compositionstart" === n &&
                    (u = !1 !== e.Cb(l, 2)._compositionStart() && u),
                  "compositionend" === n &&
                    (u =
                      !1 !== e.Cb(l, 2)._compositionEnd(t.target.value) && u),
                  "change" === n && (u = !1 !== i.handleEventSearch(t) && u),
                  "ngModelChange" === n &&
                    (u = !1 !== (i.searchValue = t) && u),
                  u
                );
              },
              null,
              null
            )),
            e.pb(2, 16384, null, 0, a.d, [e.B, e.k, [2, a.a]], null, null),
            e.Hb(
              1024,
              null,
              a.m,
              function (l) {
                return [l];
              },
              [a.d]
            ),
            e.pb(
              4,
              671744,
              null,
              0,
              a.r,
              [
                [8, null],
                [8, null],
                [8, null],
                [6, a.m],
              ],
              {
                model: [0, "model"],
              },
              {
                update: "ngModelChange",
              }
            ),
            e.Hb(2048, null, a.n, null, [a.r]),
            e.pb(6, 16384, null, 0, a.o, [[4, a.n]], null, null),
            (l()(),
            e.qb(
              7,
              0,
              null,
              null,
              1,
              "span",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              8,
              0,
              null,
              null,
              0,
              "img",
              [["src", "assets/images/arrow-side.svg"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              9,
              0,
              null,
              null,
              2,
              "datalist",
              [["id", "searchChildNames"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, ql)),
            e.pb(
              11,
              278528,
              null,
              0,
              i.m,
              [e.N, e.J, e.q],
              {
                ngForOf: [0, "ngForOf"],
              },
              null
            ),
          ],
          function (l, n) {
            var t = n.component;
            l(n, 4, 0, t.searchValue), l(n, 11, 0, t.childMenu);
          },
          function (l, n) {
            l(
              n,
              1,
              0,
              e.Cb(n, 6).ngClassUntouched,
              e.Cb(n, 6).ngClassTouched,
              e.Cb(n, 6).ngClassPristine,
              e.Cb(n, 6).ngClassDirty,
              e.Cb(n, 6).ngClassValid,
              e.Cb(n, 6).ngClassInvalid,
              e.Cb(n, 6).ngClassPending
            );
          }
        );
      }
      function Ll(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              3,
              "h2",
              [["class", "pinbutton"]],
              null,
              [[null, "click"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "click" === n && (e = !1 !== l.component.goToPinned() && e), e
                );
              },
              null,
              null
            )),
            (l()(), e.Kb(1, null, [" ", " "])),
            e.Eb(131072, u.j, [u.k, e.h]),
            (l()(),
            e.qb(
              3,
              0,
              null,
              null,
              0,
              "img",
              [
                ["alt", "Icon"],
                ["class", "awwornv"],
                ["src", "assets/images/arrow-white.png"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
          ],
          null,
          function (l, n) {
            l(n, 1, 0, e.Lb(n, 1, 0, e.Cb(n, 2).transform("Pinned Items")));
          }
        );
      }
      function El(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              2,
              "h2",
              [["class", ""]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(1, null, [" ", " "])),
            e.Eb(131072, u.j, [u.k, e.h]),
          ],
          null,
          function (l, n) {
            l(n, 1, 0, e.Lb(n, 1, 0, e.Cb(n, 2).transform("MENU")));
          }
        );
      }
      function Tl(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              11,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              10,
              "div",
              [["class", "pinned accordion-border bottom cursr"]],
              null,
              [[null, "click"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "click" === n &&
                    (e =
                      !1 !==
                        l.component.gotoEventCat(
                          null == l.context.$implicit
                            ? null
                            : l.context.$implicit.gameType
                        ) && e),
                  e
                );
              },
              null,
              null
            )),
            e.Hb(512, null, i.A, i.B, [e.q, e.r, e.k, e.B]),
            e.pb(
              3,
              278528,
              null,
              0,
              i.l,
              [i.A],
              {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"],
              },
              null
            ),
            (l()(),
            e.qb(
              4,
              0,
              null,
              null,
              7,
              "h3",
              [["class", "base-c margin-3 "]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              5,
              0,
              null,
              null,
              6,
              "a",
              [["class", "base-c"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              6,
              0,
              null,
              null,
              4,
              "span",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              7,
              0,
              null,
              null,
              1,
              "app-svg",
              [["class", "iconmenu"]],
              null,
              null,
              null,
              c.b,
              c.a
            )),
            e.pb(
              8,
              114688,
              null,
              0,
              o.a,
              [],
              {
                type: [0, "type"],
              },
              null
            ),
            (l()(), e.Kb(9, null, [" ", " "])),
            e.Eb(131072, u.j, [u.k, e.h]),
            (l()(),
            e.qb(
              11,
              0,
              null,
              null,
              0,
              "img",
              [
                ["alt", "Icon"],
                ["class", "awwornv"],
                ["src", "assets/images/arrow-white.png"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
          ],
          function (l, n) {
            var t = n.component;
            l(
              n,
              3,
              0,
              "pinned accordion-border bottom cursr",
              ("Sport" == t.object.mobileRoute &&
                "SPORTS" ==
                  (null == n.context.$implicit
                    ? null
                    : n.context.$implicit.gameType)) ||
                ("SPECIALMARKET" ==
                  (null == n.context.$implicit
                    ? null
                    : n.context.$implicit.gameType) &&
                  t.object.specialMarket)
                ? "active"
                : ""
            ),
              l(
                n,
                8,
                0,
                (null == n.context.$implicit
                  ? null
                  : n.context.$implicit.gameType) + "-D2"
              );
          },
          function (l, n) {
            l(
              n,
              9,
              0,
              e.Lb(
                n,
                9,
                0,
                e
                  .Cb(n, 10)
                  .transform(
                    null == n.context.$implicit
                      ? null
                      : n.context.$implicit.name
                  )
              )
            );
          }
        );
      }
      function wl(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              2,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, Tl)),
            e.pb(
              2,
              278528,
              null,
              0,
              i.m,
              [e.N, e.J, e.q],
              {
                ngForOf: [0, "ngForOf"],
              },
              null
            ),
            (l()(), e.fb(0, null, null, 0)),
          ],
          function (l, n) {
            l(n, 2, 0, n.component.object.themeUXChange.sidemenu);
          },
          null
        );
      }
      function Nl(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              6,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              2,
              "h2",
              [["class", "matchetit"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(2, null, ["", ""])),
            e.Eb(131072, u.j, [u.k, e.h]),
            (l()(),
            e.qb(
              4,
              0,
              null,
              null,
              2,
              "div",
              [["class", "game-option"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              5,
              0,
              null,
              null,
              1,
              "app-menu-list",
              [],
              null,
              [[null, "transferMenuListClick"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "transferMenuListClick" === n &&
                    (e = !1 !== l.component.handleMenuClick(t) && e),
                  e
                );
              },
              ol,
              cl
            )),
            e.pb(
              6,
              114688,
              null,
              0,
              al,
              [],
              {
                menu: [0, "menu"],
              },
              {
                transferMenuListClick: "transferMenuListClick",
              }
            ),
          ],
          function (l, n) {
            l(n, 6, 0, n.component.menu);
          },
          function (l, n) {
            l(n, 2, 0, e.Lb(n, 2, 0, e.Cb(n, 3).transform("MATCHES")));
          }
        );
      }
      function jl(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              2,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, Nl)),
            e.pb(
              2,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(0, null, null, 0)),
          ],
          function (l, n) {
            l(n, 2, 0, "special-market" != n.component.checkMarketPage[3]);
          },
          null
        );
      }
      function Al(l) {
        return e.Mb(
          0,
          [
            e.Ib(671088640, 1, {
              nameField: 0,
            }),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              13,
              "div",
              [["class", "scroll-bar-wrap"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              2,
              0,
              null,
              null,
              12,
              "div",
              [
                [
                  "class",
                  "scroll-box accordian-menu accordian-menu-bg change-cr",
                ],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, Pl)),
            e.pb(
              4,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(),
            e.qb(
              5,
              0,
              null,
              null,
              9,
              "div",
              [["class", "mainheadingg"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, Ll)),
            e.pb(
              7,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(),
            e.qb(
              8,
              0,
              null,
              null,
              4,
              "div",
              [["class", "menubarss"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, El)),
            e.pb(
              10,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, wl)),
            e.pb(
              12,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, jl)),
            e.pb(
              14,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(),
            e.qb(
              15,
              0,
              null,
              null,
              1,
              "app-coming-soon",
              [],
              null,
              null,
              null,
              sl.b,
              sl.a
            )),
            e.pb(16, 114688, null, 0, rl.a, [m.a], null, null),
          ],
          function (l, n) {
            var t = n.component;
            l(
              n,
              4,
              0,
              t.object.isAdminLogin() && "market" == t.checkMarketPage[2]
            ),
              l(n, 7, 0, !t.object.isAdminLogin()),
              l(n, 10, 0, !t.object.isAdminLogin()),
              l(n, 12, 0, !t.object.isAdminLogin()),
              l(n, 14, 0, "special-market" != t.checkMarketPage[1]),
              l(n, 16, 0);
          },
          null
        );
      }
      t("Al8K"),
        t.d(n, "a", function () {
          return Bl;
        }),
        t.d(n, "b", function () {
          return Rl;
        });
      var Bl = e.ob({
        encapsulation: 2,
        styles: [],
        data: {},
      });
      function Dl(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              3,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              2,
              "app-d1-player-sidebar",
              [],
              null,
              [
                [null, "transferMenuListClick"],
                ["document", "click"],
                ["window", "scroll"],
              ],
              function (l, n, t) {
                var u = !0,
                  i = l.component;
                return (
                  "document:click" === n &&
                    (u = !1 !== e.Cb(l, 3).onClick(t.target) && u),
                  "window:scroll" === n &&
                    (u = !1 !== e.Cb(l, 3).onWindowScroll(t) && u),
                  "transferMenuListClick" === n &&
                    (u = !1 !== i.handleMenuListClick(t) && u),
                  u
                );
              },
              Ol,
              ml
            )),
            e.Hb(512, null, dl.a, dl.a, []),
            e.pb(
              3,
              114688,
              null,
              0,
              gl,
              [dl.a, m.a, h.a, e.k, d.p, e.k],
              {
                menu: [0, "menu"],
                childMenu: [1, "childMenu"],
                commonTabs: [2, "commonTabs"],
              },
              {
                transferMenuListClick: "transferMenuListClick",
              }
            ),
          ],
          function (l, n) {
            var t = n.component;
            l(n, 3, 0, t.menu, t.childMenu, t.commonTabs);
          },
          null
        );
      }
      function Kl(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              3,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              2,
              "app-d2-player-sidebar",
              [],
              null,
              null,
              null,
              Al,
              _l
            )),
            e.Hb(512, null, dl.a, dl.a, []),
            e.pb(
              3,
              114688,
              null,
              0,
              Sl,
              [dl.a, m.a, h.a, e.k, d.p],
              {
                menu: [0, "menu"],
                childMenu: [1, "childMenu"],
                commonTabs: [2, "commonTabs"],
              },
              null
            ),
          ],
          function (l, n) {
            var t = n.component;
            l(n, 3, 0, t.menu, t.childMenu, t.commonTabs);
          },
          null
        );
      }
      function Fl(l) {
        return e.Mb(
          0,
          [
            (l()(), e.fb(16777216, null, null, 1, null, Kl)),
            e.pb(
              1,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(0, null, null, 0)),
          ],
          function (l, n) {
            l(n, 1, 0, "D2" == n.component.object.themeChange.uxDesign);
          },
          null
        );
      }
      function Rl(l) {
        return e.Mb(
          0,
          [
            e.Ib(671088640, 1, {
              nameField: 0,
            }),
            (l()(), e.fb(16777216, null, null, 1, null, Dl)),
            e.pb(
              2,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
                ngIfElse: [1, "ngIfElse"],
              },
              null
            ),
            (l()(), e.fb(0, [["secondCond", 2]], null, 0, null, Fl)),
          ],
          function (l, n) {
            l(
              n,
              2,
              0,
              "D1" == n.component.object.themeChange.uxDesign,
              e.Cb(n, 3)
            );
          },
          null
        );
      }
    },
    "CVV/": function (l, n, t) {
      "use strict";
      t("c0u9"),
        t("qLdL"),
        t("sQWB"),
        t("QZd1"),
        t("KSOv"),
        t("fyXF"),
        t("m8nl");
    },
    Fke5: function (l, n, t) {
      "use strict";
      t.d(n, "a", function () {
        return e;
      });
      class e {
        transform(l, n) {
          if (isNaN(l) || null == l) return l || 0;
          let t,
            e = String(l);
          if (e.includes(".") && null != (t = e.split("."))[1].length) {
            let l,
              e = String(t[1]);
            return (
              (e = e.substring(0, 2)),
              (l =
                "noDeciaml" == n
                  ? parseFloat(t[0])
                  : parseFloat(t[0] + "." + e)),
              Math.abs(l)
            );
          }
          return (l = parseFloat(l)), Math.abs(l);
        }
      }
    },
    GlZp: function (l, n, t) {
      "use strict";
      t.d(n, "a", function () {
        return e;
      }),
        t("kyFz");
      class e {
        constructor(l) {
          this.object = l;
        }
        ngOnInit() {}
        ngOnDestroy() {}
      }
    },
    KSOv: function (l, n, t) {
      "use strict";
      t.d(n, "a", function () {
        return e;
      });
      class e {
        transform(l) {
          return (l = parseFloat(l)) > 0 ? l : "-";
        }
      }
    },
    fyXF: function (l, n, t) {
      "use strict";
      t.d(n, "a", function () {
        return u;
      });
      var e = t("SVse");
      class u {
        constructor() {
          (this.clearintervall = []), (this.timedate = []);
        }
        transform(l, n, t) {
          var u = new e.e("en-US");
          if ("inPlay" != t) {
            var i;
            this.setFixtimeForEvent(n);
            var a,
              c = new Date(n.timeRemaining),
              o = new Date(),
              s = new Date(o.getTime() - c.getTime()),
              r =
                (a = n.eventstartTime ? n.eventstartTime : s) -
                new Date().getTime(),
              p = Math.floor(r / 864e5),
              b = Math.floor((r % 864e5) / 36e5),
              d = Math.floor((r % 36e5) / 6e4);
            (i =
              b < 2 && 0 == p
                ? {
                    hours: b,
                    minutes: d,
                    comingSoon: !1,
                    countDownDate: !0,
                    matchtime: a.toString(),
                  }
                : {
                    hours: b,
                    minutes: d,
                    countDownDate: !1,
                    matchtime: a.toString(),
                  }),
              r < 0 &&
                (i = {
                  hours: 0,
                  minutes: 0,
                  seconds: 0,
                  countDownDate: !0,
                  comingSoon: !0,
                  matchtime: "",
                });
            return i.countDownDate
              ? i.comingSoon
                ? "About to start"
                : "Starts in " +
                  (i.hours > 0 ? i.hours + " hr " : " ") +
                  i.minutes +
                  " min"
              : "Starts at " + u.transform(i.matchtime, "HH:mm");
          }
        }
        setFixtimeForEvent(l) {
          let n,
            t = new Date(l.timeRemaining),
            e = new Date(),
            u = new Date(e.getTime() - t.getTime()),
            i = (n = u) - new Date().getTime();
          Math.floor(i / 864e5),
            Math.floor((i % 864e5) / 36e5),
            l.eventstartTime || (l.eventstartTime = u);
        }
      }
    },
    m7LY: function (l, n, t) {
      "use strict";
      t.d(n, "a", function () {
        return e;
      });
      class e {
        transform(l, n) {
          return isNaN(l) || null == l
            ? l
            : ((l = parseFloat(l)), Math.abs(Math.round(l)));
        }
      }
    },
    qLdL: function (l, n, t) {
      "use strict";
      t.d(n, "a", function () {
        return e;
      });
      class e {
        transform(l, n) {
          let t = n.data;
          return t && l
            ? 0 == t.length || 0 == l.length
              ? n.isPinned
                ? []
                : l
              : ((l[0].pinned = !1),
                -1 !== t.indexOf(l[0].marketId) ? ((l[0].pinned = !0), l) : l)
            : l;
        }
      }
    },
    sQWB: function (l, n, t) {
      "use strict";
      t.d(n, "a", function () {
        return e;
      });
      class e {
        transform(l, n) {
          return 0 == l.length
            ? l
            : l
            ? l.filter((l) => l.name.search(new RegExp(n, "i")) > -1)
            : [];
        }
      }
    },
    zZpC: function (l, n, t) {
      "use strict";
      var e = t("8Y7J"),
        u = t("TSSN"),
        i = t("SVse"),
        a = t("s7LF"),
        c = t("eAXX"),
        o = t("njhH");
      class s {
        constructor(l) {
          this._el = l;
        }
        onInputChange(l) {
          const n = l.which ? l.which : l.keyCode;
          return !(n > 31 && (n < 48 || n > 57));
        }
      }
      var r = t("866w"),
        p = t("igOe"),
        b = t("t544");
      class d {
        constructor(l) {
          this.sanitizer = l;
        }
        transform(l) {
          return this.sanitizer.bypassSecurityTrustResourceUrl(l);
        }
      }
      var g = t("cUpR"),
        m = t("xUL4"),
        h = t("Fke5"),
        f = t("c0u9"),
        x = t("m7LY"),
        C = t("01EG");
      class k extends C.a {
        constructor(l, n) {
          super(l, n),
            (this.service = l),
            (this.object = n),
            (this.betAPI = !1),
            (this.min = 1.01),
            (this.loaderWidth = 0),
            (this.max = 1e3),
            (this.minFancy = 0.25),
            (this.countMouseEvents = 0),
            (this.randomId = 0),
            (this.minMaxErr = []),
            (this.sameBetErr = []),
            (this.minStakeError = [!1]),
            (this.UnmatchedminStakeError = [!1]),
            (this.UnmatchedstakeUpdated = [!1]),
            (this.UnmatchedoddsUpdated = [!1]),
            (this.maxStakeError = [!1]),
            (this.isOddsEdited = [!1]),
            (this.isStakeEdited = [!1]),
            (this.minRunsErr = []),
            (this.streamLists = []),
            (this.templateObjList = []),
            (this.eventId = null),
            (this.currentEventId = null),
            (this.livePlaye = !1),
            (this.unmatchedPrevStake = []),
            (this.unmatchedPrevOdds = []),
            (this.betSlip = {
              betslipDataMatch: null,
              betslipDataUnMatch: null,
              playerSlipList: {
                unMatchedTicketsByEvents: [],
                matchedTicketsByEvents: [],
                userId: 0,
              },
              slipList: [],
              orgSlipList: [],
              savePoints: [],
              betPriceList: this.getStakes(),
            }),
            (this.acceptanyOdds = !1),
            (this.acceptanyOddsMO = !1),
            (this.acceptanyOddsFN = !1),
            (this.acceptanyOddsBM = !1),
            (this.acceptanyOdd = []),
            (this.customBetList = []),
            (this.betSlipList = []),
            (this.loadData = !1),
            (this.isStreamData = !0),
            (this.betSlipDummyArr = []),
            (this.customBetinputType = "button"),
            (this.saveStakesButton = "none"),
            (this.editStakesButton = "block"),
            (this.updatedBetslip = []),
            (this.key = "stake"),
            (this.customBet = []),
            (this.settingBtnDisplay = "none"),
            (this.flag = !0),
            (this.isValid = !1),
            (this.showRefDate = !1),
            (this.showUnmatchRefDate = !1),
            (this.showAverageOddsdata = !1),
            (this.editanyodd = !0),
            (this.anyOdds = !1),
            (this.catgeoryArray = [
              "Fancy_Market",
              "Fancy_Market1",
              "Bookmaker_Market",
              "Bookmaker_Market_1",
              "Meter_Market",
              "Khado_Market",
            ]),
            (this.eventTabs = "SPORTS"),
            (this.isdemoAcc = !1),
            (this.clickedStake = !1),
            (this.betFailstatus = !1),
            (this.openbetMobileAPI = !1);
        }
      }
      t("kyFz");
      var v = t("TStJ");
      class M extends k {
        constructor(l, n, t, e) {
          super(l, n),
            (this.service = l),
            (this.object = n),
            (this.broadCast = t),
            (this.firebase = e),
            this.attachListners(),
            this.init();
        }
        init() {
          this.generateRandomIdForPlaceButton(),
            this.disableinputforDemo(),
            -1 != navigator.userAgent.indexOf("Safari") &&
              -1 == navigator.userAgent.indexOf("Chrome") &&
              $("body").addClass("safari-mac");
        }
        getLocalIpAddress() {
          this.object.getLoginInstance().state.isPlayer &&
            "special-market" !=
              this.object.getRouterInstance().url.split("/")[1] &&
            "special-market" !=
              this.object.getRouterInstance().url.split("/")[3] &&
            this.service
              .getIPAddress(this.object.getURLInstance().IP_ADDRESS)
              .toPromise()
              .then((l) => {
                this.object.getUtilInstance().storeState("ipKey", l.ip);
              })
              .catch((l) => {});
        }
        generateRandomIdForPlaceButton() {
          setInterval(() => {
            this.randomId = Math.floor(999999999999 * Math.random());
          }, 3e3);
        }
        getCustomBet() {
          this.object.getLoginInstance().state.isUserLogin
            ? ((this.acceptanyOddsMO = !1),
              (this.acceptanyOddsBM = !1),
              (this.acceptanyOddsFN = !1),
              (this.customBetList = JSON.parse(localStorage.getItem("stake"))),
              (this.acceptanyOdds = JSON.parse(
                localStorage.getItem("acceptAnyOdds")
              )),
              (this.acceptanyOdd = JSON.parse(
                this.object.getUtilInstance().getStore("mktAccptAnyOdd")
              )),
              this.customBetList.map((l) => {
                l.val = l.val.replace("+", "");
              }),
              (this.betSlip.betPriceList = JSON.parse(
                localStorage.getItem("stake")
              )),
              this.acceptanyOdd.forEach((l) => {
                "MO" == l
                  ? (this.acceptanyOddsMO = !0)
                  : "BM" == l
                  ? (this.acceptanyOddsBM = !0)
                  : "FN" == l && (this.acceptanyOddsFN = !0);
              }),
              "Fancy_Market" == this.anyOddsFancyCargory ||
              "PP_Market" == this.anyOddsFancyCargory ||
              "Lucky_Num_Market" == this.anyOddsFancyCargory
                ? (this.anyOdds = this.acceptanyOddsFN)
                : "Bookmaker_Market" == this.anyOddsFancyCargory ||
                  "Bookmaker_Disc" == this.anyOddsFancyCargory
                ? (this.anyOdds = this.acceptanyOddsBM)
                : ("MATCH_ODDS" != this.anyOddsFancyCargory &&
                    "OTHER_MKTS" != this.anyOddsFancyCargory) ||
                  (this.anyOdds = this.acceptanyOddsMO))
            : (this.betSlip.betPriceList =
                this.object.getLoginInstance().state.stakes.frontend);
        }
        intervalSubscribe() {
          this.broadCast.allSubscription[
            this.object.getConstants().BROADCASTKEY.BETSLIP
          ] = this.unsubscribe = this.broadCast.intervallTimer.subscribe(() => {
            this.object.loginState.getIsLogin() ||
              ((this.betSlip.playerSlipList.unMatchedTicketsByEvents = []),
              (this.betSlip.playerSlipList.matchedTicketsByEvents = []));
          });
        }
        attachListners() {
          this.listenBetSlipEvents(),
            this.listFancyBetSlipEvent(),
            this.listancyBetSlipForMobile(),
            this.listMatchOddsBetSlipForMobile();
        }
        attachUnMatchedBet(l) {
          if (
            this.object.getLoginInstance().state.isPlayerAllow !==
            this.object.getConstants().STATUS.ACTIVE
          )
            return;
          let n = {
            match: {
              runnerName: l.eventName,
            },
            selectionId: l.selectionId,
            odds: l.odds,
            exchangeStake: l.exchangeStake,
            id: l.id,
            eventType: l.eventTypeId,
            eventId: l.eventId,
            marketId: l.marketId,
            sideType: l.sideType,
            marketType: l.marketType,
            isFancy: !1,
            oddsType: l.oddsType,
            runnersNo: l.runnersNo,
            runnerName: l.selectionName,
            fancyMarketCategory: l.fancyMarketCategory,
            minStake: l.minStake,
            maxStake: l.maxStake,
            action: this.object.getConstants().ACTIONS.EDIT,
          };
          setTimeout(() => {
            this.broadCast.broadcast(
              this.object.getConstants().BROADCASTKEY.BETSLIP,
              n
            );
          }, 200);
        }
        listFancyBetSlipEvent() {
          this.unsubscribeWebfancy = this.broadCast
            .on(this.object.getConstants().BROADCASTKEY.FANCYBETSLIP)
            .subscribe(
              (l) => {
                if (null != l) {
                  if (
                    0 ==
                    this.betSlip.slipList.filter(
                      (n) =>
                        n.selectionId === l.match.selectionId &&
                        n.sideType === l.sideType
                    ).length
                  )
                    (this.betSlip.slipList[0] = l),
                      setTimeout(() => {
                        document
                          .getElementById(
                            `bet-stake-${this.betSlip.slipList.length - 1}`
                          )
                          .select();
                      }, 400);
                  else {
                    let n = this.betSlip.slipList.findIndex(
                        (n) =>
                          n.selectionId === l.match.selectionId &&
                          n.sideType === l.sideType
                      ),
                      t = this.betSlip.slipList[n].exchangeStake;
                    (this.betSlip.slipList[n] = l),
                      this.betFailstatus &&
                        (this.betSlip.slipList[n].exchangeStake = t);
                  }
                  (this.anyOdds = JSON.parse(
                    localStorage.getItem("acceptAnyOdds")
                  )),
                    (this.anyOddsFancyCargory = l.fancyMarketCategory),
                    (this.betSlip.orgSlipList = this.object
                      .getUtilInstance()
                      .deepCopy(this.betSlip.slipList)),
                    this.getCustomBet(),
                    this.betSlipChange(),
                    document.getElementById("live-bet").scrollIntoView({
                      behavior: "smooth",
                    });
                } else
                  this.object.getLoginInstance().state.isPlayer &&
                    ((this.betSlip.slipList = []),
                    (this.betSlip.playerSlipList.matchedTicketsByEvents = []),
                    (this.betSlip.playerSlipList.unMatchedTicketsByEvents =
                      []));
              },
              (l) => {
                this.setError(l);
              }
            );
        }
        listenBetSlipEvents() {
          this.unsubscribeWebMatchodd = this.broadCast
            .on(this.object.getConstants().BROADCASTKEY.BETSLIP)
            .subscribe(
              (l) => {
                if (null == l)
                  return void (
                    this.object.getLoginInstance().state.isPlayer &&
                    ((this.betSlip.slipList = []),
                    (this.betSlip.playerSlipList.matchedTicketsByEvents = []),
                    (this.betSlip.playerSlipList.unMatchedTicketsByEvents = []))
                  );
                if (l.action == this.object.getConstants().ACTIONS.EDIT) {
                  if (
                    0 ==
                    this.betSlip.slipList.filter(
                      (n) =>
                        n.match.selectionId === l.match.selectionId &&
                        n.sideType === l.sideType
                    ).length
                  )
                    this.betSlip.slipList.push(l),
                      setTimeout(() => {
                        document
                          .getElementById(
                            `bet-stake-${this.betSlip.slipList.length - 1}`
                          )
                          .select();
                      }, 300);
                  else {
                    let n = this.betSlip.slipList.findIndex(
                      (n) =>
                        n.match.selectionId === l.match.selectionId &&
                        n.sideType === l.sideType
                    );
                    this.betSlip.slipList[n] = l;
                  }
                  this.betSlip.orgSlipList = this.object
                    .getUtilInstance()
                    .deepCopy(this.betSlip.slipList);
                } else {
                  if (
                    0 ==
                    this.betSlip.slipList.filter(
                      (n) =>
                        n.selectionId === l.match.selectionId &&
                        n.sideType === l.sideType
                    ).length
                  )
                    this.betSlip.slipList.push(l),
                      setTimeout(() => {
                        document
                          .getElementById(
                            `bet-stake-${this.betSlip.slipList.length - 1}`
                          )
                          .select();
                      }, 400);
                  else {
                    let n = this.betSlip.slipList.findIndex(
                        (n) =>
                          n.selectionId === l.match.selectionId &&
                          n.sideType === l.sideType
                      ),
                      t = this.betSlip.slipList[n].exchangeStake;
                    (this.betSlip.slipList[n] = l),
                      this.betFailstatus &&
                        (this.betSlip.slipList[n].exchangeStake = t);
                  }
                  this.betSlip.orgSlipList = this.object
                    .getUtilInstance()
                    .deepCopy(this.betSlip.slipList);
                }
                let n = this.betSlip.slipList.findIndex((n) =>
                  n.hasOwnProperty("match")
                    ? n.match.selectionId === l.match.selectionId &&
                      n.sideType === l.sideType
                    : n.selectionId === l.match.selectionId &&
                      n.sideType === l.sideType
                );
                (this.unmatchedPrevStake[n] = l.exchangeStake),
                  (this.unmatchedPrevOdds[n] = l.odds),
                  (this.anyOddsFancyCargory = l.fancyMarketCategory),
                  this.betSlipChange(),
                  this.getCustomBet(),
                  setTimeout(() => {
                    document.getElementById(`slip-${n}`).scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                  }, 100);
              },
              (l) => {
                this.setError(l);
              }
            );
        }
        listancyBetSlipForMobile() {
          this.unsubscribeMobilebetSlip = this.broadCast
            .on(this.object.getConstants().BROADCASTKEY.MOBILEFANCYBETSLIP)
            .subscribe(
              (l) => {
                if (null != l) {
                  if (
                    0 ==
                    this.betSlip.slipList.filter(
                      (n) =>
                        n.selectionId === l.match.selectionId &&
                        n.sideType === l.sideType
                    ).length
                  )
                    this.betSlip.slipList[0] = l;
                  else {
                    let n = this.betSlip.slipList.findIndex(
                        (n) =>
                          n.selectionId === l.match.selectionId &&
                          n.sideType === l.sideType
                      ),
                      t = this.betSlip.slipList[n].exchangeStake;
                    (this.betSlip.slipList[n] = l),
                      this.betFailstatus &&
                        (this.betSlip.slipList[n].exchangeStake = t);
                  }
                  (this.anyOdds = JSON.parse(
                    localStorage.getItem("acceptAnyOdds")
                  )),
                    (this.anyOddsFancyCargory = l.fancyMarketCategory),
                    (this.betSlip.orgSlipList = this.object
                      .getUtilInstance()
                      .deepCopy(this.betSlip.slipList)),
                    this.betSlipChange(),
                    this.getCustomBet();
                }
              },
              (l) => {
                this.setError(l);
              }
            );
        }
        listMatchOddsBetSlipForMobile() {
          this.unsubscribeBetfairBet = this.broadCast
            .on(this.object.getConstants().BROADCASTKEY.MOBILEBETSLIP)
            .subscribe(
              (l) => {
                if (null == l) return;
                if (
                  0 ==
                  this.betSlip.slipList.filter(
                    (n) =>
                      n.selectionId === l.match.selectionId &&
                      n.sideType === l.sideType
                  ).length
                )
                  this.betSlip.slipList[0] = l;
                else {
                  let n = this.betSlip.slipList.findIndex(
                      (n) =>
                        n.selectionId === l.match.selectionId &&
                        n.sideType === l.sideType
                    ),
                    t = this.betSlip.slipList[n].exchangeStake;
                  (this.betSlip.slipList[n] = l),
                    this.betFailstatus &&
                      (this.betSlip.slipList[n].exchangeStake = t);
                }
                this.betSlip.orgSlipList = this.object
                  .getUtilInstance()
                  .deepCopy(this.betSlip.slipList);
                let n = this.betSlip.slipList.findIndex((n) =>
                  n.hasOwnProperty("match")
                    ? n.match.selectionId === l.match.selectionId &&
                      n.sideType === l.sideType
                    : n.selectionId === l.match.selectionId &&
                      n.sideType === l.sideType
                );
                (this.unmatchedPrevStake[n] = l.exchangeStake),
                  (this.unmatchedPrevOdds[n] = l.odds),
                  (this.anyOddsFancyCargory = l.fancyMarketCategory),
                  this.betSlipChange(),
                  this.getCustomBet();
              },
              (l) => {
                this.setError(l);
              }
            );
        }
        handleRateCalc(l, n) {
          let t = 0;
          return (
            "dec" == n
              ? l >= this.min && l <= 2
                ? (t = 0.01)
                : l > 2 && l <= 3
                ? (t = 0.02)
                : l > 3 && l <= 4
                ? (t = 0.05)
                : l > 4 && l <= 6
                ? (t = 0.1)
                : l > 6 && l <= 10
                ? (t = 0.2)
                : l > 10 && l <= 20
                ? (t = 0.5)
                : l > 20 && l <= 30
                ? (t = 1)
                : l > 30 && l <= 50
                ? (t = 2)
                : l > 50 && l <= 100
                ? (t = 5)
                : l > 100 && l <= this.max && (t = 10)
              : l >= this.min && l < 2
              ? (t = 0.01)
              : l >= 2 && l < 3
              ? (t = 0.02)
              : l >= 3 && l < 4
              ? (t = 0.05)
              : l >= 4 && l < 6
              ? (t = 0.1)
              : l >= 6 && l < 10
              ? (t = 0.2)
              : l >= 10 && l < 20
              ? (t = 0.5)
              : l >= 20 && l < 30
              ? (t = 1)
              : l >= 30 && l < 50
              ? (t = 2)
              : l >= 50 && l < 100
              ? (t = 5)
              : l >= 100 && l <= this.max && (t = 10),
            t
          );
        }
        handleDecreaseRate(l, n) {
          if (l != this.min) {
            if (isNaN(l) || "" == l || l < this.min)
              return (
                (this.betSlip.slipList[n].odds = this.min),
                void this.betSlipChange()
              );
            (l = parseFloat(l)),
              (l = (l -= this.handleRateCalc(l, "dec")).toFixed(2)) > this.max
                ? (this.betSlip.slipList[n].odds = this.max)
                : ((this.betSlip.slipList[n].odds = l),
                  this.betSlipChange(),
                  (this.isStakeEdited[n] = !1));
          }
        }
        handleIncreaseRate(l, n) {
          if (isNaN(l) || "" == l || l < this.min)
            return (
              (this.betSlip.slipList[n].odds = this.min),
              void this.betSlipChange()
            );
          (l = parseFloat(l)),
            (l = (l += this.handleRateCalc(l, "inc")).toFixed(2)) > this.max
              ? (this.betSlip.slipList[n].odds = this.max)
              : ((this.betSlip.slipList[n].odds = l),
                this.betSlipChange(),
                (this.isStakeEdited[n] = !1));
        }
        setBetPrice(l, n) {
          this.UnmatchedoddsUpdated[n] ||
            ((this.betSlip.slipList[n].exchangeStake =
              0 == l || null == l
                ? 0
                : parseFloat(this.betSlip.slipList[n].exchangeStake) + l),
            (this.betSlip.orgSlipList = this.object
              .getUtilInstance()
              .deepCopy(this.betSlip.slipList)),
            this.betSlipChange());
        }
        handleCancelBet(l) {
          this.betSlip.slipList.splice(l, 1),
            (this.betSlip.orgSlipList = this.object
              .getUtilInstance()
              .deepCopy(this.betSlip.slipList)),
            this.broadCast.broadcast(
              this.object.getConstants().BETLIST.UPDATEEXPOSURE,
              {
                value: !0,
              }
            ),
            this.betSlipChange(),
            (this.scrollpaddig = document.getElementsByClassName(
              "container-livescore"
            )[0]),
            (this.scroll = document.getElementsByClassName(
              "main-container-homepage-mobile"
            )[0]),
            this.scrollpaddig &&
              this.scrollpaddig.classList.add("casinodetail"),
            this.scroll &&
              (this.scroll.classList.remove("margbottomn"),
              this.scroll.classList.add("paddingbtm"),
              this.scroll.classList.remove("margbottomnevnt"));
          var n = document.getElementsByClassName("in-play-container")[0];
          n &&
            (n.classList.remove("margbottomn"), n.classList.add("paddingbtm"));
        }
        savePlaceBetWeb(l, n, t) {
          0 != t.isTrusted &&
            (t.isTrusted && this.countMouseEvents <= 5
              ? this.object.anonymousUser()
              : this.savePlaceBet(l, n, t));
        }
        savePlaceBet(l, n, t) {
          var e;
          l.exchangeStake <= 0 || l.odds < this.min
            ? this.object
                .getDOMInstance()
                .error("Stake value should not be zero")
            : this.minMaxErr[n] ||
              (this.object.getLoginInstance().state.isPlayerAllow !=
                this.object.getConstants().STATUS.SUSPENDED &&
                ((this.betAPI = !0),
                (this.object.betAPI = !0),
                (this.loaderWidth = 25),
                delete l.match,
                (l.acceptAnyOdd = this.anyOdds),
                (l = [l]),
                (e = this.object.getURLInstance().placeBet),
                this.service
                  .post(e, l, this.headers())
                  .toPromise()
                  .then(
                    (l) => {
                      this.handleCancelBet(n),
                        this.getPlayerBetList(),
                        (this.betAPI = !1),
                        (this.object.betAPI = !1),
                        (this.loaderWidth = 0),
                        this.broadCast.broadcast(
                          this.object.getConstants().BROADCASTKEY
                            .ACCOUNTDETAILS,
                          {}
                        ),
                        this.broadCast.broadcast(
                          this.object.getConstants().BROADCASTKEY
                            .PLAYEREVENTDETAIL,
                          {}
                        ),
                        this.broadCast.broadcast(
                          this.object.getConstants().BROADCASTKEY.GETPLAYERINFO,
                          {
                            value: !0,
                          }
                        ),
                        l.data.orderResponse.includes("Unmatched")
                          ? this.object
                              .getDOMInstance()
                              .warning(l.data.orderResponse)
                          : this.object
                              .getDOMInstance()
                              .successDynamic(l.data.orderResponse),
                        this.checkForStream(),
                        (this.betFailstatus = !1);
                    },
                    (n) => {
                      (this.betAPI = !1),
                        (this.object.betAPI = !1),
                        (this.loaderWidth = 0);
                      var t = "Bet not Accepted";
                      let e;
                      422 == (e = JSON.parse(n._body)).code &&
                      e.hasOwnProperty("error")
                        ? e.error.forEach((l) => {
                            t = l.message;
                          })
                        : (t = e.message);
                      var u = l[0];
                      if ("MATCH_ODDS" == u.fancyMarketCategory) {
                        var i =
                          ("0" == u.sideType ? "Back " : "Lay ") +
                          u.runnerName +
                          " " +
                          u.exchangeStake +
                          " at odds " +
                          u.odds;
                        this.object
                          .getDOMInstance()
                          .errorDynamic("<strong>" + t + "</strong>" + i);
                      } else this.setError(n);
                      this.betFailstatus = !0;
                    }
                  )));
        }
        handleFancyBetPlaceWeb(l, n, t) {
          0 != t.isTrusted &&
            (t.isTrusted && this.countMouseEvents <= 5
              ? this.object.anonymousUser()
              : this.handleFancyBetPlace(l, n, t));
        }
        handleFancyBetPlace(l, n, t) {
          l.exchangeStake <= 0
            ? this.object
                .getDOMInstance()
                .error("Stake value should not be zero")
            : this.minMaxErr[n] ||
              (delete l.match,
              (l.acceptAnyOdd = this.anyOdds),
              (l = [l]),
              (this.betAPI = !0),
              (this.loaderWidth = 25),
              (this.object.betAPI = !0),
              this.service
                .post(
                  this.object.getURLInstance().placeFancyBet,
                  l,
                  this.headers()
                )
                .toPromise()
                .then(
                  (l) => {
                    (this.betAPI = !1),
                      (this.loaderWidth = 0),
                      (this.object.betAPI = !1),
                      this.handleCancelBet(n),
                      this.getPlayerBetList(),
                      this.broadCast.broadcast(
                        this.object.getConstants().BROADCASTKEY.ONLYFANCY,
                        l
                      ),
                      this.broadCast.broadcast(
                        this.object.getConstants().BROADCASTKEY.SUBSCRIBEAGAIN,
                        {
                          sub: !0,
                        }
                      ),
                      this.broadCast.broadcast(
                        this.object.getConstants().BROADCASTKEY.GETPLAYERINFO,
                        {
                          value: !0,
                        }
                      ),
                      this.object
                        .getUtilInstance()
                        .storeState(
                          this.object.getConstants().STORAGE
                            .NewtabHeaderRefresh,
                          "true"
                        ),
                      this.object
                        .getDOMInstance()
                        .success(l.data.orderResponse),
                      this.checkForStream(),
                      (this.betFailstatus = !1);
                  },
                  (l) => {
                    (this.betAPI = !1),
                      (this.object.betAPI = !1),
                      (this.loaderWidth = 0),
                      (this.betFailstatus = !0),
                      this.setError(l);
                  }
                ));
        }
        checkForStream() {
          let l = this.object.palyerSelfInfo,
            n = this.object.getRouterInstance().url.split("/");
          this.currentEventId = n[3];
          let t = JSON.parse(this.object.getUtilInstance().getStore("recents")),
            e = t.findIndex((l) => l.eventId == this.currentEventId);
          e < 0 ||
            l.currency != this.object.getConstants().CURRENCY.CI ||
            ((t[e].title = t[e].eventName),
            this.object
              .getUtilInstance()
              .storeState("recents", JSON.stringify(t)),
            (this.object.isEventHaveBetForStream = !0));
        }
        updatePlaceBet(l, n) {
          l.exchangeStake <= 0
            ? this.object
                .getDOMInstance()
                .error("Stake value should not be zero")
            : this.object.getLoginInstance().state.isPlayerAllow !=
                this.object.getConstants().STATUS.SUSPENDED &&
              (this.minMaxErr[n] ||
                ((this.betAPI = !0),
                (this.object.betAPI = !0),
                (this.loaderWidth = 25),
                delete l.match,
                (l.acceptAnyOdd = !1),
                (l = [l]),
                this.service
                  .post(
                    this.object.getURLInstance().updateBet,
                    l,
                    this.headers()
                  )
                  .toPromise()
                  .then(
                    (l) => {
                      this.handleCancelBet(n),
                        this.getPlayerBetList(),
                        (this.betAPI = !1),
                        (this.loaderWidth = 0),
                        (this.object.betAPI = !1),
                        this.broadCast.broadcast(
                          this.object.getConstants().BROADCASTKEY
                            .ACCOUNTDETAILS,
                          {}
                        ),
                        this.broadCast.broadcast(
                          this.object.getConstants().BROADCASTKEY
                            .PLAYEREVENTDETAIL,
                          {}
                        ),
                        this.broadCast.broadcast(
                          this.object.getConstants().BROADCASTKEY.GETPLAYERINFO,
                          {
                            value: !0,
                          }
                        ),
                        l.data.orderResponse.includes("Unmatched")
                          ? this.object
                              .getDOMInstance()
                              .warning(l.data.orderResponse)
                          : this.object
                              .getDOMInstance()
                              .success(l.data.orderResponse);
                    },
                    (l) => {
                      (this.betAPI = !1),
                        (this.object.betAPI = !1),
                        (this.loaderWidth = 0),
                        this.setError(l);
                    }
                  )));
        }
        cancelBet(l) {
          if (l.length) {
            var n = [];
            l.forEach((t) => {
              t.marketDetails.forEach((t) => {
                t.marketOrderDetails.forEach((t) => {
                  delete t.match, n.push(t), (l = n);
                });
              });
            });
          } else delete l.match, (l = [l]);
          (this.betAPI = !0),
            (this.loaderWidth = 25),
            this.object.getLoginInstance().state.isPlayerAllow !=
              this.object.getConstants().STATUS.SUSPENDED &&
              this.service
                .post(this.object.getURLInstance().cancelBet, l, this.headers())
                .toPromise()
                .then(
                  (l) => {
                    this.broadCast.broadcast(
                      this.object.getConstants().BETLIST.UPDATEEXPOSURE,
                      {
                        value: !0,
                      }
                    ),
                      this.broadCast.broadcast(
                        this.object.getConstants().BROADCASTKEY.GETPLAYERINFO,
                        {
                          value: !0,
                        }
                      ),
                      (this.betAPI = !1),
                      (this.loaderWidth = 0),
                      this.getPlayerBetList(),
                      this.broadCast.broadcast(
                        this.object.getConstants().BROADCASTKEY.ACCOUNTDETAILS,
                        {}
                      );
                  },
                  (l) => {
                    (this.betAPI = !1),
                      (this.loaderWidth = 0),
                      this.setError(l);
                  }
                );
        }
        getPlayerBetList() {
          let l;
          this.selectdMatchBetListId = "";
          let n = JSON.parse(
            this.object
              .getUtilInstance()
              .getStore(this.object.getConstants().STORAGE.plateform)
          );
          null !=
            this.object
              .getUtilInstance()
              .getStore(this.object.getConstants().STORAGE.token) &&
            ((this.eventTabs = l =
              this.object.specialMarket ? n.specialMarket : "SPORTS"),
            (this.settingBtnDisplay = "block"),
            (this.openbetMobileAPI = !0),
            this.service
              .get(
                this.object.getURLInstance().getPlayerBetList,
                this.object.getConstants().PARAMSID.gameType + l,
                this.headers()
              )
              .toPromise()
              .then(
                (l) => {
                  (this.openbetMobileAPI = !1),
                    (this.betSlip.playerSlipList = l.data.playerBetList),
                    this.getBetListFilterData(),
                    (this.object.betlistId.matchId = []);
                  var n = 0;
                  this.betSlip.playerSlipList.matchedTicketsByEvents.forEach(
                    (l) => {
                      l.marketDetails.forEach((l) => {
                        this.object.betlistId.matchId.push(l.marketId),
                          (n += l.marketOrderDetails.length);
                      });
                    }
                  ),
                    (this.object.totalBet = n),
                    this.object.specialMarket ||
                      this.betSlip.playerSlipList.unMatchedTicketsByEvents.forEach(
                        (l) => {
                          l.marketDetails.forEach((l) => {
                            this.object.betlistId.matchId.push(l.marketId);
                          });
                        }
                      );
                },
                (l) => {
                  (this.openbetMobileAPI = !1),
                    401 == l.status &&
                      this.object
                        .getDOMInstance()
                        .hideModal(
                          this.object.getDOMInstance().modal.mobileplayerBetView
                        ),
                    (this.object.getLoginInstance().state.exposureExist = !1),
                    this.setError(l);
                }
              ));
        }
        getSpecialMarketBetList() {
          let l;
          (this.selectdMatchBetListId = ""),
            (this.betslipUnMatchTicketsData = []);
          let n = JSON.parse(
            this.object
              .getUtilInstance()
              .getStore(this.object.getConstants().STORAGE.plateform)
          );
          null !=
            this.object
              .getUtilInstance()
              .getStore(this.object.getConstants().STORAGE.token) &&
            ((this.eventTabs = l = n.specialMarket),
            (this.settingBtnDisplay = "block"),
            (this.openbetMobileAPI = !0),
            this.service
              .get(
                this.object.getURLInstance().getPlayerBetList,
                this.object.getConstants().PARAMSID.gameType + l,
                this.headers()
              )
              .toPromise()
              .then(
                (l) => {
                  (this.openbetMobileAPI = !1),
                    (this.betSlip.playerSlipList = l.data.playerBetList),
                    this.getBetListFilterData();
                },
                (l) => {
                  (this.openbetMobileAPI = !1),
                    (this.object.getLoginInstance().state.exposureExist = !1),
                    this.setError(l);
                }
              ));
        }
        getCasinoBetList() {
          if (
            ((this.selectdMatchBetListId = ""),
            (this.betslipUnMatchTicketsData = []),
            0 == this.object.getLoginInstance().state.isPlayer)
          )
            return;
          let l,
            n = JSON.parse(
              this.object
                .getUtilInstance()
                .getStore(this.object.getConstants().STORAGE.plateform)
            );
          n.casino == this.object.getConstants().PNL.INDIAN_CASINO &&
            (l = n.casino),
            (this.eventTabs = l),
            (this.settingBtnDisplay = "block"),
            (this.openbetMobileAPI = !0),
            this.service
              .get(
                this.object.getURLInstance().getPlayerBetList,
                this.object.getConstants().PARAMSID.gameType + l,
                this.headers()
              )
              .toPromise()
              .then(
                (l) => {
                  (this.openbetMobileAPI = !1),
                    (this.betSlip.playerSlipList = l.data.playerBetList),
                    (this.object.betlistId.matchId = []),
                    this.betSlip.playerSlipList.matchedTicketsByEvents.forEach(
                      (l) => {
                        l.marketDetails.forEach((l) => {
                          this.object.betlistId.matchId.push(l.marketId);
                        });
                      }
                    ),
                    this.getBetListFilterData();
                },
                (l) => {
                  (this.openbetMobileAPI = !1),
                    (this.object.getLoginInstance().state.exposureExist = !1),
                    this.setError(l);
                }
              );
        }
        betSlipChange() {
          this.betSlip.slipList.forEach((l, n) => {
            (this.minMaxErr[n] = !1),
              (this.sameBetErr[n] = !1),
              (this.maxStakeError[n] = !1),
              (this.minStakeError[n] = !1),
              (this.minRunsErr[n] = !1),
              (this.UnmatchedminStakeError[n] = !1),
              (this.UnmatchedstakeUpdated[n] = !1),
              (this.UnmatchedoddsUpdated[n] = !1);
            let t = 0;
            if (
              ((isNaN(l.odds) || "" == l.odds) &&
                ((this.minMaxErr[n] = !0), (l.odds = 0)),
              l.runs < 0 && (this.minRunsErr[n] = !0),
              "Khado_Market" == l.fancyMarketCategory &&
                (l.khado =
                  isNaN(l.runs) || !l.runs
                    ? l.backRuns
                    : parseFloat(l.runs) + parseFloat(l.backRuns)),
              (l.odds < this.min || l.odds > 1e3) &&
                "Khado_Market" != l.fancyMarketCategory &&
                (this.minMaxErr[n] = !0),
              Number(l.odds) >= this.minFancy &&
                l.isFancy &&
                "Khado_Market" != l.fancyMarketCategory &&
                (this.minMaxErr[n] = !1),
              (isNaN(l.exchangeStake) ||
                "" == l.exchangeStake ||
                null == l.exchangeStake) &&
                (l.exchangeStake = 0),
              l.exchangeStake < l.minStake)
            ) {
              if ("" == l.exchangeStake) return;
              (this.minStakeError[n] = !0), (this.maxStakeError[n] = !1);
            }
            if (l.exchangeStake > l.maxStake) {
              if ("" == l.exchangeStake) return;
              (this.maxStakeError[n] = !0), (this.minStakeError[n] = !1);
            }
            this.betSlip.orgSlipList[n].odds == l.odds &&
              this.unmatchedPrevStake[n] == l.exchangeStake &&
              l.action == this.object.getConstants().ACTIONS.EDIT &&
              (this.sameBetErr[n] = !0),
              this.unmatchedPrevStake[n] > l.exchangeStake &&
                l.action == this.object.getConstants().ACTIONS.EDIT &&
                (this.UnmatchedminStakeError[n] = !0),
              this.unmatchedPrevStake[n] != l.exchangeStake &&
                l.action == this.object.getConstants().ACTIONS.EDIT &&
                (this.UnmatchedstakeUpdated[n] = !0),
              this.unmatchedPrevOdds[n] != l.odds &&
                l.action == this.object.getConstants().ACTIONS.EDIT &&
                (this.UnmatchedoddsUpdated[n] = !0),
              this.betSlip.orgSlipList[n].odds != l.odds &&
                l.action == this.object.getConstants().ACTIONS.EDIT &&
                (t += 1),
              this.betSlip.orgSlipList[n].exchangeStake != l.exchangeStake &&
                l.action == this.object.getConstants().ACTIONS.EDIT &&
                (t += 1),
              2 == t && (this.sameBetErr[n] = !0);
          }),
            this.broadCast.broadcast(
              this.object.getConstants().BROADCASTKEY.BETSLIPLIST,
              this.betSlip.slipList
            ),
            this.broadCast.broadcast(
              this.object.getConstants().BROADCASTKEY.CASINOBETSLIP,
              this.betSlip.slipList
            );
        }
        appDestroyed() {}
        attachMutation() {
          (this.broadCast.mutation = new MutationObserver((l) => {
            l.forEach((l) => {});
          })),
            this.broadCast.mutation.observe(document.documentElement, {
              attributes: !0,
              characterData: !0,
              childList: !0,
              subtree: !0,
              attributeOldValue: !0,
              characterDataOldValue: !0,
            });
        }
        isEditOdds(l, n, t) {
          this.isStakeEdited[t] =
            l.action == this.object.getConstants().ACTIONS.EDIT &&
            8 == n.keyCode;
        }
        isStakeEdit(l, n, t) {
          this.isOddsEdited[t] =
            l.action == this.object.getConstants().ACTIONS.EDIT &&
            8 == n.keyCode;
        }
        handleEventSearchMatch(l) {
          (this.selectdMatchBetListId = l.target.value),
            this.getBetListFilterData(),
            this.storeMatchMrketFilter();
        }
        handleEventSearchUnMatch(l) {
          (this.selectUnMatchBetListId = l.target.value),
            this.getBetListFilterData(),
            this.storeMatchMrketFilter();
        }
        getBetListFilterData() {
          if (
            null != this.betSlip.playerSlipList.unMatchedTicketsByEvents &&
            this.betSlip.playerSlipList.unMatchedTicketsByEvents.length > 0
          )
            if (this.selectUnMatchBetListId) {
              let l =
                this.betSlip.playerSlipList.unMatchedTicketsByEvents.filter(
                  (l) => l.eventId == this.selectUnMatchBetListId
                );
              (this.betslipUnMatchTicketsData = l),
                (this.unMatchBetListEventName =
                  this.betSlip.playerSlipList.unMatchedTicketsByEvents);
            } else
              (this.betslipUnMatchTicketsData =
                this.betSlip.playerSlipList.unMatchedTicketsByEvents),
                (this.unMatchBetListEventName =
                  this.betSlip.playerSlipList.unMatchedTicketsByEvents);
          if (this.selectdMatchBetListId) {
            let l = this.betSlip.playerSlipList.matchedTicketsByEvents.filter(
              (l) => l.eventId == this.selectdMatchBetListId
            );
            (this.betslipMatchTicketsData = l),
              (this.matchBetListEventName =
                this.betSlip.playerSlipList.matchedTicketsByEvents);
          } else
            (this.betslipMatchTicketsData =
              this.betSlip.playerSlipList.matchedTicketsByEvents),
              (this.matchBetListEventName =
                this.betSlip.playerSlipList.matchedTicketsByEvents);
          this.showAverageOddsdata && this.showAverageOdds(!0);
        }
        openpopUp(l) {
          (this.clickedStake =
            "true" === localStorage.getItem("showRoundOffStake")),
            this.object
              .getDOMInstance()
              .closeProfileMenu("arrow_box", "active-box"),
            l.stopPropagation(),
            0 == this.object.customStakepopUp
              ? ((this.object.customStakepopUp = !0),
                this.getCustomBet(),
                (this.betSlip.slipList = []),
                setTimeout(() => {}, 200))
              : ((this.object.customStakepopUp = !1),
                (this.customBetinputType = "button"),
                (this.editStakesButton = "block"),
                (this.saveStakesButton = "none"),
                (this.editanyodd = !0));
        }
        getEventStraming(l) {
          this.unsubscribeStreamlive = this.firebase
            .getEventToStreamData(l)
            .subscribe((l) => {
              l &&
                (l.url &&
                  ((this.object.shwoScoreCard = !0),
                  setTimeout(() => {
                    this.object
                      .getDOMInstance()
                      .getScoreSportRadar(Number(l.url), l.score2);
                  }, 1e3)),
                "demo1" != this.object.getLoginInstance().state.userName &&
                  "demo2" != this.object.getLoginInstance().state.userName &&
                  "demo3" != this.object.getLoginInstance().state.userName &&
                  0 != this.object.getLoginInstance().state.isPlayer &&
                  (this.object.specialMarket ||
                    (null != l && l.streamName && "CLOSED" != l.status
                      ? l.streamName &&
                        setTimeout(() => {
                          let n = this.object
                              .getUtilInstance()
                              .getStore("ipKey"),
                            t = `chid=${l.streamName}&ip=${n}`;
                          (this.videoUrlLink =
                            this.object.getURLInstance().lotusStreamUrl + t),
                            (this.object.showLiveTvButton = !0);
                        }, 3e3)
                      : (this.object.showLiveTvButton = !1))));
            });
        }
        click(l) {
          this.object.customStakepopUp = !1;
        }
        editBet() {
          (this.editanyodd = !1),
            (this.customBetinputType = "text"),
            (this.editStakesButton = "none"),
            (this.saveStakesButton = "block"),
            this.searchElement.nativeElement.focus();
        }
        keyPress(l) {
          (l.target.value = l.target.value.replace(/[^0-9\d]/gi, "")),
            (this.regex = new RegExp(/^(?!(0))[0-9]{1,}$/));
          let n = String(l.target.value);
          if (
            (l.target.value < 1
              ? this.object
                  .getDOMInstance()
                  .error("value must maximum or equal to 1")
              : l.target.value > 1e7 &&
                this.object
                  .getDOMInstance()
                  .error("value must be minimum 10000000"),
            (this.isValid = !1),
            !(n.match(this.regex) && l.target.value <= 1e7))
          )
            return (
              (this.isValid = !0),
              (l.target.style.color = "red"),
              (this.flag = !1),
              !1
            );
          (this.isValid = !1),
            (this.flag = !0),
            (l.target.style.color = "inherit");
        }
        acceptAnyOddsClick(l, n) {
          "MO" == n
            ? (this.acceptanyOddsMO = l)
            : "BM" == n
            ? (this.acceptanyOddsBM = l)
            : "FN" == n && (this.acceptanyOddsFN = l),
            (this.acceptanyOdd = [
              this.acceptanyOddsMO ? "MO" : "",
              this.acceptanyOddsBM ? "BM" : "",
              this.acceptanyOddsFN ? "FN" : "",
            ]);
          let t = this.acceptanyOdd.filter((l) => "" != l);
          (this.acceptanyOdd = t),
            this.acceptanyOdd.length < 1 && (this.acceptanyOdd = ["none"]),
            (this.acceptanyOdds = l);
        }
        saveEditStakes() {
          this.customBetList.map((l) => {
            (null != l.val && "" != l.val) ||
              ((l.val = l.price), (this.flag = !0));
          }),
            1 == this.flag &&
              (this.customBetList.map((l) => {
                (l.val = l.val.replace("+", "")),
                  l.val.includes("+") || (l.val = "+".concat(l.val));
              }),
              (this.object.getLoginInstance().state.stakes.frontend =
                this.betSlip.betPriceList),
              (this.betSlip.betPriceList = this.customBetList),
              (this.object.getLoginInstance().state.stakes.frontend =
                this.betSlip.betPriceList),
              (this.object.getLoginInstance().state.acceptAnyOdds =
                this.acceptanyOdds),
              (this.object.getLoginInstance().state.acceptAnyOdd =
                this.acceptanyOdd),
              this.updateUserProfileSetting(),
              (this.customBetinputType = "button"),
              (this.editStakesButton = "block"),
              (this.saveStakesButton = "none"),
              (this.object.customStakepopUp = !1),
              this.broadCast.broadcast(
                this.object.getConstants().BROADCASTKEY.STAKEUPDATE,
                !0
              )),
            (this.editanyodd = !0);
        }
        cancleEditStake() {
          this.object.customStakepopUp = !1;
        }
        showRefNo(l) {
          (this.showRefDate = l.target.checked), this.storeMatchMrketFilter();
        }
        showUnmatchRefNo(l) {
          (this.showUnmatchRefDate = l.target.checked),
            this.storeMatchMrketFilter();
        }
        storeMatchMrketFilter() {
          (this.storeFilterObj = {
            matchMarket: {
              matchMrkt: this.showRefDate,
              matchFilter: this.selectdMatchBetListId,
              matchAvgodd: this.showAverageOddsdata,
            },
            unMatchMarket: {
              unMatchMrkt: this.showUnmatchRefDate,
              unMatchFilter: this.selectUnMatchBetListId,
            },
          }),
            this.object
              .getUtilInstance()
              .storeState(
                this.object.getConstants().STORAGE.showFilterDetails,
                JSON.stringify(this.storeFilterObj)
              );
        }
        showAverageOdds(l) {
          (this.showAverageOddsdata = l),
            this.storeMatchMrketFilter(),
            (this.matchAvrageOdds = this.betslipMatchTicketsData),
            this.showAverageOddsdata &&
              this.matchAvrageOdds.map((l) => {
                l.marketDetails.map((l) => {
                  let n = l.marketOrderDetails.filter(
                      (l) => 0 == l.sideType || 2 == l.sideType
                    ),
                    t = l.marketOrderDetails.filter(
                      (l) => 3 == l.sideType || 1 == l.sideType
                    );
                  var e = {};
                  n.forEach(function (l) {
                    (l.length = 1),
                      (l.totalodds = l.odds),
                      (l.totalexchangeStack = l.exchangeStake),
                      (l.totalPL =
                        "Meter_Market" == l.fancyMarketCategory
                          ? l.runs * l.exchangeStake
                          : "AM" == l.oddType
                          ? (l.odds / 100) * l.exchangeStake
                          : l.exchangeStake * (l.odds - 1)),
                      (l.averageOdds = l.odds);
                    var n = l.selectionId;
                    e.hasOwnProperty(n)
                      ? ((e[n].length += l.length),
                        (e[n].totalodds += l.odds),
                        (e[n].totalexchangeStack += l.exchangeStake),
                        (e[n].averageOdds = (
                          e[n].totalodds / e[n].length
                        ).toFixed(2)),
                        (e[n].totalPL +=
                          "Meter_Market" == l.fancyMarketCategory
                            ? l.runs * l.exchangeStake
                            : "AM" == l.oddType
                            ? (l.odds / 100) * l.exchangeStake
                            : l.exchangeStake * (l.odds - 1)))
                      : (e[n] = l);
                  });
                  var u = Object.keys(e).map(function (l) {
                      return e[l];
                    }),
                    i = {};
                  t.forEach(function (l) {
                    (l.length = 1),
                      (l.totalodds = l.odds),
                      (l.totalexchangeStack = l.exchangeStake),
                      (l.totalPL = l.exposure),
                      (l.averageOdds = l.odds);
                    var n = l.selectionId;
                    i.hasOwnProperty(n)
                      ? ((i[n].length += l.length),
                        (i[n].totalodds += l.odds),
                        (i[n].totalexchangeStack += l.exchangeStake),
                        (i[n].totalPL += l.exposure),
                        (i[n].averageOdds = (
                          i[n].totalodds / i[n].length
                        ).toFixed(2)))
                      : (i[n] = l);
                  });
                  var a = Object.keys(i).map(function (l) {
                    return i[l];
                  });
                  (l.datalay = a), (l.databack = u);
                });
              });
        }
        showUnmatchAverageOdds(l) {
          (this.showUnmatchAverageOddsdata = l),
            this.storeMatchMrketFilter(),
            (this.unmatchAvrageOdds = this.betslipUnMatchTicketsData),
            this.showUnmatchAverageOddsdata &&
              this.unmatchAvrageOdds.map((l) => {
                l.marketDetails.map((l) => {
                  let n = l.marketOrderDetails.filter(
                      (l) => 0 == l.sideType || 2 == l.sideType
                    ),
                    t = l.marketOrderDetails.filter(
                      (l) => 3 == l.sideType || 1 == l.sideType
                    );
                  var e = {};
                  n.forEach(function (l) {
                    (l.length = 1),
                      (l.totalodds = l.odds),
                      (l.totalexchangeStack = l.exchangeStake),
                      (l.totalPL =
                        "AM" == l.oddType
                          ? (l.odds / 100) * l.exchangeStake
                          : l.exchangeStake * (l.odds - 1)),
                      (l.averageOdds = l.odds);
                    var n = l.selectionId;
                    e.hasOwnProperty(n)
                      ? ((e[n].length += l.length),
                        (e[n].totalodds += l.odds),
                        (e[n].totalexchangeStack += l.exchangeStake),
                        (e[n].totalPL +=
                          "AM" == l.oddType
                            ? (l.odds / 100) * l.exchangeStake
                            : l.exchangeStake * (l.odds - 1)),
                        (e[n].averageOdds = (
                          e[n].totalodds / e[n].length
                        ).toFixed(2)))
                      : (e[n] = l);
                  });
                  var u = Object.keys(e).map(function (l) {
                      return e[l];
                    }),
                    i = {};
                  t.forEach(function (l) {
                    (l.length = 1),
                      (l.totalodds = l.odds),
                      (l.totalexchangeStack = l.exchangeStake),
                      (l.totalPL = l.exposure),
                      (l.averageOdds = l.odds);
                    var n = l.selectionId;
                    i.hasOwnProperty(n)
                      ? ((i[n].length += l.length),
                        (i[n].totalodds += l.odds),
                        (i[n].totalexchangeStack += l.exchangeStake),
                        (i[n].totalPL += l.exposure),
                        (i[n].averageOdds = (
                          i[n].totalodds / i[n].length
                        ).toFixed(2)))
                      : (i[n] = l);
                  });
                  var a = Object.keys(i).map(function (l) {
                    return i[l];
                  });
                  (l.datalay = a), (l.databack = u);
                });
              });
        }
        acceptAnyOdds(l) {
          this.anyOdds = l;
        }
        liveTv() {
          if (!this.object.routeUrl)
            if (
              (this.object.isCurrencyReqForStream ||
                this.object.isEventHaveBetForStream ||
                this.object
                  .getDOMInstance()
                  .error("Insufficient balance to view live stream"),
              (this.object.livePlaye = !this.object.livePlaye),
              this.object.livePlaye)
            ) {
              let l = this.object.getRouterInstance().url.split("/");
              this.getEventStraming(l[3]);
            } else
              this.unsubscribeStreamlive &&
                this.unsubscribeStreamlive.unsubscribe();
        }
        getAllBrodcasterBetSLipWeb() {
          this.broadCast
            .on(this.object.getConstants().BETLIST.BETARRAY)
            .subscribe((l) => {
              this.attachMutation();
            }),
            (this.unsubscribeInplaybetslip = this.broadCast
              .on(this.object.getConstants().BETLIST.UPDATEINPLAYBETLIST)
              .subscribe((l) => {
                "Special_market" ==
                  this.object.getUtilInstance().getStore("eventType") &&
                  ((this.object.specialMarket = !1),
                  this.object.getUtilInstance().removeState("eventType"),
                  this.getPlayerBetList());
              })),
            (this.unsubscribebetlist = this.broadCast
              .on(this.object.getConstants().BROADCASTKEY.FIREBASEEVENT)
              .subscribe((l) => {
                let n = l.booleanKeys[0];
                n &&
                  ((n.marketSettled || n.fancyMarketSettled) &&
                    this.object.betlistId.matchId.includes(n.marketId) &&
                    this.getPlayerBetList(),
                  (n.marketReopen || n.eventVoidReopn) &&
                    this.getPlayerBetList());
              })),
            (this.unsubscribeEventId = this.broadCast
              .on(this.object.getConstants().BROADCASTKEY.EVENTID)
              .subscribe((l) => {
                (this.eventId = l.eventId),
                  (this.object.livePlaye = !1),
                  "demo1" != this.object.getLoginInstance().state.userName &&
                    "demo2" != this.object.getLoginInstance().state.userName &&
                    "demo3" != this.object.getLoginInstance().state.userName &&
                    setTimeout(() => {
                      this.getEventStraming(l.eventId);
                    }, 2e3);
              }));
        }
        getLocalStorageBetSLipWeb() {
          this.clearInterveal = setInterval(() => {
            this.object
              .getUtilInstance()
              .getStore(this.object.getConstants().STORAGE.token) ||
              (this.betSlip.playerSlipList = null);
          }, 1e3);
          let l = JSON.parse(
            this.object
              .getUtilInstance()
              .getStore(this.object.getConstants().STORAGE.showFilterDetails)
          );
          this.object.getLoginInstance().state.isPlayer &&
            null != l &&
            ((this.showAverageOddsdata = l.matchMarket.matchAvgodd),
            (this.showRefDate = l.matchMarket.matchMrkt),
            (this.selectdMatchBetListId = l.matchMarket.matchFilter),
            (this.matchBetListEventName = l.matchMarket.eventName),
            (this.selectUnMatchBetListId = l.unMatchMarket.unMatchFilter),
            (this.showUnmatchRefDate = l.unMatchMarket.unMatchMrkt));
        }
        onDestroySubcriberD1() {
          clearInterval(this.clearInterveal),
            this.unsubscribebetlist && this.unsubscribebetlist.unsubscribe(),
            this.unsubscribeStream && this.unsubscribeStream.unsubscribe(),
            this.unsubscribeStreamlive &&
              this.unsubscribeStreamlive.unsubscribe(),
            this.unsubscribeWebfancy && this.unsubscribeWebfancy.unsubscribe(),
            this.unsubscribeWebMatchodd &&
              this.unsubscribeWebMatchodd.unsubscribe(),
            this.unsubscribeEventId && this.unsubscribeEventId.unsubscribe(),
            this.unsubscribeInplaybetslip &&
              this.unsubscribeInplaybetslip.unsubscribe();
        }
        onMouseMove(l) {
          this.countMouseEvents++;
        }
        onMouseLeave(l) {
          this.betSlip.slipList.length <= 1 && (this.countMouseEvents = 0);
        }
        onDestroySubcriberD2() {
          clearInterval(this.clearInterveal),
            this.unsubscribebetlist && this.unsubscribebetlist.unsubscribe(),
            this.unsubscribeStream && this.unsubscribeStream.unsubscribe(),
            this.unsubscribeStreamlive &&
              this.unsubscribeStreamlive.unsubscribe(),
            this.unsubscribeWebfancy && this.unsubscribeWebfancy.unsubscribe(),
            this.unsubscribeWebMatchodd &&
              this.unsubscribeWebMatchodd.unsubscribe();
        }
        getEventIdFromUrl() {
          let l = this.object.getRouterInstance().url.split("/");
          "event-detail" == l[2] &&
            ((this.currentEventId = l[3]), this.getEventStraming(l[3]));
        }
        getAllBrodcasterWeb() {
          (this.unsubscribebetArray = this.broadCast
            .on(this.object.getConstants().BETLIST.BETARRAY)
            .subscribe((l) => {
              this.attachMutation();
            })),
            (this.unsubscribeLoadBets = this.broadCast
              .on(this.object.getConstants().BETLIST.LOADBETLIST)
              .subscribe((l) => {
                this.getCasinoBetList(), this.handleCancelBet(0);
              })),
            (this.unsubscribeLoadBets = this.broadCast
              .on(this.object.getConstants().BETLIST.UPDATEBETLIST)
              .subscribe((l) => {
                this.getCasinoBetList();
              }));
        }
        getLocalStoreDataWeb() {
          this.clearInterveal = setInterval(() => {
            this.object
              .getUtilInstance()
              .getStore(this.object.getConstants().STORAGE.token) ||
              (this.betSlip.playerSlipList = null);
          }, 1e3);
        }
        onDestroyUnsubcribe() {
          this.appDestroyed(),
            clearInterval(this.clearInterveal),
            this.unsubscribeLoadBets && this.unsubscribeLoadBets.unsubscribe(),
            this.unsubscribebetArray && this.unsubscribebetArray.unsubscribe();
        }
        numberOnly(l) {
          if (46 == l.keyCode) return;
          const n = l.which ? l.which : l.keyCode;
          return !(n > 31 && (n < 48 || n > 57));
        }
        onDestroyUnsubcribeSlip() {
          this.appDestroyed(),
            this.unsubscribeBetfairBet &&
              this.unsubscribeBetfairBet.unsubscribe(),
            this.unsubscribeFanyBet && this.unsubscribeFanyBet.unsubscribe(),
            this.unsubscribeMobilebetSlip &&
              this.unsubscribeMobilebetSlip.unsubscribe();
        }
        disableinputforDemo() {
          setTimeout(() => {
            null != this.object.palyerSelfInfo &&
              (("demo1" != this.object.palyerSelfInfo.userName &&
                "demo2" != this.object.palyerSelfInfo.userName &&
                "demo3" != this.object.palyerSelfInfo.userName) ||
                (this.isdemoAcc = !0));
          }, 2e3);
        }
        gotoEventdetail(l) {
          "special-market" ==
            this.object.getRouterInstance().url.split("/")[1] ||
          this.object.getRouterInstance().url.split("/")[3] ==
            this.object.getConstants().PNL.SPECIALMARKETPARAM
            ? (this.object
                .getRouterInstance()
                .navigate([
                  "/sport/" + this.object.getUI_URL().user.eventDetail,
                  this.object.getConstants().PNL.SPECIALMARKETPARAM,
                  l.eventId,
                ]),
              this.object
                .getUtilInstance()
                .storeState("eventType", "Special_market"))
            : this.object
                .getRouterInstance()
                .navigate([
                  "/sport/" +
                    this.object.getUI_URL().user.eventDetail +
                    "/" +
                    l.eventId,
                ]);
        }
        gotoEventdetailMobile(l, n) {
          n == this.object.getConstants().PNL.SPECIAL_MARKET
            ? this.object
                .getRouterInstance()
                .navigate([
                  "/sport/" + this.object.getUI_URL().user.eventDetail,
                  this.object.getConstants().PNL.SPECIALMARKETPARAM,
                  l.eventId,
                ])
            : n == this.object.getConstants().PNL.SPORTS &&
              this.object
                .getRouterInstance()
                .navigate([
                  "/sport/" +
                    this.object.getUI_URL().user.eventDetail +
                    "/" +
                    l.eventId,
                ]);
        }
        showRoundOffStake(l) {
          this.object.getDOMInstance().success("Format changed"),
            (this.clickedStake = l),
            this.object
              .getUtilInstance()
              .storeState(
                this.object.getConstants().STORAGE.showRoundOffStake,
                l
              );
        }
        handleShowStakeinfo() {
          (this.showStakeInfo = !this.showStakeInfo),
            setTimeout(() => {
              this.showStakeInfo = !1;
            }, 5e3);
        }
        editablStake(l) {
          (this.clickedStake = !1),
            setTimeout(() => {
              document.getElementById("stake" + l).focus();
            }, 100);
        }
      }
      class y extends M {
        constructor(l, n, t, e, u, i) {
          super(l, n, t, e),
            (this.service = l),
            (this.object = n),
            (this.broadCast = t),
            (this.firebase = e),
            (this.routeParam = u),
            (this.router = i),
            (this.backOddValue = []),
            (this.layOddValue = []);
        }
        ngOnInit() {
          this.getEventIdFromUrl(),
            this.getLocalIpAddress(),
            this.attachMutation(),
            this.getPlayerBetList(),
            this.init(),
            this.getAllBrodcasterBetSLipWeb(),
            this.getLocalStorageBetSLipWeb();
        }
        togglebetslip() {
          (this.toggleSlip =
            document.getElementsByClassName("bet-slip-container")[0]),
            this.toggleSlip.classList.value.includes("rightbetopen")
              ? (this.toggleSlip.classList.remove("rightbetopen"),
                this.toggleSlip.classList.add("rightbetclose"))
              : (this.toggleSlip.classList.add("rightbetopen"),
                this.toggleSlip.classList.remove("rightbetclose"));
        }
        ngOnDestroy() {
          this.onDestroySubcriberD1();
        }
      }
      var O = t("GVaW"),
        I = t("alQF"),
        S = t("cWJh"),
        _ = t("iInd"),
        q = e.ob({
          encapsulation: 0,
          styles: [
            "video#UnrealPlayer1_Video[_ngcontent-%COMP%] {\n        width: 100% !important;\n    }\n\n    video[_ngcontent-%COMP%] {\n        width: 100% !important;\n    }",
            [
              '.betslip-error[_ngcontent-%COMP%]{background-color:#dc3545;color:#fff;padding:8px}#bet[_ngcontent-%COMP%]{padding:20px 0!important;font-size:12px;border:2px solid #fff;box-shadow:0 2px 6px rgba(81,90,163,.5);border-radius:4px;text-align:center}[loading][_ngcontent-%COMP%]{width:19vw;height:calc(100vh - 76px);display:flex;align-items:center;justify-content:center;position:absolute;z-index:9999999;font-size:20px;top:80px;left:81%;right:0;bottom:0;background-color:rgba(255,255,255,.7)}.filters_matching[_ngcontent-%COMP%]{padding:0;background:#fff}.filters_matching[_ngcontent-%COMP%]   .filter_delete[_ngcontent-%COMP%], .filters_matching[_ngcontent-%COMP%]   .filter_switch[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;border-bottom:solid 3px var(--maindark);border-top:solid 3px var(--maindark);padding:7px 0}.filters_matching[_ngcontent-%COMP%]   .filter_delete[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%], .filters_matching[_ngcontent-%COMP%]   .filter_switch[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{font-weight:900;font-size:16px;line-height:22px;text-transform:uppercase}.filters_matching[_ngcontent-%COMP%]   .filter_delete[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%], .filters_matching[_ngcontent-%COMP%]   .filter_switch[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%]{display:flex;align-items:center}.filters_matching[_ngcontent-%COMP%]   .filter_delete[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%], .filters_matching[_ngcontent-%COMP%]   .filter_switch[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-weight:500;font-size:13px;line-height:18px;color:#4d4d4d}.filters_matching[_ngcontent-%COMP%]   .filter_delete[_ngcontent-%COMP%]   .btn-delete[_ngcontent-%COMP%], .filters_matching[_ngcontent-%COMP%]   .filter_switch[_ngcontent-%COMP%]   .btn-delete[_ngcontent-%COMP%]{border:none;padding:7px 13px;font-weight:600;font-size:12px;line-height:16px;text-align:center;color:#fff;display:flex;align-items:center;background:#ce4f4f;border-radius:20px}.filters_matching[_ngcontent-%COMP%]   .filter_delete[_ngcontent-%COMP%]   .btn-delete[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .filters_matching[_ngcontent-%COMP%]   .filter_switch[_ngcontent-%COMP%]   .btn-delete[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:5px}.filters_matching[_ngcontent-%COMP%]   .filter_dropdown[_ngcontent-%COMP%]{margin:16px 0;background-color:#f2f2f2;padding:2px 0 2px 10px;border-radius:6px}.filters_matching[_ngcontent-%COMP%]   .filter_dropdown[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:18px}.filters_matching[_ngcontent-%COMP%]   .filter_dropdown[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{padding:2px;background:0 0;border-radius:4px;width:calc(100% - 108px);font-weight:500;font-size:12px;line-height:16px;color:rgba(0,0,0,.7)}.filters_matching[_ngcontent-%COMP%]   .filter_checkbox[_ngcontent-%COMP%]{display:flex;align-items:center}.filters_matching[_ngcontent-%COMP%]   .filter_checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin:0 8px 0 0}.filters_matching[_ngcontent-%COMP%]   .filter_checkbox[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:500;font-size:15px;line-height:16px;color:rgba(0,0,0,.7)}.head_text[_ngcontent-%COMP%]{padding:10px 0 10px 10px;font-weight:600;font-size:14px;line-height:19px;color:rgba(0,0,0,.7)}.mabottpm[_ngcontent-%COMP%]{margin-bottom:0}.boderspr[_ngcontent-%COMP%]{border-top:1px solid #999;margin:30px 0 10px;position:relative;width:calc(100% + 10px);left:-7px}.back-lay-container-matched[_ngcontent-%COMP%]{padding-bottom:3px;border-radius:4px;border:1px solid rgba(151,151,151,.3);margin-bottom:10px;box-shadow:0 3px 6px -3px;box-shadow:0}.back-lay-container-matched[_ngcontent-%COMP%]:last-child{margin-bottom:0}.back-lay-container-matched[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%!important;margin:0}.back-lay-container-matched[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody.back[_ngcontent-%COMP%]{background-color:#ddf0fd}.back-lay-container-matched[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody.lay[_ngcontent-%COMP%]{background-color:#f3d4dc}.onoffswitch-label[_ngcontent-%COMP%]{border:1px solid #395e6e}.marketone[_ngcontent-%COMP%]{border-radius:4px;margin:30px 0;padding:0;background-color:#fff}.marketone[_ngcontent-%COMP%]:nth-child(2){border-radius:0 0 10px 10px;margin:0 0 13px;border-top:0}.filters_matching[_ngcontent-%COMP%]{border:none;border-width:0 1px;background-color:transparent}.customBetFooter[_ngcontent-%COMP%]{padding:0 4px;display:flex;justify-content:flex-end;border-radius:0 0 4px 4px;background-color:#eaeaef}.inputboxmain[_ngcontent-%COMP%]{padding:0 0 6px;display:flex;flex-wrap:wrap;justify-content:space-between;border-bottom:1px solid #ccc;margin-bottom:0 0 8px 8px;text-transform:uppercase}.inputboxmain[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{display:flex;font-size:15px;flex:1 100%;margin:0 0 5px;padding:10px;border-bottom:1px solid #e2e8ea}.bet_popUp[_ngcontent-%COMP%]{position:absolute;z-index:9999999;right:43px;margin-top:-42px;left:12px;border-radius:4px;background-color:#fff;box-shadow:0 8px 40px rgba(77,86,154,.5)}.bet_popUp[_ngcontent-%COMP%]:after, .bet_popUp[_ngcontent-%COMP%]:before{bottom:100%;left:96%;border:solid transparent;content:" ";height:0;width:0;position:absolute;pointer-events:none}.bet_popUp[_ngcontent-%COMP%]:after{border-color:rgba(221,221,221,0);border-bottom-color:var(--main-color);border-width:10px;transform:rotate(90deg);margin:0 0 -28px 12px}.bet_popUp[_ngcontent-%COMP%]:before{border-color:rgba(221,221,221,0);border-width:6px;margin-left:-6px}.inputboxmain[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{flex:auto}.inputboxmain[_ngcontent-%COMP%]   input.inputbox[_ngcontent-%COMP%]{width:21%;text-align:center;margin:6px 5px;height:38px;border-radius:4px;border:1px solid #d3d3d3;background-color:#fff}#parent[_ngcontent-%COMP%]:last-child{display:none!important}.setting[_ngcontent-%COMP%]{background-color:#ffffff29;border:0;color:#000;padding:0;border-radius:60px;width:132px;height:30px;display:flex!important;align-items:center;font-size:12px;justify-content:space-evenly;text-transform:uppercase}.setting[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;padding:0}.saveedit[_ngcontent-%COMP%]{display:block;padding:5px 39px;border:none;background:var(--maindark);text-transform:capitalize;border-radius:4px;margin:4px 15px;color:#fff}.saveedit1[_ngcontent-%COMP%]{background:linear-gradient(90deg,var(--main-color) 0,var(--main-color) 100%)!important}.isValid[_ngcontent-%COMP%]{color:red}.tgreen[_ngcontent-%COMP%]{color:green}.tred[_ngcontent-%COMP%]{color:red}.matchtit[_ngcontent-%COMP%]{display:flex;justify-content:space-between;color:#fff;align-items:center;padding:10px 12px 11px;border-radius:0;background-color:#000!important;margin:-11px 0 0 -8px;width:103.9%}.mainbox[_ngcontent-%COMP%]{width:100%;border:1px solid #fafafa;background:#fff;border-radius:8px;margin-bottom:20px}div#UnrealPlayer1[_ngcontent-%COMP%], video#UnrealPlayer1_Video[_ngcontent-%COMP%]{width:100%!important}.live_pop.match[_ngcontent-%COMP%]{border-top:2px solid #e5943f;margin:0 -5px 0 -8px}.unmamabottpm[_ngcontent-%COMP%]{padding-top:10px;border-top:1px solid #a0acff;border-radius:0;margin-top:10px}.minplsdec[_ngcontent-%COMP%]{background-color:#ecedf4!important;color:#fff!important}.add-bet[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child{width:62%!important}.empty-cartc[_ngcontent-%COMP%]{width:100%;height:300px;display:flex}.maincardemp[_ngcontent-%COMP%]{width:70%;margin:auto;text-align:center;font-size:14px}.ifremvid[_ngcontent-%COMP%]{width:100%;height:220px;margin-top:-9px}.maxminbet[_ngcontent-%COMP%]{flex:inherit;display:flex;font-size:10px;border-bottom:1px solid #d8d8d8;background-color:#f9f9f9;font-family:Spartan,sans-serif}.maxminbet[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{flex:auto;padding:4px 10px}.maxminbet[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .maxtit[_ngcontent-%COMP%]{padding:0;font-weight:700!important;float:left;margin-right:10px}.bet-slip-container[_ngcontent-%COMP%]{overflow:scroll!important;z-index:99;height:calc(100vh - 0px)!important;height:-webkit-calc(100vh - 0px)!important}.switch[_ngcontent-%COMP%]{position:relative;display:inline-block;width:48px;height:25px;margin-left:5px}.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{opacity:0;width:0;height:0}.slider[_ngcontent-%COMP%]{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;transition:.4s}.slider[_ngcontent-%COMP%]:before{position:absolute;content:"";height:18px;width:18px;left:2px;bottom:3px;background-color:#fff;transition:.4s}input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]{background-color:#000}input[_ngcontent-%COMP%]:focus + .slider[_ngcontent-%COMP%]{border:1px solid #000!important;box-shadow:1px 2px 2px 0 #000!important}input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]:before{transform:translateX(26px)}.slider.round[_ngcontent-%COMP%]{border-radius:34px}.slider.round[_ngcontent-%COMP%]:before{border-radius:50%}.roundtog[_ngcontent-%COMP%]{width:100%;padding-left:10px;text-transform:none;display:flex;justify-content:flex-end;align-items:center;padding-right:5px}.inputboxmain[_ngcontent-%COMP%]   .lakhval[_ngcontent-%COMP%]{flex:auto;width:21%;text-align:center;margin:6px 5px;display:flex;align-items:center;justify-content:center;height:38px;border-radius:4px;background-color:#fff;border:1px solid!important}.infolakh[_ngcontent-%COMP%]{color:#000;position:absolute;right:20px;background:#fff;border:1px solid #adadad;padding:10px;width:100px;border-radius:6PX;box-shadow:4px 5px 6px #333333a1}',
            ],
          ],
          data: {},
        });
      function P(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              3,
              "div",
              [["class", "live_pop match"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              2,
              "div",
              [["class", "inputboxmain1"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              2,
              0,
              null,
              null,
              1,
              "iframe",
              [
                ["class", "ifremvid"],
                ["height", "200"],
                ["title", "Iframe Example"],
                ["width", "300"],
              ],
              [[8, "src", 5]],
              null,
              null,
              null,
              null
            )),
            e.Gb(3, 1),
          ],
          null,
          function (l, n) {
            var t = n.component,
              u = e.Lb(
                n,
                2,
                0,
                l(n, 3, 0, e.Cb(n.parent.parent, 0), t.videoUrlLink)
              );
            l(n, 2, 0, u);
          }
        );
      }
      function L(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              8,
              "div",
              [
                ["class", "mainbox"],
                ["style", "cursor: pointer;"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              4,
              "div",
              [["class", "matchtit"]],
              null,
              [[null, "click"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "click" === n && (e = !1 !== l.component.liveTv() && e), e
                );
              },
              null,
              null
            )),
            (l()(),
            e.qb(
              2,
              0,
              null,
              null,
              1,
              ":svg:svg",
              [
                ["height", "24"],
                ["style", "fill: #fff;"],
                ["viewBox", "0 0 24 24"],
                ["width", "24"],
                ["xmlns", "http://www.w3.org/2000/svg"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              3,
              0,
              null,
              null,
              0,
              ":svg:path",
              [
                [
                  "d",
                  "M21 6h-7.59l3.29-3.29L16 2l-4 4-4-4-.71.71L10.59 6H3c-1.1 0-2 .89-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.11-.9-2-2-2zm0 14H3V8h18v12zM9 10v8l7-4z",
                ],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(4, null, [" ", " "])),
            e.Eb(131072, u.j, [u.k, e.h]),
            (l()(),
            e.qb(
              6,
              0,
              null,
              null,
              2,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, P)),
            e.pb(
              8,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
          ],
          function (l, n) {
            var t = n.component;
            l(
              n,
              8,
              0,
              t.object.livePlaye &&
                (t.object.isCurrencyReqForStream ||
                  t.object.isEventHaveBetForStream)
            );
          },
          function (l, n) {
            l(n, 4, 0, e.Lb(n, 4, 0, e.Cb(n, 5).transform("Live Tv")));
          }
        );
      }
      function E(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              9,
              "button",
              [["class", "setting"]],
              [[4, "display", null]],
              [[null, "click"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "click" === n && (e = !1 !== l.component.openpopUp(t) && e), e
                );
              },
              null,
              null
            )),
            (l()(),
            e.qb(1, 0, null, null, 2, "p", [], null, null, null, null, null)),
            (l()(), e.Kb(2, null, [" ", ""])),
            e.Eb(131072, u.j, [u.k, e.h]),
            (l()(),
            e.qb(
              4,
              0,
              null,
              null,
              5,
              ":svg:svg",
              [
                ["height", "20"],
                ["style", "margin-left: 5px;"],
                ["viewBox", "0 0 22.74 24.44"],
                ["width", "20"],
                ["xmlns", "http://www.w3.org/2000/svg"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              5,
              0,
              null,
              null,
              1,
              ":svg:defs",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              6,
              0,
              null,
              null,
              0,
              ":svg:style",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              7,
              0,
              null,
              null,
              2,
              ":svg:g",
              [
                ["data-name", "Layer 2"],
                ["id", "Layer_2"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              8,
              0,
              null,
              null,
              1,
              ":svg:g",
              [
                ["data-name", "Layer 1"],
                ["id", "Layer_1-2"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              9,
              0,
              null,
              null,
              0,
              ":svg:path",
              [
                [
                  "d",
                  "M21.43,14,21,13.73a1.75,1.75,0,0,1,0-3l.46-.27a2.62,2.62,0,0,0,1-3.57l-.87-1.52a2.62,2.62,0,0,0-3.58-.95l-.46.26a1.7,1.7,0,0,1-1.74,0,1.73,1.73,0,0,1-.88-1.51V2.62A2.62,2.62,0,0,0,12.24,0H10.5A2.63,2.63,0,0,0,7.88,2.62v.53A1.75,1.75,0,0,1,5.26,4.66L4.8,4.4a2.6,2.6,0,0,0-3.57.95L.35,6.87a2.62,2.62,0,0,0,1,3.57l.46.27a1.75,1.75,0,0,1,0,3L1.31,14a2.62,2.62,0,0,0-1,3.57l.88,1.51A2.62,2.62,0,0,0,4.8,20l.46-.26a1.75,1.75,0,0,1,2.62,1.51v.53a2.63,2.63,0,0,0,2.62,2.62h1.74a2.62,2.62,0,0,0,2.62-2.62v-.53a1.72,1.72,0,0,1,.88-1.51,1.7,1.7,0,0,1,1.74,0l.46.26a2.63,2.63,0,0,0,3.58-1l.87-1.51A2.62,2.62,0,0,0,21.43,14ZM11.37,16.58a4.36,4.36,0,1,1,4.37-4.36A4.37,4.37,0,0,1,11.37,16.58Z",
                ],
                ["style", "fill:var(--maindark); stroke: none;"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
          ],
          null,
          function (l, n) {
            l(n, 0, 0, n.component.settingBtnDisplay),
              l(n, 2, 0, e.Lb(n, 2, 0, e.Cb(n, 3).transform("Edit Stakes")));
          }
        );
      }
      function T(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              [
                [1, 0],
                ["id", 1],
              ],
              null,
              10,
              "input",
              [
                ["appBlockCopyPaste", ""],
                ["autocomplete", "off"],
                ["class", "inputbox"],
                ["data-toggle", "tooltip"],
                ["maxlength", "8"],
                ["noRightClick", ""],
                ["positiveNumberOnly", ""],
                ["title", "Value must be greater or equal to 1"],
                ["type", "text"],
              ],
              [
                [8, "id", 0],
                [1, "maxlength", 0],
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null],
              ],
              [
                [null, "ngModelChange"],
                [null, "keyup"],
                [null, "input"],
                [null, "blur"],
                [null, "compositionstart"],
                [null, "compositionend"],
                [null, "contextmenu"],
                [null, "paste"],
                [null, "copy"],
                [null, "cut"],
                [null, "keypress"],
              ],
              function (l, n, t) {
                var u = !0,
                  i = l.component;
                return (
                  "input" === n &&
                    (u = !1 !== e.Cb(l, 1)._handleInput(t.target.value) && u),
                  "blur" === n && (u = !1 !== e.Cb(l, 1).onTouched() && u),
                  "compositionstart" === n &&
                    (u = !1 !== e.Cb(l, 1)._compositionStart() && u),
                  "compositionend" === n &&
                    (u =
                      !1 !== e.Cb(l, 1)._compositionEnd(t.target.value) && u),
                  "contextmenu" === n &&
                    (u = !1 !== e.Cb(l, 8).onRightClick(t) && u),
                  "paste" === n && (u = !1 !== e.Cb(l, 9).blockPaste(t) && u),
                  "copy" === n && (u = !1 !== e.Cb(l, 9).blockCopy(t) && u),
                  "cut" === n && (u = !1 !== e.Cb(l, 9).blockCut(t) && u),
                  "keypress" === n &&
                    (u = !1 !== e.Cb(l, 10).onInputChange(t) && u),
                  "ngModelChange" === n &&
                    (u =
                      !1 !==
                        (i.customBetList[l.parent.context.index].val = t) && u),
                  "keyup" === n && (u = !1 !== i.keyPress(t) && u),
                  u
                );
              },
              null,
              null
            )),
            e.pb(1, 16384, null, 0, a.d, [e.B, e.k, [2, a.a]], null, null),
            e.pb(
              2,
              540672,
              null,
              0,
              a.j,
              [],
              {
                maxlength: [0, "maxlength"],
              },
              null
            ),
            e.Hb(
              1024,
              null,
              a.l,
              function (l) {
                return [l];
              },
              [a.j]
            ),
            e.Hb(
              1024,
              null,
              a.m,
              function (l) {
                return [l];
              },
              [a.d]
            ),
            e.pb(
              5,
              671744,
              null,
              0,
              a.r,
              [
                [8, null],
                [6, a.l],
                [8, null],
                [6, a.m],
              ],
              {
                model: [0, "model"],
              },
              {
                update: "ngModelChange",
              }
            ),
            e.Hb(2048, null, a.n, null, [a.r]),
            e.pb(7, 16384, null, 0, a.o, [[4, a.n]], null, null),
            e.pb(8, 16384, null, 0, c.a, [], null, null),
            e.pb(9, 16384, null, 0, o.a, [], null, null),
            e.pb(10, 16384, null, 0, s, [e.k], null, null),
          ],
          function (l, n) {
            var t = n.component;
            l(n, 2, 0, "8"),
              l(n, 5, 0, t.customBetList[n.parent.context.index].val);
          },
          function (l, n) {
            l(
              n,
              0,
              0,
              e.ub(1, "stake", n.parent.context.index, ""),
              e.Cb(n, 2).maxlength ? e.Cb(n, 2).maxlength : null,
              e.Cb(n, 7).ngClassUntouched,
              e.Cb(n, 7).ngClassTouched,
              e.Cb(n, 7).ngClassPristine,
              e.Cb(n, 7).ngClassDirty,
              e.Cb(n, 7).ngClassValid,
              e.Cb(n, 7).ngClassInvalid,
              e.Cb(n, 7).ngClassPending
            );
          }
        );
      }
      function w(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              2,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, T)),
            e.pb(
              2,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(0, null, null, 0)),
          ],
          function (l, n) {
            var t = n.component;
            l(
              n,
              2,
              0,
              n.context.index != t.customBetList.length - 1 && !t.clickedStake
            );
          },
          null
        );
      }
      function N(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              2,
              "div",
              [["class", "lakhval"]],
              null,
              [[null, "click"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "click" === n &&
                    (e =
                      !1 !== l.component.editablStake(l.parent.context.index) &&
                      e),
                  e
                );
              },
              null,
              null
            )),
            (l()(), e.Kb(1, null, [" ", " "])),
            e.Gb(2, 2),
          ],
          null,
          function (l, n) {
            var t = e.Lb(
              n,
              1,
              0,
              l(
                n,
                2,
                0,
                e.Cb(n.parent.parent.parent, 1),
                "+" +
                  (null == n.parent.context.$implicit
                    ? null
                    : n.parent.context.$implicit.val),
                "show"
              )
            );
            l(n, 1, 0, t);
          }
        );
      }
      function j(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              2,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, N)),
            e.pb(
              2,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(0, null, null, 0)),
          ],
          function (l, n) {
            var t = n.component;
            l(
              n,
              2,
              0,
              n.context.index != t.customBetList.length - 1 && t.clickedStake
            );
          },
          null
        );
      }
      function A(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              5,
              "i",
              [["class", "infolakh"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(-1, null, ["100000= 1L "])),
            (l()(),
            e.qb(2, 0, null, null, 0, "br", [], null, null, null, null, null)),
            (l()(), e.Kb(-1, null, [" 200000= 2L "])),
            (l()(),
            e.qb(4, 0, null, null, 0, "br", [], null, null, null, null, null)),
            (l()(), e.Kb(-1, null, [" 500000= 5L"])),
          ],
          null,
          null
        );
      }
      function B(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              [["popup", 1]],
              null,
              39,
              "div",
              [["class", "bet_popUp"]],
              null,
              [[null, "click"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "click" === n && (e = !1 !== t.stopPropagation() && e), e
                );
              },
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              31,
              "div",
              [["class", "inputboxmain"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(2, 0, null, null, 2, "h2", [], null, null, null, null, null)),
            (l()(), e.Kb(3, null, ["", ""])),
            e.Eb(131072, u.j, [u.k, e.h]),
            (l()(), e.fb(16777216, null, null, 1, null, w)),
            e.pb(
              6,
              278528,
              null,
              0,
              i.m,
              [e.N, e.J, e.q],
              {
                ngForOf: [0, "ngForOf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, j)),
            e.pb(
              8,
              278528,
              null,
              0,
              i.m,
              [e.N, e.J, e.q],
              {
                ngForOf: [0, "ngForOf"],
              },
              null
            ),
            (l()(),
            e.qb(
              9,
              0,
              null,
              null,
              9,
              "div",
              [["class", "roundtog"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              10,
              0,
              null,
              null,
              5,
              "span",
              [
                ["class", "titleText"],
                ["style", "position:relative ;"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(11, null, ["", " (1L) "])),
            e.Eb(131072, u.j, [u.k, e.h]),
            (l()(), e.fb(16777216, null, null, 1, null, A)),
            e.pb(
              14,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(),
            e.qb(
              15,
              0,
              null,
              null,
              0,
              "i",
              [
                ["aria-hidden", "true"],
                ["class", "fa fa-info-circle"],
                ["data-toggle", "tooltip"],
                ["title", "100000=1L 2000000=20L"],
              ],
              null,
              [[null, "click"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "click" === n &&
                    (e = !1 !== l.component.handleShowStakeinfo() && e),
                  e
                );
              },
              null,
              null
            )),
            (l()(),
            e.qb(
              16,
              0,
              null,
              null,
              2,
              "label",
              [["class", "switch"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              17,
              0,
              [["subwick", 1]],
              null,
              0,
              "input",
              [["type", "checkbox"]],
              [[8, "checked", 0]],
              [[null, "change"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "change" === n &&
                    (e =
                      !1 !== l.component.showRoundOffStake(t.target.checked) &&
                      e),
                  e
                );
              },
              null,
              null
            )),
            (l()(),
            e.qb(
              18,
              0,
              null,
              null,
              0,
              "span",
              [["class", "slider round"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              19,
              0,
              null,
              null,
              13,
              "div",
              [["style", "padding-left:10px;text-transform:none"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              20,
              0,
              null,
              null,
              2,
              "label",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(21, null, ["", ""])),
            e.Eb(131072, u.j, [u.k, e.h]),
            (l()(),
            e.qb(23, 0, null, null, 0, "br", [], null, null, null, null, null)),
            (l()(),
            e.qb(
              24,
              0,
              [["MO", 1]],
              null,
              0,
              "input",
              [["type", "checkbox"]],
              [[8, "checked", 0]],
              [[null, "change"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "change" === n &&
                    (e =
                      !1 !==
                        l.component.acceptAnyOddsClick(
                          t.target.checked,
                          "MO"
                        ) && e),
                  e
                );
              },
              null,
              null
            )),
            (l()(), e.Kb(25, null, [" ", " "])),
            e.Eb(131072, u.j, [u.k, e.h]),
            (l()(),
            e.qb(
              27,
              0,
              [["BM", 1]],
              null,
              0,
              "input",
              [["type", "checkbox"]],
              [[8, "checked", 0]],
              [[null, "change"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "change" === n &&
                    (e =
                      !1 !==
                        l.component.acceptAnyOddsClick(
                          t.target.checked,
                          "BM"
                        ) && e),
                  e
                );
              },
              null,
              null
            )),
            (l()(), e.Kb(28, null, [" ", " "])),
            e.Eb(131072, u.j, [u.k, e.h]),
            (l()(),
            e.qb(
              30,
              0,
              [["FN", 1]],
              null,
              0,
              "input",
              [["type", "checkbox"]],
              [[8, "checked", 0]],
              [[null, "change"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "change" === n &&
                    (e =
                      !1 !==
                        l.component.acceptAnyOddsClick(
                          t.target.checked,
                          "FN"
                        ) && e),
                  e
                );
              },
              null,
              null
            )),
            (l()(), e.Kb(31, null, [" ", " "])),
            e.Eb(131072, u.j, [u.k, e.h]),
            (l()(),
            e.qb(
              33,
              0,
              null,
              null,
              6,
              "div",
              [["class", "customBetFooter"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              34,
              0,
              null,
              null,
              2,
              "button",
              [["class", "saveedit saveedit1 "]],
              null,
              [[null, "click"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "click" === n &&
                    (e = !1 !== l.component.cancleEditStake() && e),
                  e
                );
              },
              null,
              null
            )),
            (l()(), e.Kb(35, null, ["", ""])),
            e.Eb(131072, u.j, [u.k, e.h]),
            (l()(),
            e.qb(
              37,
              0,
              null,
              null,
              2,
              "button",
              [["class", "saveedit "]],
              null,
              [[null, "click"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "click" === n &&
                    (e = !1 !== l.component.saveEditStakes() && e),
                  e
                );
              },
              null,
              null
            )),
            (l()(), e.Kb(38, null, ["", ""])),
            e.Eb(131072, u.j, [u.k, e.h]),
          ],
          function (l, n) {
            var t = n.component;
            l(n, 6, 0, t.customBetList),
              l(n, 8, 0, t.customBetList),
              l(n, 14, 0, t.showStakeInfo);
          },
          function (l, n) {
            var t = n.component;
            l(n, 3, 0, e.Lb(n, 3, 0, e.Cb(n, 4).transform("Edit Stakes"))),
              l(n, 11, 0, e.Lb(n, 11, 0, e.Cb(n, 12).transform("Format"))),
              l(
                n,
                17,
                0,
                "true" ===
                  t.object
                    .getUtilInstance()
                    .getStore(t.object.getConstants().STORAGE.showRoundOffStake)
              ),
              l(
                n,
                21,
                0,
                e.Lb(n, 21, 0, e.Cb(n, 22).transform("Accept Any Odds"))
              ),
              l(n, 24, 0, t.acceptanyOddsMO),
              l(n, 25, 0, e.Lb(n, 25, 0, e.Cb(n, 26).transform("Match Odds"))),
              l(n, 27, 0, t.acceptanyOddsBM),
              l(n, 28, 0, e.Lb(n, 28, 0, e.Cb(n, 29).transform("BookMaker"))),
              l(n, 30, 0, t.acceptanyOddsFN),
              l(n, 31, 0, e.Lb(n, 31, 0, e.Cb(n, 32).transform("Fancy"))),
              l(n, 35, 0, e.Lb(n, 35, 0, e.Cb(n, 36).transform("Cancel"))),
              l(n, 38, 0, e.Lb(n, 38, 0, e.Cb(n, 39).transform("save")));
          }
        );
      }
      function D(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              1,
              "div",
              [["class", "betslip-error"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.Kb(1, null, [
              "Bet Odds must be minimum of ",
              " and maximum of ",
              "",
            ])),
          ],
          null,
          function (l, n) {
            var t = n.component;
            l(
              n,
              1,
              0,
              null != n.parent.context.$implicit &&
                n.parent.context.$implicit.isFancy
                ? t.minFancy
                : t.min,
              t.max
            );
          }
        );
      }
      function K(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              1,
              "div",
              [["class", "betslip-error"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.Kb(-1, null, ["Bet with Same Stake and Odds can't be updated!"])),
          ],
          null,
          null
        );
      }
      function F(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              1,
              "div",
              [["class", "betslip-error"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.Kb(-1, null, ["The stake you have entered are above maximum!"])),
          ],
          null,
          null
        );
      }
      function R(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              1,
              "div",
              [["class", "betslip-error"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.Kb(-1, null, ["The stake you have entered are below minimum!"])),
          ],
          null,
          null
        );
      }
      function U(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              4,
              "div",
              [["class", "lay-text display-ib"]],
              null,
              null,
              null,
              null,
              null
            )),
            e.Hb(512, null, i.A, i.B, [e.q, e.r, e.k, e.B]),
            e.pb(
              2,
              278528,
              null,
              0,
              i.l,
              [i.A],
              {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"],
              },
              null
            ),
            (l()(),
            e.qb(
              3,
              0,
              null,
              null,
              1,
              "span",
              [["class", "lay-heading"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(4, null, ["", ""])),
          ],
          function (l, n) {
            l(
              n,
              2,
              0,
              "lay-text display-ib",
              0 == n.parent.context.$implicit.sideType ||
                2 == n.parent.context.$implicit.sideType
                ? "back-bg"
                : ""
            );
          },
          function (l, n) {
            l(
              n,
              4,
              0,
              0 == n.parent.context.$implicit.sideType ? "BACK" : "LAY"
            );
          }
        );
      }
      function J(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              1,
              "span",
              [["class", "lay-heading"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(1, null, ["", ""])),
          ],
          null,
          function (l, n) {
            l(
              n,
              1,
              0,
              3 == n.parent.parent.context.$implicit.sideType
                ? "No"
                : 2 == n.parent.parent.context.$implicit.sideType &&
                  "Khado_Market" ==
                    (null == n.parent.parent.context.$implicit
                      ? null
                      : n.parent.parent.context.$implicit.fancyMarketCategory)
                ? "Back"
                : "Yes"
            );
          }
        );
      }
      function G(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              6,
              "div",
              [["class", "lay-text display-ib"]],
              null,
              null,
              null,
              null,
              null
            )),
            e.Hb(512, null, i.A, i.B, [e.q, e.r, e.k, e.B]),
            e.pb(
              2,
              278528,
              null,
              0,
              i.l,
              [i.A],
              {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"],
              },
              null
            ),
            (l()(),
            e.qb(
              3,
              0,
              null,
              null,
              1,
              "span",
              [["class", "lay-heading"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(4, null, ["", ""])),
            (l()(), e.fb(16777216, null, null, 1, null, J)),
            e.pb(
              6,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
          ],
          function (l, n) {
            l(
              n,
              2,
              0,
              "lay-text display-ib",
              0 == n.parent.context.$implicit.sideType ||
                2 == n.parent.context.$implicit.sideType
                ? "back-bg"
                : ""
            ),
              l(
                n,
                6,
                0,
                0 != n.parent.context.$implicit.sideType &&
                  1 != n.parent.context.$implicit.sideType
              );
          },
          function (l, n) {
            l(
              n,
              4,
              0,
              0 == n.parent.context.$implicit.sideType
                ? "Back"
                : 1 == n.parent.context.$implicit.sideType
                ? "Lay"
                : ""
            );
          }
        );
      }
      function H(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              5,
              "span",
              [["class", "lay-team-heading display-ib"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(1, null, [" ", " "])),
            e.Gb(2, 1),
            e.Gb(3, 1),
            (l()(),
            e.qb(4, 0, null, null, 1, "p", [], null, null, null, null, null)),
            (l()(), e.Kb(5, null, [" ", " "])),
          ],
          null,
          function (l, n) {
            var t = e.Lb(
              n,
              1,
              0,
              (null != n.parent.context.$implicit &&
                n.parent.context.$implicit.isCasino) ||
                "Bookmaker_Disc" ==
                  (null == n.parent.context.$implicit
                    ? null
                    : n.parent.context.$implicit.fancyMarketCategory)
                ? l(
                    n,
                    2,
                    0,
                    e.Cb(n.parent.parent.parent, 2),
                    null == n.parent.context.$implicit
                      ? null
                      : null == n.parent.context.$implicit.match
                      ? null
                      : n.parent.context.$implicit.match.runnerName
                  )
                : l(
                    n,
                    3,
                    0,
                    e.Cb(n.parent.parent.parent, 2),
                    null == n.parent.context.$implicit
                      ? null
                      : n.parent.context.$implicit.marketType
                  )
            );
            l(n, 1, 0, t);
            var u =
              null != n.parent.context.$implicit &&
              n.parent.context.$implicit.fancyMarketCategory.includes("_")
                ? (null == n.parent.context.$implicit
                    ? null
                    : n.parent.context.$implicit.fancyMarketCategory.split(
                        "_"
                      )[0]) +
                  " " +
                  (null == n.parent.context.$implicit
                    ? null
                    : n.parent.context.$implicit.fancyMarketCategory.split(
                        "_"
                      )[1])
                : null == n.parent.context.$implicit
                ? null
                : n.parent.context.$implicit.fancyMarketCategory;
            l(n, 5, 0, u);
          }
        );
      }
      function V(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              5,
              "span",
              [["class", "lay-team-heading display-ib"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(1, null, [" ", " "])),
            (l()(),
            e.qb(2, 0, null, null, 3, "p", [], null, null, null, null, null)),
            (l()(), e.Kb(3, null, ["", " "])),
            e.Gb(4, 1),
            e.Gb(5, 1),
          ],
          null,
          function (l, n) {
            l(
              n,
              1,
              0,
              null == n.parent.context.$implicit
                ? null
                : n.parent.context.$implicit.runnerName
            );
            var t =
              null != n.parent.context.$implicit &&
              n.parent.context.$implicit.marketType.includes("_")
                ? e.Lb(
                    n,
                    3,
                    0,
                    l(
                      n,
                      4,
                      0,
                      e.Cb(n.parent.parent.parent, 2),
                      null == n.parent.context.$implicit
                        ? null
                        : n.parent.context.$implicit.marketType.split("_")[0]
                    )
                  ) +
                  " " +
                  e.Lb(
                    n,
                    3,
                    0,
                    l(
                      n,
                      5,
                      0,
                      e.Cb(n.parent.parent.parent, 2),
                      null == n.parent.context.$implicit
                        ? null
                        : n.parent.context.$implicit.marketType.split("_")[1]
                    )
                  )
                : null == n.parent.context.$implicit
                ? null
                : n.parent.context.$implicit.marketType;
            l(n, 3, 0, t);
          }
        );
      }
      function W(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              7,
              "div",
              [["class", "col-md-5 text-right"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              2,
              "div",
              [["class", "profit-text display-ib"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              2,
              0,
              null,
              null,
              1,
              "span",
              [["class", "profit-text"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(-1, null, ["Profit : "])),
            (l()(),
            e.qb(
              4,
              0,
              null,
              null,
              3,
              "div",
              [["class", "profit-value display-ib"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(5, null, [" ", " "])),
            e.Gb(6, 1),
            e.Gb(7, 1),
          ],
          null,
          function (l, n) {
            var t =
              "Meter_Market" ==
              (null == n.parent.context.$implicit
                ? null
                : n.parent.context.$implicit.fancyMarketCategory)
                ? "-"
                : e.Lb(
                    n,
                    5,
                    0,
                    "AM" == n.parent.context.$implicit.oddType
                      ? l(
                          n,
                          6,
                          0,
                          e.Cb(n.parent.parent.parent, 3),
                          (n.parent.context.$implicit.odds / 100) *
                            n.parent.context.$implicit.exchangeStake
                        )
                      : l(
                          n,
                          7,
                          0,
                          e.Cb(n.parent.parent.parent, 3),
                          n.parent.context.$implicit.exchangeStake *
                            (n.parent.context.$implicit.odds - 1)
                        )
                  );
            l(n, 5, 0, t);
          }
        );
      }
      function Y(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              3,
              "div",
              [["class", "loss-value display-ib"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(1, null, [" ", " "])),
            e.Gb(2, 1),
            e.Gb(3, 1),
          ],
          null,
          function (l, n) {
            var t =
              "Meter_Market" ==
              (null == n.parent.parent.context.$implicit
                ? null
                : n.parent.parent.context.$implicit.fancyMarketCategory)
                ? "-"
                : e.Lb(
                    n,
                    1,
                    0,
                    "AM" == n.parent.parent.context.$implicit.oddType
                      ? l(
                          n,
                          2,
                          0,
                          e.Cb(n.parent.parent.parent.parent, 4),
                          (n.parent.parent.context.$implicit.odds / 100) *
                            n.parent.parent.context.$implicit.exchangeStake
                        )
                      : l(
                          n,
                          3,
                          0,
                          e.Cb(n.parent.parent.parent.parent, 4),
                          n.parent.parent.context.$implicit.exchangeStake *
                            (n.parent.parent.context.$implicit.odds - 1)
                        )
                  );
            l(n, 1, 0, t);
          }
        );
      }
      function z(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              2,
              "div",
              [["class", "loss-value display-ib"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(1, null, [" ", " "])),
            e.Gb(2, 1),
          ],
          null,
          function (l, n) {
            var t = e.Lb(
              n,
              1,
              0,
              l(
                n,
                2,
                0,
                e.Cb(n.parent.parent.parent.parent, 5),
                (n.parent.parent.context.$implicit.odds / 100) *
                  n.parent.parent.context.$implicit.exchangeStake *
                  (1 -
                    (null == n.parent.parent.context.$implicit
                      ? null
                      : n.parent.parent.context.$implicit.marketDisc) /
                      100)
              )
            );
            l(n, 1, 0, t);
          }
        );
      }
      function Z(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              7,
              "div",
              [["class", "col-md-5  text-right"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              2,
              "div",
              [["class", "profit-text display-ib"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              2,
              0,
              null,
              null,
              1,
              "span",
              [["class", "profit-text"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(-1, null, ["Liability :"])),
            (l()(), e.fb(16777216, null, null, 1, null, Y)),
            e.pb(
              5,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, z)),
            e.pb(
              7,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
          ],
          function (l, n) {
            l(
              n,
              5,
              0,
              "Bookmaker_Disc" !=
                (null == n.parent.context.$implicit
                  ? null
                  : n.parent.context.$implicit.fancyMarketCategory)
            ),
              l(
                n,
                7,
                0,
                "Bookmaker_Disc" ==
                  (null == n.parent.context.$implicit
                    ? null
                    : n.parent.context.$implicit.fancyMarketCategory)
              );
          },
          null
        );
      }
      function X(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(0, 0, null, null, 4, "div", [], null, null, null, null, null)),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              1,
              "div",
              [["class", "maxtit"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(-1, null, ["Max Mkt."])),
            (l()(), e.Kb(3, null, [" ", " "])),
            e.Gb(4, 1),
          ],
          null,
          function (l, n) {
            var t = e.Lb(
              n,
              3,
              0,
              l(
                n,
                4,
                0,
                e.Cb(n.parent.parent.parent.parent, 6),
                (null == n.parent.parent.context.$implicit
                  ? null
                  : n.parent.parent.context.$implicit.maxStake) *
                  (null == n.parent.parent.context.$implicit
                    ? null
                    : n.parent.parent.context.$implicit.maxMktStake)
              )
            );
            l(n, 3, 0, t);
          }
        );
      }
      function Q(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              12,
              "div",
              [["class", "maxminbet"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(1, 0, null, null, 4, "div", [], null, null, null, null, null)),
            (l()(),
            e.qb(
              2,
              0,
              null,
              null,
              1,
              "div",
              [["class", "maxtit"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(-1, null, ["Min"])),
            (l()(), e.Kb(4, null, [" ", " "])),
            e.Gb(5, 1),
            (l()(),
            e.qb(6, 0, null, null, 4, "div", [], null, null, null, null, null)),
            (l()(),
            e.qb(
              7,
              0,
              null,
              null,
              1,
              "div",
              [["class", "maxtit"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(-1, null, ["Max"])),
            (l()(), e.Kb(9, null, [" ", " "])),
            e.Gb(10, 2),
            (l()(), e.fb(16777216, null, null, 1, null, X)),
            e.pb(
              12,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
          ],
          function (l, n) {
            l(
              n,
              12,
              0,
              !(
                null != n.parent.context.$implicit &&
                n.parent.context.$implicit.isFancy
              ) &&
                (null == n.parent.context.$implicit
                  ? null
                  : n.parent.context.$implicit.maxMktStake)
            );
          },
          function (l, n) {
            var t = e.Lb(
              n,
              4,
              0,
              l(
                n,
                5,
                0,
                e.Cb(n.parent.parent.parent, 6),
                null == n.parent.context.$implicit
                  ? null
                  : n.parent.context.$implicit.minStake
              )
            );
            l(n, 4, 0, t);
            var u = e.Lb(
              n,
              9,
              0,
              l(
                n,
                10,
                0,
                e.Cb(n.parent.parent.parent, 3),
                null == n.parent.context.$implicit
                  ? null
                  : n.parent.context.$implicit.maxStake,
                "noDeciaml"
              )
            );
            l(n, 9, 0, u);
          }
        );
      }
      function ll(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              3,
              "div",
              [["class", "decrement-button display-ib"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              2,
              "input",
              [
                ["type", "button"],
                ["value", "-"],
              ],
              [[8, "disabled", 0]],
              [[null, "click"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "click" === n &&
                    (e =
                      !1 !==
                        l.component.handleDecreaseRate(
                          l.parent.context.$implicit.odds,
                          l.parent.context.index
                        ) && e),
                  e
                );
              },
              null,
              null
            )),
            e.Hb(512, null, i.A, i.B, [e.q, e.r, e.k, e.B]),
            e.pb(
              3,
              278528,
              null,
              0,
              i.l,
              [i.A],
              {
                ngClass: [0, "ngClass"],
              },
              null
            ),
          ],
          function (l, n) {
            l(
              n,
              3,
              0,
              null != n.parent.context.$implicit &&
                n.parent.context.$implicit.isFancy
                ? "incre-decre-btn-bg minplsdec"
                : "incre-decre-btn-bg"
            );
          },
          function (l, n) {
            l(
              n,
              1,
              0,
              n.component.isOddsEdited[n.parent.context.index] ||
                (null == n.parent.context.$implicit
                  ? null
                  : n.parent.context.$implicit.isFancy)
            );
          }
        );
      }
      function nl(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              9,
              "input",
              [
                ["class", "bet-input-bg selectable-all"],
                ["noRightClick", ""],
                ["numberOnly", ""],
                ["pattern", "[0-9.]+"],
                ["type", "text"],
              ],
              [
                [8, "id", 0],
                [1, "pattern", 0],
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null],
              ],
              [
                [null, "ngModelChange"],
                [null, "keyup"],
                [null, "input"],
                [null, "blur"],
                [null, "compositionstart"],
                [null, "compositionend"],
                [null, "contextmenu"],
                [null, "keydown"],
              ],
              function (l, n, t) {
                var u = !0,
                  i = l.component;
                return (
                  "input" === n &&
                    (u = !1 !== e.Cb(l, 1)._handleInput(t.target.value) && u),
                  "blur" === n && (u = !1 !== e.Cb(l, 1).onTouched() && u),
                  "compositionstart" === n &&
                    (u = !1 !== e.Cb(l, 1)._compositionStart() && u),
                  "compositionend" === n &&
                    (u =
                      !1 !== e.Cb(l, 1)._compositionEnd(t.target.value) && u),
                  "contextmenu" === n &&
                    (u = !1 !== e.Cb(l, 8).onRightClick(t) && u),
                  "keydown" === n && (u = !1 !== e.Cb(l, 9).onKeyDown(t) && u),
                  "ngModelChange" === n &&
                    (u =
                      !1 !==
                        (l.parent.context.$implicit.runs
                          ? l.parent.context.$implicit.runs
                          : (l.parent.context.$implicit.odds = t)) && u),
                  "keyup" === n &&
                    (u =
                      !1 !==
                        i.isEditOdds(
                          l.parent.context.$implicit,
                          t,
                          l.parent.context.index
                        ) && u),
                  "ngModelChange" === n && (u = !1 !== i.betSlipChange() && u),
                  u
                );
              },
              null,
              null
            )),
            e.pb(1, 16384, null, 0, a.d, [e.B, e.k, [2, a.a]], null, null),
            e.pb(
              2,
              540672,
              null,
              0,
              a.u,
              [],
              {
                pattern: [0, "pattern"],
              },
              null
            ),
            e.Hb(
              1024,
              null,
              a.l,
              function (l) {
                return [l];
              },
              [a.u]
            ),
            e.Hb(
              1024,
              null,
              a.m,
              function (l) {
                return [l];
              },
              [a.d]
            ),
            e.pb(
              5,
              671744,
              null,
              0,
              a.r,
              [
                [8, null],
                [6, a.l],
                [8, null],
                [6, a.m],
              ],
              {
                isDisabled: [0, "isDisabled"],
                model: [1, "model"],
              },
              {
                update: "ngModelChange",
              }
            ),
            e.Hb(2048, null, a.n, null, [a.r]),
            e.pb(7, 16384, null, 0, a.o, [[4, a.n]], null, null),
            e.pb(8, 16384, null, 0, c.a, [], null, null),
            e.pb(9, 16384, null, 0, r.a, [e.k], null, null),
          ],
          function (l, n) {
            var t = n.component;
            l(n, 2, 0, "[0-9.]+"),
              l(
                n,
                5,
                0,
                t.isOddsEdited[n.parent.context.index] ||
                  (null == n.parent.context.$implicit
                    ? null
                    : n.parent.context.$implicit.isFancy),
                n.parent.context.$implicit.runs
                  ? n.parent.context.$implicit.runs
                  : n.parent.context.$implicit.odds
              );
          },
          function (l, n) {
            l(
              n,
              0,
              0,
              "bet-slip-" + n.parent.context.index,
              e.Cb(n, 2).pattern ? e.Cb(n, 2).pattern : null,
              e.Cb(n, 7).ngClassUntouched,
              e.Cb(n, 7).ngClassTouched,
              e.Cb(n, 7).ngClassPristine,
              e.Cb(n, 7).ngClassDirty,
              e.Cb(n, 7).ngClassValid,
              e.Cb(n, 7).ngClassInvalid,
              e.Cb(n, 7).ngClassPending
            );
          }
        );
      }
      function tl(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              9,
              "input",
              [
                ["class", "bet-input-bg selectable-all"],
                ["noRightClick", ""],
                ["numberOnly", ""],
                ["pattern", "[0-9.]+"],
                ["type", "text"],
              ],
              [
                [8, "id", 0],
                [1, "pattern", 0],
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null],
              ],
              [
                [null, "ngModelChange"],
                [null, "keyup"],
                [null, "input"],
                [null, "blur"],
                [null, "compositionstart"],
                [null, "compositionend"],
                [null, "contextmenu"],
                [null, "keydown"],
              ],
              function (l, n, t) {
                var u = !0,
                  i = l.component;
                return (
                  "input" === n &&
                    (u = !1 !== e.Cb(l, 1)._handleInput(t.target.value) && u),
                  "blur" === n && (u = !1 !== e.Cb(l, 1).onTouched() && u),
                  "compositionstart" === n &&
                    (u = !1 !== e.Cb(l, 1)._compositionStart() && u),
                  "compositionend" === n &&
                    (u =
                      !1 !== e.Cb(l, 1)._compositionEnd(t.target.value) && u),
                  "contextmenu" === n &&
                    (u = !1 !== e.Cb(l, 8).onRightClick(t) && u),
                  "keydown" === n && (u = !1 !== e.Cb(l, 9).onKeyDown(t) && u),
                  "ngModelChange" === n &&
                    (u = !1 !== (l.parent.context.$implicit.runs = t) && u),
                  "keyup" === n &&
                    (u =
                      !1 !==
                        i.isEditOdds(
                          l.parent.context.$implicit,
                          t,
                          l.parent.context.index
                        ) && u),
                  "ngModelChange" === n && (u = !1 !== i.betSlipChange() && u),
                  u
                );
              },
              null,
              null
            )),
            e.pb(1, 16384, null, 0, a.d, [e.B, e.k, [2, a.a]], null, null),
            e.pb(
              2,
              540672,
              null,
              0,
              a.u,
              [],
              {
                pattern: [0, "pattern"],
              },
              null
            ),
            e.Hb(
              1024,
              null,
              a.l,
              function (l) {
                return [l];
              },
              [a.u]
            ),
            e.Hb(
              1024,
              null,
              a.m,
              function (l) {
                return [l];
              },
              [a.d]
            ),
            e.pb(
              5,
              671744,
              null,
              0,
              a.r,
              [
                [8, null],
                [6, a.l],
                [8, null],
                [6, a.m],
              ],
              {
                isDisabled: [0, "isDisabled"],
                model: [1, "model"],
              },
              {
                update: "ngModelChange",
              }
            ),
            e.Hb(2048, null, a.n, null, [a.r]),
            e.pb(7, 16384, null, 0, a.o, [[4, a.n]], null, null),
            e.pb(8, 16384, null, 0, c.a, [], null, null),
            e.pb(9, 16384, null, 0, r.a, [e.k], null, null),
          ],
          function (l, n) {
            var t = n.component;
            l(n, 2, 0, "[0-9.]+"),
              l(
                n,
                5,
                0,
                t.isOddsEdited[n.parent.context.index] ||
                  (null == n.parent.context.$implicit
                    ? null
                    : n.parent.context.$implicit.isFancy),
                n.parent.context.$implicit.runs
              );
          },
          function (l, n) {
            l(
              n,
              0,
              0,
              "bet-slip-" + n.parent.context.index,
              e.Cb(n, 2).pattern ? e.Cb(n, 2).pattern : null,
              e.Cb(n, 7).ngClassUntouched,
              e.Cb(n, 7).ngClassTouched,
              e.Cb(n, 7).ngClassPristine,
              e.Cb(n, 7).ngClassDirty,
              e.Cb(n, 7).ngClassValid,
              e.Cb(n, 7).ngClassInvalid,
              e.Cb(n, 7).ngClassPending
            );
          }
        );
      }
      function el(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              10,
              "input",
              [
                ["class", "bet-input-bg selectable-all"],
                ["noRightClick", ""],
                ["numberOnly", ""],
                ["pattern", "[0-9.]+"],
                ["positiveNumberOnly", ""],
                ["type", "text"],
              ],
              [
                [8, "id", 0],
                [1, "pattern", 0],
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null],
              ],
              [
                [null, "ngModelChange"],
                [null, "keyup"],
                [null, "input"],
                [null, "blur"],
                [null, "compositionstart"],
                [null, "compositionend"],
                [null, "contextmenu"],
                [null, "keydown"],
                [null, "keypress"],
              ],
              function (l, n, t) {
                var u = !0,
                  i = l.component;
                return (
                  "input" === n &&
                    (u = !1 !== e.Cb(l, 1)._handleInput(t.target.value) && u),
                  "blur" === n && (u = !1 !== e.Cb(l, 1).onTouched() && u),
                  "compositionstart" === n &&
                    (u = !1 !== e.Cb(l, 1)._compositionStart() && u),
                  "compositionend" === n &&
                    (u =
                      !1 !== e.Cb(l, 1)._compositionEnd(t.target.value) && u),
                  "contextmenu" === n &&
                    (u = !1 !== e.Cb(l, 8).onRightClick(t) && u),
                  "keydown" === n && (u = !1 !== e.Cb(l, 9).onKeyDown(t) && u),
                  "keypress" === n &&
                    (u = !1 !== e.Cb(l, 10).onInputChange(t) && u),
                  "ngModelChange" === n &&
                    (u = !1 !== (l.parent.context.$implicit.runs = t) && u),
                  "keyup" === n &&
                    (u =
                      !1 !==
                        i.isEditOdds(
                          l.parent.context.$implicit,
                          t,
                          l.parent.context.index
                        ) && u),
                  "ngModelChange" === n && (u = !1 !== i.betSlipChange() && u),
                  u
                );
              },
              null,
              null
            )),
            e.pb(1, 16384, null, 0, a.d, [e.B, e.k, [2, a.a]], null, null),
            e.pb(
              2,
              540672,
              null,
              0,
              a.u,
              [],
              {
                pattern: [0, "pattern"],
              },
              null
            ),
            e.Hb(
              1024,
              null,
              a.l,
              function (l) {
                return [l];
              },
              [a.u]
            ),
            e.Hb(
              1024,
              null,
              a.m,
              function (l) {
                return [l];
              },
              [a.d]
            ),
            e.pb(
              5,
              671744,
              null,
              0,
              a.r,
              [
                [8, null],
                [6, a.l],
                [8, null],
                [6, a.m],
              ],
              {
                isDisabled: [0, "isDisabled"],
                model: [1, "model"],
              },
              {
                update: "ngModelChange",
              }
            ),
            e.Hb(2048, null, a.n, null, [a.r]),
            e.pb(7, 16384, null, 0, a.o, [[4, a.n]], null, null),
            e.pb(8, 16384, null, 0, c.a, [], null, null),
            e.pb(9, 16384, null, 0, r.a, [e.k], null, null),
            e.pb(10, 16384, null, 0, s, [e.k], null, null),
          ],
          function (l, n) {
            var t = n.component;
            l(n, 2, 0, "[0-9.]+"),
              l(
                n,
                5,
                0,
                t.isOddsEdited[n.parent.context.index] ||
                  "Fancy_Market" ==
                    n.parent.context.$implicit.fancyMarketCategory,
                n.parent.context.$implicit.runs
              );
          },
          function (l, n) {
            l(
              n,
              0,
              0,
              "bet-slip-" + n.parent.context.index,
              e.Cb(n, 2).pattern ? e.Cb(n, 2).pattern : null,
              e.Cb(n, 7).ngClassUntouched,
              e.Cb(n, 7).ngClassTouched,
              e.Cb(n, 7).ngClassPristine,
              e.Cb(n, 7).ngClassDirty,
              e.Cb(n, 7).ngClassValid,
              e.Cb(n, 7).ngClassInvalid,
              e.Cb(n, 7).ngClassPending
            );
          }
        );
      }
      function ul(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              5,
              "div",
              [["class", "increment-button"]],
              null,
              null,
              null,
              null,
              null
            )),
            e.Hb(512, null, i.A, i.B, [e.q, e.r, e.k, e.B]),
            e.pb(
              2,
              278528,
              null,
              0,
              i.l,
              [i.A],
              {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"],
              },
              null
            ),
            (l()(),
            e.qb(
              3,
              0,
              null,
              null,
              2,
              "input",
              [
                ["class", "btn-radius incre-decre-btn-bg"],
                ["type", "button"],
                ["value", "+"],
              ],
              [[8, "disabled", 0]],
              [[null, "click"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "click" === n &&
                    (e =
                      !1 !==
                        l.component.handleIncreaseRate(
                          l.parent.context.$implicit.odds,
                          l.parent.context.index
                        ) && e),
                  e
                );
              },
              null,
              null
            )),
            e.Hb(512, null, i.A, i.B, [e.q, e.r, e.k, e.B]),
            e.pb(
              5,
              278528,
              null,
              0,
              i.l,
              [i.A],
              {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"],
              },
              null
            ),
          ],
          function (l, n) {
            l(
              n,
              2,
              0,
              "increment-button",
              null != n.parent.context.$implicit &&
                n.parent.context.$implicit.isFancy
                ? "disablepls"
                : "increment-button"
            ),
              l(
                n,
                5,
                0,
                "btn-radius incre-decre-btn-bg",
                null != n.parent.context.$implicit &&
                  n.parent.context.$implicit.isFancy
                  ? "btn-radius incre-decre-btn-bg minplsdec"
                  : "btn-radius incre-decre-btn-bg"
              );
          },
          function (l, n) {
            l(
              n,
              3,
              0,
              n.component.isOddsEdited[n.parent.context.index] ||
                (null == n.parent.context.$implicit
                  ? null
                  : n.parent.context.$implicit.isFancy)
            );
          }
        );
      }
      function il(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              3,
              "a",
              [["href", "javascript:void(0)"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(1, null, ["", ""])),
            e.Gb(2, 1),
            e.Gb(3, 2),
          ],
          null,
          function (l, n) {
            var t = n.component,
              u = t.minStakeError[n.parent.context.index]
                ? "Min:" +
                  e.Lb(
                    n,
                    1,
                    0,
                    l(
                      n,
                      2,
                      0,
                      e.Cb(n.parent.parent.parent, 6),
                      null == n.parent.context.$implicit
                        ? null
                        : n.parent.context.$implicit.minStake
                    )
                  )
                : t.maxStakeError[n.parent.context.index]
                ? "Max:" +
                  e.Lb(
                    n,
                    1,
                    0,
                    l(
                      n,
                      3,
                      0,
                      e.Cb(n.parent.parent.parent, 3),
                      null == n.parent.context.$implicit
                        ? null
                        : n.parent.context.$implicit.maxStake,
                      "noDeciaml"
                    )
                  )
                : "";
            l(n, 1, 0, u);
          }
        );
      }
      function al(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              2,
              "button",
              [["style", "flex: 1 25%; width: inherit !important;"]],
              null,
              [[null, "click"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "click" === n &&
                    (e =
                      !1 !==
                        l.component.setBetPrice(
                          l.context.$implicit.price,
                          l.parent.context.index
                        ) && e),
                  e
                );
              },
              null,
              null
            )),
            (l()(), e.Kb(1, null, ["", ""])),
            e.Gb(2, 1),
          ],
          null,
          function (l, n) {
            var t =
              "+clear" == n.context.$implicit.val
                ? "clear"
                : e.Lb(
                    n,
                    1,
                    0,
                    l(
                      n,
                      2,
                      0,
                      e.Cb(n.parent.parent.parent, 1),
                      n.context.$implicit.val
                    )
                  );
            l(n, 1, 0, t);
          }
        );
      }
      function cl(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              2,
              "div",
              [["style", "padding-left:10px;"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              0,
              "input",
              [["type", "checkbox"]],
              [[8, "checked", 0]],
              [[null, "change"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "change" === n &&
                    (e =
                      !1 !== l.component.acceptAnyOdds(t.target.checked) && e),
                  e
                );
              },
              null,
              null
            )),
            (l()(), e.Kb(-1, null, [" Accept Any Odds "])),
          ],
          null,
          function (l, n) {
            l(n, 1, 0, n.component.acceptanyOddsFN);
          }
        );
      }
      function ol(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              2,
              "div",
              [["style", "padding-left:10px;"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              0,
              "input",
              [["type", "checkbox"]],
              [[8, "checked", 0]],
              [[null, "change"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "change" === n &&
                    (e =
                      !1 !== l.component.acceptAnyOdds(t.target.checked) && e),
                  e
                );
              },
              null,
              null
            )),
            (l()(), e.Kb(-1, null, [" Accept Any Odds "])),
          ],
          null,
          function (l, n) {
            l(n, 1, 0, n.component.acceptanyOddsBM);
          }
        );
      }
      function sl(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              2,
              "div",
              [["style", "padding-left:10px;"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              0,
              "input",
              [["type", "checkbox"]],
              [[8, "checked", 0]],
              [[null, "change"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "change" === n &&
                    (e =
                      !1 !== l.component.acceptAnyOdds(t.target.checked) && e),
                  e
                );
              },
              null,
              null
            )),
            (l()(), e.Kb(-1, null, [" Accept Any Odds "])),
          ],
          null,
          function (l, n) {
            l(n, 1, 0, n.component.acceptanyOddsMO);
          }
        );
      }
      function rl(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              10,
              "button",
              [["tabindex", "-1"]],
              [
                [8, "id", 0],
                [8, "disabled", 0],
              ],
              [[null, "click"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "click" === n &&
                    (e =
                      !1 !==
                        l.component.savePlaceBetWeb(
                          l.parent.parent.parent.context.$implicit,
                          l.parent.parent.parent.context.index,
                          t
                        ) && e),
                  e
                );
              },
              null,
              null
            )),
            (l()(), e.Kb(-1, null, ["PLACE BET "])),
            (l()(),
            e.qb(
              2,
              0,
              null,
              null,
              8,
              ":svg:svg",
              [
                ["_ngcontent-lgm-c4", ""],
                ["viewBox", "0 0 9.16 17.09"],
                ["width", "8"],
                ["xmlns", "http://www.w3.org/2000/svg"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              3,
              0,
              null,
              null,
              2,
              ":svg:defs",
              [["_ngcontent-lgm-c4", ""]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              4,
              0,
              null,
              null,
              1,
              ":svg:style",
              [["_ngcontent-lgm-c4", ""]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.Kb(-1, null, [
              ".cls-1ajsdlkfj{fill:none !important;stroke-linecap:round;stroke-linejoin:round;stroke-width:4px;}",
            ])),
            (l()(),
            e.qb(
              6,
              0,
              null,
              null,
              1,
              ":svg:title",
              [["_ngcontent-lgm-c4", ""]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(-1, null, ["Asset 4"])),
            (l()(),
            e.qb(
              8,
              0,
              null,
              null,
              2,
              ":svg:g",
              [
                ["_ngcontent-lgm-c4", ""],
                ["data-name", "Layer 2"],
                ["id", "Layer_2"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              9,
              0,
              null,
              null,
              1,
              ":svg:g",
              [
                ["_ngcontent-lgm-c4", ""],
                ["data-name", "Layer 1"],
                ["id", "Layer_1-2"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              10,
              0,
              null,
              null,
              0,
              ":svg:polyline",
              [
                ["_ngcontent-lgm-c4", ""],
                ["class", "cls-1ajsdlkfj"],
                ["points", "1.42 15.68 7.74 8.67 1.42 1.42"],
                ["style", "stroke: var(--casino-color) !important;"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
          ],
          null,
          function (l, n) {
            var t = n.component;
            l(
              n,
              0,
              0,
              e.ub(1, "", t.randomId + 200, ""),
              t.betAPI ||
                t.minStakeError[n.parent.parent.parent.context.index] ||
                t.maxStakeError[n.parent.parent.parent.context.index]
            );
          }
        );
      }
      function pl(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              9,
              "button",
              [["tabindex", "-1"]],
              [
                [8, "id", 0],
                [8, "disabled", 0],
              ],
              [[null, "click"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "click" === n &&
                    (e =
                      !1 !==
                        l.component.handleFancyBetPlaceWeb(
                          l.parent.parent.parent.context.$implicit,
                          l.parent.parent.parent.context.index,
                          t
                        ) && e),
                  e
                );
              },
              null,
              null
            )),
            (l()(), e.Kb(-1, null, [" PLACE BET "])),
            (l()(),
            e.qb(
              2,
              0,
              null,
              null,
              7,
              ":svg:svg",
              [
                ["_ngcontent-lgm-c4", ""],
                ["viewBox", "0 0 9.16 17.09"],
                ["width", "8"],
                ["xmlns", "http://www.w3.org/2000/svg"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              3,
              0,
              null,
              null,
              2,
              ":svg:defs",
              [["_ngcontent-lgm-c4", ""]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              4,
              0,
              null,
              null,
              1,
              ":svg:style",
              [["_ngcontent-lgm-c4", ""]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.Kb(-1, null, [
              ".cls-1ajsdlkfj{fill:none !important;stroke-linecap:round;stroke-linejoin:round;stroke-width:4px;}",
            ])),
            (l()(),
            e.qb(
              6,
              0,
              null,
              null,
              0,
              ":svg:title",
              [["_ngcontent-lgm-c4", ""]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              7,
              0,
              null,
              null,
              2,
              ":svg:g",
              [
                ["_ngcontent-lgm-c4", ""],
                ["data-name", "Layer 2"],
                ["id", "Layer_2"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              8,
              0,
              null,
              null,
              1,
              ":svg:g",
              [
                ["_ngcontent-lgm-c4", ""],
                ["data-name", "Layer 1"],
                ["id", "Layer_1-2"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              9,
              0,
              null,
              null,
              0,
              ":svg:polyline",
              [
                ["_ngcontent-lgm-c4", ""],
                ["class", "cls-1ajsdlkfj"],
                ["points", "1.42 15.68 7.74 8.67 1.42 1.42"],
                ["style", "stroke: var(--casino-color) !important;"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
          ],
          null,
          function (l, n) {
            var t = n.component;
            l(
              n,
              0,
              0,
              e.ub(1, "", t.randomId + 10, ""),
              t.betAPI ||
                t.minStakeError[n.parent.parent.parent.context.index] ||
                t.maxStakeError[n.parent.parent.parent.context.index]
            );
          }
        );
      }
      function bl(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              0,
              "input",
              [
                ["type", "button"],
                ["value", "Update Bet"],
              ],
              [
                [8, "id", 0],
                [8, "disabled", 0],
              ],
              [[null, "click"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "click" === n &&
                    (e =
                      !1 !==
                        l.component.updatePlaceBet(
                          l.parent.parent.parent.context.$implicit,
                          l.parent.parent.parent.context.index
                        ) && e),
                  e
                );
              },
              null,
              null
            )),
          ],
          null,
          function (l, n) {
            var t = n.component;
            l(
              n,
              0,
              0,
              e.ub(1, "", t.randomId + 20, ""),
              t.betAPI ||
                t.minStakeError[n.parent.parent.parent.context.index] ||
                t.maxStakeError[n.parent.parent.parent.context.index]
            );
          }
        );
      }
      function dl(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              6,
              "div",
              [["class", "place-bet"]],
              [[8, "id", 0]],
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, rl)),
            e.pb(
              2,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, pl)),
            e.pb(
              4,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, bl)),
            e.pb(
              6,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
          ],
          function (l, n) {
            var t = n.component;
            l(
              n,
              2,
              0,
              n.parent.parent.context.$implicit.action ==
                t.object.getConstants().ACTIONS.ADD &&
                !n.parent.parent.context.$implicit.isFancy
            ),
              l(
                n,
                4,
                0,
                n.parent.parent.context.$implicit.action ==
                  t.object.getConstants().ACTIONS.ADD &&
                  n.parent.parent.context.$implicit.isFancy
              ),
              l(
                n,
                6,
                0,
                n.parent.parent.context.$implicit.action ==
                  t.object.getConstants().ACTIONS.EDIT
              );
          },
          function (l, n) {
            l(n, 0, 0, e.ub(1, "", n.component.randomId + 150, ""));
          }
        );
      }
      function gl(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              2,
              "div",
              [["class", "col-md-6 pr-12"]],
              [[8, "id", 0]],
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, dl)),
            e.pb(
              2,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
          ],
          function (l, n) {
            l(
              n,
              2,
              0,
              n.component.object.getLoginInstance().state.writeprivilege
            );
          },
          function (l, n) {
            l(n, 0, 0, e.ub(1, "", n.component.randomId + 500, ""));
          }
        );
      }
      function ml(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              76,
              "div",
              [["class", "lay-container text-left "]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, D)),
            e.pb(
              2,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, K)),
            e.pb(
              4,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, F)),
            e.pb(
              6,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, R)),
            e.pb(
              8,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(),
            e.qb(
              9,
              0,
              null,
              null,
              16,
              "div",
              [["class", "row margin-0 padding-0 bet-slip-div"]],
              [[8, "id", 0]],
              null,
              null,
              null,
              null
            )),
            e.Hb(512, null, i.A, i.B, [e.q, e.r, e.k, e.B]),
            e.pb(
              11,
              278528,
              null,
              0,
              i.l,
              [i.A],
              {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"],
              },
              null
            ),
            (l()(),
            e.qb(
              12,
              0,
              null,
              null,
              9,
              "div",
              [["class", "col-md-8 padding-0 taitleminanan"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, U)),
            e.pb(
              14,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, G)),
            e.pb(
              16,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(),
            e.qb(
              17,
              0,
              null,
              null,
              4,
              "div",
              [["class", "lay-team display-ib"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, H)),
            e.pb(
              19,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, V)),
            e.pb(
              21,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, W)),
            e.pb(
              23,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, Z)),
            e.pb(
              25,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, Q)),
            e.pb(
              27,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(),
            e.qb(
              28,
              0,
              null,
              null,
              36,
              "div",
              [["class", "wrapper_button"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              29,
              0,
              null,
              null,
              32,
              "div",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              30,
              0,
              null,
              null,
              14,
              "div",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(31, 0, null, null, 1, "p", [], null, null, null, null, null)),
            (l()(), e.Kb(32, null, ["", ""])),
            (l()(),
            e.qb(
              33,
              0,
              null,
              null,
              11,
              "div",
              [["class", "buttons"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, ll)),
            e.pb(
              35,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(),
            e.qb(
              36,
              0,
              null,
              null,
              6,
              "div",
              [["class", "input-value display-ib"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, nl)),
            e.pb(
              38,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, tl)),
            e.pb(
              40,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, el)),
            e.pb(
              42,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, ul)),
            e.pb(
              44,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(),
            e.qb(
              45,
              0,
              null,
              null,
              1,
              "p",
              [["class", "stakecls"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(-1, null, ["Stake"])),
            (l()(),
            e.qb(
              47,
              0,
              null,
              null,
              14,
              "div",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              48,
              0,
              [
                [3, 0],
                ["odds", 1],
              ],
              null,
              9,
              "input",
              [
                ["appBlockCopyPaste", ""],
                ["appPrefixFocusAndSelect", ""],
                ["autocomplete", "off"],
                ["class", "text-center input-value-2 bet-input-bg"],
                ["maxlength", "8"],
                ["noRightClick", ""],
                [
                  "onkeypress",
                  "return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))",
                ],
                ["type", "text"],
              ],
              [
                [8, "id", 0],
                [1, "maxlength", 0],
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null],
              ],
              [
                [null, "ngModelChange"],
                [null, "keyup"],
                [null, "input"],
                [null, "blur"],
                [null, "compositionstart"],
                [null, "compositionend"],
                [null, "contextmenu"],
                [null, "paste"],
                [null, "copy"],
                [null, "cut"],
              ],
              function (l, n, t) {
                var u = !0,
                  i = l.component;
                return (
                  "input" === n &&
                    (u = !1 !== e.Cb(l, 49)._handleInput(t.target.value) && u),
                  "blur" === n && (u = !1 !== e.Cb(l, 49).onTouched() && u),
                  "compositionstart" === n &&
                    (u = !1 !== e.Cb(l, 49)._compositionStart() && u),
                  "compositionend" === n &&
                    (u =
                      !1 !== e.Cb(l, 49)._compositionEnd(t.target.value) && u),
                  "contextmenu" === n &&
                    (u = !1 !== e.Cb(l, 56).onRightClick(t) && u),
                  "paste" === n && (u = !1 !== e.Cb(l, 57).blockPaste(t) && u),
                  "copy" === n && (u = !1 !== e.Cb(l, 57).blockCopy(t) && u),
                  "cut" === n && (u = !1 !== e.Cb(l, 57).blockCut(t) && u),
                  "ngModelChange" === n &&
                    (u = !1 !== (l.context.$implicit.exchangeStake = t) && u),
                  "ngModelChange" === n && (u = !1 !== i.betSlipChange() && u),
                  "keyup" === n &&
                    (u =
                      !1 !==
                        i.isStakeEdit(
                          l.context.$implicit,
                          t,
                          l.context.index
                        ) && u),
                  u
                );
              },
              null,
              null
            )),
            e.pb(49, 16384, null, 0, a.d, [e.B, e.k, [2, a.a]], null, null),
            e.pb(
              50,
              540672,
              null,
              0,
              a.j,
              [],
              {
                maxlength: [0, "maxlength"],
              },
              null
            ),
            e.Hb(
              1024,
              null,
              a.l,
              function (l) {
                return [l];
              },
              [a.j]
            ),
            e.Hb(
              1024,
              null,
              a.m,
              function (l) {
                return [l];
              },
              [a.d]
            ),
            e.pb(
              53,
              671744,
              null,
              0,
              a.r,
              [
                [8, null],
                [6, a.l],
                [8, null],
                [6, a.m],
              ],
              {
                isDisabled: [0, "isDisabled"],
                model: [1, "model"],
              },
              {
                update: "ngModelChange",
              }
            ),
            e.Hb(2048, null, a.n, null, [a.r]),
            e.pb(55, 16384, null, 0, a.o, [[4, a.n]], null, null),
            e.pb(56, 16384, null, 0, c.a, [], null, null),
            e.pb(57, 16384, null, 0, o.a, [], null, null),
            (l()(),
            e.qb(
              58,
              0,
              null,
              null,
              3,
              "div",
              [["class", "dropdown"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              59,
              0,
              null,
              null,
              2,
              "div",
              [
                ["class", "myDropdown"],
                ["id", "myDropdown"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, il)),
            e.pb(
              61,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(),
            e.qb(
              62,
              0,
              null,
              null,
              2,
              "div",
              [
                ["class", "row margin-0 padding-0 add-bet "],
                [
                  "style",
                  "display: flex;\n                                justify-content: space-between;\n                                flex-wrap: wrap;",
                ],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, al)),
            e.pb(
              64,
              278528,
              null,
              0,
              i.m,
              [e.N, e.J, e.q],
              {
                ngForOf: [0, "ngForOf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, cl)),
            e.pb(
              66,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, ol)),
            e.pb(
              68,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, sl)),
            e.pb(
              70,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(),
            e.qb(
              71,
              0,
              null,
              null,
              5,
              "div",
              [["class", "row margin-0 padding-top-10 padding-bottom-10"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              72,
              0,
              null,
              null,
              2,
              "div",
              [["class", "col-md-6 pr-12 pl-12"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              73,
              0,
              null,
              null,
              1,
              "div",
              [["class", "cancel-order"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              74,
              0,
              null,
              null,
              0,
              "input",
              [
                ["type", "button"],
                ["value", "Cancel"],
              ],
              null,
              [[null, "click"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "click" === n &&
                    (e =
                      !1 !== l.component.handleCancelBet(l.context.index) && e),
                  e
                );
              },
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, gl)),
            e.pb(
              76,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
          ],
          function (l, n) {
            var t = n.component;
            l(n, 2, 0, t.minMaxErr[n.context.index]),
              l(n, 4, 0, t.sameBetErr[n.context.index]),
              l(n, 6, 0, t.maxStakeError[n.context.index]),
              l(n, 8, 0, t.minStakeError[n.context.index]),
              l(
                n,
                11,
                0,
                "row margin-0 padding-0 bet-slip-div",
                0 == n.context.$implicit.sideType ||
                  2 == n.context.$implicit.sideType
                  ? "back-profit-bg"
                  : "lay-profit-bg"
              ),
              l(n, 14, 0, !n.context.$implicit.isFancy),
              l(n, 16, 0, n.context.$implicit.isFancy),
              l(n, 19, 0, n.context.$implicit.isFancy),
              l(n, 21, 0, !n.context.$implicit.isFancy),
              l(
                n,
                23,
                0,
                0 == n.context.$implicit.sideType ||
                  2 == n.context.$implicit.sideType
              ),
              l(
                n,
                25,
                0,
                3 == n.context.$implicit.sideType ||
                  1 == n.context.$implicit.sideType
              ),
              l(
                n,
                27,
                0,
                (null == n.context.$implicit
                  ? null
                  : n.context.$implicit.action) !=
                  t.object.getConstants().ACTIONS.EDIT
              ),
              l(
                n,
                35,
                0,
                "Khado_Market" != n.context.$implicit.fancyMarketCategory
              ),
              l(
                n,
                38,
                0,
                "Khado_Market" != n.context.$implicit.fancyMarketCategory &&
                  "Lucky_Num_Market" != n.context.$implicit.fancyMarketCategory
              ),
              l(
                n,
                40,
                0,
                "Lucky_Num_Market" == n.context.$implicit.fancyMarketCategory
              ),
              l(
                n,
                42,
                0,
                "Khado_Market" == n.context.$implicit.fancyMarketCategory
              ),
              l(
                n,
                44,
                0,
                "Khado_Market" != n.context.$implicit.fancyMarketCategory
              ),
              l(n, 50, 0, "8"),
              l(
                n,
                53,
                0,
                t.isStakeEdited[n.context.index] || t.isdemoAcc,
                n.context.$implicit.exchangeStake
              ),
              l(
                n,
                61,
                0,
                t.minStakeError[n.context.index] ||
                  t.maxStakeError[n.context.index]
              ),
              l(n, 64, 0, t.betSlip.betPriceList),
              l(
                n,
                66,
                0,
                "Fancy_Market" == n.context.$implicit.fancyMarketCategory ||
                  "PP_Market" == n.context.$implicit.fancyMarketCategory ||
                  "Lucky_Num_Market" == n.context.$implicit.fancyMarketCategory
              ),
              l(
                n,
                68,
                0,
                "Bookmaker_Market" == n.context.$implicit.fancyMarketCategory ||
                  "Bookmaker_Disc" == n.context.$implicit.fancyMarketCategory
              ),
              l(
                n,
                70,
                0,
                "MATCH_ODDS" == n.context.$implicit.fancyMarketCategory ||
                  "OTHER_MKTS" == n.context.$implicit.fancyMarketCategory
              ),
              l(n, 76, 0, t.object.getLoginInstance().getIsLogin());
          },
          function (l, n) {
            l(n, 9, 0, "slip-" + n.context.index),
              l(
                n,
                32,
                0,
                "Khado_Market" ==
                  (null == n.context.$implicit
                    ? null
                    : n.context.$implicit.fancyMarketCategory)
                  ? "Runs : " +
                      (null == n.context.$implicit
                        ? null
                        : n.context.$implicit.khado)
                  : "Lucky_Num_Market" ==
                    n.context.$implicit.fancyMarketCategory
                  ? "Runs"
                  : n.context.$implicit.runs
                  ? "Runs"
                  : "Odds"
              ),
              l(
                n,
                48,
                0,
                "bet-stake-" + n.context.index,
                e.Cb(n, 50).maxlength ? e.Cb(n, 50).maxlength : null,
                e.Cb(n, 55).ngClassUntouched,
                e.Cb(n, 55).ngClassTouched,
                e.Cb(n, 55).ngClassPristine,
                e.Cb(n, 55).ngClassDirty,
                e.Cb(n, 55).ngClassValid,
                e.Cb(n, 55).ngClassInvalid,
                e.Cb(n, 55).ngClassPending
              );
          }
        );
      }
      function hl(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              3,
              "div",
              [["class", "available-bets available-bet-bg"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              2,
              "div",
              [["class", "col-md-12 margin-0 padding-0  "]],
              null,
              [
                [null, "mousemove"],
                [null, "mouseleave"],
              ],
              function (l, n, t) {
                var e = !0,
                  u = l.component;
                return (
                  "mousemove" === n && (e = !1 !== u.onMouseMove(t) && e),
                  "mouseleave" === n && (e = !1 !== u.onMouseLeave(t) && e),
                  e
                );
              },
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, ml)),
            e.pb(
              3,
              278528,
              null,
              0,
              i.m,
              [e.N, e.J, e.q],
              {
                ngForOf: [0, "ngForOf"],
              },
              null
            ),
          ],
          function (l, n) {
            l(n, 3, 0, n.component.betSlip.slipList);
          },
          null
        );
      }
      function fl(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              5,
              "div",
              [["class", "empty-cartc"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              4,
              "div",
              [["class", "maincardemp"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              2,
              0,
              null,
              null,
              0,
              "img",
              [
                ["alt", ""],
                ["src", "assets/images/empty-cart.png"],
                ["srcset", ""],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(3, 0, null, null, 2, "h5", [], null, null, null, null, null)),
            (l()(), e.Kb(4, null, ["", ""])),
            e.Eb(131072, u.j, [u.k, e.h]),
          ],
          null,
          function (l, n) {
            l(
              n,
              4,
              0,
              e.Lb(
                n,
                4,
                0,
                e
                  .Cb(n, 5)
                  .transform(
                    "Click on the odds to add selections to the betslip"
                  )
              )
            );
          }
        );
      }
      function xl(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              3,
              "button",
              [["class", "btn-delete"]],
              null,
              [[null, "click"]],
              function (l, n, t) {
                var e = !0,
                  u = l.component;
                return (
                  "click" === n &&
                    (e =
                      !1 !==
                        u.cancelBet(
                          null == u.betSlip.playerSlipList
                            ? null
                            : u.betSlip.playerSlipList.unMatchedTicketsByEvents
                        ) && e),
                  e
                );
              },
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              0,
              "img",
              [["src", "assets/images/delete-white.svg"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              2,
              0,
              null,
              null,
              1,
              "span",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(-1, null, ["Cancel All"])),
          ],
          null,
          null
        );
      }
      function Cl(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              3,
              "option",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            e.pb(
              1,
              147456,
              null,
              0,
              a.s,
              [e.k, e.B, [8, null]],
              {
                value: [0, "value"],
              },
              null
            ),
            e.pb(
              2,
              147456,
              null,
              0,
              a.E,
              [e.k, e.B, [8, null]],
              {
                value: [0, "value"],
              },
              null
            ),
            (l()(), e.Kb(3, null, [" ", ""])),
          ],
          function (l, n) {
            l(n, 1, 0, n.context.$implicit.eventId),
              l(n, 2, 0, n.context.$implicit.eventId);
          },
          function (l, n) {
            l(
              n,
              3,
              0,
              null == n.context.$implicit ? null : n.context.$implicit.eventName
            );
          }
        );
      }
      function kl(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              1,
              "div",
              [["class", "edit-bg"]],
              null,
              [[null, "click"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "click" === n &&
                    (e =
                      !1 !==
                        l.component.attachUnMatchedBet(
                          l.parent.context.$implicit
                        ) && e),
                  e
                );
              },
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              0,
              "img",
              [
                ["class", "edit"],
                ["src", "assets/images/edit.svg"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
          ],
          null,
          null
        );
      }
      function vl(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              1,
              "div",
              [["class", "delete-bg"]],
              null,
              [[null, "click"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "click" === n &&
                    (e =
                      !1 !==
                        l.component.cancelBet(l.parent.context.$implicit) && e),
                  e
                );
              },
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              0,
              "img",
              [
                ["class", "delete"],
                ["src", "assets/images/delete2.svg"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
          ],
          null,
          null
        );
      }
      function Ml(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              6,
              "tr",
              [["class", "faded-text"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              1,
              "td",
              [
                ["colspan", "2"],
                ["style", "padding: 0; text-align: center;"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(2, null, ["Ref:", ""])),
            (l()(),
            e.qb(
              3,
              0,
              null,
              null,
              1,
              "td",
              [
                ["class", "text-center"],
                ["colspan", "3"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(4, null, ["", ""])),
            (l()(),
            e.qb(5, 0, null, null, 0, "td", [], null, null, null, null, null)),
            (l()(),
            e.qb(6, 0, null, null, 0, "td", [], null, null, null, null, null)),
          ],
          null,
          function (l, n) {
            l(n, 2, 0, n.parent.context.$implicit.id),
              l(
                n,
                4,
                0,
                null == n.parent.context.$implicit
                  ? null
                  : n.parent.context.$implicit.placeDate
              );
          }
        );
      }
      function yl(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              23,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              22,
              "tbody",
              [["class", "bb-4"]],
              null,
              null,
              null,
              null,
              null
            )),
            e.Hb(512, null, i.A, i.B, [e.q, e.r, e.k, e.B]),
            e.pb(
              3,
              278528,
              null,
              0,
              i.l,
              [i.A],
              {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"],
              },
              null
            ),
            (l()(),
            e.qb(4, 0, null, null, 17, "tr", [], null, null, null, null, null)),
            (l()(),
            e.qb(
              5,
              0,
              null,
              null,
              2,
              "td",
              [["colspan", "2"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(6, null, ["", ""])),
            e.Eb(0, i.u, []),
            (l()(),
            e.qb(
              8,
              0,
              null,
              null,
              2,
              "td",
              [["class", "text-center"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(9, null, ["", ""])),
            e.Gb(10, 1),
            (l()(),
            e.qb(
              11,
              0,
              null,
              null,
              1,
              "td",
              [["class", "text-center"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(12, null, ["", ""])),
            (l()(),
            e.qb(
              13,
              0,
              null,
              null,
              2,
              "td",
              [["class", "text-center"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(14, null, [" ", ""])),
            e.Gb(15, 1),
            (l()(),
            e.qb(16, 0, null, null, 2, "td", [], null, null, null, null, null)),
            (l()(), e.fb(16777216, null, null, 1, null, kl)),
            e.pb(
              18,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(),
            e.qb(19, 0, null, null, 2, "td", [], null, null, null, null, null)),
            (l()(), e.fb(16777216, null, null, 1, null, vl)),
            e.pb(
              21,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, Ml)),
            e.pb(
              23,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
          ],
          function (l, n) {
            var t = n.component;
            l(
              n,
              3,
              0,
              "bb-4",
              0 == n.context.$implicit.sideType ? "back" : "lay"
            ),
              l(n, 18, 0, t.object.getLoginInstance().state.writeprivilege),
              l(n, 21, 0, t.object.getLoginInstance().state.writeprivilege),
              l(n, 23, 0, t.showUnmatchRefDate);
          },
          function (l, n) {
            l(
              n,
              6,
              0,
              e.Lb(
                n,
                6,
                0,
                e
                  .Cb(n, 7)
                  .transform(
                    null == n.context.$implicit
                      ? null
                      : n.context.$implicit.selectionName,
                    0,
                    9
                  )
              )
            );
            var t = e.Lb(
              n,
              9,
              0,
              l(
                n,
                10,
                0,
                e.Cb(n.parent.parent.parent.parent, 3),
                null == n.context.$implicit ? null : n.context.$implicit.odds
              )
            );
            l(n, 9, 0, t),
              l(
                n,
                12,
                0,
                null == n.context.$implicit
                  ? null
                  : n.context.$implicit.exchangeStake
              );
            var u = e.Lb(
              n,
              14,
              0,
              l(
                n,
                15,
                0,
                e.Cb(n.parent.parent.parent.parent, 5),
                (null == n.context.$implicit
                  ? null
                  : n.context.$implicit.exchangeStake) *
                  ((null == n.context.$implicit
                    ? null
                    : n.context.$implicit.odds) -
                    1)
              )
            );
            l(n, 14, 0, u);
          }
        );
      }
      function $l(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              18,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              17,
              "div",
              [["class", "back-lay-container back-lay-container-matched"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              2,
              0,
              null,
              null,
              3,
              "div",
              [["class", "unmatch-container table-card-header-bg"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              3,
              0,
              null,
              null,
              2,
              "div",
              [["class", "unmatch-text"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(4, null, [" ", " "])),
            e.Gb(5, 1),
            (l()(),
            e.qb(
              6,
              0,
              null,
              null,
              12,
              "table",
              [["class", "table-responsive"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              7,
              0,
              null,
              null,
              9,
              "thead",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(8, 0, null, null, 8, "tr", [], null, null, null, null, null)),
            (l()(),
            e.qb(
              9,
              0,
              null,
              null,
              0,
              "th",
              [["colspan", "2"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              10,
              0,
              null,
              null,
              1,
              "th",
              [["class", "text-center"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(-1, null, ["Odds"])),
            (l()(),
            e.qb(
              12,
              0,
              null,
              null,
              1,
              "th",
              [["class", "text-center"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(-1, null, ["Stakes"])),
            (l()(),
            e.qb(
              14,
              0,
              null,
              null,
              1,
              "th",
              [["class", "text-center"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(-1, null, ["Profits"])),
            (l()(),
            e.qb(
              16,
              0,
              null,
              null,
              0,
              "th",
              [["colspan", "2"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, yl)),
            e.pb(
              18,
              278528,
              null,
              0,
              i.m,
              [e.N, e.J, e.q],
              {
                ngForOf: [0, "ngForOf"],
              },
              null
            ),
          ],
          function (l, n) {
            l(
              n,
              18,
              0,
              null == n.context.$implicit
                ? null
                : n.context.$implicit.marketOrderDetails
            );
          },
          function (l, n) {
            var t =
              null != n.context.$implicit &&
              n.context.$implicit.marketName.includes("_")
                ? (null == n.context.$implicit
                    ? null
                    : n.context.$implicit.marketName.split("_")[0]) +
                  " " +
                  (null == n.context.$implicit
                    ? null
                    : n.context.$implicit.marketName.split("_")[1])
                : e.Lb(
                    n,
                    4,
                    0,
                    l(
                      n,
                      5,
                      0,
                      e.Cb(n.parent.parent.parent, 2),
                      null == n.context.$implicit
                        ? null
                        : n.context.$implicit.marketName
                    )
                  );
            l(n, 4, 0, t);
          }
        );
      }
      function Ol(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              5,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              4,
              "div",
              [["class", "marketone"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              2,
              0,
              null,
              null,
              1,
              "div",
              [["class", "head_text"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(3, null, ["", ""])),
            (l()(), e.fb(16777216, null, null, 1, null, $l)),
            e.pb(
              5,
              278528,
              null,
              0,
              i.m,
              [e.N, e.J, e.q],
              {
                ngForOf: [0, "ngForOf"],
              },
              null
            ),
          ],
          function (l, n) {
            l(
              n,
              5,
              0,
              null == n.context.$implicit
                ? null
                : n.context.$implicit.marketDetails
            );
          },
          function (l, n) {
            l(n, 3, 0, n.context.$implicit.eventName);
          }
        );
      }
      function Il(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              26,
              "div",
              [["class", "col-md-12 col-sm-12 col-xs-12 bet-info"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              22,
              "div",
              [["class", "filters_matching"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              2,
              0,
              null,
              null,
              5,
              "div",
              [["class", "filter_delete"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              3,
              0,
              null,
              null,
              1,
              "div",
              [["class", "heading"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(-1, null, [" Unmatched Bets "])),
            (l()(),
            e.qb(5, 0, null, null, 2, "div", [], null, null, null, null, null)),
            (l()(), e.fb(16777216, null, null, 1, null, xl)),
            e.pb(
              7,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(),
            e.qb(
              8,
              0,
              null,
              null,
              10,
              "div",
              [["class", "filter_dropdown"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              9,
              0,
              null,
              null,
              2,
              "span",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(10, null, ["", ":"])),
            e.Eb(131072, u.j, [u.k, e.h]),
            (l()(),
            e.qb(
              12,
              0,
              null,
              null,
              6,
              "select",
              [],
              null,
              [[null, "change"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "change" === n &&
                    (e = !1 !== l.component.handleEventSearchUnMatch(t) && e),
                  e
                );
              },
              null,
              null
            )),
            (l()(),
            e.qb(
              13,
              0,
              null,
              null,
              3,
              "option",
              [
                ["selected", ""],
                ["value", ""],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            e.pb(
              14,
              147456,
              null,
              0,
              a.s,
              [e.k, e.B, [8, null]],
              {
                value: [0, "value"],
              },
              null
            ),
            e.pb(
              15,
              147456,
              null,
              0,
              a.E,
              [e.k, e.B, [8, null]],
              {
                value: [0, "value"],
              },
              null
            ),
            (l()(), e.Kb(-1, null, ["All"])),
            (l()(), e.fb(16777216, null, null, 1, null, Cl)),
            e.pb(
              18,
              278528,
              null,
              0,
              i.m,
              [e.N, e.J, e.q],
              {
                ngForOf: [0, "ngForOf"],
              },
              null
            ),
            (l()(),
            e.qb(
              19,
              0,
              null,
              null,
              4,
              "div",
              [["class", "filter_checkbox"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              20,
              0,
              null,
              null,
              0,
              "input",
              [["type", "checkbox"]],
              [[8, "checked", 0]],
              [[null, "change"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "change" === n &&
                    (e = !1 !== l.component.showUnmatchRefNo(t) && e),
                  e
                );
              },
              null,
              null
            )),
            (l()(),
            e.qb(
              21,
              0,
              null,
              null,
              2,
              "span",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(22, null, ["", ""])),
            e.Eb(131072, u.j, [u.k, e.h]),
            (l()(), e.fb(16777216, null, null, 1, null, Ol)),
            e.pb(
              25,
              278528,
              null,
              0,
              i.m,
              [e.N, e.J, e.q],
              {
                ngForOf: [0, "ngForOf"],
              },
              null
            ),
            (l()(),
            e.qb(
              26,
              0,
              null,
              null,
              0,
              "div",
              [["class", "boderspr"]],
              null,
              null,
              null,
              null,
              null
            )),
          ],
          function (l, n) {
            var t = n.component;
            l(n, 7, 0, t.object.getLoginInstance().state.writeprivilege),
              l(n, 14, 0, ""),
              l(n, 15, 0, ""),
              l(n, 18, 0, t.unMatchBetListEventName),
              l(n, 25, 0, t.betslipUnMatchTicketsData);
          },
          function (l, n) {
            var t = n.component;
            l(n, 10, 0, e.Lb(n, 10, 0, e.Cb(n, 11).transform("Select Match"))),
              l(n, 20, 0, t.showUnmatchRefDate),
              l(
                n,
                22,
                0,
                e.Lb(n, 22, 0, e.Cb(n, 23).transform("Show Details"))
              );
          }
        );
      }
      function Sl(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              3,
              "option",
              [],
              [[8, "selected", 0]],
              null,
              null,
              null,
              null
            )),
            e.pb(
              1,
              147456,
              null,
              0,
              a.s,
              [e.k, e.B, [8, null]],
              {
                value: [0, "value"],
              },
              null
            ),
            e.pb(
              2,
              147456,
              null,
              0,
              a.E,
              [e.k, e.B, [8, null]],
              {
                value: [0, "value"],
              },
              null
            ),
            (l()(), e.Kb(3, null, [" ", ""])),
          ],
          function (l, n) {
            l(n, 1, 0, n.context.$implicit.eventId),
              l(n, 2, 0, n.context.$implicit.eventId);
          },
          function (l, n) {
            l(
              n,
              0,
              0,
              n.context.$implicit.eventId == n.component.selectdMatchBetListId
            ),
              l(
                n,
                3,
                0,
                null == n.context.$implicit
                  ? null
                  : n.context.$implicit.eventName
              );
          }
        );
      }
      function _l(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              4,
              "div",
              [["class", "filter_checkbox"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              0,
              "input",
              [["type", "checkbox"]],
              [[8, "checked", 0]],
              [[null, "change"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "change" === n && (e = !1 !== l.component.showRefNo(t) && e),
                  e
                );
              },
              null,
              null
            )),
            (l()(),
            e.qb(
              2,
              0,
              null,
              null,
              2,
              "span",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(3, null, ["", ""])),
            e.Eb(131072, u.j, [u.k, e.h]),
          ],
          null,
          function (l, n) {
            l(n, 1, 0, n.component.showRefDate),
              l(n, 3, 0, e.Lb(n, 3, 0, e.Cb(n, 4).transform("Show Details")));
          }
        );
      }
      function ql(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              5,
              "span",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            e.Hb(512, null, i.A, i.B, [e.q, e.r, e.k, e.B]),
            e.pb(
              2,
              278528,
              null,
              0,
              i.l,
              [i.A],
              {
                ngClass: [0, "ngClass"],
              },
              null
            ),
            (l()(), e.Kb(3, null, [" ", "", " "])),
            e.Gb(4, 1),
            e.Gb(5, 1),
          ],
          function (l, n) {
            l(
              n,
              2,
              0,
              0 == n.parent.context.$implicit.sideType ||
                2 == n.parent.context.$implicit.sideType
                ? "tgreen"
                : "tred"
            );
          },
          function (l, n) {
            var t =
                "Meter_Market" ==
                (null == n.parent.context.$implicit
                  ? null
                  : n.parent.context.$implicit.fancyMarketCategory)
                  ? "--"
                  : 0 == n.parent.context.$implicit.sideType ||
                    2 == n.parent.context.$implicit.sideType
                  ? "+"
                  : "Meter_Market" ==
                    (null == n.parent.context.$implicit
                      ? null
                      : n.parent.context.$implicit.fancyMarketCategory)
                  ? ""
                  : "-",
              u =
                "Meter_Market" ==
                (null == n.parent.context.$implicit
                  ? null
                  : n.parent.context.$implicit.fancyMarketCategory)
                  ? ""
                  : e.Lb(
                      n,
                      3,
                      1,
                      "AM" == n.parent.context.$implicit.oddType
                        ? l(
                            n,
                            4,
                            0,
                            e.Cb(
                              n.parent.parent.parent.parent.parent.parent,
                              5
                            ),
                            ((null == n.parent.context.$implicit
                              ? null
                              : n.parent.context.$implicit.odds) /
                              100) *
                              n.parent.context.$implicit.exchangeStake
                          )
                        : l(
                            n,
                            5,
                            0,
                            e.Cb(
                              n.parent.parent.parent.parent.parent.parent,
                              5
                            ),
                            (null == n.parent.context.$implicit
                              ? null
                              : n.parent.context.$implicit.exchangeStake) *
                              (n.parent.context.$implicit.odds - 1)
                          )
                    );
            l(n, 3, 0, t, u);
          }
        );
      }
      function Pl(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              5,
              "span",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            e.Hb(512, null, i.A, i.B, [e.q, e.r, e.k, e.B]),
            e.pb(
              2,
              278528,
              null,
              0,
              i.l,
              [i.A],
              {
                ngClass: [0, "ngClass"],
              },
              null
            ),
            (l()(), e.Kb(3, null, [" ", " ", " "])),
            e.Gb(4, 1),
            e.Gb(5, 1),
          ],
          function (l, n) {
            l(
              n,
              2,
              0,
              0 == n.parent.context.$implicit.sideType ||
                2 == n.parent.context.$implicit.sideType
                ? "tgreen"
                : "tred"
            );
          },
          function (l, n) {
            var t =
                "Meter_Market" ==
                (null == n.parent.context.$implicit
                  ? null
                  : n.parent.context.$implicit.fancyMarketCategory)
                  ? "--"
                  : 0 == n.parent.context.$implicit.sideType ||
                    2 == n.parent.context.$implicit.sideType
                  ? "+"
                  : "-",
              u = e.Lb(
                n,
                3,
                1,
                1 == n.parent.context.$implicit.sideType
                  ? l(
                      n,
                      4,
                      0,
                      e.Cb(n.parent.parent.parent.parent.parent.parent, 5),
                      ((null == n.parent.context.$implicit
                        ? null
                        : n.parent.context.$implicit.odds) /
                        100) *
                        n.parent.context.$implicit.exchangeStake *
                        0.995
                    )
                  : l(
                      n,
                      5,
                      0,
                      e.Cb(n.parent.parent.parent.parent.parent.parent, 5),
                      ((null == n.parent.context.$implicit
                        ? null
                        : n.parent.context.$implicit.odds) /
                        100) *
                        n.parent.context.$implicit.exchangeStake
                    )
              );
            l(n, 3, 0, t, u);
          }
        );
      }
      function Ll(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              5,
              "tr",
              [["class", "faded-text"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              1,
              "td",
              [
                ["colspan", "2"],
                ["style", "padding: 0; text-align: center;"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(2, null, ["Ref:", " "])),
            (l()(),
            e.qb(
              3,
              0,
              null,
              null,
              1,
              "td",
              [
                ["class", "text-center"],
                ["colspan", "2"],
                ["style", "padding: 0;"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(4, null, [" ", ""])),
            (l()(),
            e.qb(
              5,
              0,
              null,
              null,
              0,
              "td",
              [["class", "text-center"]],
              null,
              null,
              null,
              null,
              null
            )),
          ],
          null,
          function (l, n) {
            l(n, 2, 0, n.parent.context.$implicit.id),
              l(
                n,
                4,
                0,
                null == n.parent.context.$implicit
                  ? null
                  : n.parent.context.$implicit.placeDate
              );
          }
        );
      }
      function El(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              27,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              26,
              "tbody",
              [["class", "bb-4"]],
              null,
              null,
              null,
              null,
              null
            )),
            e.Hb(512, null, i.A, i.B, [e.q, e.r, e.k, e.B]),
            e.pb(
              3,
              278528,
              null,
              0,
              i.l,
              [i.A],
              {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"],
              },
              null
            ),
            (l()(),
            e.qb(4, 0, null, null, 21, "tr", [], null, null, null, null, null)),
            (l()(),
            e.qb(
              5,
              0,
              null,
              null,
              5,
              "td",
              [["colspan", "2"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(6, null, [" ", " "])),
            e.Eb(0, i.u, []),
            e.Gb(8, 1),
            e.Eb(0, i.u, []),
            e.Gb(10, 1),
            (l()(),
            e.qb(
              11,
              0,
              null,
              null,
              5,
              "td",
              [["class", "text-center"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(12, null, [" ", " "])),
            e.Gb(13, 1),
            e.Gb(14, 1),
            e.Gb(15, 1),
            e.Gb(16, 1),
            (l()(),
            e.qb(
              17,
              0,
              null,
              null,
              1,
              "td",
              [["class", "text-center"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(18, null, ["", ""])),
            (l()(),
            e.qb(
              19,
              0,
              null,
              null,
              6,
              "td",
              [["class", "text-center"]],
              null,
              null,
              null,
              null,
              null
            )),
            e.Hb(512, null, i.A, i.B, [e.q, e.r, e.k, e.B]),
            e.pb(
              21,
              278528,
              null,
              0,
              i.l,
              [i.A],
              {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, ql)),
            e.pb(
              23,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, Pl)),
            e.pb(
              25,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, Ll)),
            e.pb(
              27,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
          ],
          function (l, n) {
            var t = n.component;
            l(
              n,
              3,
              0,
              "bb-4",
              0 == n.context.$implicit.sideType ||
                2 == n.context.$implicit.sideType
                ? "back"
                : "lay"
            ),
              l(
                n,
                21,
                0,
                "text-center",
                (null == n.context.$implicit
                  ? null
                  : n.context.$implicit.exposure) > 0
                  ? "tgreen"
                  : "tred"
              ),
              l(
                n,
                23,
                0,
                "Bookmaker_Disc" !=
                  (null == n.context.$implicit
                    ? null
                    : n.context.$implicit.fancyMarketCategory)
              ),
              l(
                n,
                25,
                0,
                "Bookmaker_Disc" ==
                  (null == n.context.$implicit
                    ? null
                    : n.context.$implicit.fancyMarketCategory)
              ),
              l(n, 27, 0, t.showRefDate);
          },
          function (l, n) {
            var t =
              "SINGLE" ==
              (null == n.context.$implicit
                ? null
                : n.context.$implicit.runnerNo)
                ? (null == n.context.$implicit
                    ? null
                    : null == n.context.$implicit.marketName
                    ? null
                    : n.context.$implicit.marketName.length) >= 14
                  ? e.Lb(
                      n,
                      6,
                      0,
                      e
                        .Cb(n, 7)
                        .transform(
                          null == n.context.$implicit
                            ? null
                            : n.context.$implicit.marketName,
                          0,
                          14
                        )
                    ) + ".."
                  : e.Lb(
                      n,
                      6,
                      0,
                      l(
                        n,
                        8,
                        0,
                        e.Cb(n.parent.parent.parent.parent.parent, 2),
                        null == n.context.$implicit
                          ? null
                          : n.context.$implicit.marketName
                      )
                    )
                : (null == n.context.$implicit
                    ? null
                    : null == n.context.$implicit.selectionName
                    ? null
                    : n.context.$implicit.selectionName.length) >= 14
                ? e.Lb(
                    n,
                    6,
                    0,
                    e
                      .Cb(n, 9)
                      .transform(
                        null == n.context.$implicit
                          ? null
                          : n.context.$implicit.selectionName,
                        0,
                        14
                      )
                  ) + ".."
                : e.Lb(
                    n,
                    6,
                    0,
                    l(
                      n,
                      10,
                      0,
                      e.Cb(n.parent.parent.parent.parent.parent, 2),
                      null == n.context.$implicit
                        ? null
                        : n.context.$implicit.selectionName
                    )
                  );
            l(n, 6, 0, t);
            var u =
              null != n.context.$implicit && n.context.$implicit.khaduRuns
                ? (null == n.context.$implicit
                    ? null
                    : n.context.$implicit.runs) +
                  ":" +
                  ((null == n.context.$implicit
                    ? null
                    : n.context.$implicit.khaduRuns) +
                    (null == n.context.$implicit
                      ? null
                      : n.context.$implicit.runs)) +
                  "/" +
                  e.Lb(
                    n,
                    12,
                    0,
                    l(
                      n,
                      13,
                      0,
                      e.Cb(n.parent.parent.parent.parent.parent, 3),
                      null == n.context.$implicit
                        ? null
                        : n.context.$implicit.odds
                    )
                  )
                : null != n.context.$implicit && n.context.$implicit.runs
                ? (null == n.context.$implicit
                    ? null
                    : n.context.$implicit.runs) +
                  "/" +
                  e.Lb(
                    n,
                    12,
                    0,
                    l(
                      n,
                      14,
                      0,
                      e.Cb(n.parent.parent.parent.parent.parent, 3),
                      null == n.context.$implicit
                        ? null
                        : n.context.$implicit.odds
                    )
                  )
                : 0 ==
                  (null == n.context.$implicit
                    ? null
                    : n.context.$implicit.runs)
                ? (null == n.context.$implicit
                    ? null
                    : n.context.$implicit.runs) +
                  "/" +
                  e.Lb(
                    n,
                    12,
                    0,
                    l(
                      n,
                      15,
                      0,
                      e.Cb(n.parent.parent.parent.parent.parent, 3),
                      null == n.context.$implicit
                        ? null
                        : n.context.$implicit.odds
                    )
                  )
                : e.Lb(
                    n,
                    12,
                    0,
                    l(
                      n,
                      16,
                      0,
                      e.Cb(n.parent.parent.parent.parent.parent, 3),
                      null == n.context.$implicit
                        ? null
                        : n.context.$implicit.odds
                    )
                  );
            l(n, 12, 0, u),
              l(
                n,
                18,
                0,
                null == n.context.$implicit
                  ? null
                  : n.context.$implicit.exchangeStake
              );
          }
        );
      }
      function Tl(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              19,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              18,
              "div",
              [["class", "back-lay-container-matched"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              2,
              0,
              null,
              null,
              3,
              "div",
              [
                ["class", "match-container table-card-header-bg"],
                ["style", "cursor: pointer;"],
              ],
              null,
              [[null, "click"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "click" === n &&
                    (e =
                      !1 !==
                        l.component.gotoEventdetail(
                          l.parent.context.$implicit
                        ) && e),
                  e
                );
              },
              null,
              null
            )),
            (l()(),
            e.qb(
              3,
              0,
              null,
              null,
              2,
              "div",
              [["class", "unmatch-text"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(4, null, [" ", " "])),
            (l()(),
            e.qb(
              5,
              0,
              null,
              null,
              0,
              "img",
              [
                ["src", "assets/images/blue-arrow.png"],
                ["style", "margin-left: 5px"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              6,
              0,
              null,
              null,
              13,
              "table",
              [["class", "table-responsive"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              7,
              0,
              null,
              null,
              10,
              "thead",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(8, 0, null, null, 9, "tr", [], null, null, null, null, null)),
            (l()(),
            e.qb(
              9,
              0,
              null,
              null,
              2,
              "th",
              [
                ["colspan", "2"],
                ["style", "font-weight: bold;"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(10, null, [" ", " "])),
            e.Gb(11, 1),
            (l()(),
            e.qb(
              12,
              0,
              null,
              null,
              1,
              "th",
              [["class", "text-center"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(13, null, [" ", ""])),
            (l()(),
            e.qb(
              14,
              0,
              null,
              null,
              1,
              "th",
              [["class", "text-center"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(-1, null, ["Stakes"])),
            (l()(),
            e.qb(
              16,
              0,
              null,
              null,
              1,
              "th",
              [["class", "text-center"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(-1, null, ["P&L"])),
            (l()(), e.fb(16777216, null, null, 1, null, El)),
            e.pb(
              19,
              278528,
              null,
              0,
              i.m,
              [e.N, e.J, e.q],
              {
                ngForOf: [0, "ngForOf"],
              },
              null
            ),
          ],
          function (l, n) {
            l(
              n,
              19,
              0,
              null == n.context.$implicit
                ? null
                : n.context.$implicit.marketOrderDetails
            );
          },
          function (l, n) {
            l(n, 4, 0, n.parent.context.$implicit.eventName);
            var t =
              "Match_odds" ==
              (null == n.context.$implicit
                ? null
                : n.context.$implicit.marketName)
                ? "Match odds"
                : null != n.context.$implicit &&
                  n.context.$implicit.marketName.includes("_")
                ? (null == n.context.$implicit
                    ? null
                    : n.context.$implicit.marketName.split("_")[0]) +
                  " " +
                  (null == n.context.$implicit
                    ? null
                    : n.context.$implicit.marketName.split("_")[1])
                : e.Lb(
                    n,
                    10,
                    0,
                    l(
                      n,
                      11,
                      0,
                      e.Cb(n.parent.parent.parent.parent, 2),
                      null == n.context.$implicit
                        ? null
                        : n.context.$implicit.marketName
                    )
                  );
            l(n, 10, 0, t),
              l(
                n,
                13,
                0,
                (null != n.context.$implicit &&
                  null !=
                    n.context.$implicit.marketOrderDetails[n.context.index] &&
                  n.context.$implicit.marketOrderDetails[n.context.index]
                    .runs) ||
                  (null != n.context.$implicit &&
                    null !=
                      n.context.$implicit.marketOrderDetails[n.context.index] &&
                    n.context.$implicit.marketOrderDetails[n.context.index]
                      .khaduRuns)
                  ? "Runs/Odds"
                  : "Odds"
              );
          }
        );
      }
      function wl(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              3,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              2,
              "div",
              [["class", "marketone"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, Tl)),
            e.pb(
              3,
              278528,
              null,
              0,
              i.m,
              [e.N, e.J, e.q],
              {
                ngForOf: [0, "ngForOf"],
              },
              null
            ),
          ],
          function (l, n) {
            l(
              n,
              3,
              0,
              null == n.context.$implicit
                ? null
                : n.context.$implicit.marketDetails
            );
          },
          null
        );
      }
      function Nl(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(0, 0, null, null, 2, "div", [], null, null, null, null, null)),
            (l()(), e.fb(16777216, null, null, 1, null, wl)),
            e.pb(
              2,
              278528,
              null,
              0,
              i.m,
              [e.N, e.J, e.q],
              {
                ngForOf: [0, "ngForOf"],
              },
              null
            ),
          ],
          function (l, n) {
            l(n, 2, 0, n.component.betslipMatchTicketsData);
          },
          null
        );
      }
      function jl(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              24,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              23,
              "tbody",
              [["class", "bb-4"]],
              null,
              null,
              null,
              null,
              null
            )),
            e.Hb(512, null, i.A, i.B, [e.q, e.r, e.k, e.B]),
            e.pb(
              3,
              278528,
              null,
              0,
              i.l,
              [i.A],
              {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"],
              },
              null
            ),
            (l()(),
            e.qb(4, 0, null, null, 19, "tr", [], null, null, null, null, null)),
            (l()(),
            e.qb(
              5,
              0,
              null,
              null,
              5,
              "td",
              [["colspan", "2"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(6, null, [" ", " "])),
            e.Eb(0, i.u, []),
            e.Gb(8, 1),
            e.Eb(0, i.u, []),
            e.Gb(10, 1),
            (l()(),
            e.qb(
              11,
              0,
              null,
              null,
              2,
              "td",
              [["class", "text-center"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(12, null, ["", ""])),
            e.Gb(13, 1),
            (l()(),
            e.qb(
              14,
              0,
              null,
              null,
              2,
              "td",
              [["class", "text-center"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(15, null, ["", " "])),
            e.Gb(16, 1),
            (l()(),
            e.qb(
              17,
              0,
              null,
              null,
              6,
              "td",
              [["class", "text-center"]],
              null,
              null,
              null,
              null,
              null
            )),
            e.Hb(512, null, i.A, i.B, [e.q, e.r, e.k, e.B]),
            e.pb(
              19,
              278528,
              null,
              0,
              i.l,
              [i.A],
              {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"],
              },
              null
            ),
            (l()(),
            e.qb(
              20,
              0,
              null,
              null,
              1,
              "span",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(21, null, ["", ""])),
            (l()(), e.Kb(22, null, ["", " "])),
            e.Gb(23, 1),
            (l()(),
            e.qb(
              24,
              0,
              null,
              null,
              0,
              "tr",
              [["class", "faded-text"]],
              null,
              null,
              null,
              null,
              null
            )),
          ],
          function (l, n) {
            l(
              n,
              3,
              0,
              "bb-4",
              0 ==
                (null == n.context.$implicit
                  ? null
                  : n.context.$implicit.sideType) ||
                2 ==
                  (null == n.context.$implicit
                    ? null
                    : n.context.$implicit.sideType)
                ? "back"
                : "lay"
            ),
              l(
                n,
                19,
                0,
                "text-center",
                (null == n.context.$implicit
                  ? null
                  : n.context.$implicit.totalPL) > 0
                  ? "tgreen"
                  : "tred"
              );
          },
          function (l, n) {
            var t =
              "SINGLE" ==
              (null == n.context.$implicit
                ? null
                : n.context.$implicit.runnerNo)
                ? (null == n.context.$implicit
                    ? null
                    : null == n.context.$implicit.marketName
                    ? null
                    : n.context.$implicit.marketName.length) >= 10
                  ? e.Lb(
                      n,
                      6,
                      0,
                      e
                        .Cb(n, 7)
                        .transform(
                          null == n.context.$implicit
                            ? null
                            : n.context.$implicit.marketName,
                          0,
                          10
                        )
                    ) + ".."
                  : e.Lb(
                      n,
                      6,
                      0,
                      l(
                        n,
                        8,
                        0,
                        e.Cb(n.parent.parent.parent.parent.parent.parent, 2),
                        null == n.context.$implicit
                          ? null
                          : n.context.$implicit.marketName
                      )
                    )
                : (null == n.context.$implicit
                    ? null
                    : null == n.context.$implicit.selectionName
                    ? null
                    : n.context.$implicit.selectionName.length) >= 10
                ? e.Lb(
                    n,
                    6,
                    0,
                    e
                      .Cb(n, 9)
                      .transform(
                        null == n.context.$implicit
                          ? null
                          : n.context.$implicit.selectionName,
                        0,
                        10
                      )
                  ) + ".."
                : e.Lb(
                    n,
                    6,
                    0,
                    l(
                      n,
                      10,
                      0,
                      e.Cb(n.parent.parent.parent.parent.parent.parent, 2),
                      null == n.context.$implicit
                        ? null
                        : n.context.$implicit.selectionName
                    )
                  );
            l(n, 6, 0, t);
            var u = e.Lb(
              n,
              12,
              0,
              l(
                n,
                13,
                0,
                e.Cb(n.parent.parent.parent.parent.parent.parent, 3),
                null == n.context.$implicit
                  ? null
                  : n.context.$implicit.averageOdds
              )
            );
            l(n, 12, 0, u);
            var i = e.Lb(
              n,
              15,
              0,
              l(
                n,
                16,
                0,
                e.Cb(n.parent.parent.parent.parent.parent.parent, 5),
                null == n.context.$implicit
                  ? null
                  : n.context.$implicit.totalexchangeStack
              )
            );
            l(n, 15, 0, i),
              l(
                n,
                21,
                0,
                "Meter_Market" ==
                  (null == n.context.$implicit
                    ? null
                    : n.context.$implicit.fancyMarketCategory)
                  ? "--"
                  : (null == n.context.$implicit
                      ? null
                      : n.context.$implicit.totalPL) > 0
                  ? "+"
                  : "-"
              );
            var a =
              "Meter_Market" ==
              (null == n.context.$implicit
                ? null
                : n.context.$implicit.fancyMarketCategory)
                ? ""
                : e.Lb(
                    n,
                    22,
                    0,
                    l(
                      n,
                      23,
                      0,
                      e.Cb(n.parent.parent.parent.parent.parent.parent, 5),
                      null == n.context.$implicit
                        ? null
                        : n.context.$implicit.totalPL
                    )
                  );
            l(n, 22, 0, a);
          }
        );
      }
      function Al(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              2,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, jl)),
            e.pb(
              2,
              278528,
              null,
              0,
              i.m,
              [e.N, e.J, e.q],
              {
                ngForOf: [0, "ngForOf"],
              },
              null
            ),
            (l()(), e.fb(0, null, null, 0)),
          ],
          function (l, n) {
            l(
              n,
              2,
              0,
              null == n.parent.context.$implicit
                ? null
                : n.parent.context.$implicit.datalay
            );
          },
          null
        );
      }
      function Bl(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              24,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              23,
              "tbody",
              [["class", "bb-4"]],
              null,
              null,
              null,
              null,
              null
            )),
            e.Hb(512, null, i.A, i.B, [e.q, e.r, e.k, e.B]),
            e.pb(
              3,
              278528,
              null,
              0,
              i.l,
              [i.A],
              {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"],
              },
              null
            ),
            (l()(),
            e.qb(4, 0, null, null, 19, "tr", [], null, null, null, null, null)),
            (l()(),
            e.qb(
              5,
              0,
              null,
              null,
              5,
              "td",
              [["colspan", "2"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(6, null, [" ", " "])),
            e.Eb(0, i.u, []),
            e.Gb(8, 1),
            e.Eb(0, i.u, []),
            e.Gb(10, 1),
            (l()(),
            e.qb(
              11,
              0,
              null,
              null,
              2,
              "td",
              [["class", "text-center"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(12, null, ["", ""])),
            e.Gb(13, 1),
            (l()(),
            e.qb(
              14,
              0,
              null,
              null,
              2,
              "td",
              [["class", "text-center"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(15, null, ["", " "])),
            e.Gb(16, 1),
            (l()(),
            e.qb(
              17,
              0,
              null,
              null,
              6,
              "td",
              [["class", "text-center"]],
              null,
              null,
              null,
              null,
              null
            )),
            e.Hb(512, null, i.A, i.B, [e.q, e.r, e.k, e.B]),
            e.pb(
              19,
              278528,
              null,
              0,
              i.l,
              [i.A],
              {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"],
              },
              null
            ),
            (l()(),
            e.qb(
              20,
              0,
              null,
              null,
              1,
              "span",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(21, null, ["", " "])),
            (l()(), e.Kb(22, null, ["", " "])),
            e.Gb(23, 1),
            (l()(),
            e.qb(
              24,
              0,
              null,
              null,
              0,
              "tr",
              [["class", "faded-text"]],
              null,
              null,
              null,
              null,
              null
            )),
          ],
          function (l, n) {
            l(
              n,
              3,
              0,
              "bb-4",
              0 ==
                (null == n.context.$implicit
                  ? null
                  : n.context.$implicit.sideType) ||
                2 ==
                  (null == n.context.$implicit
                    ? null
                    : n.context.$implicit.sideType)
                ? "back"
                : "lay"
            ),
              l(
                n,
                19,
                0,
                "text-center",
                0 == n.context.$implicit.sideType ||
                  2 == n.context.$implicit.sideType
                  ? "tgreen"
                  : "tred"
              );
          },
          function (l, n) {
            var t =
              "SINGLE" ==
              (null == n.context.$implicit
                ? null
                : n.context.$implicit.runnerNo)
                ? (null == n.context.$implicit
                    ? null
                    : null == n.context.$implicit.marketName
                    ? null
                    : n.context.$implicit.marketName.length) >= 10
                  ? e.Lb(
                      n,
                      6,
                      0,
                      e
                        .Cb(n, 7)
                        .transform(
                          null == n.context.$implicit
                            ? null
                            : n.context.$implicit.marketName,
                          0,
                          10
                        )
                    ) + ".."
                  : e.Lb(
                      n,
                      6,
                      0,
                      l(
                        n,
                        8,
                        0,
                        e.Cb(n.parent.parent.parent.parent.parent.parent, 2),
                        null == n.context.$implicit
                          ? null
                          : n.context.$implicit.marketName
                      )
                    )
                : (null == n.context.$implicit
                    ? null
                    : null == n.context.$implicit.selectionName
                    ? null
                    : n.context.$implicit.selectionName.length) >= 10
                ? e.Lb(
                    n,
                    6,
                    0,
                    e
                      .Cb(n, 9)
                      .transform(
                        null == n.context.$implicit
                          ? null
                          : n.context.$implicit.selectionName,
                        0,
                        10
                      )
                  ) + ".."
                : e.Lb(
                    n,
                    6,
                    0,
                    l(
                      n,
                      10,
                      0,
                      e.Cb(n.parent.parent.parent.parent.parent.parent, 2),
                      null == n.context.$implicit
                        ? null
                        : n.context.$implicit.selectionName
                    )
                  );
            l(n, 6, 0, t);
            var u = e.Lb(
              n,
              12,
              0,
              l(
                n,
                13,
                0,
                e.Cb(n.parent.parent.parent.parent.parent.parent, 5),
                null == n.context.$implicit
                  ? null
                  : n.context.$implicit.averageOdds
              )
            );
            l(n, 12, 0, u);
            var i = e.Lb(
              n,
              15,
              0,
              l(
                n,
                16,
                0,
                e.Cb(n.parent.parent.parent.parent.parent.parent, 5),
                null == n.context.$implicit
                  ? null
                  : n.context.$implicit.totalexchangeStack
              )
            );
            l(n, 15, 0, i),
              l(
                n,
                21,
                0,
                "Meter_Market" ==
                  (null == n.context.$implicit
                    ? null
                    : n.context.$implicit.fancyMarketCategory)
                  ? "--"
                  : 0 == n.context.$implicit.sideType ||
                    2 == n.context.$implicit.sideType
                  ? "+"
                  : "-"
              );
            var a =
              "Meter_Market" ==
              (null == n.context.$implicit
                ? null
                : n.context.$implicit.fancyMarketCategory)
                ? ""
                : e.Lb(
                    n,
                    22,
                    0,
                    l(
                      n,
                      23,
                      0,
                      e.Cb(n.parent.parent.parent.parent.parent.parent, 5),
                      null == n.context.$implicit
                        ? null
                        : n.context.$implicit.totalPL
                    )
                  );
            l(n, 22, 0, a);
          }
        );
      }
      function Dl(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              2,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, Bl)),
            e.pb(
              2,
              278528,
              null,
              0,
              i.m,
              [e.N, e.J, e.q],
              {
                ngForOf: [0, "ngForOf"],
              },
              null
            ),
            (l()(), e.fb(0, null, null, 0)),
          ],
          function (l, n) {
            l(
              n,
              2,
              0,
              null == n.parent.context.$implicit
                ? null
                : n.parent.context.$implicit.databack
            );
          },
          null
        );
      }
      function Kl(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              18,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              17,
              "div",
              [["class", "back-lay-container-matched"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              2,
              0,
              null,
              null,
              2,
              "div",
              [["class", "match-container table-card-header-bg"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              3,
              0,
              null,
              null,
              1,
              "div",
              [["class", "unmatch-text"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(4, null, [" ", " "])),
            (l()(),
            e.qb(
              5,
              0,
              null,
              null,
              13,
              "table",
              [["class", "table-responsive"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              6,
              0,
              null,
              null,
              8,
              "thead",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(7, 0, null, null, 7, "tr", [], null, null, null, null, null)),
            (l()(),
            e.qb(
              8,
              0,
              null,
              null,
              0,
              "th",
              [["colspan", "2"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              9,
              0,
              null,
              null,
              1,
              "th",
              [["class", "text-center"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(10, null, [" ", ""])),
            (l()(),
            e.qb(
              11,
              0,
              null,
              null,
              1,
              "th",
              [["class", "text-center"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(-1, null, ["Stakes"])),
            (l()(),
            e.qb(
              13,
              0,
              null,
              null,
              1,
              "th",
              [["class", "text-center"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(-1, null, ["P&L"])),
            (l()(), e.fb(16777216, null, null, 1, null, Al)),
            e.pb(
              16,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, Dl)),
            e.pb(
              18,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
          ],
          function (l, n) {
            l(
              n,
              16,
              0,
              (null == n.context.$implicit
                ? null
                : null == n.context.$implicit.datalay
                ? null
                : n.context.$implicit.datalay.length) > 0
            ),
              l(
                n,
                18,
                0,
                (null == n.context.$implicit
                  ? null
                  : null == n.context.$implicit.databack
                  ? null
                  : n.context.$implicit.databack.length) > 0
              );
          },
          function (l, n) {
            var t =
              null != n.context.$implicit &&
              n.context.$implicit.marketName.includes("_")
                ? (null == n.context.$implicit
                    ? null
                    : n.context.$implicit.marketName.split("_")[0]) +
                  " " +
                  (null == n.context.$implicit
                    ? null
                    : n.context.$implicit.marketName.split("_")[1])
                : null != n.context.$implicit && n.context.$implicit.marketName
                ? null == n.context.$implicit
                  ? null
                  : n.context.$implicit.marketName
                : null == n.context.$implicit
                ? null
                : null ==
                  n.context.$implicit.marketOrderDetails[n.context.index]
                ? null
                : n.context.$implicit.marketOrderDetails[n.context.index]
                    .fancyMarketCategory;
            l(n, 4, 0, t), l(n, 10, 0, "Odds");
          }
        );
      }
      function Fl(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              6,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              5,
              "div",
              [["class", "marketone"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              2,
              0,
              null,
              null,
              2,
              "div",
              [
                ["class", "head_text"],
                ["style", "cursor: pointer;"],
              ],
              null,
              [[null, "click"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "click" === n &&
                    (e =
                      !1 !== l.component.gotoEventdetail(l.context.$implicit) &&
                      e),
                  e
                );
              },
              null,
              null
            )),
            (l()(), e.Kb(3, null, ["", " "])),
            (l()(),
            e.qb(
              4,
              0,
              null,
              null,
              0,
              "img",
              [
                ["src", "assets/images/blue-arrow.png"],
                ["style", "margin-left: 5px"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, Kl)),
            e.pb(
              6,
              278528,
              null,
              0,
              i.m,
              [e.N, e.J, e.q],
              {
                ngForOf: [0, "ngForOf"],
              },
              null
            ),
          ],
          function (l, n) {
            l(
              n,
              6,
              0,
              null == n.context.$implicit
                ? null
                : n.context.$implicit.marketDetails
            );
          },
          function (l, n) {
            l(n, 3, 0, n.context.$implicit.eventName);
          }
        );
      }
      function Rl(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(0, 0, null, null, 2, "div", [], null, null, null, null, null)),
            (l()(), e.fb(16777216, null, null, 1, null, Fl)),
            e.pb(
              2,
              278528,
              null,
              0,
              i.m,
              [e.N, e.J, e.q],
              {
                ngForOf: [0, "ngForOf"],
              },
              null
            ),
          ],
          function (l, n) {
            l(n, 2, 0, n.component.matchAvrageOdds);
          },
          null
        );
      }
      function Ul(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              31,
              "div",
              [
                [
                  "class",
                  "col-md-12 col-sm-12 col-xs-12 bet-info unmamabottpm",
                ],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              26,
              "div",
              [["class", "filters_matching"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              2,
              0,
              null,
              null,
              12,
              "div",
              [["class", "filter_switch"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              3,
              0,
              null,
              null,
              2,
              "div",
              [["class", "heading"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(4, null, [" ", " "])),
            e.Eb(131072, u.j, [u.k, e.h]),
            (l()(),
            e.qb(
              6,
              0,
              null,
              null,
              8,
              "div",
              [["class", "cancel-btn"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              7,
              0,
              null,
              null,
              2,
              "div",
              [["class", "display-ib"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(8, null, [" ", ""])),
            e.Eb(131072, u.j, [u.k, e.h]),
            (l()(),
            e.qb(
              10,
              0,
              null,
              null,
              4,
              "div",
              [["class", "onoffswitch display-ib"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              11,
              0,
              null,
              null,
              0,
              "input",
              [
                ["class", "onoffswitch-checkbox"],
                ["id", "myonoffswitch"],
                ["name", "onoffswitch"],
                ["type", "checkbox"],
              ],
              [[8, "checked", 0]],
              [[null, "change"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "change" === n &&
                    (e =
                      !1 !== l.component.showAverageOdds(t.target.checked) &&
                      e),
                  e
                );
              },
              null,
              null
            )),
            (l()(),
            e.qb(
              12,
              0,
              null,
              null,
              2,
              "label",
              [
                ["class", "onoffswitch-label"],
                ["for", "myonoffswitch"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              13,
              0,
              null,
              null,
              0,
              "span",
              [["class", "onoffswitch-inner"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              14,
              0,
              null,
              null,
              0,
              "span",
              [["class", "onoffswitch-switch"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              15,
              0,
              null,
              null,
              10,
              "div",
              [["class", "filter_dropdown"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              16,
              0,
              null,
              null,
              2,
              "span",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(17, null, ["", ":"])),
            e.Eb(131072, u.j, [u.k, e.h]),
            (l()(),
            e.qb(
              19,
              0,
              null,
              null,
              6,
              "select",
              [],
              null,
              [[null, "change"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "change" === n &&
                    (e = !1 !== l.component.handleEventSearchMatch(t) && e),
                  e
                );
              },
              null,
              null
            )),
            (l()(),
            e.qb(
              20,
              0,
              null,
              null,
              3,
              "option",
              [
                ["selected", ""],
                ["value", ""],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            e.pb(
              21,
              147456,
              null,
              0,
              a.s,
              [e.k, e.B, [8, null]],
              {
                value: [0, "value"],
              },
              null
            ),
            e.pb(
              22,
              147456,
              null,
              0,
              a.E,
              [e.k, e.B, [8, null]],
              {
                value: [0, "value"],
              },
              null
            ),
            (l()(), e.Kb(-1, null, ["All"])),
            (l()(), e.fb(16777216, null, null, 1, null, Sl)),
            e.pb(
              25,
              278528,
              null,
              0,
              i.m,
              [e.N, e.J, e.q],
              {
                ngForOf: [0, "ngForOf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, _l)),
            e.pb(
              27,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, Nl)),
            e.pb(
              29,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, Rl)),
            e.pb(
              31,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
          ],
          function (l, n) {
            var t = n.component;
            l(n, 21, 0, ""),
              l(n, 22, 0, ""),
              l(n, 25, 0, t.matchBetListEventName),
              l(n, 27, 0, !t.showAverageOddsdata),
              l(n, 29, 0, !t.showAverageOddsdata),
              l(n, 31, 0, t.showAverageOddsdata);
          },
          function (l, n) {
            var t = n.component;
            l(n, 4, 0, e.Lb(n, 4, 0, e.Cb(n, 5).transform("Matched Bets"))),
              l(n, 8, 0, e.Lb(n, 8, 0, e.Cb(n, 9).transform("Average Odds"))),
              l(n, 11, 0, t.showAverageOddsdata),
              l(
                n,
                17,
                0,
                e.Lb(n, 17, 0, e.Cb(n, 18).transform("Select Match"))
              );
          }
        );
      }
      function Jl(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              1,
              "app-loader",
              [],
              null,
              null,
              null,
              p.b,
              p.a
            )),
            e.pb(1, 114688, null, 0, b.a, [], null, null),
          ],
          function (l, n) {
            l(n, 1, 0);
          },
          null
        );
      }
      function Gl(l) {
        return e.Mb(
          0,
          [
            e.Eb(0, d, [g.b]),
            e.Eb(0, m.a, []),
            e.Eb(0, i.v, []),
            e.Eb(0, h.a, []),
            e.Eb(0, i.f, [e.s]),
            e.Eb(0, f.a, []),
            e.Eb(0, x.a, []),
            e.Ib(671088640, 1, {
              searchElement: 0,
            }),
            e.Ib(671088640, 2, {
              panel: 0,
            }),
            e.Ib(671088640, 3, {
              odds: 0,
            }),
            (l()(),
            e.qb(
              10,
              0,
              null,
              null,
              25,
              "div",
              [["class", "bet-slip-container rightbetclose"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              11,
              0,
              null,
              null,
              1,
              "div",
              [
                ["class", "arrowicon"],
                [
                  "style",
                  "position: absolute;\n    left: -50px;\n    color: #fff;\n    z-index: 99999;\n    height: 50px;\n    width: 50px;\n    background-color: #f99f40;\n    line-height: 50px;\n    text-align: center;\n  ",
                ],
              ],
              null,
              [[null, "click"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "click" === n &&
                    (e = !1 !== l.component.togglebetslip() && e),
                  e
                );
              },
              null,
              null
            )),
            (l()(),
            e.qb(
              12,
              0,
              null,
              null,
              0,
              "i",
              [["class", "fa fa-chevron-left arroww"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              13,
              0,
              null,
              null,
              16,
              "div",
              [["id", "live-bet"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              14,
              0,
              null,
              null,
              15,
              "div",
              [["class", "col-md-12 col-sm-12 col-xs-12 bet-info mabottpm"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, L)),
            e.pb(
              16,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(),
            e.qb(
              17,
              0,
              null,
              null,
              12,
              "div",
              [["class", "games-grid content-card-bg"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              18,
              0,
              null,
              null,
              7,
              "div",
              [["class", "back-lay-container back-lay-container-bet"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              19,
              0,
              null,
              null,
              4,
              "div",
              [["class", "unmatch-container table-card-header-bg"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(20, null, ["", " "])),
            e.Eb(131072, u.j, [u.k, e.h]),
            (l()(), e.fb(16777216, null, null, 1, null, E)),
            e.pb(
              23,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, B)),
            e.pb(
              25,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, hl)),
            e.pb(
              27,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, fl)),
            e.pb(
              29,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, Il)),
            e.pb(
              31,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, Ul)),
            e.pb(
              33,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, Jl)),
            e.pb(
              35,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
          ],
          function (l, n) {
            var t = n.component;
            l(
              n,
              16,
              0,
              t.object.getLoginInstance().state.isUserLogin &&
                !t.object.routeUrl &&
                t.object.showLiveTvButton
            ),
              l(n, 23, 0, t.object.getLoginInstance().state.isUserLogin),
              l(n, 25, 0, t.object.customStakepopUp),
              l(
                n,
                27,
                0,
                null == t.betSlip
                  ? null
                  : null == t.betSlip.slipList
                  ? null
                  : t.betSlip.slipList.length
              ),
              l(
                n,
                29,
                0,
                !(
                  (null != t.betSlip &&
                    null != t.betSlip.slipList &&
                    t.betSlip.slipList.length) ||
                  (null != t.betSlip.playerSlipList &&
                    null != t.betSlip.playerSlipList.unMatchedTicketsByEvents &&
                    t.betSlip.playerSlipList.unMatchedTicketsByEvents.length) ||
                  (null != t.betSlip.playerSlipList &&
                    null != t.betSlip.playerSlipList.matchedTicketsByEvents &&
                    t.betSlip.playerSlipList.matchedTicketsByEvents.length)
                )
              ),
              l(
                n,
                31,
                0,
                null == t.betSlip.playerSlipList
                  ? null
                  : null == t.betSlip.playerSlipList.unMatchedTicketsByEvents
                  ? null
                  : t.betSlip.playerSlipList.unMatchedTicketsByEvents.length
              ),
              l(
                n,
                33,
                0,
                null == t.betSlip.playerSlipList
                  ? null
                  : null == t.betSlip.playerSlipList.matchedTicketsByEvents
                  ? null
                  : t.betSlip.playerSlipList.matchedTicketsByEvents.length
              ),
              l(n, 35, 0, t.betAPI);
          },
          function (l, n) {
            l(n, 20, 0, e.Lb(n, 20, 0, e.Cb(n, 21).transform("Bet Slip")));
          }
        );
      }
      class Hl extends M {
        constructor(l, n, t, e, u, i) {
          super(l, n, t, e),
            (this.service = l),
            (this.object = n),
            (this.broadCast = t),
            (this.firebase = e),
            (this.routeParam = u),
            (this.router = i),
            (this.backOddValue = []),
            (this.layOddValue = []);
        }
        ngOnInit() {
          this.getEventIdFromUrl(),
            this.getLocalIpAddress(),
            this.attachMutation(),
            this.getPlayerBetList(),
            this.init(),
            this.getAllBrodcasterBetSLipWeb(),
            this.getLocalStorageBetSLipWeb();
        }
        ngOnDestroy() {
          this.onDestroySubcriberD2();
        }
      }
      var Vl = e.ob({
        encapsulation: 0,
        styles: [
          "video#UnrealPlayer1_Video[_ngcontent-%COMP%] {\n        width: 100% !important;\n    }\n\n    video[_ngcontent-%COMP%] {\n        width: 100% !important;\n    }",
          [
            '.betslip-error[_ngcontent-%COMP%]{background-color:#dc3545;color:#fff;padding:8px}#bet[_ngcontent-%COMP%]{padding:20px 0!important;font-size:12px;border:2px solid #fff;box-shadow:0 2px 6px rgba(81,90,163,.5);border-radius:4px;text-align:center}[loading][_ngcontent-%COMP%]{width:19vw;height:calc(100vh - 76px);display:flex;align-items:center;justify-content:center;position:absolute;z-index:9999999;font-size:20px;top:80px;left:81%;right:0;bottom:0;background-color:rgba(255,255,255,.7)}.filters_matching[_ngcontent-%COMP%]{padding:10px;border-radius:4px}.filters_matching[_ngcontent-%COMP%]   .filter_delete[_ngcontent-%COMP%], .filters_matching[_ngcontent-%COMP%]   .filter_switch[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.filters_matching[_ngcontent-%COMP%]   .filter_delete[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%], .filters_matching[_ngcontent-%COMP%]   .filter_switch[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{font-weight:600;font-size:13px;text-transform:uppercase;margin-left:5px}.filters_matching[_ngcontent-%COMP%]   .filter_delete[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%], .filters_matching[_ngcontent-%COMP%]   .filter_switch[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%]{display:flex;align-items:center;font-weight:300}.filters_matching[_ngcontent-%COMP%]   .filter_delete[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%], .filters_matching[_ngcontent-%COMP%]   .filter_switch[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-weight:500;font-size:13px;line-height:18px;color:#4d4d4d}.filters_matching[_ngcontent-%COMP%]   .filter_delete[_ngcontent-%COMP%]   .btn-delete[_ngcontent-%COMP%], .filters_matching[_ngcontent-%COMP%]   .filter_switch[_ngcontent-%COMP%]   .btn-delete[_ngcontent-%COMP%]{border:none;padding:9px 15px;font-weight:600;font-size:12px;line-height:16px;text-align:center;color:#fff;display:flex;align-items:center;background:#ce4f4f;border-radius:20px;display:flex}.filters_matching[_ngcontent-%COMP%]   .filter_delete[_ngcontent-%COMP%]   .btn-delete[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .filters_matching[_ngcontent-%COMP%]   .filter_switch[_ngcontent-%COMP%]   .btn-delete[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:5px;margin-top:-3px}.filters_matching[_ngcontent-%COMP%]   .filter_dropdown[_ngcontent-%COMP%]{margin:16px 0;background-color:#f2f2f2;padding:10px 14px;border-radius:6px;font-weight:600}.filters_matching[_ngcontent-%COMP%]   .filter_dropdown[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:18px}.filters_matching[_ngcontent-%COMP%]   .filter_dropdown[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{background:0 0;border-radius:5px;width:calc(100% - 118px);font-weight:400;font-size:14px;color:#000;border:1px solid var(--main-bg);-webkit-border-radius:5px;-moz-border-radius:5px;-ms-border-radius:5px;-o-border-radius:5px}.filters_matching[_ngcontent-%COMP%]   .filter_checkbox[_ngcontent-%COMP%]{display:flex;align-items:center}.filters_matching[_ngcontent-%COMP%]   .filter_checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin:0 8px 0 0}.filters_matching[_ngcontent-%COMP%]   .filter_checkbox[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:500;font-size:15px;line-height:16px;color:rgba(0,0,0,.7)}.head_text[_ngcontent-%COMP%]{padding:4px 12px;font-weight:600;font-size:13px;line-height:19px;color:#fff;background:var(--main-bg);border-radius:5px 5px 0 0;text-transform:uppercase;letter-spacing:1px}.mabottpm[_ngcontent-%COMP%]{margin-bottom:0}.boderspr[_ngcontent-%COMP%]{border-top:1px solid #999;margin:30px 0 10px;position:relative;width:calc(100% + 10px)}.back-lay-container-matched[_ngcontent-%COMP%]{padding-bottom:0;border-radius:4px;border:none;margin-bottom:10px;box-shadow:none;box-shadow:0}.back-lay-container-matched[_ngcontent-%COMP%]:last-child{margin-bottom:0}.back-lay-container-matched[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%!important;margin:0}.back-lay-container-matched[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody.back[_ngcontent-%COMP%]{background-color:#ddf0fd}.back-lay-container-matched[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody.lay[_ngcontent-%COMP%]{background-color:#f3d4dc}.onoffswitch-label[_ngcontent-%COMP%]{border:none!important}.marketone[_ngcontent-%COMP%]{border-radius:4px;margin:13px 0;padding:0;background-color:#fff!important}.filters_matching[_ngcontent-%COMP%]{border:none;border-width:0 1px;background-color:#fff;margin:3px}.customBetFooter[_ngcontent-%COMP%]{padding:0;display:flex;justify-content:space-between;border-radius:0 0 4px 4px;background-color:#fff}.inputboxmain[_ngcontent-%COMP%]{padding:0;display:flex;flex-wrap:wrap;justify-content:space-between;margin-bottom:0 0 8px 8px;text-transform:uppercase}.inputboxmain[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{display:flex;font-size:15px;flex:1 100%;margin:0 0 5px;padding:10px;border-bottom:1px solid #e2e8ea}.bet_popUp[_ngcontent-%COMP%]{position:absolute;z-index:9999999;right:7px;margin-top:-42px;left:12px;border-radius:4px;background-color:#fff;padding:5px;box-shadow:4px 20px 20px 20px rgba(0,0,0,.36)}.bet_popUp[_ngcontent-%COMP%]:after, .bet_popUp[_ngcontent-%COMP%]:before{bottom:100%;left:80%;border:solid transparent;content:" ";height:0;width:0;position:absolute;pointer-events:none}.bet_popUp[_ngcontent-%COMP%]:after{border-color:rgba(221,221,221,0);border-bottom-color:#fff;border-width:10px;transform:rotate(90deg);margin:0 0 -28px 12px}.bet_popUp[_ngcontent-%COMP%]:before{border-color:rgba(221,221,221,0);border-width:6px;margin-left:-6px}.inputboxmain[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{flex:auto}.inputboxmain[_ngcontent-%COMP%]   input.inputbox[_ngcontent-%COMP%]{width:21%;text-align:center;margin:6px 5px;height:38px;border-radius:4px;border:1px solid #d3d3d3;background-color:#fff}#parent[_ngcontent-%COMP%]:last-child{display:none!important}.inputboxmain[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]{border:1px solid #a5a5a5;box-shadow:inset 0 0 12px 0 #00000045}.setting[_ngcontent-%COMP%]{background-color:transparent;border:0;color:#000;padding:10px 0;width:140px;display:flex!important;align-items:center;font-size:12px;justify-content:space-evenly;text-transform:uppercase}.setting[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;padding:0}.saveedit[_ngcontent-%COMP%]{display:block;padding:10px 39px!important;border:none;background:#f9ab1b;text-transform:capitalize;border-radius:4px;margin:4px 8px;color:#fff;width:100%}.saveedit1[_ngcontent-%COMP%]{background:var(--main-bg)!important}.isValid[_ngcontent-%COMP%]{color:red}.tgreen[_ngcontent-%COMP%]{color:green}.tred[_ngcontent-%COMP%]{color:red}.matchtit[_ngcontent-%COMP%]{color:#fff;padding:14px}.mainbox[_ngcontent-%COMP%]{width:100%;border:1px solid #fafafa;background:var(--main-bg);border-radius:8px}div#UnrealPlayer1[_ngcontent-%COMP%], video#UnrealPlayer1_Video[_ngcontent-%COMP%]{width:100%!important}.live_pop.match[_ngcontent-%COMP%]{border-top:solid 2px var(--navText);margin:0 -5px 0 -8px;padding:10px;color:#fff!important}.unmamabottpm[_ngcontent-%COMP%]{border-radius:0;margin-top:0;padding:0;border:none!important}.minplsdec[_ngcontent-%COMP%]{background-color:#2a2a29!important;color:#fff!important}.add-bet[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child{width:62%!important}.empty-cartc[_ngcontent-%COMP%]{width:100%;height:300px;display:flex}.maincardemp[_ngcontent-%COMP%]{width:70%;margin:80px auto auto;text-align:center;font-size:14px}.ifremvid[_ngcontent-%COMP%]{width:100%;height:220px;margin-top:-9px}.bet-slip-container[_ngcontent-%COMP%]   .bet-info[_ngcontent-%COMP%]   .available-bets[_ngcontent-%COMP%]   .lay-container[_ngcontent-%COMP%]   .wrapper_button[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;flex-direction:row;padding:0;width:100%}.bet-slip-container[_ngcontent-%COMP%]   .bet-info[_ngcontent-%COMP%]   .available-bets[_ngcontent-%COMP%]   .lay-container[_ngcontent-%COMP%]   .wrapper_button[_ngcontent-%COMP%]{display:flex;padding:8px 10px;flex-wrap:wrap}.bet-slip-container[_ngcontent-%COMP%]   .bet-info[_ngcontent-%COMP%]   .available-bets[_ngcontent-%COMP%]   .lay-container[_ngcontent-%COMP%]   .wrapper_button[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child   p[_ngcontent-%COMP%]{margin:0 0 10px!important;text-transform:uppercase}.buttonbete[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-wrap:wrap;margin-top:20px!important}.buttonbete[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(4), .buttonbete[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(8){margin:0!important}.bet-slip-container[_ngcontent-%COMP%]   .bet-info[_ngcontent-%COMP%]   .available-bets[_ngcontent-%COMP%]   .lay-container[_ngcontent-%COMP%]   .wrapper_button[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child > div[_ngcontent-%COMP%]:first-child{margin-right:20px}.bet-slip-container[_ngcontent-%COMP%]   .bet-info[_ngcontent-%COMP%]   .available-bets[_ngcontent-%COMP%]   .lay-container[_ngcontent-%COMP%]   .wrapper_button[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{width:70%;margin:10px auto auto}.bet-slip-container[_ngcontent-%COMP%]   .bet-info[_ngcontent-%COMP%]   .available-bets[_ngcontent-%COMP%]   .lay-container[_ngcontent-%COMP%]   .wrapper_button[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child > div[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:28px}.bet-slip-container[_ngcontent-%COMP%]   .bet-info[_ngcontent-%COMP%]   .available-bets[_ngcontent-%COMP%]   .lay-container[_ngcontent-%COMP%]   .wrapper_button[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child   div[_ngcontent-%COMP%]:last-child   input[_ngcontent-%COMP%]{border-radius:4px;margin-top:0;height:28px}.bet-slip-container[_ngcontent-%COMP%]   .bet-info[_ngcontent-%COMP%]   .available-bets[_ngcontent-%COMP%]   .lay-container[_ngcontent-%COMP%]   .cancel-order[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%]{display:block;width:100%;border-radius:0;font-weight:300;padding:6px 0;border:none;height:35px;color:#000;text-align:center;background-color:#dcdcdc}.bet-slip-container[_ngcontent-%COMP%]   .bet-info[_ngcontent-%COMP%]   .available-bets[_ngcontent-%COMP%]   .lay-container[_ngcontent-%COMP%]   .place-bet[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%]{text-align:center;color:#fff;height:35px;border-radius:0;background:var(--main-bg)!important}.edistec[_ngcontent-%COMP%]{justify-content:space-between;display:flex;width:100%;padding:0 8px;font-size:14px;align-items:baseline;text-transform:capitalize;font-weight:600}.maxminbet[_ngcontent-%COMP%]{flex:inherit;display:flex;font-size:10px;background-color:#eee;border-bottom:1px solid #ccc}.maxminbet[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{flex:auto;padding:4px 10px;border-right:#fff;font-weight:600}.maxminbet[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .maxtit[_ngcontent-%COMP%]{padding:0;font-weight:700!important;float:left;margin-right:10px}.anyOdds[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin:0 15px 0 5px}@media (max-width:1100px){.saveedit[_ngcontent-%COMP%]{padding:10px 20px!important}}.switch[_ngcontent-%COMP%]{position:relative;display:inline-block;width:48px;height:25px;margin-left:5px}.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{opacity:0;width:0;height:0}.slider[_ngcontent-%COMP%]{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;transition:.4s}.slider[_ngcontent-%COMP%]:before{position:absolute;content:"";height:18px;width:18px;left:2px;bottom:3px;background-color:#fff;transition:.4s}input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]{background-color:#000}input[_ngcontent-%COMP%]:focus + .slider[_ngcontent-%COMP%]{border:1px solid #000!important;box-shadow:1px 2px 2px 0 #000!important}input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]:before{transform:translateX(26px)}.slider.round[_ngcontent-%COMP%]{border-radius:34px}.slider.round[_ngcontent-%COMP%]:before{border-radius:50%}.roundtog[_ngcontent-%COMP%]{width:100%;padding-left:10px;text-transform:none;display:flex;justify-content:flex-end;align-items:center;padding-right:5px}.inputboxmain[_ngcontent-%COMP%]   .lakhval[_ngcontent-%COMP%]{flex:auto;width:21%;text-align:center;margin:6px 5px;display:flex;align-items:center;justify-content:center;height:38px;border-radius:4px;border:1px solid #a5a5a5;background-color:#fff;box-shadow:inset 0 0 12px 0 #00000045}.infolakh[_ngcontent-%COMP%]{color:#000;position:absolute;right:20px;background:#fff;border:1px solid #adadad;padding:10px;width:110px;border-radius:6PX;box-shadow:4px 5px 6px #333333a1}',
          ],
        ],
        data: {},
      });
      function Wl(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              3,
              "div",
              [["class", "live_pop match"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              2,
              "div",
              [["class", "inputboxmain1"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              2,
              0,
              null,
              null,
              1,
              "iframe",
              [
                ["class", "ifremvid"],
                ["frameborder", "0"],
              ],
              [[8, "src", 5]],
              null,
              null,
              null,
              null
            )),
            e.Gb(3, 1),
          ],
          null,
          function (l, n) {
            var t = n.component,
              u = e.Lb(
                n,
                2,
                0,
                l(n, 3, 0, e.Cb(n.parent.parent, 0), t.videoUrlLink)
              );
            l(n, 2, 0, u);
          }
        );
      }
      function Yl(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              4,
              "div",
              [
                ["class", "mainbox"],
                ["style", "cursor: pointer;"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              1,
              "div",
              [["class", "matchtit"]],
              null,
              [[null, "click"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "click" === n && (e = !1 !== l.component.liveTv() && e), e
                );
              },
              null,
              null
            )),
            (l()(),
            e.qb(
              2,
              0,
              null,
              null,
              0,
              "img",
              [
                ["src", "assets/images/livestrming.png"],
                ["width", "40px"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, Wl)),
            e.pb(
              4,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
          ],
          function (l, n) {
            var t = n.component;
            l(
              n,
              4,
              0,
              t.object.livePlaye &&
                (t.object.isCurrencyReqForStream ||
                  t.object.isEventHaveBetForStream)
            );
          },
          null
        );
      }
      function zl(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              4,
              "button",
              [["class", "setting"]],
              [[4, "display", null]],
              [[null, "click"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "click" === n && (e = !1 !== l.component.openpopUp(t) && e), e
                );
              },
              null,
              null
            )),
            (l()(),
            e.qb(1, 0, null, null, 2, "p", [], null, null, null, null, null)),
            (l()(), e.Kb(2, null, ["", ""])),
            e.Eb(131072, u.j, [u.k, e.h]),
            (l()(),
            e.qb(
              4,
              0,
              null,
              null,
              0,
              "img",
              [["src", "assets/images/edit-setting.png"]],
              null,
              null,
              null,
              null,
              null
            )),
          ],
          null,
          function (l, n) {
            l(n, 0, 0, n.component.settingBtnDisplay),
              l(n, 2, 0, e.Lb(n, 2, 0, e.Cb(n, 3).transform("Edit Stakes")));
          }
        );
      }
      function Zl(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              [
                [1, 0],
                ["id", 1],
              ],
              null,
              10,
              "input",
              [
                ["appBlockCopyPaste", ""],
                ["autocomplete", "off"],
                ["class", "inputbox"],
                ["data-toggle", "tooltip"],
                ["maxlength", "8"],
                ["noRightClick", ""],
                ["positiveNumberOnly", ""],
                ["title", "Value must be greater or equal to 1"],
                ["type", "text"],
              ],
              [
                [8, "id", 0],
                [1, "maxlength", 0],
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null],
              ],
              [
                [null, "ngModelChange"],
                [null, "keyup"],
                [null, "input"],
                [null, "blur"],
                [null, "compositionstart"],
                [null, "compositionend"],
                [null, "contextmenu"],
                [null, "paste"],
                [null, "copy"],
                [null, "cut"],
                [null, "keypress"],
              ],
              function (l, n, t) {
                var u = !0,
                  i = l.component;
                return (
                  "input" === n &&
                    (u = !1 !== e.Cb(l, 1)._handleInput(t.target.value) && u),
                  "blur" === n && (u = !1 !== e.Cb(l, 1).onTouched() && u),
                  "compositionstart" === n &&
                    (u = !1 !== e.Cb(l, 1)._compositionStart() && u),
                  "compositionend" === n &&
                    (u =
                      !1 !== e.Cb(l, 1)._compositionEnd(t.target.value) && u),
                  "contextmenu" === n &&
                    (u = !1 !== e.Cb(l, 8).onRightClick(t) && u),
                  "paste" === n && (u = !1 !== e.Cb(l, 9).blockPaste(t) && u),
                  "copy" === n && (u = !1 !== e.Cb(l, 9).blockCopy(t) && u),
                  "cut" === n && (u = !1 !== e.Cb(l, 9).blockCut(t) && u),
                  "keypress" === n &&
                    (u = !1 !== e.Cb(l, 10).onInputChange(t) && u),
                  "ngModelChange" === n &&
                    (u =
                      !1 !==
                        (i.customBetList[l.parent.context.index].val = t) && u),
                  "keyup" === n && (u = !1 !== i.keyPress(t) && u),
                  u
                );
              },
              null,
              null
            )),
            e.pb(1, 16384, null, 0, a.d, [e.B, e.k, [2, a.a]], null, null),
            e.pb(
              2,
              540672,
              null,
              0,
              a.j,
              [],
              {
                maxlength: [0, "maxlength"],
              },
              null
            ),
            e.Hb(
              1024,
              null,
              a.l,
              function (l) {
                return [l];
              },
              [a.j]
            ),
            e.Hb(
              1024,
              null,
              a.m,
              function (l) {
                return [l];
              },
              [a.d]
            ),
            e.pb(
              5,
              671744,
              null,
              0,
              a.r,
              [
                [8, null],
                [6, a.l],
                [8, null],
                [6, a.m],
              ],
              {
                model: [0, "model"],
              },
              {
                update: "ngModelChange",
              }
            ),
            e.Hb(2048, null, a.n, null, [a.r]),
            e.pb(7, 16384, null, 0, a.o, [[4, a.n]], null, null),
            e.pb(8, 16384, null, 0, c.a, [], null, null),
            e.pb(9, 16384, null, 0, o.a, [], null, null),
            e.pb(10, 16384, null, 0, s, [e.k], null, null),
          ],
          function (l, n) {
            var t = n.component;
            l(n, 2, 0, "8"),
              l(n, 5, 0, t.customBetList[n.parent.context.index].val);
          },
          function (l, n) {
            l(
              n,
              0,
              0,
              e.ub(1, "stake", n.parent.context.index, ""),
              e.Cb(n, 2).maxlength ? e.Cb(n, 2).maxlength : null,
              e.Cb(n, 7).ngClassUntouched,
              e.Cb(n, 7).ngClassTouched,
              e.Cb(n, 7).ngClassPristine,
              e.Cb(n, 7).ngClassDirty,
              e.Cb(n, 7).ngClassValid,
              e.Cb(n, 7).ngClassInvalid,
              e.Cb(n, 7).ngClassPending
            );
          }
        );
      }
      function Xl(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              2,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, Zl)),
            e.pb(
              2,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(0, null, null, 0)),
          ],
          function (l, n) {
            var t = n.component;
            l(
              n,
              2,
              0,
              n.context.index != t.customBetList.length - 1 && !t.clickedStake
            );
          },
          null
        );
      }
      function Ql(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              2,
              "div",
              [["class", "lakhval"]],
              null,
              [[null, "click"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "click" === n &&
                    (e =
                      !1 !== l.component.editablStake(l.parent.context.index) &&
                      e),
                  e
                );
              },
              null,
              null
            )),
            (l()(), e.Kb(1, null, [" ", " "])),
            e.Gb(2, 2),
          ],
          null,
          function (l, n) {
            var t = e.Lb(
              n,
              1,
              0,
              l(
                n,
                2,
                0,
                e.Cb(n.parent.parent.parent, 1),
                "+" +
                  (null == n.parent.context.$implicit
                    ? null
                    : n.parent.context.$implicit.val),
                "show"
              )
            );
            l(n, 1, 0, t);
          }
        );
      }
      function ln(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              2,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, Ql)),
            e.pb(
              2,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(0, null, null, 0)),
          ],
          function (l, n) {
            var t = n.component;
            l(
              n,
              2,
              0,
              n.context.index != t.customBetList.length - 1 && t.clickedStake
            );
          },
          null
        );
      }
      function nn(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              5,
              "i",
              [["class", "infolakh"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(-1, null, ["100000= 1L "])),
            (l()(),
            e.qb(2, 0, null, null, 0, "br", [], null, null, null, null, null)),
            (l()(), e.Kb(-1, null, [" 200000= 2L "])),
            (l()(),
            e.qb(4, 0, null, null, 0, "br", [], null, null, null, null, null)),
            (l()(), e.Kb(-1, null, [" 500000= 5L"])),
          ],
          null,
          null
        );
      }
      function tn(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              [["popup", 1]],
              null,
              42,
              "div",
              [["class", "bet_popUp "]],
              null,
              [[null, "click"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "click" === n && (e = !1 !== t.stopPropagation() && e), e
                );
              },
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              34,
              "div",
              [["class", "inputboxmain"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(2, 0, null, null, 2, "h2", [], null, null, null, null, null)),
            (l()(), e.Kb(3, null, ["", ""])),
            e.Eb(131072, u.j, [u.k, e.h]),
            (l()(), e.fb(16777216, null, null, 1, null, Xl)),
            e.pb(
              6,
              278528,
              null,
              0,
              i.m,
              [e.N, e.J, e.q],
              {
                ngForOf: [0, "ngForOf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, ln)),
            e.pb(
              8,
              278528,
              null,
              0,
              i.m,
              [e.N, e.J, e.q],
              {
                ngForOf: [0, "ngForOf"],
              },
              null
            ),
            (l()(),
            e.qb(
              9,
              0,
              null,
              null,
              9,
              "div",
              [["class", "roundtog"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              10,
              0,
              null,
              null,
              5,
              "span",
              [
                ["class", "titleText"],
                ["style", "position:relative ;"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(11, null, ["", " (1L) "])),
            e.Eb(131072, u.j, [u.k, e.h]),
            (l()(), e.fb(16777216, null, null, 1, null, nn)),
            e.pb(
              14,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(),
            e.qb(
              15,
              0,
              null,
              null,
              0,
              "i",
              [
                ["aria-hidden", "true"],
                ["class", "fa fa-info-circle"],
                ["data-toggle", "tooltip"],
                ["title", "100000=1L 2000000=20L"],
              ],
              null,
              [[null, "click"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "click" === n &&
                    (e = !1 !== l.component.handleShowStakeinfo() && e),
                  e
                );
              },
              null,
              null
            )),
            (l()(),
            e.qb(
              16,
              0,
              null,
              null,
              2,
              "label",
              [["class", "switch"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              17,
              0,
              [["subwick", 1]],
              null,
              0,
              "input",
              [["type", "checkbox"]],
              [[8, "checked", 0]],
              [[null, "change"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "change" === n &&
                    (e =
                      !1 !== l.component.showRoundOffStake(t.target.checked) &&
                      e),
                  e
                );
              },
              null,
              null
            )),
            (l()(),
            e.qb(
              18,
              0,
              null,
              null,
              0,
              "span",
              [["class", "slider round"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              19,
              0,
              null,
              null,
              16,
              "div",
              [
                ["class", "anyOdds"],
                ["style", "padding-left:10px;text-transform:none"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              20,
              0,
              null,
              null,
              2,
              "label",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(21, null, ["", ""])),
            e.Eb(131072, u.j, [u.k, e.h]),
            (l()(),
            e.qb(23, 0, null, null, 0, "br", [], null, null, null, null, null)),
            (l()(),
            e.qb(
              24,
              0,
              [["MO", 1]],
              null,
              0,
              "input",
              [["type", "checkbox"]],
              [[8, "checked", 0]],
              [[null, "change"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "change" === n &&
                    (e =
                      !1 !==
                        l.component.acceptAnyOddsClick(
                          t.target.checked,
                          "MO"
                        ) && e),
                  e
                );
              },
              null,
              null
            )),
            (l()(),
            e.qb(
              25,
              0,
              null,
              null,
              2,
              "span",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(26, null, ["", ""])),
            e.Eb(131072, u.j, [u.k, e.h]),
            (l()(),
            e.qb(
              28,
              0,
              [["BM", 1]],
              null,
              0,
              "input",
              [["type", "checkbox"]],
              [[8, "checked", 0]],
              [[null, "change"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "change" === n &&
                    (e =
                      !1 !==
                        l.component.acceptAnyOddsClick(
                          t.target.checked,
                          "BM"
                        ) && e),
                  e
                );
              },
              null,
              null
            )),
            (l()(),
            e.qb(
              29,
              0,
              null,
              null,
              2,
              "span",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(30, null, ["", ""])),
            e.Eb(131072, u.j, [u.k, e.h]),
            (l()(),
            e.qb(
              32,
              0,
              [["FN", 1]],
              null,
              0,
              "input",
              [["type", "checkbox"]],
              [[8, "checked", 0]],
              [[null, "change"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "change" === n &&
                    (e =
                      !1 !==
                        l.component.acceptAnyOddsClick(
                          t.target.checked,
                          "FN"
                        ) && e),
                  e
                );
              },
              null,
              null
            )),
            (l()(),
            e.qb(
              33,
              0,
              null,
              null,
              2,
              "span",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(34, null, ["", ""])),
            e.Eb(131072, u.j, [u.k, e.h]),
            (l()(),
            e.qb(
              36,
              0,
              null,
              null,
              6,
              "div",
              [["class", "customBetFooter"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              37,
              0,
              null,
              null,
              2,
              "button",
              [["class", "saveedit saveedit1 "]],
              null,
              [[null, "click"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "click" === n &&
                    (e = !1 !== l.component.cancleEditStake() && e),
                  e
                );
              },
              null,
              null
            )),
            (l()(), e.Kb(38, null, ["", ""])),
            e.Eb(131072, u.j, [u.k, e.h]),
            (l()(),
            e.qb(
              40,
              0,
              null,
              null,
              2,
              "button",
              [["class", "saveedit "]],
              null,
              [[null, "click"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "click" === n &&
                    (e = !1 !== l.component.saveEditStakes() && e),
                  e
                );
              },
              null,
              null
            )),
            (l()(), e.Kb(41, null, ["", ""])),
            e.Eb(131072, u.j, [u.k, e.h]),
          ],
          function (l, n) {
            var t = n.component;
            l(n, 6, 0, t.customBetList),
              l(n, 8, 0, t.customBetList),
              l(n, 14, 0, t.showStakeInfo);
          },
          function (l, n) {
            var t = n.component;
            l(n, 3, 0, e.Lb(n, 3, 0, e.Cb(n, 4).transform("Edit Stakes"))),
              l(n, 11, 0, e.Lb(n, 11, 0, e.Cb(n, 12).transform("Format"))),
              l(
                n,
                17,
                0,
                "true" ===
                  t.object
                    .getUtilInstance()
                    .getStore(t.object.getConstants().STORAGE.showRoundOffStake)
              ),
              l(
                n,
                21,
                0,
                e.Lb(n, 21, 0, e.Cb(n, 22).transform("Accept Any Odds"))
              ),
              l(n, 24, 0, t.acceptanyOddsMO),
              l(n, 26, 0, e.Lb(n, 26, 0, e.Cb(n, 27).transform("Match Odds"))),
              l(n, 28, 0, t.acceptanyOddsBM),
              l(n, 30, 0, e.Lb(n, 30, 0, e.Cb(n, 31).transform("BookMaker"))),
              l(n, 32, 0, t.acceptanyOddsFN),
              l(n, 34, 0, e.Lb(n, 34, 0, e.Cb(n, 35).transform("Fancy"))),
              l(n, 38, 0, e.Lb(n, 38, 0, e.Cb(n, 39).transform("Cancel"))),
              l(n, 41, 0, e.Lb(n, 41, 0, e.Cb(n, 42).transform("save")));
          }
        );
      }
      function en(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              3,
              "div",
              [["class", "betslip-error"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(1, null, ["", " ", " ", " ", ""])),
            e.Eb(131072, u.j, [u.k, e.h]),
            e.Eb(131072, u.j, [u.k, e.h]),
          ],
          null,
          function (l, n) {
            var t = n.component;
            l(
              n,
              1,
              0,
              e.Lb(
                n,
                1,
                0,
                e.Cb(n, 2).transform("Bet Odds must be minimum of")
              ),
              null != n.parent.context.$implicit &&
                n.parent.context.$implicit.isFancy
                ? t.minFancy
                : t.min,
              e.Lb(n, 1, 2, e.Cb(n, 3).transform("and maximum of")),
              t.max
            );
          }
        );
      }
      function un(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              2,
              "div",
              [["class", "betslip-error"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(1, null, ["", "!"])),
            e.Eb(131072, u.j, [u.k, e.h]),
          ],
          null,
          function (l, n) {
            l(
              n,
              1,
              0,
              e.Lb(
                n,
                1,
                0,
                e
                  .Cb(n, 2)
                  .transform("Bet with Same Stake and Odds can't be updated")
              )
            );
          }
        );
      }
      function an(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              2,
              "div",
              [["class", "betslip-error"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(1, null, ["", "!"])),
            e.Eb(131072, u.j, [u.k, e.h]),
          ],
          null,
          function (l, n) {
            l(
              n,
              1,
              0,
              e.Lb(
                n,
                1,
                0,
                e
                  .Cb(n, 2)
                  .transform("The stake you have entered are above maximum")
              )
            );
          }
        );
      }
      function cn(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              2,
              "div",
              [["class", "betslip-error"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(1, null, ["", "!"])),
            e.Eb(131072, u.j, [u.k, e.h]),
          ],
          null,
          function (l, n) {
            l(
              n,
              1,
              0,
              e.Lb(
                n,
                1,
                0,
                e
                  .Cb(n, 2)
                  .transform("The stake you have entered are below minimum")
              )
            );
          }
        );
      }
      function on(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              2,
              "div",
              [["class", "betslip-error"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(1, null, ["", "!"])),
            e.Eb(131072, u.j, [u.k, e.h]),
          ],
          null,
          function (l, n) {
            l(
              n,
              1,
              0,
              e.Lb(
                n,
                1,
                0,
                e.Cb(n, 2).transform("Stake value can not be reduced")
              )
            );
          }
        );
      }
      function sn(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              4,
              "div",
              [["class", "lay-text display-ib"]],
              null,
              null,
              null,
              null,
              null
            )),
            e.Hb(512, null, i.A, i.B, [e.q, e.r, e.k, e.B]),
            e.pb(
              2,
              278528,
              null,
              0,
              i.l,
              [i.A],
              {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"],
              },
              null
            ),
            (l()(),
            e.qb(
              3,
              0,
              null,
              null,
              1,
              "span",
              [["class", "lay-heading"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(4, null, ["", ""])),
          ],
          function (l, n) {
            l(
              n,
              2,
              0,
              "lay-text display-ib",
              0 == n.parent.context.$implicit.sideType ||
                2 == n.parent.context.$implicit.sideType
                ? "back-bg"
                : ""
            );
          },
          function (l, n) {
            l(
              n,
              4,
              0,
              0 == n.parent.context.$implicit.sideType ? "BACK" : "LAY"
            );
          }
        );
      }
      function rn(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              1,
              "span",
              [["class", "lay-heading"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(1, null, ["", ""])),
          ],
          null,
          function (l, n) {
            l(
              n,
              1,
              0,
              3 == n.parent.parent.context.$implicit.sideType
                ? "No"
                : 2 == n.parent.parent.context.$implicit.sideType &&
                  "Khado_Market" ==
                    (null == n.parent.parent.context.$implicit
                      ? null
                      : n.parent.parent.context.$implicit.fancyMarketCategory)
                ? "Back"
                : "Yes"
            );
          }
        );
      }
      function pn(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              6,
              "div",
              [["class", "lay-text display-ib"]],
              null,
              null,
              null,
              null,
              null
            )),
            e.Hb(512, null, i.A, i.B, [e.q, e.r, e.k, e.B]),
            e.pb(
              2,
              278528,
              null,
              0,
              i.l,
              [i.A],
              {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"],
              },
              null
            ),
            (l()(),
            e.qb(
              3,
              0,
              null,
              null,
              1,
              "span",
              [["class", "lay-heading"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(4, null, ["", ""])),
            (l()(), e.fb(16777216, null, null, 1, null, rn)),
            e.pb(
              6,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
          ],
          function (l, n) {
            l(
              n,
              2,
              0,
              "lay-text display-ib",
              0 == n.parent.context.$implicit.sideType ||
                2 == n.parent.context.$implicit.sideType
                ? "back-bg"
                : ""
            ),
              l(
                n,
                6,
                0,
                0 != n.parent.context.$implicit.sideType &&
                  1 != n.parent.context.$implicit.sideType
              );
          },
          function (l, n) {
            l(
              n,
              4,
              0,
              0 == n.parent.context.$implicit.sideType
                ? "Back"
                : 1 == n.parent.context.$implicit.sideType
                ? "Lay"
                : ""
            );
          }
        );
      }
      function bn(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              5,
              "span",
              [["class", "lay-team-heading display-ib"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(1, null, [" ", " "])),
            e.Gb(2, 1),
            e.Gb(3, 1),
            (l()(),
            e.qb(4, 0, null, null, 1, "p", [], null, null, null, null, null)),
            (l()(), e.Kb(5, null, [" ", " "])),
          ],
          null,
          function (l, n) {
            var t = e.Lb(
              n,
              1,
              0,
              (null != n.parent.context.$implicit &&
                n.parent.context.$implicit.isCasino) ||
                "Bookmaker_Disc" ==
                  (null == n.parent.context.$implicit
                    ? null
                    : n.parent.context.$implicit.fancyMarketCategory)
                ? l(
                    n,
                    2,
                    0,
                    e.Cb(n.parent.parent.parent, 2),
                    null == n.parent.context.$implicit
                      ? null
                      : null == n.parent.context.$implicit.match
                      ? null
                      : n.parent.context.$implicit.match.runnerName
                  )
                : l(
                    n,
                    3,
                    0,
                    e.Cb(n.parent.parent.parent, 2),
                    null == n.parent.context.$implicit
                      ? null
                      : n.parent.context.$implicit.marketType
                  )
            );
            l(n, 1, 0, t);
            var u =
              null != n.parent.context.$implicit &&
              n.parent.context.$implicit.fancyMarketCategory.includes("_")
                ? (null == n.parent.context.$implicit
                    ? null
                    : n.parent.context.$implicit.fancyMarketCategory.split(
                        "_"
                      )[0]) +
                  " " +
                  (null == n.parent.context.$implicit
                    ? null
                    : n.parent.context.$implicit.fancyMarketCategory.split(
                        "_"
                      )[1])
                : null == n.parent.context.$implicit
                ? null
                : n.parent.context.$implicit.fancyMarketCategory;
            l(n, 5, 0, u);
          }
        );
      }
      function dn(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              5,
              "span",
              [["class", "lay-team-heading display-ib"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(1, null, [" ", " "])),
            (l()(),
            e.qb(2, 0, null, null, 3, "p", [], null, null, null, null, null)),
            (l()(), e.Kb(3, null, ["", " "])),
            e.Gb(4, 1),
            e.Gb(5, 1),
          ],
          null,
          function (l, n) {
            l(
              n,
              1,
              0,
              null == n.parent.context.$implicit
                ? null
                : n.parent.context.$implicit.runnerName
            );
            var t =
              null != n.parent.context.$implicit &&
              n.parent.context.$implicit.marketType.includes("_")
                ? e.Lb(
                    n,
                    3,
                    0,
                    l(
                      n,
                      4,
                      0,
                      e.Cb(n.parent.parent.parent, 2),
                      null == n.parent.context.$implicit
                        ? null
                        : n.parent.context.$implicit.marketType.split("_")[0]
                    )
                  ) +
                  " " +
                  e.Lb(
                    n,
                    3,
                    0,
                    l(
                      n,
                      5,
                      0,
                      e.Cb(n.parent.parent.parent, 2),
                      null == n.parent.context.$implicit
                        ? null
                        : n.parent.context.$implicit.marketType.split("_")[1]
                    )
                  )
                : null == n.parent.context.$implicit
                ? null
                : n.parent.context.$implicit.marketType;
            l(n, 3, 0, t);
          }
        );
      }
      function gn(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              8,
              "div",
              [["class", "col-md-5 text-right"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              3,
              "div",
              [["class", "profit-text display-ib"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              2,
              0,
              null,
              null,
              2,
              "span",
              [["class", "profit-text"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(3, null, ["", " : "])),
            e.Eb(131072, u.j, [u.k, e.h]),
            (l()(),
            e.qb(
              5,
              0,
              null,
              null,
              3,
              "div",
              [["class", "profit-value display-ib"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(6, null, [" ", " "])),
            e.Gb(7, 1),
            e.Gb(8, 1),
          ],
          null,
          function (l, n) {
            l(n, 3, 0, e.Lb(n, 3, 0, e.Cb(n, 4).transform("Profit")));
            var t =
              "Meter_Market" ==
              (null == n.parent.context.$implicit
                ? null
                : n.parent.context.$implicit.fancyMarketCategory)
                ? "-"
                : e.Lb(
                    n,
                    6,
                    0,
                    "AM" == n.parent.context.$implicit.oddType
                      ? l(
                          n,
                          7,
                          0,
                          e.Cb(n.parent.parent.parent, 3),
                          (n.parent.context.$implicit.odds / 100) *
                            n.parent.context.$implicit.exchangeStake
                        )
                      : l(
                          n,
                          8,
                          0,
                          e.Cb(n.parent.parent.parent, 3),
                          n.parent.context.$implicit.exchangeStake *
                            (n.parent.context.$implicit.odds - 1)
                        )
                  );
            l(n, 6, 0, t);
          }
        );
      }
      function mn(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              3,
              "div",
              [["class", "loss-value display-ib"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(1, null, [" ", " "])),
            e.Gb(2, 1),
            e.Gb(3, 1),
          ],
          null,
          function (l, n) {
            var t =
              "Meter_Market" ==
              (null == n.parent.parent.context.$implicit
                ? null
                : n.parent.parent.context.$implicit.fancyMarketCategory)
                ? "-"
                : e.Lb(
                    n,
                    1,
                    0,
                    "AM" == n.parent.parent.context.$implicit.oddType
                      ? l(
                          n,
                          2,
                          0,
                          e.Cb(n.parent.parent.parent.parent, 4),
                          (n.parent.parent.context.$implicit.odds / 100) *
                            n.parent.parent.context.$implicit.exchangeStake
                        )
                      : l(
                          n,
                          3,
                          0,
                          e.Cb(n.parent.parent.parent.parent, 4),
                          n.parent.parent.context.$implicit.exchangeStake *
                            (n.parent.parent.context.$implicit.odds - 1)
                        )
                  );
            l(n, 1, 0, t);
          }
        );
      }
      function hn(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              2,
              "div",
              [["class", "loss-value display-ib"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(1, null, [" ", " "])),
            e.Gb(2, 1),
          ],
          null,
          function (l, n) {
            var t = e.Lb(
              n,
              1,
              0,
              l(
                n,
                2,
                0,
                e.Cb(n.parent.parent.parent.parent, 5),
                (n.parent.parent.context.$implicit.odds / 100) *
                  n.parent.parent.context.$implicit.exchangeStake *
                  (1 -
                    (null == n.parent.parent.context.$implicit
                      ? null
                      : n.parent.parent.context.$implicit.marketDisc) /
                      100)
              )
            );
            l(n, 1, 0, t);
          }
        );
      }
      function fn(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              8,
              "div",
              [["class", "col-md-5  text-right"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              3,
              "div",
              [["class", "profit-text display-ib"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              2,
              0,
              null,
              null,
              2,
              "span",
              [["class", "profit-text"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(3, null, ["", " :"])),
            e.Eb(131072, u.j, [u.k, e.h]),
            (l()(), e.fb(16777216, null, null, 1, null, mn)),
            e.pb(
              6,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, hn)),
            e.pb(
              8,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
          ],
          function (l, n) {
            l(
              n,
              6,
              0,
              "Bookmaker_Disc" !=
                (null == n.parent.context.$implicit
                  ? null
                  : n.parent.context.$implicit.fancyMarketCategory)
            ),
              l(
                n,
                8,
                0,
                "Bookmaker_Disc" ==
                  (null == n.parent.context.$implicit
                    ? null
                    : n.parent.context.$implicit.fancyMarketCategory)
              );
          },
          function (l, n) {
            l(n, 3, 0, e.Lb(n, 3, 0, e.Cb(n, 4).transform("Liability")));
          }
        );
      }
      function xn(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              10,
              "div",
              [["class", "maxminbet"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(1, 0, null, null, 4, "div", [], null, null, null, null, null)),
            (l()(),
            e.qb(
              2,
              0,
              null,
              null,
              1,
              "div",
              [["class", "maxtit"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(-1, null, ["Min"])),
            (l()(), e.Kb(4, null, [" ", " "])),
            e.Gb(5, 1),
            (l()(),
            e.qb(6, 0, null, null, 4, "div", [], null, null, null, null, null)),
            (l()(),
            e.qb(
              7,
              0,
              null,
              null,
              1,
              "div",
              [["class", "maxtit"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(-1, null, ["Max"])),
            (l()(), e.Kb(9, null, [" ", " "])),
            e.Gb(10, 2),
          ],
          null,
          function (l, n) {
            var t = e.Lb(
              n,
              4,
              0,
              l(
                n,
                5,
                0,
                e.Cb(n.parent.parent.parent, 6),
                null == n.parent.context.$implicit
                  ? null
                  : n.parent.context.$implicit.minStake
              )
            );
            l(n, 4, 0, t);
            var u = e.Lb(
              n,
              9,
              0,
              l(
                n,
                10,
                0,
                e.Cb(n.parent.parent.parent, 3),
                null == n.parent.context.$implicit
                  ? null
                  : n.parent.context.$implicit.maxStake,
                "noDeciaml"
              )
            );
            l(n, 9, 0, u);
          }
        );
      }
      function Cn(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              3,
              "div",
              [["class", "decrement-button display-ib"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              2,
              "input",
              [
                ["type", "button"],
                ["value", "-"],
              ],
              [[8, "disabled", 0]],
              [[null, "click"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "click" === n &&
                    (e =
                      !1 !==
                        l.component.handleDecreaseRate(
                          l.parent.context.$implicit.odds,
                          l.parent.context.index
                        ) && e),
                  e
                );
              },
              null,
              null
            )),
            e.Hb(512, null, i.A, i.B, [e.q, e.r, e.k, e.B]),
            e.pb(
              3,
              278528,
              null,
              0,
              i.l,
              [i.A],
              {
                ngClass: [0, "ngClass"],
              },
              null
            ),
          ],
          function (l, n) {
            l(
              n,
              3,
              0,
              null != n.parent.context.$implicit &&
                n.parent.context.$implicit.isFancy
                ? "incre-decre-btn-bg minplsdec"
                : "incre-decre-btn-bg"
            );
          },
          function (l, n) {
            var t = n.component;
            l(
              n,
              1,
              0,
              t.isOddsEdited[n.parent.context.index] ||
                (null == n.parent.context.$implicit
                  ? null
                  : n.parent.context.$implicit.isFancy) ||
                t.UnmatchedstakeUpdated[n.parent.context.index]
            );
          }
        );
      }
      function kn(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              9,
              "input",
              [
                ["class", "bet-input-bg selectable-all"],
                ["noRightClick", ""],
                ["numberOnly", ""],
                ["pattern", "[0-9.]+"],
                ["type", "text"],
              ],
              [
                [8, "id", 0],
                [1, "pattern", 0],
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null],
              ],
              [
                [null, "ngModelChange"],
                [null, "keyup"],
                [null, "input"],
                [null, "blur"],
                [null, "compositionstart"],
                [null, "compositionend"],
                [null, "contextmenu"],
                [null, "keydown"],
              ],
              function (l, n, t) {
                var u = !0,
                  i = l.component;
                return (
                  "input" === n &&
                    (u = !1 !== e.Cb(l, 1)._handleInput(t.target.value) && u),
                  "blur" === n && (u = !1 !== e.Cb(l, 1).onTouched() && u),
                  "compositionstart" === n &&
                    (u = !1 !== e.Cb(l, 1)._compositionStart() && u),
                  "compositionend" === n &&
                    (u =
                      !1 !== e.Cb(l, 1)._compositionEnd(t.target.value) && u),
                  "contextmenu" === n &&
                    (u = !1 !== e.Cb(l, 8).onRightClick(t) && u),
                  "keydown" === n && (u = !1 !== e.Cb(l, 9).onKeyDown(t) && u),
                  "ngModelChange" === n &&
                    (u =
                      !1 !==
                        (l.parent.context.$implicit.runs
                          ? l.parent.context.$implicit.runs
                          : (l.parent.context.$implicit.odds = t)) && u),
                  "keyup" === n &&
                    (u =
                      !1 !==
                        i.isEditOdds(
                          l.parent.context.$implicit,
                          t,
                          l.parent.context.index
                        ) && u),
                  "ngModelChange" === n && (u = !1 !== i.betSlipChange() && u),
                  u
                );
              },
              null,
              null
            )),
            e.pb(1, 16384, null, 0, a.d, [e.B, e.k, [2, a.a]], null, null),
            e.pb(
              2,
              540672,
              null,
              0,
              a.u,
              [],
              {
                pattern: [0, "pattern"],
              },
              null
            ),
            e.Hb(
              1024,
              null,
              a.l,
              function (l) {
                return [l];
              },
              [a.u]
            ),
            e.Hb(
              1024,
              null,
              a.m,
              function (l) {
                return [l];
              },
              [a.d]
            ),
            e.pb(
              5,
              671744,
              null,
              0,
              a.r,
              [
                [8, null],
                [6, a.l],
                [8, null],
                [6, a.m],
              ],
              {
                isDisabled: [0, "isDisabled"],
                model: [1, "model"],
              },
              {
                update: "ngModelChange",
              }
            ),
            e.Hb(2048, null, a.n, null, [a.r]),
            e.pb(7, 16384, null, 0, a.o, [[4, a.n]], null, null),
            e.pb(8, 16384, null, 0, c.a, [], null, null),
            e.pb(9, 16384, null, 0, r.a, [e.k], null, null),
          ],
          function (l, n) {
            var t = n.component;
            l(n, 2, 0, "[0-9.]+"),
              l(
                n,
                5,
                0,
                t.isOddsEdited[n.parent.context.index] ||
                  (null == n.parent.context.$implicit
                    ? null
                    : n.parent.context.$implicit.isFancy) ||
                  t.UnmatchedstakeUpdated[n.parent.context.index],
                n.parent.context.$implicit.runs
                  ? n.parent.context.$implicit.runs
                  : n.parent.context.$implicit.odds
              );
          },
          function (l, n) {
            l(
              n,
              0,
              0,
              "bet-slip-" + n.parent.context.index,
              e.Cb(n, 2).pattern ? e.Cb(n, 2).pattern : null,
              e.Cb(n, 7).ngClassUntouched,
              e.Cb(n, 7).ngClassTouched,
              e.Cb(n, 7).ngClassPristine,
              e.Cb(n, 7).ngClassDirty,
              e.Cb(n, 7).ngClassValid,
              e.Cb(n, 7).ngClassInvalid,
              e.Cb(n, 7).ngClassPending
            );
          }
        );
      }
      function vn(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              9,
              "input",
              [
                ["class", "bet-input-bg selectable-all"],
                ["noRightClick", ""],
                ["numberOnly", ""],
                ["pattern", "[0-9.]+"],
                ["type", "text"],
              ],
              [
                [8, "id", 0],
                [1, "pattern", 0],
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null],
              ],
              [
                [null, "ngModelChange"],
                [null, "keyup"],
                [null, "input"],
                [null, "blur"],
                [null, "compositionstart"],
                [null, "compositionend"],
                [null, "contextmenu"],
                [null, "keydown"],
              ],
              function (l, n, t) {
                var u = !0,
                  i = l.component;
                return (
                  "input" === n &&
                    (u = !1 !== e.Cb(l, 1)._handleInput(t.target.value) && u),
                  "blur" === n && (u = !1 !== e.Cb(l, 1).onTouched() && u),
                  "compositionstart" === n &&
                    (u = !1 !== e.Cb(l, 1)._compositionStart() && u),
                  "compositionend" === n &&
                    (u =
                      !1 !== e.Cb(l, 1)._compositionEnd(t.target.value) && u),
                  "contextmenu" === n &&
                    (u = !1 !== e.Cb(l, 8).onRightClick(t) && u),
                  "keydown" === n && (u = !1 !== e.Cb(l, 9).onKeyDown(t) && u),
                  "ngModelChange" === n &&
                    (u = !1 !== (l.parent.context.$implicit.runs = t) && u),
                  "keyup" === n &&
                    (u =
                      !1 !==
                        i.isEditOdds(
                          l.parent.context.$implicit,
                          t,
                          l.parent.context.index
                        ) && u),
                  "ngModelChange" === n && (u = !1 !== i.betSlipChange() && u),
                  u
                );
              },
              null,
              null
            )),
            e.pb(1, 16384, null, 0, a.d, [e.B, e.k, [2, a.a]], null, null),
            e.pb(
              2,
              540672,
              null,
              0,
              a.u,
              [],
              {
                pattern: [0, "pattern"],
              },
              null
            ),
            e.Hb(
              1024,
              null,
              a.l,
              function (l) {
                return [l];
              },
              [a.u]
            ),
            e.Hb(
              1024,
              null,
              a.m,
              function (l) {
                return [l];
              },
              [a.d]
            ),
            e.pb(
              5,
              671744,
              null,
              0,
              a.r,
              [
                [8, null],
                [6, a.l],
                [8, null],
                [6, a.m],
              ],
              {
                isDisabled: [0, "isDisabled"],
                model: [1, "model"],
              },
              {
                update: "ngModelChange",
              }
            ),
            e.Hb(2048, null, a.n, null, [a.r]),
            e.pb(7, 16384, null, 0, a.o, [[4, a.n]], null, null),
            e.pb(8, 16384, null, 0, c.a, [], null, null),
            e.pb(9, 16384, null, 0, r.a, [e.k], null, null),
          ],
          function (l, n) {
            var t = n.component;
            l(n, 2, 0, "[0-9.]+"),
              l(
                n,
                5,
                0,
                t.isOddsEdited[n.parent.context.index] ||
                  (null == n.parent.context.$implicit
                    ? null
                    : n.parent.context.$implicit.isFancy),
                n.parent.context.$implicit.runs
              );
          },
          function (l, n) {
            l(
              n,
              0,
              0,
              "bet-slip-" + n.parent.context.index,
              e.Cb(n, 2).pattern ? e.Cb(n, 2).pattern : null,
              e.Cb(n, 7).ngClassUntouched,
              e.Cb(n, 7).ngClassTouched,
              e.Cb(n, 7).ngClassPristine,
              e.Cb(n, 7).ngClassDirty,
              e.Cb(n, 7).ngClassValid,
              e.Cb(n, 7).ngClassInvalid,
              e.Cb(n, 7).ngClassPending
            );
          }
        );
      }
      function Mn(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              10,
              "input",
              [
                ["class", "bet-input-bg selectable-all"],
                ["noRightClick", ""],
                ["numberOnly", ""],
                ["pattern", "[0-9.]+"],
                ["positiveNumberOnly", ""],
                ["type", "text"],
              ],
              [
                [8, "id", 0],
                [1, "pattern", 0],
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null],
              ],
              [
                [null, "ngModelChange"],
                [null, "keyup"],
                [null, "input"],
                [null, "blur"],
                [null, "compositionstart"],
                [null, "compositionend"],
                [null, "contextmenu"],
                [null, "keydown"],
                [null, "keypress"],
              ],
              function (l, n, t) {
                var u = !0,
                  i = l.component;
                return (
                  "input" === n &&
                    (u = !1 !== e.Cb(l, 1)._handleInput(t.target.value) && u),
                  "blur" === n && (u = !1 !== e.Cb(l, 1).onTouched() && u),
                  "compositionstart" === n &&
                    (u = !1 !== e.Cb(l, 1)._compositionStart() && u),
                  "compositionend" === n &&
                    (u =
                      !1 !== e.Cb(l, 1)._compositionEnd(t.target.value) && u),
                  "contextmenu" === n &&
                    (u = !1 !== e.Cb(l, 8).onRightClick(t) && u),
                  "keydown" === n && (u = !1 !== e.Cb(l, 9).onKeyDown(t) && u),
                  "keypress" === n &&
                    (u = !1 !== e.Cb(l, 10).onInputChange(t) && u),
                  "ngModelChange" === n &&
                    (u = !1 !== (l.parent.context.$implicit.runs = t) && u),
                  "keyup" === n &&
                    (u =
                      !1 !==
                        i.isEditOdds(
                          l.parent.context.$implicit,
                          t,
                          l.parent.context.index
                        ) && u),
                  "ngModelChange" === n && (u = !1 !== i.betSlipChange() && u),
                  u
                );
              },
              null,
              null
            )),
            e.pb(1, 16384, null, 0, a.d, [e.B, e.k, [2, a.a]], null, null),
            e.pb(
              2,
              540672,
              null,
              0,
              a.u,
              [],
              {
                pattern: [0, "pattern"],
              },
              null
            ),
            e.Hb(
              1024,
              null,
              a.l,
              function (l) {
                return [l];
              },
              [a.u]
            ),
            e.Hb(
              1024,
              null,
              a.m,
              function (l) {
                return [l];
              },
              [a.d]
            ),
            e.pb(
              5,
              671744,
              null,
              0,
              a.r,
              [
                [8, null],
                [6, a.l],
                [8, null],
                [6, a.m],
              ],
              {
                isDisabled: [0, "isDisabled"],
                model: [1, "model"],
              },
              {
                update: "ngModelChange",
              }
            ),
            e.Hb(2048, null, a.n, null, [a.r]),
            e.pb(7, 16384, null, 0, a.o, [[4, a.n]], null, null),
            e.pb(8, 16384, null, 0, c.a, [], null, null),
            e.pb(9, 16384, null, 0, r.a, [e.k], null, null),
            e.pb(10, 16384, null, 0, s, [e.k], null, null),
          ],
          function (l, n) {
            var t = n.component;
            l(n, 2, 0, "[0-9.]+"),
              l(
                n,
                5,
                0,
                t.isOddsEdited[n.parent.context.index] ||
                  "Fancy_Market" ==
                    n.parent.context.$implicit.fancyMarketCategory,
                n.parent.context.$implicit.runs
              );
          },
          function (l, n) {
            l(
              n,
              0,
              0,
              "bet-slip-" + n.parent.context.index,
              e.Cb(n, 2).pattern ? e.Cb(n, 2).pattern : null,
              e.Cb(n, 7).ngClassUntouched,
              e.Cb(n, 7).ngClassTouched,
              e.Cb(n, 7).ngClassPristine,
              e.Cb(n, 7).ngClassDirty,
              e.Cb(n, 7).ngClassValid,
              e.Cb(n, 7).ngClassInvalid,
              e.Cb(n, 7).ngClassPending
            );
          }
        );
      }
      function yn(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              5,
              "div",
              [["class", "increment-button"]],
              null,
              null,
              null,
              null,
              null
            )),
            e.Hb(512, null, i.A, i.B, [e.q, e.r, e.k, e.B]),
            e.pb(
              2,
              278528,
              null,
              0,
              i.l,
              [i.A],
              {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"],
              },
              null
            ),
            (l()(),
            e.qb(
              3,
              0,
              null,
              null,
              2,
              "input",
              [
                ["class", "btn-radius incre-decre-btn-bg"],
                ["type", "button"],
                ["value", "+"],
              ],
              [[8, "disabled", 0]],
              [[null, "click"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "click" === n &&
                    (e =
                      !1 !==
                        l.component.handleIncreaseRate(
                          l.parent.context.$implicit.odds,
                          l.parent.context.index
                        ) && e),
                  e
                );
              },
              null,
              null
            )),
            e.Hb(512, null, i.A, i.B, [e.q, e.r, e.k, e.B]),
            e.pb(
              5,
              278528,
              null,
              0,
              i.l,
              [i.A],
              {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"],
              },
              null
            ),
          ],
          function (l, n) {
            l(
              n,
              2,
              0,
              "increment-button",
              null != n.parent.context.$implicit &&
                n.parent.context.$implicit.isFancy
                ? "disablepls"
                : "increment-button"
            ),
              l(
                n,
                5,
                0,
                "btn-radius incre-decre-btn-bg",
                null != n.parent.context.$implicit &&
                  n.parent.context.$implicit.isFancy
                  ? "btn-radius incre-decre-btn-bg minplsdec"
                  : "btn-radius incre-decre-btn-bg"
              );
          },
          function (l, n) {
            var t = n.component;
            l(
              n,
              3,
              0,
              t.isOddsEdited[n.parent.context.index] ||
                (null == n.parent.context.$implicit
                  ? null
                  : n.parent.context.$implicit.isFancy) ||
                t.UnmatchedstakeUpdated[n.parent.context.index]
            );
          }
        );
      }
      function $n(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              3,
              "a",
              [["href", "javascript:void(0)"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(1, null, ["", ""])),
            e.Gb(2, 1),
            e.Gb(3, 2),
          ],
          null,
          function (l, n) {
            var t = n.component,
              u = t.minStakeError[n.parent.context.index]
                ? "Min:" +
                  e.Lb(
                    n,
                    1,
                    0,
                    l(
                      n,
                      2,
                      0,
                      e.Cb(n.parent.parent.parent, 6),
                      null == n.parent.context.$implicit
                        ? null
                        : n.parent.context.$implicit.minStake
                    )
                  )
                : t.maxStakeError[n.parent.context.index]
                ? "Max:" +
                  e.Lb(
                    n,
                    1,
                    0,
                    l(
                      n,
                      3,
                      0,
                      e.Cb(n.parent.parent.parent, 3),
                      null == n.parent.context.$implicit
                        ? null
                        : n.parent.context.$implicit.maxStake,
                      "noDeciaml"
                    )
                  )
                : "";
            l(n, 1, 0, u);
          }
        );
      }
      function On(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              2,
              "button",
              [["style", "flex: 1 20%;"]],
              null,
              [[null, "click"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "click" === n &&
                    (e =
                      !1 !==
                        l.component.setBetPrice(
                          l.context.$implicit.price,
                          l.parent.context.index
                        ) && e),
                  e
                );
              },
              null,
              null
            )),
            (l()(), e.Kb(1, null, ["", ""])),
            e.Gb(2, 1),
          ],
          null,
          function (l, n) {
            var t =
              "+clear" == n.context.$implicit.val
                ? "clear"
                : e.Lb(
                    n,
                    1,
                    0,
                    l(
                      n,
                      2,
                      0,
                      e.Cb(n.parent.parent.parent, 1),
                      n.context.$implicit.val
                    )
                  );
            l(n, 1, 0, t);
          }
        );
      }
      function In(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              3,
              "div",
              [["style", "padding-left:10px;"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              0,
              "input",
              [["type", "checkbox"]],
              [[8, "checked", 0]],
              [[null, "change"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "change" === n &&
                    (e =
                      !1 !== l.component.acceptAnyOdds(t.target.checked) && e),
                  e
                );
              },
              null,
              null
            )),
            (l()(), e.Kb(2, null, [" ", " "])),
            e.Eb(131072, u.j, [u.k, e.h]),
          ],
          null,
          function (l, n) {
            l(n, 1, 0, n.component.acceptanyOddsFN),
              l(
                n,
                2,
                0,
                e.Lb(n, 2, 0, e.Cb(n, 3).transform("Accept Any Odds"))
              );
          }
        );
      }
      function Sn(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              3,
              "div",
              [["style", "padding-left:10px;"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              0,
              "input",
              [["type", "checkbox"]],
              [[8, "checked", 0]],
              [[null, "change"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "change" === n &&
                    (e =
                      !1 !== l.component.acceptAnyOdds(t.target.checked) && e),
                  e
                );
              },
              null,
              null
            )),
            (l()(), e.Kb(2, null, [" ", " "])),
            e.Eb(131072, u.j, [u.k, e.h]),
          ],
          null,
          function (l, n) {
            l(n, 1, 0, n.component.acceptanyOddsBM),
              l(
                n,
                2,
                0,
                e.Lb(n, 2, 0, e.Cb(n, 3).transform("Accept Any Odds"))
              );
          }
        );
      }
      function _n(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              3,
              "div",
              [["style", "padding-left:10px;"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              0,
              "input",
              [["type", "checkbox"]],
              [[8, "checked", 0]],
              [[null, "change"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "change" === n &&
                    (e =
                      !1 !== l.component.acceptAnyOdds(t.target.checked) && e),
                  e
                );
              },
              null,
              null
            )),
            (l()(), e.Kb(2, null, [" ", " "])),
            e.Eb(131072, u.j, [u.k, e.h]),
          ],
          null,
          function (l, n) {
            l(n, 1, 0, n.component.acceptanyOddsMO),
              l(
                n,
                2,
                0,
                e.Lb(n, 2, 0, e.Cb(n, 3).transform("Accept Any Odds"))
              );
          }
        );
      }
      function qn(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              0,
              "input",
              [
                ["id", "oddBets"],
                ["type", "button"],
                ["value", "\u2713 PLACE BET"],
              ],
              [[8, "disabled", 0]],
              [[null, "click"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "click" === n &&
                    (e =
                      !1 !==
                        l.component.savePlaceBet(
                          l.parent.parent.parent.context.$implicit,
                          l.parent.parent.parent.context.index,
                          t
                        ) && e),
                  e
                );
              },
              null,
              null
            )),
          ],
          null,
          function (l, n) {
            var t = n.component;
            l(
              n,
              0,
              0,
              t.betAPI ||
                t.minStakeError[n.parent.parent.parent.context.index] ||
                t.maxStakeError[n.parent.parent.parent.context.index]
            );
          }
        );
      }
      function Pn(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              0,
              "input",
              [
                ["id", "fancyBet"],
                ["type", "button"],
                ["value", "\u2713 PLACE BET"],
              ],
              [[8, "disabled", 0]],
              [[null, "click"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "click" === n &&
                    (e =
                      !1 !==
                        l.component.handleFancyBetPlace(
                          l.parent.parent.parent.context.$implicit,
                          l.parent.parent.parent.context.index,
                          t
                        ) && e),
                  e
                );
              },
              null,
              null
            )),
          ],
          null,
          function (l, n) {
            var t = n.component;
            l(
              n,
              0,
              0,
              t.betAPI ||
                t.minStakeError[n.parent.parent.parent.context.index] ||
                t.maxStakeError[n.parent.parent.parent.context.index]
            );
          }
        );
      }
      function Ln(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              0,
              "input",
              [
                ["id", "editBet"],
                ["type", "button"],
                ["value", "Update Bet"],
              ],
              [[8, "disabled", 0]],
              [[null, "click"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "click" === n &&
                    (e =
                      !1 !==
                        l.component.updatePlaceBet(
                          l.parent.parent.parent.context.$implicit,
                          l.parent.parent.parent.context.index
                        ) && e),
                  e
                );
              },
              null,
              null
            )),
          ],
          null,
          function (l, n) {
            var t = n.component;
            l(
              n,
              0,
              0,
              t.betAPI ||
                t.minStakeError[n.parent.parent.parent.context.index] ||
                t.maxStakeError[n.parent.parent.parent.context.index]
            );
          }
        );
      }
      function En(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              6,
              "div",
              [["class", "place-bet"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, qn)),
            e.pb(
              2,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, Pn)),
            e.pb(
              4,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, Ln)),
            e.pb(
              6,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
          ],
          function (l, n) {
            var t = n.component;
            l(
              n,
              2,
              0,
              n.parent.parent.context.$implicit.action ==
                t.object.getConstants().ACTIONS.ADD &&
                !n.parent.parent.context.$implicit.isFancy
            ),
              l(
                n,
                4,
                0,
                n.parent.parent.context.$implicit.action ==
                  t.object.getConstants().ACTIONS.ADD &&
                  n.parent.parent.context.$implicit.isFancy
              ),
              l(
                n,
                6,
                0,
                n.parent.parent.context.$implicit.action ==
                  t.object.getConstants().ACTIONS.EDIT
              );
          },
          null
        );
      }
      function Tn(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              2,
              "div",
              [["class", "col-md-6 pr-12"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, En)),
            e.pb(
              2,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
          ],
          function (l, n) {
            l(
              n,
              2,
              0,
              n.component.object.getLoginInstance().state.writeprivilege
            );
          },
          null
        );
      }
      function wn(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              78,
              "div",
              [["class", "lay-container text-left "]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, en)),
            e.pb(
              2,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, un)),
            e.pb(
              4,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, an)),
            e.pb(
              6,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, cn)),
            e.pb(
              8,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, on)),
            e.pb(
              10,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(),
            e.qb(
              11,
              0,
              null,
              null,
              16,
              "div",
              [["class", "row margin-0 padding-0 bet-slip-div"]],
              [[8, "id", 0]],
              null,
              null,
              null,
              null
            )),
            e.Hb(512, null, i.A, i.B, [e.q, e.r, e.k, e.B]),
            e.pb(
              13,
              278528,
              null,
              0,
              i.l,
              [i.A],
              {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"],
              },
              null
            ),
            (l()(),
            e.qb(
              14,
              0,
              null,
              null,
              9,
              "div",
              [["class", "col-md-8 padding-0"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, sn)),
            e.pb(
              16,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, pn)),
            e.pb(
              18,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(),
            e.qb(
              19,
              0,
              null,
              null,
              4,
              "div",
              [["class", "lay-team display-ib"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, bn)),
            e.pb(
              21,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, dn)),
            e.pb(
              23,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, gn)),
            e.pb(
              25,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, fn)),
            e.pb(
              27,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, xn)),
            e.pb(
              29,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(),
            e.qb(
              30,
              0,
              null,
              null,
              36,
              "div",
              [["class", "wrapper_button"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              31,
              0,
              null,
              null,
              32,
              "div",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              32,
              0,
              null,
              null,
              14,
              "div",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(33, 0, null, null, 1, "p", [], null, null, null, null, null)),
            (l()(), e.Kb(34, null, ["", ""])),
            (l()(),
            e.qb(
              35,
              0,
              null,
              null,
              11,
              "div",
              [["class", "buttons"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, Cn)),
            e.pb(
              37,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(),
            e.qb(
              38,
              0,
              null,
              null,
              6,
              "div",
              [["class", "input-value display-ib"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, kn)),
            e.pb(
              40,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, vn)),
            e.pb(
              42,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, Mn)),
            e.pb(
              44,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, yn)),
            e.pb(
              46,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(),
            e.qb(
              47,
              0,
              null,
              null,
              16,
              "div",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              48,
              0,
              null,
              null,
              1,
              "p",
              [["class", "stakecls"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(-1, null, ["Stake"])),
            (l()(),
            e.qb(
              50,
              0,
              [
                [3, 0],
                ["odds", 1],
              ],
              null,
              9,
              "input",
              [
                ["appBlockCopyPaste", ""],
                ["appPrefixFocusAndSelect", ""],
                ["autocomplete", "off"],
                ["class", "text-center input-value-2 bet-input-bg"],
                ["maxlength", "8"],
                ["noRightClick", ""],
                [
                  "onkeypress",
                  "return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))",
                ],
                ["type", "text"],
              ],
              [
                [8, "id", 0],
                [1, "maxlength", 0],
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null],
              ],
              [
                [null, "ngModelChange"],
                [null, "keyup"],
                [null, "input"],
                [null, "blur"],
                [null, "compositionstart"],
                [null, "compositionend"],
                [null, "contextmenu"],
                [null, "paste"],
                [null, "copy"],
                [null, "cut"],
              ],
              function (l, n, t) {
                var u = !0,
                  i = l.component;
                return (
                  "input" === n &&
                    (u = !1 !== e.Cb(l, 51)._handleInput(t.target.value) && u),
                  "blur" === n && (u = !1 !== e.Cb(l, 51).onTouched() && u),
                  "compositionstart" === n &&
                    (u = !1 !== e.Cb(l, 51)._compositionStart() && u),
                  "compositionend" === n &&
                    (u =
                      !1 !== e.Cb(l, 51)._compositionEnd(t.target.value) && u),
                  "contextmenu" === n &&
                    (u = !1 !== e.Cb(l, 58).onRightClick(t) && u),
                  "paste" === n && (u = !1 !== e.Cb(l, 59).blockPaste(t) && u),
                  "copy" === n && (u = !1 !== e.Cb(l, 59).blockCopy(t) && u),
                  "cut" === n && (u = !1 !== e.Cb(l, 59).blockCut(t) && u),
                  "ngModelChange" === n &&
                    (u = !1 !== (l.context.$implicit.exchangeStake = t) && u),
                  "ngModelChange" === n && (u = !1 !== i.betSlipChange() && u),
                  "keyup" === n &&
                    (u =
                      !1 !==
                        i.isStakeEdit(
                          l.context.$implicit,
                          t,
                          l.context.index
                        ) && u),
                  u
                );
              },
              null,
              null
            )),
            e.pb(51, 16384, null, 0, a.d, [e.B, e.k, [2, a.a]], null, null),
            e.pb(
              52,
              540672,
              null,
              0,
              a.j,
              [],
              {
                maxlength: [0, "maxlength"],
              },
              null
            ),
            e.Hb(
              1024,
              null,
              a.l,
              function (l) {
                return [l];
              },
              [a.j]
            ),
            e.Hb(
              1024,
              null,
              a.m,
              function (l) {
                return [l];
              },
              [a.d]
            ),
            e.pb(
              55,
              671744,
              null,
              0,
              a.r,
              [
                [8, null],
                [6, a.l],
                [8, null],
                [6, a.m],
              ],
              {
                isDisabled: [0, "isDisabled"],
                model: [1, "model"],
              },
              {
                update: "ngModelChange",
              }
            ),
            e.Hb(2048, null, a.n, null, [a.r]),
            e.pb(57, 16384, null, 0, a.o, [[4, a.n]], null, null),
            e.pb(58, 16384, null, 0, c.a, [], null, null),
            e.pb(59, 16384, null, 0, o.a, [], null, null),
            (l()(),
            e.qb(
              60,
              0,
              null,
              null,
              3,
              "div",
              [["class", "dropdown"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              61,
              0,
              null,
              null,
              2,
              "div",
              [
                ["class", "myDropdown"],
                ["id", "myDropdown"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, $n)),
            e.pb(
              63,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(),
            e.qb(
              64,
              0,
              null,
              null,
              2,
              "div",
              [["class", "row margin-0 padding-0 add-bet buttonbete "]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, On)),
            e.pb(
              66,
              278528,
              null,
              0,
              i.m,
              [e.N, e.J, e.q],
              {
                ngForOf: [0, "ngForOf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, In)),
            e.pb(
              68,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, Sn)),
            e.pb(
              70,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, _n)),
            e.pb(
              72,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(),
            e.qb(
              73,
              0,
              null,
              null,
              5,
              "div",
              [["class", "row margin-0 padding-top-10 padding-bottom-10"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              74,
              0,
              null,
              null,
              2,
              "div",
              [["class", "col-md-6 pr-12 pl-12"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              75,
              0,
              null,
              null,
              1,
              "div",
              [["class", "cancel-order"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              76,
              0,
              null,
              null,
              0,
              "input",
              [
                ["type", "button"],
                ["value", "Cancel"],
              ],
              null,
              [[null, "click"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "click" === n &&
                    (e =
                      !1 !== l.component.handleCancelBet(l.context.index) && e),
                  e
                );
              },
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, Tn)),
            e.pb(
              78,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
          ],
          function (l, n) {
            var t = n.component;
            l(n, 2, 0, t.minMaxErr[n.context.index]),
              l(n, 4, 0, t.sameBetErr[n.context.index]),
              l(n, 6, 0, t.maxStakeError[n.context.index]),
              l(n, 8, 0, t.minStakeError[n.context.index]),
              l(
                n,
                10,
                0,
                t.UnmatchedminStakeError[n.context.index] &&
                  !t.sameBetErr[n.context.index]
              ),
              l(
                n,
                13,
                0,
                "row margin-0 padding-0 bet-slip-div",
                0 == n.context.$implicit.sideType ||
                  2 == n.context.$implicit.sideType
                  ? "back-profit-bg"
                  : "lay-profit-bg"
              ),
              l(n, 16, 0, !n.context.$implicit.isFancy),
              l(n, 18, 0, n.context.$implicit.isFancy),
              l(n, 21, 0, n.context.$implicit.isFancy),
              l(n, 23, 0, !n.context.$implicit.isFancy),
              l(
                n,
                25,
                0,
                0 == n.context.$implicit.sideType ||
                  2 == n.context.$implicit.sideType
              ),
              l(
                n,
                27,
                0,
                3 == n.context.$implicit.sideType ||
                  1 == n.context.$implicit.sideType
              ),
              l(
                n,
                29,
                0,
                (null == n.context.$implicit
                  ? null
                  : n.context.$implicit.action) !=
                  t.object.getConstants().ACTIONS.EDIT
              ),
              l(
                n,
                37,
                0,
                "Khado_Market" != n.context.$implicit.fancyMarketCategory
              ),
              l(
                n,
                40,
                0,
                "Khado_Market" != n.context.$implicit.fancyMarketCategory &&
                  "Lucky_Num_Market" != n.context.$implicit.fancyMarketCategory
              ),
              l(
                n,
                42,
                0,
                "Lucky_Num_Market" == n.context.$implicit.fancyMarketCategory
              ),
              l(
                n,
                44,
                0,
                "Khado_Market" == n.context.$implicit.fancyMarketCategory
              ),
              l(
                n,
                46,
                0,
                "Khado_Market" != n.context.$implicit.fancyMarketCategory
              ),
              l(n, 52, 0, "8"),
              l(
                n,
                55,
                0,
                t.isStakeEdited[n.context.index] ||
                  t.UnmatchedoddsUpdated[n.context.index] ||
                  t.isdemoAcc,
                n.context.$implicit.exchangeStake
              ),
              l(
                n,
                63,
                0,
                t.minStakeError[n.context.index] ||
                  t.maxStakeError[n.context.index]
              ),
              l(n, 66, 0, t.betSlip.betPriceList),
              l(
                n,
                68,
                0,
                "Fancy_Market" == n.context.$implicit.fancyMarketCategory ||
                  "PP_Market" == n.context.$implicit.fancyMarketCategory ||
                  "Lucky_Num_Market" == n.context.$implicit.fancyMarketCategory
              ),
              l(
                n,
                70,
                0,
                "Bookmaker_Market" == n.context.$implicit.fancyMarketCategory ||
                  "Bookmaker_Disc" == n.context.$implicit.fancyMarketCategory
              ),
              l(
                n,
                72,
                0,
                "MATCH_ODDS" == n.context.$implicit.fancyMarketCategory ||
                  "OTHER_MKTS" == n.context.$implicit.fancyMarketCategory
              ),
              l(n, 78, 0, t.object.getLoginInstance().getIsLogin());
          },
          function (l, n) {
            l(n, 11, 0, "slip-" + n.context.index),
              l(
                n,
                34,
                0,
                "Khado_Market" ==
                  (null == n.context.$implicit
                    ? null
                    : n.context.$implicit.fancyMarketCategory)
                  ? "Runs : " +
                      (null == n.context.$implicit
                        ? null
                        : n.context.$implicit.khado)
                  : "Lucky_Num_Market" ==
                    n.context.$implicit.fancyMarketCategory
                  ? "Runs"
                  : n.context.$implicit.runs
                  ? "Runs"
                  : "Odds"
              ),
              l(
                n,
                50,
                0,
                "bet-stake-" + n.context.index,
                e.Cb(n, 52).maxlength ? e.Cb(n, 52).maxlength : null,
                e.Cb(n, 57).ngClassUntouched,
                e.Cb(n, 57).ngClassTouched,
                e.Cb(n, 57).ngClassPristine,
                e.Cb(n, 57).ngClassDirty,
                e.Cb(n, 57).ngClassValid,
                e.Cb(n, 57).ngClassInvalid,
                e.Cb(n, 57).ngClassPending
              );
          }
        );
      }
      function Nn(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              3,
              "div",
              [["class", "available-bets available-bet-bg"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              2,
              "div",
              [["class", "col-md-12 margin-0 padding-0 "]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, wn)),
            e.pb(
              3,
              278528,
              null,
              0,
              i.m,
              [e.N, e.J, e.q],
              {
                ngForOf: [0, "ngForOf"],
              },
              null
            ),
          ],
          function (l, n) {
            l(n, 3, 0, n.component.betSlip.slipList);
          },
          null
        );
      }
      function jn(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              5,
              "div",
              [["class", "empty-cartc"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              4,
              "div",
              [["class", "maincardemp"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              2,
              0,
              null,
              null,
              0,
              "img",
              [
                ["alt", ""],
                ["src", "assets/images/empty-cart.png"],
                ["srcset", ""],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(3, 0, null, null, 2, "h5", [], null, null, null, null, null)),
            (l()(), e.Kb(4, null, ["", ""])),
            e.Eb(131072, u.j, [u.k, e.h]),
          ],
          null,
          function (l, n) {
            l(
              n,
              4,
              0,
              e.Lb(
                n,
                4,
                0,
                e
                  .Cb(n, 5)
                  .transform(
                    "Click on the odds to add selections to the betslip"
                  )
              )
            );
          }
        );
      }
      function An(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              4,
              "button",
              [["class", "btn-delete"]],
              null,
              [[null, "click"]],
              function (l, n, t) {
                var e = !0,
                  u = l.component;
                return (
                  "click" === n &&
                    (e =
                      !1 !==
                        u.cancelBet(
                          null == u.betSlip.playerSlipList
                            ? null
                            : u.betSlip.playerSlipList.unMatchedTicketsByEvents
                        ) && e),
                  e
                );
              },
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              0,
              "img",
              [["src", "assets/images/delete-white.svg"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              2,
              0,
              null,
              null,
              2,
              "span",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(3, null, ["", ""])),
            e.Eb(131072, u.j, [u.k, e.h]),
          ],
          null,
          function (l, n) {
            l(n, 3, 0, e.Lb(n, 3, 0, e.Cb(n, 4).transform("Cancel All")));
          }
        );
      }
      function Bn(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              3,
              "option",
              [],
              [[8, "selected", 0]],
              null,
              null,
              null,
              null
            )),
            e.pb(
              1,
              147456,
              null,
              0,
              a.s,
              [e.k, e.B, [8, null]],
              {
                value: [0, "value"],
              },
              null
            ),
            e.pb(
              2,
              147456,
              null,
              0,
              a.E,
              [e.k, e.B, [8, null]],
              {
                value: [0, "value"],
              },
              null
            ),
            (l()(), e.Kb(3, null, [" ", ""])),
          ],
          function (l, n) {
            l(n, 1, 0, n.context.$implicit.eventId),
              l(n, 2, 0, n.context.$implicit.eventId);
          },
          function (l, n) {
            l(
              n,
              0,
              0,
              n.context.$implicit.eventId == n.component.selectUnMatchBetListId
            ),
              l(
                n,
                3,
                0,
                null == n.context.$implicit
                  ? null
                  : n.context.$implicit.eventName
              );
          }
        );
      }
      function Dn(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              1,
              "div",
              [["class", "edit-bg"]],
              null,
              [[null, "click"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "click" === n &&
                    (e =
                      !1 !==
                        l.component.attachUnMatchedBet(
                          l.parent.context.$implicit
                        ) && e),
                  e
                );
              },
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              0,
              "img",
              [
                ["class", "edit"],
                ["src", "assets/images/edit.svg"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
          ],
          null,
          null
        );
      }
      function Kn(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              1,
              "div",
              [["class", "delete-bg"]],
              null,
              [[null, "click"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "click" === n &&
                    (e =
                      !1 !==
                        l.component.cancelBet(l.parent.context.$implicit) && e),
                  e
                );
              },
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              0,
              "img",
              [
                ["class", "delete"],
                ["src", "assets/images/delete2.svg"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
          ],
          null,
          null
        );
      }
      function Fn(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              6,
              "tr",
              [["class", "faded-text"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              1,
              "td",
              [
                ["colspan", "2"],
                ["style", "padding: 0; text-align: center;"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(2, null, ["Ref:", ""])),
            (l()(),
            e.qb(
              3,
              0,
              null,
              null,
              1,
              "td",
              [
                ["class", "text-center"],
                ["colspan", "3"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(4, null, ["", ""])),
            (l()(),
            e.qb(5, 0, null, null, 0, "td", [], null, null, null, null, null)),
            (l()(),
            e.qb(6, 0, null, null, 0, "td", [], null, null, null, null, null)),
          ],
          null,
          function (l, n) {
            l(n, 2, 0, n.parent.context.$implicit.id),
              l(
                n,
                4,
                0,
                null == n.parent.context.$implicit
                  ? null
                  : n.parent.context.$implicit.placeDate
              );
          }
        );
      }
      function Rn(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              23,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              22,
              "tbody",
              [["class", "bb-4"]],
              null,
              null,
              null,
              null,
              null
            )),
            e.Hb(512, null, i.A, i.B, [e.q, e.r, e.k, e.B]),
            e.pb(
              3,
              278528,
              null,
              0,
              i.l,
              [i.A],
              {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"],
              },
              null
            ),
            (l()(),
            e.qb(4, 0, null, null, 17, "tr", [], null, null, null, null, null)),
            (l()(),
            e.qb(
              5,
              0,
              null,
              null,
              2,
              "td",
              [["colspan", "2"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(6, null, ["", ""])),
            e.Eb(0, i.u, []),
            (l()(),
            e.qb(
              8,
              0,
              null,
              null,
              2,
              "td",
              [["class", "text-center"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(9, null, ["", ""])),
            e.Gb(10, 1),
            (l()(),
            e.qb(
              11,
              0,
              null,
              null,
              1,
              "td",
              [["class", "text-center"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(12, null, ["", ""])),
            (l()(),
            e.qb(
              13,
              0,
              null,
              null,
              2,
              "td",
              [["class", "text-center"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(14, null, [" ", ""])),
            e.Gb(15, 1),
            (l()(),
            e.qb(16, 0, null, null, 2, "td", [], null, null, null, null, null)),
            (l()(), e.fb(16777216, null, null, 1, null, Dn)),
            e.pb(
              18,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(),
            e.qb(19, 0, null, null, 2, "td", [], null, null, null, null, null)),
            (l()(), e.fb(16777216, null, null, 1, null, Kn)),
            e.pb(
              21,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, Fn)),
            e.pb(
              23,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
          ],
          function (l, n) {
            var t = n.component;
            l(
              n,
              3,
              0,
              "bb-4",
              0 == n.context.$implicit.sideType ? "back" : "lay"
            ),
              l(n, 18, 0, t.object.getLoginInstance().state.writeprivilege),
              l(n, 21, 0, t.object.getLoginInstance().state.writeprivilege),
              l(n, 23, 0, t.showUnmatchRefDate);
          },
          function (l, n) {
            l(
              n,
              6,
              0,
              e.Lb(
                n,
                6,
                0,
                e
                  .Cb(n, 7)
                  .transform(
                    null == n.context.$implicit
                      ? null
                      : n.context.$implicit.selectionName,
                    0,
                    9
                  )
              )
            );
            var t = e.Lb(
              n,
              9,
              0,
              l(
                n,
                10,
                0,
                e.Cb(n.parent.parent.parent.parent, 3),
                null == n.context.$implicit ? null : n.context.$implicit.odds
              )
            );
            l(n, 9, 0, t),
              l(
                n,
                12,
                0,
                null == n.context.$implicit
                  ? null
                  : n.context.$implicit.exchangeStake
              );
            var u = e.Lb(
              n,
              14,
              0,
              l(
                n,
                15,
                0,
                e.Cb(n.parent.parent.parent.parent, 5),
                (null == n.context.$implicit
                  ? null
                  : n.context.$implicit.exchangeStake) *
                  ((null == n.context.$implicit
                    ? null
                    : n.context.$implicit.odds) -
                    1)
              )
            );
            l(n, 14, 0, u);
          }
        );
      }
      function Un(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              17,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              16,
              "div",
              [["class", "back-lay-container back-lay-container-matched"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              2,
              0,
              null,
              null,
              15,
              "div",
              [["class", "unmatch-container table-card-header-bg"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              3,
              0,
              null,
              null,
              14,
              "table",
              [["class", "table-responsive"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              4,
              0,
              null,
              null,
              11,
              "thead",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(5, 0, null, null, 10, "tr", [], null, null, null, null, null)),
            (l()(),
            e.qb(
              6,
              0,
              null,
              null,
              2,
              "th",
              [["colspan", "2"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(7, null, ["", " "])),
            e.Gb(8, 1),
            (l()(),
            e.qb(
              9,
              0,
              null,
              null,
              1,
              "th",
              [["class", "text-center"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(-1, null, ["Odds"])),
            (l()(),
            e.qb(
              11,
              0,
              null,
              null,
              1,
              "th",
              [["class", "text-center"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(-1, null, ["Stakes"])),
            (l()(),
            e.qb(
              13,
              0,
              null,
              null,
              1,
              "th",
              [["class", "text-center"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(-1, null, ["P&L"])),
            (l()(),
            e.qb(
              15,
              0,
              null,
              null,
              0,
              "th",
              [["colspan", "2"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, Rn)),
            e.pb(
              17,
              278528,
              null,
              0,
              i.m,
              [e.N, e.J, e.q],
              {
                ngForOf: [0, "ngForOf"],
              },
              null
            ),
          ],
          function (l, n) {
            l(
              n,
              17,
              0,
              null == n.context.$implicit
                ? null
                : n.context.$implicit.marketOrderDetails
            );
          },
          function (l, n) {
            var t =
              null != n.context.$implicit &&
              n.context.$implicit.marketName.includes("_")
                ? (null == n.context.$implicit
                    ? null
                    : n.context.$implicit.marketName.split("_")[0]) +
                  " " +
                  (null == n.context.$implicit
                    ? null
                    : n.context.$implicit.marketName.split("_")[1])
                : e.Lb(
                    n,
                    7,
                    0,
                    l(
                      n,
                      8,
                      0,
                      e.Cb(n.parent.parent.parent, 2),
                      null == n.context.$implicit
                        ? null
                        : n.context.$implicit.marketName
                    )
                  );
            l(n, 7, 0, t);
          }
        );
      }
      function Jn(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              5,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              4,
              "div",
              [["class", "marketone"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              2,
              0,
              null,
              null,
              1,
              "div",
              [["class", "head_text"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(3, null, ["", ""])),
            (l()(), e.fb(16777216, null, null, 1, null, Un)),
            e.pb(
              5,
              278528,
              null,
              0,
              i.m,
              [e.N, e.J, e.q],
              {
                ngForOf: [0, "ngForOf"],
              },
              null
            ),
          ],
          function (l, n) {
            l(
              n,
              5,
              0,
              null == n.context.$implicit
                ? null
                : n.context.$implicit.marketDetails
            );
          },
          function (l, n) {
            l(n, 3, 0, n.context.$implicit.eventName);
          }
        );
      }
      function Gn(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              27,
              "div",
              [["class", "col-md-12 col-sm-12 col-xs-12 bet-info"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              25,
              "div",
              [["class", "filters_matching"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              2,
              0,
              null,
              null,
              6,
              "div",
              [["class", "filter_delete"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              3,
              0,
              null,
              null,
              2,
              "div",
              [["class", "heading"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(4, null, [" ", " "])),
            e.Eb(131072, u.j, [u.k, e.h]),
            (l()(),
            e.qb(6, 0, null, null, 2, "div", [], null, null, null, null, null)),
            (l()(), e.fb(16777216, null, null, 1, null, An)),
            e.pb(
              8,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(),
            e.qb(
              9,
              0,
              null,
              null,
              10,
              "div",
              [["class", "filter_dropdown"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              10,
              0,
              null,
              null,
              2,
              "span",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(11, null, ["", ":"])),
            e.Eb(131072, u.j, [u.k, e.h]),
            (l()(),
            e.qb(
              13,
              0,
              null,
              null,
              6,
              "select",
              [],
              null,
              [[null, "change"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "change" === n &&
                    (e = !1 !== l.component.handleEventSearchUnMatch(t) && e),
                  e
                );
              },
              null,
              null
            )),
            (l()(),
            e.qb(
              14,
              0,
              null,
              null,
              3,
              "option",
              [
                ["selected", ""],
                ["value", ""],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            e.pb(
              15,
              147456,
              null,
              0,
              a.s,
              [e.k, e.B, [8, null]],
              {
                value: [0, "value"],
              },
              null
            ),
            e.pb(
              16,
              147456,
              null,
              0,
              a.E,
              [e.k, e.B, [8, null]],
              {
                value: [0, "value"],
              },
              null
            ),
            (l()(), e.Kb(-1, null, ["All"])),
            (l()(), e.fb(16777216, null, null, 1, null, Bn)),
            e.pb(
              19,
              278528,
              null,
              0,
              i.m,
              [e.N, e.J, e.q],
              {
                ngForOf: [0, "ngForOf"],
              },
              null
            ),
            (l()(),
            e.qb(
              20,
              0,
              null,
              null,
              4,
              "div",
              [["class", "filter_checkbox"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              21,
              0,
              null,
              null,
              0,
              "input",
              [["type", "checkbox"]],
              [[8, "checked", 0]],
              [[null, "change"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "change" === n &&
                    (e = !1 !== l.component.showUnmatchRefNo(t) && e),
                  e
                );
              },
              null,
              null
            )),
            (l()(),
            e.qb(
              22,
              0,
              null,
              null,
              2,
              "span",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(23, null, ["", ""])),
            e.Eb(131072, u.j, [u.k, e.h]),
            (l()(), e.fb(16777216, null, null, 1, null, Jn)),
            e.pb(
              26,
              278528,
              null,
              0,
              i.m,
              [e.N, e.J, e.q],
              {
                ngForOf: [0, "ngForOf"],
              },
              null
            ),
            (l()(),
            e.qb(
              27,
              0,
              null,
              null,
              0,
              "div",
              [["class", "boderspr"]],
              null,
              null,
              null,
              null,
              null
            )),
          ],
          function (l, n) {
            var t = n.component;
            l(n, 8, 0, t.object.getLoginInstance().state.writeprivilege),
              l(n, 15, 0, ""),
              l(n, 16, 0, ""),
              l(n, 19, 0, t.unMatchBetListEventName),
              l(n, 26, 0, t.betslipUnMatchTicketsData);
          },
          function (l, n) {
            var t = n.component;
            l(n, 4, 0, e.Lb(n, 4, 0, e.Cb(n, 5).transform("Unmatched Bets"))),
              l(
                n,
                11,
                0,
                e.Lb(n, 11, 0, e.Cb(n, 12).transform("Select Match"))
              ),
              l(n, 21, 0, t.showUnmatchRefDate),
              l(
                n,
                23,
                0,
                e.Lb(n, 23, 0, e.Cb(n, 24).transform("Show Details"))
              );
          }
        );
      }
      function Hn(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              3,
              "option",
              [],
              [[8, "selected", 0]],
              null,
              null,
              null,
              null
            )),
            e.pb(
              1,
              147456,
              null,
              0,
              a.s,
              [e.k, e.B, [8, null]],
              {
                value: [0, "value"],
              },
              null
            ),
            e.pb(
              2,
              147456,
              null,
              0,
              a.E,
              [e.k, e.B, [8, null]],
              {
                value: [0, "value"],
              },
              null
            ),
            (l()(), e.Kb(3, null, [" ", ""])),
          ],
          function (l, n) {
            l(n, 1, 0, n.context.$implicit.eventId),
              l(n, 2, 0, n.context.$implicit.eventId);
          },
          function (l, n) {
            l(
              n,
              0,
              0,
              n.context.$implicit.eventId == n.component.selectdMatchBetListId
            ),
              l(
                n,
                3,
                0,
                null == n.context.$implicit
                  ? null
                  : n.context.$implicit.eventName
              );
          }
        );
      }
      function Vn(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              4,
              "div",
              [["class", "filter_checkbox"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              0,
              "input",
              [["type", "checkbox"]],
              [[8, "checked", 0]],
              [[null, "change"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "change" === n && (e = !1 !== l.component.showRefNo(t) && e),
                  e
                );
              },
              null,
              null
            )),
            (l()(),
            e.qb(
              2,
              0,
              null,
              null,
              2,
              "span",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(3, null, ["", ""])),
            e.Eb(131072, u.j, [u.k, e.h]),
          ],
          null,
          function (l, n) {
            l(n, 1, 0, n.component.showRefDate),
              l(n, 3, 0, e.Lb(n, 3, 0, e.Cb(n, 4).transform("Show Details")));
          }
        );
      }
      function Wn(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              5,
              "span",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            e.Hb(512, null, i.A, i.B, [e.q, e.r, e.k, e.B]),
            e.pb(
              2,
              278528,
              null,
              0,
              i.l,
              [i.A],
              {
                ngClass: [0, "ngClass"],
              },
              null
            ),
            (l()(), e.Kb(3, null, [" ", "", " "])),
            e.Gb(4, 1),
            e.Gb(5, 1),
          ],
          function (l, n) {
            l(
              n,
              2,
              0,
              0 == n.parent.context.$implicit.sideType ||
                2 == n.parent.context.$implicit.sideType
                ? "tgreen"
                : "tred"
            );
          },
          function (l, n) {
            var t =
                "Meter_Market" ==
                (null == n.parent.context.$implicit
                  ? null
                  : n.parent.context.$implicit.fancyMarketCategory)
                  ? "--"
                  : 0 == n.parent.context.$implicit.sideType ||
                    2 == n.parent.context.$implicit.sideType
                  ? "+"
                  : "Meter_Market" ==
                    (null == n.parent.context.$implicit
                      ? null
                      : n.parent.context.$implicit.fancyMarketCategory)
                  ? ""
                  : "-",
              u =
                "Meter_Market" ==
                (null == n.parent.context.$implicit
                  ? null
                  : n.parent.context.$implicit.fancyMarketCategory)
                  ? ""
                  : e.Lb(
                      n,
                      3,
                      1,
                      "AM" == n.parent.context.$implicit.oddType
                        ? l(
                            n,
                            4,
                            0,
                            e.Cb(
                              n.parent.parent.parent.parent.parent.parent,
                              5
                            ),
                            ((null == n.parent.context.$implicit
                              ? null
                              : n.parent.context.$implicit.odds) /
                              100) *
                              n.parent.context.$implicit.exchangeStake
                          )
                        : l(
                            n,
                            5,
                            0,
                            e.Cb(
                              n.parent.parent.parent.parent.parent.parent,
                              5
                            ),
                            (null == n.parent.context.$implicit
                              ? null
                              : n.parent.context.$implicit.exchangeStake) *
                              (n.parent.context.$implicit.odds - 1)
                          )
                    );
            l(n, 3, 0, t, u);
          }
        );
      }
      function Yn(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              5,
              "span",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            e.Hb(512, null, i.A, i.B, [e.q, e.r, e.k, e.B]),
            e.pb(
              2,
              278528,
              null,
              0,
              i.l,
              [i.A],
              {
                ngClass: [0, "ngClass"],
              },
              null
            ),
            (l()(), e.Kb(3, null, [" ", " ", " "])),
            e.Gb(4, 1),
            e.Gb(5, 1),
          ],
          function (l, n) {
            l(
              n,
              2,
              0,
              0 == n.parent.context.$implicit.sideType ||
                2 == n.parent.context.$implicit.sideType
                ? "tgreen"
                : "tred"
            );
          },
          function (l, n) {
            var t =
                "Meter_Market" ==
                (null == n.parent.context.$implicit
                  ? null
                  : n.parent.context.$implicit.fancyMarketCategory)
                  ? "--"
                  : 0 == n.parent.context.$implicit.sideType ||
                    2 == n.parent.context.$implicit.sideType
                  ? "+"
                  : "-",
              u = e.Lb(
                n,
                3,
                1,
                1 == n.parent.context.$implicit.sideType
                  ? l(
                      n,
                      4,
                      0,
                      e.Cb(n.parent.parent.parent.parent.parent.parent, 5),
                      ((null == n.parent.context.$implicit
                        ? null
                        : n.parent.context.$implicit.odds) /
                        100) *
                        n.parent.context.$implicit.exchangeStake *
                        0.995
                    )
                  : l(
                      n,
                      5,
                      0,
                      e.Cb(n.parent.parent.parent.parent.parent.parent, 5),
                      ((null == n.parent.context.$implicit
                        ? null
                        : n.parent.context.$implicit.odds) /
                        100) *
                        n.parent.context.$implicit.exchangeStake
                    )
              );
            l(n, 3, 0, t, u);
          }
        );
      }
      function zn(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              5,
              "tr",
              [["class", "faded-text"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              1,
              "td",
              [
                ["colspan", "2"],
                ["style", "padding: 0; text-align: center;"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(2, null, ["Ref:", " "])),
            (l()(),
            e.qb(
              3,
              0,
              null,
              null,
              1,
              "td",
              [
                ["class", "text-center"],
                ["colspan", "2"],
                ["style", "padding: 0;"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(4, null, [" ", ""])),
            (l()(),
            e.qb(
              5,
              0,
              null,
              null,
              0,
              "td",
              [["class", "text-center"]],
              null,
              null,
              null,
              null,
              null
            )),
          ],
          null,
          function (l, n) {
            l(n, 2, 0, n.parent.context.$implicit.id),
              l(
                n,
                4,
                0,
                null == n.parent.context.$implicit
                  ? null
                  : n.parent.context.$implicit.placeDate
              );
          }
        );
      }
      function Zn(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              26,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              25,
              "tbody",
              [["class", "bb-4"]],
              null,
              null,
              null,
              null,
              null
            )),
            e.Hb(512, null, i.A, i.B, [e.q, e.r, e.k, e.B]),
            e.pb(
              3,
              278528,
              null,
              0,
              i.l,
              [i.A],
              {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"],
              },
              null
            ),
            (l()(),
            e.qb(4, 0, null, null, 20, "tr", [], null, null, null, null, null)),
            (l()(),
            e.qb(
              5,
              0,
              null,
              null,
              5,
              "td",
              [["colspan", "2"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(6, null, [" ", " "])),
            e.Eb(0, i.u, []),
            e.Gb(8, 1),
            e.Eb(0, i.u, []),
            e.Gb(10, 1),
            (l()(),
            e.qb(
              11,
              0,
              null,
              null,
              4,
              "td",
              [["class", "text-center"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(12, null, [" ", " "])),
            e.Gb(13, 1),
            e.Gb(14, 1),
            e.Gb(15, 1),
            (l()(),
            e.qb(
              16,
              0,
              null,
              null,
              1,
              "td",
              [["class", "text-center"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(17, null, ["", ""])),
            (l()(),
            e.qb(
              18,
              0,
              null,
              null,
              6,
              "td",
              [["class", "text-center"]],
              null,
              null,
              null,
              null,
              null
            )),
            e.Hb(512, null, i.A, i.B, [e.q, e.r, e.k, e.B]),
            e.pb(
              20,
              278528,
              null,
              0,
              i.l,
              [i.A],
              {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, Wn)),
            e.pb(
              22,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, Yn)),
            e.pb(
              24,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, zn)),
            e.pb(
              26,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
          ],
          function (l, n) {
            var t = n.component;
            l(
              n,
              3,
              0,
              "bb-4",
              0 == n.context.$implicit.sideType ||
                2 == n.context.$implicit.sideType
                ? "back"
                : "lay"
            ),
              l(
                n,
                20,
                0,
                "text-center",
                (null == n.context.$implicit
                  ? null
                  : n.context.$implicit.exposure) > 0
                  ? "tgreen"
                  : "tred"
              ),
              l(
                n,
                22,
                0,
                "Bookmaker_Disc" !=
                  (null == n.context.$implicit
                    ? null
                    : n.context.$implicit.fancyMarketCategory)
              ),
              l(
                n,
                24,
                0,
                "Bookmaker_Disc" ==
                  (null == n.context.$implicit
                    ? null
                    : n.context.$implicit.fancyMarketCategory)
              ),
              l(n, 26, 0, t.showRefDate);
          },
          function (l, n) {
            var t =
              "SINGLE" ==
              (null == n.context.$implicit
                ? null
                : n.context.$implicit.runnerNo)
                ? (null == n.context.$implicit
                    ? null
                    : null == n.context.$implicit.marketName
                    ? null
                    : n.context.$implicit.marketName.length) >= 14
                  ? e.Lb(
                      n,
                      6,
                      0,
                      e
                        .Cb(n, 7)
                        .transform(
                          null == n.context.$implicit
                            ? null
                            : n.context.$implicit.marketName,
                          0,
                          14
                        )
                    ) + ".."
                  : e.Lb(
                      n,
                      6,
                      0,
                      l(
                        n,
                        8,
                        0,
                        e.Cb(n.parent.parent.parent.parent.parent, 2),
                        null == n.context.$implicit
                          ? null
                          : n.context.$implicit.marketName
                      )
                    )
                : (null == n.context.$implicit
                    ? null
                    : null == n.context.$implicit.selectionName
                    ? null
                    : n.context.$implicit.selectionName.length) >= 14
                ? e.Lb(
                    n,
                    6,
                    0,
                    e
                      .Cb(n, 9)
                      .transform(
                        null == n.context.$implicit
                          ? null
                          : n.context.$implicit.selectionName,
                        0,
                        14
                      )
                  ) + ".."
                : e.Lb(
                    n,
                    6,
                    0,
                    l(
                      n,
                      10,
                      0,
                      e.Cb(n.parent.parent.parent.parent.parent, 2),
                      null == n.context.$implicit
                        ? null
                        : n.context.$implicit.selectionName
                    )
                  );
            l(n, 6, 0, t);
            var u =
              null != n.context.$implicit && n.context.$implicit.khaduRuns
                ? (null == n.context.$implicit
                    ? null
                    : n.context.$implicit.runs) +
                  ":" +
                  ((null == n.context.$implicit
                    ? null
                    : n.context.$implicit.khaduRuns) +
                    (null == n.context.$implicit
                      ? null
                      : n.context.$implicit.runs)) +
                  "/" +
                  e.Lb(
                    n,
                    12,
                    0,
                    l(
                      n,
                      13,
                      0,
                      e.Cb(n.parent.parent.parent.parent.parent, 3),
                      null == n.context.$implicit
                        ? null
                        : n.context.$implicit.odds
                    )
                  )
                : null != n.context.$implicit && n.context.$implicit.runs
                ? (null == n.context.$implicit
                    ? null
                    : n.context.$implicit.runs) +
                  "/" +
                  e.Lb(
                    n,
                    12,
                    0,
                    l(
                      n,
                      14,
                      0,
                      e.Cb(n.parent.parent.parent.parent.parent, 3),
                      null == n.context.$implicit
                        ? null
                        : n.context.$implicit.odds
                    )
                  )
                : e.Lb(
                    n,
                    12,
                    0,
                    l(
                      n,
                      15,
                      0,
                      e.Cb(n.parent.parent.parent.parent.parent, 3),
                      null == n.context.$implicit
                        ? null
                        : n.context.$implicit.odds
                    )
                  );
            l(n, 12, 0, u),
              l(
                n,
                17,
                0,
                null == n.context.$implicit
                  ? null
                  : n.context.$implicit.exchangeStake
              );
          }
        );
      }
      function Xn(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              20,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              19,
              "div",
              [["class", "back-lay-container-matched"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              2,
              0,
              null,
              null,
              2,
              "div",
              [
                ["class", "match-container table-card-header-bg"],
                ["style", "cursor: pointer;"],
              ],
              null,
              [[null, "click"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "click" === n &&
                    (e =
                      !1 !==
                        l.component.gotoEventdetail(
                          l.parent.context.$implicit
                        ) && e),
                  e
                );
              },
              null,
              null
            )),
            (l()(),
            e.qb(
              3,
              0,
              null,
              null,
              1,
              "div",
              [["class", "unmatch-text"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(4, null, [" ", " "])),
            (l()(),
            e.qb(
              5,
              0,
              null,
              null,
              15,
              "table",
              [["class", "table-responsive"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              6,
              0,
              null,
              null,
              12,
              "thead",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(7, 0, null, null, 11, "tr", [], null, null, null, null, null)),
            (l()(),
            e.qb(
              8,
              0,
              null,
              null,
              4,
              "th",
              [
                ["colspan", "2"],
                ["style", "font-weight: bold;"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(9, null, [" ", " "])),
            e.Gb(10, 1),
            e.Gb(11, 1),
            e.Gb(12, 1),
            (l()(),
            e.qb(
              13,
              0,
              null,
              null,
              1,
              "th",
              [["class", "text-center"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(14, null, [" ", ""])),
            (l()(),
            e.qb(
              15,
              0,
              null,
              null,
              1,
              "th",
              [["class", "text-center"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(-1, null, ["Stakes"])),
            (l()(),
            e.qb(
              17,
              0,
              null,
              null,
              1,
              "th",
              [["class", "text-center"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(-1, null, ["P&L"])),
            (l()(), e.fb(16777216, null, null, 1, null, Zn)),
            e.pb(
              20,
              278528,
              null,
              0,
              i.m,
              [e.N, e.J, e.q],
              {
                ngForOf: [0, "ngForOf"],
              },
              null
            ),
          ],
          function (l, n) {
            l(
              n,
              20,
              0,
              null == n.context.$implicit
                ? null
                : n.context.$implicit.marketOrderDetails
            );
          },
          function (l, n) {
            l(n, 4, 0, n.parent.context.$implicit.eventName);
            var t =
              "Match_odds" ==
              (null == n.context.$implicit
                ? null
                : n.context.$implicit.marketName)
                ? "Match odds"
                : null != n.context.$implicit &&
                  n.context.$implicit.marketName.includes("_")
                ? e.Lb(
                    n,
                    9,
                    0,
                    l(
                      n,
                      10,
                      0,
                      e.Cb(n.parent.parent.parent.parent, 2),
                      null == n.context.$implicit
                        ? null
                        : n.context.$implicit.marketName.split("_")[0]
                    )
                  ) +
                  " " +
                  e.Lb(
                    n,
                    9,
                    0,
                    l(
                      n,
                      11,
                      0,
                      e.Cb(n.parent.parent.parent.parent, 2),
                      null == n.context.$implicit
                        ? null
                        : n.context.$implicit.marketName.split("_")[1]
                    )
                  )
                : e.Lb(
                    n,
                    9,
                    0,
                    l(
                      n,
                      12,
                      0,
                      e.Cb(n.parent.parent.parent.parent, 2),
                      null == n.context.$implicit
                        ? null
                        : n.context.$implicit.marketName
                    )
                  );
            l(n, 9, 0, t),
              l(
                n,
                14,
                0,
                (null != n.context.$implicit &&
                  null !=
                    n.context.$implicit.marketOrderDetails[n.context.index] &&
                  n.context.$implicit.marketOrderDetails[n.context.index]
                    .runs) ||
                  (null != n.context.$implicit &&
                    null !=
                      n.context.$implicit.marketOrderDetails[n.context.index] &&
                    n.context.$implicit.marketOrderDetails[n.context.index]
                      .khaduRuns)
                  ? "Runs/Odds"
                  : "Odds"
              );
          }
        );
      }
      function Qn(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              3,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              2,
              "div",
              [["class", "marketone"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, Xn)),
            e.pb(
              3,
              278528,
              null,
              0,
              i.m,
              [e.N, e.J, e.q],
              {
                ngForOf: [0, "ngForOf"],
              },
              null
            ),
          ],
          function (l, n) {
            l(
              n,
              3,
              0,
              null == n.context.$implicit
                ? null
                : n.context.$implicit.marketDetails
            );
          },
          null
        );
      }
      function lt(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(0, 0, null, null, 2, "div", [], null, null, null, null, null)),
            (l()(), e.fb(16777216, null, null, 1, null, Qn)),
            e.pb(
              2,
              278528,
              null,
              0,
              i.m,
              [e.N, e.J, e.q],
              {
                ngForOf: [0, "ngForOf"],
              },
              null
            ),
          ],
          function (l, n) {
            l(n, 2, 0, n.component.betslipMatchTicketsData);
          },
          null
        );
      }
      function nt(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              24,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              23,
              "tbody",
              [["class", "bb-4"]],
              null,
              null,
              null,
              null,
              null
            )),
            e.Hb(512, null, i.A, i.B, [e.q, e.r, e.k, e.B]),
            e.pb(
              3,
              278528,
              null,
              0,
              i.l,
              [i.A],
              {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"],
              },
              null
            ),
            (l()(),
            e.qb(4, 0, null, null, 19, "tr", [], null, null, null, null, null)),
            (l()(),
            e.qb(
              5,
              0,
              null,
              null,
              5,
              "td",
              [["colspan", "2"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(6, null, [" ", " "])),
            e.Eb(0, i.u, []),
            e.Gb(8, 1),
            e.Eb(0, i.u, []),
            e.Gb(10, 1),
            (l()(),
            e.qb(
              11,
              0,
              null,
              null,
              2,
              "td",
              [["class", "text-center"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(12, null, ["", ""])),
            e.Gb(13, 1),
            (l()(),
            e.qb(
              14,
              0,
              null,
              null,
              2,
              "td",
              [["class", "text-center"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(15, null, ["", " "])),
            e.Gb(16, 1),
            (l()(),
            e.qb(
              17,
              0,
              null,
              null,
              6,
              "td",
              [["class", "text-center"]],
              null,
              null,
              null,
              null,
              null
            )),
            e.Hb(512, null, i.A, i.B, [e.q, e.r, e.k, e.B]),
            e.pb(
              19,
              278528,
              null,
              0,
              i.l,
              [i.A],
              {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"],
              },
              null
            ),
            (l()(),
            e.qb(
              20,
              0,
              null,
              null,
              1,
              "span",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(21, null, ["", ""])),
            (l()(), e.Kb(22, null, ["", " "])),
            e.Gb(23, 1),
            (l()(),
            e.qb(
              24,
              0,
              null,
              null,
              0,
              "tr",
              [["class", "faded-text"]],
              null,
              null,
              null,
              null,
              null
            )),
          ],
          function (l, n) {
            l(
              n,
              3,
              0,
              "bb-4",
              0 ==
                (null == n.context.$implicit
                  ? null
                  : n.context.$implicit.sideType) ||
                2 ==
                  (null == n.context.$implicit
                    ? null
                    : n.context.$implicit.sideType)
                ? "back"
                : "lay"
            ),
              l(
                n,
                19,
                0,
                "text-center",
                (null == n.context.$implicit
                  ? null
                  : n.context.$implicit.totalPL) > 0
                  ? "tgreen"
                  : "tred"
              );
          },
          function (l, n) {
            var t =
              "SINGLE" ==
              (null == n.context.$implicit
                ? null
                : n.context.$implicit.runnerNo)
                ? (null == n.context.$implicit
                    ? null
                    : null == n.context.$implicit.marketName
                    ? null
                    : n.context.$implicit.marketName.length) >= 10
                  ? e.Lb(
                      n,
                      6,
                      0,
                      e
                        .Cb(n, 7)
                        .transform(
                          null == n.context.$implicit
                            ? null
                            : n.context.$implicit.marketName,
                          0,
                          10
                        )
                    ) + ".."
                  : e.Lb(
                      n,
                      6,
                      0,
                      l(
                        n,
                        8,
                        0,
                        e.Cb(n.parent.parent.parent.parent.parent.parent, 2),
                        null == n.context.$implicit
                          ? null
                          : n.context.$implicit.marketName
                      )
                    )
                : (null == n.context.$implicit
                    ? null
                    : null == n.context.$implicit.selectionName
                    ? null
                    : n.context.$implicit.selectionName.length) >= 10
                ? e.Lb(
                    n,
                    6,
                    0,
                    e
                      .Cb(n, 9)
                      .transform(
                        null == n.context.$implicit
                          ? null
                          : n.context.$implicit.selectionName,
                        0,
                        10
                      )
                  ) + ".."
                : e.Lb(
                    n,
                    6,
                    0,
                    l(
                      n,
                      10,
                      0,
                      e.Cb(n.parent.parent.parent.parent.parent.parent, 2),
                      null == n.context.$implicit
                        ? null
                        : n.context.$implicit.selectionName
                    )
                  );
            l(n, 6, 0, t);
            var u = e.Lb(
              n,
              12,
              0,
              l(
                n,
                13,
                0,
                e.Cb(n.parent.parent.parent.parent.parent.parent, 3),
                null == n.context.$implicit
                  ? null
                  : n.context.$implicit.averageOdds
              )
            );
            l(n, 12, 0, u);
            var i = e.Lb(
              n,
              15,
              0,
              l(
                n,
                16,
                0,
                e.Cb(n.parent.parent.parent.parent.parent.parent, 5),
                null == n.context.$implicit
                  ? null
                  : n.context.$implicit.totalexchangeStack
              )
            );
            l(n, 15, 0, i),
              l(
                n,
                21,
                0,
                "Meter_Market" ==
                  (null == n.context.$implicit
                    ? null
                    : n.context.$implicit.fancyMarketCategory)
                  ? "--"
                  : (null == n.context.$implicit
                      ? null
                      : n.context.$implicit.totalPL) > 0
                  ? "+"
                  : "-"
              );
            var a =
              "Meter_Market" ==
              (null == n.context.$implicit
                ? null
                : n.context.$implicit.fancyMarketCategory)
                ? ""
                : e.Lb(
                    n,
                    22,
                    0,
                    l(
                      n,
                      23,
                      0,
                      e.Cb(n.parent.parent.parent.parent.parent.parent, 5),
                      null == n.context.$implicit
                        ? null
                        : n.context.$implicit.totalPL
                    )
                  );
            l(n, 22, 0, a);
          }
        );
      }
      function tt(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              2,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, nt)),
            e.pb(
              2,
              278528,
              null,
              0,
              i.m,
              [e.N, e.J, e.q],
              {
                ngForOf: [0, "ngForOf"],
              },
              null
            ),
            (l()(), e.fb(0, null, null, 0)),
          ],
          function (l, n) {
            l(
              n,
              2,
              0,
              null == n.parent.context.$implicit
                ? null
                : n.parent.context.$implicit.datalay
            );
          },
          null
        );
      }
      function et(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              24,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              23,
              "tbody",
              [["class", "bb-4"]],
              null,
              null,
              null,
              null,
              null
            )),
            e.Hb(512, null, i.A, i.B, [e.q, e.r, e.k, e.B]),
            e.pb(
              3,
              278528,
              null,
              0,
              i.l,
              [i.A],
              {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"],
              },
              null
            ),
            (l()(),
            e.qb(4, 0, null, null, 19, "tr", [], null, null, null, null, null)),
            (l()(),
            e.qb(
              5,
              0,
              null,
              null,
              5,
              "td",
              [["colspan", "2"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(6, null, [" ", " "])),
            e.Eb(0, i.u, []),
            e.Gb(8, 1),
            e.Eb(0, i.u, []),
            e.Gb(10, 1),
            (l()(),
            e.qb(
              11,
              0,
              null,
              null,
              2,
              "td",
              [["class", "text-center"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(12, null, ["", ""])),
            e.Gb(13, 1),
            (l()(),
            e.qb(
              14,
              0,
              null,
              null,
              2,
              "td",
              [["class", "text-center"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(15, null, ["", " "])),
            e.Gb(16, 1),
            (l()(),
            e.qb(
              17,
              0,
              null,
              null,
              6,
              "td",
              [["class", "text-center"]],
              null,
              null,
              null,
              null,
              null
            )),
            e.Hb(512, null, i.A, i.B, [e.q, e.r, e.k, e.B]),
            e.pb(
              19,
              278528,
              null,
              0,
              i.l,
              [i.A],
              {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"],
              },
              null
            ),
            (l()(),
            e.qb(
              20,
              0,
              null,
              null,
              1,
              "span",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(21, null, ["", " "])),
            (l()(), e.Kb(22, null, ["", " "])),
            e.Gb(23, 1),
            (l()(),
            e.qb(
              24,
              0,
              null,
              null,
              0,
              "tr",
              [["class", "faded-text"]],
              null,
              null,
              null,
              null,
              null
            )),
          ],
          function (l, n) {
            l(
              n,
              3,
              0,
              "bb-4",
              0 ==
                (null == n.context.$implicit
                  ? null
                  : n.context.$implicit.sideType) ||
                2 ==
                  (null == n.context.$implicit
                    ? null
                    : n.context.$implicit.sideType)
                ? "back"
                : "lay"
            ),
              l(
                n,
                19,
                0,
                "text-center",
                0 == n.context.$implicit.sideType ||
                  2 == n.context.$implicit.sideType
                  ? "tgreen"
                  : "tred"
              );
          },
          function (l, n) {
            var t =
              "SINGLE" ==
              (null == n.context.$implicit
                ? null
                : n.context.$implicit.runnerNo)
                ? (null == n.context.$implicit
                    ? null
                    : null == n.context.$implicit.marketName
                    ? null
                    : n.context.$implicit.marketName.length) >= 10
                  ? e.Lb(
                      n,
                      6,
                      0,
                      e
                        .Cb(n, 7)
                        .transform(
                          null == n.context.$implicit
                            ? null
                            : n.context.$implicit.marketName,
                          0,
                          10
                        )
                    ) + ".."
                  : e.Lb(
                      n,
                      6,
                      0,
                      l(
                        n,
                        8,
                        0,
                        e.Cb(n.parent.parent.parent.parent.parent.parent, 2),
                        null == n.context.$implicit
                          ? null
                          : n.context.$implicit.marketName
                      )
                    )
                : (null == n.context.$implicit
                    ? null
                    : null == n.context.$implicit.selectionName
                    ? null
                    : n.context.$implicit.selectionName.length) >= 10
                ? e.Lb(
                    n,
                    6,
                    0,
                    e
                      .Cb(n, 9)
                      .transform(
                        null == n.context.$implicit
                          ? null
                          : n.context.$implicit.selectionName,
                        0,
                        10
                      )
                  ) + ".."
                : e.Lb(
                    n,
                    6,
                    0,
                    l(
                      n,
                      10,
                      0,
                      e.Cb(n.parent.parent.parent.parent.parent.parent, 2),
                      null == n.context.$implicit
                        ? null
                        : n.context.$implicit.selectionName
                    )
                  );
            l(n, 6, 0, t);
            var u = e.Lb(
              n,
              12,
              0,
              l(
                n,
                13,
                0,
                e.Cb(n.parent.parent.parent.parent.parent.parent, 5),
                null == n.context.$implicit
                  ? null
                  : n.context.$implicit.averageOdds
              )
            );
            l(n, 12, 0, u);
            var i = e.Lb(
              n,
              15,
              0,
              l(
                n,
                16,
                0,
                e.Cb(n.parent.parent.parent.parent.parent.parent, 5),
                null == n.context.$implicit
                  ? null
                  : n.context.$implicit.totalexchangeStack
              )
            );
            l(n, 15, 0, i),
              l(
                n,
                21,
                0,
                "Meter_Market" ==
                  (null == n.context.$implicit
                    ? null
                    : n.context.$implicit.fancyMarketCategory)
                  ? "--"
                  : 0 == n.context.$implicit.sideType ||
                    2 == n.context.$implicit.sideType
                  ? "+"
                  : "-"
              );
            var a =
              "Meter_Market" ==
              (null == n.context.$implicit
                ? null
                : n.context.$implicit.fancyMarketCategory)
                ? ""
                : e.Lb(
                    n,
                    22,
                    0,
                    l(
                      n,
                      23,
                      0,
                      e.Cb(n.parent.parent.parent.parent.parent.parent, 5),
                      null == n.context.$implicit
                        ? null
                        : n.context.$implicit.totalPL
                    )
                  );
            l(n, 22, 0, a);
          }
        );
      }
      function ut(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              2,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, et)),
            e.pb(
              2,
              278528,
              null,
              0,
              i.m,
              [e.N, e.J, e.q],
              {
                ngForOf: [0, "ngForOf"],
              },
              null
            ),
            (l()(), e.fb(0, null, null, 0)),
          ],
          function (l, n) {
            l(
              n,
              2,
              0,
              null == n.parent.context.$implicit
                ? null
                : n.parent.context.$implicit.databack
            );
          },
          null
        );
      }
      function it(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              19,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              18,
              "div",
              [["class", "back-lay-container-matched"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              2,
              0,
              null,
              null,
              17,
              "table",
              [["class", "table-responsive"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              3,
              0,
              null,
              null,
              12,
              "thead",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(4, 0, null, null, 11, "tr", [], null, null, null, null, null)),
            (l()(),
            e.qb(5, 0, null, null, 3, "th", [], null, null, null, null, null)),
            (l()(), e.Kb(6, null, ["", ""])),
            e.Gb(7, 1),
            e.Gb(8, 1),
            (l()(),
            e.qb(
              9,
              0,
              null,
              null,
              0,
              "th",
              [["colspan", "1"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              10,
              0,
              null,
              null,
              1,
              "th",
              [["class", "text-center"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(11, null, [" ", ""])),
            (l()(),
            e.qb(
              12,
              0,
              null,
              null,
              1,
              "th",
              [["class", "text-center"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(-1, null, ["Stakes"])),
            (l()(),
            e.qb(
              14,
              0,
              null,
              null,
              1,
              "th",
              [["class", "text-center"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(-1, null, ["P&L"])),
            (l()(), e.fb(16777216, null, null, 1, null, tt)),
            e.pb(
              17,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, ut)),
            e.pb(
              19,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
          ],
          function (l, n) {
            l(
              n,
              17,
              0,
              (null == n.context.$implicit
                ? null
                : null == n.context.$implicit.datalay
                ? null
                : n.context.$implicit.datalay.length) > 0
            ),
              l(
                n,
                19,
                0,
                (null == n.context.$implicit
                  ? null
                  : null == n.context.$implicit.databack
                  ? null
                  : n.context.$implicit.databack.length) > 0
              );
          },
          function (l, n) {
            var t =
              null != n.context.$implicit &&
              n.context.$implicit.marketName.includes("_")
                ? e.Lb(
                    n,
                    6,
                    0,
                    l(
                      n,
                      7,
                      0,
                      e.Cb(n.parent.parent.parent.parent, 2),
                      null == n.context.$implicit
                        ? null
                        : n.context.$implicit.marketName.split("_")[0]
                    )
                  ) +
                  " " +
                  e.Lb(
                    n,
                    6,
                    0,
                    l(
                      n,
                      8,
                      0,
                      e.Cb(n.parent.parent.parent.parent, 2),
                      null == n.context.$implicit
                        ? null
                        : n.context.$implicit.marketName.split("_")[1]
                    )
                  )
                : null != n.context.$implicit && n.context.$implicit.marketName
                ? null == n.context.$implicit
                  ? null
                  : n.context.$implicit.marketName
                : null == n.context.$implicit
                ? null
                : null ==
                  n.context.$implicit.marketOrderDetails[n.context.index]
                ? null
                : n.context.$implicit.marketOrderDetails[n.context.index]
                    .fancyMarketCategory;
            l(n, 6, 0, t), l(n, 11, 0, "Odds");
          }
        );
      }
      function at(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              5,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              4,
              "div",
              [["class", "marketone"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              2,
              0,
              null,
              null,
              1,
              "div",
              [
                ["class", "head_text"],
                ["style", "cursor: pointer;"],
              ],
              null,
              [[null, "click"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "click" === n &&
                    (e =
                      !1 !== l.component.gotoEventdetail(l.context.$implicit) &&
                      e),
                  e
                );
              },
              null,
              null
            )),
            (l()(), e.Kb(3, null, ["", ""])),
            (l()(), e.fb(16777216, null, null, 1, null, it)),
            e.pb(
              5,
              278528,
              null,
              0,
              i.m,
              [e.N, e.J, e.q],
              {
                ngForOf: [0, "ngForOf"],
              },
              null
            ),
          ],
          function (l, n) {
            l(
              n,
              5,
              0,
              null == n.context.$implicit
                ? null
                : n.context.$implicit.marketDetails
            );
          },
          function (l, n) {
            l(n, 3, 0, n.context.$implicit.eventName);
          }
        );
      }
      function ct(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(0, 0, null, null, 2, "div", [], null, null, null, null, null)),
            (l()(), e.fb(16777216, null, null, 1, null, at)),
            e.pb(
              2,
              278528,
              null,
              0,
              i.m,
              [e.N, e.J, e.q],
              {
                ngForOf: [0, "ngForOf"],
              },
              null
            ),
          ],
          function (l, n) {
            l(n, 2, 0, n.component.matchAvrageOdds);
          },
          null
        );
      }
      function ot(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              31,
              "div",
              [
                [
                  "class",
                  "col-md-12 col-sm-12 col-xs-12 bet-info unmamabottpm",
                ],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              30,
              "div",
              [["class", "filters_matching"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              2,
              0,
              null,
              null,
              12,
              "div",
              [["class", "filter_switch"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              3,
              0,
              null,
              null,
              2,
              "div",
              [["class", "heading"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(4, null, [" ", " "])),
            e.Eb(131072, u.j, [u.k, e.h]),
            (l()(),
            e.qb(
              6,
              0,
              null,
              null,
              8,
              "div",
              [["class", "cancel-btn"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              7,
              0,
              null,
              null,
              2,
              "div",
              [["class", "display-ib"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(8, null, [" ", ""])),
            e.Eb(131072, u.j, [u.k, e.h]),
            (l()(),
            e.qb(
              10,
              0,
              null,
              null,
              4,
              "div",
              [["class", "onoffswitch display-ib"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              11,
              0,
              null,
              null,
              0,
              "input",
              [
                ["class", "onoffswitch-checkbox"],
                ["id", "myonoffswitch"],
                ["name", "onoffswitch"],
                ["type", "checkbox"],
              ],
              [[8, "checked", 0]],
              [[null, "change"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "change" === n &&
                    (e =
                      !1 !== l.component.showAverageOdds(t.target.checked) &&
                      e),
                  e
                );
              },
              null,
              null
            )),
            (l()(),
            e.qb(
              12,
              0,
              null,
              null,
              2,
              "label",
              [
                ["class", "onoffswitch-label"],
                ["for", "myonoffswitch"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              13,
              0,
              null,
              null,
              0,
              "span",
              [["class", "onoffswitch-inner"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              14,
              0,
              null,
              null,
              0,
              "span",
              [["class", "onoffswitch-switch"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              15,
              0,
              null,
              null,
              10,
              "div",
              [["class", "filter_dropdown"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              16,
              0,
              null,
              null,
              2,
              "span",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(17, null, ["", ":"])),
            e.Eb(131072, u.j, [u.k, e.h]),
            (l()(),
            e.qb(
              19,
              0,
              null,
              null,
              6,
              "select",
              [],
              null,
              [[null, "change"]],
              function (l, n, t) {
                var e = !0;
                return (
                  "change" === n &&
                    (e = !1 !== l.component.handleEventSearchMatch(t) && e),
                  e
                );
              },
              null,
              null
            )),
            (l()(),
            e.qb(
              20,
              0,
              null,
              null,
              3,
              "option",
              [
                ["selected", ""],
                ["value", ""],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            e.pb(
              21,
              147456,
              null,
              0,
              a.s,
              [e.k, e.B, [8, null]],
              {
                value: [0, "value"],
              },
              null
            ),
            e.pb(
              22,
              147456,
              null,
              0,
              a.E,
              [e.k, e.B, [8, null]],
              {
                value: [0, "value"],
              },
              null
            ),
            (l()(), e.Kb(-1, null, ["All"])),
            (l()(), e.fb(16777216, null, null, 1, null, Hn)),
            e.pb(
              25,
              278528,
              null,
              0,
              i.m,
              [e.N, e.J, e.q],
              {
                ngForOf: [0, "ngForOf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, Vn)),
            e.pb(
              27,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, lt)),
            e.pb(
              29,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, ct)),
            e.pb(
              31,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
          ],
          function (l, n) {
            var t = n.component;
            l(n, 21, 0, ""),
              l(n, 22, 0, ""),
              l(n, 25, 0, t.matchBetListEventName),
              l(n, 27, 0, !t.showAverageOddsdata),
              l(n, 29, 0, !t.showAverageOddsdata),
              l(n, 31, 0, t.showAverageOddsdata);
          },
          function (l, n) {
            var t = n.component;
            l(n, 4, 0, e.Lb(n, 4, 0, e.Cb(n, 5).transform("Matched Bets"))),
              l(n, 8, 0, e.Lb(n, 8, 0, e.Cb(n, 9).transform("Average Odds"))),
              l(n, 11, 0, t.showAverageOddsdata),
              l(
                n,
                17,
                0,
                e.Lb(n, 17, 0, e.Cb(n, 18).transform("Select Match"))
              );
          }
        );
      }
      function st(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              1,
              "app-loader",
              [],
              null,
              null,
              null,
              p.b,
              p.a
            )),
            e.pb(
              1,
              114688,
              null,
              0,
              b.a,
              [],
              {
                width: [0, "width"],
              },
              null
            ),
          ],
          function (l, n) {
            l(n, 1, 0, n.component.loaderWidth);
          },
          null
        );
      }
      function rt(l) {
        return e.Mb(
          0,
          [
            e.Eb(0, d, [g.b]),
            e.Eb(0, m.a, []),
            e.Eb(0, i.v, []),
            e.Eb(0, h.a, []),
            e.Eb(0, i.f, [e.s]),
            e.Eb(0, f.a, []),
            e.Eb(0, x.a, []),
            e.Ib(671088640, 1, {
              searchElement: 0,
            }),
            e.Ib(671088640, 2, {
              panel: 0,
            }),
            e.Ib(671088640, 3, {
              odds: 0,
            }),
            (l()(),
            e.qb(
              10,
              0,
              null,
              null,
              24,
              "div",
              [["class", "bet-slip-container"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              11,
              0,
              null,
              null,
              17,
              "div",
              [["id", "live-bet"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              12,
              0,
              null,
              null,
              16,
              "div",
              [["class", "col-md-12 col-sm-12 col-xs-12 bet-info mabottpm"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.fb(16777216, null, null, 1, null, Yl)),
            e.pb(
              14,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(),
            e.qb(
              15,
              0,
              null,
              null,
              13,
              "div",
              [["class", "games-grid content-card-bg"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              16,
              0,
              null,
              null,
              8,
              "div",
              [["class", "back-lay-container back-lay-container-bet"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              17,
              0,
              null,
              null,
              5,
              "div",
              [["class", "unmatch-container table-card-header-bg"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              18,
              0,
              null,
              null,
              2,
              "p",
              [
                [
                  "style",
                  "padding: 10px 15px; margin: 0; font-weight: 600; text-transform: uppercase;",
                ],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e.Kb(19, null, [" ", " "])),
            e.Eb(131072, u.j, [u.k, e.h]),
            (l()(), e.fb(16777216, null, null, 1, null, zl)),
            e.pb(
              22,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, tn)),
            e.pb(
              24,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, Nn)),
            e.pb(
              26,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, jn)),
            e.pb(
              28,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, Gn)),
            e.pb(
              30,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, ot)),
            e.pb(
              32,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(16777216, null, null, 1, null, st)),
            e.pb(
              34,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
          ],
          function (l, n) {
            var t = n.component;
            l(
              n,
              14,
              0,
              t.object.getLoginInstance().state.isUserLogin &&
                !t.object.routeUrl &&
                t.object.showLiveTvButton
            ),
              l(n, 22, 0, t.object.getLoginInstance().state.isUserLogin),
              l(n, 24, 0, t.object.customStakepopUp),
              l(
                n,
                26,
                0,
                null == t.betSlip
                  ? null
                  : null == t.betSlip.slipList
                  ? null
                  : t.betSlip.slipList.length
              ),
              l(
                n,
                28,
                0,
                !(
                  (null != t.betSlip &&
                    null != t.betSlip.slipList &&
                    t.betSlip.slipList.length) ||
                  (null != t.betSlip.playerSlipList &&
                    null != t.betSlip.playerSlipList.unMatchedTicketsByEvents &&
                    t.betSlip.playerSlipList.unMatchedTicketsByEvents.length) ||
                  (null != t.betSlip.playerSlipList &&
                    null != t.betSlip.playerSlipList.matchedTicketsByEvents &&
                    t.betSlip.playerSlipList.matchedTicketsByEvents.length)
                )
              ),
              l(
                n,
                30,
                0,
                null == t.betSlip.playerSlipList
                  ? null
                  : null == t.betSlip.playerSlipList.unMatchedTicketsByEvents
                  ? null
                  : t.betSlip.playerSlipList.unMatchedTicketsByEvents.length
              ),
              l(
                n,
                32,
                0,
                null == t.betSlip.playerSlipList
                  ? null
                  : null == t.betSlip.playerSlipList.matchedTicketsByEvents
                  ? null
                  : t.betSlip.playerSlipList.matchedTicketsByEvents.length
              ),
              l(n, 34, 0, t.betAPI);
          },
          function (l, n) {
            l(n, 19, 0, e.Lb(n, 19, 0, e.Cb(n, 20).transform("Bet Slip")));
          }
        );
      }
      t("GlZp"),
        t.d(n, "a", function () {
          return pt;
        }),
        t.d(n, "b", function () {
          return mt;
        });
      var pt = e.ob({
        encapsulation: 2,
        styles: [],
        data: {},
      });
      function bt(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              3,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              2,
              "app-d1-player-bet-slip",
              [],
              null,
              [["document", "click"]],
              function (l, n, t) {
                var u = !0;
                return (
                  "document:click" === n &&
                    (u = !1 !== e.Cb(l, 3).click(t) && u),
                  u
                );
              },
              Gl,
              q
            )),
            e.Hb(4608, null, g.e, g.g, []),
            e.pb(
              3,
              245760,
              null,
              0,
              y,
              [O.a, I.a, S.a, v.a, _.a, _.p],
              null,
              null
            ),
          ],
          function (l, n) {
            l(n, 3, 0);
          },
          null
        );
      }
      function dt(l) {
        return e.Mb(
          0,
          [
            (l()(),
            e.qb(
              0,
              0,
              null,
              null,
              2,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e.qb(
              1,
              0,
              null,
              null,
              1,
              "app-d2-player-bet-slip",
              [],
              null,
              [["document", "click"]],
              function (l, n, t) {
                var u = !0;
                return (
                  "document:click" === n &&
                    (u = !1 !== e.Cb(l, 2).click(t) && u),
                  u
                );
              },
              rt,
              Vl
            )),
            e.pb(
              2,
              245760,
              null,
              0,
              Hl,
              [O.a, I.a, S.a, v.a, _.a, _.p],
              null,
              null
            ),
          ],
          function (l, n) {
            l(n, 2, 0);
          },
          null
        );
      }
      function gt(l) {
        return e.Mb(
          0,
          [
            (l()(), e.fb(16777216, null, null, 1, null, dt)),
            e.pb(
              1,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (l()(), e.fb(0, null, null, 0)),
          ],
          function (l, n) {
            l(n, 1, 0, "D2" == n.component.object.themeChange.uxDesign);
          },
          null
        );
      }
      function mt(l) {
        return e.Mb(
          0,
          [
            (l()(), e.fb(16777216, null, null, 1, null, bt)),
            e.pb(
              1,
              16384,
              null,
              0,
              i.n,
              [e.N, e.J],
              {
                ngIf: [0, "ngIf"],
                ngIfElse: [1, "ngIfElse"],
              },
              null
            ),
            (l()(), e.fb(0, [["secondCond", 2]], null, 0, null, gt)),
          ],
          function (l, n) {
            l(
              n,
              1,
              0,
              "D1" == n.component.object.themeChange.uxDesign,
              e.Cb(n, 2)
            );
          },
          null
        );
      }
    },
  },
]);
