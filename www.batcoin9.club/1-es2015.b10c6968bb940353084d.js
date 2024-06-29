(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    "1G5W": function (t, n, l) {
      "use strict";
      l.d(n, "a", function () {
        return s;
      });
      var e = l("l7GE"),
        i = l("ZUHj");
      function s(t) {
        return (n) => n.lift(new o(t));
      }
      class o {
        constructor(t) {
          this.notifier = t;
        }
        call(t, n) {
          const l = new a(t),
            e = Object(i.a)(l, this.notifier);
          return e && !l.seenValue ? (l.add(e), n.subscribe(l)) : l;
        }
      }
      class a extends e.a {
        constructor(t) {
          super(t), (this.seenValue = !1);
        }
        notifyNext(t, n, l, e, i) {
          (this.seenValue = !0), this.complete();
        }
        notifyComplete() {}
      }
    },
    "866w": function (t, n, l) {
      "use strict";
      l.d(n, "a", function () {
        return e;
      });
      class e {
        constructor(t) {
          (this.el = t),
            (this.regex = new RegExp(/^\d*\.?\d{0,2}$/g)),
            (this.specialKeys = [
              "Backspace",
              "Enter",
              "Tab",
              "End",
              "Home",
              "ArrowLeft",
              "ArrowRight",
              "Del",
              "Delete",
            ]);
        }
        onKeyDown(t) {
          if (-1 !== this.specialKeys.indexOf(t.key)) return;
          let n = this.el.nativeElement.value;
          const l = this.el.nativeElement.selectionStart,
            e = [
              n.slice(0, l),
              "Decimal" == t.key ? "." : t.key,
              n.slice(l),
            ].join("");
          e && !String(e).match(this.regex) && t.preventDefault();
        }
      }
    },
    "9Low": function (t, n, l) {
      "use strict";
      l.d(n, "a", function () {
        return e;
      }),
        l("kyFz");
      class e {
        constructor(t) {
          this.object = t;
        }
        ngOnInit() {}
        ngOnDestroy() {}
      }
    },
    A8Cp: function (t, n, l) {
      "use strict";
      var e = l("8Y7J"),
        i = l("SVse");
      class s {
        constructor() {}
        ngOnInit() {}
      }
      var o = e.ob({
        encapsulation: 0,
        styles: [
          [
            "img[_ngcontent-%COMP%]{border-radius:5px;cursor:pointer;transition:.3s}#massage-viewer[_ngcontent-%COMP%]{display:none;position:fixed;padding-top:100px;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgba(0,0,0,.9);z-index:99999999999}.modal-content[_ngcontent-%COMP%]{margin:auto;background:0 0;box-shadow:none;display:flex;justify-content:center;align-items:center;width:100%;max-width:100%;-webkit-animation-name:zoom;animation-name:zoom;-webkit-animation-duration:.6s;animation-duration:.6s}.modal-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;cursor:all-scroll}@-webkit-keyframes zoom{from{transform:scale(0)}to{transform:scale(1)}}@keyframes zoom{from{transform:scale(0)}to{transform:scale(1)}}#massage-viewer[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{position:fixed;top:15px;right:35px;z-index:99;background:rgba(0,0,0,.8);color:#fff;font-size:24px;width:40px;height:40px;text-align:center;line-height:40px;border-radius:5px;font-weight:700;transition:.3s}#massage-viewer[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]:focus, #massage-viewer[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]:hover{color:#bbb;text-decoration:none;cursor:pointer}.pmButton[_ngcontent-%COMP%]{position:fixed;z-index:99;left:15px;top:15px;display:flex;justify-content:center}.pmButton[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:rgba(0,0,0,.8);padding:5px;margin:0 5px 0 0;color:#fff;border:none;outline:0;font-size:16px;width:40px;height:40px}#mydiv[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%}@media only screen and (max-width:700px){.modal-content[_ngcontent-%COMP%]{width:100%}}",
          ],
        ],
        data: {},
      });
      function a(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(
              0,
              0,
              null,
              null,
              10,
              "div",
              [["id", "massage-viewer"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              1,
              0,
              null,
              null,
              1,
              "span",
              [
                ["class", "close"],
                ["id", "closebtn"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              2,
              0,
              null,
              null,
              0,
              "i",
              [
                ["aria-hidden", "true"],
                ["class", "fa fa-times"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              3,
              0,
              null,
              null,
              4,
              "div",
              [["class", "pmButton"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              4,
              0,
              null,
              null,
              1,
              "button",
              [
                ["class", " zoom-out btn btn-default"],
                ["id", "mszminus"],
                ["type", "button"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              5,
              0,
              null,
              null,
              0,
              "i",
              [
                ["aria-hidden", "true"],
                ["class", "fa fa-search-minus"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              6,
              0,
              null,
              null,
              1,
              "button",
              [
                ["class", " zoom-in btn btn-default"],
                ["id", "mszplus"],
                ["type", "button"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              7,
              0,
              null,
              null,
              0,
              "i",
              [
                ["aria-hidden", "true"],
                ["class", "fa fa-search-plus"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              8,
              0,
              null,
              null,
              2,
              "div",
              [["class", "mszcontainer"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              9,
              0,
              null,
              null,
              1,
              "div",
              [
                ["class", "modal-content"],
                ["style", "overflow: auto;"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              10,
              0,
              null,
              null,
              0,
              "img",
              [["id", "mszfull-image"]],
              [[8, "src", 4]],
              null,
              null,
              null,
              null
            )),
          ],
          null,
          function (t, n) {
            t(n, 10, 0, n.component.imgUrl);
          }
        );
      }
      l("hg8p"),
        l("iInd"),
        l("alQF"),
        l("cWJh"),
        l.d(n, "a", function () {
          return u;
        }),
        l.d(n, "b", function () {
          return C;
        });
      var u = e.ob({
        encapsulation: 0,
        styles: [[".upledeimg[_ngcontent-%COMP%]{cursor:zoom-in}"]],
        data: {},
      });
      function r(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(
              0,
              0,
              null,
              null,
              1,
              "h4",
              [
                ["class", "modal-title"],
                ["id", "myModalLabel"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(1, null, ["", "(", ")"])),
          ],
          null,
          function (t, n) {
            var l = n.component;
            t(
              n,
              1,
              0,
              null == l.txnNotification ? null : l.txnNotification.usrn,
              null != l.txnNotification && l.txnNotification.recId
                ? null == l.txnNotification
                  ? null
                  : l.txnNotification.recId
                : null == l.txnNotification
                ? null
                : l.txnNotification.id
            );
          }
        );
      }
      function c(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(
              0,
              0,
              null,
              null,
              1,
              "h4",
              [
                ["class", "modal-title"],
                ["id", "myModalLabel"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(1, null, ["", ""])),
          ],
          null,
          function (t, n) {
            var l = n.component;
            t(
              n,
              1,
              0,
              null != l.txnNotification && l.txnNotification.recId
                ? null == l.txnNotification
                  ? null
                  : l.txnNotification.recId
                : null == l.txnNotification
                ? null
                : l.txnNotification.id
            );
          }
        );
      }
      function h(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(
              0,
              0,
              null,
              null,
              1,
              "figure",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              1,
              0,
              null,
              null,
              0,
              "img",
              [
                ["alt", "notification"],
                ["class", "upledeimg"],
                ["width", "100%"],
              ],
              [[8, "src", 4]],
              [[null, "click"]],
              function (t, n, l) {
                var e = !0,
                  i = t.component;
                return (
                  "click" === n &&
                    (e =
                      !1 !==
                        i.viewImg(
                          null == i.txnNotification
                            ? null
                            : i.txnNotification.msgImgurl
                        ) && e),
                  e
                );
              },
              null,
              null
            )),
          ],
          null,
          function (t, n) {
            var l = n.component;
            t(
              n,
              1,
              0,
              null == l.txnNotification ? null : l.txnNotification.msgImgurl
            );
          }
        );
      }
      function g(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(0, 0, null, null, 4, "p", [], null, null, null, null, null)),
            (t()(),
            e.qb(
              1,
              0,
              null,
              null,
              1,
              "strong",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(-1, null, ["Message :"])),
            (t()(),
            e.qb(
              3,
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
            (t()(), e.Kb(4, null, ["", ""])),
          ],
          null,
          function (t, n) {
            var l = n.component;
            t(
              n,
              4,
              0,
              null == l.txnNotification ? null : l.txnNotification.message
            );
          }
        );
      }
      function b(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(
              0,
              0,
              null,
              null,
              1,
              "button",
              [
                ["class", "view_bet"],
                ["data-dismiss", "modal"],
              ],
              null,
              [[null, "click"]],
              function (t, n, l) {
                var e = !0,
                  i = t.component;
                return (
                  "click" === n &&
                    (e = !1 !== i.NavigateToTxn(i.txnNotification) && e),
                  e
                );
              },
              null,
              null
            )),
            (t()(), e.Kb(-1, null, ["View Transaction"])),
          ],
          null,
          null
        );
      }
      function d(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(
              0,
              0,
              null,
              null,
              4,
              "p",
              [["class", "mt-0"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              1,
              0,
              null,
              null,
              1,
              "strong",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(-1, null, ["Bonus Name :"])),
            (t()(),
            e.qb(
              3,
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
            (t()(), e.Kb(4, null, ["", ""])),
          ],
          null,
          function (t, n) {
            var l = n.component;
            t(
              n,
              4,
              0,
              null == l.txnNotification
                ? null
                : l.txnNotification.eventName.replace("validity reminder", "")
            );
          }
        );
      }
      function p(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(0, 0, null, null, 5, "p", [], null, null, null, null, null)),
            (t()(),
            e.qb(
              1,
              0,
              null,
              null,
              1,
              "strong",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(-1, null, ["Expire On :"])),
            (t()(),
            e.qb(
              3,
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
            (t()(), e.Kb(4, null, ["", ""])),
            e.Gb(5, 2),
          ],
          null,
          function (t, n) {
            var l = n.component,
              i = e.Lb(
                n,
                4,
                0,
                t(
                  n,
                  5,
                  0,
                  e.Cb(n.parent, 0),
                  (null == l.txnNotification
                    ? null
                    : l.txnNotification.expireOn) + "Z",
                  "dd/MM/yyyy, h:mm a"
                )
              );
            t(n, 4, 0, i);
          }
        );
      }
      function m(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(0, 0, null, null, 4, "p", [], null, null, null, null, null)),
            (t()(),
            e.qb(
              1,
              0,
              null,
              null,
              1,
              "strong",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(-1, null, ["Message :"])),
            (t()(),
            e.qb(
              3,
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
            (t()(), e.Kb(4, null, ["", ""])),
          ],
          null,
          function (t, n) {
            var l = n.component;
            t(
              n,
              4,
              0,
              null == l.txnNotification ? null : l.txnNotification.message
            );
          }
        );
      }
      function f(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(
              0,
              0,
              null,
              null,
              1,
              "button",
              [
                ["class", "view_bet"],
                ["data-dismiss", "modal"],
              ],
              null,
              [[null, "click"]],
              function (t, n, l) {
                var e = !0,
                  i = t.component;
                return (
                  "click" === n &&
                    (e = !1 !== i.NavigateToRolling(i.txnNotification) && e),
                  e
                );
              },
              null,
              null
            )),
            (t()(), e.Kb(-1, null, ["View Rolling"])),
          ],
          null,
          null
        );
      }
      function C(t) {
        return e.Mb(
          0,
          [
            e.Eb(0, i.e, [e.s]),
            (t()(),
            e.qb(
              1,
              0,
              null,
              null,
              22,
              "div",
              [
                ["aria-hidden", "true"],
                ["aria-labelledby", "admin-add-user"],
                ["class", "modal fade transction-modal"],
                ["data-backdrop", "static"],
                ["data-keyboard", "false"],
                ["id", "show-txn-notification"],
                ["role", "dialog"],
                ["tabindex", "-1"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              2,
              0,
              null,
              null,
              21,
              "div",
              [
                ["class", "modal-dialog"],
                ["role", "document"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              3,
              0,
              null,
              null,
              20,
              "div",
              [["class", "modal-content"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              4,
              0,
              null,
              null,
              7,
              "div",
              [["class", "modal-header"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              5,
              0,
              null,
              null,
              2,
              "button",
              [
                ["aria-label", "Close"],
                ["class", "close"],
                ["data-dismiss", "modal"],
                ["type", "button"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              6,
              0,
              null,
              null,
              1,
              "span",
              [["aria-hidden", "true"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(-1, null, ["\xd7"])),
            (t()(), e.fb(16777216, null, null, 1, null, r)),
            e.pb(
              9,
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
            (t()(), e.fb(16777216, null, null, 1, null, c)),
            e.pb(
              11,
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
            (t()(),
            e.qb(
              12,
              0,
              null,
              null,
              4,
              "div",
              [["class", "modal-body"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.fb(16777216, null, null, 1, null, h)),
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
            (t()(), e.fb(16777216, null, null, 1, null, g)),
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
            (t()(),
            e.qb(
              17,
              0,
              null,
              null,
              6,
              "div",
              [["class", "footer-modal"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              18,
              0,
              null,
              null,
              2,
              "div",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.fb(16777216, null, null, 1, null, b)),
            e.pb(
              20,
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
            (t()(),
            e.qb(
              21,
              0,
              null,
              null,
              2,
              "div",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              22,
              0,
              null,
              null,
              1,
              "button",
              [
                ["class", "close-btn"],
                ["data-dismiss", "modal"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(-1, null, ["Close"])),
            (t()(),
            e.qb(
              24,
              0,
              null,
              null,
              1,
              "app-massage-viewer",
              [],
              null,
              null,
              null,
              a,
              o
            )),
            e.pb(
              25,
              114688,
              null,
              0,
              s,
              [],
              {
                imgUrl: [0, "imgUrl"],
              },
              null
            ),
            (t()(),
            e.qb(
              26,
              0,
              null,
              null,
              22,
              "div",
              [
                ["aria-hidden", "true"],
                ["aria-labelledby", "admin-add-user"],
                ["class", "modal fade transction-modal"],
                ["data-backdrop", "static"],
                ["data-keyboard", "false"],
                ["id", "bonus-notification"],
                ["role", "dialog"],
                ["tabindex", "-1"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              27,
              0,
              null,
              null,
              21,
              "div",
              [
                ["class", "modal-dialog"],
                ["role", "document"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              28,
              0,
              null,
              null,
              20,
              "div",
              [["class", "modal-content"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              29,
              0,
              null,
              null,
              5,
              "div",
              [["class", "modal-header"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              30,
              0,
              null,
              null,
              2,
              "button",
              [
                ["aria-label", "Close"],
                ["class", "close"],
                ["data-dismiss", "modal"],
                ["type", "button"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              31,
              0,
              null,
              null,
              1,
              "span",
              [["aria-hidden", "true"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(-1, null, ["\xd7"])),
            (t()(),
            e.qb(
              33,
              0,
              null,
              null,
              1,
              "h4",
              [["class", "modal-title"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(-1, null, ["Reminder"])),
            (t()(),
            e.qb(
              35,
              0,
              null,
              null,
              6,
              "div",
              [["class", "modal-body"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.fb(16777216, null, null, 1, null, d)),
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
            (t()(), e.fb(16777216, null, null, 1, null, p)),
            e.pb(
              39,
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
            (t()(), e.fb(16777216, null, null, 1, null, m)),
            e.pb(
              41,
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
            (t()(),
            e.qb(
              42,
              0,
              null,
              null,
              6,
              "div",
              [["class", "footer-modal"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              43,
              0,
              null,
              null,
              2,
              "div",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.fb(16777216, null, null, 1, null, f)),
            e.pb(
              45,
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
            (t()(),
            e.qb(
              46,
              0,
              null,
              null,
              2,
              "div",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              47,
              0,
              null,
              null,
              1,
              "button",
              [
                ["class", "close-btn"],
                ["data-dismiss", "modal"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(-1, null, ["Close"])),
          ],
          function (t, n) {
            var l = n.component;
            t(n, 9, 0, l.object.isAdminLogin()),
              t(n, 11, 0, l.object.getLoginInstance().state.isPlayer),
              t(
                n,
                14,
                0,
                null == l.txnNotification ? null : l.txnNotification.msgImgurl
              ),
              t(
                n,
                16,
                0,
                null == l.txnNotification ? null : l.txnNotification.message
              ),
              t(n, 20, 0, l.object.getLoginInstance().state.isPlayer),
              t(n, 25, 0, l.imgUrl),
              t(
                n,
                37,
                0,
                null == l.txnNotification ? null : l.txnNotification.eventName
              ),
              t(
                n,
                39,
                0,
                null == l.txnNotification ? null : l.txnNotification.expireOn
              ),
              t(
                n,
                41,
                0,
                null == l.txnNotification ? null : l.txnNotification.message
              ),
              t(n, 45, 0, l.object.getLoginInstance().state.isPlayer);
          },
          null
        );
      }
    },
    "MK8/": function (t, n, l) {
      "use strict";
      l.d(n, "a", function () {
        return e;
      }),
        l("QZd1");
      class e {
        constructor(t) {
          (this.ForceSecureUrlPipe = t),
            (this.imgClass = ""),
            (this.imgId = ""),
            (this.img = ""),
            (this.defaultImg = "");
        }
        ngOnInit() {}
      }
    },
    QZd1: function (t, n, l) {
      "use strict";
      l.d(n, "a", function () {
        return e;
      });
      class e {
        transform(t, n, l = !0) {
          let e = "";
          return (
            (e = t || n),
            l && -1 == e.indexOf("https") && (e = e.replace("http", "https")),
            e
          );
        }
      }
    },
    dQhM: function (t, n, l) {
      "use strict";
      var e = l("01EG");
      class i extends e.a {
        constructor(t, n) {
          super(t, n),
            (this.service = t),
            (this.object = n),
            (this.searchEvent = []),
            (this.searchEventName = []),
            (this.specialMarketEventName = []),
            (this.searchEvents = []),
            (this.searchListdata = []),
            (this.checkSuperMaster = !1),
            (this.isSearchBoxOpend = !1),
            (this.exposureDetailsList = []),
            (this.counterNotification = []),
            (this.disabledRefreshbtn = !1),
            (this.onlySportwhitelableGameType = [
              this.object.getConstants().PNL.SPORTS,
              this.object.getConstants().PNL.SPECIAL_MARKET,
            ]),
            (this.onlyCasinowhitelableGameType = [
              this.object.getConstants().PNL.INDIAN_CASINO,
              this.object.getConstants().PNL.INTERNATIONAL_CASINO,
              this.object.getConstants().PNL.SLOT_AND_BINGO,
              this.object.getConstants().PNL.VIRTUALSPORT,
            ]),
            (this.onlySportAceCasinowhitelableGameType = [
              this.object.getConstants().PNL.SPORTS,
              this.object.getConstants().PNL.SPECIAL_MARKET,
              this.object.getConstants().PNL.INDIAN_CASINO,
            ]),
            (this.bannerwhitelableGameType = ["ALL"]),
            (this.design = "D1"),
            (this.loginObj = {
              usernameOrEmail: "",
              password: "",
            }),
            (this.homescreen = "/"),
            (this.forgetPassStage = 0),
            (this.resUserName = ""),
            (this.permissionMasterAll = !1),
            (this.txnNotification = {
              imgurl:
                "https://s3.ap-south-1.amazonaws.com/assets.payment.info/dev/787745912390761/transection-screenshot/Tue-Jan-31-2023-16-26-20",
              massage: "please attach right screen shot",
            }),
            (this.checkUrl = "bet-list"),
            (this.listData = [
              {
                img: "assets/images/admin_profile.png",
                link: "/profile/account-details",
                menu: "account-details",
                title: "Account Details",
                isAdmin: this.object.isAdminLogin(),
                isPlayer: this.object.getLoginInstance().state.isPlayer,
              },
              {
                img: "assets/images/account-details.png",
                link: "/profile/account-statement",
                class: "balance-overview",
                title: "Account Statement",
                isAdmin: this.object.isAdminLogin(),
                isPlayer: this.object.getLoginInstance().state.isPlayer,
              },
              {
                img: "assets/images/bank.svg",
                link: "/profile/bank-transfer",
                class: "balance-overview",
                title: "Bank Transfer",
                isAdmin: this.object.isAdminLogin(),
                isPlayer:
                  this.object.getLoginInstance().state.isPlayer &&
                  this.object.themeChange.bankingView,
              },
              {
                img: "assets/images/balance-overview.png",
                link: "/profile/balance-overview",
                class: "balance-overview",
                title:
                  "D2" == this.object.themeChange.uxDesign &&
                  this.object.getLoginInstance().state.isPlayer
                    ? "Deposit And WithDraw"
                    : "Balance Overview",
                isAdmin: this.object.isAdminLogin(),
                isPlayer:
                  (this.object.getLoginInstance().state.isPlayer &&
                    "D2" == this.object.themeChange.uxDesign &&
                    this.object.themeChange.bankingView) ||
                  ("D1" == this.object.themeChange.uxDesign &&
                    this.object.getLoginInstance().state.isPlayer),
              },
              {
                img: "assets/images/loyalty.svg",
                link: "/profile/player-layalty-points",
                menu: "loyalty",
                title: "Loyalty Points",
                isPlayer:
                  "D2" == this.object.themeChange.uxDesign &&
                  this.object.themeChange.bankingView &&
                  this.object.getUtilInstance().getStore("loyaltyPriviledge"),
              },
              {
                img: "assets/images/profit-loss.png",
                link: "/profile/profit-loss",
                class: "profit-loss",
                title: "Profit And Loss",
                isPlayer: this.object.getLoginInstance().state.isPlayer,
              },
              {
                img: "assets/images/bet-history.png",
                link: "/profile/bet-history",
                class: "bet-history",
                title: "Bet History",
                isPlayer: this.object.getLoginInstance().state.isPlayer,
              },
              {
                img: "assets/images/activity.png",
                link: "/profile/activity-log",
                class: "activity-log",
                title: "Activity Log",
                isAdmin: this.object.isAdminLogin(),
                isPlayer: this.object.getLoginInstance().state.isPlayer,
              },
              {
                img: "assets/images/home-inactive.svg",
                link: "/profile/notification",
                class: "notification",
                title: "Set Home screen",
                isAdmin: !1,
                isPlayer:
                  this.object.getLoginInstance().state.isPlayer &&
                  ("D1" == this.object.themeChange.uxDesign ||
                    "D2" == this.object.themeChange.uxDesign),
              },
              {
                img: "assets/images/notification-sidebar.png",
                link: "/profile/notification",
                class: "notification",
                title: "Notification History",
                isAdmin: !1,
                isPlayer: this.object.getLoginInstance().state.isPlayer,
              },
              {
                img: "assets/images/rolling_history.svg",
                link: "/profile/rolling",
                class: "rolling",
                title: "Bonus History",
                isAdmin: !1,
                isPlayer:
                  this.object.getLoginInstance().state.isPlayer &&
                  "D2" == this.object.themeChange.uxDesign &&
                  this.object.themeChange.bonusEnable,
              },
            ]),
            (this.listObject = [
              {
                balance: 0,
                refPnL: 0,
                creditRef: 0,
                rate: 0,
                currency: "CI",
              },
              {
                balance: 0,
                refPnL: 0,
                creditRef: 0,
                rate: 0,
                currency: "CH",
              },
              {
                balance: 0,
                refPnL: 0,
                creditRef: 0,
                rate: 0,
                currency: "CU",
              },
              {
                balance: 0,
                refPnL: 0,
                creditRef: 0,
                rate: 0,
                currency: "PBU",
              },
            ]),
            (this.exposureExist = !1),
            (this.isExcelEnabled = !1),
            (this.isPDFEnabled = !1),
            (this.listCurrency = ""),
            (this.selectedCurrency = ""),
            (this.stateCurrency = ""),
            (this.getcurrencyList = []),
            (this.currencySubscriber = null),
            (this.masterDefCurrency = ""),
            (this.counter = 0),
            (this._toggleMenu = !1),
            (this.tab = "home"),
            (this.OwnerCurrencyBal = null),
            (this.manageFirebaseApi = !1),
            (this.myReportCheck = !1),
            (this.currConvBal = !0),
            (this.storeObj = {
              casino: "INDIAN_CASINO",
              sport: "SPORTS",
              intCasino: "INTERNATIONAL_CASINO",
              specialMarket: "SPECIAL_MARKET",
            }),
            (this.navLink = {
              link: "/myprofile/balance-overview",
            }),
            (this.demoUserList = []),
            (this.tabsPriviledge = {
              DOWNLINE_LISTING: !0,
              PROFIT_LOSS_REPORTS_BY_DOWNLINE: !0,
              PROFIT_LOSS_REPORTS_BY_MARKET: !0,
              PROFIT_LOSS_REPORTS_BY_PLAYER: !0,
              ASSOCIATE_REPORT_BY_MARKET: !0,
              REPORTS_BY_IP_ADDRESS: !0,
              REPORT_BY_AFFILIATE: !0,
              REPORT_TRACKIER: !0,
              REPORT_BY_ACCOUNTS: !0,
              REPORT_BY_TRANSACTION: !0,
              BET_LIST: !0,
              BET_LIST_LIVE: !0,
              RISK_MANAGEMENT: !0,
              BANKING: !0,
              MARKETS: !0,
              MANUAL_MARKETS: !0,
              FANCY: !0,
              CASINO_MANAGEMENT: !0,
              DASHBOARD_MANAGEMENT: !0,
              FANCY_TEMPLATES: !0,
              CAN_RESETTLE_MARKET: !0,
              CAN_VOID_MARKET: !0,
              ISEDITED: !0,
              PLAYER_BATTLE: !0,
              PLAYER_CONTEST: !0,
              TRANSACTION: !0,
              TRNA_WHITE_LABEL: !0,
              REGISTERED_PLAYER_REPORT: !0,
              PAYMENT_MODE: !0,
              BONUS_REPORT: !0,
              GAMES: !0,
              TRANSACTION_REPORT: !0,
              WTH_REQ: !0,
              DEP_REQ: !0,
              CAN_SEARCH_USER: !1,
              SUSPICIOUS_BET: !1,
              LOYALTY_POINT_PROGRAM: !1,
              RSK_MATCH_ODD: !0,
              CONTACT_DETAILS: !1,
            }),
            (this.gameTypePriviledgeObj = [
              {
                name: "SPORTS",
                gameType: "SPORTS",
                evntId: 4,
                privildege: !0,
                priviledgeKey: "SPORTS",
              },
              {
                name: "ACE CASINO",
                gameType: "INDIAN_CASINO",
                evntId: 1,
                privildege: !0,
                priviledgeKey: "ACE_CASINO",
              },
              {
                name: "INTERNATIONAL CASINO",
                gameType: "INTERNATIONAL_CASINO",
                evntId: 2,
                privildege: !0,
                priviledgeKey: "INTERNATIONAL_CASINO",
              },
              {
                name: "SPORTS BOOK",
                gameType: "SLG_SPORTSBOOK",
                evntId: 8,
                privildege: !0,
                priviledgeKey: "SLG_SPORTSBOOK",
              },
              {
                name: "VIRTUAL SPORTS",
                gameType: "VIRTUAL_SPORTS",
                evntId: 6,
                privildege: !0,
                priviledgeKey: "VIRTUAL_SPORTS",
              },
              {
                name: "SLOTS & BINGO",
                gameType: "SLOTS_AND_BINGO",
                evntId: 3,
                privildege: !0,
                priviledgeKey: "STOLT_AND_BINGO",
              },
              {
                name: "SPECIAL MARKET",
                gameType: "SPECIAL_MARKET",
                evntId: 5,
                privildege: !0,
                priviledgeKey: "SPECIAL_MARKET",
              },
              {
                name: "GAMES",
                gameType: "FANTASY",
                evntId: 7,
                privildege: !0,
                priviledgeKey: "GAMES",
              },
            ]);
        }
      }
      l("TYxm"),
        l.d(n, "a", function () {
          return s;
        });
      class s extends i {
        constructor(t, n, l, e, i, s) {
          super(t, n),
            (this.service = t),
            (this.object = n),
            (this.broadCast = l),
            (this.activatedRoute = e),
            (this.router = i),
            (this.firebase = s),
            (this.modals = this.object.getDOMInstance().modal),
            (this.eventName = []),
            (this.handleVisibleState = () => {
              "visible" == document.visibilityState
                ? this.object.getUtilInstance().storeState("visible", !0)
                : this.object.getUtilInstance().removeState("visible"),
                this.object.getLoginInstance().state.isPlayer &&
                  ("visible" === document.visibilityState
                    ? this.sessionMaintain()
                    : (this.privousTime = new Date()));
            }),
            (this.firebaseEventload = !1),
            this.init();
        }
        init() {
          if (
            (this.__isExcelEnabled(),
            this.__isPDFEnabled(),
            this.attachListners(),
            this.attachCurrencyListener(),
            this.object.loginState.getIsLogin())
          ) {
            if (
              (this.accountDetails(),
              this.object.getUtilInstance().getStore("liveCasinoType"))
            ) {
              let t = this.object.getUtilInstance().getStore("liveCasinoType");
              t != this.object.getConstants().PNL.INTERNATIONAL_CASINO &&
                t != this.object.getConstants().PNL.SLOT_AND_BINGO &&
                t != this.object.getConstants().PNL.DREAM_CASINO &&
                (this.object.currConvBal = !1);
            }
            this.object.getLoginInstance().state.isPlayer &&
              setTimeout(() => {
                (this.demoUserList = Object.values(
                  this.object.getConstants().DEMOUSER
                )),
                  (this.object.demoUser = this.demoUserList.some(
                    (t) => t == this.object.palyerSelfInfo.userName
                  ));
              }, 2e3);
          }
        }
        toggleMenu() {
          this.object._toggleMenu = !this.object._toggleMenu;
        }
        inhertitShowModal(t) {
          return this.object.getDOMInstance().showModal(t);
        }
        inhertitHideModal(t) {
          return this.object.getDOMInstance().hideModal(t);
        }
        showCreateAdmin() {
          this.inhertitShowModal(this.modals.registerAdmin),
            this.broadCast.broadcast(
              this.object.getConstants().BROADCASTKEY.FORMMODAL,
              {
                value: !0,
              }
            );
        }
        showUserAdd() {
          this.inhertitShowModal(this.modals.adminUserAdd),
            this.broadCast.broadcast(
              this.object.getConstants().BROADCASTKEY.FORMMODAL,
              {
                value: !0,
              }
            );
        }
        showchangePassword() {
          this.inhertitShowModal(this.modals.mobileChangePassword);
        }
        __isExcelEnabled() {
          this.activatedRoute &&
            this.activatedRoute.data.subscribe((t) => {
              this.isExcelEnabled = t.excel;
            });
        }
        __isPDFEnabled() {
          this.activatedRoute &&
            this.activatedRoute.data.subscribe((t) => {
              this.isPDFEnabled = t.pdf;
            });
        }
        accountDetails() {
          this.object.isAdminLogin();
        }
        attachListners() {
          this.unsubscribeAccountDetails = this.broadCast
            .on(this.object.getConstants().BROADCASTKEY.ACCOUNTDETAILS)
            .subscribe(
              (t) => {
                this.object.loginState.getIsLogin()
                  ? (this.accountDetails(),
                    1 == this.object.getLoginInstance().state.isMaster &&
                      this.handleSelfMasterAccountDetails())
                  : (this.userProfileDetail = {});
              },
              (t) => {
                this.setError(t);
              }
            );
        }
        attachCurrencyListener() {
          let t = this.object
            .getUtilInstance()
            .getStore(this.object.getConstants().STORAGE.currency);
          this.listCurrency = t;
        }
        handleLoginPopUp() {
          this.object
            .getDOMInstance()
            .showModal(this.object.getDOMInstance().modal.login);
        }
        handleMobileLoginPopUp() {
          this.object
            .getDOMInstance()
            .showModal(this.object.getDOMInstance().modal.mobilePlayerLogin);
        }
        playerLogout() {
          let t,
            n,
            l,
            e,
            i,
            s,
            o,
            a,
            u,
            r,
            c,
            h,
            g = null;
          (n = JSON.parse(window.localStorage.getItem("betlist"))),
            (l = JSON.parse(window.localStorage.getItem("betlive"))),
            (e = JSON.parse(window.localStorage.getItem("viewBetTable"))),
            (r = JSON.parse(window.localStorage.getItem("bonusColm"))),
            (i = JSON.parse(window.localStorage.getItem("bankingColm"))),
            (s = this.object.getUtilInstance().getStore("SaveStakeFilter")),
            (o = JSON.parse(
              this.object.getUtilInstance().getStore("SaveMarketFilter")
            )),
            (a =
              "true" ===
              this.object.getUtilInstance().getStore("showRoundOffStake")),
            (u = this.object.getUtilInstance().getStore("storageVirsion")),
            (c = this.object.getUtilInstance().getStore("matchoddsource")),
            (h = JSON.parse(window.localStorage.getItem("transactionColm"))),
            this.object.getLoginInstance().state.isPlayer
              ? ((t =
                  "INPLAY" == this.object.homescreen
                    ? this.object.getUI_URL().user.sport
                    : this.object.getUI_URL().user.root),
                (g = JSON.parse(
                  this.object.getUtilInstance().getStore("welcomeBanner")
                )))
              : (t = "/admin"),
            this.clearStore().then(() => {
              setTimeout(() => {
                this.object.getUtilInstance().storeState("userAuthorized", !0),
                  window.localStorage.removeItem("clickToReloadButton"),
                  g &&
                    (this.object
                      .getUtilInstance()
                      .storeState("welcomeBanner", JSON.stringify(g)),
                    (this.object.welcomebannerData = null));
              }, 1e3),
                u == this.object.systemStorageVirsion &&
                  (this.object
                    .getUtilInstance()
                    .storeState("betlist", JSON.stringify(n)),
                  this.object
                    .getUtilInstance()
                    .storeState("betlive", JSON.stringify(l)),
                  this.object
                    .getUtilInstance()
                    .storeState("viewBetTable", JSON.stringify(e)),
                  this.object
                    .getUtilInstance()
                    .storeState("bonusColm", JSON.stringify(r)),
                  this.object
                    .getUtilInstance()
                    .storeState("transactionColm", JSON.stringify(h)),
                  this.object
                    .getUtilInstance()
                    .storeState("bankingColm", JSON.stringify(i)),
                  s &&
                    this.object
                      .getUtilInstance()
                      .storeState("SaveStakeFilter", s),
                  o &&
                    this.object
                      .getUtilInstance()
                      .storeState("SaveMarketFilter", JSON.stringify(o)),
                  this.object
                    .getUtilInstance()
                    .storeState("matchoddsource", c)),
                this.object
                  .getUtilInstance()
                  .storeState(
                    this.object.getConstants().STORAGE
                      .localStorageColumnMaintainvirsion,
                    this.object.systemStorageVirsion
                  ),
                this.object.getUtilInstance().storeState("matchoddsource", c),
                a &&
                  this.object
                    .getUtilInstance()
                    .storeState("showRoundOffStake", a),
                this.broadCast.broadcast(
                  this.object.getConstants().BROADCASTKEY.ACCOUNTDETAILS,
                  {}
                ),
                this.broadCast.broadcast(
                  this.object.getConstants().USERINFO.ISLOGGEDIN,
                  {
                    value: !1,
                  }
                ),
                this.object
                  .getDOMInstance()
                  .closeProfileMenu("arrow_box", "active-box"),
                clearInterval(this.unSubscribeData),
                (this.object.getLoginInstance().state.isPlayer = !1),
                (this.object.getLoginInstance().state.isUserLogin = !1),
                (this.object.getLoginInstance().state.isSupAdmin = null),
                (this.object.getLoginInstance().state.isBrandManager = null),
                (this.object.getLoginInstance().state.isSupMaster = !1),
                (this.object.getLoginInstance().state.isMaster = !1),
                (this.object.getLoginInstance().state.isSupORAdmin = !1),
                (this.object.getLoginInstance().state.isAdmin = !1),
                (this.object.getLoginInstance().state.isSUpandAdmin = !1),
                (this.object.getLoginInstance().state.canCreateAdmin = !1),
                (this.object.getLoginInstance().state.exposureExist = !1),
                (this.object.getLoginInstance().state.writeprivilege = !1),
                (this.object.getLoginInstance().state.isOwner = !1),
                (this.object.getLoginInstance().state.isTrManager = !1),
                (this.object.getLoginInstance().state.isTrader = !1),
                (this.object.getLoginInstance().state.canAddMarket = !1),
                (this.object.getLoginInstance().state.canCreateFancy = !1),
                (this.object.getLoginInstance().state.isOwnerTrTrm = !1),
                (this.object.getLoginInstance().state.isMasterAgent = !1),
                (this.object.getLoginInstance().state.user_TntId = null),
                this.object.showSportsBookForSpecificSuper(),
                this.broadCast.broadcast(
                  this.object.getConstants().BROADCASTKEY.BETSLIP,
                  null
                ),
                this.broadCast.broadcast(
                  this.object.getConstants().BROADCASTKEY.FANCYBETSLIP,
                  null
                ),
                this.object.getRouterInstance().navigate([t]);
            }),
            this.object.unsubscribFirebaseEvent &&
              this.object.unsubscribFirebaseEvent.unsubscribe();
        }
        mobilePlayerLogout() {
          let t,
            n,
            l,
            e = null;
          (l = window.localStorage.getItem("matchoddsource")),
            this.object.getLoginInstance().state.isPlayer
              ? ((t =
                  "INPLAY" == this.object.homescreen
                    ? this.object.getUI_URL().user.sport
                    : this.object.getUI_URL().user.root),
                (e = JSON.parse(
                  this.object.getUtilInstance().getStore("welcomeBanner")
                )))
              : (t = "/admin"),
            (n =
              "true" ===
              this.object.getUtilInstance().getStore("showRoundOffStake")),
            this.clearStore().then(() => {
              setTimeout(() => {
                this.object.getUtilInstance().storeState("userAuthorized", !0),
                  e &&
                    (this.object
                      .getUtilInstance()
                      .storeState("welcomeBanner", JSON.stringify(e)),
                    (this.object.welcomebannerData = null));
              }, 1e3),
                this.object.getUtilInstance().storeState("matchoddsource", l),
                n &&
                  this.object
                    .getUtilInstance()
                    .storeState("showRoundOffStake", n),
                this.broadCast.broadcast(
                  this.object.getConstants().BROADCASTKEY.BETSLIP,
                  null
                ),
                this.broadCast.broadcast(
                  this.object.getConstants().BROADCASTKEY.ACCOUNTDETAILS,
                  {}
                ),
                clearInterval(this.unSubscribeData),
                this.object.getRouterInstance().navigate([t]),
                (this.object.getLoginInstance().state.isUserLogin = !1),
                (this.object.getLoginInstance().state.isSupAdmin = !1),
                (this.object.getLoginInstance().state.isBrandManager = !1),
                (this.object.getLoginInstance().state.isSupMaster = !1),
                (this.object.getLoginInstance().state.isMaster = !1),
                (this.object.getLoginInstance().state.isSupORAdmin = !1),
                (this.object.getLoginInstance().state.isAdmin = !1),
                (this.object.getLoginInstance().state.isSUpandAdmin = !1),
                (this.object.getLoginInstance().state.canCreateAdmin = !1),
                (this.object.getLoginInstance().state.exposureExist = !1),
                (this.object.getLoginInstance().state.writeprivilege = !1),
                (this.object.getLoginInstance().state.isPlayer = !1),
                (this.object.getLoginInstance().state.isOwner = !1),
                (this.object.getLoginInstance().state.user_TntId = null),
                this.object.showSportsBookForSpecificSuper();
            }),
            this.object
              .getUtilInstance()
              .storeState(
                this.object.getConstants().STORAGE.plateform,
                JSON.stringify(this.storeObj)
              ),
            this.object.unsubscribFirebaseEvent &&
              this.object.unsubscribFirebaseEvent.unsubscribe(),
            this.object.unsubscribGlobFirbase.length &&
              this.object.unsubscribGlobFirbase.forEach((t) => t.unsubscribe());
        }
        handleSelfAdminAccountDetails() {
          this.object.getLoginInstance().state.isMaster ||
            this.object.getLoginInstance().state.isPlayer ||
            this.service
              .adminget(
                this.object.getURLInstance().selfAccountDetails,
                this.object.getURLInstance().EMPTY_PARAM,
                this.headers()
              )
              .toPromise()
              .then((t) => {
                this.setSuccess(t),
                  (this.userProfileDetail = t.data.userAccountDetail),
                  (this.getcurrencyList =
                    this.userProfileDetail.accountDetails),
                  this.object.getLoginInstance().state.isOwner &&
                    (this.object.conversionRate =
                      this.userProfileDetail.conversionRate);
                var n = this.userProfileDetail.defaultCurrency
                  ? this.userProfileDetail.defaultCurrency
                  : "CI";
                if (this.getcurrencyList) {
                  let t = this.getcurrencyList.find(
                    (t) => t.currency == this.userProfileDetail.currency
                  );
                  t &&
                    ((this.userProfileDetail.availBal = t.availBal),
                    (this.userProfileDetail.balance = t.balance),
                    (this.userProfileDetail.creditRef = t.creditRef),
                    (this.userProfileDetail.refPnL = t.refPnL),
                    (this.userProfileDetail.exposure = t.exposure));
                }
                this.modifyCurrencyList(n),
                  this.getSelectedcurrencyPth(),
                  (this.masterPth = this.userProfileDetail),
                  (this.object.isTotp = this.userProfileDetail.totp),
                  this.object.getLoginInstance().state.isOwner &&
                    (this.OwnerCurrencyBal = this.userProfileDetail.balance),
                  "jsowner" == this.userProfileDetail.userName &&
                    (this.userAccountDetailSideProfile =
                      this.userProfileDetail),
                  this.broadCast.broadcast(
                    this.object.getConstants().BROADCASTKEY.USERDETAILS,
                    {
                      userAccountDetail: this.userProfileDetail,
                    }
                  ),
                  (this.checkUrl = this.object.checkpath),
                  this.object.currencySetList.length ||
                    this.getcurrencyList.forEach((t) => {
                      t.balance > 0 &&
                        this.object.currencySetList.push(t.currency);
                    }),
                  this.userProfileDetail.isB2cUser &&
                    this.object.getLoginInstance().state.isSupAdmin &&
                    (this.userProfileDetail.hasOwnProperty("privilegeList") &&
                      this.userProfileDetail.privilegeList.length &&
                      this.userProfileDetail.privilegeList.forEach((t) => {
                        "LOYALTY_POINT_PROGRAM" == t.privilege && t.isAdded
                          ? this.object
                              .getUtilInstance()
                              .storeState("loyaltyPriviledge", !0)
                          : this.object
                              .getUtilInstance()
                              .removeState("loyaltyPriviledge");
                      }),
                    this.userProfileDetail.lppEnabled
                      ? this.object
                          .getUtilInstance()
                          .storeState("loyaltyUserToggle", !0)
                      : this.object
                          .getUtilInstance()
                          .removeState("loyaltyUserToggle"));
              })
              .catch((t) => {
                this.setError(t);
              });
        }
        handleSelfMasterAccountDetails() {
          0 != this.object.getLoginInstance().state.isMaster &&
            this.service
              .adminget(
                this.object.getURLInstance().selfAccountDetails,
                this.object.getURLInstance().EMPTY_PARAM,
                this.headers()
              )
              .toPromise()
              .then((t) => {
                this.setSuccess(t),
                  (this.userProfileDetail = t.data.userAccountDetail),
                  (this.masterPth = this.userProfileDetail),
                  (this.object.conversionRate =
                    this.userProfileDetail.conversionRate),
                  (this.masterDefCurrency = this.userProfileDetail.currency),
                  (this.object.isTotp = this.userProfileDetail.totp),
                  this.object
                    .getUtilInstance()
                    .storeState(
                      this.object.getConstants().STORAGE.currency,
                      this.userProfileDetail.currency
                    ),
                  this.broadCast.broadcast(
                    this.object.getConstants().BROADCASTKEY.USERDETAILS,
                    {
                      userAccountDetail: this.userProfileDetail,
                    }
                  ),
                  this.getAdminUserAccountDetailsSideProfile(),
                  this.setRateforRiskmgmt([this.userProfileDetail]);
              })
              .catch((t) => {
                this.setError(t);
              });
        }
        setRateforRiskmgmt(t) {
          let n = JSON.parse(
              this.object
                .getUtilInstance()
                .getStore(this.object.getConstants().STORAGE.USERINFO)
            ),
            l = this.object
              .getUtilInstance()
              .getStore(this.object.getConstants().STORAGE.currency),
            e = {
              rateToggle: this.object.showOnRates,
              rate: this.object.rate,
            };
          t.forEach((t) => {
            (e[t.currency] = t.rate), t.currency == l && (e.rate = t.rate);
          }),
            n && (e.rateToggle = n.rateToggle),
            this.object
              .getUtilInstance()
              .storeState(
                this.object.getConstants().STORAGE.USERINFO,
                JSON.stringify(e)
              );
        }
        handleSelfPlayerAccountDetails() {
          0 != this.object.getLoginInstance().state.isPlayer &&
            this.object
              .getUtilInstance()
              .getStore(this.object.getConstants().STORAGE.token) &&
            this.service
              .get(
                this.object.getURLInstance().selfAccountDetails,
                this.object.getURLInstance().EMPTY_PARAM,
                this.headers()
              )
              .toPromise()
              .then((t) => {
                this.setSuccess(t),
                  (this.userProfileDetail = t.data.userAccountDetail),
                  (this.object.userDetails = this.userProfileDetail),
                  (this.object.conversionRate =
                    this.userProfileDetail.conversionRate),
                  (this.object.checkUserCurr = this.userProfileDetail.currency),
                  (this.object.palyerSelfInfo = this.userProfileDetail),
                  (this.object.getLoginInstance().state.isPlayerAllow =
                    this.userProfileDetail.status),
                  (this.manageFirebaseApi = !0),
                  (this.casinoBalLoader = !1),
                  (this.object.getLoginInstance().state.balance =
                    this.userProfileDetail.balance),
                  (this.userProfileDetail.exposure >= 0 ||
                    this.userProfileDetail.exposure <= 0) &&
                    (this.object.getLoginInstance().state.exposureExist = !0),
                  this.multifactorCalculate(),
                  (this.masterPth = this.userProfileDetail),
                  this.scoreCardVisiblity(this.userProfileDetail),
                  this.openAcceptRulesModal(),
                  this.updateDreamCasinoBal(this.userProfileDetail),
                  this.broadCast.broadcast(
                    this.object.getConstants().BROADCASTKEY.USERDETAILS,
                    {
                      userAccountDetail: this.userProfileDetail,
                    }
                  );
              })
              .catch((t) => {
                (this.casinoBalLoader = !1),
                  "Unauthorized" == JSON.parse(t._body).error &&
                    this.router.navigate([""]),
                  this.setError(t);
              });
        }
        updateDreamCasinoBal(t) {
          if (this.object.getUtilInstance().getStore("liveCasinoType")) {
            let n = this.object
              .getUtilInstance()
              .getStore(this.object.getConstants().STORAGE.CURRENCYCONV);
            "wrcs" == this.object.checkpath &&
              n &&
              (this.userProfileDetail.liveCasinoBal = 0.01 * t.liveCasinoBal);
          }
        }
        multifactorCalculate() {
          let t = this.object
            .getConstants()
            .CURRENCYRATE.find(
              (t) => t.currency == this.object.palyerSelfInfo.currency
            );
          t &&
            this.object
              .getUtilInstance()
              .storeState(
                this.object.constant.STORAGE.currencyRate,
                this.object.getUtilInstance().stringify(t)
              );
        }
        scoreCardVisiblity(t) {
          this.object.isCurrencyReqForStream = !(
            t.currency == this.object.getConstants().CURRENCY.CI &&
            t.balance < this.object.requiredBalforCI
          );
        }
        handleSelfPlayerAccountDetailsfirstTime() {
          0 != this.object.getLoginInstance().state.isPlayer
            ? this.object
                .getUtilInstance()
                .getStore(this.object.getConstants().STORAGE.token) &&
              this.service
                .get(
                  this.object.getURLInstance().selfAccountDetails,
                  this.object.getURLInstance().EMPTY_PARAM,
                  this.headers()
                )
                .toPromise()
                .then((t) => {
                  this.setSuccess(t),
                    (this.userProfileDetail = t.data.userAccountDetail),
                    (this.object.userDetails = this.userProfileDetail),
                    (this.object.conversionRate =
                      this.userProfileDetail.conversionRate),
                    (this.object.checkUserCurr =
                      this.userProfileDetail.currency),
                    (this.object.palyerSelfInfo = this.userProfileDetail),
                    (this.object.getLoginInstance().state.isPlayerAllow =
                      this.userProfileDetail.status),
                    (this.manageFirebaseApi = !0),
                    (this.object.getLoginInstance().state.balance =
                      this.userProfileDetail.balance),
                    (this.userProfileDetail.exposure >= 0 ||
                      this.userProfileDetail.exposure <= 0) &&
                      (this.object.getLoginInstance().state.exposureExist = !0),
                    (this.masterPth = this.userProfileDetail),
                    this.broadCast.broadcast(
                      this.object.getConstants().BROADCASTKEY.USERDETAILS,
                      {
                        userAccountDetail: this.userProfileDetail,
                      }
                    );
                })
                .catch((t) => {
                  "Unauthorized" == JSON.parse(t._body).error &&
                    (this.object.loginState.setIsLogin(!1),
                    this.object.getUtilInstance().clearStore(),
                    this.router.navigate([""]),
                    this.object
                      .getUtilInstance()
                      .storeState("userAuthorized", !0),
                    this.object
                      .getDOMInstance()
                      .showModal(
                        this.object.getDOMInstance().modal.mobilePlayerLogin
                      ),
                    this.object
                      .getDOMInstance()
                      .showModal(this.object.getDOMInstance().modal.login));
                })
            : this.object.getUtilInstance().getStore("userAuthorized") &&
              setTimeout(() => {
                this.object
                  .getDOMInstance()
                  .showModal(
                    this.object.getDOMInstance().modal.mobilePlayerLogin
                  );
              }, 1e3);
        }
        setSelectedCurrency(t) {
          (this.listCurrency = t),
            this.object
              .getUtilInstance()
              .storeState(this.object.getConstants().STORAGE.currency, t),
            this.broadCast.broadcast(
              this.object.getConstants().BROADCASTKEY.CURRENCY,
              {
                currency: t,
              }
            ),
            this.getSelectedcurrencyPth(),
            this.getAdminUserAccountDetailsSideProfile(),
            this.broadCast.broadcast(
              this.object.getConstants().BROADCASTKEY.ACTIVEPLAYER,
              "currencyChange"
            ),
            this.multifactorCalculateAdmin();
        }
        multifactorCalculateAdmin() {
          let t = this.object
              .getUtilInstance()
              .getStore(this.object.getConstants().STORAGE.currency),
            n = this.object
              .getConstants()
              .CURRENCYRATE.find((n) => n.currency == t);
          n &&
            this.object
              .getUtilInstance()
              .storeState(
                this.object.constant.STORAGE.currencyRate,
                this.object.getUtilInstance().stringify(n)
              );
        }
        UpdateCurrecnyAftreSearch() {
          this.unsubscribeUpdateCurrency = this.broadCast
            .on(
              this.object.getConstants().BROADCASTKEY.UpdateCurrecnyAftreSearch
            )
            .subscribe((t) => {
              t.length &&
                ((this.listCurrency = t[0].currency),
                this.object
                  .getUtilInstance()
                  .storeState(
                    this.object.getConstants().STORAGE.currency,
                    this.listCurrency
                  ));
            });
        }
        getSelectedCurrency(t) {
          setTimeout(() => {
            null ==
            this.object
              .getUtilInstance()
              .getStore(this.object.getConstants().STORAGE.currency)
              ? ((this.listCurrency = t),
                this.object
                  .getUtilInstance()
                  .storeState(this.object.getConstants().STORAGE.currency, t),
                (this.object.getLoginInstance().state.isAdmin ||
                  this.object.getLoginInstance().state.isMaster) &&
                  this.setSelectedCurrency(t),
                this.object.getLoginInstance().state.isSupAdmin &&
                  (this.getAdminUserAccountDetailsSideProfile(),
                  this.broadCast.broadcast(
                    this.object.getConstants().BROADCASTKEY.CURRENCYREFLECT,
                    {
                      currency: t,
                    }
                  )))
              : this.getAdminUserAccountDetailsSideProfile();
          }, 850);
        }
        modifyCurrencyList(t) {
          this.getSelectedCurrency(t);
        }
        getSelectedcurrencyPth() {
          let t = [];
          this.object.getLoginInstance().state.isOwner &&
            (this.getcurrencyList = this.listObject),
            this.getcurrencyList &&
              (this.getcurrencyList.forEach((n) => {
                n.currency == this.listCurrency && t.push(n),
                  n.currency != this.listCurrency ||
                    this.object.getLoginInstance().state.isOwner ||
                    (this.object.conversionRate = n.conversionRate);
              }),
              (this.mainPth = t[0]));
        }
        gotoDashboard() {
          this.object.specialMarket
            ? this.object.getRouterInstance().navigate(["/special-market"])
            : this.object.isPinned
            ? this.object.getRouterInstance().navigate(["/sport/pinned"])
            : this.object
                .getRouterInstance()
                .navigate([this.object.getUI_URL().user.sport]),
            (this.searchEvents = []),
            (this.searchValue = "");
        }
        removeUserId() {
          window.localStorage.removeItem("id"),
            window.localStorage.removeItem("userAccess"),
            window.localStorage.removeItem("downlinePlayer");
        }
        getExposureDetails() {
          let t =
            this.object.getConstants().PARAMSID.userId +
            this.object.getLoginInstance().state._id;
          this.service
            .get(
              this.object.getURLInstance().getExposureListPlayer,
              t,
              this.headers()
            )
            .toPromise()
            .then((t) => {
              this.exposureDetailsList = t.data;
            })
            .catch((t) => {}),
            this.object.getDOMInstance().showModal("exposure-details");
        }
        getAdminUserAccountDetailsSideProfile() {
          (this.disabledRefreshbtn = !0),
            this.object.getLoginInstance().state.isAssociate ||
              this.object.getLoginInstance().state.isOwnerTrTrm ||
              this.object.getLoginInstance().state.isTrCM ||
              this.service
                .adminget(
                  this.object.getURLInstance().getUserAccountDetailSideProfile,
                  this.object.getURLInstance().EMPTY_PARAM,
                  this.headers()
                )
                .toPromise()
                .then((t) => {
                  let n = t.data.userAccountDetail,
                    l = this.object
                      .getUtilInstance()
                      .getStore(this.object.getConstants().STORAGE.currency);
                  n.hasOwnProperty("accountDetails")
                    ? (this.setRateforRiskmgmt(n.accountDetails),
                      n.accountDetails.forEach((t) => {
                        t.currency == l &&
                          ((this.userAccountDetailSideProfile = t),
                          (this.object.bankingCurrency =
                            this.userAccountDetailSideProfile));
                      }))
                    : (this.userAccountDetailSideProfile = n),
                    (this.disabledRefreshbtn = !1);
                });
        }
        handleSearchEvent() {
          (this.searchEvent = []),
            this.service
              .whitelabelget(
                this.object.getURLInstance().getSearchEventNames,
                "isSport=true",
                this.headers()
              )
              .toPromise()
              .then((t) => {
                t.data.children.forEach((t) => {
                  delete t.customized,
                    delete t.eventStatus,
                    this.searchEvent.push(t);
                }),
                  this.object
                    .getUtilInstance()
                    .storeState(
                      this.object.getConstants().STORAGE.searchEvent,
                      JSON.stringify(this.searchEvent)
                    );
              });
        }
        handleSearchEventwithoutAuth() {
          this.object.getLoginInstance().getIsLogin() ||
            ((this.searchEvent = []),
            this.service
              .whitelabelget(
                this.object.getURLInstance().getSearchEventNames,
                "isSport=true",
                this.headers()
              )
              .toPromise()
              .then((t) => {
                (this.searchEvent = t.data.children),
                  this.object
                    .getUtilInstance()
                    .storeState(
                      this.object.getConstants().STORAGE.searchEvent,
                      JSON.stringify(this.searchEvent)
                    ),
                  this.getLocalStorage();
              }));
        }
        getNotification() {
          this.object.getLoginInstance().state.isPlayer &&
            this.object.unsubscribGlobFirbase.push(
              this.firebase
                .playerNotifiaction(this.object.getLoginInstance().state._id)
                .subscribe((t) => {
                  t &&
                    ((this.notificationData = t),
                    (this.counterNotification = t.eventSettlements.filter(
                      (t) => t.notSeen
                    )),
                    this.counterNotification.length > 0 &&
                      (("BANKING" != t.eventSettlements[0].ntyp &&
                        "VERIFICATION" != t.eventSettlements[0].ntyp) ||
                        (this.counterNotification >
                          this.object.newcounterNotification &&
                          (this.playerPlayAudio(),
                          "INSTANT" ==
                            t.eventSettlements[0].eventPnl.expireOn &&
                            this.refreshPageOnInstantRequest()),
                        (this.object.newcounterNotification =
                          this.counterNotification))));
                })
            );
        }
        refreshPageOnInstantRequest() {
          setTimeout(() => {
            window.location.reload();
          }, 1e3);
        }
        playAudio() {
          let t = new Audio();
          (t.src = "assets/audio/alert_new.mp3"),
            t.load(),
            t.play(),
            (t.volume = 0.5);
        }
        playerPlayAudio() {
          let t = new Audio();
          (t.src = "assets/audio/alert_new.mp3"),
            t.load(),
            t.play(),
            (t.volume = 0.5);
        }
        firebaseEvent() {
          this.unSubscribeFirebaseEvent = this.broadCast
            .on(this.object.getConstants().BROADCASTKEY.FIREBASEEVENT)
            .subscribe((t) => {
              let n = t.booleanKeys[0];
              n &&
                ((n.eventAdded || n.marketSettled || n.fancyMarketSettled) &&
                  setTimeout(() => {
                    this.searchEvent = JSON.parse(
                      this.object
                        .getUtilInstance()
                        .getStore(
                          this.object.getConstants().STORAGE.searchEvent
                        )
                    );
                  }, 2500),
                (n.fancyMarketSettled || n.marketSettled) &&
                  this.object.betlistId.matchId.includes(n.marketId) &&
                  this.handleSelfPlayerAccountDetails(),
                (n.marketReopen || n.eventVoidReopn) &&
                  this.handleSelfPlayerAccountDetails());
            });
        }
        destroySubcriberD1() {
          clearInterval(this.unSubscribeData),
            this.unSubscribeFirebaseEvent &&
              this.unSubscribeFirebaseEvent.unsubscribe(),
            this.unsubscribecasino && this.unsubscribecasino.unsubscribe(),
            this.mySubscription && this.mySubscription.unsubscribe(),
            this.unsubcribeSearchData &&
              this.unsubcribeSearchData.unsubscribe(),
            this.object.unsubscribFirebaseEvent &&
              this.object.unsubscribFirebaseEvent.unsubscribe(),
            this.object.unsubscribGlobFirbase.length &&
              this.object.unsubscribGlobFirbase.forEach((t) => t.unsubscribe()),
            this.unsubuserdetail && this.unsubuserdetail.unsubscribe(),
            this.unsubcribeLogin && this.unsubcribeLogin.unsubscribe();
        }
        destroySubcriberD2() {
          clearInterval(this.unSubscribeData),
            this.unSubscribeFirebaseEvent &&
              this.unSubscribeFirebaseEvent.unsubscribe(),
            this.unsubscribecasino && this.unsubscribecasino.unsubscribe(),
            this.mySubscription && this.mySubscription.unsubscribe(),
            this.unsubcribeSearchData &&
              this.unsubcribeSearchData.unsubscribe(),
            this.object.unsubscribFirebaseEvent &&
              this.object.unsubscribFirebaseEvent.unsubscribe(),
            this.object.unsubscribGlobFirbase.length &&
              this.object.unsubscribGlobFirbase.forEach((t) => t.unsubscribe()),
            this.unsubuserdetail && this.unsubuserdetail.unsubscribe(),
            this.unsubcribeLogin && this.unsubcribeLogin.unsubscribe();
        }
        getNotificationMaster() {
          this.object.getLoginInstance().state.isMaster &&
            "D2" == this.object.themeChange.uxDesign &&
            this.object.unsubscribGlobFirbase.push(
              this.firebase
                .playerNotifiaction(this.object.getLoginInstance().state._id)
                .subscribe((t) => {
                  t &&
                    ((this.object.orignalnotification = Object.assign({}, t)),
                    (this.notificationData = t),
                    (this.object.newnotificationData = t),
                    this.eventnameNotification() &&
                      ((this.object.newnotificationData.eventSettlements =
                        this.object.newnotificationData.eventSettlements.filter(
                          (t) => {
                            if ("BANKING" == t.ntyp)
                              return !this.eventName.includes(
                                t.eventPnl.eventName
                              );
                          }
                        )),
                      (this.counterNotification =
                        this.object.newnotificationData.eventSettlements.filter(
                          (t) => !!t.notSeen
                        )),
                      this.counterNotification >
                        this.object.newcounterNotification && this.playAudio(),
                      (this.object.newcounterNotification =
                        this.counterNotification)));
                })
            );
        }
        eventnameNotification() {
          return (
            this.object.menuTabAccordingUserRoles.DEP_REQ ||
              this.eventName.push("DEPOSIT"),
            this.object.menuTabAccordingUserRoles.WTH_REQ ||
              this.eventName.push("WITHDRAW"),
            !0
          );
        }
        openNotificationMaster(t) {
          let n = this.object.orignalnotification;
          null != n &&
            n.notSeen > 0 &&
            (n.eventSettlements.forEach((t) => {
              t.notSeen = !1;
            }),
            (n.notSeen = 0),
            this.firebase.seenrNotifiaction(n));
        }
        openNotificationSection(t, n) {
          "BANKING" == n.ntyp
            ? this.gotoPayment(n)
            : "VERIFICATION" == n.ntyp && this.gotoPaymentDocument(n);
        }
        gotoPayment(t) {
          var n = {
            date: null,
            wallettype: null,
          };
          let l = new Date(1e3 * t.eventPnl.eventAdded.seconds)
            .toISOString()
            .slice(0, 10)
            .split("-");
          (n.date =
            l[2] +
            "/" +
            l[1] +
            "/" +
            l[0] +
            " 00:00 - " +
            l[2] +
            "/" +
            l[1] +
            "/" +
            l[0] +
            " 23:59"),
            (n.wallettype = t.eventPnl.eventName),
            this.object
              .getUtilInstance()
              .storeState("BankNotification", JSON.stringify(n)),
            setTimeout(() => {
              this.broadCast.broadcast(
                this.object.getConstants().BROADCASTKEY.NOTIFICATION,
                {
                  isclicked: !0,
                }
              );
            }, 100),
            this.router.navigate(["/admin/payment-gateway/transection"]);
        }
        gotoPaymentDocument(t) {
          var n = {
            date: null,
            docType: null,
            tab: null,
          };
          let l = new Date(1e3 * t.eventPnl.eventAdded.seconds)
            .toISOString()
            .slice(0, 10)
            .split("-");
          (n.date =
            l[2] +
            "/" +
            l[1] +
            "/" +
            l[0] +
            " 00:00 - " +
            l[2] +
            "/" +
            l[1] +
            "/" +
            l[0] +
            " 23:59"),
            (n.docType = t.eventPnl.eventName),
            (n.tab = "document"),
            this.object
              .getUtilInstance()
              .storeState("docNotification", JSON.stringify(n)),
            setTimeout(() => {
              this.broadCast.broadcast(
                this.object.getConstants().BROADCASTKEY.NOTIFICATION,
                {
                  isclicked: !0,
                }
              );
            }, 100),
            this.router.navigate(["/admin/payment-gateway/transection"]);
        }
        openNotificationModal(t, n) {
          if (((this.notificationPnL = t), "MESSAGE" == n.ntyp))
            return (
              (this.notificationPnL = t),
              this.object.getDOMInstance().showModal("show-txn-notification"),
              void this.broadCast.broadcast(
                this.object.getConstants().BROADCASTKEY.NOTIFICATIONDATA,
                t
              )
            );
          "BANKING" == n.ntyp
            ? this.gotobalanceOverview(n)
            : "VERIFICATION" == n.ntyp
            ? this.router.navigate(
                this.object.detectMobiledevies
                  ? ["/myprofile/balance-overview"]
                  : ["/profile/balance-overview"]
              )
            : "BONUS_EXPIRED" == n.ntyp
            ? (this.object.getDOMInstance().showModal("bonus-notification"),
              this.broadCast.broadcast(
                this.object.getConstants().BROADCASTKEY.NOTIFICATIONDATA,
                t
              ))
            : (this.object
                .getDOMInstance()
                .showModal(this.object.getDOMInstance().modal.notification),
              t.profitNLose > 0 && this.object.getDOMInstance().animation());
        }
        hidenotificationModel() {
          this.object.getDOMInstance().hideModal("show-txn-notification");
        }
        gotobalanceOverview(t) {
          var n = {
            date: null,
            wallettype: null,
          };
          let l = new Date(1e3 * t.eventPnl.eventAdded.seconds)
            .toISOString()
            .slice(0, 10)
            .split("-");
          (n.date =
            l[2] +
            "/" +
            l[1] +
            "/" +
            l[0] +
            " 00:00 - " +
            l[2] +
            "/" +
            l[1] +
            "/" +
            l[0] +
            " 23:59"),
            (n.wallettype = t.ntyp),
            this.object
              .getUtilInstance()
              .storeState("BankNotification", JSON.stringify(n)),
            setTimeout(() => {
              this.broadCast.broadcast(
                this.object.getConstants().BROADCASTKEY.NOTIFICATION,
                {
                  isclicked: !0,
                }
              );
            }, 100),
            this.router.navigate(
              this.object.detectMobiledevies
                ? ["/myprofile/bank-transfer"]
                : ["/profile/bank-transfer"]
            );
        }
        goToprofile(t) {
          "Set Home screen" != t.title
            ? this.router.navigate([t.link])
            : this.object
                .getDOMInstance()
                .showModal(this.object.getDOMInstance().modal.homescreen);
        }
        goToNotification() {
          this.router.navigate(["/profile/notification"]);
        }
        goHome() {
          this.router.navigate(["/"]), (this.object.activeWebLink = null);
        }
        getAll() {
          this.broadCast.broadcast(
            this.object.getConstants().BROADCASTKEY.GOTOHOME,
            {
              value: "all",
            }
          );
        }
        handleEventSearch(t) {
          t.target.value.length < 2
            ? (this.searchEvents = [])
            : ((this.searchEvents = []),
              this.searchEvent.forEach((n) => {
                n.eventName
                  .toUpperCase()
                  .includes(t.target.value.toUpperCase()) &&
                  this.searchEvents.push(n);
              }));
        }
        goToSearchEvent() {
          let t = this.searchEvent.find(
            (t) => t.eventName == this.searchValue || t.name == this.searchValue
          );
          var n;
          (this.searchValue = ""),
            t &&
              (this.object.isAdminLogin()
                ? this.broadCast.broadcast(
                    this.object.getConstants().BROADCASTKEY.SEARCHDATA,
                    {
                      search: t,
                    }
                  )
                : ("special-market" ==
                    this.object.getRouterInstance().url.split("/")[1] ||
                  this.object.getRouterInstance().url.split("/")[3] ==
                    this.object.getConstants().PNL.SPECIALMARKETPARAM
                    ? (this.object
                        .getRouterInstance()
                        .navigate([
                          "/sport/" + this.object.getUI_URL().user.eventDetail,
                          this.object.getConstants().PNL.SPECIALMARKETPARAM,
                          t.eventId,
                        ]),
                      (n = {
                        Search_web: "SPACIAL_MARKET",
                      }))
                    : (this.object
                        .getRouterInstance()
                        .navigate([
                          "/sport/" + this.object.getUI_URL().user.eventDetail,
                          t.eventId,
                        ]),
                      (n = {
                        Search_web: "SPORT",
                      })),
                  this.object.getSearchClick(n)),
              (this.searchEvents = []),
              (this.searchValue = ""),
              this.closeSearchBox());
        }
        getLocalStorage() {
          (this.searchEventName = []),
            (this.searchEvent = JSON.parse(
              this.object
                .getUtilInstance()
                .getStore(this.object.getConstants().STORAGE.searchEvent)
            )),
            setTimeout(() => {
              this.searchEvent &&
                (this.searchEvent.forEach((t) => {
                  "4" == t.eventTypeId &&
                    this.specialMarketEventName.push(t.eventName);
                }),
                this.searchEvent.forEach((t) => {
                  this.searchEventName.push(t.eventName);
                }));
            }, 2e3),
            setInterval(() => {
              (this.isToken = this.object
                .getUtilInstance()
                .getStore(this.object.getConstants().STORAGE.token)),
                this.isToken ||
                  ((this.object.getLoginInstance().state.isPlayer = !1),
                  (this.object.getLoginInstance().state.exposureExist = !1),
                  clearInterval(this.unSubscribeData));
            }, 2e3);
        }
        getBrodcasterData() {
          (this.unsubuserdetail = this.broadCast
            .on(this.object.getConstants().BROADCASTKEY.USERDETAILS)
            .subscribe((t) => {
              this.userProfileDetail = t.userAccountDetail;
            })),
            (this.mySubscription = this.broadCast
              .on(this.object.getConstants().BETLIST.UPDATEEXPOSURE)
              .subscribe((t) => {
                this.handleSelfPlayerAccountDetails(),
                  this.listData.map((t) => {
                    t.isPlayer = "Trashed Users" != t.title;
                  });
              })),
            (this.unsubcribeLogin = this.broadCast
              .on(this.object.getConstants().BROADCASTKEY.LOGIN)
              .subscribe((t) => {
                this.handleSearchEvent(),
                  (this.object.showWelcomBanner = !0),
                  this.getBanners(),
                  this.bonusDetail();
              }));
        }
        getRouteParams() {
          let t = this.object.getRouterInstance().url.split("/");
          this.object.SpclMarket =
            t[3] == this.object.getConstants().PNL.SPECIALMARKETPARAM;
        }
        checkTokenSeeeion() {
          this.object.getLoginInstance();
        }
        openNotification(t) {
          var n = t;
          null != n &&
            n.notSeen > 0 &&
            (n.eventSettlements.forEach((t) => {
              t.notSeen = !1;
            }),
            (n.notSeen = 0),
            this.firebase.seenrNotifiaction(n));
        }
        handleEventlistnerForSession() {
          this.object.getUtilInstance().getStore("visible") ||
            (this.object.getUtilInstance().storeState("visible", !0),
            this.handleSelfPlayerAccountDetailsfirstTime()),
            document.addEventListener(
              "visibilitychange",
              this.handleVisibleState,
              !0
            );
        }
        sessionMaintain() {
          var t = new Date() - this.privousTime,
            n = Math.floor((t % 864e5) / 36e5);
          (Math.round(((t % 864e5) % 36e5) / 6e4) > 20 || n > 0) &&
            this.handleSelfPlayerAccountDetailsfirstTime();
        }
        goTohome() {
          this.object
            .getRouterInstance()
            .navigateByUrl(this.object.getUI_URL().user.root),
            this.broadCast.broadcast(
              this.object.getConstants().ACTIVETABS.ACTIVE,
              {
                event: !0,
              }
            );
        }
        headerSearch() {
          (this.isSearchBoxOpend = !this.isSearchBoxOpend),
            (this.searchValue = ""),
            this.searchEvent ||
              (this.handleSearchEvent(),
              setTimeout(() => {
                this.searchEvent = JSON.parse(
                  this.object
                    .getUtilInstance()
                    .getStore(this.object.getConstants().STORAGE.searchEvent)
                );
              }, 500)),
            setTimeout(() => {
              this.completer.focus();
            }, 100);
        }
        closeSearchBox() {
          this.isSearchBoxOpend = !1;
        }
        toggleMenuMobile() {
          (this.object._mobileToggelMenu = !this.object._mobileToggelMenu),
            this.object._mobileToggelMenu
              ? document
                  .getElementsByClassName("mobile")[0]
                  .classList.add("mobscro")
              : document
                  .getElementsByClassName("mobile")[0]
                  .classList.remove("mobscro");
        }
        goToNotificationMobile() {
          this.object.themeUXChange.weblandingDashboard.sport &&
            this.router.navigate(["/myprofile/notification"]);
        }
        navigateToRoute(t) {
          let n = this.object.getUtilInstance().getStore("liveCasinoType");
          if ("dashboard" == this.object.getUtilInstance().getStore("gameInit"))
            return (
              this.router.navigate(["/"]),
              void this.object.getUtilInstance().removeState("gameInit")
            );
          let l = this.object.getRouterInstance().url.split("/");
          "profile" != l[2] &&
            "betslip" != l[2] &&
            "pinned" != l[2] &&
            ("sport" == l[1] && this.router.navigate(["/sport"]),
            (("casino" == l[1] && "casino-event" == l[2]) ||
              ("casino" == l[1] &&
                ("casino-event-iframe" == l[2] ||
                  "casino-event-fastgame" == l[2]))) &&
              this.router.navigate(["/casino"]),
            "myprofile" == l[1] && this.router.navigate(["/sport/profile"]),
            "wrcs" == l[2] &&
              this.router.navigate(
                "SLOTS_AND_BINGO" == n
                  ? ["/casino/slot-games"]
                  : "SUPER_NOWA" == n
                  ? ["/casino"]
                  : ["/casino/live-casino"]
              ),
            "virtual-sports" == l[2] &&
              this.router.navigate(["/casino/virtual-sports"]),
            this.object.specialMarket &&
              this.router.navigate(["/special-market"]),
            ("player-contest" != l[2] && "player-battle" != l[2]) ||
              this.router.navigate(["/fantasy-games"]),
            l[2].indexOf("sportsbook") > -1 && this.router.navigate(["/"]));
        }
        goToSearchEventMobile() {
          let t = this.searchEvent.find(
            (t) => t.eventName == this.searchValue || t.name == this.searchValue
          );
          var n;
          (this.searchValue = ""),
            t &&
              (this.object.isAdminLogin()
                ? this.broadCast.broadcast(
                    this.object.getConstants().BROADCASTKEY.SEARCHDATA,
                    {
                      search: t,
                    }
                  )
                : ("special-market" ==
                    this.object.getRouterInstance().url.split("/")[1] ||
                  this.object.getRouterInstance().url.split("/")[3] ==
                    this.object.getConstants().PNL.SPECIALMARKETPARAM
                    ? (this.object
                        .getRouterInstance()
                        .navigate([
                          "/sport/" + this.object.getUI_URL().user.eventDetail,
                          this.object.getConstants().PNL.SPECIALMARKETPARAM,
                          t.eventId,
                        ]),
                      (n = {
                        Search_mobile: "SPORT",
                      }))
                    : (this.object
                        .getRouterInstance()
                        .navigate([
                          "/sport/" + this.object.getUI_URL().user.eventDetail,
                          t.eventId,
                        ]),
                      (n = {
                        Search_mobile: "SPORT",
                      })),
                  this.object.getSearchClick(n)),
              (this.searchEvents = []),
              (this.searchValue = ""));
        }
        firebaseEventCallMobile() {
          this.unSubscribeFirebaseEvent = this.broadCast
            .on(this.object.getConstants().BROADCASTKEY.FIREBASEEVENT)
            .subscribe((t) => {
              let n = t.booleanKeys[0];
              n &&
                ((n.eventAdded || n.marketSettled || n.eventVoidReopn) &&
                  setTimeout(() => {
                    this.searchEvent = JSON.parse(
                      this.object
                        .getUtilInstance()
                        .getStore(
                          this.object.getConstants().STORAGE.searchEvent
                        )
                    );
                  }, 2500),
                (n.marketSettled ||
                  n.fancyMarketSettled ||
                  n.marketReopen ||
                  n.eventVoidReopn) &&
                  this.handleSelfPlayerAccountDetails());
            });
        }
        getLocalStorageDataMobile() {
          (this.searchEventName = []),
            (this.searchEvent = JSON.parse(
              this.object
                .getUtilInstance()
                .getStore(this.object.getConstants().STORAGE.searchEvent)
            )),
            setTimeout(() => {
              this.searchEvent &&
                (this.searchEvent.forEach((t) => {
                  "4" == t.eventTypeId &&
                    this.specialMarketEventName.push(t.eventName);
                }),
                this.searchEvent.forEach((t) => {
                  this.searchEventName.push(t.eventName);
                }));
            }, 2e3),
            setInterval(() => {
              (this.isToken = this.object
                .getUtilInstance()
                .getStore(this.object.getConstants().STORAGE.token)),
                this.isToken ||
                  ((this.object.getLoginInstance().state.exposureExist = !1),
                  clearInterval(this.unSubscribeData));
            }, 2e3);
        }
        callBrodcasterMobile() {
          (this.unSubscribeGetplayerinfo = this.broadCast
            .on(this.object.getConstants().BROADCASTKEY.GETPLAYERINFO)
            .subscribe((t) => {
              this.handleSelfPlayerAccountDetails();
            })),
            (this.unsubuserdetail = this.broadCast
              .on(this.object.getConstants().BROADCASTKEY.USERDETAILS)
              .subscribe((t) => {
                this.userProfileDetail = t.userAccountDetail;
              })),
            (this.unsubcribeLogin = this.broadCast
              .on(this.object.getConstants().BROADCASTKEY.LOGIN)
              .subscribe((t) => {
                this.object.unsubscribGlobFirbase.length &&
                  this.object.unsubscribGlobFirbase.forEach((t) =>
                    t.unsubscribe()
                  ),
                  this.handleSelfPlayerAccountDetails(),
                  this.getNotification(),
                  this.onChangeUserDetails(),
                  this.openAcceptRulesModal(),
                  this.object
                    .getUtilInstance()
                    .storeState(
                      this.object.getConstants().STORAGE.plateform,
                      JSON.stringify(this.storeObj)
                    ),
                  (this.object.showWelcomBanner = !0),
                  this.getBanners();
              }));
        }
        getRouteParamsMobile() {
          let t = this.object.getRouterInstance().url.split("/");
          this.object.SpclMarket =
            t[3] == this.object.getConstants().PNL.SPECIALMARKETPARAM;
        }
        openAcceptRulesModal() {
          setTimeout(() => {
            0 == this.object.getLoginInstance().state.tnc &&
              this.object.getDOMInstance().showModal("accept-continue");
          }, 500);
        }
        onChangeUserDetails() {
          setTimeout(() => {
            this.userProfileDetail &&
              ((this.firebaseEventload = !1),
              this.object
                .getUtilInstance()
                .getStore(this.object.getConstants().STORAGE.token) &&
                this.object.unsubscribGlobFirbase.push(
                  this.firebase
                    .getCasinoEventTrigger(this.userProfileDetail.userName)
                    .subscribe((t) => {
                      null != t &&
                        null !=
                          this.object
                            .getUtilInstance()
                            .getStore(
                              this.object.getConstants().STORAGE.token
                            ) &&
                        (setTimeout(() => {
                          this.firebaseEventload = !0;
                        }, 1e3),
                        this.firebaseEventload &&
                          this.handleSelfPlayerAccountDetails());
                    })
                ));
          }, 4e3);
        }
        openNotificationMobile(t) {
          var n = t;
          null != n &&
            n.notSeen > 0 &&
            (n.eventSettlements.forEach((t) => {
              t.notSeen = !1;
            }),
            (n.notSeen = 0),
            this.firebase.seenrNotifiaction(n));
        }
        recallcasinoBal() {
          (this.casinoBalLoader = !0),
            this.service
              .get(
                this.object.getURLInstance().recallcasinoBal,
                this.object.getURLInstance().EMPTY_PARAM,
                this.headers()
              )
              .toPromise()
              .then((t) => {
                this.handleSelfPlayerAccountDetails();
              })
              .catch((t) => {
                (this.casinoBalLoader = !1), this.setError(t);
              });
        }
        redeemBonus(t) {
          t
            ? ((this.bonusLoader = !0),
              this.service
                .get(
                  this.object.getURLInstance().redeemBonus,
                  this.object.getURLInstance().EMPTY_PARAM,
                  this.headers()
                )
                .toPromise()
                .then((t) => {
                  (this.bonusLoader = !1),
                    this.object
                      .getDOMInstance()
                      .success("Bonus Redeem Successfully"),
                    this.bonusDetail(),
                    this.handleSelfPlayerAccountDetails();
                })
                .catch((t) => {
                  (this.bonusLoader = !1), this.setError(t);
                }))
            : this.object.getDOMInstance().error("Please Complete Rolling");
        }
        userSignUp() {
          this.object
            .getDOMInstance()
            .showModal(this.object.getDOMInstance().modal.signUp);
        }
        nevigateToEvent(t) {
          let n = t.eventName.includes(" v ");
          !this.object.isAdminLogin() &&
            n &&
            (this.object
              .getRouterInstance()
              .navigate([
                "/sport/" +
                  this.object.getUI_URL().user.eventDetail +
                  "/" +
                  t.eventId,
              ]),
            this.object.getDOMInstance().hideModal("exposure-details"));
        }
        openTerms() {
          this.object
            .getDOMInstance()
            .showModal(this.object.getDOMInstance().modal.bonusTerms);
        }
        openAnnouncmetnModel() {
          setTimeout(() => {
            if (!this.object.welcomebannerData) return;
            let t,
              n,
              l,
              e = this.object.welcomebannerData.imgUrl.split("/")[7];
            var i = JSON.parse(localStorage.getItem("welcomeBanner"));
            if (
              (i && ((t = i.counter), (n = i.imgName), (l = i.userId)),
              null == i || l != this.userProfileDetail.userId)
            ) {
              let t = this.object.welcomebannerData.imgUrl.split("/")[7];
              localStorage.setItem(
                "welcomeBanner",
                JSON.stringify({
                  counter: 1,
                  imgName: t,
                  userId: this.userProfileDetail.userId,
                })
              ),
                this.object.getDOMInstance().showModal("bonusEnabletheme");
            } else
              t < 10 && e == n
                ? ((i.counter = t + 1),
                  localStorage.setItem("welcomeBanner", JSON.stringify(i)),
                  this.object.getDOMInstance().showModal("bonusEnabletheme"))
                : e != n &&
                  ((i.counter = 1),
                  (i.imgName = e),
                  localStorage.setItem("welcomeBanner", JSON.stringify(i)),
                  this.object.getDOMInstance().showModal("bonusEnabletheme"));
          }, 2e3);
        }
        getBanners() {
          let t, n;
          if (
            ((this.loading = !0),
            "20210414" == this.object.themeChange.whitelableId)
          )
            t = this.onlySportwhitelableGameType;
          else if (this.object.themeChange.onlyCasinoWhitelable)
            t = this.onlyCasinowhitelableGameType;
          else if (
            "20220816" == this.object.themeChange.whitelableId ||
            "20221011" == this.object.themeChange.whitelableId ||
            "20230120" == this.object.themeChange.whitelableId ||
            "20230688" == this.object.themeChange.whitelableId ||
            "20230702" == this.object.themeChange.whitelableId ||
            "20230704" == this.object.themeChange.whitelableId ||
            "20230709" == this.object.themeChange.whitelableId ||
            "20230710" == this.object.themeChange.whitelableId ||
            "20230713" == this.object.themeChange.whitelableId
          )
            t = this.onlySportAceCasinowhitelableGameType;
          else if (this.object.whitelableWithgameType()) {
            let l = (t = [...this.object.gameTypeForWhiteLable]).indexOf(
              this.object.getConstants().PNL.POKER_CASINO
            );
            -1 != l &&
              ((n = !0), (t[l] = this.object.getConstants().PNL.INDIAN_CASINO));
          } else t = this.bannerwhitelableGameType;
          (this.design = this.object.themeChange.uxDesign),
            this.service
              .get(
                this.object.getURLInstance().getBannerforPlayer,
                "dsgn=" + this.design + "&gt=" + t,
                this.headers()
              )
              .toPromise()
              .then((t) => {
                (this.loading = !1),
                  this.object.whitelableWITHOUTgameType() &&
                    (t.data = t.data.filter(
                      (t) =>
                        !this.object.gameTypeForWhiteLable.includes(t.gameType)
                    )),
                  this.object.themeChange.playerContest ||
                    (t.data = t.data.filter((t, n) => "CONTEST" != t.type)),
                  (this.object.bannersData = t.data);
                let n = [];
                this.object.bannersData &&
                  this.object.bannersData.forEach((t) => {
                    t.welcomeBanner
                      ? (this.object.welcomebannerData = t)
                      : n.push(t);
                  }),
                  this.object.showWelcomBanner &&
                    (this.openAnnouncmetnModel(),
                    (this.object.showWelcomBanner = !1));
              })
              .catch((t) => {
                (this.loading = !1), this.setError(t);
              });
        }
        maintainLocalStorage() {
          this.object
            .getUtilInstance()
            .storeState(
              this.object.getConstants().STORAGE
                .localStorageColumnMaintainvirsion,
              this.object.systemStorageVirsion
            );
        }
        ondestroyUnsubMobile() {
          clearInterval(this.unSubscribeData),
            this.object.unsubscribFirebaseEvent &&
              this.object.unsubscribFirebaseEvent.unsubscribe(),
            this.unSubscribeFirebaseEvent &&
              this.unSubscribeFirebaseEvent.unsubscribe(),
            this.unSubscribeGetplayerinfo &&
              this.unSubscribeGetplayerinfo.unsubscribe(),
            this.unsubscribecasino && this.unsubscribecasino.unsubscribe(),
            this.object.unsubscribGlobFirbase.length &&
              this.object.unsubscribGlobFirbase.forEach((t) => t.unsubscribe()),
            this.unsubuserdetail && this.unsubuserdetail.unsubscribe();
        }
        handleLoginWithDemo() {
          var t, n;
          this.object.ProdEnable
            ? ((t = "demo3"), (n = "Test@123"))
            : ((t = "demo3"), (n = "@Player1")),
            (this.loginObj = {
              usernameOrEmail: t,
              password: n,
            }),
            this.handleLogin(),
            (this.object.demoUser = !0);
        }
        handleLogin() {
          (this.loading = !0),
            this.service
              .post(
                this.object.getURLInstance().login,
                this.loginObj,
                this.headers({
                  "x-sourceType": "player",
                })
              )
              .toPromise()
              .then(
                (t) => {
                  this.object.setUserId(this.loginObj.usernameOrEmail),
                    this.setSuccess(t),
                    (this.loading = !1),
                    this.sethomepage(t.data.homescreen),
                    (this.resUserName = ""),
                    this.setToken(t.message).then(() => {
                      this.parseJwt(),
                        this.getuserProfilesetting(t),
                        this.handleLoginForm(),
                        this.broadCast.broadcast(
                          this.object.getConstants().BROADCASTKEY.LOGIN,
                          {
                            value: !0,
                          }
                        );
                    }),
                    this.recallcasinoBal(),
                    setTimeout(() => {
                      this.object.unsubscribFirebaseEvent &&
                        this.object.unsubscribFirebaseEvent.unsubscribe(),
                        this.object.onChangeEvents(),
                        this.object
                          .getUtilInstance()
                          .removeState("userAuthorized");
                    }, 800);
                },
                (t) => {
                  (this.loading = !1), this.setError(t);
                }
              );
        }
        handleLoginForm() {
          this.object.getLoginInstance().getIsLogin()
            ? (this.object
                .getUtilInstance()
                .inspect()
                .log("Is Logged In ?", "Logged In :)"),
              this.object
                .getDOMInstance()
                .hideModal(this.object.getDOMInstance().modal.login),
              this.object
                .getDOMInstance()
                .hideModal(
                  this.object.getDOMInstance().modal.mobilePlayerLogin
                ),
              this.object.getRouterInstance().navigate([this.homescreen]))
            : (this.object
                .getUtilInstance()
                .inspect()
                .log("Is Logged In ?", "Not Logged In :)"),
              this.object
                .getDOMInstance()
                .showModal(this.object.getDOMInstance().modal.rules),
              this.object.getLoginInstance().setIsLogin(!1));
        }
        sethomepage(t) {
          (this.object.homescreen = t),
            this.object.getUtilInstance().storeState("homepage", t),
            "INPLAY" == t
              ? ((this.homescreen = "/sport"),
                setTimeout(() => {
                  this.broadCast.broadcast(
                    this.object.getConstants().BETLIST.UPDATEEXPOSURE
                  );
                }, 200))
              : (this.homescreen = "/");
        }
        getuserProfilesetting(t) {
          "0" != t.data.stakes[0] &&
            (this.object.getLoginInstance().state.stakes.frontend = []),
            (this.object.getLoginInstance().state.appSkin = t.data.theme),
            (this.object.getLoginInstance().state.acceptAnyOdds =
              t.data.acceptAnyOdds),
            (this.object.getLoginInstance().state.pinItems =
              t.data.pinItems.filter(
                (n) => (
                  (this.object.getLoginInstance().state.acceptAnyOdd =
                    t.data.mktAno),
                  !this.object.getUtilInstance().isNullOrUndefined(n)
                )
              )),
            this.object
              .getUtilInstance()
              .storeState(
                this.object.constant.STORAGE.pinned,
                this.object
                  .getUtilInstance()
                  .stringify(this.object.getLoginInstance().state.pinItems)
              ),
            this.object
              .getUtilInstance()
              .storeState(
                this.object.constant.STORAGE.theme,
                this.object.getLoginInstance().state.appSkin
              ),
            this.object
              .getUtilInstance()
              .storeState(
                this.object.constant.STORAGE.acceptAnyOdds,
                this.object.getLoginInstance().state.acceptAnyOdds
              ),
            this.object
              .getUtilInstance()
              .storeState(
                this.object.constant.STORAGE.mktAccptAnyOdd,
                JSON.stringify(
                  this.object.getLoginInstance().state.acceptAnyOdd
                )
              ),
            (this.object.getLoginInstance().state.stakes.backend =
              t.data.stakes);
          let n = t.data.stakes;
          if ("0" != n[0])
            n.forEach((t, n) => {
              if (!this.object.getUtilInstance().isNullOrUndefined(t)) {
                let n = "+clear" == t ? 0 : t.replace("+", ""),
                  l = {
                    price: parseFloat(String(n)),
                    val: t,
                  };
                this.object.getLoginInstance().state.stakes.frontend.push(l);
              }
            });
          else {
            (this.object.getLoginInstance().state.stakes.frontend = []),
              n.forEach((t, n) => {
                if (!this.object.getUtilInstance().isNullOrUndefined(t)) {
                  if ("0" == t) return;
                  let n = "+clear" == t ? 0 : t.replace("+", ""),
                    l = {
                      price: parseFloat(String(n)),
                      val: "+" + t,
                    };
                  this.object.getLoginInstance().state.stakes.frontend.push(l);
                }
              });
            let t = {
              price: 0,
              val: "clear",
            };
            this.object.getLoginInstance().state.stakes.frontend.push(t),
              this.object
                .getUtilInstance()
                .storeState(
                  "stake",
                  JSON.stringify(
                    this.object.getLoginInstance().state.stakes.frontend
                  )
                );
          }
          this.object
            .getUtilInstance()
            .storeState(
              "stake",
              JSON.stringify(
                this.object.getLoginInstance().state.stakes.frontend
              )
            );
        }
        updateLoyaltyTabPriviledge(t) {
          t[this.object.findIndex(t, "title", "Loyalty Points")].isPlayer =
            this.object.themeChange.bankingView &&
            this.object.getUtilInstance().getStore("loyaltyPriviledge");
        }
        bonusDetail() {
          this.object.getLoginInstance().getIsLogin() &&
            "D1" != this.object.themeChange.uxDesign &&
            this.object.getLoginInstance().state.isPlayer &&
            this.service
              .adminget(
                this.object.getURLInstance().getPlayerBonusDetails,
                this.object.getURLInstance().EMPTY_PARAM,
                this.headers()
              )
              .toPromise()
              .then((t) => {
                t &&
                  (this.object.playerBonusDetails = t.data.playerBonusDetails);
              })
              .catch((t) => {
                this.setError(t);
              });
        }
      }
    },
    eAXX: function (t, n, l) {
      "use strict";
      l.d(n, "a", function () {
        return e;
      });
      class e {
        onRightClick(t) {
          t.preventDefault();
        }
        constructor() {}
      }
    },
    hg8p: function (t, n, l) {
      "use strict";
      l.d(n, "a", function () {
        return e;
      }),
        l("kyFz");
      class e {
        constructor(t, n, l) {
          (this.router = t),
            (this.object = n),
            (this.broadCast = l),
            (this.imgUrl = "");
        }
        ngOnInit() {
          this.unsubcribeNotificationClick = this.broadCast
            .on(this.object.getConstants().BROADCASTKEY.NOTIFICATIONDATA)
            .subscribe((t) => {
              this.txnNotification = t;
            });
        }
        viewImg(t) {
          (this.imgUrl = t),
            setTimeout(() => {
              this.object.getDOMInstance().ZoomMassge();
            }, 100);
        }
        NavigateToTxn(t) {
          this.object.getDOMInstance().hideModal("show-txn-notification");
          var n = {
            date: null,
            wallettype: "null",
          };
          let l = new Date(1e3 * t.eventAdded.seconds)
            .toISOString()
            .slice(0, 10)
            .split("-");
          (n.date =
            l[2] +
            "/" +
            l[1] +
            "/" +
            l[0] +
            " 00:00 - " +
            l[2] +
            "/" +
            l[1] +
            "/" +
            l[0] +
            " 23:59"),
            (n.wallettype = "BANKING"),
            this.object
              .getUtilInstance()
              .storeState("BankNotification", JSON.stringify(n)),
            setTimeout(() => {
              this.broadCast.broadcast(
                this.object.getConstants().BROADCASTKEY.NOTIFICATION,
                {
                  isclicked: !0,
                }
              );
            }, 100),
            this.router.navigate(["/profile/bank-transfer"]);
        }
        NavigateToRolling(t) {
          this.object.getDOMInstance().hideModal("bonus-notification");
          var n = {
            date: null,
            wallettype: "null",
          };
          let l = new Date(1e3 * t.eventAdded.seconds)
            .toISOString()
            .slice(0, 10)
            .split("-");
          (n.date =
            l[2] +
            "/" +
            l[1] +
            "/" +
            l[0] +
            " 00:00 - " +
            l[2] +
            "/" +
            l[1] +
            "/" +
            l[0] +
            " 23:59"),
            (n.wallettype = "ROLLING"),
            this.object
              .getUtilInstance()
              .storeState("RollingNotification", JSON.stringify(n)),
            setTimeout(() => {
              this.broadCast.broadcast(
                this.object.getConstants().BROADCASTKEY.NOTIFICATION,
                {
                  isclicked: !0,
                }
              );
            }, 100),
            this.router.navigate(["/profile/rolling"]);
        }
        ngOnDestroy() {}
      }
    },
    iwoa: function (t, n, l) {
      "use strict";
      l.d(n, "a", function () {
        return e;
      });
      var e = [
        ".accordian-menu.accordian-menu-bg[_ngcontent-%COMP%]{height:calc(100vh - 65px)!important;overflow-y:scroll;white-space:nowrap;overflow-x:hidden}.accordian-menu.accordian-menu-bg[_ngcontent-%COMP%]:hover::-webkit-scrollbar{width:4px}.dashboard[_ngcontent-%COMP%]   .accordian-menu[_ngcontent-%COMP%]   .in-play[_ngcontent-%COMP%]{position:relative;padding:15px}.accordian-menu[_ngcontent-%COMP%]   .pinned[_ngcontent-%COMP%]{position:relative;padding:15px 15px 15px 12px;border-left:8px solid transparent}.accordian-menu[_ngcontent-%COMP%]   .pinned[_ngcontent-%COMP%]   .badge-pinned[_ngcontent-%COMP%]{position:absolute;top:5px;left:190px}.accordian-menu[_ngcontent-%COMP%]   .pinned[_ngcontent-%COMP%]   .badge-pinned[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{position:relative;top:inherit}.accordian-menu[_ngcontent-%COMP%]   .pinned[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:12px;display:inline-block;margin-right:8px;height:24px;width:24px}.accordian-menu[_ngcontent-%COMP%]   .pinned[_ngcontent-%COMP%]:hover{opacity:1}.dashboard[_ngcontent-%COMP%]   .accordian-menu[_ngcontent-%COMP%]   .market-head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:16px;font-weight:300;text-transform:uppercase;margin:0;padding:16px}.dashboard[_ngcontent-%COMP%]   .accordian-menu[_ngcontent-%COMP%]   .game-option[_ngcontent-%COMP%]   .games[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:block;font-size:13px;position:relative;font-weight:500}.dashboard[_ngcontent-%COMP%]   .accordian-menu[_ngcontent-%COMP%]   .game-option[_ngcontent-%COMP%]   .games[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:transparent;padding:0;background:0 0;margin:4px}.dashboard[_ngcontent-%COMP%]   .accordian-menu[_ngcontent-%COMP%]   .game-option[_ngcontent-%COMP%]   .games[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:8px;top:-1px;position:relative;width:16px;height:16px}.dashboard[_ngcontent-%COMP%]   .accordian-menu[_ngcontent-%COMP%]   .game-option[_ngcontent-%COMP%]   .games[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .badge-play[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{position:relative;top:-1px;left:42%}.dashboard[_ngcontent-%COMP%]   .accordian-menu[_ngcontent-%COMP%]   .game-option[_ngcontent-%COMP%]   .games[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .badge-play-football[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{position:relative;top:-1px;left:39%;height:24px;width:41px}.dashboard[_ngcontent-%COMP%]   .accordian-menu[_ngcontent-%COMP%]   .game-option[_ngcontent-%COMP%]   .games[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .badge-play-tennis[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{position:relative;top:-1px;left:43%;height:24px;width:41px}.dashboard[_ngcontent-%COMP%]   .accordian-menu[_ngcontent-%COMP%]   .game-option[_ngcontent-%COMP%]   .games[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{position:absolute;right:8px;top:11px}.dashboard[_ngcontent-%COMP%]   .accordian-menu[_ngcontent-%COMP%]   .game-option[_ngcontent-%COMP%]   .games[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:0}.dashboard[_ngcontent-%COMP%]   .accordian-menu[_ngcontent-%COMP%]   .game-option[_ngcontent-%COMP%]   .games[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i.active[_ngcontent-%COMP%]{transform:rotate(90deg)}.dashboard[_ngcontent-%COMP%]   .accordian-menu[_ngcontent-%COMP%]   .accordian-toggle[_ngcontent-%COMP%]{position:absolute;width:70%;display:block}.awwornv[_ngcontent-%COMP%]{float:right}.mainheadingg[_ngcontent-%COMP%]{min-height:160px;text-transform:uppercase;font-size:16px;letter-spacing:.6px}.mainheadingg[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-size:14px;padding:16px 16px 14px;background:linear-gradient(16deg,#df9c0d 0,#ffde00 100%);font-weight:700;color:#000}.mainheadingg[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:400;font-size:14px}.mainheadingg[_ngcontent-%COMP%]   .menubarss[_ngcontent-%COMP%]{padding:0}.mainheadingg[_ngcontent-%COMP%]   .menubarss[_ngcontent-%COMP%]   .ullisting[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.mainheadingg[_ngcontent-%COMP%]   .menubarss[_ngcontent-%COMP%]   .ullisting[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center}.mainheadingg[_ngcontent-%COMP%]   .menubarss[_ngcontent-%COMP%]   .ullisting[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:100%}.mainheadingg[_ngcontent-%COMP%]   .matchetit[_ngcontent-%COMP%]{margin-top:80px}.mainheadingg[_ngcontent-%COMP%]   .pinbutton[_ngcontent-%COMP%]{background:var(--haverCR)!important;color:#fff;margin:10px 10px 20px;border-radius:4px;padding:16px 6px 16px 16px;cursor:pointer}",
      ];
    },
    m8nl: function (t, n, l) {
      "use strict";
      l.d(n, "a", function () {
        return e;
      });
      class e {
        transform(t, n) {
          if (t) {
            const n = Math.floor((+new Date() - +new Date(t)) / 1e3);
            if (n < 29) return "Just now";
            const l = {
              year: 31536e3,
              month: 2592e3,
              week: 604800,
              day: 86400,
              hour: 3600,
              minute: 60,
              second: 1,
            };
            let e;
            for (const t in l)
              if ((e = Math.floor(n / l[t])) > 0)
                return 1 === e ? e + " " + t + " ago" : e + " " + t + "s ago";
          }
          return t;
        }
      }
    },
    niSi: function (t, n, l) {
      "use strict";
      l.d(n, "a", function () {
        return e;
      });
      class e {}
    },
    njhH: function (t, n, l) {
      "use strict";
      l.d(n, "a", function () {
        return e;
      });
      class e {
        constructor() {}
        blockPaste(t) {
          t.preventDefault();
        }
        blockCopy(t) {
          t.preventDefault();
        }
        blockCut(t) {
          t.preventDefault();
        }
      }
    },
    oDs8: function (t, n, l) {
      "use strict";
      l.d(n, "a", function () {
        return e;
      });
      class e {}
    },
    q9Gx: function (t, n, l) {
      "use strict";
      var e = l("8Y7J"),
        i = l("QZd1"),
        s = l("SVse");
      l("MK8/"),
        l.d(n, "a", function () {
          return o;
        }),
        l.d(n, "b", function () {
          return a;
        });
      var o = e.ob({
        encapsulation: 0,
        styles: [[""]],
        data: {},
      });
      function a(t) {
        return e.Mb(
          0,
          [
            e.Eb(0, i.a, []),
            (t()(),
            e.qb(
              1,
              0,
              null,
              null,
              3,
              "img",
              [],
              [
                [8, "id", 0],
                [8, "src", 4],
              ],
              null,
              null,
              null,
              null
            )),
            e.Hb(512, null, s.A, s.B, [e.q, e.r, e.k, e.B]),
            e.pb(
              3,
              278528,
              null,
              0,
              s.l,
              [s.A],
              {
                ngClass: [0, "ngClass"],
              },
              null
            ),
            e.Gb(4, 3),
          ],
          function (t, n) {
            t(n, 3, 0, n.component.imgClass);
          },
          function (t, n) {
            var l = n.component,
              i = l.imgId,
              s = e.Lb(
                n,
                1,
                1,
                t(
                  n,
                  4,
                  0,
                  e.Cb(n, 0),
                  l.img,
                  "http://s3.amazonaws.com/uifaces/faces/twitter/sillyleo/128.jpg",
                  !0
                )
              );
            t(n, 1, 0, i, s);
          }
        );
      }
    },
    w9WL: function (t, n, l) {
      "use strict";
      l.d(n, "a", function () {
        return h;
      }),
        l.d(n, "b", function () {
          return A;
        }),
        l.d(n, "c", function () {
          return ft;
        }),
        l.d(n, "d", function () {
          return nt;
        }),
        l.d(n, "e", function () {
          return pt;
        }),
        l.d(n, "f", function () {
          return k;
        }),
        l.d(n, "g", function () {
          return R;
        }),
        l.d(n, "h", function () {
          return ht;
        }),
        l.d(n, "i", function () {
          return g;
        }),
        l.d(n, "j", function () {
          return ct;
        }),
        l.d(n, "k", function () {
          return lt;
        }),
        l.d(n, "l", function () {
          return gt;
        }),
        l.d(n, "m", function () {
          return mt;
        }),
        l.d(n, "n", function () {
          return vt;
        }),
        l.d(n, "o", function () {
          return xt;
        }),
        l.d(n, "p", function () {
          return rt;
        }),
        l.d(n, "q", function () {
          return q;
        }),
        l.d(n, "r", function () {
          return T;
        }),
        l.d(n, "s", function () {
          return N;
        }),
        l.d(n, "t", function () {
          return c;
        }),
        l.d(n, "u", function () {
          return d;
        }),
        l.d(n, "v", function () {
          return f;
        }),
        l.d(n, "w", function () {
          return yt;
        }),
        l.d(n, "x", function () {
          return m;
        }),
        l.d(n, "y", function () {
          return bt;
        }),
        l.d(n, "z", function () {
          return p;
        }),
        l.d(n, "A", function () {
          return r;
        }),
        l.d(n, "B", function () {
          return C;
        }),
        l.d(n, "C", function () {
          return b;
        });
      var e = l("8Y7J"),
        i = l("XNiG"),
        s = l("xgIS"),
        o = l("2Vo4"),
        a = l("1G5W"),
        u = l("mrSG");
      class r {
        constructor(t) {
          (this.document = t), (this.width = this.getWidth());
        }
        getWidth() {
          const t = this.document.createElement("div");
          (t.style.visibility = "hidden"),
            (t.style.width = "100px"),
            (t.style.msOverflowStyle = "scrollbar"),
            this.document.body.appendChild(t);
          const n = t.offsetWidth;
          t.style.overflow = "scroll";
          const l = this.document.createElement("div");
          (l.style.width = "100%"), t.appendChild(l);
          const e = l.offsetWidth;
          return t.parentNode.removeChild(t), n - e;
        }
      }
      class c {
        getDimensions(t) {
          return t.getBoundingClientRect();
        }
      }
      class h {
        constructor() {
          this.columnInputChanges = new i.a();
        }
        get columnInputChanges$() {
          return this.columnInputChanges.asObservable();
        }
        onInputChange() {
          this.columnInputChanges.next();
        }
      }
      class g {
        constructor(t) {
          this.template = t;
        }
      }
      class b {
        constructor(t, n) {
          (this.element = t),
            (this.zone = n),
            (this.isVisible = !1),
            (this.visible = new e.m());
        }
        ngOnInit() {
          this.runCheck();
        }
        ngOnDestroy() {
          clearTimeout(this.timeout);
        }
        onVisibilityChange() {
          this.zone.run(() => {
            (this.isVisible = !0), this.visible.emit(!0);
          });
        }
        runCheck() {
          const t = () => {
            const { offsetHeight: n, offsetWidth: l } =
              this.element.nativeElement;
            n && l
              ? (clearTimeout(this.timeout), this.onVisibilityChange())
              : (clearTimeout(this.timeout),
                this.zone.runOutsideAngular(() => {
                  this.timeout = setTimeout(() => t(), 50);
                }));
          };
          this.timeout = setTimeout(() => t());
        }
      }
      class d {
        constructor(t) {
          (this.dragX = !0),
            (this.dragY = !0),
            (this.dragStart = new e.m()),
            (this.dragging = new e.m()),
            (this.dragEnd = new e.m()),
            (this.isDragging = !1),
            (this.element = t.nativeElement);
        }
        ngOnChanges(t) {
          t.dragEventTarget &&
            t.dragEventTarget.currentValue &&
            this.dragModel.dragging &&
            this.onMousedown(t.dragEventTarget.currentValue);
        }
        ngOnDestroy() {
          this._destroySubscription();
        }
        onMouseup(t) {
          this.isDragging &&
            ((this.isDragging = !1),
            this.element.classList.remove("dragging"),
            this.subscription &&
              (this._destroySubscription(),
              this.dragEnd.emit({
                event: t,
                element: this.element,
                model: this.dragModel,
              })));
        }
        onMousedown(t) {
          if (
            t.target.classList.contains("draggable") &&
            (this.dragX || this.dragY)
          ) {
            t.preventDefault(), (this.isDragging = !0);
            const n = {
                x: t.clientX,
                y: t.clientY,
              },
              l = Object(s.a)(document, "mouseup");
            this.subscription = l.subscribe((t) => this.onMouseup(t));
            const e = Object(s.a)(document, "mousemove")
              .pipe(Object(a.a)(l))
              .subscribe((t) => this.move(t, n));
            this.subscription.add(e),
              this.dragStart.emit({
                event: t,
                element: this.element,
                model: this.dragModel,
              });
          }
        }
        move(t, n) {
          if (!this.isDragging) return;
          const l = t.clientY - n.y;
          this.dragX && (this.element.style.left = `${t.clientX - n.x}px`),
            this.dragY && (this.element.style.top = `${l}px`),
            this.element.classList.add("dragging"),
            this.dragging.emit({
              event: t,
              element: this.element,
              model: this.dragModel,
            });
        }
        _destroySubscription() {
          this.subscription &&
            (this.subscription.unsubscribe(), (this.subscription = void 0));
        }
      }
      ("undefined" != typeof window && window) || global,
        ("undefined" != typeof window && window) || global,
        ("undefined" != typeof window && window) || global;
      class p {
        constructor(t, n) {
          (this.renderer = n),
            (this.resizeEnabled = !0),
            (this.resize = new e.m()),
            (this.resizing = !1),
            (this.element = t.nativeElement);
        }
        ngAfterViewInit() {
          const t = this.renderer,
            n = t.createElement("span");
          t.addClass(
            n,
            this.resizeEnabled
              ? "resize-handle"
              : "resize-handle--not-resizable"
          ),
            t.appendChild(this.element, n);
        }
        ngOnDestroy() {
          this._destroySubscription();
        }
        onMouseup() {
          (this.resizing = !1),
            this.subscription &&
              !this.subscription.closed &&
              (this._destroySubscription(),
              this.resize.emit(this.element.clientWidth));
        }
        onMousedown(t) {
          const n = t.target.classList.contains("resize-handle"),
            l = this.element.clientWidth,
            e = t.screenX;
          if (n) {
            t.stopPropagation(), (this.resizing = !0);
            const n = Object(s.a)(document, "mouseup");
            this.subscription = n.subscribe((t) => this.onMouseup());
            const i = Object(s.a)(document, "mousemove")
              .pipe(Object(a.a)(n))
              .subscribe((t) => this.move(t, l, e));
            this.subscription.add(i);
          }
        }
        move(t, n, l) {
          const e = n + (t.screenX - l);
          (!this.minWidth || e >= this.minWidth) &&
            (!this.maxWidth || e <= this.maxWidth) &&
            (this.element.style.width = `${e}px`);
        }
        _destroySubscription() {
          this.subscription &&
            (this.subscription.unsubscribe(), (this.subscription = void 0));
        }
      }
      class m {
        constructor(t, n) {
          (this.document = n),
            (this.reorder = new e.m()),
            (this.targetChanged = new e.m()),
            (this.differ = t.find({}).create());
        }
        ngAfterContentInit() {
          this.updateSubscriptions(),
            this.draggables.changes.subscribe(
              this.updateSubscriptions.bind(this)
            );
        }
        ngOnDestroy() {
          this.draggables.forEach((t) => {
            t.dragStart.unsubscribe(),
              t.dragging.unsubscribe(),
              t.dragEnd.unsubscribe();
          });
        }
        updateSubscriptions() {
          const t = this.differ.diff(this.createMapDiffs());
          if (t) {
            const n = ({ currentValue: t, previousValue: n }) => {
                l({
                  previousValue: n,
                }),
                  t &&
                    (t.dragStart.subscribe(this.onDragStart.bind(this)),
                    t.dragging.subscribe(this.onDragging.bind(this)),
                    t.dragEnd.subscribe(this.onDragEnd.bind(this)));
              },
              l = ({ previousValue: t }) => {
                t &&
                  (t.dragStart.unsubscribe(),
                  t.dragging.unsubscribe(),
                  t.dragEnd.unsubscribe());
              };
            t.forEachAddedItem(n), t.forEachRemovedItem(l);
          }
        }
        onDragStart() {
          this.positions = {};
          let t = 0;
          for (const n of this.draggables.toArray()) {
            const l = n.element,
              e = parseInt(l.offsetLeft.toString(), 0);
            this.positions[n.dragModel.prop] = {
              left: e,
              right: e + parseInt(l.offsetWidth.toString(), 0),
              index: t++,
              element: l,
            };
          }
        }
        onDragging({ model: t, event: n }) {
          const l = this.positions[t.prop],
            e = this.isTarget(t, n);
          e
            ? this.lastDraggingIndex !== e.i &&
              (this.targetChanged.emit({
                prevIndex: this.lastDraggingIndex,
                newIndex: e.i,
                initialIndex: l.index,
              }),
              (this.lastDraggingIndex = e.i))
            : this.lastDraggingIndex !== l.index &&
              (this.targetChanged.emit({
                prevIndex: this.lastDraggingIndex,
                initialIndex: l.index,
              }),
              (this.lastDraggingIndex = l.index));
        }
        onDragEnd({ element: t, model: n, event: l }) {
          const e = this.positions[n.prop],
            i = this.isTarget(n, l);
          i &&
            this.reorder.emit({
              prevIndex: e.index,
              newIndex: i.i,
              model: n,
            }),
            (this.lastDraggingIndex = void 0),
            (t.style.left = "auto");
        }
        isTarget(t, n) {
          let l = 0;
          const e = this.document.elementsFromPoint(
            n.x || n.clientX,
            n.y || n.clientY
          );
          for (const i in this.positions) {
            const n = this.positions[i];
            if (t.prop !== i && e.find((t) => t === n.element))
              return {
                pos: n,
                i: l,
              };
            l++;
          }
        }
        createMapDiffs() {
          return this.draggables
            .toArray()
            .reduce((t, n) => ((t[n.dragModel.$$id] = n), t), {});
        }
      }
      class f {
        constructor() {
          (this.pressEnabled = !0),
            (this.duration = 500),
            (this.longPressStart = new e.m()),
            (this.longPressing = new e.m()),
            (this.longPressEnd = new e.m()),
            (this.mouseX = 0),
            (this.mouseY = 0);
        }
        get press() {
          return this.pressing;
        }
        get isLongPress() {
          return this.isLongPressing;
        }
        onMouseDown(t) {
          if (1 !== t.which || !this.pressEnabled) return;
          if (t.target.classList.contains("resize-handle")) return;
          (this.mouseX = t.clientX),
            (this.mouseY = t.clientY),
            (this.pressing = !0),
            (this.isLongPressing = !1);
          const n = Object(s.a)(document, "mouseup");
          (this.subscription = n.subscribe((t) => this.onMouseup())),
            (this.timeout = setTimeout(() => {
              (this.isLongPressing = !0),
                this.longPressStart.emit({
                  event: t,
                  model: this.pressModel,
                }),
                this.subscription.add(
                  Object(s.a)(document, "mousemove")
                    .pipe(Object(a.a)(n))
                    .subscribe((t) => this.onMouseMove(t))
                ),
                this.loop(t);
            }, this.duration)),
            this.loop(t);
        }
        onMouseMove(t) {
          if (this.pressing && !this.isLongPressing) {
            const n = Math.abs(t.clientX - this.mouseX) > 10,
              l = Math.abs(t.clientY - this.mouseY) > 10;
            (n || l) && this.endPress();
          }
        }
        loop(t) {
          this.isLongPressing &&
            (this.timeout = setTimeout(() => {
              this.longPressing.emit({
                event: t,
                model: this.pressModel,
              }),
                this.loop(t);
            }, 50));
        }
        endPress() {
          clearTimeout(this.timeout),
            (this.isLongPressing = !1),
            (this.pressing = !1),
            this._destroySubscription(),
            this.longPressEnd.emit({
              model: this.pressModel,
            });
        }
        onMouseup() {
          this.endPress();
        }
        ngOnDestroy() {
          this._destroySubscription();
        }
        _destroySubscription() {
          this.subscription &&
            (this.subscription.unsubscribe(), (this.subscription = void 0));
        }
      }
      class C {
        constructor(t, n, l) {
          (this.ngZone = t),
            (this.renderer = l),
            (this.scrollbarV = !1),
            (this.scrollbarH = !1),
            (this.scroll = new e.m()),
            (this.scrollYPos = 0),
            (this.scrollXPos = 0),
            (this.prevScrollYPos = 0),
            (this.prevScrollXPos = 0),
            (this._scrollEventListener = null),
            (this.element = n.nativeElement);
        }
        ngOnInit() {
          if (this.scrollbarV || this.scrollbarH) {
            const t = this.renderer;
            (this.parentElement = t.parentNode(t.parentNode(this.element))),
              (this._scrollEventListener = this.onScrolled.bind(this)),
              this.parentElement.addEventListener(
                "scroll",
                this._scrollEventListener
              );
          }
        }
        ngOnDestroy() {
          this._scrollEventListener &&
            (this.parentElement.removeEventListener(
              "scroll",
              this._scrollEventListener
            ),
            (this._scrollEventListener = null));
        }
        setOffset(t) {
          this.parentElement && (this.parentElement.scrollTop = t);
        }
        onScrolled(t) {
          const n = t.currentTarget;
          requestAnimationFrame(() => {
            (this.scrollYPos = n.scrollTop),
              (this.scrollXPos = n.scrollLeft),
              this.updateOffset();
          });
        }
        updateOffset() {
          let t;
          this.scrollYPos < this.prevScrollYPos
            ? (t = "down")
            : this.scrollYPos > this.prevScrollYPos && (t = "up"),
            this.scroll.emit({
              direction: t,
              scrollYPos: this.scrollYPos,
              scrollXPos: this.scrollXPos,
            }),
            (this.prevScrollYPos = this.scrollYPos),
            (this.prevScrollXPos = this.scrollXPos);
        }
      }
      function v() {
        return "";
      }
      function P(t) {
        return null == t
          ? v
          : "number" == typeof t
          ? w
          : -1 !== t.indexOf(".")
          ? y
          : x;
      }
      function w(t, n) {
        if (null == t) return "";
        if (!t || null == n) return t;
        const l = t[n];
        return null == l ? "" : l;
      }
      function x(t, n) {
        if (null == t) return "";
        if (!t || !n) return t;
        const l = t[n];
        return null == l ? "" : l;
      }
      function y(t, n) {
        if (null == t) return "";
        if (!t || !n) return t;
        let l = t[n];
        if (void 0 !== l) return l;
        l = t;
        const e = n.split(".");
        if (e.length)
          for (let i = 0; i < e.length; i++)
            if (null == (l = l[e[i]])) return "";
        return l;
      }
      function O(t) {
        return t && ((n) => P(t)(n, t));
      }
      function I(t, n, l) {
        if (n && l) {
          const e = {},
            i = t.length;
          let s = null;
          e[0] = new M();
          const o = t.reduce((t, n) => {
            const e = l(n);
            return -1 === t.indexOf(e) && t.push(e), t;
          }, []);
          for (let n = 0; n < i; n++) e[l(t[n])] = new M(t[n]);
          for (let u = 0; u < i; u++) {
            let i = 0;
            const a = n((s = e[l(t[u])]).row);
            a && o.indexOf(a) > -1 && (i = a),
              (s.parent = e[i]),
              (s.row.level = s.parent.row.level + 1),
              s.parent.children.push(s);
          }
          let a = [];
          return (
            e[0].flatten(function () {
              a = [...a, this.row];
            }, !0),
            a
          );
        }
        return t;
      }
      class M {
        constructor(t = null) {
          t ||
            (t = {
              level: -1,
              treeStatus: "expanded",
            }),
            (this.row = t),
            (this.parent = null),
            (this.children = []);
        }
        flatten(t, n) {
          if ("expanded" === this.row.treeStatus)
            for (let l = 0, e = this.children.length; l < e; l++) {
              const e = this.children[l];
              t.apply(e, Array.prototype.slice.call(arguments, 2)),
                n && e.flatten.apply(e, arguments);
            }
        }
      }
      function S(t) {
        return (t = (t = (t = t.replace(/[^a-zA-Z0-9 ]/g, " ")).replace(
          /([a-z](?=[A-Z]))/g,
          "$1 "
        ))
          .replace(/([^a-zA-Z0-9 ])|^[0-9]+/g, "")
          .trim()
          .toLowerCase()).replace(/([ 0-9]+)([a-zA-Z])/g, function (t, n, l) {
          return n.trim() + l.toUpperCase();
        });
      }
      function _(t) {
        if (!t) return;
        let n = !1;
        for (const l of t)
          l.$$id ||
            (l.$$id = (
              "0000" + ((Math.random() * Math.pow(36, 4)) << 0).toString(36)
            ).slice(-4)),
            j(l.prop) && l.name && (l.prop = S(l.name)),
            l.$$valueGetter || (l.$$valueGetter = P(l.prop)),
            !j(l.prop) &&
              j(l.name) &&
              (l.name = String(l.prop)
                .replace(/([A-Z])/g, (t) => ` ${t}`)
                .replace(/^./, (t) => t.toUpperCase())),
            j(l.prop) && j(l.name) && (l.name = ""),
            l.hasOwnProperty("resizeable") || (l.resizeable = !0),
            l.hasOwnProperty("sortable") || (l.sortable = !0),
            l.hasOwnProperty("draggable") || (l.draggable = !0),
            l.hasOwnProperty("canAutoResize") || (l.canAutoResize = !0),
            l.hasOwnProperty("width") || (l.width = 150),
            l.hasOwnProperty("isTreeColumn") && l.isTreeColumn && !n
              ? (n = !0)
              : (l.isTreeColumn = !1);
      }
      function j(t) {
        return null == t;
      }
      const A = {
          standard: "standard",
          flex: "flex",
          force: "force",
        },
        E = {
          single: "single",
          multi: "multi",
          multiClick: "multiClick",
          cell: "cell",
          checkbox: "checkbox",
        },
        L = {
          single: "single",
          multi: "multi",
        },
        D = {
          header: "header",
          body: "body",
        };
      class k {
        constructor(t) {
          this.template = t;
        }
      }
      class R {
        constructor(t) {
          (this.columnChangesService = t), (this.isFirstChange = !0);
        }
        get cellTemplate() {
          return this._cellTemplateInput || this._cellTemplateQuery;
        }
        get headerTemplate() {
          return this._headerTemplateInput || this._headerTemplateQuery;
        }
        get treeToggleTemplate() {
          return this._treeToggleTemplateInput || this._treeToggleTemplateQuery;
        }
        ngOnChanges() {
          this.isFirstChange
            ? (this.isFirstChange = !1)
            : this.columnChangesService.onInputChange();
        }
      }
      class N {
        constructor(t) {
          this.template = t;
        }
      }
      class T {
        constructor() {
          (this.rowHeight = 0), (this.toggle = new e.m());
        }
        get template() {
          return this._templateInput || this._templateQuery;
        }
        toggleExpandRow(t) {
          this.toggle.emit({
            type: "row",
            value: t,
          });
        }
        expandAllRows() {
          this.toggle.emit({
            type: "all",
            value: !0,
          });
        }
        collapseAllRows() {
          this.toggle.emit({
            type: "all",
            value: !1,
          });
        }
      }
      class q {
        get template() {
          return this._templateInput || this._templateQuery;
        }
      }
      function B(t) {
        const n = {
          left: [],
          center: [],
          right: [],
        };
        if (t)
          for (const l of t)
            l.frozenLeft
              ? n.left.push(l)
              : l.frozenRight
              ? n.right.push(l)
              : n.center.push(l);
        return n;
      }
      function U(t, n) {
        return {
          left: K(t.left),
          center: K(t.center),
          right: K(t.right),
          total: Math.floor(K(n)),
        };
      }
      function K(t, n) {
        let l = 0;
        if (t) for (const e of t) l += parseFloat(n && e[n] ? e[n] : e.width);
        return l;
      }
      function F(t) {
        const n = [],
          l = B(t);
        return (
          n.push({
            type: "left",
            columns: l.left,
          }),
          n.push({
            type: "center",
            columns: l.center,
          }),
          n.push({
            type: "right",
            columns: l.right,
          }),
          n
        );
      }
      class G {
        constructor() {
          this.treeArray = [];
        }
        clearCache() {
          this.treeArray = [];
        }
        initCache(t) {
          const {
              rows: n,
              rowHeight: l,
              detailRowHeight: e,
              externalVirtual: i,
              rowCount: s,
              rowIndexes: o,
              rowExpansions: a,
            } = t,
            u = "function" == typeof l,
            r = "function" == typeof e;
          if (!u && isNaN(l))
            throw new Error(
              `Row Height cache initialization failed. Please ensure that 'rowHeight' is a\n        valid number or function value: (${l}) when 'scrollbarV' is enabled.`
            );
          if (!r && isNaN(e))
            throw new Error(
              `Row Height cache initialization failed. Please ensure that 'detailRowHeight' is a\n        valid number or function value: (${e}) when 'scrollbarV' is enabled.`
            );
          const c = i ? s : n.length;
          this.treeArray = new Array(c);
          for (let h = 0; h < c; ++h) this.treeArray[h] = 0;
          for (let h = 0; h < c; ++h) {
            const t = n[h];
            let i = l;
            u && (i = l(t));
            const s = a.get(t);
            t && 1 === s && (i += r ? e(t, o.get(t)) : e), this.update(h, i);
          }
        }
        getRowIndex(t) {
          return 0 === t ? 0 : this.calcRowIndex(t);
        }
        update(t, n) {
          if (!this.treeArray.length)
            throw new Error(
              `Update at index ${t} with value ${n} failed:\n        Row Height cache not initialized.`
            );
          const l = this.treeArray.length;
          for (t |= 0; t < l; ) (this.treeArray[t] += n), (t |= t + 1);
        }
        query(t) {
          if (!this.treeArray.length)
            throw new Error(
              `query at index ${t} failed: Fenwick tree array not initialized.`
            );
          let n = 0;
          for (t |= 0; t >= 0; )
            (n += this.treeArray[t]), (t = (t & (t + 1)) - 1);
          return n;
        }
        queryBetween(t, n) {
          return this.query(n) - this.query(t - 1);
        }
        calcRowIndex(t) {
          if (!this.treeArray.length) return 0;
          let n = -1;
          const l = this.treeArray.length;
          for (
            let e = Math.pow(2, l.toString(2).length - 1);
            0 !== e;
            e >>= 1
          ) {
            const i = n + e;
            i < l &&
              t >= this.treeArray[i] &&
              ((t -= this.treeArray[i]), (n = i));
          }
          return n + 1;
        }
      }
      const H = {},
        $ =
          "undefined" != typeof document
            ? document.createElement("div").style
            : void 0,
        z = (function () {
          const t =
              "undefined" != typeof window
                ? window.getComputedStyle(document.documentElement, "")
                : void 0,
            n =
              void 0 !== t
                ? Array.prototype.slice
                    .call(t)
                    .join("")
                    .match(/-(moz|webkit|ms)-/)
                : null,
            l = null !== n ? n[1] : void 0,
            e =
              void 0 !== l
                ? "WebKit|Moz|MS|O".match(new RegExp("(" + l + ")", "i"))[1]
                : void 0;
          return e
            ? {
                dom: e,
                lowercase: l,
                css: `-${l}-`,
                js: l[0].toUpperCase() + l.substr(1),
              }
            : void 0;
        })();
      function V(t) {
        const n = S(t);
        return (
          H[n] ||
            (void 0 !== z && void 0 !== $[z.css + t]
              ? (H[n] = z.css + t)
              : void 0 !== $[t] && (H[n] = t)),
          H[n]
        );
      }
      const J = "undefined" != typeof window ? V("transform") : void 0,
        W = "undefined" != typeof window ? V("backfaceVisibility") : void 0,
        Y = "undefined" != typeof window ? !!V("transform") : void 0,
        X = "undefined" != typeof window ? !!V("perspective") : void 0,
        Q =
          "undefined" != typeof window ? window.navigator.userAgent : "Chrome",
        Z = /Safari\//.test(Q) && !/Chrome\//.test(Q);
      function tt(t, n, l) {
        void 0 !== J && Y
          ? !Z && X
            ? ((t[J] = `translate3d(${n}px, ${l}px, 0)`), (t[W] = "hidden"))
            : (t[S(J)] = `translate(${n}px, ${l}px)`)
          : ((t.top = `${l}px`), (t.left = `${n}px`));
      }
      class nt {
        constructor(t) {
          (this.cd = t),
            (this.selected = []),
            (this.scroll = new e.m()),
            (this.page = new e.m()),
            (this.activate = new e.m()),
            (this.select = new e.m()),
            (this.detailToggle = new e.m()),
            (this.rowContextmenu = new e.m(!1)),
            (this.treeAction = new e.m()),
            (this.rowHeightsCache = new G()),
            (this.temp = []),
            (this.offsetY = 0),
            (this.indexes = {}),
            (this.rowIndexes = new Map()),
            (this.rowExpansions = new Map()),
            (this.getDetailRowHeight = (t, n) => {
              if (!this.rowDetail) return 0;
              const l = this.rowDetail.rowHeight;
              return "function" == typeof l ? l(t, n) : l;
            }),
            (this.rowTrackingFn = (t, n) => {
              const l = this.getRowIndex(n);
              return this.trackByProp ? n[this.trackByProp] : l;
            });
        }
        set pageSize(t) {
          (this._pageSize = t), this.recalcLayout();
        }
        get pageSize() {
          return this._pageSize;
        }
        set rows(t) {
          (this._rows = t), this.rowExpansions.clear(), this.recalcLayout();
        }
        get rows() {
          return this._rows;
        }
        set columns(t) {
          this._columns = t;
          const n = B(t);
          this.columnGroupWidths = U(n, t);
        }
        get columns() {
          return this._columns;
        }
        set offset(t) {
          (this._offset = t), this.recalcLayout();
        }
        get offset() {
          return this._offset;
        }
        set rowCount(t) {
          (this._rowCount = t), this.recalcLayout();
        }
        get rowCount() {
          return this._rowCount;
        }
        get bodyWidth() {
          return this.scrollbarH ? this.innerWidth + "px" : "100%";
        }
        set bodyHeight(t) {
          (this._bodyHeight = this.scrollbarV ? t + "px" : "auto"),
            this.recalcLayout();
        }
        get bodyHeight() {
          return this._bodyHeight;
        }
        get selectEnabled() {
          return !!this.selectionType;
        }
        get scrollHeight() {
          if (this.scrollbarV && this.virtualization && this.rowCount)
            return this.rowHeightsCache.query(this.rowCount - 1);
        }
        ngOnInit() {
          this.rowDetail &&
            (this.listener = this.rowDetail.toggle.subscribe(
              ({ type: t, value: n }) => {
                "row" === t && this.toggleRowExpansion(n),
                  "all" === t && this.toggleAllRows(n),
                  this.updateIndexes(),
                  this.updateRows(),
                  this.cd.markForCheck();
              }
            )),
            this.groupHeader &&
              (this.listener = this.groupHeader.toggle.subscribe(
                ({ type: t, value: n }) => {
                  "group" === t && this.toggleRowExpansion(n),
                    "all" === t && this.toggleAllRows(n),
                    this.updateIndexes(),
                    this.updateRows(),
                    this.cd.markForCheck();
                }
              ));
        }
        ngOnDestroy() {
          (this.rowDetail || this.groupHeader) && this.listener.unsubscribe();
        }
        updateOffsetY(t) {
          this.scroller &&
            (this.scrollbarV && this.virtualization && t
              ? (t = this.rowHeightsCache.query(this.pageSize * t - 1))
              : this.scrollbarV && !this.virtualization && (t = 0),
            this.scroller.setOffset(t || 0));
        }
        onBodyScroll(t) {
          const n = t.scrollYPos,
            l = t.scrollXPos;
          (this.offsetY === n && this.offsetX === l) ||
            this.scroll.emit({
              offsetY: n,
              offsetX: l,
            }),
            (this.offsetY = n),
            (this.offsetX = l),
            this.updateIndexes(),
            this.updatePage(t.direction),
            this.updateRows();
        }
        updatePage(t) {
          let n = this.indexes.first / this.pageSize;
          "up" === t ? (n = Math.ceil(n)) : "down" === t && (n = Math.floor(n)),
            void 0 === t ||
              isNaN(n) ||
              this.page.emit({
                offset: n,
              });
        }
        updateRows() {
          const { first: t, last: n } = this.indexes;
          let l = t,
            e = 0;
          const i = [];
          if ((this.rowIndexes.clear(), this.groupedRows)) {
            let t = 3;
            for (
              1 === this.groupedRows.length &&
              (t = this.groupedRows[0].value.length);
              l < n && l < this.groupedRows.length;

            )
              (i[e] = this.groupedRows[l]), e++, l++;
          } else
            for (; l < n && l < this.rowCount; ) {
              const t = this.rows[l];
              t && (this.rowIndexes.set(t, l), (i[e] = t)), e++, l++;
            }
          this.temp = i;
        }
        getRowHeight(t) {
          return "function" == typeof this.rowHeight
            ? this.rowHeight(t)
            : this.rowHeight;
        }
        getGroupHeight(t) {
          let n = 0;
          if (t.value)
            for (let l = 0; l < t.value.length; l++)
              n += this.getRowAndDetailHeight(t.value[l]);
          return n;
        }
        getRowAndDetailHeight(t) {
          let n = this.getRowHeight(t);
          return (
            1 === this.rowExpansions.get(t) &&
              (n += this.getDetailRowHeight(t)),
            n
          );
        }
        getRowsStyles(t) {
          const n = {};
          if (
            (this.groupedRows && (n.width = this.columnGroupWidths.total),
            this.scrollbarV && this.virtualization)
          ) {
            let l = 0;
            if (this.groupedRows) {
              const n = t[t.length - 1];
              l = n ? this.getRowIndex(n) : 0;
            } else l = this.getRowIndex(t);
            tt(n, 0, this.rowHeightsCache.query(l - 1));
          }
          return n;
        }
        getBottomSummaryRowStyles() {
          if (!this.scrollbarV || !this.rows || !this.rows.length) return null;
          const t = {
            position: "absolute",
          };
          return tt(t, 0, this.rowHeightsCache.query(this.rows.length - 1)), t;
        }
        hideIndicator() {
          setTimeout(() => (this.loadingIndicator = !1), 500);
        }
        updateIndexes() {
          let t = 0,
            n = 0;
          if (this.scrollbarV)
            if (this.virtualization) {
              const l = parseInt(this.bodyHeight, 0);
              (t = this.rowHeightsCache.getRowIndex(this.offsetY)),
                (n = this.rowHeightsCache.getRowIndex(l + this.offsetY) + 1);
            } else (t = 0), (n = this.rowCount);
          else
            this.externalPaging ||
              (t = Math.max(this.offset * this.pageSize, 0)),
              (n = Math.min(t + this.pageSize, this.rowCount));
          this.indexes = {
            first: t,
            last: n,
          };
        }
        refreshRowHeightCache() {
          !this.scrollbarV ||
            (this.scrollbarV && !this.virtualization) ||
            (this.rowHeightsCache.clearCache(),
            this.rows &&
              this.rows.length &&
              this.rowHeightsCache.initCache({
                rows: this.rows,
                rowHeight: this.rowHeight,
                detailRowHeight: this.getDetailRowHeight,
                externalVirtual: this.scrollbarV && this.externalPaging,
                rowCount: this.rowCount,
                rowIndexes: this.rowIndexes,
                rowExpansions: this.rowExpansions,
              }));
        }
        getAdjustedViewPortIndex() {
          const t = this.indexes.first;
          return this.scrollbarV &&
            this.virtualization &&
            this.rowHeightsCache.query(t - 1) <= this.offsetY
            ? t - 1
            : t;
        }
        toggleRowExpansion(t) {
          const n = this.getAdjustedViewPortIndex();
          let l = this.rowExpansions.get(t);
          if (this.scrollbarV && this.virtualization) {
            const n = this.getDetailRowHeight(t) * (l ? -1 : 1),
              e = this.getRowIndex(t);
            this.rowHeightsCache.update(e, n);
          }
          (l = l ^= 1),
            this.rowExpansions.set(t, l),
            this.detailToggle.emit({
              rows: [t],
              currentIndex: n,
            });
        }
        toggleAllRows(t) {
          this.rowExpansions.clear();
          const n = t ? 1 : 0,
            l = this.getAdjustedViewPortIndex();
          for (const e of this.rows) this.rowExpansions.set(e, n);
          this.scrollbarV && this.recalcLayout(),
            this.detailToggle.emit({
              rows: this.rows,
              currentIndex: l,
            });
        }
        recalcLayout() {
          this.refreshRowHeightCache(), this.updateIndexes(), this.updateRows();
        }
        columnTrackingFn(t, n) {
          return n.$$id;
        }
        stylesByGroup(t) {
          const n = this.columnGroupWidths,
            l = this.offsetX,
            e = {
              width: `${n[t]}px`,
            };
          if ("left" === t) tt(e, l, 0);
          else if ("right" === t) {
            const t = parseInt(this.innerWidth + "", 0);
            tt(e, -1 * (n.total - t - l), 0);
          }
          return e;
        }
        getRowExpanded(t) {
          if (0 === this.rowExpansions.size && this.groupExpansionDefault)
            for (const n of this.groupedRows) this.rowExpansions.set(n, 1);
          return 1 === this.rowExpansions.get(t);
        }
        getRowIndex(t) {
          return this.rowIndexes.get(t) || 0;
        }
        onTreeAction(t) {
          this.treeAction.emit({
            row: t,
          });
        }
      }
      class lt {
        constructor(t) {
          (this.cd = t),
            (this.sort = new e.m()),
            (this.reorder = new e.m()),
            (this.resize = new e.m()),
            (this.select = new e.m()),
            (this.columnContextmenu = new e.m(!1)),
            (this._columnGroupWidths = {
              total: 100,
            }),
            (this._styleByGroup = {
              left: {},
              center: {},
              right: {},
            });
        }
        set innerWidth(t) {
          (this._innerWidth = t),
            setTimeout(() => {
              if (this._columns) {
                const t = B(this._columns);
                (this._columnGroupWidths = U(t, this._columns)),
                  this.setStylesByGroup();
              }
            });
        }
        get innerWidth() {
          return this._innerWidth;
        }
        set headerHeight(t) {
          this._headerHeight = "auto" !== t ? `${t}px` : t;
        }
        get headerHeight() {
          return this._headerHeight;
        }
        set columns(t) {
          this._columns = t;
          const n = B(t);
          (this._columnsByPin = F(t)),
            setTimeout(() => {
              (this._columnGroupWidths = U(n, t)), this.setStylesByGroup();
            });
        }
        get columns() {
          return this._columns;
        }
        set offsetX(t) {
          (this._offsetX = t), this.setStylesByGroup();
        }
        get offsetX() {
          return this._offsetX;
        }
        onLongPressStart({ event: t, model: n }) {
          (n.dragging = !0), (this.dragEventTarget = t);
        }
        onLongPressEnd({ event: t, model: n }) {
          (this.dragEventTarget = t),
            setTimeout(() => {
              const t = this._columns.find((t) => t.$$id === n.$$id);
              t && (t.dragging = !1);
            }, 5);
        }
        get headerWidth() {
          return this.scrollbarH ? this.innerWidth + "px" : "100%";
        }
        trackByGroups(t, n) {
          return n.type;
        }
        columnTrackingFn(t, n) {
          return n.$$id;
        }
        onColumnResized(t, n) {
          t <= n.minWidth
            ? (t = n.minWidth)
            : t >= n.maxWidth && (t = n.maxWidth),
            this.resize.emit({
              column: n,
              prevValue: n.width,
              newValue: t,
            });
        }
        onColumnReordered({ prevIndex: t, newIndex: n, model: l }) {
          const e = this.getColumn(n);
          (e.isTarget = !1),
            (e.targetMarkerContext = void 0),
            this.reorder.emit({
              column: l,
              prevValue: t,
              newValue: n,
            });
        }
        onTargetChanged({ prevIndex: t, newIndex: n, initialIndex: l }) {
          if (t || 0 === t) {
            const n = this.getColumn(t);
            (n.isTarget = !1), (n.targetMarkerContext = void 0);
          }
          if (n || 0 === n) {
            const t = this.getColumn(n);
            (t.isTarget = !0),
              l !== n &&
                (t.targetMarkerContext = {
                  class: "targetMarker ".concat(
                    l > n ? "dragFromRight" : "dragFromLeft"
                  ),
                });
          }
        }
        getColumn(t) {
          const n = this._columnsByPin[0].columns.length;
          if (t < n) return this._columnsByPin[0].columns[t];
          const l = this._columnsByPin[1].columns.length;
          return t < n + l
            ? this._columnsByPin[1].columns[t - n]
            : this._columnsByPin[2].columns[t - n - l];
        }
        onSort({ column: t, prevValue: n, newValue: l }) {
          if (t.dragging) return;
          const e = this.calcNewSorts(t, n, l);
          this.sort.emit({
            sorts: e,
            column: t,
            prevValue: n,
            newValue: l,
          });
        }
        calcNewSorts(t, n, l) {
          let e = 0;
          this.sorts || (this.sorts = []);
          const i = this.sorts.map(
            (n, l) => ((n = Object.assign({}, n)).prop === t.prop && (e = l), n)
          );
          return (
            void 0 === l
              ? i.splice(e, 1)
              : n
              ? (i[e].dir = l)
              : (this.sortType === L.single && i.splice(0, this.sorts.length),
                i.push({
                  dir: l,
                  prop: t.prop,
                })),
            i
          );
        }
        setStylesByGroup() {
          (this._styleByGroup.left = this.calcStylesByGroup("left")),
            (this._styleByGroup.center = this.calcStylesByGroup("center")),
            (this._styleByGroup.right = this.calcStylesByGroup("right")),
            this.cd.detectChanges();
        }
        calcStylesByGroup(t) {
          const n = this._columnGroupWidths,
            l = {
              width: `${n[t]}px`,
            };
          return (
            "center" === t
              ? tt(l, -1 * this.offsetX, 0)
              : "right" === t && tt(l, -1 * (n.total - this.innerWidth), 0),
            l
          );
        }
      }
      function et(t, n, l) {
        let e, i, s;
        l = l || {};
        let o = null,
          a = 0;
        function u() {
          (a = !1 === l.leading ? 0 : +new Date()),
            (o = null),
            (s = t.apply(e, i));
        }
        return function () {
          const r = +new Date();
          a || !1 !== l.leading || (a = r);
          const c = n - (r - a);
          return (
            (e = this),
            (i = arguments),
            c <= 0
              ? (clearTimeout(o), (o = null), (a = r), (s = t.apply(e, i)))
              : o || !1 === l.trailing || (o = setTimeout(u, c)),
            s
          );
        };
      }
      function it(t, n) {
        return function (l, e, i) {
          return {
            configurable: !0,
            enumerable: i.enumerable,
            get: function () {
              return (
                Object.defineProperty(this, e, {
                  configurable: !0,
                  enumerable: i.enumerable,
                  value: et(i.value, t, n),
                }),
                this[e]
              );
            },
          };
        };
      }
      function st(t, n) {
        for (const l of n) {
          const n = t.indexOf(l);
          t.splice(n, 1);
        }
      }
      function ot(t, n = 300) {
        let l = 0;
        for (const e of t) l += e.width || n;
        return l;
      }
      const at = {
        asc: "asc",
        desc: "desc",
      };
      function ut(t, n) {
        if (
          (null == t && (t = 0),
          null == n && (n = 0),
          t instanceof Date && n instanceof Date)
        ) {
          if (t < n) return -1;
          if (t > n) return 1;
        } else if (
          isNaN(parseFloat(t)) ||
          !isFinite(t) ||
          isNaN(parseFloat(n)) ||
          !isFinite(n)
        ) {
          if (
            ((t = String(t)),
            (n = String(n)),
            t.toLowerCase() < n.toLowerCase())
          )
            return -1;
          if (t.toLowerCase() > n.toLowerCase()) return 1;
        } else {
          if (parseFloat(t) < parseFloat(n)) return -1;
          if (parseFloat(t) > parseFloat(n)) return 1;
        }
        return 0;
      }
      let rt = (() => {
        class t {
          constructor(t, n, l, i, s, a, u) {
            (this.scrollbarHelper = t),
              (this.dimensionsHelper = n),
              (this.cd = l),
              (this.columnChangesService = a),
              (this.configuration = u),
              (this.selected = []),
              (this.scrollbarV = !1),
              (this.scrollbarH = !1),
              (this.rowHeight = 30),
              (this.columnMode = A.standard),
              (this.headerHeight = 30),
              (this.footerHeight = 0),
              (this.externalPaging = !1),
              (this.externalSorting = !1),
              (this.loadingIndicator = !1),
              (this.reorderable = !0),
              (this.swapColumns = !0),
              (this.sortType = L.single),
              (this.sorts = []),
              (this.cssClasses = {
                sortAscending: "datatable-icon-up",
                sortDescending: "datatable-icon-down",
                pagerLeftArrow: "datatable-icon-left",
                pagerRightArrow: "datatable-icon-right",
                pagerPrevious: "datatable-icon-prev",
                pagerNext: "datatable-icon-skip",
              }),
              (this.messages = {
                emptyMessage: "No data to display",
                totalMessage: "total",
                selectedMessage: "selected",
              }),
              (this.groupExpansionDefault = !1),
              (this.selectAllRowsOnPage = !1),
              (this.virtualization = !0),
              (this.summaryRow = !1),
              (this.summaryHeight = 30),
              (this.summaryPosition = "top"),
              (this.scroll = new e.m()),
              (this.activate = new e.m()),
              (this.select = new e.m()),
              (this.sort = new e.m()),
              (this.page = new e.m()),
              (this.reorder = new e.m()),
              (this.resize = new e.m()),
              (this.tableContextmenu = new e.m(!1)),
              (this.treeAction = new e.m()),
              (this.rowCount = 0),
              (this._offsetX = new o.a(0)),
              (this._count = 0),
              (this._offset = 0),
              (this._subscriptions = []),
              (this.rowIdentity = (t) => t),
              (this.element = i.nativeElement),
              (this.rowDiffer = s.find({}).create()),
              this.configuration &&
                this.configuration.messages &&
                (this.messages = Object.assign(
                  {},
                  this.configuration.messages
                ));
          }
          set rows(t) {
            (this._rows = t),
              t && (this._internalRows = [...t]),
              this.externalSorting || this.sortInternalRows(),
              (this._internalRows = I(
                this._internalRows,
                O(this.treeFromRelation),
                O(this.treeToRelation)
              )),
              this.recalculate(),
              this._rows &&
                this._groupRowsBy &&
                (this.groupedRows = this.groupArrayBy(
                  this._rows,
                  this._groupRowsBy
                )),
              this.cd.markForCheck();
          }
          get rows() {
            return this._rows;
          }
          set groupRowsBy(t) {
            t &&
              ((this._groupRowsBy = t),
              this._rows &&
                this._groupRowsBy &&
                (this.groupedRows = this.groupArrayBy(
                  this._rows,
                  this._groupRowsBy
                )));
          }
          get groupRowsBy() {
            return this._groupRowsBy;
          }
          set columns(t) {
            t &&
              ((this._internalColumns = [...t]),
              _(this._internalColumns),
              this.recalculateColumns()),
              (this._columns = t);
          }
          get columns() {
            return this._columns;
          }
          set limit(t) {
            (this._limit = t), this.recalculate();
          }
          get limit() {
            return this._limit;
          }
          set count(t) {
            (this._count = t), this.recalculate();
          }
          get count() {
            return this._count;
          }
          set offset(t) {
            this._offset = t;
          }
          get offset() {
            return Math.max(
              Math.min(
                this._offset,
                Math.ceil(this.rowCount / this.pageSize) - 1
              ),
              0
            );
          }
          get isFixedHeader() {
            const t = this.headerHeight;
            return "string" != typeof t || "auto" !== t;
          }
          get isFixedRow() {
            return "auto" !== this.rowHeight;
          }
          get isVertScroll() {
            return this.scrollbarV;
          }
          get isVirtualized() {
            return this.virtualization;
          }
          get isHorScroll() {
            return this.scrollbarH;
          }
          get isSelectable() {
            return void 0 !== this.selectionType;
          }
          get isCheckboxSelection() {
            return this.selectionType === E.checkbox;
          }
          get isCellSelection() {
            return this.selectionType === E.cell;
          }
          get isSingleSelection() {
            return this.selectionType === E.single;
          }
          get isMultiSelection() {
            return this.selectionType === E.multi;
          }
          get isMultiClickSelection() {
            return this.selectionType === E.multiClick;
          }
          set columnTemplates(t) {
            (this._columnTemplates = t), this.translateColumns(t);
          }
          get columnTemplates() {
            return this._columnTemplates;
          }
          get allRowsSelected() {
            let t =
              this.rows &&
              this.selected &&
              this.selected.length === this.rows.length;
            if (this.selectAllRowsOnPage) {
              const n = this.bodyComponent.indexes;
              t = this.selected.length === n.last - n.first;
            }
            return this.selected && this.rows && 0 !== this.rows.length && t;
          }
          ngOnInit() {
            this.recalculate();
          }
          ngAfterViewInit() {
            this.externalSorting || this.sortInternalRows(),
              "undefined" != typeof requestAnimationFrame &&
                requestAnimationFrame(() => {
                  this.recalculate(),
                    this.externalPaging &&
                      this.scrollbarV &&
                      this.page.emit({
                        count: this.count,
                        pageSize: this.pageSize,
                        limit: this.limit,
                        offset: 0,
                      });
                });
          }
          ngAfterContentInit() {
            this.columnTemplates.changes.subscribe((t) =>
              this.translateColumns(t)
            ),
              this.listenForColumnInputChanges();
          }
          translateColumns(t) {
            if (t) {
              const n = t.toArray();
              n.length &&
                ((this._internalColumns = (function (t) {
                  const n = [];
                  for (const l of t) {
                    const t = {},
                      e = Object.getOwnPropertyNames(l);
                    for (const n of e) t[n] = l[n];
                    l.headerTemplate && (t.headerTemplate = l.headerTemplate),
                      l.cellTemplate && (t.cellTemplate = l.cellTemplate),
                      l.summaryFunc && (t.summaryFunc = l.summaryFunc),
                      l.summaryTemplate &&
                        (t.summaryTemplate = l.summaryTemplate),
                      n.push(t);
                  }
                  return n;
                })(n)),
                _(this._internalColumns),
                this.recalculateColumns(),
                this.sortInternalRows(),
                this.cd.markForCheck());
            }
          }
          groupArrayBy(t, n) {
            const l = new Map();
            return (
              t.forEach((t) => {
                const e = t[n];
                l.has(e) ? l.get(e).push(t) : l.set(e, [t]);
              }),
              Array.from(l, (t) =>
                ((t, n) => ({
                  key: t,
                  value: n,
                }))(t[0], t[1])
              )
            );
          }
          ngDoCheck() {
            this.rowDiffer.diff(this.rows) &&
              (this.externalSorting
                ? (this._internalRows = [...this.rows])
                : this.sortInternalRows(),
              (this._internalRows = I(
                this._internalRows,
                O(this.treeFromRelation),
                O(this.treeToRelation)
              )),
              this.recalculatePages(),
              this.cd.markForCheck());
          }
          recalculate() {
            this.recalculateDims(), this.recalculateColumns();
          }
          onWindowResize() {
            this.recalculate();
          }
          recalculateColumns(
            t = this._internalColumns,
            n = -1,
            l = this.scrollbarH
          ) {
            if (!t) return;
            let e = this._innerWidth;
            return (
              this.scrollbarV && (e -= this.scrollbarHelper.width),
              this.columnMode === A.force
                ? (function (t, l, e, i, s = 300) {
                    const o = t
                      .slice(n + 1, t.length)
                      .filter((t) => !1 !== t.canAutoResize);
                    for (const n of o) n.$$oldWidth || (n.$$oldWidth = n.width);
                    let a = 0,
                      u = !1,
                      r = ot(t, s),
                      c = l - r;
                    const h = [];
                    do {
                      (a = c / o.length), (u = r >= l);
                      for (const t of o) {
                        if (u && i) t.width = t.$$oldWidth || t.width || s;
                        else {
                          const n = (t.width || s) + a;
                          t.minWidth && n < t.minWidth
                            ? ((t.width = t.minWidth), h.push(t))
                            : t.maxWidth && n > t.maxWidth
                            ? ((t.width = t.maxWidth), h.push(t))
                            : (t.width = n);
                        }
                        t.width = Math.max(0, t.width);
                      }
                      (c = l - (r = ot(t))), st(o, h);
                    } while (c > 1 && 0 !== o.length);
                  })(t, e, 0, l)
                : this.columnMode === A.flex &&
                  (function (t, n) {
                    const l = (function (t, n) {
                        let l = 0;
                        for (const e of t) l += e.width;
                        return l;
                      })(t),
                      e = (function (t) {
                        let n = 0;
                        for (const l of t) n += l.flexGrow || 0;
                        return n;
                      })(t),
                      i = B(t);
                    l !== n &&
                      (function (t, n, l) {
                        for (const s in t)
                          for (const e of t[s])
                            e.canAutoResize
                              ? (e.width = 0)
                              : ((n -= e.width),
                                (l -= e.flexGrow ? e.flexGrow : 0));
                        const e = {};
                        let i = n;
                        do {
                          const n = i / l;
                          i = 0;
                          for (const l in t)
                            for (const s of t[l])
                              if (s.canAutoResize && !e[s.prop]) {
                                const t = s.width + s.flexGrow * n;
                                void 0 !== s.minWidth && t < s.minWidth
                                  ? ((i += t - s.minWidth),
                                    (s.width = s.minWidth),
                                    (e[s.prop] = !0))
                                  : (s.width = t);
                              }
                        } while (0 !== i);
                      })(i, n, e);
                  })(t, e),
              t
            );
          }
          recalculateDims() {
            const t = this.dimensionsHelper.getDimensions(this.element);
            if (((this._innerWidth = Math.floor(t.width)), this.scrollbarV)) {
              let n = t.height;
              this.headerHeight && (n -= this.headerHeight),
                this.footerHeight && (n -= this.footerHeight),
                (this.bodyHeight = n);
            }
            this.recalculatePages();
          }
          recalculatePages() {
            (this.pageSize = this.calcPageSize()),
              (this.rowCount = this.calcRowCount());
          }
          onBodyPage({ offset: t }) {
            (this.externalPaging && !this.virtualization) ||
              ((this.offset = t),
              this.page.emit({
                count: this.count,
                pageSize: this.pageSize,
                limit: this.limit,
                offset: this.offset,
              }));
          }
          onBodyScroll(t) {
            this._offsetX.next(t.offsetX),
              this.scroll.emit(t),
              this.cd.detectChanges();
          }
          onFooterPage(t) {
            (this.offset = t.page - 1),
              this.bodyComponent.updateOffsetY(this.offset),
              this.page.emit({
                count: this.count,
                pageSize: this.pageSize,
                limit: this.limit,
                offset: this.offset,
              }),
              this.selectAllRowsOnPage &&
                ((this.selected = []),
                this.select.emit({
                  selected: this.selected,
                }));
          }
          calcPageSize(t = this.rows) {
            if (this.scrollbarV && this.virtualization) {
              const t = Math.ceil(this.bodyHeight / this.rowHeight);
              return Math.max(t, 0);
            }
            return void 0 !== this.limit ? this.limit : t ? t.length : 0;
          }
          calcRowCount(t = this.rows) {
            return this.externalPaging
              ? this.count
              : t
              ? this.groupedRows
                ? this.groupedRows.length
                : null != this.treeFromRelation && null != this.treeToRelation
                ? this._internalRows.length
                : t.length
              : 0;
          }
          onColumnContextmenu({ event: t, column: n }) {
            this.tableContextmenu.emit({
              event: t,
              type: D.header,
              content: n,
            });
          }
          onRowContextmenu({ event: t, row: n }) {
            this.tableContextmenu.emit({
              event: t,
              type: D.body,
              content: n,
            });
          }
          onColumnResize({ column: t, newValue: n }) {
            if (void 0 === t) return;
            let l;
            const e = this._internalColumns.map(
              (e, i) => (
                (e = Object.assign({}, e)).$$id === t.$$id &&
                  ((l = i), (e.width = n), (e.$$oldWidth = n)),
                e
              )
            );
            this.recalculateColumns(e, l),
              (this._internalColumns = e),
              this.resize.emit({
                column: t,
                newValue: n,
              });
          }
          onColumnReorder({ column: t, newValue: n, prevValue: l }) {
            const e = this._internalColumns.map((t) => Object.assign({}, t));
            if (this.swapColumns) {
              const i = e[n];
              (e[n] = t), (e[l] = i);
            } else if (n > l) {
              const t = e[l];
              for (let i = l; i < n; i++) e[i] = e[i + 1];
              e[n] = t;
            } else {
              const t = e[l];
              for (let i = l; i > n; i--) e[i] = e[i - 1];
              e[n] = t;
            }
            (this._internalColumns = e),
              this.reorder.emit({
                column: t,
                newValue: n,
                prevValue: l,
              });
          }
          onColumnSort(t) {
            this.selectAllRowsOnPage &&
              ((this.selected = []),
              this.select.emit({
                selected: this.selected,
              })),
              (this.sorts = t.sorts),
              !1 === this.externalSorting && this.sortInternalRows(),
              (this._internalRows = I(
                this._internalRows,
                O(this.treeFromRelation),
                O(this.treeToRelation)
              )),
              (this.offset = 0),
              this.bodyComponent.updateOffsetY(this.offset),
              this.sort.emit(t);
          }
          onHeaderSelect(t) {
            if (this.selectAllRowsOnPage) {
              const t = this.bodyComponent.indexes.first,
                n = this.bodyComponent.indexes.last,
                l = this.selected.length === n - t;
              (this.selected = []),
                l || this.selected.push(...this._internalRows.slice(t, n));
            } else {
              const t = this.selected.length === this.rows.length;
              (this.selected = []), t || this.selected.push(...this.rows);
            }
            this.select.emit({
              selected: this.selected,
            });
          }
          onBodySelect(t) {
            this.select.emit(t);
          }
          onTreeAction(t) {
            const n = t.row,
              l = this._rows.findIndex(
                (n) => n[this.treeToRelation] === t.row[this.treeToRelation]
              );
            this.treeAction.emit({
              row: n,
              rowIndex: l,
            });
          }
          ngOnDestroy() {
            this._subscriptions.forEach((t) => t.unsubscribe());
          }
          listenForColumnInputChanges() {
            this._subscriptions.push(
              this.columnChangesService.columnInputChanges$.subscribe(() => {
                this.columnTemplates && this.columnTemplates.notifyOnChanges();
              })
            );
          }
          sortInternalRows() {
            this._internalRows = (function (t, n, l) {
              if (!t) return [];
              if (!l || !l.length || !n) return [...t];
              const e = new Map();
              t.forEach((t, n) => e.set(t, n));
              const i = [...t],
                s = n.reduce(
                  (t, n) => (
                    n.comparator &&
                      "function" == typeof n.comparator &&
                      (t[n.prop] = n.comparator),
                    t
                  ),
                  {}
                ),
                o = l.map((t) => {
                  const n = t.prop;
                  return {
                    prop: n,
                    dir: t.dir,
                    valueGetter: P(n),
                    compareFn: s[n] || ut,
                  };
                });
              return i.sort(function (t, n) {
                for (const l of o) {
                  const { prop: e, valueGetter: i } = l,
                    s = i(t, e),
                    o = i(n, e),
                    a =
                      l.dir !== at.desc
                        ? l.compareFn(s, o, t, n, l.dir)
                        : -l.compareFn(s, o, t, n, l.dir);
                  if (0 !== a) return a;
                }
                return e.has(t) && e.has(n)
                  ? e.get(t) < e.get(n)
                    ? -1
                    : 1
                  : 0;
              });
            })(this._internalRows, this._internalColumns, this.sorts);
          }
        }
        return (
          Object(u.__decorate)(
            [
              it(5),
              Object(u.__metadata)("design:type", Function),
              Object(u.__metadata)("design:paramtypes", []),
              Object(u.__metadata)("design:returntype", void 0),
            ],
            t.prototype,
            "onWindowResize",
            null
          ),
          t
        );
      })();
      class ct {
        constructor(t) {
          (this.cd = t),
            (this.sort = new e.m()),
            (this.select = new e.m()),
            (this.columnContextmenu = new e.m(!1)),
            (this.sortFn = this.onSort.bind(this)),
            (this.selectFn = this.select.emit.bind(this.select)),
            (this.cellContext = {
              column: this.column,
              sortDir: this.sortDir,
              sortFn: this.sortFn,
              allRowsSelected: this.allRowsSelected,
              selectFn: this.selectFn,
            });
        }
        set allRowsSelected(t) {
          (this._allRowsSelected = t), (this.cellContext.allRowsSelected = t);
        }
        get allRowsSelected() {
          return this._allRowsSelected;
        }
        set column(t) {
          (this._column = t),
            (this.cellContext.column = t),
            this.cd.markForCheck();
        }
        get column() {
          return this._column;
        }
        set sorts(t) {
          (this._sorts = t),
            (this.sortDir = this.calcSortDir(t)),
            (this.cellContext.sortDir = this.sortDir),
            (this.sortClass = this.calcSortClass(this.sortDir)),
            this.cd.markForCheck();
        }
        get sorts() {
          return this._sorts;
        }
        get columnCssClasses() {
          let t = "datatable-header-cell";
          if (
            (this.column.sortable && (t += " sortable"),
            this.column.resizeable && (t += " resizeable"),
            this.column.headerClass)
          )
            if ("string" == typeof this.column.headerClass)
              t += " " + this.column.headerClass;
            else if ("function" == typeof this.column.headerClass) {
              const n = this.column.headerClass({
                column: this.column,
              });
              if ("string" == typeof n) t += n;
              else if ("object" == typeof n) {
                const l = Object.keys(n);
                for (const e of l) !0 === n[e] && (t += ` ${e}`);
              }
            }
          const n = this.sortDir;
          return n && (t += ` sort-active sort-${n}`), t;
        }
        get name() {
          return void 0 === this.column.headerTemplate
            ? this.column.name
            : void 0;
        }
        get minWidth() {
          return this.column.minWidth;
        }
        get maxWidth() {
          return this.column.maxWidth;
        }
        get width() {
          return this.column.width;
        }
        get isCheckboxable() {
          return (
            this.column.checkboxable &&
            this.column.headerCheckboxable &&
            this.selectionType === E.checkbox
          );
        }
        onContextmenu(t) {
          this.columnContextmenu.emit({
            event: t,
            column: this.column,
          });
        }
        calcSortDir(t) {
          if (t && this.column) {
            const n = t.find((t) => t.prop === this.column.prop);
            if (n) return n.dir;
          }
        }
        onSort() {
          if (!this.column.sortable) return;
          const t =
            ((n = this.sortDir),
            this.sortType === L.single
              ? n === at.asc
                ? at.desc
                : at.asc
              : n
              ? n === at.asc
                ? at.desc
                : void 0
              : at.asc);
          var n;
          this.sort.emit({
            column: this.column,
            prevValue: this.sortDir,
            newValue: t,
          });
        }
        calcSortClass(t) {
          return t === at.asc
            ? `sort-btn sort-asc ${this.sortAscendingIcon}`
            : t === at.desc
            ? `sort-btn sort-desc ${this.sortDescendingIcon}`
            : "sort-btn";
        }
      }
      class ht {
        constructor() {
          (this.selectedCount = 0), (this.page = new e.m());
        }
        get isVisible() {
          return this.rowCount / this.pageSize > 1;
        }
        get curPage() {
          return this.offset + 1;
        }
      }
      class gt {
        constructor() {
          (this.change = new e.m()),
            (this._count = 0),
            (this._page = 1),
            (this._size = 0);
        }
        set size(t) {
          (this._size = t), (this.pages = this.calcPages());
        }
        get size() {
          return this._size;
        }
        set count(t) {
          (this._count = t), (this.pages = this.calcPages());
        }
        get count() {
          return this._count;
        }
        set page(t) {
          (this._page = t), (this.pages = this.calcPages());
        }
        get page() {
          return this._page;
        }
        get totalPages() {
          const t = this.size < 1 ? 1 : Math.ceil(this.count / this.size);
          return Math.max(t || 0, 1);
        }
        canPrevious() {
          return this.page > 1;
        }
        canNext() {
          return this.page < this.totalPages;
        }
        prevPage() {
          this.selectPage(this.page - 1);
        }
        nextPage() {
          this.selectPage(this.page + 1);
        }
        selectPage(t) {
          t > 0 &&
            t <= this.totalPages &&
            t !== this.page &&
            ((this.page = t),
            this.change.emit({
              page: t,
            }));
        }
        calcPages(t) {
          const n = [];
          let l = 1,
            e = this.totalPages;
          (t = t || this.page),
            5 < this.totalPages &&
              ((l = t - Math.floor(2.5)),
              (e = t + Math.floor(2.5)),
              l < 1
                ? ((l = 1), (e = Math.min(l + 5 - 1, this.totalPages)))
                : e > this.totalPages &&
                  ((l = Math.max(this.totalPages - 5 + 1, 1)),
                  (e = this.totalPages)));
          for (let i = l; i <= e; i++)
            n.push({
              number: i,
              text: i,
            });
          return n;
        }
      }
      class bt {}
      const dt = (function () {
        var t = {
          up: 38,
          down: 40,
          return: 13,
          escape: 27,
          left: 37,
          right: 39,
        };
        return (
          (t[t.up] = "up"),
          (t[t.down] = "down"),
          (t[t.return] = "return"),
          (t[t.escape] = "escape"),
          (t[t.left] = "left"),
          (t[t.right] = "right"),
          t
        );
      })();
      class pt {
        constructor(t, n, l, i) {
          (this.differs = t),
            (this.scrollbarHelper = n),
            (this.cd = l),
            (this.treeStatus = "collapsed"),
            (this.activate = new e.m()),
            (this.treeAction = new e.m()),
            (this._groupStyles = {
              left: {},
              center: {},
              right: {},
            }),
            (this._element = i.nativeElement),
            (this._rowDiffer = t.find({}).create());
        }
        set columns(t) {
          (this._columns = t),
            this.recalculateColumns(t),
            this.buildStylesByGroup();
        }
        get columns() {
          return this._columns;
        }
        set innerWidth(t) {
          if (this._columns) {
            const t = B(this._columns);
            this._columnGroupWidths = U(t, this._columns);
          }
          (this._innerWidth = t),
            this.recalculateColumns(),
            this.buildStylesByGroup();
        }
        get innerWidth() {
          return this._innerWidth;
        }
        set offsetX(t) {
          (this._offsetX = t), this.buildStylesByGroup();
        }
        get offsetX() {
          return this._offsetX;
        }
        get cssClass() {
          let t = "datatable-body-row";
          if (
            (this.isSelected && (t += " active"),
            this.rowIndex % 2 != 0 && (t += " datatable-row-odd"),
            this.rowIndex % 2 == 0 && (t += " datatable-row-even"),
            this.rowClass)
          ) {
            const n = this.rowClass(this.row);
            if ("string" == typeof n) t += ` ${n}`;
            else if ("object" == typeof n) {
              const l = Object.keys(n);
              for (const e of l) !0 === n[e] && (t += ` ${e}`);
            }
          }
          return t;
        }
        get columnsTotalWidths() {
          return this._columnGroupWidths.total;
        }
        ngDoCheck() {
          this._rowDiffer.diff(this.row) && this.cd.markForCheck();
        }
        trackByGroups(t, n) {
          return n.type;
        }
        columnTrackingFn(t, n) {
          return n.$$id;
        }
        buildStylesByGroup() {
          (this._groupStyles.left = this.calcStylesByGroup("left")),
            (this._groupStyles.center = this.calcStylesByGroup("center")),
            (this._groupStyles.right = this.calcStylesByGroup("right")),
            this.cd.markForCheck();
        }
        calcStylesByGroup(t) {
          const n = this._columnGroupWidths,
            l = this.offsetX,
            e = {
              width: `${n[t]}px`,
            };
          if ("left" === t) tt(e, l, 0);
          else if ("right" === t) {
            const t = parseInt(this.innerWidth + "", 0);
            tt(e, -1 * (n.total - t - l + this.scrollbarHelper.width), 0);
          }
          return e;
        }
        onActivate(t, n) {
          (t.cellIndex = n),
            (t.rowElement = this._element),
            this.activate.emit(t);
        }
        onKeyDown(t) {
          const n = t.keyCode;
          (n === dt.return ||
            n === dt.down ||
            n === dt.up ||
            n === dt.left ||
            n === dt.right) &&
            t.target === this._element &&
            (t.preventDefault(),
            t.stopPropagation(),
            this.activate.emit({
              type: "keydown",
              event: t,
              row: this.row,
              rowElement: this._element,
            }));
        }
        onMouseenter(t) {
          this.activate.emit({
            type: "mouseenter",
            event: t,
            row: this.row,
            rowElement: this._element,
          });
        }
        recalculateColumns(t = this.columns) {
          this._columns = t;
          const n = B(this._columns);
          (this._columnsByPin = F(this._columns)),
            (this._columnGroupWidths = U(n, this._columns));
        }
        onTreeAction() {
          this.treeAction.emit();
        }
      }
      class mt {
        constructor(t, n) {
          (this.cd = t),
            (this.differs = n),
            (this.rowContextmenu = new e.m(!1)),
            (this.groupContext = {
              group: this.row,
              expanded: this.expanded,
              rowIndex: this.rowIndex,
            }),
            (this.rowContext = {
              row: this.row,
              expanded: this.expanded,
              rowIndex: this.rowIndex,
            }),
            (this._expanded = !1),
            (this.rowDiffer = n.find({}).create());
        }
        set rowIndex(t) {
          (this._rowIndex = t),
            (this.rowContext.rowIndex = t),
            (this.groupContext.rowIndex = t),
            this.cd.markForCheck();
        }
        get rowIndex() {
          return this._rowIndex;
        }
        set expanded(t) {
          (this._expanded = t),
            (this.groupContext.expanded = t),
            (this.rowContext.expanded = t),
            this.cd.markForCheck();
        }
        get expanded() {
          return this._expanded;
        }
        ngDoCheck() {
          this.rowDiffer.diff(this.row) &&
            ((this.rowContext.row = this.row),
            (this.groupContext.group = this.row),
            this.cd.markForCheck());
        }
        onContextmenu(t) {
          this.rowContextmenu.emit({
            event: t,
            row: this.row,
          });
        }
        getGroupHeaderStyle() {
          const t = {};
          return (
            (t.transform = "translate3d(" + this.offsetX + "px, 0px, 0px)"),
            (t["backface-visibility"] = "hidden"),
            (t.width = this.innerWidth),
            t
          );
        }
      }
      class ft {
        constructor(t, n) {
          (this.cd = n),
            (this.activate = new e.m()),
            (this.treeAction = new e.m()),
            (this.isFocused = !1),
            (this.onCheckboxChangeFn = this.onCheckboxChange.bind(this)),
            (this.activateFn = this.activate.emit.bind(this.activate)),
            (this.cellContext = {
              onCheckboxChangeFn: this.onCheckboxChangeFn,
              activateFn: this.activateFn,
              row: this.row,
              group: this.group,
              value: this.value,
              column: this.column,
              rowHeight: this.rowHeight,
              isSelected: this.isSelected,
              rowIndex: this.rowIndex,
              treeStatus: this.treeStatus,
              onTreeAction: this.onTreeAction.bind(this),
            }),
            (this._element = t.nativeElement);
        }
        set group(t) {
          (this._group = t),
            (this.cellContext.group = t),
            this.checkValueUpdates(),
            this.cd.markForCheck();
        }
        get group() {
          return this._group;
        }
        set rowHeight(t) {
          (this._rowHeight = t),
            (this.cellContext.rowHeight = t),
            this.checkValueUpdates(),
            this.cd.markForCheck();
        }
        get rowHeight() {
          return this._rowHeight;
        }
        set isSelected(t) {
          (this._isSelected = t),
            (this.cellContext.isSelected = t),
            this.cd.markForCheck();
        }
        get isSelected() {
          return this._isSelected;
        }
        set expanded(t) {
          (this._expanded = t),
            (this.cellContext.expanded = t),
            this.cd.markForCheck();
        }
        get expanded() {
          return this._expanded;
        }
        set rowIndex(t) {
          (this._rowIndex = t),
            (this.cellContext.rowIndex = t),
            this.checkValueUpdates(),
            this.cd.markForCheck();
        }
        get rowIndex() {
          return this._rowIndex;
        }
        set column(t) {
          (this._column = t),
            (this.cellContext.column = t),
            this.checkValueUpdates(),
            this.cd.markForCheck();
        }
        get column() {
          return this._column;
        }
        set row(t) {
          (this._row = t),
            (this.cellContext.row = t),
            this.checkValueUpdates(),
            this.cd.markForCheck();
        }
        get row() {
          return this._row;
        }
        set sorts(t) {
          (this._sorts = t), (this.calcSortDir = this.calcSortDir(t));
        }
        get sorts() {
          return this._sorts;
        }
        set treeStatus(t) {
          (this._treeStatus =
            "collapsed" !== t &&
            "expanded" !== t &&
            "loading" !== t &&
            "disabled" !== t
              ? "collapsed"
              : t),
            (this.cellContext.treeStatus = this._treeStatus),
            this.checkValueUpdates(),
            this.cd.markForCheck();
        }
        get treeStatus() {
          return this._treeStatus;
        }
        get columnCssClasses() {
          let t = "datatable-body-cell";
          if (this.column.cellClass)
            if ("string" == typeof this.column.cellClass)
              t += " " + this.column.cellClass;
            else if ("function" == typeof this.column.cellClass) {
              const n = this.column.cellClass({
                row: this.row,
                group: this.group,
                column: this.column,
                value: this.value,
                rowHeight: this.rowHeight,
              });
              if ("string" == typeof n) t += n;
              else if ("object" == typeof n) {
                const l = Object.keys(n);
                for (const e of l) !0 === n[e] && (t += ` ${e}`);
              }
            }
          return (
            this.sortDir || (t += " sort-active"),
            this.isFocused && (t += " active"),
            this.sortDir === at.asc && (t += " sort-asc"),
            this.sortDir === at.desc && (t += " sort-desc"),
            t
          );
        }
        get width() {
          return this.column.width;
        }
        get minWidth() {
          return this.column.minWidth;
        }
        get maxWidth() {
          return this.column.maxWidth;
        }
        get height() {
          const t = this.rowHeight;
          return isNaN(t) ? t : t + "px";
        }
        ngDoCheck() {
          this.checkValueUpdates();
        }
        ngOnDestroy() {
          this.cellTemplate && this.cellTemplate.clear();
        }
        checkValueUpdates() {
          let t = "";
          if (this.row && this.column) {
            const n = this.column.$$valueGetter(this.row, this.column.prop),
              l = this.column.pipe;
            l ? (t = l.transform(n)) : void 0 !== t && (t = n);
          } else t = "";
          this.value !== t &&
            ((this.value = t),
            (this.cellContext.value = t),
            (this.sanitizedValue = null != t ? this.stripHtml(t) : t),
            this.cd.markForCheck());
        }
        onFocus() {
          this.isFocused = !0;
        }
        onBlur() {
          this.isFocused = !1;
        }
        onClick(t) {
          this.activate.emit({
            type: "click",
            event: t,
            row: this.row,
            group: this.group,
            rowHeight: this.rowHeight,
            column: this.column,
            value: this.value,
            cellElement: this._element,
          });
        }
        onDblClick(t) {
          this.activate.emit({
            type: "dblclick",
            event: t,
            row: this.row,
            group: this.group,
            rowHeight: this.rowHeight,
            column: this.column,
            value: this.value,
            cellElement: this._element,
          });
        }
        onKeyDown(t) {
          const n = t.keyCode;
          (n === dt.return ||
            n === dt.down ||
            n === dt.up ||
            n === dt.left ||
            n === dt.right) &&
            t.target === this._element &&
            (t.preventDefault(),
            t.stopPropagation(),
            this.activate.emit({
              type: "keydown",
              event: t,
              row: this.row,
              group: this.group,
              rowHeight: this.rowHeight,
              column: this.column,
              value: this.value,
              cellElement: this._element,
            }));
        }
        onCheckboxChange(t) {
          this.activate.emit({
            type: "checkbox",
            event: t,
            row: this.row,
            group: this.group,
            rowHeight: this.rowHeight,
            column: this.column,
            value: this.value,
            cellElement: this._element,
            treeStatus: "collapsed",
          });
        }
        calcSortDir(t) {
          if (!t) return;
          const n = t.find((t) => t.prop === this.column.prop);
          return n ? n.dir : void 0;
        }
        stripHtml(t) {
          return t.replace ? t.replace(/<\/?[^>]+(>|$)/g, "") : t;
        }
        onTreeAction() {
          this.treeAction.emit(this.row);
        }
        calcLeftMargin(t, n) {
          return t.isTreeColumn
            ? n.level * (null != t.treeLevelIndent ? t.treeLevelIndent : 50)
            : 0;
        }
      }
      function Ct(t, n, l) {
        const e = l(n, t);
        return e > -1 ? t.splice(e, 1) : t.push(n), t;
      }
      class vt {
        constructor() {
          (this.activate = new e.m()), (this.select = new e.m());
        }
        selectRow(t, n, l) {
          if (!this.selectEnabled) return;
          const e = this.selectionType === E.checkbox,
            i = this.selectionType === E.multiClick;
          let s = [];
          (s =
            this.selectionType === E.multi || e || i
              ? t.shiftKey
                ? (function (t, n, l, e, i) {
                    const s = l < e;
                    for (let o = 0; o < n.length; o++) {
                      const i = n[o],
                        a = o >= e && o <= l,
                        u = o <= e && o >= l;
                      let r = {
                        start: 0,
                        end: 0,
                      };
                      (r = s
                        ? {
                            start: l,
                            end: e,
                          }
                        : {
                            start: e,
                            end: l + 1,
                          }),
                        ((s && u) || (!s && a)) &&
                          o >= r.start &&
                          o <= r.end &&
                          t.push(i);
                    }
                    return t;
                  })(
                    [],
                    this.rows,
                    n,
                    this.prevIndex,
                    this.getRowSelectedIdx.bind(this)
                  )
                : Ct(
                    t.ctrlKey || t.metaKey || i || e ? [...this.selected] : [],
                    l,
                    this.getRowSelectedIdx.bind(this)
                  )
              : Ct([], l, this.getRowSelectedIdx.bind(this))),
            "function" == typeof this.selectCheck &&
              (s = s.filter(this.selectCheck.bind(this))),
            this.selected.splice(0, this.selected.length),
            this.selected.push(...s),
            (this.prevIndex = n),
            this.select.emit({
              selected: s,
            });
        }
        onActivate(t, n) {
          const { type: l, event: e, row: i } = t,
            s = this.selectionType === E.checkbox;
          (!s && ("click" === l || "dblclick" === l)) || (s && "checkbox" === l)
            ? this.selectRow(e, n, i)
            : "keydown" === l &&
              (e.keyCode === dt.return
                ? this.selectRow(e, n, i)
                : this.onKeyboardFocus(t)),
            this.activate.emit(t);
        }
        onKeyboardFocus(t) {
          const { keyCode: n } = t.event;
          if (n === dt.up || n === dt.down || n === dt.right || n === dt.left) {
            const l = this.selectionType === E.cell;
            t.cellElement && l
              ? l && this.focusCell(t.cellElement, t.rowElement, n, t.cellIndex)
              : this.focusRow(t.rowElement, n);
          }
        }
        focusRow(t, n) {
          const l = this.getPrevNextRow(t, n);
          l && l.focus();
        }
        getPrevNextRow(t, n) {
          const l = t.parentElement;
          if (l) {
            let t;
            if (
              (n === dt.up
                ? (t = l.previousElementSibling)
                : n === dt.down && (t = l.nextElementSibling),
              t && t.children.length)
            )
              return t.children[0];
          }
        }
        focusCell(t, n, l, e) {
          let i;
          if (l === dt.left) i = t.previousElementSibling;
          else if (l === dt.right) i = t.nextElementSibling;
          else if (l === dt.up || l === dt.down) {
            const t = this.getPrevNextRow(n, l);
            if (t) {
              const n = t.getElementsByClassName("datatable-body-cell");
              n.length && (i = n[e]);
            }
          }
          i && i.focus();
        }
        getRowSelected(t) {
          return this.getRowSelectedIdx(t, this.selected) > -1;
        }
        getRowSelectedIdx(t, n) {
          if (!n || !n.length) return -1;
          const l = this.rowIdentity(t);
          return n.findIndex((t) => this.rowIdentity(t) === l);
        }
      }
      function Pt(t) {
        const n = t.filter((t) => !!t);
        return n.length
          ? n.some((t) => "number" != typeof t)
            ? null
            : n.reduce((t, n) => t + n)
          : null;
      }
      function wt(t) {
        return null;
      }
      class xt {
        constructor() {
          this.summaryRow = {};
        }
        ngOnChanges() {
          this.columns &&
            this.rows &&
            (this.updateInternalColumns(), this.updateValues());
        }
        updateInternalColumns() {
          this._internalColumns = this.columns.map((t) =>
            Object.assign({}, t, {
              cellTemplate: t.summaryTemplate,
            })
          );
        }
        updateValues() {
          (this.summaryRow = {}),
            this.columns
              .filter((t) => !t.summaryTemplate)
              .forEach((t) => {
                const n = this.rows.map((n) => n[t.prop]),
                  l = this.getSummaryFunction(t);
                this.summaryRow[t.prop] = t.pipe
                  ? t.pipe.transform(l(n))
                  : l(n);
              });
        }
        getSummaryFunction(t) {
          return void 0 === t.summaryFunc
            ? Pt
            : null === t.summaryFunc
            ? wt
            : t.summaryFunc;
        }
      }
      class yt {
        static forRoot(t) {
          return {
            ngModule: yt,
            providers: [
              {
                provide: "configuration",
                useValue: t,
              },
            ],
          };
        }
      }
      "undefined" == typeof document ||
        document.elementsFromPoint ||
        (document.elementsFromPoint = function (t, n) {
          const l = [],
            e = [];
          let i, s, o;
          for (
            ;
            (i = document.elementFromPoint(t, n)) &&
            -1 === l.indexOf(i) &&
            null != i;

          )
            l.push(i),
              e.push({
                value: i.style.getPropertyValue("pointer-events"),
                priority: i.style.getPropertyPriority("pointer-events"),
              }),
              i.style.setProperty("pointer-events", "none", "important");
          for (s = e.length; (o = e[--s]); )
            l[s].style.setProperty(
              "pointer-events",
              o.value ? o.value : "",
              o.priority
            );
          return l;
        });
    },
    xUL4: function (t, n, l) {
      "use strict";
      l.d(n, "a", function () {
        return e;
      });
      class e {
        transform(t, n) {
          return "true" === localStorage.getItem("showRoundOffStake")
            ? ((l =
                (t = t.replace("+", "")) >= 1e5 && (t / 1e5) % 1 == 0
                  ? t / 1e5 + "L"
                  : t),
              (l = "show" == n ? l : "+" + l))
            : t;
          var l;
        }
      }
    },
    yGlg: function (t, n, l) {
      "use strict";
      var e = l("8Y7J"),
        i = l("SVse"),
        s = l("TSSN"),
        o = l("B7Bj"),
        a = l("TYxm"),
        u = l("s7LF"),
        r = l("bjj0"),
        c = l("wbXM"),
        h = l("igOe"),
        g = l("t544"),
        b = l("Mgfr"),
        d = l("c0u9"),
        p = l("m8nl"),
        m = l("ddrE"),
        f = l("RKmM"),
        C = l("GVaW"),
        v = l("alQF"),
        P = l("cWJh"),
        w = l("iInd"),
        x = l("TStJ"),
        y = l("I/2j"),
        O = l("5ORc"),
        I = l("3xeB"),
        M = l("5atK"),
        S = l("/p2d"),
        _ = l("dQhM");
      l("kyFz");
      class j extends _.a {
        constructor(t, n, l, e, i, s) {
          super(t, n, l, e, i, s),
            (this.service = t),
            (this.object = n),
            (this.broadCast = l),
            (this.activatedRoute = e),
            (this.router = i),
            (this.firebase = s),
            this.init();
        }
        ngOnInit() {}
        ngOnDestroy() {
          this.unsubscribeAccountDetails &&
            this.unsubscribeAccountDetails.unsubscribe();
        }
      }
      var A = e.ob({
        encapsulation: 0,
        styles: [
          [
            ".sportsEvent[_ngcontent-%COMP%]{cursor:pointer}.sportsEvent[_ngcontent-%COMP%]:hover{text-decoration:underline}",
          ],
        ],
        data: {},
      });
      function E(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(0, 0, null, null, 9, "tr", [], null, null, null, null, null)),
            (t()(),
            e.qb(
              1,
              0,
              null,
              null,
              4,
              "td",
              [],
              null,
              [[null, "click"]],
              function (t, n, l) {
                var e = !0;
                return (
                  "click" === n &&
                    (e =
                      !1 !== t.component.nevigateToEvent(t.context.$implicit) &&
                      e),
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
            (t()(),
            e.qb(
              4,
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
            (t()(), e.Kb(5, null, ["", ""])),
            (t()(),
            e.qb(6, 0, null, null, 3, "td", [], null, null, null, null, null)),
            (t()(),
            e.qb(
              7,
              0,
              null,
              null,
              2,
              "span",
              [["style", "color: red;"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(8, null, ["", ""])),
            e.Gb(9, 1),
          ],
          function (t, n) {
            var l =
              null != n.context.$implicit &&
              n.context.$implicit.eventName.includes(" v ")
                ? "sportsEvent"
                : "";
            t(n, 3, 0, l);
          },
          function (t, n) {
            t(
              n,
              5,
              0,
              null == n.context.$implicit ? null : n.context.$implicit.eventName
            );
            var l = e.Lb(
              n,
              8,
              0,
              t(n, 9, 0, e.Cb(n.parent, 0), n.context.$implicit.expSum)
            );
            t(n, 8, 0, l);
          }
        );
      }
      function L(t) {
        return e.Mb(
          0,
          [
            e.Eb(0, d.a, []),
            e.Ib(671088640, 1, {
              completer: 0,
            }),
            (t()(),
            e.qb(
              2,
              0,
              null,
              null,
              23,
              "div",
              [
                ["aria-hidden", "true"],
                ["aria-labelledby", "admin-add-user"],
                ["class", "modal fade"],
                ["id", "exposure-details"],
                ["role", "dialog"],
                ["tabindex", "-1"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              3,
              0,
              null,
              null,
              22,
              "div",
              [
                ["class", "modal-dialog"],
                ["role", "document"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              4,
              0,
              null,
              null,
              21,
              "div",
              [["class", "modal-content"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              5,
              0,
              null,
              null,
              6,
              "div",
              [["class", "modal-header"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              6,
              0,
              null,
              null,
              2,
              "button",
              [
                ["aria-label", "Close"],
                ["class", "close"],
                ["data-dismiss", "modal"],
                ["type", "button"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              7,
              0,
              null,
              null,
              1,
              "span",
              [["aria-hidden", "true"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(-1, null, ["\xd7"])),
            (t()(),
            e.qb(
              9,
              0,
              null,
              null,
              2,
              "h4",
              [
                ["class", "modal-title"],
                ["id", "myModalLabel"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(10, null, [" ", " "])),
            e.Eb(131072, s.j, [s.k, e.h]),
            (t()(),
            e.qb(
              12,
              0,
              null,
              null,
              13,
              "div",
              [["class", "modal-body"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              13,
              0,
              null,
              null,
              12,
              "div",
              [["class", "table-transferred"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              14,
              0,
              null,
              null,
              11,
              "table",
              [["class", "table table-striped"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              15,
              0,
              null,
              null,
              7,
              "thead",
              [["class", "table-header"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(16, 0, null, null, 6, "tr", [], null, null, null, null, null)),
            (t()(),
            e.qb(
              17,
              0,
              null,
              null,
              2,
              "th",
              [["style", "color: #fff;"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(18, null, ["", ""])),
            e.Eb(131072, s.j, [s.k, e.h]),
            (t()(),
            e.qb(
              20,
              0,
              null,
              null,
              2,
              "th",
              [["style", "color: #fff;"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(21, null, ["", ""])),
            e.Eb(131072, s.j, [s.k, e.h]),
            (t()(),
            e.qb(
              23,
              0,
              null,
              null,
              2,
              "tbody",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.fb(16777216, null, null, 1, null, E)),
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
          ],
          function (t, n) {
            t(n, 25, 0, n.component.exposureDetailsList);
          },
          function (t, n) {
            t(
              n,
              10,
              0,
              e.Lb(n, 10, 0, e.Cb(n, 11).transform("Exposure Details"))
            ),
              t(n, 18, 0, e.Lb(n, 18, 0, e.Cb(n, 19).transform("Events Name"))),
              t(n, 21, 0, e.Lb(n, 21, 0, e.Cb(n, 22).transform("Exposure")));
          }
        );
      }
      var D = l("w9WL");
      class k {
        constructor(t, n, l, e) {
          (this.ref = t),
            (this.router = n),
            (this.object = l),
            (this.broadCast = e),
            (this.ColumnMode = D.b),
            (this.betObj = {
              date: "",
              gtype: this.object.getConstants().PNL.SPORTS,
              tab: 4,
              eventTypeName: "",
            });
        }
        NavigateToBetHistory(t) {
          if (
            ((this.betObj.eventTypeName = t.eventTypeName
              ? t.eventTypeName
              : "All"),
            t.marketPnls.length > 0)
          ) {
            var n = new Date(1970, 0, 1),
              l = new Date(1970, 0, 1),
              e = new Date(1970, 0, 1),
              i = new Date(1970, 0, 1);
            let s, o, a, u, r, c, h, g, b, d, p, m, f, C, v, P;
            t.eventAdded &&
              t.eventSettled &&
              (n.setSeconds(t.eventAdded.seconds),
              l.setSeconds(t.eventSettled.seconds)),
              i.setSeconds(t.marketPnls[0].placedDate.seconds),
              e.setSeconds(
                t.marketPnls[t.marketPnls.length - 1].placedDate.seconds
              ),
              (f = e.toISOString().substring(0, 10)),
              (C = i.toISOString().substring(0, 10)),
              t.eventAdded &&
                t.eventSettled &&
                ((v = n.toISOString().substring(0, 10)),
                (P = l.toISOString().substring(0, 10)),
                (h =
                  1 == v.split("-")[2].length
                    ? "0" + v.split("-")[2] + "/"
                    : v.split("-")[2] + "/"),
                (g =
                  1 == v.split("-")[1].length
                    ? "0" + v.split("-")[1] + "/"
                    : v.split("-")[1] + "/"),
                (b = v.split("-")[0]),
                (d =
                  1 == P.split("-")[2].length
                    ? "0" + P.split("-")[2] + "/"
                    : P.split("-")[2] + "/"),
                (p =
                  1 == v.split("-")[1].length
                    ? "0" + P.split("-")[1] + "/"
                    : P.split("-")[1] + "/"),
                (m = P.split("-")[0])),
              (s =
                1 == f.split("-")[2].length
                  ? "0" + f.split("-")[2] + "/"
                  : f.split("-")[2] + "/"),
              (o =
                1 == f.split("-")[1].length
                  ? "0" + f.split("-")[1] + "/"
                  : f.split("-")[1] + "/"),
              (a = f.split("-")[0]),
              (u =
                1 == C.split("-")[2].length
                  ? "0" + C.split("-")[2] + "/"
                  : C.split("-")[2] + "/"),
              (r =
                1 == C.split("-")[1].length
                  ? "0" + C.split("-")[1] + "/"
                  : C.split("-")[1] + "/"),
              (c = C.split("-")[0]),
              (this.betObj.date =
                t.eventAdded && t.eventSettled
                  ? h + g + b + " 00:00 - " + d + p + m + " 23:59"
                  : s + o + a + " 00:00 - " + u + r + c + " 23:59"),
              this.object
                .getUtilInstance()
                .storeState("betObj", JSON.stringify(this.betObj));
          }
          this.object.mobileRoute ||
            this.broadCast.broadcast(
              this.object.getConstants().BROADCASTKEY.NOTIFICATION,
              {
                isclicked: !0,
              }
            ),
            this.router.navigate(["/profile/bet-history"]);
        }
        ngOnInit() {}
      }
      var R = e.ob({
        encapsulation: 0,
        styles: [
          [
            ".red[_ngcontent-%COMP%]{color:red}.green[_ngcontent-%COMP%]{color:green}datatable-body[_ngcontent-%COMP%], datatable-footer[_ngcontent-%COMP%], ngx-datatable[_ngcontent-%COMP%]:datatable-header{width:auto!important}.sort-btn[_ngcontent-%COMP%]{display:none!important}.ngx-datatable.scroll-vertical[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]{overflow-x:hidden}datatable-body-cell[_ngcontent-%COMP%]:nth-child(2), datatable-header-cell[_ngcontent-%COMP%]:nth-child(2){text-align:right!important}table[_ngcontent-%COMP%]{margin-bottom:0}.table-stripedscroll[_ngcontent-%COMP%]{display:block;overflow-x:scroll;white-space:nowrap;width:100%}.saveedit[_ngcontent-%COMP%]{display:block;padding:5px 20px;border:none;background:#f9ab1b;text-transform:capitalize;border-radius:4px;margin:4px 15px;color:#fff}",
          ],
        ],
        data: {},
      });
      function N(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(
              0,
              0,
              null,
              null,
              10,
              "tr",
              [["style", "width:100%;     float: left;"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              1,
              0,
              null,
              null,
              3,
              "td",
              [
                ["style", "float: left;"],
                ["width", "50%"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
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
            (t()(), e.Kb(3, null, ["", ""])),
            e.Gb(4, 1),
            (t()(),
            e.qb(
              5,
              0,
              null,
              null,
              5,
              "td",
              [
                ["style", "float: left;"],
                ["width", "50%"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
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
            e.Hb(512, null, i.A, i.B, [e.q, e.r, e.k, e.B]),
            e.pb(
              8,
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
            (t()(), e.Kb(9, null, [" ", ""])),
            e.Gb(10, 1),
          ],
          function (t, n) {
            t(
              n,
              8,
              0,
              (null == n.context.$implicit
                ? null
                : n.context.$implicit.profitNLose) > 0
                ? "green"
                : null ==
                  (null == n.context.$implicit
                    ? null
                    : n.context.$implicit.profitNLose)
                ? ""
                : 0 ==
                  (null == n.context.$implicit
                    ? null
                    : n.context.$implicit.profitNLose)
                ? ""
                : "red"
            );
          },
          function (t, n) {
            var l =
              null != n.context.$implicit && n.context.$implicit.marketName
                ? "match_odds" ==
                  (null == n.context.$implicit
                    ? null
                    : n.context.$implicit.marketName.toLowerCase())
                  ? e
                      .Lb(
                        n,
                        3,
                        0,
                        t(
                          n,
                          4,
                          0,
                          e.Cb(n.parent, 0),
                          null == n.context.$implicit
                            ? null
                            : n.context.$implicit.marketName.toLowerCase()
                        )
                      )
                      .replace("_", " ")
                  : null == n.context.$implicit
                  ? null
                  : n.context.$implicit.marketName
                : "";
            t(n, 3, 0, l);
            var i = e.Lb(
              n,
              9,
              0,
              t(
                n,
                10,
                0,
                e.Cb(n.parent, 1),
                null == n.context.$implicit
                  ? null
                  : n.context.$implicit.profitNLose
              )
            );
            t(n, 9, 0, i);
          }
        );
      }
      function T(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(
              0,
              0,
              null,
              null,
              1,
              "th",
              [
                ["colspan", "1"],
                ["style", "text-align: right;"],
                ["width", "50%"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(-1, null, ["Win :"])),
          ],
          null,
          null
        );
      }
      function q(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(
              0,
              0,
              null,
              null,
              1,
              "th",
              [
                ["colspan", "1"],
                ["style", "text-align: right;"],
                ["width", "50%"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(-1, null, ["Loss :"])),
          ],
          null,
          null
        );
      }
      function B(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(
              0,
              0,
              null,
              null,
              1,
              "th",
              [
                ["colspan", "1"],
                ["style", "text-align: right;"],
                ["width", "50%"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(-1, null, ["Total :"])),
          ],
          null,
          null
        );
      }
      function U(t) {
        return e.Mb(
          0,
          [
            e.Eb(0, i.v, []),
            e.Eb(0, d.a, []),
            (t()(),
            e.qb(
              2,
              0,
              null,
              null,
              38,
              "div",
              [
                ["aria-hidden", "true"],
                ["aria-labelledby", "admin-add-user"],
                ["class", "modal fade"],
                ["id", "notification-details"],
                ["role", "dialog"],
                ["tabindex", "-1"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              3,
              0,
              null,
              null,
              37,
              "div",
              [
                ["class", "modal-dialog"],
                ["role", "document"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              4,
              0,
              null,
              null,
              36,
              "div",
              [["class", "modal-content"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              5,
              0,
              null,
              null,
              5,
              "div",
              [["class", "modal-header"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              6,
              0,
              null,
              null,
              2,
              "button",
              [
                ["aria-label", "Close"],
                ["class", "close"],
                ["data-dismiss", "modal"],
                ["type", "button"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              7,
              0,
              null,
              null,
              1,
              "span",
              [["aria-hidden", "true"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(-1, null, ["\xd7"])),
            (t()(),
            e.qb(
              9,
              0,
              null,
              null,
              1,
              "h4",
              [
                ["class", "modal-title"],
                ["id", "myModalLabel"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(10, null, [" ", ""])),
            (t()(),
            e.qb(
              11,
              0,
              null,
              null,
              29,
              "div",
              [["class", "modal-body"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              12,
              0,
              null,
              null,
              6,
              "table",
              [["class", "table table-striped"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              13,
              0,
              null,
              null,
              5,
              "thead",
              [["class", "table-header"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(14, 0, null, null, 4, "tr", [], null, null, null, null, null)),
            (t()(),
            e.qb(
              15,
              0,
              null,
              null,
              1,
              "th",
              [
                ["style", "color: #fff;"],
                ["width", "50%"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(-1, null, ["Market Name"])),
            (t()(),
            e.qb(
              17,
              0,
              null,
              null,
              1,
              "th",
              [
                ["style", "color: #fff;"],
                ["width", "50%"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(-1, null, ["P/L"])),
            (t()(),
            e.qb(
              19,
              0,
              null,
              null,
              3,
              "table",
              [
                ["class", "table table-striped table-stripedscroll"],
                ["style", "max-height: 60vh;"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              20,
              0,
              null,
              null,
              2,
              "tbody",
              [
                [
                  "style",
                  "\n                    width: 100%;\n                    float: left;\n                ",
                ],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.fb(16777216, null, null, 1, null, N)),
            e.pb(
              22,
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
            (t()(),
            e.qb(
              23,
              0,
              null,
              null,
              17,
              "table",
              [["class", "table table-striped"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              24,
              0,
              null,
              null,
              16,
              "tfoot",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              25,
              0,
              null,
              null,
              15,
              "tr",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.fb(16777216, null, null, 1, null, T)),
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
            (t()(), e.fb(16777216, null, null, 1, null, q)),
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
            (t()(), e.fb(16777216, null, null, 1, null, B)),
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
            (t()(),
            e.qb(
              32,
              0,
              null,
              null,
              5,
              "td",
              [["width", "25%"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              33,
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
            e.Hb(512, null, i.A, i.B, [e.q, e.r, e.k, e.B]),
            e.pb(
              35,
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
            (t()(), e.Kb(36, null, [" ", " "])),
            e.Gb(37, 1),
            (t()(),
            e.qb(
              38,
              0,
              null,
              null,
              2,
              "td",
              [["width", "25%"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              39,
              0,
              null,
              null,
              1,
              "button",
              [
                ["class", "saveedit saveedit1 "],
                ["data-dismiss", "modal"],
              ],
              null,
              [[null, "click"]],
              function (t, n, l) {
                var e = !0,
                  i = t.component;
                return (
                  "click" === n &&
                    (e = !1 !== i.NavigateToBetHistory(i.notificationPnL) && e),
                  e
                );
              },
              null,
              null
            )),
            (t()(), e.Kb(-1, null, ["view bet"])),
          ],
          function (t, n) {
            var l = n.component;
            t(
              n,
              22,
              0,
              null == l.notificationPnL ? null : l.notificationPnL.marketPnls
            ),
              t(
                n,
                27,
                0,
                (null == l.notificationPnL
                  ? null
                  : l.notificationPnL.profitNLose) > 0
              ),
              t(
                n,
                29,
                0,
                (null == l.notificationPnL
                  ? null
                  : l.notificationPnL.profitNLose) < 0
              ),
              t(
                n,
                31,
                0,
                0 ==
                  (null == l.notificationPnL
                    ? null
                    : l.notificationPnL.profitNLose)
              ),
              t(
                n,
                35,
                0,
                (null == l.notificationPnL
                  ? null
                  : l.notificationPnL.profitNLose) > 0
                  ? "green"
                  : null ==
                    (null == l.notificationPnL
                      ? null
                      : l.notificationPnL.profitNLose)
                  ? ""
                  : 0 ==
                    (null == l.notificationPnL
                      ? null
                      : l.notificationPnL.profitNLose)
                  ? ""
                  : "red"
              );
          },
          function (t, n) {
            var l = n.component;
            t(
              n,
              10,
              0,
              null == l.notificationPnL ? null : l.notificationPnL.eventName
            );
            var i = e.Lb(
              n,
              36,
              0,
              t(
                n,
                37,
                0,
                e.Cb(n, 1),
                null == l.notificationPnL ? null : l.notificationPnL.profitNLose
              )
            );
            t(n, 36, 0, i);
          }
        );
      }
      var K = l("Giau"),
        F = l("OC+C"),
        G = l("la2l"),
        H = l("4uDS");
      class $ extends _.a {
        constructor(t, n, l, i, s, o, a, u) {
          super(t, n, l, i, o, a),
            (this.service = t),
            (this.object = n),
            (this.broadCast = l),
            (this.activatedRoute = i),
            (this._elementRef = s),
            (this.router = o),
            (this.fireStoreData = a),
            (this.routeParam = u),
            (this.myEvent = new e.m());
        }
        ngOnInit() {
          (this.searchName = "Search by event name"),
            this.object.onChangeEvents(),
            this.getRouteParams(),
            this.handleSelfPlayerAccountDetails(),
            this.firebaseEvent(),
            this.getBrodcasterData(),
            this.getNotification(),
            this.handleSearchEventwithoutAuth(),
            this.handleEventlistnerForSession(),
            this.getLocalStorage(),
            this.removeUnWantedSidemenuTabs();
        }
        openProfileMenu(t, n) {
          this.object.getDOMInstance().openProfileMenu(t, n);
        }
        onClick(t) {
          this._elementRef.nativeElement.contains(t) ||
            this.object
              .getDOMInstance()
              .closeProfileMenu("arrow_box", "active-box");
        }
        removeUnWantedSidemenuTabs() {
          let t = this.listData.findIndex((t) => "Bonus History" == t.title);
          -1 != t && this.listData.splice(t, 1);
        }
        ngOnDestroy() {
          this.destroySubcriberD1();
        }
      }
      var z = e.ob({
        encapsulation: 0,
        styles: [
          [
            '.tcolort[_ngcontent-%COMP%]{color:#fed120;padding:6px 10px;border-radius:4px;margin-left:5px!important}.tred[_ngcontent-%COMP%]{padding:0 6px!important;border-radius:3px;margin-right:0;color:red!important;text-decoration:none!important;margin-left:10px;font-weight:900}.negativeValue[_ngcontent-%COMP%]{color:red!important}.positiveValue[_ngcontent-%COMP%]{color:green!important}.isExch9[_ngcontent-%COMP%]{width:110px!important}.navbar-nav[_ngcontent-%COMP%]{margin:0;background-color:transparent!important}.skin-1[_ngcontent-%COMP%]   div[headerBg][_ngcontent-%COMP%]{background-color:var(--main-color)!important;border-bottom:none;height:68px}div[header][_ngcontent-%COMP%]   div[headerBg][_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:0 6px 0 8px;opacity:1}.mainheadeing[_ngcontent-%COMP%]{padding:0}.navbar-na11[_ngcontent-%COMP%]::before{margin-left:-80px;position:absolute;display:none!important}div[header][_ngcontent-%COMP%]   div[headerBg][_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[profile][_ngcontent-%COMP%]{height:40px;width:auto;background-color:transparent;border-radius:0;padding:5px 0;text-align:center;margin:0!important}div[header][_ngcontent-%COMP%]   div[headerBg][_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[profile][_ngcontent-%COMP%]:last-child{background-color:#fff!important}.namepro[_ngcontent-%COMP%]{float:left;font-size:14px;padding:3px 5px;min-width:100px;text-align:right;text-transform:uppercase}.prodropicom[_ngcontent-%COMP%]{float:right;padding:0 10px 0 13px;background-color:#42b7c7;text-align:center;margin-top:1px;margin-left:9px}div[header][_ngcontent-%COMP%]   div[headerBg][_ngcontent-%COMP%]   .navbar-header[_ngcontent-%COMP%]{outline:0;width:263px;height:59px}div[header][_ngcontent-%COMP%]   div[headerBg][_ngcontent-%COMP%]   .navbar-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-top:5px;margin-left:14px;cursor:pointer;width:180px}i.menubarmw[_ngcontent-%COMP%]{float:right;margin-right:17px;margin-top:12px;transform:rotate(180deg)}i.menubarmw[_ngcontent-%COMP%]:hover   *[_ngcontent-%COMP%]{fill:#fff!important;cursor:pointer}i.menubarmwrotate[_ngcontent-%COMP%]{transform:rotate(0)}.menubarm[_ngcontent-%COMP%]{width:30px!important}.navbar-nleft[_ngcontent-%COMP%]{height:55px;background-color:transparent;margin-left:20px}.navbar-nleft[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:16px!important}.navbar-nleft[_ngcontent-%COMP%]   li.menuba[_ngcontent-%COMP%]{margin-top:6px!important;font-weight:800!important}.navbar-nleft[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .menubarmdash[_ngcontent-%COMP%]{height:16px;margin-right:10px;margin-top:-2px}.navbar-nleft[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-image:none!important;height:38px;margin-top:0;background-color:#ffffff29;background-position:10px,center;background-repeat:no-repeat;padding:0 0 4px 16px;border:none;color:#fff;background-size:22px;width:320px}input.form-control[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#fff!important;font-weight:400!important;font-family:Source Sans Pro}input.form-control[_ngcontent-%COMP%]::-moz-placeholder{color:#fff!important;font-weight:400!important;font-family:Source Sans Pro}input.form-control[_ngcontent-%COMP%]::-ms-input-placeholder{color:#fff!important;font-weight:400!important;font-family:Source Sans Pro}input.form-control[_ngcontent-%COMP%]::placeholder{color:#fff!important;font-weight:400!important;font-family:Source Sans Pro}.base-c[_ngcontent-%COMP%]{cursor:pointer}input[_ngcontent-%COMP%]::-webkit-calendar-picker-indicator{display:none}.badge[_ngcontent-%COMP%]{position:absolute;top:4px;right:-12px;padding:2px 5px;border-radius:50%;background-color:red;color:#fff}.menuopen[_ngcontent-%COMP%]{max-height:290px;margin:0;padding:0;list-style:none;overflow-x:hidden}.notifications-menu[_ngcontent-%COMP%]{width:280px;top:100%;padding:0!important;margin:0!important;min-height:300px!important}.notifications-menu[_ngcontent-%COMP%]   .menuopen[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{border-bottom:1px solid #ccc;width:100%;padding:0!important;margin:0!important}.notifications-menu[_ngcontent-%COMP%]   .menuopen[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:14px 16px!important;float:left;width:100%;color:#000}.dropdown-menu[_ngcontent-%COMP%]{float:left}.dropdown-menu[_ngcontent-%COMP%]   .footermenu[_ngcontent-%COMP%]{margin:0!important;width:100%!important;float:left;padding:4px 0!important;border-top:1px solid #ccc}.downnotifi[_ngcontent-%COMP%]:after{bottom:100%;left:62%;border:10px solid rgba(136,183,213,0);content:"";height:0;width:0;position:absolute;pointer-events:none;border-bottom-color:#fff;margin-left:-10px}.margin0[_ngcontent-%COMP%]{margin:0}.navbar[_ngcontent-%COMP%]{border-bottom:none!important}.logutt[_ngcontent-%COMP%]{bottom:0;position:relative!important;width:357px;right:0;border-top:none!important;border-radius:0}.logutt[_ngcontent-%COMP%]   .btn.btn-custom[_ngcontent-%COMP%]{border-top:none!important}  .completer-holder .completer-input{height:38px;margin-top:0;background-color:#ffffff29!important;background-position:10px,center;background-repeat:no-repeat;padding:0 0 0 15px;border:none;color:#fff;background-size:22px;width:320px}@media screen and (max-width:1250px){  .completer-holder .completer-input{width:190px}}  .completer-dropdown-holder .completer-dropdown{width:320px!important;overflow-x:hidden;color:#000}.loginDemo[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:flex-end}.signupheader[_ngcontent-%COMP%]{flex-wrap:wrap;justify-content:flex-end;padding-right:20px}.signupheader[_ngcontent-%COMP%]   a.login1[_ngcontent-%COMP%]{margin-right:2px}.disable[_ngcontent-%COMP%]{pointer-events:none}',
          ],
        ],
        data: {},
      });
      function V(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(
              0,
              0,
              null,
              null,
              6,
              "i",
              [["class", "menubarmw"]],
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
            (t()(),
            e.qb(
              3,
              0,
              null,
              null,
              3,
              "button",
              [["class", "toggleSideNavBtn"]],
              null,
              [[null, "click"]],
              function (t, n, l) {
                var e = !0;
                return (
                  "click" === n && (e = !1 !== t.component.toggleMenu() && e), e
                );
              },
              null,
              null
            )),
            (t()(),
            e.qb(
              4,
              0,
              null,
              null,
              0,
              "span",
              [["class", "line line-1"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              5,
              0,
              null,
              null,
              0,
              "span",
              [["class", "line line-2"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              6,
              0,
              null,
              null,
              0,
              "span",
              [["class", "line line-3"]],
              null,
              null,
              null,
              null,
              null
            )),
          ],
          function (t, n) {
            t(
              n,
              2,
              0,
              "menubarmw",
              n.component.object._toggleMenu ? "menubarmwrotate" : ""
            );
          },
          null
        );
      }
      function J(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(
              0,
              0,
              null,
              null,
              3,
              "li",
              [["class", "menuba"]],
              null,
              [[null, "click"]],
              function (t, n, l) {
                var e = !0;
                return (
                  "click" === n && (e = !1 !== t.component.goHome() && e), e
                );
              },
              null,
              null
            )),
            (t()(),
            e.qb(
              1,
              0,
              null,
              null,
              0,
              "i",
              [["class", "fa fa-chevron-left iconarrow"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(2, null, [" ", " "])),
            e.Eb(131072, s.j, [s.k, e.h]),
          ],
          null,
          function (t, n) {
            t(n, 2, 0, e.Lb(n, 2, 0, e.Cb(n, 3).transform("DASHBOARD")));
          }
        );
      }
      function W(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(
              0,
              0,
              null,
              null,
              3,
              "li",
              [["class", "menuba"]],
              null,
              [[null, "click"]],
              function (t, n, l) {
                var e = !0;
                return (
                  "click" === n &&
                    (e = !1 !== t.component.gotoDashboard() && e),
                  e
                );
              },
              null,
              null
            )),
            (t()(),
            e.qb(
              1,
              0,
              null,
              null,
              0,
              "i",
              [["class", "fa fa-chevron-left iconarrow"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(2, null, ["", " "])),
            e.Eb(131072, s.j, [s.k, e.h]),
          ],
          null,
          function (t, n) {
            var l = n.component;
            t(
              n,
              2,
              0,
              l.object.specialMarket
                ? "SPECIAL MARKET"
                : l.object.isPinned
                ? "PINNED"
                : e.Lb(n, 2, 0, e.Cb(n, 3).transform("SPORT"))
            );
          }
        );
      }
      function Y(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(
              0,
              0,
              null,
              null,
              6,
              "ng2-completer",
              [["style", "z-index: 9999999;"]],
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
                [null, "ngModelChange"],
                [null, "selected"],
                [null, "keyup"],
              ],
              function (t, n, l) {
                var e = !0,
                  i = t.component;
                return (
                  "ngModelChange" === n &&
                    (e = !1 !== (i.searchValue = l) && e),
                  "selected" === n && (e = !1 !== i.goToSearchEvent() && e),
                  "keyup" === n && (e = !1 !== i.handleEventSearch(l) && e),
                  e
                );
              },
              o.b,
              o.a
            )),
            e.pb(
              1,
              12632064,
              [
                [1, 4],
                [2, 4],
                ["search", 4],
              ],
              0,
              a.a,
              [a.c, e.h],
              {
                minSearchLength: [0, "minSearchLength"],
                clearSelected: [1, "clearSelected"],
                fillHighlighted: [2, "fillHighlighted"],
                placeholder: [3, "placeholder"],
                datasource: [4, "datasource"],
                textSearching: [5, "textSearching"],
              },
              {
                selected: "selected",
                keyup: "keyup",
              }
            ),
            e.Eb(131072, s.j, [s.k, e.h]),
            e.Hb(
              1024,
              null,
              u.m,
              function (t) {
                return [t];
              },
              [a.a]
            ),
            e.pb(
              4,
              671744,
              null,
              0,
              u.r,
              [
                [8, null],
                [8, null],
                [8, null],
                [6, u.m],
              ],
              {
                model: [0, "model"],
              },
              {
                update: "ngModelChange",
              }
            ),
            e.Hb(2048, null, u.n, null, [u.r]),
            e.pb(6, 16384, null, 0, u.o, [[4, u.n]], null, null),
          ],
          function (t, n) {
            var l = n.component;
            t(
              n,
              1,
              0,
              2,
              !1,
              !1,
              e.ub(
                1,
                "",
                e.Lb(n, 1, 3, e.Cb(n, 2).transform(l.searchName)),
                ""
              ),
              l.searchEventName,
              !1
            ),
              t(n, 4, 0, l.searchValue);
          },
          function (t, n) {
            t(
              n,
              0,
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
      function X(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(0, 0, null, null, 2, "li", [], null, null, null, null, null)),
            (t()(), e.fb(16777216, null, null, 1, null, Y)),
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
          function (t, n) {
            t(n, 2, 0, !n.component.object.specialMarket);
          },
          null
        );
      }
      function Q(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(
              0,
              0,
              null,
              null,
              1,
              "span",
              [["class", "blink_me"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(1, null, ["", ""])),
          ],
          null,
          function (t, n) {
            t(n, 1, 0, n.component.object.getLoginInstance().state.suspended);
          }
        );
      }
      function Z(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(
              0,
              0,
              null,
              null,
              5,
              "span",
              [
                [
                  "style",
                  "width: 120px; float: left; display: flex; align-items: center; height: 22px; margin-top: -6px;",
                ],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              1,
              0,
              null,
              null,
              2,
              "span",
              [
                ["class", "tcolort"],
                ["style", "text-align: right; width: 120px;"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(2, null, ["", ""])),
            e.Gb(3, 1),
            (t()(),
            e.qb(
              4,
              0,
              null,
              null,
              1,
              "span",
              [["style", "width: 20px;"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(5, null, ["", ""])),
          ],
          null,
          function (t, n) {
            var l = n.component,
              i = e.Lb(
                n,
                2,
                0,
                t(
                  n,
                  3,
                  0,
                  e.Cb(n.parent, 0),
                  null == l.userProfileDetail
                    ? null
                    : l.userProfileDetail.availBal
                )
              );
            t(n, 2, 0, i),
              t(
                n,
                5,
                0,
                null == l.userProfileDetail
                  ? null
                  : l.userProfileDetail.currency
              );
          }
        );
      }
      function tt(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(
              0,
              0,
              null,
              null,
              5,
              "span",
              [
                ["href", "javascript:void(0);"],
                [
                  "style",
                  "width: 120px; float: left; display: flex; align-items: center;",
                ],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              1,
              0,
              null,
              null,
              2,
              "span",
              [
                ["class", "tred"],
                [
                  "style",
                  "text-decoration: underline; width: 120px; text-align: right;",
                ],
              ],
              null,
              [[null, "click"]],
              function (t, n, l) {
                var e = !0;
                return (
                  "click" === n &&
                    (e = !1 !== t.component.getExposureDetails() && e),
                  e
                );
              },
              null,
              null
            )),
            (t()(), e.Kb(2, null, ["", ""])),
            e.Gb(3, 1),
            (t()(),
            e.qb(
              4,
              0,
              null,
              null,
              1,
              "span",
              [["style", "width: 20px;"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(-1, null, ["Exp"])),
          ],
          null,
          function (t, n) {
            var l = n.component,
              i = e.Lb(
                n,
                2,
                0,
                t(
                  n,
                  3,
                  0,
                  e.Cb(n.parent, 1),
                  null == l.userProfileDetail
                    ? null
                    : l.userProfileDetail.exposure
                )
              );
            t(n, 2, 0, i);
          }
        );
      }
      function nt(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(
              0,
              0,
              null,
              null,
              4,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              1,
              0,
              null,
              null,
              3,
              "a",
              [
                ["class", "btn apkButton sepraterLineBtn "],
                ["title", "Download APK"],
              ],
              [
                [8, "href", 4],
                [8, "download", 0],
              ],
              null,
              null,
              null,
              null
            )),
            (t()(),
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
            (t()(), e.Kb(-1, null, ["APK"])),
            (t()(),
            e.qb(
              4,
              0,
              null,
              null,
              0,
              "i",
              [
                ["aria-hidden", "true"],
                ["class", "fa fa-download"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
          ],
          null,
          function (t, n) {
            var l = n.component;
            t(
              n,
              1,
              0,
              e.ub(
                2,
                "https://s3.ap-south-1.amazonaws.com/assets.iceexchange.com/prod/apk/",
                l.object.themeChange.whitelableId,
                "/",
                l.object.themeChange.title,
                ".apk"
              ),
              e.ub(1, "", l.object.themeChange.title, ".apk")
            );
          }
        );
      }
      function lt(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(
              0,
              0,
              null,
              null,
              1,
              "span",
              [
                ["aria-expanded", "false"],
                ["aria-haspopup", "true"],
                ["class", "badge"],
                ["data-toggle", "dropdown"],
                ["id", "dropdownMenuButton"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(1, null, ["", ""])),
          ],
          null,
          function (t, n) {
            var l = n.component;
            t(
              n,
              1,
              0,
              null == l.counterNotification
                ? null
                : l.counterNotification.length
            );
          }
        );
      }
      function et(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(
              0,
              0,
              null,
              null,
              5,
              "li",
              [
                [
                  "style",
                  "display: flex; align-items: center; justify-content: space-between; color: #000; padding: 9px 10px !important;",
                ],
              ],
              null,
              [[null, "click"]],
              function (t, n, l) {
                var e = !0;
                return (
                  "click" === n &&
                    (e =
                      !1 !==
                        t.component.openNotificationModal(
                          null == t.context.$implicit
                            ? null
                            : t.context.$implicit.eventPnl,
                          t.context.$implicit
                        ) && e),
                  e
                );
              },
              null,
              null
            )),
            (t()(),
            e.qb(
              1,
              0,
              null,
              null,
              1,
              "span",
              [["style", "    flex: 1;"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(2, null, ["", ""])),
            (t()(),
            e.qb(
              3,
              0,
              null,
              null,
              2,
              "span",
              [["style", "color : #999"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(4, null, ["", ""])),
            e.Gb(5, 1),
          ],
          null,
          function (t, n) {
            t(
              n,
              2,
              0,
              null == n.context.$implicit
                ? null
                : null == n.context.$implicit.eventPnl
                ? null
                : n.context.$implicit.eventPnl.eventName
            );
            var l = e.Lb(
              n,
              4,
              0,
              t(
                n,
                5,
                0,
                e.Cb(n.parent.parent, 2),
                1e3 *
                  (null == n.context.$implicit
                    ? null
                    : n.context.$implicit.added.seconds)
              )
            );
            t(n, 4, 0, l);
          }
        );
      }
      function it(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(
              0,
              0,
              null,
              null,
              26,
              "li",
              [["hover", ""]],
              null,
              [[null, "click"]],
              function (t, n, l) {
                var e = !0,
                  i = t.component;
                return (
                  "click" === n &&
                    (e = !1 !== i.openNotification(i.notificationData) && e),
                  e
                );
              },
              null,
              null
            )),
            (t()(),
            e.qb(
              1,
              0,
              null,
              null,
              10,
              "span",
              [
                ["aria-expanded", "false"],
                ["aria-haspopup", "true"],
                ["data-toggle", "dropdown"],
                ["id", "dropdownMenuButton"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              2,
              0,
              null,
              null,
              9,
              ":svg:svg",
              [
                ["viewBox", "0 0 20.68 24.17"],
                ["width", "14px"],
                ["xmlns", "http://www.w3.org/2000/svg"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              3,
              0,
              null,
              null,
              2,
              ":svg:defs",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              4,
              0,
              null,
              null,
              1,
              ":svg:style",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.Kb(-1, null, [
              ".cls-1111{fill:none;stroke:var(--maindark);stroke-linecap:round;stroke-linejoin:round;stroke-width:2.83px;}",
            ])),
            (t()(),
            e.qb(
              6,
              0,
              null,
              null,
              5,
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
            (t()(),
            e.qb(
              7,
              0,
              null,
              null,
              4,
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
            (t()(),
            e.qb(
              8,
              0,
              null,
              null,
              0,
              ":svg:path",
              [
                ["class", "cls-1111"],
                [
                  "d",
                  "M10.34,19H1.42s2.44-1,2.73-5.51.28-9.53,6.19-9.53,5.91,5,6.19,9.53S19.26,19,19.26,19Z",
                ],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              9,
              0,
              null,
              null,
              0,
              ":svg:path",
              [
                ["class", "cls-1111"],
                ["d", "M10.33,19.27H6.57a4,4,0,0,0,3.76,3.48"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              10,
              0,
              null,
              null,
              0,
              ":svg:path",
              [
                ["class", "cls-1111"],
                ["d", "M10.37,19.27h3.77a4,4,0,0,1-3.77,3.48"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              11,
              0,
              null,
              null,
              0,
              ":svg:path",
              [
                ["class", "cls-1111"],
                [
                  "d",
                  "M10.41,3.14a5.49,5.49,0,0,1,.7,0,4.76,4.76,0,0,0,.66.09h.06a1.64,1.64,0,0,0-1.42-1.85h-.09A1.63,1.63,0,0,0,8.91,3.27s.51,0,.55,0A7.63,7.63,0,0,1,10.41,3.14Z",
                ],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.fb(16777216, null, null, 1, null, lt)),
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
            (t()(),
            e.qb(
              14,
              0,
              null,
              null,
              12,
              "ul",
              [
                ["aria-labelledby", "dropdownMenuButton"],
                ["class", "dropdown-menu downnotifi"],
                [
                  "style",
                  "padding: 0px !important;\n                              border-radius: 10px;\n                              margin-right: -100px;",
                ],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              15,
              0,
              null,
              null,
              7,
              "li",
              [["class", "notifications-menu"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              16,
              0,
              null,
              null,
              3,
              "h2",
              [
                [
                  "style",
                  "margin: 0;\n                                    border-bottom: solid #333 1px;\n                                    display: flex;\n                                    align-items: center;\n                                    justify-content: space-between;\n                                    padding: 0 10px;",
                ],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              17,
              0,
              null,
              null,
              2,
              "span",
              [
                [
                  "style",
                  "    margin: 0 0;\n                                  color: #000;\n                                  font-size: 16px;\n                                  font-weight: bold;\n                                  padding: 10px 0",
                ],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(18, null, ["", ""])),
            e.Eb(131072, s.j, [s.k, e.h]),
            (t()(),
            e.qb(
              20,
              0,
              null,
              null,
              2,
              "ul",
              [["class", "menuopen"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.fb(16777216, null, null, 1, null, et)),
            e.pb(
              22,
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
            (t()(),
            e.qb(
              23,
              0,
              null,
              null,
              3,
              "li",
              [
                ["class", "footermenu"],
                [
                  "style",
                  "background-color: #e4e4e4; border-radius: 0 0 8px 8px; text-align: center;",
                ],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              24,
              0,
              null,
              null,
              2,
              "a",
              [["style", "color: #333;"]],
              null,
              [[null, "click"]],
              function (t, n, l) {
                var e = !0;
                return (
                  "click" === n &&
                    (e = !1 !== t.component.goToNotification() && e),
                  e
                );
              },
              null,
              null
            )),
            (t()(), e.Kb(25, null, ["", ""])),
            e.Eb(131072, s.j, [s.k, e.h]),
          ],
          function (t, n) {
            var l = n.component;
            t(
              n,
              13,
              0,
              (null == l.counterNotification
                ? null
                : l.counterNotification.length) > 0
            ),
              t(
                n,
                22,
                0,
                null == l.notificationData
                  ? null
                  : l.notificationData.eventSettlements
              );
          },
          function (t, n) {
            t(n, 18, 0, e.Lb(n, 18, 0, e.Cb(n, 19).transform("Notifications"))),
              t(
                n,
                25,
                0,
                e.Lb(n, 25, 0, e.Cb(n, 26).transform("View All Notifications"))
              );
          }
        );
      }
      function st(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(
              0,
              0,
              null,
              null,
              1,
              "div",
              [["class", "namepro"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(1, null, [" ", ""])),
          ],
          null,
          function (t, n) {
            var l = n.component;
            t(
              n,
              1,
              0,
              null == l.userProfileDetail ? null : l.userProfileDetail.userName
            );
          }
        );
      }
      function ot(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(
              0,
              0,
              null,
              null,
              8,
              "div",
              [
                ["class", "prodropicom prodropicom1"],
                ["clickOutside", ""],
                ["href", "JavaScript:Void(0);"],
                ["onclick", "event.preventDefault();"],
              ],
              null,
              [[null, "click"]],
              function (t, n, l) {
                var e = !0;
                return (
                  "click" === n &&
                    (e =
                      !1 !==
                        t.component.openProfileMenu(
                          "arrow_box",
                          "active-box"
                        ) && e),
                  e
                );
              },
              null,
              null
            )),
            (t()(),
            e.qb(
              1,
              0,
              null,
              null,
              7,
              "span",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              2,
              0,
              null,
              null,
              6,
              ":svg:svg",
              [
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
            (t()(),
            e.qb(
              3,
              0,
              null,
              null,
              2,
              ":svg:defs",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              4,
              0,
              null,
              null,
              1,
              ":svg:style",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.Kb(-1, null, [
              ".cls-1ajsdlkfj{fill:none !important;stroke-linecap:round;stroke-linejoin:round;stroke-width:4px;}",
            ])),
            (t()(),
            e.qb(
              6,
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
            (t()(),
            e.qb(
              7,
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
            (t()(),
            e.qb(
              8,
              0,
              null,
              null,
              0,
              ":svg:polyline",
              [
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
          null
        );
      }
      function at(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(
              0,
              0,
              null,
              null,
              4,
              "a",
              [["class", "login1  fillLogin"]],
              null,
              [[null, "click"]],
              function (t, n, l) {
                var e = !0;
                return (
                  "click" === n &&
                    (e = !1 !== t.component.handleLoginPopUp() && e),
                  e
                );
              },
              null,
              null
            )),
            (t()(),
            e.qb(
              1,
              0,
              null,
              null,
              0,
              "span",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(2, 0, null, null, 2, "div", [], null, null, null, null, null)),
            (t()(), e.Kb(3, null, ["", ""])),
            e.Eb(131072, s.j, [s.k, e.h]),
          ],
          null,
          function (t, n) {
            t(n, 3, 0, e.Lb(n, 3, 0, e.Cb(n, 4).transform("Login")));
          }
        );
      }
      function ut(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(
              0,
              0,
              null,
              null,
              4,
              "a",
              [["class", "login1 "]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              1,
              0,
              null,
              null,
              3,
              "div",
              [
                ["class", "sigUpd1"],
                ["id", "playersignup"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              2,
              0,
              null,
              null,
              2,
              "a",
              [
                ["href", "https://wa.link/dominozbook"],
                ["target", "_blank"],
                ["title", "whatsapp"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(3, null, [" ", " "])),
            e.Eb(131072, s.j, [s.k, e.h]),
          ],
          null,
          function (t, n) {
            t(n, 3, 0, e.Lb(n, 3, 0, e.Cb(n, 4).transform("Signup")));
          }
        );
      }
      function rt(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(
              0,
              0,
              null,
              null,
              3,
              "div",
              [["class", "loginDemo"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              1,
              0,
              null,
              null,
              2,
              "a",
              [["href", "javascript:void(0)"]],
              null,
              [[null, "click"]],
              function (t, n, l) {
                var e = !0;
                return (
                  "click" === n &&
                    (e = !1 !== t.component.handleLoginWithDemo() && e),
                  e
                );
              },
              null,
              null
            )),
            (t()(), e.Kb(2, null, ["", " "])),
            e.Eb(131072, s.j, [s.k, e.h]),
          ],
          null,
          function (t, n) {
            t(n, 2, 0, e.Lb(n, 2, 0, e.Cb(n, 3).transform("Login With Demo")));
          }
        );
      }
      function ct(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(
              0,
              0,
              null,
              null,
              2,
              "span",
              [
                [
                  "style",
                  "color: red; margin-right: 10px; right: 0px; position: absolute;",
                ],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(1, null, [" ", ""])),
            e.Eb(131072, s.j, [s.k, e.h]),
          ],
          null,
          function (t, n) {
            t(n, 1, 0, e.Lb(n, 1, 0, e.Cb(n, 2).transform("SUSPENDED")));
          }
        );
      }
      function ht(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(
              0,
              0,
              null,
              null,
              2,
              "button",
              [
                ["class", "btn balance-custom-btn"],
                ["style", "margin-left: 7px;cursor: pointer;"],
              ],
              null,
              [[null, "click"]],
              function (t, n, l) {
                var e = !0;
                return (
                  "click" === n &&
                    (e = !1 !== t.component.recallcasinoBal() && e),
                  e
                );
              },
              null,
              null
            )),
            (t()(),
            e.qb(
              1,
              0,
              null,
              null,
              0,
              "i",
              [
                ["aria-hidden", "true"],
                ["class", "fa fa-undo"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(-1, null, [" Recall"])),
          ],
          null,
          null
        );
      }
      function gt(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(
              0,
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
            (t()(), e.Kb(1, null, ["", ""])),
            e.Gb(2, 1),
          ],
          null,
          function (t, n) {
            var l = n.component,
              i = e.Lb(
                n,
                1,
                0,
                t(
                  n,
                  2,
                  0,
                  e.Cb(n.parent, 0),
                  null == l.userProfileDetail
                    ? null
                    : l.userProfileDetail.liveCasinoWalletBal
                )
              );
            t(n, 1, 0, i);
          }
        );
      }
      function bt(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(
              0,
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
            (t()(),
            e.qb(
              1,
              0,
              null,
              null,
              0,
              "i",
              [["class", "fa fa-circle-o-notch fa-spin loading-icon"]],
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
      function dt(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(
              0,
              0,
              null,
              null,
              13,
              "li",
              [],
              null,
              [[null, "click"]],
              function (t, n, l) {
                var e = !0;
                return (
                  "click" === n &&
                    (e =
                      !1 !==
                        t.component.goToprofile(t.parent.context.$implicit) &&
                      e),
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
                ngClass: [0, "ngClass"],
              },
              null
            ),
            (t()(),
            e.qb(
              3,
              0,
              null,
              null,
              10,
              "div",
              [],
              null,
              [[null, "click"]],
              function (t, n, l) {
                var e = !0;
                return (
                  "click" === n &&
                    (e =
                      !1 !==
                        t.component.openProfileMenu(
                          "arrow_box",
                          "active-box"
                        ) && e),
                  e
                );
              },
              null,
              null
            )),
            (t()(),
            e.qb(
              4,
              0,
              null,
              null,
              1,
              "app-svg",
              [],
              null,
              null,
              null,
              r.b,
              r.a
            )),
            e.pb(
              5,
              114688,
              null,
              0,
              c.a,
              [],
              {
                type: [0, "type"],
              },
              null
            ),
            (t()(),
            e.qb(6, 0, null, null, 3, "a", [], null, null, null, null, null)),
            (t()(), e.Kb(7, null, ["", ""])),
            e.Eb(131072, s.j, [s.k, e.h]),
            (t()(),
            e.qb(9, 0, null, null, 0, "br", [], null, null, null, null, null)),
            (t()(),
            e.qb(10, 0, null, null, 3, "a", [], null, null, null, null, null)),
            (t()(), e.Kb(11, null, ["", " ", " "])),
            e.Eb(131072, s.j, [s.k, e.h]),
            e.Eb(131072, s.j, [s.k, e.h]),
          ],
          function (t, n) {
            t(
              n,
              2,
              0,
              "Bank Transfer" == n.parent.context.$implicit.title ||
                "Loyalty Points" == n.parent.context.$implicit.title
                ? "hide"
                : "Set Home screen" == n.parent.context.$implicit.title &&
                  n.component.object.demoUser
                ? "disable"
                : ""
            ),
              t(
                n,
                5,
                0,
                (null == n.parent.context.$implicit
                  ? null
                  : n.parent.context.$implicit.title) + "2"
              );
          },
          function (t, n) {
            var l = e.Lb(
              n,
              7,
              0,
              e
                .Cb(n, 8)
                .transform(
                  null == n.parent.context.$implicit
                    ? null
                    : n.parent.context.$implicit.title.split(" ")[0]
                )
            );
            t(n, 7, 0, l);
            var i = e.Lb(
                n,
                11,
                0,
                e
                  .Cb(n, 12)
                  .transform(
                    null == n.parent.context.$implicit
                      ? null
                      : n.parent.context.$implicit.title.split(" ")[1]
                  )
              ),
              s = e.Lb(
                n,
                11,
                1,
                e
                  .Cb(n, 13)
                  .transform(
                    null == n.parent.context.$implicit
                      ? null
                      : n.parent.context.$implicit.title.split(" ")[2]
                  )
              );
            t(n, 11, 0, i, s);
          }
        );
      }
      function pt(t) {
        return e.Mb(
          0,
          [
            (t()(),
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
            (t()(), e.fb(16777216, null, null, 1, null, dt)),
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
            (t()(), e.fb(0, null, null, 0)),
          ],
          function (t, n) {
            t(n, 2, 0, n.context.$implicit.isPlayer);
          },
          null
        );
      }
      function mt(t) {
        return e.Mb(
          0,
          [
            (t()(),
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
              h.b,
              h.a
            )),
            e.pb(1, 114688, null, 0, g.a, [], null, null),
          ],
          function (t, n) {
            t(n, 1, 0);
          },
          null
        );
      }
      function ft(t) {
        return e.Mb(
          0,
          [
            e.Eb(0, b.a, []),
            e.Eb(0, d.a, []),
            e.Eb(0, p.a, []),
            e.Ib(671088640, 1, {
              completer: 0,
            }),
            e.Ib(671088640, 2, {
              nameField: 0,
            }),
            (t()(),
            e.qb(
              5,
              0,
              null,
              null,
              110,
              "div",
              [["class", ""]],
              null,
              null,
              null,
              null,
              null
            )),
            e.Hb(512, null, i.A, i.B, [e.q, e.r, e.k, e.B]),
            e.pb(
              7,
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
            (t()(),
            e.qb(
              8,
              0,
              null,
              null,
              107,
              "div",
              [["header", ""]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              9,
              0,
              null,
              null,
              106,
              "div",
              [["headerBg", ""]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              10,
              0,
              null,
              null,
              105,
              "nav",
              [["class", "navbar"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              11,
              0,
              null,
              null,
              104,
              "div",
              [["class", "container-fluid mainheadeing"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              12,
              0,
              null,
              null,
              5,
              "div",
              [["class", "navbar-header"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              13,
              0,
              null,
              null,
              2,
              "img",
              [],
              [[8, "src", 4]],
              [[null, "click"]],
              function (t, n, l) {
                var e = !0;
                return (
                  "click" === n && (e = !1 !== t.component.goHome() && e), e
                );
              },
              null,
              null
            )),
            e.Hb(512, null, i.A, i.B, [e.q, e.r, e.k, e.B]),
            e.pb(
              15,
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
            (t()(), e.fb(16777216, null, null, 1, null, V)),
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
            (t()(),
            e.qb(
              18,
              0,
              null,
              null,
              6,
              "ul",
              [["class", "nav navbar-nav navbar-nleft navbar-left"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.fb(16777216, null, null, 1, null, J)),
            e.pb(
              20,
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
            (t()(), e.fb(16777216, null, null, 1, null, W)),
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
            (t()(), e.fb(16777216, null, null, 1, null, X)),
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
            (t()(),
            e.qb(
              25,
              0,
              null,
              null,
              90,
              "ul",
              [["class", "nav navbar-nav navbar-na11 navbar-right"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              26,
              0,
              null,
              null,
              6,
              "li",
              [["hover", ""]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              27,
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
            (t()(), e.fb(16777216, null, null, 1, null, Q)),
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
            (t()(),
            e.qb(
              30,
              0,
              null,
              null,
              0,
              "span",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              31,
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
            (t()(), e.Kb(-1, null, ["\xa0"])),
            (t()(),
            e.qb(
              33,
              0,
              null,
              null,
              4,
              "li",
              [
                ["hover", ""],
                ["style", "width: 150px; padding-top: 6px;"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.fb(16777216, null, null, 1, null, Z)),
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
            (t()(), e.fb(16777216, null, null, 1, null, tt)),
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
            (t()(),
            e.qb(
              38,
              0,
              null,
              null,
              5,
              "li",
              [
                ["class", "apkLiSportPg"],
                ["hover", ""],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              39,
              0,
              null,
              null,
              4,
              "div",
              [["id", "apkview"]],
              null,
              null,
              null,
              null,
              null
            )),
            e.Hb(512, null, i.A, i.B, [e.q, e.r, e.k, e.B]),
            e.pb(
              41,
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
            (t()(), e.fb(16777216, null, null, 1, null, nt)),
            e.pb(
              43,
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
            (t()(), e.fb(16777216, null, null, 1, null, it)),
            e.pb(
              45,
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
            (t()(),
            e.qb(
              46,
              0,
              null,
              null,
              11,
              "li",
              [["profile", ""]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.fb(16777216, null, null, 1, null, st)),
            e.pb(
              48,
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
            (t()(), e.fb(16777216, null, null, 1, null, ot)),
            e.pb(
              50,
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
            (t()(),
            e.qb(
              51,
              0,
              null,
              null,
              6,
              "div",
              [["class", "signupheader"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.fb(16777216, null, null, 1, null, at)),
            e.pb(
              53,
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
            (t()(), e.fb(16777216, null, null, 1, null, ut)),
            e.pb(
              55,
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
            (t()(), e.fb(16777216, null, null, 1, null, rt)),
            e.pb(
              57,
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
            (t()(),
            e.qb(
              58,
              0,
              null,
              null,
              57,
              "div",
              [["arrow_box", ""]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              59,
              0,
              null,
              null,
              6,
              "div",
              [["class", "row dropslider"]],
              null,
              [[null, "click"]],
              function (t, n, l) {
                var e = !0;
                return (
                  "click" === n &&
                    (e =
                      !1 !==
                        t.component.openProfileMenu(
                          "arrow_box",
                          "active-box"
                        ) && e),
                  e
                );
              },
              null,
              null
            )),
            (t()(),
            e.qb(
              60,
              0,
              null,
              null,
              1,
              "span",
              [["class", "arrowflrl"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              61,
              0,
              null,
              null,
              0,
              "img",
              [
                ["alt", ""],
                ["src", "assets/images/arrowleft.png"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              62,
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
            (t()(), e.Kb(63, null, ["", ""])),
            (t()(), e.fb(16777216, null, null, 1, null, ct)),
            e.pb(
              65,
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
            (t()(),
            e.qb(
              66,
              0,
              null,
              null,
              8,
              "div",
              [
                ["class", "row"],
                [
                  "style",
                  "\n                                margin: auto;\n                                border-radius: 0px;\n                                margin-top: 8px;\n                                font-family: 'Raleway', sans-serif !important;\n                                font-weight: 700;\n                            ",
                ],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              67,
              0,
              null,
              null,
              2,
              "div",
              [["class", "col-lg-6 col-md-6 col-sm-12"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(68, null, ["", " "])),
            e.Eb(131072, s.j, [s.k, e.h]),
            (t()(),
            e.qb(
              70,
              0,
              null,
              null,
              4,
              "div",
              [["class", "col-lg-6 col-md-6 col-sm-12"]],
              null,
              null,
              null,
              null,
              null
            )),
            e.Hb(512, null, i.A, i.B, [e.q, e.r, e.k, e.B]),
            e.pb(
              72,
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
            (t()(), e.Kb(73, null, [" ", " "])),
            e.Gb(74, 1),
            (t()(),
            e.qb(
              75,
              0,
              null,
              null,
              11,
              "div",
              [
                ["class", "row"],
                [
                  "style",
                  "\n                            margin: auto;\n                            border-radius: 0px;\n                            margin-top: 8px;\n                            font-family: 'Raleway', sans-serif !important;\n                            font-weight: 700;\n                            ",
                ],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              76,
              0,
              null,
              null,
              5,
              "div",
              [["class", "col-lg-9 col-md-9 col-sm-12"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(77, null, ["", " "])),
            e.Eb(131072, s.j, [s.k, e.h]),
            (t()(),
            e.qb(
              79,
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
            (t()(), e.fb(16777216, null, null, 1, null, ht)),
            e.pb(
              81,
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
            (t()(),
            e.qb(
              82,
              0,
              null,
              null,
              4,
              "div",
              [["class", "col-lg-3 col-md-3 col-sm-12"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.fb(16777216, null, null, 1, null, gt)),
            e.pb(
              84,
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
            (t()(), e.fb(16777216, null, null, 1, null, bt)),
            e.pb(
              86,
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
            (t()(),
            e.qb(
              87,
              0,
              null,
              null,
              10,
              "div",
              [
                ["class", "row"],
                [
                  "style",
                  "\n                            margin: auto;\n                            border-radius: 0px;\n                            margin-top: 8px;\n                            font-family: 'Raleway', sans-serif !important;\n                            font-weight: 700;\n                        ",
                ],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              88,
              0,
              null,
              null,
              2,
              "div",
              [["class", "col-lg-6 col-md-6 col-sm-12"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(89, null, [" ", ""])),
            e.Eb(131072, s.j, [s.k, e.h]),
            (t()(),
            e.qb(
              91,
              0,
              null,
              null,
              6,
              "div",
              [["class", "col-lg-6 col-md-6 col-sm-12"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              92,
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
              94,
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
            (t()(), e.Kb(95, null, ["", ""])),
            e.Gb(96, 1),
            e.Gb(97, 1),
            (t()(),
            e.qb(
              98,
              0,
              null,
              null,
              9,
              "div",
              [
                ["class", "row"],
                [
                  "style",
                  "\n                            margin: auto;\n                            border-radius: 0px;\n                            margin-top: 8px;\n                            font-family: 'Raleway', sans-serif !important;\n                            font-weight: 700;\n                        ",
                ],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              99,
              0,
              null,
              null,
              2,
              "div",
              [["class", "col-lg-6 col-md-6 col-sm-12"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(100, null, ["", ""])),
            e.Eb(131072, s.j, [s.k, e.h]),
            (t()(),
            e.qb(
              102,
              0,
              null,
              null,
              5,
              "div",
              [["class", "col-lg-6 col-md-6 col-sm-12"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              103,
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
            e.Hb(512, null, i.A, i.B, [e.q, e.r, e.k, e.B]),
            e.pb(
              105,
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
            (t()(), e.Kb(106, null, ["", ""])),
            e.Gb(107, 1),
            (t()(),
            e.qb(
              108,
              0,
              null,
              null,
              3,
              "div",
              [
                ["class", "row"],
                ["style", "border: none !important;"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              109,
              0,
              null,
              null,
              2,
              "ul",
              [["class", "menuiitemm"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.fb(16777216, null, null, 1, null, pt)),
            e.pb(
              111,
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
            (t()(),
            e.qb(
              112,
              0,
              null,
              null,
              3,
              "div",
              [
                ["class", "row logutt"],
                ["style", "border: none !important;     float: left;"],
              ],
              null,
              [[null, "click"]],
              function (t, n, l) {
                var e = !0;
                return (
                  "click" === n && (e = !1 !== t.component.playerLogout() && e),
                  e
                );
              },
              null,
              null
            )),
            (t()(),
            e.qb(
              113,
              0,
              null,
              null,
              2,
              "button",
              [["class", "btn btn-custom"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(114, null, ["", ""])),
            e.Eb(131072, s.j, [s.k, e.h]),
            (t()(),
            e.qb(
              116,
              0,
              null,
              null,
              1,
              "app-annoucment-model",
              [],
              null,
              null,
              null,
              m.b,
              m.a
            )),
            e.pb(
              117,
              114688,
              null,
              0,
              f.a,
              [C.a, v.a, P.a, w.p, x.a],
              null,
              null
            ),
            (t()(),
            e.qb(
              118,
              0,
              null,
              null,
              1,
              "app-login",
              [],
              null,
              null,
              null,
              y.b,
              y.a
            )),
            e.pb(
              119,
              114688,
              null,
              0,
              O.a,
              [C.a, v.a, u.e, I.a, P.a, x.a, i.d],
              null,
              null
            ),
            (t()(),
            e.qb(
              120,
              0,
              null,
              null,
              1,
              "app-force-to-change-password",
              [],
              null,
              null,
              null,
              M.b,
              M.a
            )),
            e.pb(
              121,
              245760,
              null,
              0,
              S.a,
              [C.a, w.a, v.a, P.a, u.e, I.a],
              {
                userDetails: [0, "userDetails"],
              },
              null
            ),
            (t()(),
            e.qb(
              122,
              0,
              null,
              null,
              1,
              "app-exposure-details",
              [],
              null,
              null,
              null,
              L,
              A
            )),
            e.pb(
              123,
              245760,
              null,
              0,
              j,
              [C.a, v.a, P.a, w.a, w.p, x.a],
              {
                exposureDetailsList: [0, "exposureDetailsList"],
              },
              null
            ),
            (t()(),
            e.qb(
              124,
              0,
              null,
              null,
              1,
              "app-notification-details",
              [],
              null,
              null,
              null,
              U,
              R
            )),
            e.pb(
              125,
              114688,
              null,
              0,
              k,
              [e.h, w.p, v.a, P.a],
              {
                notificationPnL: [0, "notificationPnL"],
              },
              null
            ),
            (t()(),
            e.qb(
              126,
              0,
              null,
              null,
              1,
              "app-agree-continue-rules",
              [],
              null,
              null,
              null,
              K.b,
              K.a
            )),
            e.pb(
              127,
              114688,
              null,
              0,
              F.a,
              [C.a, v.a, P.a, w.p, x.a],
              null,
              null
            ),
            (t()(),
            e.qb(
              128,
              0,
              null,
              null,
              1,
              "app-set-homescreen",
              [],
              null,
              null,
              null,
              G.b,
              G.a
            )),
            e.pb(
              129,
              245760,
              null,
              0,
              H.a,
              [C.a, v.a, P.a, w.p, x.a],
              null,
              null
            ),
            (t()(), e.fb(16777216, null, null, 1, null, mt)),
            e.pb(
              131,
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
          function (t, n) {
            var l = n.component;
            t(n, 7, 0, "", l.object.loginState.state.appSkin),
              t(n, 15, 0, l.object.isexch9 ? "isExch9" : ""),
              t(n, 17, 0, l.object.casinoEventDetail),
              t(n, 20, 0, l.object.routeUrl),
              t(n, 22, 0, !l.object.routeUrl),
              t(
                n,
                24,
                0,
                null == l.object.themeUXChange
                  ? null
                  : l.object.themeUXChange.searchBox
              ),
              t(
                n,
                29,
                0,
                l.object.getLoginInstance().state.suspended &&
                  l.object.getLoginInstance().getIsLogin()
              ),
              t(n, 35, 0, l.object.getLoginInstance().state.exposureExist),
              t(n, 37, 0, l.object.getLoginInstance().state.exposureExist),
              t(
                n,
                41,
                0,
                e.ub(
                  1,
                  "apkBox ",
                  l.object.getLoginInstance().getIsLogin()
                    ? "isLogin"
                    : "isLogout",
                  ""
                ),
                l.object.detectAPK ? "hideapk" : ""
              ),
              t(
                n,
                43,
                0,
                ("20210103" == l.object.themeChange.whitelableId &&
                  "IceExch" == l.object.themeChange.title) ||
                  "20210102" == l.object.themeChange.whitelableId
              ),
              t(n, 45, 0, l.object.getLoginInstance().state.isPlayer),
              t(n, 48, 0, l.object.getLoginInstance().state.exposureExist),
              t(n, 50, 0, l.object.getLoginInstance().getIsLogin()),
              t(n, 53, 0, !l.object.getLoginInstance().getIsLogin()),
              t(
                n,
                55,
                0,
                !l.object.getLoginInstance().getIsLogin() &&
                  "20220728" == l.object.themeChange.whitelableId
              ),
              t(n, 57, 0, !l.object.getLoginInstance().getIsLogin()),
              t(n, 65, 0, !l.object.getLoginInstance().state.writeprivilege),
              t(
                n,
                72,
                0,
                "col-lg-6 col-md-6 col-sm-12",
                (null == l.userProfileDetail
                  ? null
                  : l.userProfileDetail.availBal) < 0
                  ? "negativeValue"
                  : ""
              ),
              t(
                n,
                81,
                0,
                (null == l.userProfileDetail
                  ? null
                  : l.userProfileDetail.liveCasinoWalletBal) > 0
              ),
              t(n, 84, 0, !l.casinoBalLoader),
              t(n, 86, 0, l.casinoBalLoader),
              t(
                n,
                94,
                0,
                (null == l.userProfileDetail
                  ? null
                  : l.userProfileDetail.refPnL) >= 0
                  ? "positiveValue"
                  : null ==
                    (null == l.userProfileDetail
                      ? null
                      : l.userProfileDetail.refPnL)
                  ? ""
                  : "negativeValue"
              ),
              t(
                n,
                105,
                0,
                (null == l.userProfileDetail
                  ? null
                  : l.userProfileDetail.exposure) > 0
                  ? ""
                  : "negativeValue"
              ),
              t(n, 111, 0, l.listData),
              t(n, 117, 0),
              t(n, 119, 0),
              t(n, 121, 0, l.userProfileDetail),
              t(n, 123, 0, l.exposureDetailsList),
              t(n, 125, 0, l.notificationPnL),
              t(n, 127, 0),
              t(n, 129, 0),
              t(n, 131, 0, l.loading);
          },
          function (t, n) {
            var l = n.component;
            t(n, 13, 0, l.object.themeChange.logo),
              t(
                n,
                63,
                0,
                null == l.userProfileDetail
                  ? null
                  : l.userProfileDetail.userName
              ),
              t(
                n,
                68,
                0,
                e.Lb(n, 68, 0, e.Cb(n, 69).transform("Available Balance"))
              );
            var i = e.Lb(
              n,
              73,
              0,
              t(
                n,
                74,
                0,
                e.Cb(n, 0),
                null == l.userProfileDetail
                  ? null
                  : l.userProfileDetail.availBal
              )
            );
            t(n, 73, 0, i),
              t(
                n,
                77,
                0,
                e.Lb(n, 77, 0, e.Cb(n, 78).transform("Wallet Balance"))
              ),
              t(
                n,
                89,
                0,
                e.Lb(
                  n,
                  89,
                  0,
                  e
                    .Cb(n, 90)
                    .transform(
                      (null == l.userProfileDetail
                        ? null
                        : l.userProfileDetail.refPnL) >= 0
                        ? "Winnings"
                        : "Loosing"
                    )
                )
              );
            var s =
              (null == l.userProfileDetail
                ? null
                : l.userProfileDetail.refPnL) > 0
                ? "+" +
                  e.Lb(
                    n,
                    95,
                    0,
                    t(
                      n,
                      96,
                      0,
                      e.Cb(n, 1),
                      null == l.userProfileDetail
                        ? null
                        : l.userProfileDetail.refPnL
                    )
                  )
                : null ==
                  (null == l.userProfileDetail
                    ? null
                    : l.userProfileDetail.refPnL)
                ? "0.0"
                : 0 ==
                  (null == l.userProfileDetail
                    ? null
                    : l.userProfileDetail.refPnL)
                ? "0.0"
                : "-" +
                  e.Lb(
                    n,
                    95,
                    0,
                    t(
                      n,
                      97,
                      0,
                      e.Cb(n, 1),
                      null == l.userProfileDetail
                        ? null
                        : l.userProfileDetail.refPnL
                    )
                  );
            t(n, 95, 0, s),
              t(n, 100, 0, e.Lb(n, 100, 0, e.Cb(n, 101).transform("Exposure")));
            var o = e.Lb(
              n,
              106,
              0,
              t(
                n,
                107,
                0,
                e.Cb(n, 1),
                null == l.userProfileDetail
                  ? null
                  : l.userProfileDetail.exposure
              )
            );
            t(n, 106, 0, o),
              t(n, 114, 0, e.Lb(n, 114, 0, e.Cb(n, 115).transform("Logout")));
          }
        );
      }
      var Ct = l("P781"),
        vt = l("vV5E"),
        Pt = l("5Tc4"),
        wt = l("R0Yy"),
        xt = l("A8Cp"),
        yt = l("hg8p"),
        Ot = l("ThFC"),
        It = l("05GW");
      class Mt extends _.a {
        constructor(t, n, l, i, s, o, a, u, r, c) {
          super(t, l, i, s, a, n),
            (this.service = t),
            (this.firebase = n),
            (this.object = l),
            (this.broadCast = i),
            (this.activatedRoute = s),
            (this._elementRef = o),
            (this.router = a),
            (this.fireStoreData = u),
            (this.routeParam = r),
            (this.translate = c),
            (this.myEvent = new e.m());
        }
        ngOnInit() {
          this.object.onChangeEvents(),
            this.getRouteParams(),
            this.handleSelfPlayerAccountDetails(),
            this.firebaseEvent(),
            this.getLocalStorage(),
            this.getBrodcasterData(),
            this.getNotification(),
            this.handleSearchEventwithoutAuth(),
            this.handleEventlistnerForSession();
        }
        openProfileMenu(t, n) {
          this.object.getDOMInstance().openProfileMenu(t, n),
            this.updateLoyaltyTabPriviledge(this.listData);
        }
        onClick(t) {
          this._elementRef.nativeElement.contains(t) ||
            this.object
              .getDOMInstance()
              .closeProfileMenu("arrow_box", "active-box");
        }
        transfercoinToSportsGames(t, n) {
          this.object.getDOMInstance().hideModal("coinsliderSportBook"),
            this.object
              .getUtilInstance()
              .storeState(this.object.getConstants().STORAGE.COIN, t),
            this.gotoSportBook();
        }
        gotoSportBook() {
          window.open("/casino-games/sportsbook", "_self");
        }
        hidemodalSportBook() {
          this.object.getDOMInstance().hideModal("coinsliderSportBook");
        }
        ngOnDestroy() {
          this.destroySubcriberD2();
        }
      }
      var St = e.ob({
        encapsulation: 0,
        styles: [
          [
            '@charset "UTF-8";img[_ngcontent-%COMP%]{max-width:100%;width:auto;height:auto!important}.tcolort[_ngcontent-%COMP%]{color:#42b7c7;margin-left:10px}.tred[_ngcontent-%COMP%]{color:red!important;margin-left:10px}.negativeValue[_ngcontent-%COMP%]{color:red!important}.positiveValue[_ngcontent-%COMP%]{color:green!important}.isExch9[_ngcontent-%COMP%]{width:110px!important}.navbar-nav[_ngcontent-%COMP%]{margin:0;background-color:#191e45}.skin-1[_ngcontent-%COMP%]   div[headerBg][_ngcontent-%COMP%]{background-color:#262c59;border-bottom:none;height:60px}div[header][_ngcontent-%COMP%]   div[headerBg][_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:0 14px;opacity:1}.mainheadeing[_ngcontent-%COMP%]{padding:0}.navbar-na11[_ngcontent-%COMP%]::before{margin-left:-80px;position:absolute}div[header][_ngcontent-%COMP%]   div[headerBg][_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[profile][_ngcontent-%COMP%]{height:40px;width:auto;background-color:transparent;border-radius:6px;padding:4px 0 0 11px;text-align:center;border:1px solid #fff}div[header][_ngcontent-%COMP%]   div[headerBg][_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[profile][_ngcontent-%COMP%]:last-child{background-color:#fff!important}.namepro[_ngcontent-%COMP%]{float:left;font-size:14px;padding:3px 5px;font-family:Poppins,sans-serif!important}.prodropicom[_ngcontent-%COMP%]{float:right;padding:0 10px 0 13px!important;text-align:center;height:40px;margin-top:-5px;margin-left:-10px;line-height:40px;font-weight:400}div[header][_ngcontent-%COMP%]   div[headerBg][_ngcontent-%COMP%]   .navbar-header[_ngcontent-%COMP%]{outline:0;width:263px;height:59px}div[header][_ngcontent-%COMP%]   div[headerBg][_ngcontent-%COMP%]   .navbar-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-top:10px;margin-left:14px;cursor:pointer}i.menubarmw[_ngcontent-%COMP%]{float:right;margin-right:17px;margin-top:12px}.menubarm[_ngcontent-%COMP%]{width:30px!important}.navbar-nleft[_ngcontent-%COMP%]{height:55px;background-color:transparent;margin-left:20px;font-family:Poppins,sans-serif!important}.navbar-nleft[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-family:Poppins,sans-serif!important;font-size:14px!important}.navbar-nleft[_ngcontent-%COMP%]   li.menuba[_ngcontent-%COMP%]{margin-top:11px!important}.navbar-nleft[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .menubarmdash[_ngcontent-%COMP%]{height:16px;margin-right:10px;margin-top:-2px}.navbar-nleft[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:38px;margin-top:0;background-color:#ffffff29;background-position:10px,center;background-repeat:no-repeat;padding:0 0 4px 35px;border:none;color:#fff;background-size:22px;width:320px;text-transform:uppercase}input.form-control[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#fff!important;font-weight:400!important}input.form-control[_ngcontent-%COMP%]::-moz-placeholder{color:#fff!important;font-weight:400!important}input.form-control[_ngcontent-%COMP%]::-ms-input-placeholder{color:#fff!important;font-weight:400!important}input.form-control[_ngcontent-%COMP%]::placeholder{color:#fff!important;font-weight:400!important}.base-c[_ngcontent-%COMP%]{cursor:pointer}input[_ngcontent-%COMP%]::-webkit-calendar-picker-indicator{display:none}.badge[_ngcontent-%COMP%]{position:absolute;top:4px;right:-7px;padding:0;border-radius:50%;background-color:#efbd07;color:#131313;height:15px;width:15px;text-align:center;line-height:15px}.menuopen[_ngcontent-%COMP%]{max-height:290px;margin:0;padding:0;list-style:none;overflow-x:hidden}.notifications-menu[_ngcontent-%COMP%]{width:280px;top:100%;padding:0!important;margin:0!important;min-height:300px!important;font-size:11px!important}.notifications-menu[_ngcontent-%COMP%]   .menuopen[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{border-bottom:1px solid #ccc;width:100%;padding:0!important;margin:0!important}.notifications-menu[_ngcontent-%COMP%]   .menuopen[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:14px 16px!important;float:left;width:100%;color:#000}.dropdown-menu[_ngcontent-%COMP%]{float:left}.dropdown-menu[_ngcontent-%COMP%]   .footermenu[_ngcontent-%COMP%]{margin:0!important;width:100%!important;float:left;padding:4px 0!important;border-top:1px solid #ccc}.downnotifi[_ngcontent-%COMP%]:after{bottom:100%;left:62%;border:10px solid rgba(136,183,213,0);content:"";height:0;width:0;position:absolute;pointer-events:none;border-bottom-color:#fff;margin-left:-10px}.margin0[_ngcontent-%COMP%]{margin:0}.navbar[_ngcontent-%COMP%]{border-bottom:none!important}.backaroo[_ngcontent-%COMP%]{width:6px;margin-top:-2px;margin-right:9px}div[header][_ngcontent-%COMP%]   div[headerBg][_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   div[arrow_box][_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{padding:14px \u200b0!important}.valuecl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{border-right:1px solid!important;padding:10px 20px!important;text-transform:uppercase;font-weight:300}.valuecl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2n){border-right:none!important}.menuuimgg[_ngcontent-%COMP%]{margin-right:12px;width:30px}.account-details-icon[_ngcontent-%COMP%]{width:40px;margin-bottom:10px}div[header][_ngcontent-%COMP%]   div[headerBg][_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   div[arrow_box][_ngcontent-%COMP%]{top:49px!important;height:calc(100vh - 60px)!important}  .completer-holder .completer-input{height:38px;margin-top:0;background-color:var(--side-bg);background-position:10px,center;background-repeat:no-repeat;padding:0 0 4px 35px;border:none;color:#fff;background-size:20px;font-weight:400!important;width:240px}  .completer-holder input::-webkit-input-placeholder{color:#fff;font-weight:400!important}  .completer-holder input::-moz-placeholder{color:#fff;font-weight:400!important}  .completer-holder input::-ms-input-placeholder{color:#fff;font-weight:400!important}  .completer-holder input::placeholder{color:#fff;font-weight:400!important}  .completer-dropdown-holder .completer-dropdown{width:320px!important;color:#000}.loginlanding[_ngcontent-%COMP%]{width:90px;height:40px;background:var(--navText);color:#333;text-align:center;line-height:40px;font-size:14px;font-weight:600;text-transform:uppercase;border-radius:5px;border:none!important;margin-left:10px;cursor:pointer}.loginlanding2[_ngcontent-%COMP%]{height:40px;background:0 0;color:#fff;text-align:center;line-height:40px;font-size:14px;font-weight:400;text-transform:capitalize;border-radius:5px;padding:0 10px;border:1px solid!important;margin:-10px 0 0;cursor:pointer}.singup[_ngcontent-%COMP%]{width:90px;height:40px;background:0 0;border:1px solid #fff;color:#fff;text-align:center;line-height:40px;font-size:14px;font-weight:600;text-transform:uppercase;border-radius:5px;cursor:pointer}@media (max-width:1100px){div[header][_ngcontent-%COMP%]   div[headerBg][_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:0 5px}.singup[_ngcontent-%COMP%]{margin:-10px 0 0}}.menubarmwrotate[_ngcontent-%COMP%]{float:right;margin-right:0!important;margin-top:16px!important;transform:rotate(180deg)}@media (max-width:990px){.navbar-nleft[_ngcontent-%COMP%]   li.menuba[_ngcontent-%COMP%]{font-size:12px!important}i.menubarmw[_ngcontent-%COMP%]{margin-right:0!important}}.depositclass[_ngcontent-%COMP%]{background:linear-gradient(to right,#b88d07 -20%,#f3c605 50%,#b88d07 193%);float:left;border-radius:3px!important;border:none;color:#000}.nbrown[_ngcontent-%COMP%]{color:#b95f23}.ngreen[_ngcontent-%COMP%]{color:green}.nred[_ngcontent-%COMP%]{color:red}.marpa[_ngcontent-%COMP%]{margin:0!important;padding-top:8px!important}.closeBTN[_ngcontent-%COMP%]{position:absolute;z-index:9;top:-30px;right:0}.closeBTN[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff;font-size:30px}.anncoumentimg[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]{width:60%;background:0 0}li.apk-li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:31px}li.apk-li[_ngcontent-%COMP%]{padding-top:5px!important}.languageLi[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border:1px solid #fff;background:0 0;font-size:14px;padding:3px 6px;border-radius:4px;font-weight:600}li.languageLi[_ngcontent-%COMP%]{margin:5px 0 0 5px!important;padding:0!important}.languageLi[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:none}.languageLi[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{color:#000}li.languageLi.sportLogin[_ngcontent-%COMP%]{padding:3px 0 0!important;margin:-3px 0 0 5px!important}li.languageLi.sportLogin[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{height:40px}@media (max-width:1600px){div[header][_ngcontent-%COMP%]   div[headerBg][_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:0 10px}li.languageLi.sportLogin[_ngcontent-%COMP%]{padding:3px 4px 0!important}}@media (max-width:1440px){div[header][_ngcontent-%COMP%]   div[headerBg][_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:0 5px}div[header][_ngcontent-%COMP%]   div[headerBg][_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.headtcill[_ngcontent-%COMP%]{margin-right:0}}.disable[_ngcontent-%COMP%]{pointer-events:none}ul.navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{height:15px;padding-top:5px;display:flex;align-items:center;justify-content:center;line-height:normal}',
          ],
        ],
        data: {},
      });
      function _t(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(
              0,
              0,
              null,
              null,
              6,
              "i",
              [["class", "newMenuBar"]],
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
            (t()(),
            e.qb(
              3,
              0,
              null,
              null,
              3,
              "button",
              [["class", "toggleSideNavBtn"]],
              null,
              [[null, "click"]],
              function (t, n, l) {
                var e = !0;
                return (
                  "click" === n && (e = !1 !== t.component.toggleMenu() && e), e
                );
              },
              null,
              null
            )),
            (t()(),
            e.qb(
              4,
              0,
              null,
              null,
              0,
              "span",
              [["class", "line line-1"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              5,
              0,
              null,
              null,
              0,
              "span",
              [["class", "line line-2"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              6,
              0,
              null,
              null,
              0,
              "span",
              [["class", "line line-3"]],
              null,
              null,
              null,
              null,
              null
            )),
          ],
          function (t, n) {
            t(
              n,
              2,
              0,
              "newMenuBar",
              n.component.object._toggleMenu ? "openMenuBar" : ""
            );
          },
          null
        );
      }
      function jt(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(
              0,
              0,
              null,
              null,
              3,
              "li",
              [["class", "menuba"]],
              null,
              [[null, "click"]],
              function (t, n, l) {
                var e = !0;
                return (
                  "click" === n && (e = !1 !== t.component.goHome() && e), e
                );
              },
              null,
              null
            )),
            (t()(),
            e.qb(
              1,
              0,
              null,
              null,
              0,
              "img",
              [
                ["class", "backaroo"],
                ["src", "assets/images/backarrow.png"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(2, null, [" ", " "])),
            e.Eb(131072, s.j, [s.k, e.h]),
          ],
          null,
          function (t, n) {
            t(n, 2, 0, e.Lb(n, 2, 0, e.Cb(n, 3).transform("DASHBOARD")));
          }
        );
      }
      function At(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(
              0,
              0,
              null,
              null,
              4,
              "li",
              [["class", "menuba"]],
              null,
              [[null, "click"]],
              function (t, n, l) {
                var e = !0;
                return (
                  "click" === n &&
                    (e = !1 !== t.component.gotoDashboard() && e),
                  e
                );
              },
              null,
              null
            )),
            (t()(),
            e.qb(
              1,
              0,
              null,
              null,
              0,
              "img",
              [
                ["class", "backaroo"],
                ["src", "assets/images/backarrow.png"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(2, null, [" ", " "])),
            e.Eb(131072, s.j, [s.k, e.h]),
            e.Eb(131072, s.j, [s.k, e.h]),
          ],
          null,
          function (t, n) {
            var l = n.component;
            t(
              n,
              2,
              0,
              l.object.specialMarket
                ? "SPECIAL MARKET"
                : e.Lb(
                    n,
                    2,
                    0,
                    l.object.isPinned
                      ? e.Cb(n, 3).transform("PINNED")
                      : e.Cb(n, 4).transform("SPORT")
                  )
            );
          }
        );
      }
      function Et(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(
              0,
              0,
              null,
              null,
              6,
              "ng2-completer",
              [],
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
                [null, "ngModelChange"],
                [null, "selected"],
                [null, "keyup"],
              ],
              function (t, n, l) {
                var e = !0,
                  i = t.component;
                return (
                  "ngModelChange" === n &&
                    (e = !1 !== (i.searchValue = l) && e),
                  "selected" === n && (e = !1 !== i.goToSearchEvent() && e),
                  "keyup" === n && (e = !1 !== i.handleEventSearch(l) && e),
                  e
                );
              },
              o.b,
              o.a
            )),
            e.pb(
              1,
              12632064,
              [
                [1, 4],
                [2, 4],
                ["search", 4],
              ],
              0,
              a.a,
              [a.c, e.h],
              {
                minSearchLength: [0, "minSearchLength"],
                clearSelected: [1, "clearSelected"],
                fillHighlighted: [2, "fillHighlighted"],
                placeholder: [3, "placeholder"],
                datasource: [4, "datasource"],
                textSearching: [5, "textSearching"],
              },
              {
                selected: "selected",
                keyup: "keyup",
              }
            ),
            e.Eb(131072, s.j, [s.k, e.h]),
            e.Hb(
              1024,
              null,
              u.m,
              function (t) {
                return [t];
              },
              [a.a]
            ),
            e.pb(
              4,
              671744,
              null,
              0,
              u.r,
              [
                [8, null],
                [8, null],
                [8, null],
                [6, u.m],
              ],
              {
                model: [0, "model"],
              },
              {
                update: "ngModelChange",
              }
            ),
            e.Hb(2048, null, u.n, null, [u.r]),
            e.pb(6, 16384, null, 0, u.o, [[4, u.n]], null, null),
          ],
          function (t, n) {
            var l = n.component;
            t(
              n,
              1,
              0,
              2,
              !1,
              !1,
              e.ub(
                1,
                "",
                e.Lb(n, 1, 3, e.Cb(n, 2).transform("Search by event name")),
                ""
              ),
              l.searchEventName,
              !1
            ),
              t(n, 4, 0, l.searchValue);
          },
          function (t, n) {
            t(
              n,
              0,
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
      function Lt(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(
              0,
              0,
              null,
              null,
              1,
              "span",
              [["class", "blink_med2"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(-1, null, ["(SUSPENDED)"])),
          ],
          null,
          null
        );
      }
      function Dt(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(
              0,
              0,
              null,
              null,
              2,
              "button",
              [["class", "depositclass"]],
              null,
              [[null, "click"]],
              function (t, n, l) {
                var e = !0,
                  i = t.component;
                return (
                  "click" === n &&
                    (e = !1 !== i.goToprofile(i.listData[3]) && e),
                  e
                );
              },
              null,
              null
            )),
            (t()(), e.Kb(1, null, ["", ""])),
            e.Eb(131072, s.j, [s.k, e.h]),
          ],
          null,
          function (t, n) {
            t(n, 1, 0, e.Lb(n, 1, 0, e.Cb(n, 2).transform("Deposit")));
          }
        );
      }
      function kt(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(
              0,
              0,
              null,
              null,
              2,
              "li",
              [["class", "marpa"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.fb(16777216, null, null, 1, null, Dt)),
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
          function (t, n) {
            t(n, 2, 0, n.component.object.getLoginInstance().getIsLogin());
          },
          null
        );
      }
      function Rt(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(
              0,
              0,
              null,
              null,
              9,
              "li",
              [
                ["class", "headtcill"],
                ["hover", ""],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              1,
              0,
              null,
              null,
              8,
              "span",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
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
            (t()(), e.Kb(3, null, ["", ""])),
            (t()(),
            e.qb(
              4,
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
            (t()(), e.Kb(-1, null, ["\xa0"])),
            (t()(),
            e.qb(
              6,
              0,
              null,
              null,
              3,
              "span",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              7,
              0,
              null,
              null,
              2,
              "span",
              [["class", "tcolort"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(8, null, ["", ""])),
            e.Gb(9, 1),
          ],
          null,
          function (t, n) {
            var l = n.component;
            t(
              n,
              3,
              0,
              null == l.userProfileDetail ? null : l.userProfileDetail.currency
            );
            var i = e.Lb(
              n,
              8,
              0,
              t(
                n,
                9,
                0,
                e.Cb(n.parent, 0),
                null == l.userProfileDetail
                  ? null
                  : l.userProfileDetail.availBal
              )
            );
            t(n, 8, 0, i);
          }
        );
      }
      function Nt(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(
              0,
              0,
              null,
              null,
              10,
              "li",
              [["hover", ""]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              1,
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
            (t()(),
            e.qb(
              2,
              0,
              null,
              null,
              2,
              "span",
              [["style", "text-transform: uppercase;"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(3, null, ["", ""])),
            e.Eb(131072, s.j, [s.k, e.h]),
            (t()(),
            e.qb(
              5,
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
            (t()(), e.Kb(-1, null, ["\xa0"])),
            (t()(),
            e.qb(
              7,
              0,
              null,
              null,
              3,
              "a",
              [["href", "javascript:void(0);"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              8,
              0,
              null,
              null,
              2,
              "span",
              [
                ["class", "tcolort "],
                ["style", "text-decoration: underline;"],
              ],
              null,
              [[null, "click"]],
              function (t, n, l) {
                var e = !0;
                return (
                  "click" === n &&
                    (e = !1 !== t.component.getExposureDetails() && e),
                  e
                );
              },
              null,
              null
            )),
            (t()(), e.Kb(9, null, ["", ""])),
            e.Gb(10, 1),
          ],
          null,
          function (t, n) {
            var l = n.component;
            t(n, 3, 0, e.Lb(n, 3, 0, e.Cb(n, 4).transform("Exposure")));
            var i = e.Lb(
              n,
              9,
              0,
              t(
                n,
                10,
                0,
                e.Cb(n.parent, 1),
                null == l.userProfileDetail
                  ? null
                  : l.userProfileDetail.exposure
              )
            );
            t(n, 9, 0, i);
          }
        );
      }
      function Tt(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(
              0,
              0,
              null,
              null,
              1,
              "span",
              [
                ["aria-expanded", "false"],
                ["aria-haspopup", "true"],
                ["class", "badge"],
                ["data-toggle", "dropdown"],
                ["id", "dropdownMenuButton"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(1, null, ["", ""])),
          ],
          null,
          function (t, n) {
            var l = n.component;
            t(
              n,
              1,
              0,
              null == l.counterNotification
                ? null
                : l.counterNotification.length
            );
          }
        );
      }
      function qt(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(
              0,
              0,
              null,
              null,
              7,
              "li",
              [
                [
                  "style",
                  "align-items: center; justify-content: space-between; color: #000; padding: 9px 10px !important;",
                ],
              ],
              null,
              [[null, "click"]],
              function (t, n, l) {
                var e = !0;
                return (
                  "click" === n &&
                    (e =
                      !1 !==
                        t.component.openNotificationModal(
                          null == t.parent.context.$implicit
                            ? null
                            : t.parent.context.$implicit.eventPnl,
                          t.parent.context.$implicit
                        ) && e),
                  e
                );
              },
              null,
              null
            )),
            (t()(),
            e.qb(
              1,
              0,
              null,
              null,
              3,
              "span",
              [["style", "flex: 0.3;padding-right: 3px;font-weight: 400;"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              2,
              0,
              null,
              null,
              2,
              "strong",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(3, null, ["", ""])),
            e.Eb(131072, s.j, [s.k, e.h]),
            (t()(),
            e.qb(
              5,
              0,
              null,
              null,
              2,
              "span",
              [["style", "color : #999;float: right;"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(6, null, ["", ""])),
            e.Gb(7, 1),
          ],
          null,
          function (t, n) {
            t(
              n,
              3,
              0,
              e.Lb(n, 3, 0, e.Cb(n, 4).transform("New Message Received"))
            );
            var l = e.Lb(
              n,
              6,
              0,
              t(
                n,
                7,
                0,
                e.Cb(n.parent.parent.parent, 2),
                1e3 *
                  (null == n.parent.context.$implicit
                    ? null
                    : n.parent.context.$implicit.added.seconds)
              )
            );
            t(n, 6, 0, l);
          }
        );
      }
      function Bt(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(
              0,
              0,
              null,
              null,
              1,
              "span",
              [["style", "flex: 0.3; padding-right: 3px"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(-1, null, ["Request"])),
          ],
          null,
          null
        );
      }
      function Ut(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(
              0,
              0,
              null,
              null,
              13,
              "li",
              [
                [
                  "style",
                  " align-items: center; justify-content: space-between; color: #000; padding: 9px 10px !important;",
                ],
              ],
              null,
              [[null, "click"]],
              function (t, n, l) {
                var e = !0;
                return (
                  "click" === n &&
                    (e =
                      !1 !==
                        t.component.openNotificationModal(
                          null == t.parent.context.$implicit
                            ? null
                            : t.parent.context.$implicit.eventPnl,
                          t.parent.context.$implicit
                        ) && e),
                  e
                );
              },
              null,
              null
            )),
            (t()(),
            e.qb(
              1,
              0,
              null,
              null,
              4,
              "span",
              [["style", "flex: 0.3;padding-right: 3px"]],
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
                ngClass: [0, "ngClass"],
              },
              null
            ),
            (t()(), e.Kb(4, null, [" ", ""])),
            e.Gb(5, 1),
            (t()(),
            e.qb(
              6,
              0,
              null,
              null,
              2,
              "span",
              [["style", "flex: 0.3; padding-right: 3px"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(7, null, ["", ""])),
            e.Gb(8, 1),
            (t()(), e.fb(16777216, null, null, 1, null, Bt)),
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
            (t()(),
            e.qb(
              11,
              0,
              null,
              null,
              2,
              "span",
              [["style", "color : #999;float: right;"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(12, null, ["", ""])),
            e.Gb(13, 1),
          ],
          function (t, n) {
            t(
              n,
              3,
              0,
              "HOLD" ==
                (null == n.parent.context.$implicit.eventPnl
                  ? null
                  : n.parent.context.$implicit.eventPnl.eventTypeName)
                ? "nbrown"
                : "APPROVED" ==
                  (null == n.parent.context.$implicit.eventPnl
                    ? null
                    : n.parent.context.$implicit.eventPnl.eventTypeName)
                ? "ngreen"
                : "REJECTED" ==
                  (null == n.parent.context.$implicit.eventPnl
                    ? null
                    : n.parent.context.$implicit.eventPnl.eventTypeName)
                ? "nred"
                : ""
            ),
              t(
                n,
                10,
                0,
                "BANKING" ==
                  (null == n.parent.context.$implicit
                    ? null
                    : n.parent.context.$implicit.ntyp) ||
                  "VERIFICATION" ==
                    (null == n.parent.context.$implicit
                      ? null
                      : n.parent.context.$implicit.ntyp)
              );
          },
          function (t, n) {
            var l = e.Lb(
              n,
              4,
              0,
              t(
                n,
                5,
                0,
                e.Cb(n.parent.parent.parent, 3),
                null == n.parent.context.$implicit
                  ? null
                  : null == n.parent.context.$implicit.eventPnl
                  ? null
                  : n.parent.context.$implicit.eventPnl.eventTypeName
              )
            );
            t(n, 4, 0, l);
            var i = e.Lb(
              n,
              7,
              0,
              t(
                n,
                8,
                0,
                e.Cb(n.parent.parent.parent, 3),
                null == n.parent.context.$implicit
                  ? null
                  : null == n.parent.context.$implicit.eventPnl
                  ? null
                  : n.parent.context.$implicit.eventPnl.eventName
              )
            );
            t(n, 7, 0, i);
            var s = e.Lb(
              n,
              12,
              0,
              t(
                n,
                13,
                0,
                e.Cb(n.parent.parent.parent, 2),
                1e3 *
                  (null == n.parent.context.$implicit
                    ? null
                    : n.parent.context.$implicit.added.seconds)
              )
            );
            t(n, 12, 0, s);
          }
        );
      }
      function Kt(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(
              0,
              0,
              null,
              null,
              6,
              "li",
              [
                [
                  "style",
                  "display: flex; align-items: center; justify-content: space-between; color: #000; padding: 9px 10px !important;",
                ],
              ],
              null,
              [[null, "click"]],
              function (t, n, l) {
                var e = !0;
                return (
                  "click" === n &&
                    (e =
                      !1 !==
                        t.component.openNotificationModal(
                          null == t.parent.context.$implicit
                            ? null
                            : t.parent.context.$implicit.eventPnl,
                          t.parent.context.$implicit
                        ) && e),
                  e
                );
              },
              null,
              null
            )),
            (t()(),
            e.qb(
              1,
              0,
              null,
              null,
              2,
              "span",
              [["style", "flex: 1; "]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(2, null, ["", ""])),
            e.Gb(3, 1),
            (t()(),
            e.qb(
              4,
              0,
              null,
              null,
              2,
              "span",
              [["style", "color : #999"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(5, null, ["", ""])),
            e.Gb(6, 1),
          ],
          null,
          function (t, n) {
            var l = e.Lb(
              n,
              2,
              0,
              t(
                n,
                3,
                0,
                e.Cb(n.parent.parent.parent, 3),
                null == n.parent.context.$implicit
                  ? null
                  : null == n.parent.context.$implicit.eventPnl
                  ? null
                  : n.parent.context.$implicit.eventPnl.eventName
              )
            );
            t(n, 2, 0, l);
            var i = e.Lb(
              n,
              5,
              0,
              t(
                n,
                6,
                0,
                e.Cb(n.parent.parent.parent, 2),
                1e3 *
                  (null == n.parent.context.$implicit
                    ? null
                    : n.parent.context.$implicit.added.seconds)
              )
            );
            t(n, 5, 0, i);
          }
        );
      }
      function Ft(t) {
        return e.Mb(
          0,
          [
            (t()(),
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
            (t()(), e.fb(16777216, null, null, 1, null, qt)),
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
            (t()(), e.fb(16777216, null, null, 1, null, Ut)),
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
            (t()(), e.fb(16777216, null, null, 1, null, Kt)),
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
            (t()(), e.fb(0, null, null, 0)),
          ],
          function (t, n) {
            t(
              n,
              2,
              0,
              "MESSAGE" ==
                (null == n.context.$implicit ? null : n.context.$implicit.ntyp)
            ),
              t(
                n,
                4,
                0,
                "BANKING" ==
                  (null == n.context.$implicit
                    ? null
                    : n.context.$implicit.ntyp) ||
                  "VERIFICATION" ==
                    (null == n.context.$implicit
                      ? null
                      : n.context.$implicit.ntyp)
              ),
              t(
                n,
                6,
                0,
                "BANKING" !=
                  (null == n.context.$implicit
                    ? null
                    : n.context.$implicit.ntyp) &&
                  "VERIFICATION" !=
                    (null == n.context.$implicit
                      ? null
                      : n.context.$implicit.ntyp) &&
                  "MESSAGE" !=
                    (null == n.context.$implicit
                      ? null
                      : n.context.$implicit.ntyp)
              );
          },
          null
        );
      }
      function Gt(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(
              0,
              0,
              null,
              null,
              17,
              "li",
              [["hover", ""]],
              null,
              [[null, "click"]],
              function (t, n, l) {
                var e = !0,
                  i = t.component;
                return (
                  "click" === n &&
                    (e = !1 !== i.openNotification(i.notificationData) && e),
                  e
                );
              },
              null,
              null
            )),
            (t()(),
            e.qb(
              1,
              0,
              null,
              null,
              1,
              "span",
              [
                ["aria-expanded", "false"],
                ["aria-haspopup", "true"],
                ["data-toggle", "dropdown"],
                ["id", "dropdownMenuButton"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              2,
              0,
              null,
              null,
              0,
              "i",
              [
                ["aria-hidden", "true"],
                ["class", "fa fa-bell"],
                ["style", "font-size: 21px;"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.fb(16777216, null, null, 1, null, Tt)),
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
            (t()(),
            e.qb(
              5,
              0,
              null,
              null,
              12,
              "ul",
              [
                ["aria-labelledby", "dropdownMenuButton"],
                ["class", "dropdown-menu downnotifi"],
                [
                  "style",
                  "padding: 0px !important;\n                                border-radius: 10px;\n                                margin-right: -100px;",
                ],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              6,
              0,
              null,
              null,
              7,
              "li",
              [["class", "notifications-menu"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              7,
              0,
              null,
              null,
              3,
              "h2",
              [
                [
                  "style",
                  "margin: 0;\n                                      border-bottom: solid #333 1px;\n                                      display: flex;\n                                      align-items: center;\n                                      justify-content: space-between;\n                                      padding: 0 10px;",
                ],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
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
                  "    margin: 0 0;\n                                    color: #000;\n                                    font-size: 16px;\n                                    font-weight: bold;\n                                    padding: 10px 0",
                ],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(9, null, ["", ""])),
            e.Eb(131072, s.j, [s.k, e.h]),
            (t()(),
            e.qb(
              11,
              0,
              null,
              null,
              2,
              "ul",
              [["class", "menuopen"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.fb(16777216, null, null, 1, null, Ft)),
            e.pb(
              13,
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
            (t()(),
            e.qb(
              14,
              0,
              null,
              null,
              3,
              "li",
              [
                ["class", "footermenu"],
                [
                  "style",
                  "background-color: #e4e4e4; border-radius: 0 0 8px 8px; text-align: center;",
                ],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              15,
              0,
              null,
              null,
              2,
              "a",
              [["style", "color: #333;"]],
              null,
              [[null, "click"]],
              function (t, n, l) {
                var e = !0;
                return (
                  "click" === n &&
                    (e = !1 !== t.component.goToNotification() && e),
                  e
                );
              },
              null,
              null
            )),
            (t()(), e.Kb(16, null, ["", ""])),
            e.Eb(131072, s.j, [s.k, e.h]),
          ],
          function (t, n) {
            var l = n.component;
            t(
              n,
              4,
              0,
              (null == l.counterNotification
                ? null
                : l.counterNotification.length) > 0
            ),
              t(
                n,
                13,
                0,
                null == l.notificationData
                  ? null
                  : l.notificationData.eventSettlements
              );
          },
          function (t, n) {
            t(n, 9, 0, e.Lb(n, 9, 0, e.Cb(n, 10).transform("Notifications"))),
              t(
                n,
                16,
                0,
                e.Lb(n, 16, 0, e.Cb(n, 17).transform("View All Notifications"))
              );
          }
        );
      }
      function Ht(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(0, 0, null, null, 2, "div", [], null, null, null, null, null)),
            (t()(),
            e.qb(
              1,
              0,
              null,
              null,
              1,
              "a",
              [["title", "Download APK"]],
              [
                [8, "href", 4],
                [8, "download", 0],
              ],
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              2,
              0,
              null,
              null,
              0,
              "img",
              [
                ["alt", "apk"],
                ["src", "assets/images/apk-white.svg"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
          ],
          null,
          function (t, n) {
            var l = n.component;
            t(
              n,
              1,
              0,
              e.ub(
                2,
                "https://s3.ap-south-1.amazonaws.com/assets.iceexchange.com/prod/apk/",
                l.object.themeChange.whitelableId,
                "/",
                l.object.themeChange.title,
                ".apk"
              ),
              e.ub(1, "", l.object.themeChange.title, ".apk")
            );
          }
        );
      }
      function $t(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(0, 0, null, null, 2, "div", [], null, null, null, null, null)),
            (t()(),
            e.qb(
              1,
              0,
              null,
              null,
              1,
              "a",
              [
                ["href", "https://batcoin9apk.com/"],
                ["target", "_blank"],
                ["title", "Download APK"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              2,
              0,
              null,
              null,
              0,
              "img",
              [
                ["alt", "apk"],
                ["src", "assets/images/apk-white.svg"],
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
      function zt(t) {
        return e.Mb(
          0,
          [
            (t()(),
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
              u.s,
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
              u.E,
              [e.k, e.B, [8, null]],
              {
                value: [0, "value"],
              },
              null
            ),
            (t()(), e.Kb(3, null, ["", ""])),
          ],
          function (t, n) {
            t(n, 1, 0, n.context.$implicit), t(n, 2, 0, n.context.$implicit);
          },
          function (t, n) {
            t(
              n,
              0,
              0,
              n.context.$implicit === n.component.translate.currentLang
            ),
              t(n, 3, 0, n.context.$implicit);
          }
        );
      }
      function Vt(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(
              0,
              0,
              null,
              null,
              3,
              "div",
              [
                ["class", "loginlanding2"],
                ["clickOutside", ""],
                ["href", "JavaScript:Void(0);"],
                ["onclick", "event.preventDefault();"],
              ],
              null,
              [[null, "click"]],
              function (t, n, l) {
                var e = !0;
                return (
                  "click" === n &&
                    (e =
                      !1 !==
                        t.component.openProfileMenu(
                          "arrow_box",
                          "active-box"
                        ) && e),
                  e
                );
              },
              null,
              null
            )),
            (t()(),
            e.qb(
              1,
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
            (t()(), e.Kb(2, null, [" ", " "])),
            (t()(),
            e.qb(
              3,
              0,
              null,
              null,
              0,
              "img",
              [["src", "assets/images/menuloainner.svg"]],
              null,
              null,
              null,
              null,
              null
            )),
          ],
          null,
          function (t, n) {
            var l = n.component;
            t(
              n,
              2,
              0,
              null == l.userProfileDetail ? null : l.userProfileDetail.userName
            );
          }
        );
      }
      function Jt(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(
              0,
              0,
              null,
              null,
              2,
              "div",
              [["class", "singup"]],
              null,
              [[null, "click"]],
              function (t, n, l) {
                var e = !0;
                return (
                  "click" === n &&
                    (e = !1 !== t.component.handleLoginPopUp() && e),
                  e
                );
              },
              null,
              null
            )),
            (t()(), e.Kb(1, null, ["", " "])),
            e.Eb(131072, s.j, [s.k, e.h]),
          ],
          null,
          function (t, n) {
            t(n, 1, 0, e.Lb(n, 1, 0, e.Cb(n, 2).transform("Login")));
          }
        );
      }
      function Wt(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(
              0,
              0,
              null,
              null,
              2,
              "div",
              [
                ["class", "loginlanding"],
                ["id", "playersignup"],
              ],
              null,
              [[null, "click"]],
              function (t, n, l) {
                var e = !0;
                return (
                  "click" === n && (e = !1 !== t.component.userSignUp() && e), e
                );
              },
              null,
              null
            )),
            (t()(), e.Kb(1, null, [" ", " "])),
            e.Eb(131072, s.j, [s.k, e.h]),
          ],
          null,
          function (t, n) {
            t(n, 1, 0, e.Lb(n, 1, 0, e.Cb(n, 2).transform("Signup")));
          }
        );
      }
      function Yt(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(0, 0, null, null, 2, "div", [], null, null, null, null, null)),
            (t()(), e.fb(16777216, null, null, 1, null, Wt)),
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
          function (t, n) {
            t(n, 2, 0, n.component.object.themeChange.bankingView);
          },
          null
        );
      }
      function Xt(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(0, 0, null, null, 3, "div", [], null, null, null, null, null)),
            (t()(),
            e.qb(
              1,
              0,
              null,
              null,
              2,
              "a",
              [
                ["class", "loginDemoTxt"],
                ["href", "javascript:void(0)"],
              ],
              null,
              [[null, "click"]],
              function (t, n, l) {
                var e = !0;
                return (
                  "click" === n &&
                    (e = !1 !== t.component.handleLoginWithDemo() && e),
                  e
                );
              },
              null,
              null
            )),
            (t()(), e.Kb(2, null, ["", " "])),
            e.Eb(131072, s.j, [s.k, e.h]),
          ],
          null,
          function (t, n) {
            t(n, 2, 0, e.Lb(n, 2, 0, e.Cb(n, 3).transform("Login With Demo")));
          }
        );
      }
      function Qt(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(
              0,
              0,
              null,
              null,
              1,
              "span",
              [
                [
                  "style",
                  "color: red; margin-right: 10px; right: 0px; position: absolute;",
                ],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(-1, null, ["(SUSPENDED)"])),
          ],
          null,
          null
        );
      }
      function Zt(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(
              0,
              0,
              null,
              null,
              3,
              "button",
              [
                ["class", "btn balance-custom-btn"],
                ["data-toggle", "tooltip"],
                [
                  "style",
                  "margin-left: 7px;cursor: pointer;    width: 60px;\n                                    font-size: 10px;",
                ],
                ["title", "Recall Balance"],
              ],
              null,
              [[null, "click"]],
              function (t, n, l) {
                var e = !0;
                return (
                  "click" === n &&
                    (e = !1 !== t.component.recallcasinoBal() && e),
                  e
                );
              },
              null,
              null
            )),
            (t()(),
            e.qb(
              1,
              0,
              null,
              null,
              0,
              "i",
              [
                ["aria-hidden", "true"],
                ["class", "fa fa-undo"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(2, null, [" ", ""])),
            e.Eb(131072, s.j, [s.k, e.h]),
          ],
          null,
          function (t, n) {
            t(n, 2, 0, e.Lb(n, 2, 0, e.Cb(n, 3).transform("Recall")));
          }
        );
      }
      function tn(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(
              0,
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
            (t()(), e.Kb(1, null, [" ", ""])),
            e.Gb(2, 1),
          ],
          null,
          function (t, n) {
            var l = n.component,
              i = e.Lb(
                n,
                1,
                0,
                t(
                  n,
                  2,
                  0,
                  e.Cb(n.parent.parent, 0),
                  null == l.userProfileDetail
                    ? null
                    : l.userProfileDetail.liveCasinoWalletBal
                )
              );
            t(n, 1, 0, i);
          }
        );
      }
      function nn(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(
              0,
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
            (t()(),
            e.qb(
              1,
              0,
              null,
              null,
              0,
              "i",
              [["class", "fa fa-circle-o-notch fa-spin loading-icon"]],
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
      function ln(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(
              0,
              0,
              null,
              null,
              16,
              "div",
              [["class", "row valuecl"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              1,
              0,
              null,
              null,
              8,
              "div",
              [["class", "col-md-6 col-sm-12"]],
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
            (t()(),
            e.qb(
              4,
              0,
              null,
              null,
              0,
              "img",
              [
                ["alt", ""],
                ["class", "menuuimgg"],
                ["src", "assets/images/avaibala.png"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(5, null, [" ", ""])),
            e.Eb(131072, s.j, [s.k, e.h]),
            (t()(),
            e.qb(
              7,
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
            (t()(), e.fb(16777216, null, null, 1, null, Zt)),
            e.pb(
              9,
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
            (t()(),
            e.qb(
              10,
              0,
              null,
              null,
              6,
              "div",
              [["class", "col-md-6 col-sm-12"]],
              null,
              null,
              null,
              null,
              null
            )),
            e.Hb(512, null, i.A, i.B, [e.q, e.r, e.k, e.B]),
            e.pb(
              12,
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
            (t()(), e.fb(16777216, null, null, 1, null, tn)),
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
            (t()(), e.fb(16777216, null, null, 1, null, nn)),
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
          ],
          function (t, n) {
            var l = n.component;
            t(
              n,
              3,
              0,
              "col-md-6 col-sm-12",
              (null == l.userProfileDetail
                ? null
                : l.userProfileDetail.liveCasinoWalletBal) > 0
                ? "col-lg-9"
                : "col-lg-8"
            ),
              t(
                n,
                9,
                0,
                (null == l.userProfileDetail
                  ? null
                  : l.userProfileDetail.liveCasinoWalletBal) > 0
              ),
              t(
                n,
                12,
                0,
                "col-md-6 col-sm-12",
                (null == l.userProfileDetail
                  ? null
                  : l.userProfileDetail.liveCasinoWalletBal) > 0
                  ? "col-lg-3"
                  : "col-lg-4"
              ),
              t(n, 14, 0, !l.casinoBalLoader),
              t(n, 16, 0, l.casinoBalLoader);
          },
          function (t, n) {
            t(n, 5, 0, e.Lb(n, 5, 0, e.Cb(n, 6).transform("Wallet Balance")));
          }
        );
      }
      function en(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(
              0,
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
            (t()(), e.Kb(1, null, [" ", ""])),
          ],
          null,
          function (t, n) {
            var l = n.component;
            t(
              n,
              1,
              0,
              null == l.object.playerBonusDetails
                ? null
                : l.object.playerBonusDetails.bonusAmount
            );
          }
        );
      }
      function sn(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(
              0,
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
            (t()(),
            e.qb(
              1,
              0,
              null,
              null,
              0,
              "i",
              [["class", "fa fa-circle-o-notch fa-spin loading-icon"]],
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
      function on(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(
              0,
              0,
              null,
              null,
              14,
              "div",
              [["class", "row valuecl"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              1,
              0,
              null,
              null,
              8,
              "div",
              [["class", "col-lg-9 col-md-6 col-sm-12"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              2,
              0,
              null,
              null,
              0,
              "img",
              [
                ["alt", ""],
                ["class", "menuuimgg"],
                ["src", "assets/images/bonus_icon.png"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(3, null, [" ", " "])),
            e.Eb(131072, s.j, [s.k, e.h]),
            (t()(),
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
            (t()(),
            e.qb(
              6,
              0,
              null,
              null,
              0,
              "i",
              [
                ["aria-hidden", "true"],
                ["class", "fa fa-info-circle"],
              ],
              null,
              [[null, "click"]],
              function (t, n, l) {
                var e = !0;
                return (
                  "click" === n && (e = !1 !== t.component.openTerms() && e), e
                );
              },
              null,
              null
            )),
            (t()(),
            e.qb(
              7,
              0,
              null,
              null,
              2,
              "button",
              [
                ["class", "btn balance-custom-btn"],
                [
                  "style",
                  "margin-left: 7px;cursor: pointer;width: 60px;font-size: 10px;",
                ],
              ],
              null,
              [[null, "click"]],
              function (t, n, l) {
                var e = !0,
                  i = t.component;
                return (
                  "click" === n &&
                    (e =
                      !1 !==
                        i.redeemBonus(
                          null == i.object.playerBonusDetails
                            ? null
                            : i.object.playerBonusDetails.canRedeem
                        ) && e),
                  e
                );
              },
              null,
              null
            )),
            (t()(), e.Kb(8, null, [" ", " "])),
            e.Eb(131072, s.j, [s.k, e.h]),
            (t()(),
            e.qb(
              10,
              0,
              null,
              null,
              4,
              "div",
              [["class", "col-lg-3 col-md-6 col-sm-12"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.fb(16777216, null, null, 1, null, en)),
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
            (t()(), e.fb(16777216, null, null, 1, null, sn)),
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
          ],
          function (t, n) {
            var l = n.component;
            t(n, 12, 0, !l.bonusLoader), t(n, 14, 0, l.bonusLoader);
          },
          function (t, n) {
            t(n, 3, 0, e.Lb(n, 3, 0, e.Cb(n, 4).transform("Bonus"))),
              t(n, 8, 0, e.Lb(n, 8, 0, e.Cb(n, 9).transform("Redeem")));
          }
        );
      }
      function an(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(
              0,
              0,
              null,
              null,
              8,
              "div",
              [["class", "row valuecl"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              1,
              0,
              null,
              null,
              3,
              "div",
              [["class", "col-lg-9 col-md-6 col-sm-12"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              2,
              0,
              null,
              null,
              0,
              "img",
              [
                ["alt", ""],
                ["class", "menuuimgg"],
                ["src", "assets/images/total_rolling.png"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(3, null, [" ", " "])),
            e.Eb(131072, s.j, [s.k, e.h]),
            (t()(),
            e.qb(
              5,
              0,
              null,
              null,
              3,
              "div",
              [["class", "col-lg-3 col-md-6 col-sm-12"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              6,
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
            (t()(), e.Kb(7, null, [" ", ""])),
            e.Gb(8, 1),
          ],
          null,
          function (t, n) {
            var l = n.component;
            t(n, 3, 0, e.Lb(n, 3, 0, e.Cb(n, 4).transform("Total Rolling")));
            var i = e.Lb(
              n,
              7,
              0,
              t(
                n,
                8,
                0,
                e.Cb(n.parent.parent, 1),
                null == l.object.playerBonusDetails
                  ? null
                  : l.object.playerBonusDetails.totalRolling
              )
            );
            t(n, 7, 0, i);
          }
        );
      }
      function un(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(
              0,
              0,
              null,
              null,
              8,
              "div",
              [["class", "row valuecl"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              1,
              0,
              null,
              null,
              3,
              "div",
              [["class", "col-lg-9 col-md-6 col-sm-12"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              2,
              0,
              null,
              null,
              0,
              "img",
              [
                ["alt", ""],
                ["class", "menuuimgg"],
                ["src", "assets/images/re_rolling.png"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(3, null, [" ", " "])),
            e.Eb(131072, s.j, [s.k, e.h]),
            (t()(),
            e.qb(
              5,
              0,
              null,
              null,
              3,
              "div",
              [["class", "col-lg-3 col-md-6 col-sm-12"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              6,
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
            (t()(), e.Kb(7, null, [" ", ""])),
            e.Gb(8, 1),
          ],
          null,
          function (t, n) {
            var l = n.component;
            t(
              n,
              3,
              0,
              e.Lb(n, 3, 0, e.Cb(n, 4).transform("Remaining Rolling"))
            );
            var i = e.Lb(
              n,
              7,
              0,
              t(
                n,
                8,
                0,
                e.Cb(n.parent.parent, 1),
                null == l.object.playerBonusDetails
                  ? null
                  : l.object.playerBonusDetails.remainingRolling
              )
            );
            t(n, 7, 0, i);
          }
        );
      }
      function rn(t) {
        return e.Mb(
          0,
          [
            (t()(),
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
            (t()(), e.fb(16777216, null, null, 1, null, on)),
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
            (t()(), e.fb(16777216, null, null, 1, null, an)),
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
            (t()(), e.fb(16777216, null, null, 1, null, un)),
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
            (t()(), e.fb(0, null, null, 0)),
          ],
          function (t, n) {
            var l = n.component;
            t(
              n,
              2,
              0,
              (null == l.object.playerBonusDetails
                ? null
                : l.object.playerBonusDetails.bonusAmount) >= 0
            ),
              t(
                n,
                4,
                0,
                (null == l.object.playerBonusDetails
                  ? null
                  : l.object.playerBonusDetails.bonusAmount) >= 0
              ),
              t(
                n,
                6,
                0,
                (null == l.object.playerBonusDetails
                  ? null
                  : l.object.playerBonusDetails.bonusAmount) >= 0
              );
          },
          null
        );
      }
      function cn(t) {
        return e.Mb(
          0,
          [
            (t()(),
            e.qb(
              0,
              0,
              null,
              null,
              7,
              "li",
              [],
              null,
              [[null, "click"]],
              function (t, n, l) {
                var e = !0;
                return (
                  "click" === n &&
                    (e =
                      !1 !==
                        t.component.goToprofile(t.parent.context.$implicit) &&
                      e),
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
                ngClass: [0, "ngClass"],
              },
              null
            ),
            (t()(),
            e.qb(
              3,
              0,
              null,
              null,
              4,
              "div",
              [],
              null,
              [[null, "click"]],
              function (t, n, l) {
                var e = !0;
                return (
                  "click" === n &&
                    (e =
                      !1 !==
                        t.component.openProfileMenu(
                          "arrow_box",
                          "active-box"
                        ) && e),
                  e
                );
              },
              null,
              null
            )),
            (t()(),
            e.qb(
              4,
              0,
              null,
              null,
              0,
              "img",
              [["class", "account-details-icon"]],
              [[8, "src", 4]],
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(5, 0, null, null, 2, "a", [], null, null, null, null, null)),
            (t()(), e.Kb(6, null, ["", ""])),
            e.Eb(131072, s.j, [s.k, e.h]),
          ],
          function (t, n) {
            t(
              n,
              2,
              0,
              "Set Home screen" == n.parent.context.$implicit.title &&
                n.component.object.demoUser
                ? "disable"
                : ""
            );
          },
          function (t, n) {
            t(n, 4, 0, n.parent.context.$implicit.img),
              t(
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
                      null == n.parent.context.$implicit
                        ? null
                        : n.parent.context.$implicit.title
                    )
                )
              );
          }
        );
      }
      function hn(t) {
        return e.Mb(
          0,
          [
            (t()(),
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
            (t()(), e.fb(16777216, null, null, 1, null, cn)),
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
            (t()(), e.fb(0, null, null, 0)),
          ],
          function (t, n) {
            t(n, 2, 0, n.context.$implicit.isPlayer);
          },
          null
        );
      }
      function gn(t) {
        return e.Mb(
          0,
          [
            (t()(),
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
              h.b,
              h.a
            )),
            e.pb(1, 114688, null, 0, g.a, [], null, null),
          ],
          function (t, n) {
            t(n, 1, 0);
          },
          null
        );
      }
      function bn(t) {
        return e.Mb(
          0,
          [
            e.Eb(0, b.a, []),
            e.Eb(0, d.a, []),
            e.Eb(0, p.a, []),
            e.Eb(0, i.v, []),
            e.Ib(671088640, 1, {
              completer: 0,
            }),
            e.Ib(671088640, 2, {
              nameField: 0,
            }),
            (t()(),
            e.qb(
              6,
              0,
              null,
              null,
              112,
              "div",
              [["class", ""]],
              null,
              null,
              null,
              null,
              null
            )),
            e.Hb(512, null, i.A, i.B, [e.q, e.r, e.k, e.B]),
            e.pb(
              8,
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
            (t()(),
            e.qb(
              9,
              0,
              null,
              null,
              109,
              "div",
              [["header", ""]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              10,
              0,
              null,
              null,
              108,
              "div",
              [
                ["class", "mainheaderr"],
                ["headerBg", ""],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              11,
              0,
              null,
              null,
              107,
              "nav",
              [["class", "navbar"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              12,
              0,
              null,
              null,
              106,
              "div",
              [["class", "container-fluid mainheadeing"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              13,
              0,
              null,
              null,
              5,
              "div",
              [["class", "navbar-header"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              14,
              0,
              null,
              null,
              2,
              "img",
              [],
              [[8, "src", 4]],
              [[null, "click"]],
              function (t, n, l) {
                var e = !0;
                return (
                  "click" === n && (e = !1 !== t.component.goHome() && e), e
                );
              },
              null,
              null
            )),
            e.Hb(512, null, i.A, i.B, [e.q, e.r, e.k, e.B]),
            e.pb(
              16,
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
            (t()(), e.fb(16777216, null, null, 1, null, _t)),
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
            (t()(),
            e.qb(
              19,
              0,
              null,
              null,
              10,
              "ul",
              [["class", "nav navbar-nav navbar-nleft navbar-left"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.fb(16777216, null, null, 1, null, jt)),
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
            (t()(), e.fb(16777216, null, null, 1, null, At)),
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
            (t()(),
            e.qb(24, 0, null, null, 2, "li", [], null, null, null, null, null)),
            (t()(), e.fb(16777216, null, null, 1, null, Et)),
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
            (t()(),
            e.qb(27, 0, null, null, 2, "li", [], null, null, null, null, null)),
            (t()(), e.fb(16777216, null, null, 1, null, Lt)),
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
            (t()(),
            e.qb(
              30,
              0,
              null,
              null,
              88,
              "ul",
              [["class", "nav navbar-nav navbar-na11 navbar-right"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.fb(16777216, null, null, 1, null, kt)),
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
            (t()(), e.fb(16777216, null, null, 1, null, Rt)),
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
            (t()(), e.fb(16777216, null, null, 1, null, Nt)),
            e.pb(
              36,
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
            (t()(), e.fb(16777216, null, null, 1, null, Gt)),
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
            (t()(),
            e.qb(
              39,
              0,
              null,
              null,
              2,
              "li",
              [["class", "apk-li"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.fb(16777216, null, null, 1, null, Ht)),
            e.pb(
              41,
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
            (t()(),
            e.qb(
              42,
              0,
              null,
              null,
              2,
              "li",
              [["class", "apk-li"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.fb(16777216, null, null, 1, null, $t)),
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
            (t()(),
            e.qb(
              45,
              0,
              null,
              null,
              8,
              "li",
              [["class", "languageLi"]],
              null,
              null,
              null,
              null,
              null
            )),
            e.Hb(512, null, i.A, i.B, [e.q, e.r, e.k, e.B]),
            e.pb(
              47,
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
            (t()(),
            e.qb(
              48,
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
            (t()(), e.Kb(49, null, [" ", " : \xa0 "])),
            e.Eb(131072, s.j, [s.k, e.h]),
            (t()(),
            e.qb(
              51,
              0,
              [["langSelect", 1]],
              null,
              2,
              "select",
              [],
              null,
              [[null, "change"]],
              function (t, n, l) {
                var i = !0,
                  s = t.component;
                return (
                  "change" === n &&
                    (i =
                      !1 !==
                        [
                          s.translate.use(e.Cb(t, 51).value),
                          s.object.changeLanguage(e.Cb(t, 51).value),
                        ] && i),
                  i
                );
              },
              null,
              null
            )),
            (t()(), e.fb(16777216, null, null, 1, null, zt)),
            e.pb(
              53,
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
            (t()(),
            e.qb(
              54,
              0,
              null,
              null,
              10,
              "li",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.fb(16777216, null, null, 1, null, Vt)),
            e.pb(
              56,
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
            (t()(),
            e.qb(
              57,
              0,
              null,
              null,
              7,
              "div",
              [["class", "Login-rightSide"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              58,
              0,
              null,
              null,
              4,
              "div",
              [["class", "buttonWrapper"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.fb(16777216, null, null, 1, null, Jt)),
            e.pb(
              60,
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
            (t()(), e.fb(16777216, null, null, 1, null, Yt)),
            e.pb(
              62,
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
            (t()(), e.fb(16777216, null, null, 1, null, Xt)),
            e.pb(
              64,
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
            (t()(),
            e.qb(
              65,
              0,
              null,
              null,
              53,
              "div",
              [["arrow_box", ""]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              66,
              0,
              null,
              null,
              6,
              "div",
              [["class", "row dropslider"]],
              null,
              [[null, "click"]],
              function (t, n, l) {
                var e = !0;
                return (
                  "click" === n &&
                    (e =
                      !1 !==
                        t.component.openProfileMenu(
                          "arrow_box",
                          "active-box"
                        ) && e),
                  e
                );
              },
              null,
              null
            )),
            (t()(),
            e.qb(
              67,
              0,
              null,
              null,
              1,
              "span",
              [["class", "arrowflrl"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              68,
              0,
              null,
              null,
              0,
              "img",
              [
                ["alt", ""],
                ["src", "assets/images/arrowleft.png"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              69,
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
            (t()(), e.Kb(70, null, ["", ""])),
            (t()(), e.fb(16777216, null, null, 1, null, Qt)),
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
            (t()(),
            e.qb(
              73,
              0,
              null,
              null,
              9,
              "div",
              [["class", "row valuecl"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              74,
              0,
              null,
              null,
              3,
              "div",
              [["class", "col-lg-8 col-md-6 col-sm-12"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              75,
              0,
              null,
              null,
              0,
              "img",
              [
                ["alt", ""],
                ["class", "menuuimgg"],
                ["src", "assets/images/avaibala.png"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(76, null, [" ", " "])),
            e.Eb(131072, s.j, [s.k, e.h]),
            (t()(),
            e.qb(
              78,
              0,
              null,
              null,
              4,
              "div",
              [["class", "col-lg-4 col-md-6 col-sm-12"]],
              null,
              null,
              null,
              null,
              null
            )),
            e.Hb(512, null, i.A, i.B, [e.q, e.r, e.k, e.B]),
            e.pb(
              80,
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
            (t()(), e.Kb(81, null, [" ", " "])),
            e.Gb(82, 1),
            (t()(), e.fb(16777216, null, null, 1, null, ln)),
            e.pb(
              84,
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
            (t()(),
            e.qb(
              85,
              0,
              null,
              null,
              12,
              "div",
              [["class", "row valuecl"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              86,
              0,
              null,
              null,
              4,
              "div",
              [["class", "col-lg-8 col-md-6 col-sm-12 "]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              87,
              0,
              null,
              null,
              0,
              "img",
              [
                ["alt", ""],
                ["class", "menuuimgg"],
                ["src", "assets/images/wings.png"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(88, null, [" ", " "])),
            e.Eb(131072, s.j, [s.k, e.h]),
            e.Eb(131072, s.j, [s.k, e.h]),
            (t()(),
            e.qb(
              91,
              0,
              null,
              null,
              6,
              "div",
              [["class", "col-lg-4 col-md-6 col-sm-12"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              92,
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
              94,
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
            (t()(), e.Kb(95, null, ["", ""])),
            e.Gb(96, 1),
            e.Gb(97, 1),
            (t()(),
            e.qb(
              98,
              0,
              null,
              null,
              10,
              "div",
              [["class", "row valuecl"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              99,
              0,
              null,
              null,
              3,
              "div",
              [["class", "col-lg-8 col-md-6 col-sm-12 "]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              100,
              0,
              null,
              null,
              0,
              "img",
              [
                ["alt", ""],
                ["class", "menuuimgg"],
                ["src", "assets/images/expre.png"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(101, null, [" ", ""])),
            e.Eb(131072, s.j, [s.k, e.h]),
            (t()(),
            e.qb(
              103,
              0,
              null,
              null,
              5,
              "div",
              [["class", "col-lg-4 col-md-6 col-sm-12"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              104,
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
            e.Hb(512, null, i.A, i.B, [e.q, e.r, e.k, e.B]),
            e.pb(
              106,
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
            (t()(), e.Kb(107, null, ["", ""])),
            e.Gb(108, 1),
            (t()(), e.fb(16777216, null, null, 1, null, rn)),
            e.pb(
              110,
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
            (t()(),
            e.qb(
              111,
              0,
              null,
              null,
              3,
              "div",
              [
                ["class", "row"],
                [
                  "style",
                  "border: none !important; background-color: transparent !important;",
                ],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            e.qb(
              112,
              0,
              null,
              null,
              2,
              "ul",
              [["class", "menuiitemm"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.fb(16777216, null, null, 1, null, hn)),
            e.pb(
              114,
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
            (t()(),
            e.qb(
              115,
              0,
              null,
              null,
              3,
              "div",
              [["class", "row logutt"]],
              null,
              [[null, "click"]],
              function (t, n, l) {
                var e = !0;
                return (
                  "click" === n && (e = !1 !== t.component.playerLogout() && e),
                  e
                );
              },
              null,
              null
            )),
            (t()(),
            e.qb(
              116,
              0,
              null,
              null,
              2,
              "button",
              [["class", "btn btn-custom"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), e.Kb(117, null, [" ", ""])),
            e.Eb(131072, s.j, [s.k, e.h]),
            (t()(),
            e.qb(
              119,
              0,
              null,
              null,
              1,
              "app-login",
              [],
              null,
              null,
              null,
              y.b,
              y.a
            )),
            e.pb(
              120,
              114688,
              null,
              0,
              O.a,
              [C.a, v.a, u.e, I.a, P.a, x.a, i.d],
              null,
              null
            ),
            (t()(),
            e.qb(
              121,
              0,
              null,
              null,
              1,
              "app-force-to-change-password",
              [],
              null,
              null,
              null,
              M.b,
              M.a
            )),
            e.pb(
              122,
              245760,
              null,
              0,
              S.a,
              [C.a, w.a, v.a, P.a, u.e, I.a],
              {
                userDetails: [0, "userDetails"],
              },
              null
            ),
            (t()(),
            e.qb(
              123,
              0,
              null,
              null,
              1,
              "app-exposure-details",
              [],
              null,
              null,
              null,
              L,
              A
            )),
            e.pb(
              124,
              245760,
              null,
              0,
              j,
              [C.a, v.a, P.a, w.a, w.p, x.a],
              {
                exposureDetailsList: [0, "exposureDetailsList"],
              },
              null
            ),
            (t()(),
            e.qb(
              125,
              0,
              null,
              null,
              1,
              "app-notification-details",
              [],
              null,
              null,
              null,
              U,
              R
            )),
            e.pb(
              126,
              114688,
              null,
              0,
              k,
              [e.h, w.p, v.a, P.a],
              {
                notificationPnL: [0, "notificationPnL"],
              },
              null
            ),
            (t()(),
            e.qb(
              127,
              0,
              null,
              null,
              1,
              "app-player-signup",
              [],
              null,
              null,
              null,
              Ct.b,
              Ct.a
            )),
            e.pb(
              128,
              114688,
              null,
              0,
              vt.a,
              [C.a, v.a, u.e, I.a, P.a, x.a],
              null,
              null
            ),
            (t()(),
            e.qb(
              129,
              0,
              null,
              null,
              1,
              "app-bonus-terms",
              [],
              null,
              null,
              null,
              Pt.b,
              Pt.a
            )),
            e.pb(130, 114688, null, 0, wt.a, [C.a, v.a], null, null),
            (t()(),
            e.qb(
              131,
              0,
              null,
              null,
              1,
              "app-set-homescreen",
              [],
              null,
              null,
              null,
              G.b,
              G.a
            )),
            e.pb(
              132,
              245760,
              null,
              0,
              H.a,
              [C.a, v.a, P.a, w.p, x.a],
              null,
              null
            ),
            (t()(),
            e.qb(
              133,
              0,
              null,
              null,
              1,
              "app-show-notification",
              [],
              null,
              null,
              null,
              xt.b,
              xt.a
            )),
            e.pb(
              134,
              245760,
              null,
              0,
              yt.a,
              [w.p, v.a, P.a],
              {
                txnNotification: [0, "txnNotification"],
              },
              null
            ),
            (t()(),
            e.qb(
              135,
              0,
              null,
              null,
              1,
              "app-annoucment-model",
              [],
              null,
              null,
              null,
              m.b,
              m.a
            )),
            e.pb(
              136,
              114688,
              null,
              0,
              f.a,
              [C.a, v.a, P.a, w.p, x.a],
              null,
              null
            ),
            (t()(), e.fb(16777216, null, null, 1, null, gn)),
            e.pb(
              138,
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
            (t()(),
            e.qb(
              139,
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
              function (t, n, l) {
                var e = !0,
                  i = t.component;
                return (
                  "hideModelEvent" === n &&
                    (e = !1 !== i.hidemodalSportBook() && e),
                  "transfertoJiliCoin" === n &&
                    (e = !1 !== i.transfercoinToSportsGames(l, "web") && e),
                  e
                );
              },
              Ot.b,
              Ot.a
            )),
            e.pb(
              140,
              114688,
              null,
              0,
              It.a,
              [v.a],
              {
                gameName: [0, "gameName"],
              },
              {
                hideModelEvent: "hideModelEvent",
                transfertoJiliCoin: "transfertoJiliCoin",
              }
            ),
          ],
          function (t, n) {
            var l = n.component;
            t(n, 8, 0, "", l.object.loginState.state.appSkin),
              t(n, 16, 0, l.object.isexch9 ? "isExch9" : ""),
              t(n, 18, 0, l.object.casinoEventDetail),
              t(n, 21, 0, l.object.routeUrl),
              t(n, 23, 0, !l.object.routeUrl),
              t(n, 26, 0, !l.object.specialMarket),
              t(
                n,
                29,
                0,
                l.object.getLoginInstance().state.suspended &&
                  l.object.getLoginInstance().getIsLogin()
              ),
              t(n, 32, 0, l.object.themeChange.bankingView),
              t(n, 34, 0, l.object.getLoginInstance().state.exposureExist),
              t(n, 36, 0, l.object.getLoginInstance().state.exposureExist),
              t(n, 38, 0, l.object.getLoginInstance().state.isPlayer),
              t(
                n,
                41,
                0,
                "20230629" == l.object.themeChange.whitelableId ||
                  "20210217" == l.object.themeChange.whitelableId ||
                  "20210224" == l.object.themeChange.whitelableId ||
                  "20230555" == l.object.themeChange.whitelableId
              ),
              t(n, 44, 0, "20230698" == l.object.themeChange.whitelableId),
              t(
                n,
                47,
                0,
                "languageLi",
                l.object.getLoginInstance().getIsLogin() ? "sportLogin" : ""
              ),
              t(n, 53, 0, l.translate.getLangs()),
              t(n, 56, 0, l.object.getLoginInstance().getIsLogin()),
              t(n, 60, 0, !l.object.getLoginInstance().getIsLogin()),
              t(n, 62, 0, !l.object.getLoginInstance().getIsLogin()),
              t(n, 64, 0, !l.object.getLoginInstance().getIsLogin()),
              t(n, 72, 0, !l.object.getLoginInstance().state.writeprivilege),
              t(
                n,
                80,
                0,
                "col-lg-4 col-md-6 col-sm-12",
                (null == l.userProfileDetail
                  ? null
                  : l.userProfileDetail.availBal) < 0
                  ? "negativeValue"
                  : ""
              ),
              t(n, 84, 0, l.object.recallButtonPermission),
              t(
                n,
                94,
                0,
                (null == l.userProfileDetail
                  ? null
                  : l.userProfileDetail.refPnL) >= 0
                  ? "positiveValue"
                  : null ==
                    (null == l.userProfileDetail
                      ? null
                      : l.userProfileDetail.refPnL)
                  ? ""
                  : "negativeValue"
              ),
              t(
                n,
                106,
                0,
                (null == l.userProfileDetail
                  ? null
                  : l.userProfileDetail.exposure) > 0
                  ? ""
                  : "negativeValue"
              ),
              t(n, 110, 0, l.object.themeChange.bonusEnable),
              t(n, 114, 0, l.listData),
              t(n, 120, 0),
              t(n, 122, 0, l.userProfileDetail),
              t(n, 124, 0, l.exposureDetailsList),
              t(n, 126, 0, l.notificationPnL),
              t(n, 128, 0),
              t(n, 130, 0),
              t(n, 132, 0),
              t(n, 134, 0, l.notificationPnL),
              t(n, 136, 0),
              t(n, 138, 0, l.loading),
              t(n, 140, 0, "Sports Book");
          },
          function (t, n) {
            var l = n.component;
            t(n, 14, 0, l.object.themeChange.logo),
              t(n, 49, 0, e.Lb(n, 49, 0, e.Cb(n, 50).transform("SELECT"))),
              t(
                n,
                70,
                0,
                null == l.userProfileDetail
                  ? null
                  : l.userProfileDetail.userName
              ),
              t(
                n,
                76,
                0,
                e.Lb(n, 76, 0, e.Cb(n, 77).transform("Available Balance"))
              );
            var i = e.Lb(
              n,
              81,
              0,
              t(
                n,
                82,
                0,
                e.Cb(n, 0),
                null == l.userProfileDetail
                  ? null
                  : l.userProfileDetail.availBal
              )
            );
            t(n, 81, 0, i),
              t(
                n,
                88,
                0,
                e.Lb(
                  n,
                  88,
                  0,
                  (null == l.userProfileDetail
                    ? null
                    : l.userProfileDetail.refPnL) >= 0
                    ? e.Cb(n, 89).transform("Winnings")
                    : e.Cb(n, 90).transform("Loosing")
                )
              );
            var s =
              (null == l.userProfileDetail
                ? null
                : l.userProfileDetail.refPnL) > 0
                ? "+" +
                  e.Lb(
                    n,
                    95,
                    0,
                    t(
                      n,
                      96,
                      0,
                      e.Cb(n, 1),
                      null == l.userProfileDetail
                        ? null
                        : l.userProfileDetail.refPnL
                    )
                  )
                : null ==
                  (null == l.userProfileDetail
                    ? null
                    : l.userProfileDetail.refPnL)
                ? "0.0"
                : 0 ==
                  (null == l.userProfileDetail
                    ? null
                    : l.userProfileDetail.refPnL)
                ? "0.0"
                : "-" +
                  e.Lb(
                    n,
                    95,
                    0,
                    t(
                      n,
                      97,
                      0,
                      e.Cb(n, 1),
                      null == l.userProfileDetail
                        ? null
                        : l.userProfileDetail.refPnL
                    )
                  );
            t(n, 95, 0, s),
              t(n, 101, 0, e.Lb(n, 101, 0, e.Cb(n, 102).transform("Exposure")));
            var o = e.Lb(
              n,
              107,
              0,
              t(
                n,
                108,
                0,
                e.Cb(n, 1),
                null == l.userProfileDetail
                  ? null
                  : l.userProfileDetail.exposure
              )
            );
            t(n, 107, 0, o),
              t(n, 117, 0, e.Lb(n, 117, 0, e.Cb(n, 118).transform("Logout")));
          }
        );
      }
      l("9Low"),
        l.d(n, "a", function () {
          return dn;
        }),
        l.d(n, "b", function () {
          return Cn;
        });
      var dn = e.ob({
        encapsulation: 0,
        styles: [
          [
            '.tcolort[_ngcontent-%COMP%]{color:#42b7c7;margin-left:10px}.tred[_ngcontent-%COMP%]{color:red!important;margin-left:10px}.negativeValue[_ngcontent-%COMP%]{color:red!important}.positiveValue[_ngcontent-%COMP%]{color:green!important}.isExch9[_ngcontent-%COMP%]{width:110px!important}.navbar-nav[_ngcontent-%COMP%]{margin:0;background-color:#191e45}.skin-1[_ngcontent-%COMP%]   div[headerBg][_ngcontent-%COMP%]{background-color:#262c59;border-bottom:none;height:60px}div[header][_ngcontent-%COMP%]   div[headerBg][_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:0 14px;opacity:1}.mainheadeing[_ngcontent-%COMP%]{padding:0}.navbar-na11[_ngcontent-%COMP%]::before{margin-left:-80px;position:absolute}div[header][_ngcontent-%COMP%]   div[headerBg][_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[profile][_ngcontent-%COMP%]{height:40px;width:auto;background-color:transparent;border-radius:0;padding:5px 0;text-align:center;margin:0!important}div[header][_ngcontent-%COMP%]   div[headerBg][_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[profile][_ngcontent-%COMP%]:last-child{background-color:#fff!important}.namepro[_ngcontent-%COMP%]{float:left;font-size:14px;padding:3px 5px;font-family:Oswald,sans-serif}.prodropicom[_ngcontent-%COMP%]{float:right;padding:0 10px 0 13px!important;background-color:#42b7c7;text-align:center;height:40px;margin-top:-5px;margin-left:9px;line-height:40px}div[header][_ngcontent-%COMP%]   div[headerBg][_ngcontent-%COMP%]   .navbar-header[_ngcontent-%COMP%]{outline:0;width:263px;height:59px}div[header][_ngcontent-%COMP%]   div[headerBg][_ngcontent-%COMP%]   .navbar-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-top:5px;margin-left:14px;cursor:pointer;width:180px}i.menubarmw[_ngcontent-%COMP%]{float:right;margin-right:17px;margin-top:12px}.menubarm[_ngcontent-%COMP%]{width:30px!important}.navbar-nleft[_ngcontent-%COMP%]{height:55px;background-color:transparent;margin-left:20px;font-family:Oswald,sans-serif}.navbar-nleft[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-family:Oswald,sans-serif!important;font-size:16px!important}.navbar-nleft[_ngcontent-%COMP%]   li.menuba[_ngcontent-%COMP%]{margin-top:6px!important}.navbar-nleft[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .menubarmdash[_ngcontent-%COMP%]{height:16px;margin-right:10px;margin-top:-2px}.navbar-nleft[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:38px;margin-top:0;background-color:#ffffff29;background-position:10px,center;background-repeat:no-repeat;padding:0 0 4px 35px;border:none;color:#fff;background-size:22px;width:320px}input.form-control[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#fff!important;font-weight:400!important;font-family:Source Sans Pro}input.form-control[_ngcontent-%COMP%]::-moz-placeholder{color:#fff!important;font-weight:400!important;font-family:Source Sans Pro}input.form-control[_ngcontent-%COMP%]::-ms-input-placeholder{color:#fff!important;font-weight:400!important;font-family:Source Sans Pro}input.form-control[_ngcontent-%COMP%]::placeholder{color:#fff!important;font-weight:400!important;font-family:Source Sans Pro}.base-c[_ngcontent-%COMP%]{cursor:pointer}input[_ngcontent-%COMP%]::-webkit-calendar-picker-indicator{display:none}.badge[_ngcontent-%COMP%]{position:absolute;top:4px;right:-12px;padding:2px 5px;border-radius:50%;background-color:red;color:#fff}.menuopen[_ngcontent-%COMP%]{max-height:290px;margin:0;padding:0;list-style:none;overflow-x:hidden}.notifications-menu[_ngcontent-%COMP%]{width:280px;top:100%;padding:0!important;margin:0!important;min-height:300px!important}.notifications-menu[_ngcontent-%COMP%]   .menuopen[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{border-bottom:1px solid #ccc;width:100%;padding:0!important;margin:0!important}.notifications-menu[_ngcontent-%COMP%]   .menuopen[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:14px 16px!important;float:left;width:100%;color:#000}.dropdown-menu[_ngcontent-%COMP%]{float:left}.dropdown-menu[_ngcontent-%COMP%]   .footermenu[_ngcontent-%COMP%]{margin:0!important;width:100%!important;float:left;padding:4px 0!important;border-top:1px solid #ccc}.downnotifi[_ngcontent-%COMP%]:after{bottom:100%;left:62%;border:10px solid rgba(136,183,213,0);content:"";height:0;width:0;position:absolute;pointer-events:none;border-bottom-color:#fff;margin-left:-10px}.margin0[_ngcontent-%COMP%]{margin:0}.navbar[_ngcontent-%COMP%]{border-bottom:none!important}',
          ],
        ],
        data: {},
      });
      function pn(t) {
        return e.Mb(
          0,
          [
            (t()(),
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
            (t()(),
            e.qb(
              1,
              0,
              null,
              null,
              1,
              "app-d1-header",
              [],
              null,
              [["document", "click"]],
              function (t, n, l) {
                var i = !0;
                return (
                  "document:click" === n &&
                    (i = !1 !== e.Cb(t, 2).onClick(l.target) && i),
                  i
                );
              },
              ft,
              z
            )),
            e.pb(
              2,
              245760,
              null,
              0,
              $,
              [C.a, v.a, P.a, w.a, e.k, w.p, x.a, w.a],
              null,
              null
            ),
          ],
          function (t, n) {
            t(n, 2, 0);
          },
          null
        );
      }
      function mn(t) {
        return e.Mb(
          0,
          [
            (t()(),
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
            (t()(),
            e.qb(
              1,
              0,
              null,
              null,
              1,
              "app-d2-header",
              [],
              null,
              [["document", "click"]],
              function (t, n, l) {
                var i = !0;
                return (
                  "document:click" === n &&
                    (i = !1 !== e.Cb(t, 2).onClick(l.target) && i),
                  i
                );
              },
              bn,
              St
            )),
            e.pb(
              2,
              245760,
              null,
              0,
              Mt,
              [C.a, x.a, v.a, P.a, w.a, e.k, w.p, x.a, w.a, s.k],
              null,
              null
            ),
          ],
          function (t, n) {
            t(n, 2, 0);
          },
          null
        );
      }
      function fn(t) {
        return e.Mb(
          0,
          [
            (t()(), e.fb(16777216, null, null, 1, null, mn)),
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
            (t()(), e.fb(0, null, null, 0)),
          ],
          function (t, n) {
            t(n, 1, 0, "D2" == n.component.object.themeChange.uxDesign);
          },
          null
        );
      }
      function Cn(t) {
        return e.Mb(
          0,
          [
            (t()(), e.fb(16777216, null, null, 1, null, pn)),
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
            (t()(), e.fb(0, [["secondCond", 2]], null, 0, null, fn)),
          ],
          function (t, n) {
            t(
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
