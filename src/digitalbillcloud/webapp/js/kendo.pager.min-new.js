/*
* Kendo UI v2015.1.408 (http://www.telerik.com/kendo-ui)
* Copyright 2015 Telerik AD. All rights reserved.
*
* Kendo UI commercial licenses may be obtained at
* http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
* If you do not own a commercial license, this file shall be governed by the trial license terms.
*/
!function (e, define) {
    define(["./kendo.data.min"], e)
}
    (function ()
    {
        return function (e, t) {
            function n(e, t, n, i, o) {
                return e({ idx: t, text: n, ns: c.ns, numeric: i, title: o || "" })
            } function i(e, t, n) {  
                return x({ className: e.substring(1), text: t, wrapClassName: n || "" });
            } function o(e, t, n, i) {
                e.find(t).parent().attr(c.attr("page"), n).attr("tabindex", -1).toggleClass("k-state-disabled", i)
            } function r(e, t) { o(e, f, 1, 1 >= t) }
            function a(e, t) {
                o(e, g, Math.max(1, t - 1), 1 >= t)
            } function s(e, t, n) {
                o(e, m, Math.min(n, t + 1), t >= n)
            } function l(e, t, n) {
                o(e, p, n, t >= n)
            }   
             
            var c = window.kendo, d = c.ui, u = d.Widget, h = e.proxy, f = ".k-i-seek-w", p = ".k-i-seek-e", g = ".k-i-arrow-w", m = ".k-i-arrow-e", v = "change", _ = ".kendoPager", w = "click", y = "keydown", b = "disabled",
                x = c.template('<a href="\\#" title="#=text#" class="k-link k-pager-nav #= wrapClassName # page-direct"><span class="k-icon #= className # ">#=text#</span></a>'),
                k = u.extend({
                    init: function (t, n) { 
                    
                        var o, d, b = this; u.fn.init.call(b, t, n), ele = "<div style=\"float:right;margin-right:20px;\">",
                            n = b.options, b.dataSource = c.data.DataSource.create(n.dataSource), b.linkTemplate = c.template(b.options.linkTemplate),
                            b.selectTemplate = c.template(b.options.selectTemplate), b.currentPageTemplate = c.template(b.options.currentPageTemplate),
                        o = b.page(), d = b.totalPages(), b._refreshHandler = h(b.refresh, b), b.dataSource.bind(v, b._refreshHandler),
                        //n.info && (b.element.find(".k-pager-info").length || b.element.append('<span class="k-pager-info k-label" style=\"float:left\"/>')),

                        n.previousNext && (b.element.find(f).length || (ele += i(f, n.messages.first, "k-pager-first"), r(b.element, o, d)),

                        b.element.find(g).length || (ele += i(g, n.messages.previous), a(b.element, o, d))),

                        n.numeric && (b.list = b.element.find(".k-pager-numbers"), b.list.length || (b.list = e('<ul class="k-pager-numbers k-reset"  style=\"float:left\"/>'), ele += '<ul class="k-pager-numbers k-reset"  style=\"float:left;margin:0\">')),

                        n.input && (b.element.find(".k-pager-input").length || b.element.append('<span class="k-pager-input k-label">' + n.messages.page + '<input class="k-textbox">' + c.format(n.messages.of, d) + "</span>"),

                        b.element.on(y + _, ".k-pager-input input", h(b._keydown, b))),

                        n.pageSizes && (b.element.find(".k-pager-sizes").length || e('<span class="k-pager-sizes k-label"><select/>' + n.messages.itemsPerPage + "</span>").appendTo(b.element).find("select").html(e.map(e.isArray(n.pageSizes) ? n.pageSizes : [5, 10, 20], function (e) {
                            return "<option>" + e + "</option>"
                        }).join("")).end().appendTo(b.element), b.element.find(".k-pager-sizes select").val(b.pageSize()), c.ui.DropDownList && b.element.find(".k-pager-sizes select").show().kendoDropDownList(),
                        b.element.on(v + _, ".k-pager-sizes select", h(b._change, b))), n.refresh && (b.element.find(".k-pager-refresh").length
                        || b.element.append('<a href="#" class="k-pager-refresh k-link" title="' + n.messages.refresh + '"><span class="k-icon k-i-refresh">' + n.messages.refresh + "</span></a>"),
                        b.element.on(w + _, ".k-pager-refresh", h(b._refreshClick, b))),
                        b.element.on(w + _, "a", h(b._click, b)).addClass("k-pager-wrap k-widget"), b.element.on(w + _, ".k-current-page", h(b._toggleActive, b)), n.autoBind && b.refresh(), c.notify(b),
                        n.previousNext && (b.element.find(m).length || (ele += i(m, n.messages.next), s(b.element, o, d)), b.element.find(p).length || (ele += i(p, n.messages.last, "k-pager-last"), l(b.element, o, d))),
                        b.element.append(ele + "</div>");
                        $(b.element).find(".k-pager-last").css("border-right", "1px solid #ccc");
                    }, destroy: function () {
                        var e = this; u.fn.destroy.call(e), e.element.off(_), e.dataSource.unbind(v, e._refreshHandler), e._refreshHandler = null, c.destroy(e.element), e.element = e.list = null
                    }, events: [v], options: {
                        name: "Pager", selectTemplate: '<li><span class="k-state-selected lable-item active">#=text#</span></li>',
                        currentPageTemplate: '<li class="k-current-page"><span class="k-link k-pager-nav lable-item" >#=text#</span></li>',
                        linkTemplate: '<li><a tabindex="-1" href="\\#" class="k-link lable-item" data-#=ns#page="#=idx#" #if (title !== "") {# title="#=title#" #}# >#=text#</a></li>', buttonCount: 10, autoBind: !0, numeric: !0, info: !0, input: !1, previousNext: !0, pageSizes: !1, refresh: !1, messages: { display: "{0} - {1} of {2} items", empty: "No items to display", page: "Page", of: "of {0}", itemsPerPage: "items per page", first: "Go to the first page", previous: "Go to the previous page", next: "Go to the next page", last: "Go to the last page", refresh: "Refresh", morePages: "More pages" }
                    }, setDataSource: function (e) {
                        var t = this; t.dataSource.unbind(v, t._refreshHandler), t.dataSource = t.options.dataSource = e, e.bind(v, t._refreshHandler), t.options.autoBind && e.fetch()
                    }, refresh: function (e) { 
                        var t, i, o, d = this, u = 1, h = d.page(), f = "", p = d.options, g = d.pageSize(), m = d.dataSource.total(), v = d.totalPages(), _ = d.linkTemplate, w = p.buttonCount; if (!e || "itemchange" != e.action) {
                            
                            if (p.numeric) {
                                for (h > w && (o = h % w, u = 0 === o ? h - w + 1 : h - o + 1), i = Math.min(u + w - 1, v), u > 1 && (f += n(_, u - 1, "...", !1, p.messages.morePages)),
                                    t = u; i >= t; t++) f += n(t == h ? d.selectTemplate : _, t, t, !0); v > i && (f += n(_, t, "...", !1, p.messages.morePages)), "" === f && (f = d.selectTemplate({ text: 0 })),
                                    f = this.currentPageTemplate({ text: h }) + f, $(d.element).find("ul.k-pager-numbers").html(f), ele += f + "</ul>"
                            } p.info && (f = m > 0 ? c.format(p.messages.display, (h - 1) * g + 1, Math.min(h * g, m), m) : p.messages.empty, d.element.find(".k-pager-info").html(f)),
                            p.input && d.element.find(".k-pager-input").html(d.options.messages.page + '<input class="k-textbox">' + c.format(p.messages.of, v)).find("input").val(h).attr(b, 1 > m).toggleClass("k-state-disabled", 1 > m), p.previousNext && (r(d.element, h, v), a(d.element, h, v), s(d.element, h, v), l(d.element, h, v)), p.pageSizes && d.element.find(".k-pager-sizes select").val(g).filter("[" + c.attr("role") + "=dropdownlist]").kendoDropDownList("value", g).kendoDropDownList("text", g)
                        }
                    }, _keydown: function (e) {
                        if (e.keyCode === c.keys.ENTER) {
                            var t = this.element.find(".k-pager-input").find("input"), n = parseInt(t.val(), 10); (isNaN(n) || 1 > n || n > this.totalPages()) && (n = this.page()), t.val(n), this.page(n)
                        }
                    }, _refreshClick: function (e) {
                        e.preventDefault(), this.dataSource.read()
                    }, _change: function (e) {
                        var t = parseInt(e.currentTarget.value, 10); isNaN(t) || this.dataSource.pageSize(t)
                    }, _toggleActive: function () {
                        this.list.toggleClass("k-state-expanded")
                    }, _click: function (t) {
                        var n = e(t.currentTarget); t.preventDefault(), n.is(".k-state-disabled") || this.page(n.attr(c.attr("page")))
                    }, totalPages: function () {
                        return Math.ceil((this.dataSource.total() || 0) / this.pageSize())
                    }, pageSize: function () {
                        return this.dataSource.pageSize() || this.dataSource.total()
                    }, page: function (e) { 
                        return e === t ? this.dataSource.total() > 0 ? this.dataSource.page() : 0 : (this.dataSource.page(e), this.trigger(v, { index: e }), t) }
                }); d.plugin(k)
        }(window.kendo.jQuery), window.kendo
    }, "function" == typeof define && define.amd ? define : function (e, t) { t() });