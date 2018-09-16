// -------------------------------
// Initialize Data Tables
// -------------------------------


$(document).ready(function() {


    $('.datatables.no-search').dataTable({

        "ordering": false,
        "bFilter": false,
        "bPaginate": false,
        "autoWidth": false,
        "bInfo": false,
        "sPaginationType": "bootstrap",
        "columnDefs": [
            // {
            //    "bSortable": false,
            //    "aTargets": [ 'sort-no' ]
            // }
            { "targets": 2, "width": "66px" },
        ],
        scrollY:        "300px",
        scrollX:        "100%",
        scrollCollapse: true,
        paging:         true,
        fixedColumns:   {
            leftColumns: 5
        },
        "pagingType": "full_numbers",
        "oLanguage": {
          "oPaginate": {
            "sFirst": "« first",
            "sPrevious": "‹ prev",
            "sNext": "next ›",
            "sLast": "last »"
          },
            "lengthMenu": '<div>Show'+
            '<span class="recordLength" value="10">5</span>'+
            '<span class="recordLength" value="20">10</span>'+
            '<span class="recordLength" value="30">20</span>'+
            ' Per Page </div>'
        },
            "dom": 'tipl'


    });

    $('.datatables1.no-search').DataTable({

        "ordering": false,
        "bFilter": false,
        "bPaginate": false,
        // "autoWidth": false,
        "sPaginationType": "bootstrap",
        scrollY: "300px",
        "sScrollX":"130%",
        scrollCollapse: true,
        paging:         true,
        fixedColumns:   {
            leftColumns: 2
        },
        "pagingType": "full_numbers",
        "language": {
            "oPaginate": {
                "sFirst": "« first",
                "sPrevious": "‹ prev",
                "sNext": "next ›",
                "sLast": "last »"
            },
            "lengthMenu": '<div>Show'+
            '<span class="recordLength" value="10">5</span>'+
            '<span class="recordLength" value="20">10</span>'+
            '<span class="recordLength" value="30">20</span>'+
            ' Per Page </div>'
        },
        "dom": 'tpl',
        // "columns": [
        //     { "width": "200px" },
        //     { "width": "100px" },
        //     { "width": "100px" },
        //     null,
        //     null,
        //     null,
        //     null,
        //     null,
        //     null,
        //     null,
        //     null ,
        //     null,
        //     null,
        //     null,
        //     null,
        //     null,
        //     null,
        //     null,
        //     null,
        //     null,
        //     null,
        //     null
        //
        //
        //
        // ]

        "columnDefs": [
            { "width": "200px", "targets": 0 },
            { "width": "200px", "targets": 19 }
        ]



    });

    $('.datatables3.no-search').dataTable({

        "ordering": false,
        "bFilter": false,
        "bPaginate": true,
        "Info" : false,
        "autoWidth": false,
        "sPaginationType": "bootstrap",
        "columnDefs": [
            // {
            //    "bSortable": false,
            //    "aTargets": [ 'sort-no' ]
            // }
            // { "targets": 2, "width": "100px" },
            // { "targets": 0, "width": "100px" },
            // { "targets": 1, "width": "100px" },
            // { "targets": 3, "width": "100px" },
            // { "targets": 4, "width": "100px" },
            // { "targets": 10, "width": "300px" },
            // { "targets": 11, "width": "300px" },
            // { "targets": 20, "width": "300px" },




        ],
        // scrollY:        "300px",
        paging:         true,
        "pagingType": "full_numbers",
        "oLanguage": {
            "oPaginate": {
                "sFirst": "« first",
                "sPrevious": "‹ prev",
                "sNext": "next ›",
                "sLast": "last »"
            },
        },
        "dom": 'tipl'


    });
    // $('.datatables.with-search').dataTable({
    //     "aoColumnDefs": [
    //       {
    //          "bSortable": false,
    //          "aTargets": [ 0,1,2,3 ]
    //       },
    //       {
    //         "sClass":  "text-center",
    //         "aTargets" : [0]
    //       },
    //       {
    //         "mData" : "date",
    //         "aTargets" : [7]
    //       }
    //     ],
    //     "bFilter": false,
    //     "bLengthChange": false,
    //     // "bPaginate": false,
    //     // "bInfo" : false,
    //     "sPaginationType": "full_numbers",
    //     "oLanguage": {
    //       "oPaginate": {
    //         "sFirst": "« first",
    //         "sPrevious": "‹ prev",
    //         "sNext": "next ›",
    //         "sLast": "last »"
    //       },
    //       "sInfo": "<b>Total No. of Policies:</b> _TOTAL_",
    //     },
    //     "sDom": '<"top"i>rt<"bottom"flp><"clear">'
    // });

    $('.datatables4.no-search').dataTable({

        "ordering": false,
        "bFilter": false,
        "bPaginate": false,
        "autoWidth": false,
        "bInfo": false,
        "sPaginationType": "bootstrap",
        "columnDefs": [
            // {
            //    "bSortable": false,
            //    "aTargets": [ 'sort-no' ]
            // }
            { "targets": 2, "width": "66px" },
        ],
        paging:         true,
        "pagingType": "full_numbers",
        "oLanguage": {
            "oPaginate": {
                "sFirst": "« first",
                "sPrevious": "‹ prev",
                "sNext": "next ›",
                "sLast": "last »"
            },
            "lengthMenu": '<div>Show'+
            '<span class="recordLength" value="10">5</span>'+
            '<span class="recordLength" value="20">10</span>'+
            '<span class="recordLength" value="30">20</span>'+
            ' Per Page </div>'
        },
        "dom": 'tipl',
        "columnDefs": [
            {
                "width": "100px",
                "targets": 9,
                "render": function (data, type, full, meta) {
                    if (full[9].length  > 10) {
                        return getPartialRemarksHtml(full[9]);//显示部分信息
                    } else {
                        return full[9];//显示原始全部信息            }
                    }
                }
            }
        ],
    "createdRow": function( row, data, dataIndex ) {
            console.log('data', row);
        if(data[9].length > 10){//只有超长，才有td点击事件
            console.log('只有超长，才有td点击事件');
            console.log('this', this);
            $(row).children('td').eq(9).attr('onclick',"changeShowRemarks(this)");
        }
        $(row).children('td').eq(9).attr('content',data[9]);

    },

    });




});