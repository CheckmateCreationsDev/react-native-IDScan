
    // console.log("Data received >"+data+"<");
    // reference : http://www.aamva.org/WorkArea/linkit.aspx?LinkIdentifier=id&ItemID=4435&libID=4412
    // starting at page 55 (Table D.1 - 2D symbols header format)
    // we have 8 references of DL out, each one as differences, states can pick in version that suits more or not.
    // Versions - Year of specification :
    // 01 - 2000  [DONE]
    // 02 - 2003
    // 03 - 2005
    // 04 - 2009
    // 05 - 2010
    // 06 - 2011
    // 07 - 2012
    // 08 - 2013  [DONE] [NOT VERIFIED]
    formats = [{
     name:"2013 CDS Final",
     header :
     [{
       description : "Compliance Indicator",
       position : 0,
       length : 1,
       value : "@"
     },
     {
       description : "Data Element Separator",
       position : 1,
       length : 1,
       id : "dataElementSeparator"
     },
     {
       description : "Record Separator",
       position : 2,
       length : 1
     },
     {
       description : "Segment Terminator",
       position : 3,
       length : 1
     },
     {
       description : "File Type",
       position : 4,
       length : 5
     },
     {
       description : "Issuer Identification Number (IIN)",
       position : 9,
       length : 6
     },
     {
       description : "AAMVA Version Number",
       position : 15,
       length : 2,
       value : "08",
       id : "version"
     },
     {
       description : "Jurisdiction Version Number",
       position : 17,
       length : 2
     },
     {
       description : "Number of Entries",
       position : 19,
       length : 2
     }
   ,{
       description : "Subfile Type",
       position : 21,
       length : 2
   },{
       description : "Offset",
       position: 23,
       length : 4,
       id : "dataOffset"
   },{
       description : "Length",
       position: 27,
       length : 4
   }],
   dataElements:[
     {code : "DAA", description:"Customer Full Name"},
     {code : "DAC", description:"Customer First Name"},
     {code : "DCS", description:"Customer Family Name", length:40, type:"variable"},
     {code : "DAD", description:"Customer Middle Name"},
     {code : "DAH", description:"Street Address 2"},
     {code : "DCT", description:"Customer Given Name"},
     {code : "DCU", description:"Name Suffix"},
     {code : "DAG", description:"Street Address 1"},
     {code : "DAI", description:"City"},
     {code : "DAJ", description:"Jurisdiction Code"},
     {code : "DAL", description:"Street Address 1 optional"},
     {code : "DAK", description:"Postal Code"},
     {code : "DCG", description:"Country Identification"},
     {code : "DAQ", description:"Customer Id Number"},
     {code : "DCA", description:"Jurisdiction-specific vehicle class", length:6,type:"variable"},
     {code : "DCB", description:"Jurisdiction-specific restriction codes", length:12,type:"variable"},
     {code : "DCD", description:"Jurisdiction-specific endorsement codes", length:5,type:"variable"},
     {code : "DCF", description:"Document Discriminator"},
     {code : "DCH", description:"Vehicle Code"},
     {code : "DBA", description:"Document Expiration Date",length:8,type:"fixed"},
     {code : "DBB", description:"Date Of Birth"},
     {code : "DBC", description:"Sex"},
     {code : "DBD", description:"Issue Date"},
     {code : "DAU", description:"Height"},
     {code : "DCE", description:"Weight"},
     {code : "DAY", description:"Eye Color"},
     {code : "ZWA", description:"Control Number"},
     {code : "ZWB", description:"Endorsements"},
     {code : "ZWC", description:"Transaction Types"},
     {code : "ZWD", description:"Under 18 Until"},
     {code : "ZWE", description:"Under 21 Until"},
     {code : "ZWF", description:"Revision Date"}]
   },{
     name:"2010DLIDCardDesign",
     header :
     [{
       description : "Compliance Indicator",
       position : 0,
       length : 1,
       value : "@"
     },
     {
       description : "Data Element Separator",
       position : 1,
       length : 1,
       id : "dataElementSeparator"
     },
     {
       description : "Record Separator",
       position : 2,
       length : 1
     },
     {
       description : "Segment Terminator",
       position : 3,
       length : 1
     },
     {
       description : "File Type",
       position : 4,
       length : 5
     },
     {
       description : "Issuer Identification Number (IIN)",
       position : 9,
       length : 6
     },
     {
       description : "Version Number",
       position : 15,
       length : 2,
       value : "01",
       id : "version"
     },
     {
       description : "Number of Entries",
       position : 17,
       length : 2
     }
   ,{
       description : "Subfile Type",
       position: 19,
       length : 2
   },{
       description : "Offset",
       position: 21,
       length : 4,
       id:"dataOffset"
   },{
       description : "Length",
       position: 25,
       length : 4
   }],
   dataElements:[
     {code : "DAA", description:"Driver License Name"},
     {code : "DAG", description:"Driver Mailing Street Address 1"},
     {code : "DAI", description:"Driver Mailing City"},
     {code : "DAJ", description:"Driver Mailing Jurisdiction Code"},
     {code : "DAK", description:"Driver Mailing Postal Code"},
     {code : "DAQ", description:"Driver License/ID Number"},
     {code : "DAR", description:"Driver Licence Classification Code"},
     {code : "DAS", description:"Driver Licence Restriction Code"},
     {code : "DAT", description:"Driver License Endorsements Code"},
     {code : "DBA", description:"Driver License Expiration Date"},
     {code : "DBB", description:"Date Of Birth"},
     {code : "DBC", description:"Driver Sex"},
     {code : "DBD", description:"Driver License or ID Document Issue Date"},
     {code : "DAU", description:"Height"},
     {code : "DAW", description:"Weight"},
     {code : "DAY", description:"Eye Color"},
     {code : "DAZ", description:"Hair Color"},
     {code : "DBK", description:"Social Security Number"},
     {code: "PAA", description:"Driver Permit Classification Code"},
     {code: "PAB", description:"Driver Permit Expiration Date"},
     {code: "PAC", description:"Permit Identifier"},
     {code: "PAD", description:"Driver Permit Issue Date"},
     {code: "PAE", description:"Driver Permit Restriction Code"},
     {code: "PAF", description:"Driver Permit Endorsement Code"},
     {code: "DAB", description:"Driver Last Name"},
     {code: "DAC", description:"Driver First Name"},
     {code: "DAD", description:"Driver Middle Name or Initial"},
     {code: "DAE", description:"Driver Name Suffix"},
     {code: "DAF", description:"Driver Name Prefix"},
     {code: "DAH", description:"Driver Mailing Street Address 2"},
     {code: "DAL", description:"Driver Residence Street Address 1"},
     {code: "DAM", description:"Driver Residence Street Address 2"},
     {code: "DAN", description:"Driver Residence City"},
     {code: "DAO", description:"Driver Residence Jurisdiction Code"},
     {code: "DAP", description:"Driver Residence Postal Code"},
     {code: "DAV", description:"Height (CM)"},
     {code: "DAX", description:"Weight (KG)"},
     {code: "DBE", description:"Issue Timestamp"},
     {code: "DBF", description:"Number of Duplicates"},
     {code: "DBG", description:"Medical Indicator/Codes"},
     {code: "DBH", description:"Organ Donor"},
     {code: "DBI", description:"Non-Resident Indicator"},
     {code: "DBJ", description:"Unique Customer Identifier"},
     {code: "DBL", description:"Driver \"AKA\" Date Of Birth"},
     {code: "DBM", description:"Driver \"AKA\" Social Security Number"},
     {code: "DBN", description:"Driver \"AKA\" Name"},
     {code: "DBO", description:"Driver \"AKA\" Last Name"},
     {code: "DBP", description:"Driver \"AKA\" First Name"},
     {code: "DBQ", description:"Driver \"AKA\" Middle Name"},
     {code: "DBR", description:"Driver \"AKA\" Suffix"},
     {code: "DBS", description:"Driver \"AKA\" Prefix"},
     ]
   }];


    module.exports = formats;
