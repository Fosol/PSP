/* 
 * Title Direct Search Services
 *
 * Title Direct Search Services
 *
 * OpenAPI spec version: 4.0.1
 * 
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */
using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace Pims.Ltsa.Models
{
    /// <summary>
    /// OrderParent
    /// </summary>
    [DataContract]
    public partial class OrderParent
    {
        /// <summary>
        /// Indicate the type of the search product requested for an order
        /// </summary>
        /// <value>Indicate the type of the search product requested for an order</value>
        [JsonConverter(typeof(JsonStringEnumMemberConverter))]
        public enum ProductTypeEnum
        {
            /// <summary>
            /// Enum Title for value: title
            /// </summary>
            [EnumMember(Value = "title")]
            title = 1,
            /// <summary>
            /// Enum CommonProperty for value: commonProperty
            /// </summary>
            [EnumMember(Value = "commonProperty")]
            commonProperty = 2,
            /// <summary>
            /// Enum ParcelInfo for value: parcelInfo
            /// </summary>
            [EnumMember(Value = "parcelInfo")]
            parcelInfo = 3,
            /// <summary>
            /// Enum DocOrPlan for value: docOrPlan
            /// </summary>
            [EnumMember(Value = "docOrPlan")]
            docOrPlan = 4,
            /// <summary>
            /// Enum Stc for value: stc
            /// </summary>
            [EnumMember(Value = "stc")]
            stc = 5
        }
        /// <summary>
        /// Indicate the type of the search product requested for an order
        /// </summary>
        /// <value>Indicate the type of the search product requested for an order</value>
        [DataMember(Name = "productType", EmitDefaultValue = false)]
        public ProductTypeEnum ProductType { get; set; }
        /// <summary>
        /// Indicate the status for the order # One of:  1. Processing - Order has been created and is being processed.  Both the fielded data (JSON) and the PDF are not yet available. 1. Fulfilled - Order has been partially fulfilled.  Fielded data (JSON) is available, but PDF is not yet available. 1. Completed - Order has been fully completed.  PDF is available.  Fielded data (JSON) is available (as applicable for the product type). 1. Cancelled - Order has been cancelled. The ordered product is not available for a cancelled order.  Third party software may cancel an outstanding order by changing this status to “Cancelled” via the Put Order service. 
        /// </summary>
        /// <value>Indicate the status for the order # One of:  1. Processing - Order has been created and is being processed.  Both the fielded data (JSON) and the PDF are not yet available. 1. Fulfilled - Order has been partially fulfilled.  Fielded data (JSON) is available, but PDF is not yet available. 1. Completed - Order has been fully completed.  PDF is available.  Fielded data (JSON) is available (as applicable for the product type). 1. Cancelled - Order has been cancelled. The ordered product is not available for a cancelled order.  Third party software may cancel an outstanding order by changing this status to “Cancelled” via the Put Order service. </value>
        [JsonConverter(typeof(JsonStringEnumMemberConverter))]
        public enum StatusEnum
        {
            /// <summary>
            /// Enum Processing for value: Processing
            /// </summary>
            [EnumMember(Value = "Processing")]
            Processing = 1,
            /// <summary>
            /// Enum Fulfilled for value: Fulfilled
            /// </summary>
            [EnumMember(Value = "Fulfilled")]
            Fulfilled = 2,
            /// <summary>
            /// Enum Completed for value: Completed
            /// </summary>
            [EnumMember(Value = "Completed")]
            Completed = 3,
            /// <summary>
            /// Enum Cancelled for value: Cancelled
            /// </summary>
            [EnumMember(Value = "Cancelled")]
            Cancelled = 4
        }
        /// <summary>
        /// Indicate the status for the order # One of:  1. Processing - Order has been created and is being processed.  Both the fielded data (JSON) and the PDF are not yet available. 1. Fulfilled - Order has been partially fulfilled.  Fielded data (JSON) is available, but PDF is not yet available. 1. Completed - Order has been fully completed.  PDF is available.  Fielded data (JSON) is available (as applicable for the product type). 1. Cancelled - Order has been cancelled. The ordered product is not available for a cancelled order.  Third party software may cancel an outstanding order by changing this status to “Cancelled” via the Put Order service. 
        /// </summary>
        /// <value>Indicate the status for the order # One of:  1. Processing - Order has been created and is being processed.  Both the fielded data (JSON) and the PDF are not yet available. 1. Fulfilled - Order has been partially fulfilled.  Fielded data (JSON) is available, but PDF is not yet available. 1. Completed - Order has been fully completed.  PDF is available.  Fielded data (JSON) is available (as applicable for the product type). 1. Cancelled - Order has been cancelled. The ordered product is not available for a cancelled order.  Third party software may cancel an outstanding order by changing this status to “Cancelled” via the Put Order service. </value>
        [DataMember(Name = "status", EmitDefaultValue = false)]
        public StatusEnum? Status { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="OrderParent" /> class.
        /// </summary>
        /// <param name="productType">Indicate the type of the search product requested for an order (required).</param>
        /// <param name="fileReference">This file reference will show in myLTSA account statements to identify the order transaction.</param>
        /// <param name="orderId">System generated unique identifier assigned to the order Read-only for third party software.</param>
        /// <param name="status">Indicate the status for the order # One of:  1. Processing - Order has been created and is being processed.  Both the fielded data (JSON) and the PDF are not yet available. 1. Fulfilled - Order has been partially fulfilled.  Fielded data (JSON) is available, but PDF is not yet available. 1. Completed - Order has been fully completed.  PDF is available.  Fielded data (JSON) is available (as applicable for the product type). 1. Cancelled - Order has been cancelled. The ordered product is not available for a cancelled order.  Third party software may cancel an outstanding order by changing this status to “Cancelled” via the Put Order service. .</param>
        /// <param name="billingInfo">billingInfo.</param>
        public OrderParent(ProductTypeEnum productType = default, string fileReference = default, string orderId = default, StatusEnum? status = default, BillingInfo billingInfo = default)
        {
            this.ProductType = productType;
            this.FileReference = fileReference;
            this.OrderId = orderId;
            this.Status = status;
            this.BillingInfo = billingInfo;
        }


        /// <summary>
        /// This file reference will show in myLTSA account statements to identify the order transaction
        /// </summary>
        /// <value>This file reference will show in myLTSA account statements to identify the order transaction</value>
        [DataMember(Name = "fileReference", EmitDefaultValue = false)]
        public string FileReference { get; set; }

        /// <summary>
        /// System generated unique identifier assigned to the order Read-only for third party software
        /// </summary>
        /// <value>System generated unique identifier assigned to the order Read-only for third party software</value>
        [DataMember(Name = "orderId", EmitDefaultValue = false)]
        public string OrderId { get; set; }


        /// <summary>
        /// Gets or Sets BillingInfo
        /// </summary>
        [DataMember(Name = "billingInfo", EmitDefaultValue = false)]
        public BillingInfo BillingInfo { get; set; }
    }
}
